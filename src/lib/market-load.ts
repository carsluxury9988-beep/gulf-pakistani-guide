import snapshot from "@/data/market-snapshot.json";
import seedGold from "@/data/local-gold.json";
import type { DubaiGold, Market, PakistanGold } from "@/lib/format";
import { readStoredMarket, readStoredRecord, writeStoredMarket } from "@/lib/market-store";

type UsdFile = { date?: string; usd?: Record<string, number> };
type XauFile = { date?: string; xau?: Record<string, number> };

const CODES = ["aed", "sar", "qar", "kwd", "omr", "bhd", "pkr"] as const;
const TTL_MS = 3 * 60 * 60 * 1000;

let cache: { at: number; data: Market } | null = null;
let pending: Promise<Market> | null = null;

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

function numEnv(name: string) {
  const raw = process.env[name];
  if (!raw) return null;
  const value = Number(raw);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function seedPakistan(stale: boolean): PakistanGold {
  return {
    asOf: seedGold.pakistan.asOf,
    source: seedGold.pakistan.source,
    sourceUrl: seedGold.pakistan.sourceUrl,
    tola24: seedGold.pakistan.tola24,
    tola22: seedGold.pakistan.tola22,
    stale,
  };
}

function seedDubai(stale: boolean): DubaiGold {
  return {
    asOf: seedGold.dubai.asOf,
    source: seedGold.dubai.source,
    sourceUrl: seedGold.dubai.sourceUrl,
    gram24: seedGold.dubai.gram24,
    gram22: seedGold.dubai.gram22,
    gram21: seedGold.dubai.gram21,
    gram18: seedGold.dubai.gram18,
    stale,
  };
}

function adminBoards(): { pakistan: PakistanGold | null; dubai: DubaiGold | null } {
  const tola24 = numEnv("GOLD_PK_TOLA_24");
  const tola22 = numEnv("GOLD_PK_TOLA_22");
  const gram24 = numEnv("GOLD_DXB_GRAM_24");
  const gram22 = numEnv("GOLD_DXB_GRAM_22");
  const now = new Date().toISOString();
  return {
    pakistan:
      tola24 && tola22
        ? {
            asOf: process.env.GOLD_PK_ASOF || now,
            source: process.env.GOLD_PK_SOURCE || "Sarafa rate entered by the editor",
            sourceUrl: process.env.GOLD_PK_SOURCE_URL || "https://www.pakgold.net/gold-rate-cities",
            tola24,
            tola22,
            stale: false,
          }
        : null,
    dubai:
      gram24 && gram22
        ? {
            asOf: process.env.GOLD_DXB_ASOF || now,
            source: process.env.GOLD_DXB_SOURCE || "Dubai retail rate entered by the editor",
            sourceUrl: process.env.GOLD_DXB_SOURCE_URL || "https://www.khaleejtimes.com/gold-forex",
            gram24,
            gram22,
            gram21: numEnv("GOLD_DXB_GRAM_21") ?? (gram22 * 21) / 22,
            gram18: numEnv("GOLD_DXB_GRAM_18") ?? gram24 * 0.75,
            stale: false,
          }
        : null,
  };
}

function parseBoardNumber(chunk: string) {
  const match = chunk.replace(/,/g, "").match(/(\d{2,7}(?:\.\d+)?)/);
  if (!match) return null;
  const value = Number(match[1]);
  return Number.isFinite(value) && value > 0 ? value : null;
}

async function fetchText(url: string) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: {
        accept: "text/html,application/json",
        "accept-language": "en",
        "user-agent": "Mozilla/5.0 (compatible; ApnaGharRates/1.0; +https://apnaaghar.pk)",
      },
    });
    if (!res.ok) throw new Error(String(res.status));
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

function labelledTola(html: string, id: string) {
  const match = html.match(new RegExp(`id="${id}"[^>]*>([\\d,]+)`));
  return match ? parseBoardNumber(match[1]) : null;
}

function dubaiStamp(label: string) {
  const match = label.match(/([A-Za-z]+) (\d{1,2}), (\d{4}) (\d{2}):(\d{2}):(\d{2})/);
  if (!match) return null;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months.indexOf(match[1]);
  if (month < 0) return null;
  return new Date(Date.UTC(
    Number(match[3]),
    month,
    Number(match[2]),
    Number(match[4]) - 4,
    Number(match[5]),
    Number(match[6]),
  )).toISOString();
}

/** Latest published slot for a karat row: evening, then afternoon, then morning. */
function dubaiKarat(html: string, karat: string) {
  const row = html.match(new RegExp(`\\{"type"\\s*:\\s*"${karat}"[^{}]*\\}`));
  if (!row) return null;
  for (const slot of ["evening", "afternoon", "morning"]) {
    const match = row[0].match(new RegExp(`"${slot}"\\s*:\\s*"([\\d.,]*)"`));
    if (!match || !match[1]) continue;
    const value = Number(match[1].replace(/,/g, ""));
    return Number.isFinite(value) && value > 200 && value < 900 ? value : null;
  }
  return null;
}

