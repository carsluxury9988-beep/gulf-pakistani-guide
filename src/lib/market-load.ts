import snapshot from "@/data/market-snapshot.json";
import type { Market } from "@/lib/format";

type UsdFile = { date?: string; usd?: Record<string, number> };
type XauFile = { date?: string; xau?: Record<string, number> };

const CODES = ["aed", "sar", "qar", "kwd", "omr", "bhd", "pkr"] as const;
const TTL_MS = 3 * 60 * 60 * 1000;

let cache: { at: number; data: Market } | null = null;

function pickUsd(raw: Record<string, number> | undefined) {
  if (!raw) return null;
  const usd = {} as Market["usd"];
  for (const code of CODES) {
    const value = raw[code];
    if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) return null;
    usd[code] = value;
  }
  return usd;
}

function snapshotMarket(): Market {
  const history = Object.entries(snapshot.history)
    .map(([date, usd]) => ({ date, usd: pickUsd(usd)! }))
    .filter((row) => row.usd)
    .sort((a, b) => a.date.localeCompare(b.date));
  return {
    asOf: snapshot.asOf,
    fetchedAt: `${snapshot.asOf}T12:00:00.000Z`,
    stale: true,
    source: `${snapshot.source} · last saved`,
    usd: pickUsd(snapshot.usd)!,
    xauUsd: snapshot.xauUsd,
    history,
  };
}

async function getJson<T>(url: string): Promise<T> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { accept: "application/json" },
    });
    if (!res.ok) throw new Error(String(res.status));
    return (await res.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

async function firstJson<T>(urls: string[]) {
  let last: unknown;
  for (const url of urls) {
    try {
      return await getJson<T>(url);
    } catch (error) {
      last = error;
    }
  }
  throw last instanceof Error ? last : new Error("fetch failed");
}

function historyDates(today: Date) {
  const dates: string[] = [];
  for (let days = 30; days >= 0; days -= 6) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - days);
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates;
}

export async function loadMarket(): Promise<Market> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
  const saved = snapshotMarket();
  try {
    const [usdFile, xauFile] = await Promise.all([
      firstJson<UsdFile>([
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json",
        "https://latest.currency-api.pages.dev/v1/currencies/usd.json",
      ]),
      firstJson<XauFile>([
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xau.min.json",
        "https://latest.currency-api.pages.dev/v1/currencies/xau.json",
      ]),
    ]);
    const usd = pickUsd(usdFile.usd);
    const xauUsd = xauFile.xau?.usd;
    if (!usd || typeof xauUsd !== "number" || xauUsd <= 0) throw new Error("bad payload");

    const dates = historyDates(new Date());
    const points = await Promise.all(
      dates.map(async (date) => {
        try {
          const file = await getJson<UsdFile>(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/usd.min.json`,
          );
          const row = pickUsd(file.usd);
          if (!row) return null;
          return { date: file.date || date, usd: row };
        } catch {
          return null;
        }
      }),
    );
    const history = points.filter((point): point is NonNullable<typeof point> => point !== null);
    const data: Market = {
      asOf: usdFile.date || xauFile.date || saved.asOf,
      fetchedAt: new Date().toISOString(),
      stale: false,
      source: "Mid-market via currency-api (fawazahmed0)",
      usd,
      xauUsd,
      history: history.length >= 2 ? history : saved.history,
    };
    cache = { at: Date.now(), data };
    return data;
  } catch {
    return saved;
  }
}
