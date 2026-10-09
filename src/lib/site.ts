export const SITE_NAME = "GulfPK";

export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");

export const CONTACT_EMAIL = "hello@gulfpk.guide";

/** Monetisation stays off until you flip these flags. No affiliate links are shipped. */
export const features = {
  remittanceOffers: false,
  flightSearch: false,
  ads: false,
} as const;

export type Locale = "en" | "ur";

export type CategorySlug =
  | "jobs"
  | "visas"
  | "cost"
  | "money"
  | "rights"
  | "hajj"
  | "travel";

export const categories: { slug: CategorySlug; en: string; ur: string }[] = [
  { slug: "jobs", en: "Jobs", ur: "نوکریاں" },
  { slug: "visas", en: "Visas & Documents", ur: "ویزا اور دستاویزات" },
  { slug: "cost", en: "Cost of Living", ur: "گزارے کا خرچ" },
  { slug: "money", en: "Sending Money Home", ur: "پیسے بھیجنا" },
  { slug: "rights", en: "Rights & Labour Law", ur: "حقوق اور لیبر قانون" },
  { slug: "hajj", en: "Hajj & Umrah", ur: "حج و عمرہ" },
  { slug: "travel", en: "Travel Home", ur: "پاکستان کا سفر" },
];

export type Country = {
  slug: string;
  name: string;
  short: string;
  currency: string;
  currencyName: string;
  goldSlug: string;
  goldPlace: string;
  blurb: string;
  blurbUr: string;
};

export const countries: Country[] = [
  {
    slug: "uae",
    name: "United Arab Emirates",
    short: "UAE",
    currency: "AED",
    currencyName: "UAE dirham",
    goldSlug: "dubai",
    goldPlace: "Dubai",
    blurb:
      "Dirham rates, Dubai gold, and guides for work, visit visas, gratuity and sending money home.",
    blurbUr:
      "درہم کا ریٹ، دبئی کا سونا، اور نوکری، ویزٹ ویزا، گریچویٹی اور پیسے بھیجنے کی رہنما۔",
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    short: "Saudi Arabia",
    currency: "SAR",
    currencyName: "Saudi riyal",
    goldSlug: "saudi-arabia",
    goldPlace: "Saudi Arabia",
    blurb:
      "Riyal rates, gold, Iqama and work-visa guides for Pakistani workers and families.",
    blurbUr:
      "ریال کا ریٹ، سونا، اقامہ اور ورک ویزا — پاکستانی کارکنوں اور خاندانوں کے لیے۔",
  },
  {
    slug: "qatar",
    name: "Qatar",
    short: "Qatar",
    currency: "QAR",
    currencyName: "Qatari riyal",
    goldSlug: "qatar",
    goldPlace: "Qatar",
    blurb: "Qatari riyal rates, gold, and visa and job notes for Pakistanis in Qatar.",
    blurbUr: "قطری ریال، سونا، اور قطر میں پاکستانیوں کے لیے ویزا اور نوکری کی باتیں۔",
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    short: "Kuwait",
    currency: "KWD",
    currencyName: "Kuwaiti dinar",
    goldSlug: "kuwait",
    goldPlace: "Kuwait",
    blurb: "Kuwaiti dinar rates, gold, and practical notes for Pakistani workers in Kuwait.",
    blurbUr: "کویتی دینار، سونا، اور کویت میں پاکستانی کارکنوں کے لیے عملی باتیں۔",
  },
  {
    slug: "oman",
    name: "Oman",
    short: "Oman",
    currency: "OMR",
    currencyName: "Omani rial",
    goldSlug: "oman",
    goldPlace: "Oman",
    blurb: "Omani rial rates, gold, and visa and job notes for Pakistanis in Oman.",
    blurbUr: "عمانی ریال، سونا، اور عمان میں پاکستانیوں کے لیے ویزا اور نوکری کی باتیں۔",
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    short: "Bahrain",
    currency: "BHD",
    currencyName: "Bahraini dinar",
    goldSlug: "bahrain",
    goldPlace: "Bahrain",
    blurb: "Bahraini dinar rates, gold, and visa and job notes for Pakistanis in Bahrain.",
    blurbUr: "بحرینی دینار، سونا، اور بحرین میں پاکستانیوں کے لیے ویزا اور نوکری کی باتیں۔",
  },
];

export type Pair = {
  slug: string;
  code: string;
  name: string;
  countrySlug: string;
  peg: string;
};