async function fetchPakistanBoard(): Promise<PakistanGold | null> {
  try {
    const html = await fetchText("https://www.pakgold.net/gold-rate-cities");
    let tola24 = labelledTola(html, "lbl_ssr_24k_tola");
    let tola22 = labelledTola(html, "lbl_ssr_22k_tola");
    if (!tola24 || !tola22) {
      const described = html.match(/24K\s*Rs\s*(\d{3},\d{3})\/tola,\s*22K\s*Rs\s*(\d{3},\d{3})/i);
      tola24 = tola24 ?? (described ? parseBoardNumber(described[1]) : null);
      tola22 = tola22 ?? (described ? parseBoardNumber(described[2]) : null);
    }
    if (!tola24 || !tola22 || tola24 < 100000 || tola22 < 100000 || tola22 >= tola24) {
      console.error("[gold] Pakistan Sarafa parse missed a 22K/24K tola");
      return null;
    }
    return {
      asOf: new Date().toISOString(),
      source: "Rawalpindi–Islamabad Sarafa benchmark (PakGold)",
      sourceUrl: "https://www.pakgold.net/gold-rate-cities",
      tola24,
      tola22,
      stale: false,
    };
  } catch (error) {
    console.error("[gold] Pakistan Sarafa fetch failed", error instanceof Error ? error.message : error);
    return null;
  }
}

async function fetchDubaiBoard(): Promise<DubaiGold | null> {
  try {
    const raw = await fetchText("https://www.khaleejtimes.com/gold-forex");
    const html = raw.replace(/\u0026quot;/g, '"');
    const gram24 = dubaiKarat(html, "24K");
    const gram22 = dubaiKarat(html, "22K");
    const gram21 = dubaiKarat(html, "21K");
    const gram18 = dubaiKarat(html, "18K");
    if (!gram24 || !gram22 || gram22 >= gram24) {
      console.error("[gold] Dubai board parse missed published 24K/22K grams");
      return null;
    }
    const dated = html.match(/goldRates"\s*:\s*\{\s*"date"\s*:\s*"([^"]+)"/);
    return {
      asOf: (dated && dubaiStamp(dated[1])) || new Date().toISOString(),
      source: "Khaleej Times UAE gold retail board",
      sourceUrl: "https://www.khaleejtimes.com/gold-forex",
      gram24,
      gram22,
      gram21: gram21 ?? 0,
      gram18: gram18 ?? 0,
      stale: false,
    };
  } catch (error) {
    console.error("[gold] Dubai board fetch failed", error instanceof Error ? error.message : error);
    return null;
  }
}

async function resolveLocalGold(previous: Market["localGold"] | null) {
  const admin = adminBoards();
  const [pakistanLive, dubaiLive] = await Promise.all([
    admin.pakistan ? Promise.resolve(admin.pakistan) : fetchPakistanBoard(),
    admin.dubai ? Promise.resolve(admin.dubai) : fetchDubaiBoard(),
  ]);
  const pakistan = pakistanLive ?? previous?.pakistan ?? seedPakistan(true);
  const dubai = dubaiLive ?? previous?.dubai ?? seedDubai(true);
  return {
    pakistan: pakistanLive ? pakistan : { ...pakistan, stale: true },
    dubai: dubaiLive ? dubai : { ...dubai, stale: true },
  };
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
    localGold: { pakistan: seedPakistan(true), dubai: seedDubai(true) },
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
  // Six-day steps for the trend chart, plus yesterday so the day-on-day move has a previous rate day.
  for (const days of [30, 24, 18, 12, 6, 1, 0]) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - days);
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates;
}

export async function loadMarket(opts?: { refresh?: boolean }): Promise<Market> {
  if (!opts?.refresh && cache && Date.now() - cache.at < TTL_MS) return cache.data;
  if (!opts?.refresh && pending) return pending;
  pending = loadFresh(opts).finally(() => {
    pending = null;
  });
  return pending;
}

async function loadFresh(opts?: { refresh?: boolean }): Promise<Market> {
  if (!opts?.refresh && cache && Date.now() - cache.at < TTL_MS) return cache.data;
  if (!opts?.refresh) {
    const stored = await readStoredRecord().catch(() => null);
    const savedAt = stored ? Date.parse(stored.savedAt) : Number.NaN;
    if (stored && Number.isFinite(savedAt) && Date.now() - savedAt < TTL_MS) {
      cache = { at: Date.now(), data: stored.market };
      return stored.market;
    }
  }
  const saved = snapshotMarket();
  try {
    const [usdFile, xauFile, stored] = await Promise.all([
      firstJson<UsdFile>([
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json",
        "https://latest.currency-api.pages.dev/v1/currencies/usd.json",
      ]),
      firstJson<XauFile>([
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xau.min.json",
        "https://latest.currency-api.pages.dev/v1/currencies/xau.json",
      ]),
      readStoredMarket().catch(() => null),
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
    const byDate = new Map<string, NonNullable<(typeof points)[number]>>();
    for (const point of points) if (point) byDate.set(point.date, point);
    const history = [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
    const localGold = await resolveLocalGold(stored?.localGold ?? null);
    const data: Market = {
      asOf: usdFile.date || xauFile.date || saved.asOf,
      fetchedAt: new Date().toISOString(),
      stale: false,
      source: "Mid-market via currency-api (fawazahmed0)",
      usd,
      xauUsd,
      history: history.length >= 2 ? history : saved.history,
      localGold,
    };
    cache = { at: Date.now(), data };
    void writeStoredMarket(data);
    return data;
  } catch {
    const stored = await readStoredMarket().catch(() => null);
    if (stored?.usd && stored.xauUsd) {
      cache = { at: Date.now(), data: stored };
      return stored;
    }
    return saved;
  }
}
