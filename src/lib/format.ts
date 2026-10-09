export const OZ_GRAMS = 31.1034768;
export const TOLA_GRAMS = 11.6638;
export const KARATS = [24, 22, 21, 18] as const;
export type Karat = (typeof KARATS)[number];

const CODES = ["aed", "sar", "qar", "kwd", "omr", "bhd", "pkr"] as const;
export type FxCode = (typeof CODES)[number];

export type LocalQuote = {
  asOf: string;
  source: string;
  sourceUrl: string;
  stale: boolean;
};

export type PakistanGold = LocalQuote & {
  tola24: number;
  tola22: number;
};

export type DubaiGold = LocalQuote & {
  gram24: number;
  gram22: number;
  gram21: number;
  gram18: number;
};

export type Market = {
  asOf: string;
  fetchedAt: string;
  stale: boolean;
  source: string;
  usd: Record<FxCode, number>;
  xauUsd: number;
  history: { date: string; usd: Record<FxCode, number> }[];
  localGold: {
    pakistan: PakistanGold | null;
    dubai: DubaiGold | null;
  };
};

export function isFxCode(code: string): code is FxCode {
  return (CODES as readonly string[]).includes(code);
}

export function pkrPer(market: Market, code: string) {
  const c = code.toLowerCase();
  if (!isFxCode(c)) return 0;
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

export type GramLine = { karat: number; gram: number; ten: number; tola: number };

/** Per-gram quotes in the place's own money. Dubai uses the retail board. Pakistan uses Sarafa. Others use world spot. */
export function gramLines(market: Market, placeSlug: string, code: string): GramLine[] {
  const line = (karat: number, gram: number): GramLine => ({
    karat,
    gram,
    ten: gram * 10,
    tola: gram * TOLA_GRAMS,
  });
  if (placeSlug === "dubai" && market.localGold?.dubai) {
    const board = market.localGold.dubai;
    const published: Record<number, number> = {
      24: board.gram24,
      22: board.gram22,
      21: board.gram21,
      18: board.gram18,
    };
    return KARATS.filter((karat) => published[karat] > 0).map((karat) => line(karat, published[karat]));
  }
  if (placeSlug === "pakistan" && market.localGold?.pakistan) {
    const board = market.localGold.pakistan;
    const gram24 = board.tola24 / TOLA_GRAMS;
    const gram22 = board.tola22 / TOLA_GRAMS;
    return KARATS.map((karat) => line(karat, karat === 22 ? gram22 : gram24 * (karat / 24)));
  }
  return goldRows(market, code).map((row) => line(row.karat, row.gramLocal));
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

export function rateMove(market: Market, code: string) {
  const points = historyFor(market, code);
  if (points.length < 2) return null;
  const previous = points[points.length - 2];
  const latest = points[points.length - 1];
  return { delta: latest.value - previous.value, versus: previous.date };
}

export type BoardCompare = {
  pakistanTola22: number;
  pakistanTola24: number;
  dubaiGram22: number;
  dubaiGram24: number;
  dubaiTola22: number;
  dubaiTola22Pkr: number;
  dubaiTola24Pkr: number;
  cheaper: "pakistan" | "dubai";
  gapPkr: number;
};

/** Sarafa tola vs Dubai published retail, both in rupees. Null if either board is missing. */
export function boardCompare(market: Market): BoardCompare | null {
  const pk = market.localGold?.pakistan;
  const dxb = market.localGold?.dubai;
  if (!pk || !dxb) return null;
  const aed = pkrPer(market, "AED");
  if (!aed) return null;
  const dubaiTola22 = dxb.gram22 * TOLA_GRAMS;
  const dubaiTola24 = dxb.gram24 * TOLA_GRAMS;
  const dubaiTola22Pkr = dubaiTola22 * aed;
  const dubaiTola24Pkr = dubaiTola24 * aed;
  const gapPkr = pk.tola22 - dubaiTola22Pkr;
  return {
    pakistanTola22: pk.tola22,
    pakistanTola24: pk.tola24,
    dubaiGram22: dxb.gram22,
    dubaiGram24: dxb.gram24,
    dubaiTola22,
    dubaiTola22Pkr,
    dubaiTola24Pkr,
    cheaper: gapPkr <= 0 ? "pakistan" : "dubai",
    gapPkr: Math.abs(gapPkr),
  };
}