export const pairs: Pair[] = [
  {
    slug: "aed-to-pkr",
    code: "AED",
    name: "UAE dirham",
    countrySlug: "uae",
    peg: "The UAE dirham is pegged to the US dollar at about 3.6725 dirhams per dollar. The dirham–rupee rate mostly follows the dollar–rupee rate.",
  },
  {
    slug: "sar-to-pkr",
    code: "SAR",
    name: "Saudi riyal",
    countrySlug: "saudi-arabia",
    peg: "The Saudi riyal is pegged to the US dollar at 3.75 riyals per dollar. The riyal–rupee rate mostly follows the dollar–rupee rate.",
  },
  {
    slug: "qar-to-pkr",
    code: "QAR",
    name: "Qatari riyal",
    countrySlug: "qatar",
    peg: "The Qatari riyal is pegged to the US dollar at about 3.64 riyals per dollar. The riyal–rupee rate mostly follows the dollar–rupee rate.",
  },
  {
    slug: "kwd-to-pkr",
    code: "KWD",
    name: "Kuwaiti dinar",
    countrySlug: "kuwait",
    peg: "The Kuwaiti dinar is a strong currency managed against a basket, not a simple one-number dollar peg. Small daily moves against the rupee are normal.",
  },
  {
    slug: "omr-to-pkr",
    code: "OMR",
    name: "Omani rial",
    countrySlug: "oman",
    peg: "The Omani rial has long been pegged to the US dollar. The rial–rupee rate mostly follows the dollar–rupee rate.",
  },
  {
    slug: "bhd-to-pkr",
    code: "BHD",
    name: "Bahraini dinar",
    countrySlug: "bahrain",
    peg: "The Bahraini dinar is pegged to the US dollar. The dinar–rupee rate mostly follows the dollar–rupee rate.",
  },
];

export type GoldPlace = {
  slug: string;
  code: string;
  name: string;
  countrySlug: string | null;
  note: string;
};

export const goldPlaces: GoldPlace[] = [
  {
    slug: "dubai",
    code: "AED",
    name: "Dubai",
    countrySlug: "uae",
    note: "This is the world spot price in dirhams, not the board price in the Gold Souk. Shops add making charges. Jewellery and investment bars are not taxed the same way. Ask for the all-in price per gram.",
  },
  {
    slug: "saudi-arabia",
    code: "SAR",
    name: "Saudi Arabia",
    countrySlug: "saudi-arabia",
    note: "This is the world spot price in riyals. A shop price includes making charges. Compare the rupee figure with the rate in Pakistan before you buy.",
  },
  {
    slug: "qatar",
    code: "QAR",
    name: "Qatar",
    countrySlug: "qatar",
    note: "This is the world spot price in Qatari riyals. Shop prices are higher once making charges are added.",
  },
  {
    slug: "kuwait",
    code: "KWD",
    name: "Kuwait",
    countrySlug: "kuwait",
    note: "This is the world spot price in Kuwaiti dinars. Confirm the shop’s per-gram price, including making, before you compare it with Pakistan.",
  },
  {
    slug: "oman",
    code: "OMR",
    name: "Oman",
    countrySlug: "oman",
    note: "This is the world spot price in Omani rials. Making charges are extra. The figure is indicative, not a shop quote.",
  },
  {
    slug: "bahrain",
    code: "BHD",
    name: "Bahrain",
    countrySlug: "bahrain",
    note: "This is the world spot price in Bahraini dinars. Ask the shop for the full price per gram before you decide.",
  },
  {
    slug: "pakistan",
    code: "PKR",
    name: "Pakistan",
    countrySlug: null,
    note: "This is the world spot price in rupees. Jewellers in Pakistan add making charges, so the board price for jewellery is higher than this spot figure.",
  },
];

export type CostLine = { id: string; en: string; ur: string; amount: number };

export type SalaryPreset = {
  id: string;
  en: string;
  ur: string;
  lines: CostLine[];
};

export type SalaryCountry = {
  code: string;
  countrySlug: string;
  presets: SalaryPreset[];
};

const line = (id: string, en: string, ur: string, amount: number): CostLine => ({
  id,
  en,
  ur,
  amount,
});

