export const OZ_GRAMS = 31.1034768;
export const TOLA_GRAMS = 11.6638;
export const KARATS = [24, 22, 21, 18] as const;
export type Karat = (typeof KARATS)[number];

const CODES = ["aed", "sar", "qar", "kwd", "omr", "bhd", "pkr"] as const;
export type FxCode = (typeof CODES)[number];

export type Market = {
  asOf: string;
  fetchedAt: string;
  stale: boolean;
  source: string;
  usd: Record<FxCode, number>;
  xauUsd: number;
  history: { date: string; usd: Record<FxCode, number> }[];
};

export function pkrPer(market: Market, code: string) {
  const c = code.toLowerCase() as FxCode;
  const unit = market.usd[c];
  if (!unit) return 0;
  return market.usd.pkr / unit;
}

export function formatMoney(value: number, digits = 2) {
  if (!Number.isFinite(value)) return "—";
  return value.toLocaleString("en-PK", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function formatRate(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "—";
  if (value >= 100) return formatMoney(value, 2);
  if (value >= 10) return formatMoney(value, 2);
  return formatMoney(value, 4);
}

export function formatWhen(iso: string, locale: "en" | "ur" = "en") {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "ur" ? "ur-PK" : "en-GB", {
    timeZone: "Asia/Karachi",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short",
  }).format(date);
}

export function formatDay(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export type GoldRow = {
  karat: Karat;
  gramLocal: number;
  tolaLocal: number;
  gramPkr: number;
  tolaPkr: number;
};

export function goldRows(market: Market, code: string): GoldRow[] {
  const localPerUsd = market.usd[code.toLowerCase() as FxCode];
  if (!localPerUsd || !market.xauUsd) return [];
  const localPerGram24 = (market.xauUsd * localPerUsd) / OZ_GRAMS;
  const toPkr = market.usd.pkr / localPerUsd;
  return KARATS.map((karat) => {
    const gramLocal = localPerGram24 * (karat / 24);
    const tolaLocal = gramLocal * TOLA_GRAMS;
    return {
      karat,
      gramLocal,
      tolaLocal,
      gramPkr: gramLocal * toPkr,
      tolaPkr: tolaLocal * toPkr,
    };
  });
}

export function historyFor(market: Market, code: string) {
  const c = code.toLowerCase() as FxCode;
  return market.history
    .map((point) => {
      const unit = point.usd[c];
      const pkr = point.usd.pkr;
      if (!unit || !pkr) return null;
      return { date: point.date, value: pkr / unit };
    })
    .filter((point): point is { date: string; value: number } => point !== null)
    .sort((a, b) => a.date.localeCompare(b.date));
}
