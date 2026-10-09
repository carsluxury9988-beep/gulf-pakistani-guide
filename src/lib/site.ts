export const SITE_NAME = "Apna Ghar";

export const SITE_TAGLINE = "Guides, rates and tools for Pakistanis in the Gulf.";

export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://apnaaghar.pk").replace(/\/$/, "");

export const CONTACT_EMAIL = "salimpk742@gmail.com";

export const OWNER_NAME = "Salim Khan";

export const OWNER_CITY = "Islamabad, Pakistan";

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
  nameUr: string;
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
    nameUr: "متحدہ عرب امارات",
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
    nameUr: "سعودی عرب",
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
    nameUr: "قطر",
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
    nameUr: "کویت",
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
    nameUr: "عمان",
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
    nameUr: "بحرین",
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
  pegUr: string;
};

export const pairs: Pair[] = [
  {
    slug: "aed-to-pkr",
    code: "AED",
    name: "UAE dirham",
    countrySlug: "uae",
    peg: "The UAE dirham is pegged to the US dollar at about 3.6725 dirhams per dollar. The dirham–rupee rate mostly follows the dollar–rupee rate.",
    pegUr:
      "اماراتی درہم ڈالر سے تقریباً ۳.۶۷۲۵ درہم فی ڈالر کے حساب سے جڑا ہے۔ درہم اور روپے کا ریٹ زیادہ تر ڈالر اور روپے کے ریٹ کے ساتھ چلتا ہے۔",
  },
  {
    slug: "sar-to-pkr",
    code: "SAR",
    name: "Saudi riyal",
    countrySlug: "saudi-arabia",
    peg: "The Saudi riyal is pegged to the US dollar at 3.75 riyals per dollar. The riyal–rupee rate mostly follows the dollar–rupee rate.",
    pegUr:
      "سعودی ریال ڈالر سے ۳.۷۵ ریال فی ڈالر کے حساب سے جڑا ہے۔ ریال اور روپے کا ریٹ زیادہ تر ڈالر اور روپے کے ساتھ چلتا ہے۔",
  },
  {
    slug: "qar-to-pkr",
    code: "QAR",
    name: "Qatari riyal",
    countrySlug: "qatar",
    peg: "The Qatari riyal is pegged to the US dollar at about 3.64 riyals per dollar. The riyal–rupee rate mostly follows the dollar–rupee rate.",
    pegUr:
      "قطری ریال ڈالر سے تقریباً ۳.۶۴ ریال فی ڈالر کے حساب سے جڑا ہے۔ ریال اور روپے کا ریٹ زیادہ تر ڈالر اور روپے کے ساتھ چلتا ہے۔",
  },
  {
    slug: "kwd-to-pkr",
    code: "KWD",
    name: "Kuwaiti dinar",
    countrySlug: "kuwait",
    peg: "The Kuwaiti dinar is a strong currency managed against a basket, not a simple one-number dollar peg. Small daily moves against the rupee are normal.",
    pegUr:
      "کویتی دینار ایک ٹوکری کے مقابلے میں چلایا جاتا ہے، ایک سادہ ڈالر پیگ نہیں۔ روپے کے مقابلے میں چھوٹی روزانہ تبدیلی عام ہے۔",
  },
  {
    slug: "omr-to-pkr",
    code: "OMR",
    name: "Omani rial",
    countrySlug: "oman",
    peg: "The Omani rial has long been pegged to the US dollar. The rial–rupee rate mostly follows the dollar–rupee rate.",
    pegUr: "عمانی ریال عرصے سے امریکی ڈالر سے جڑا ہے۔ ریال اور روپے کا ریٹ زیادہ تر ڈالر اور روپے کے ساتھ چلتا ہے۔",
  },
  {
    slug: "bhd-to-pkr",
    code: "BHD",
    name: "Bahraini dinar",
    countrySlug: "bahrain",
    peg: "The Bahraini dinar is pegged to the US dollar. The dinar–rupee rate mostly follows the dollar–rupee rate.",
    pegUr: "بحرینی دینار امریکی ڈالر سے جڑا ہے۔ دینار اور روپے کا ریٹ زیادہ تر ڈالر اور روپے کے ساتھ چلتا ہے۔",
  },
];