export const salaryCountries: SalaryCountry[] = [
  {
    code: "AED",
    countrySlug: "uae",
    presets: [
      {
        id: "single",
        en: "Single worker, shared room",
        ur: "اکیلے کارکن، مشترکہ کمرہ",
        lines: [
          line("rent", "Rent and housing", "کرایہ", 1800),
          line("food", "Food", "کھانا", 900),
          line("transport", "Transport", "سفر", 350),
          line("phone", "Phone and internet", "فون اور انٹرنیٹ", 200),
          line("other", "Other", "دیگر", 400),
        ],
      },
      {
        id: "family",
        en: "Family, one-bedroom flat",
        ur: "خاندان، ایک بیڈروم فلیٹ",
        lines: [
          line("rent", "Rent and housing", "کرایہ", 4500),
          line("food", "Food", "کھانا", 2200),
          line("transport", "Transport", "سفر", 700),
          line("phone", "Phone and internet", "فون اور انٹرنیٹ", 350),
          line("school", "School or childcare", "سکول", 1500),
          line("other", "Other", "دیگر", 800),
        ],
      },
    ],
  },
  {
    code: "SAR",
    countrySlug: "saudi-arabia",
    presets: [
      {
        id: "single",
        en: "Single worker, shared room",
        ur: "اکیلے کارکن، مشترکہ کمرہ",
        lines: [
          line("rent", "Rent and housing", "کرایہ", 1000),
          line("food", "Food", "کھانا", 800),
          line("transport", "Transport", "سفر", 250),
          line("phone", "Phone and internet", "فون اور انٹرنیٹ", 150),
          line("other", "Other", "دیگر", 350),
        ],
      },
      {
        id: "family",
        en: "Family in Riyadh",
        ur: "ریاض میں خاندان",
        lines: [
          line("rent", "Rent and housing", "کرایہ", 2500),
          line("food", "Food", "کھانا", 1800),
          line("transport", "Transport", "سفر", 600),
          line("phone", "Phone and internet", "فون اور انٹرنیٹ", 250),
          line("school", "School", "سکول", 1500),
          line("other", "Other", "دیگر", 600),
        ],
      },
    ],
  },
  {
    code: "QAR",
    countrySlug: "qatar",
    presets: [
      {
        id: "single",
        en: "Single worker",
        ur: "اکیلے کارکن",
        lines: [
          line("rent", "Rent and housing", "کرایہ", 1500),
          line("food", "Food", "کھانا", 900),
          line("transport", "Transport", "سفر", 300),
          line("phone", "Phone and internet", "فون اور انٹرنیٹ", 200),
          line("other", "Other", "دیگر", 400),
        ],
      },
    ],
  },
  {
    code: "KWD",
    countrySlug: "kuwait",
    presets: [
      {
        id: "single",
        en: "Single worker",
        ur: "اکیلے کارکن",
        lines: [
          line("rent", "Rent and housing", "کرایہ", 80),
          line("food", "Food", "کھانا", 60),
          line("transport", "Transport", "سفر", 20),
          line("phone", "Phone and internet", "فون اور انٹرنیٹ", 8),
          line("other", "Other", "دیگر", 25),
        ],
      },
    ],
  },
  {
    code: "OMR",
    countrySlug: "oman",
    presets: [
      {
        id: "single",
        en: "Single worker",
        ur: "اکیلے کارکن",
        lines: [
          line("rent", "Rent and housing", "کرایہ", 90),
          line("food", "Food", "کھانا", 70),
          line("transport", "Transport", "سفر", 20),
          line("phone", "Phone and internet", "فون اور انٹرنیٹ", 8),
          line("other", "Other", "دیگر", 25),
        ],
      },
    ],
  },
  {
    code: "BHD",
    countrySlug: "bahrain",
    presets: [
      {
        id: "single",
        en: "Single worker",
        ur: "اکیلے کارکن",
        lines: [
          line("rent", "Rent and housing", "کرایہ", 120),
          line("food", "Food", "کھانا", 80),
          line("transport", "Transport", "سفر", 25),
          line("phone", "Phone and internet", "فون اور انٹرنیٹ", 12),
          line("other", "Other", "دیگر", 30),
        ],
      },
    ],
  },
];

export function countryBySlug(slug: string) {
  return countries.find((c) => c.slug === slug) ?? null;
}

export function pairBySlug(slug: string) {
  return pairs.find((p) => p.slug === slug) ?? null;
}

export function goldBySlug(slug: string) {
  return goldPlaces.find((g) => g.slug === slug) ?? null;
}

export function categoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug) ?? null;
}

export function absUrl(path: string) {
  if (!SITE_URL) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function isUrduPath(pathname: string) {
  return pathname === "/ur" || pathname.startsWith("/ur/");
}

export function englishPath(pathname: string) {
  if (!isUrduPath(pathname)) return pathname || "/";
  const rest = pathname.slice(3);
  return rest.length ? rest : "/";
}

export function urduPath(pathname: string) {
  const en = englishPath(pathname);
  return en === "/" ? "/ur" : `/ur${en}`;
}

export function switchPath(pathname: string) {
  return isUrduPath(pathname) ? englishPath(pathname) : urduPath(pathname);
}