export type GoldPlace = {
  slug: string;
  code: string;
  name: string;
  nameUr: string;
  countrySlug: string | null;
  note: string;
  noteUr: string;
};

export const goldPlaces: GoldPlace[] = [
  {
    slug: "dubai",
    code: "AED",
    name: "Dubai",
    nameUr: "دبئی",
    countrySlug: "uae",
    note: "Dubai’s published retail board (22K and 24K per gram) is shown separately from the world spot price. Shops still add making charges. Ask for the all-in price per gram.",
    noteUr:
      "دبئی کا شائع شدہ ریٹیل بورڈ (۲۲ اور ۲۴ قیراط فی گرام) عالمی اسپاٹ سے الگ دکھایا گیا ہے۔ دکان میکنگ چارجز الگ لگاتی ہے۔ فی گرام مکمل قیمت پوچھیں۔",
  },
  {
    slug: "saudi-arabia",
    code: "SAR",
    name: "Saudi Arabia",
    nameUr: "سعودی عرب",
    countrySlug: "saudi-arabia",
    note: "This is the world spot price in riyals. A shop price includes making charges. Compare the rupee figure with the Pakistan Sarafa rate before you buy.",
    noteUr: "یہ ریال میں عالمی اسپاٹ قیمت ہے۔ دکان کی قیمت میں میکنگ شامل ہوتی ہے۔ خریدنے سے پہلے پاکستان کے سرفہ ریٹ سے موازنہ کریں۔",
  },
  {
    slug: "qatar",
    code: "QAR",
    name: "Qatar",
    nameUr: "قطر",
    countrySlug: "qatar",
    note: "This is the world spot price in Qatari riyals. Shop prices are higher once making charges are added.",
    noteUr: "یہ قطری ریال میں عالمی اسپاٹ قیمت ہے۔ میکنگ چارجز کے بعد دکان کی قیمت زیادہ ہوتی ہے۔",
  },
  {
    slug: "kuwait",
    code: "KWD",
    name: "Kuwait",
    nameUr: "کویت",
    countrySlug: "kuwait",
    note: "This is the world spot price in Kuwaiti dinars. Confirm the shop’s per-gram price, including making, before you compare it with Pakistan.",
    noteUr: "یہ کویتی دینار میں عالمی اسپاٹ قیمت ہے۔ پاکستان سے موازنہ کرنے سے پہلے دکان کی فی گرام قیمت، میکنگ سمیت، پوچھیں۔",
  },
  {
    slug: "oman",
    code: "OMR",
    name: "Oman",
    nameUr: "عمان",
    countrySlug: "oman",
    note: "This is the world spot price in Omani rials. Making charges are extra. The figure is indicative, not a shop quote.",
    noteUr: "یہ عمانی ریال میں عالمی اسپاٹ قیمت ہے۔ میکنگ الگ ہے۔ یہ دکان کا کوٹ نہیں۔",
  },
  {
    slug: "bahrain",
    code: "BHD",
    name: "Bahrain",
    nameUr: "بحرین",
    countrySlug: "bahrain",
    note: "This is the world spot price in Bahraini dinars. Ask the shop for the full price per gram before you decide.",
    noteUr: "یہ بحرینی دینار میں عالمی اسپاٹ قیمت ہے۔ فیصلے سے پہلے دکان سے فی گرام مکمل قیمت پوچھیں۔",
  },
  {
    slug: "pakistan",
    code: "PKR",
    name: "Pakistan",
    nameUr: "پاکستان",
    countrySlug: null,
    note: "The Pakistan figure used for comparison is the Sarafa market rate per tola, not the world spot price converted into rupees. Jewellers still add making charges on jewellery.",
    noteUr:
      "موازنے کے لیے پاکستان کا ریٹ سرفہ مارکیٹ کا فی تولہ ریٹ ہے، عالمی اسپاٹ کو روپے میں بدلنا نہیں۔ زیورات پر سنار میکنگ الگ لگاتا ہے۔",
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

export function hrefFor(ur: boolean, path: string) {
  return ur ? urduPath(path) : path;
}

export function switchPath(pathname: string) {
  return isUrduPath(pathname) ? englishPath(pathname) : urduPath(pathname);
}
