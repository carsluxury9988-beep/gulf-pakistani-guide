import { A, Crumb, hrefFor, Page } from "@/components/shell";
import { AdSlot } from "@/components/monetize";
import { MiniChart } from "@/components/mini-chart";
import { Rich } from "@/components/rich-text";
import { FlightNotes, GratuityTool, RemittanceTool, SalaryTool } from "@/components/tools";
import { guides, guideBySlug } from "@/lib/content/catalog";
import { guideSeo } from "@/lib/content/seo-copy";
import type { GuidePayload } from "@/lib/content.fn";
import {
  boardCompare,
  formatDay,
  formatMoney,
  formatRate,
  formatWhen,
  goldRows,
  historyFor,
  pkrPer,
  type Market,
} from "@/lib/format";
import { breadcrumbLd, ld, pageMeta } from "@/lib/seo";
import {
  categories,
  categoryBySlug,
  CONTACT_EMAIL,
  countries,
  goldPlaces,
  OWNER_CITY,
  OWNER_NAME,
  pairs,
  SITE_NAME,
  SITE_TAGLINE,
  absUrl,
  type Country,
  type GoldPlace,
  type Locale,
  type Pair,
} from "@/lib/site";

function staleNote(market: Market, locale: Locale) {
  if (!market.stale) return null;
  return (
    <p className="rounded-lg border border-gold bg-gold-soft px-3 py-2 text-sm text-ink">
      {locale === "ur"
        ? `لائیو فیڈ نہیں ملا۔ آخری محفوظ ریٹ ${market.asOf} کے ہیں۔`
        : `The live feed did not respond. Showing the last saved rates from ${formatDay(market.asOf)}.`}
    </p>
  );
}

export function homeHead(locale: Locale): { meta: any[]; links: any[] } {
  const path = locale === "ur" ? "/ur" : "/";
  const title =
    locale === "ur"
      ? "آج کے خلیجی ریٹ، سونا اور رہنما | اپنا گھر"
      : "Today's Gulf Rates and Guides for Pakistanis | Apna Ghar";
  const description =
    locale === "ur"
      ? "خلیج میں پاکستانیوں کے لیے آج کے درہم، ریال، سونے کے بورڈ ریٹ اور عملی رہنما۔ بینک کا کوٹ نہیں۔"
      : "Today’s dirham, riyal and gold board rates, plus practical guides for Pakistanis working in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.";
  const meta = pageMeta({ title, description, path, locale });
  return {
    ...meta,
    meta: [
      ...meta.meta,
      ld({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: path,
      }),
    ],
  };
}

export function HomeView({ market, locale }: { market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const featured = guides.filter((guide) => guide.featured).slice(0, 6);
  const board = boardCompare(market);
  const dubaiGold = goldRows(market, "AED").find((row) => row.karat === 22);
  const pakGold = goldRows(market, "PKR").find((row) => row.karat === 22);
  return (
    <main>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-12">
          <div>
            <p className="text-sm font-semibold text-gold-ink">
              {ur ? "آج کا ڈیسک" : "Today’s desk"} · <span className="num">{formatDay(market.asOf)}</span>
            </p>
            <h1 className="mt-2 max-w-xl font-display text-4xl text-green sm:text-5xl">
              {ur ? "درہم، ریال اور تولہ آج کتنے کے ہیں۔" : "What a dirham, a riyal and a tola are worth today."}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted">
              {ur
                ? "خلیج میں کام کرنے والے پاکستانیوں کے لیے درمیانی ریٹ، سونا، اور نوکری، ویزا اور پیسے بھیجنے کی سیدھی بات۔"
                : "Mid-market rates, gold, and straight guides on jobs, visas and sending money home for Pakistanis working in the Gulf."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <A href={h("/rates")} className="inline-flex min-h-11 items-center rounded-md bg-green px-4 font-semibold text-on-green">
                {ur ? "آج کے ریٹ" : "Today’s rates"}
              </A>
              <A href={h("/guides")} className="inline-flex min-h-11 items-center rounded-md border border-green px-4 font-semibold text-green">
                {ur ? "رہنما پڑھیں" : "Read the guides"}
              </A>
            </div>
          </div>
          <div className="rounded-xl border border-line bg-bg p-4">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl text-green">{ur ? "سونا، بورڈ ریٹ" : "Gold, board rates"}</h2>
              <span className="text-sm text-muted">22K / {ur ? "تولہ" : "tola"}</span>
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-surface p-3">
                <dt className="text-sm text-muted">{ur ? "دبئی ریٹیل" : "Dubai retail"}</dt>
                <dd className="num text-2xl font-semibold text-ink">
                  AED {board ? formatMoney(board.dubaiTola22) : dubaiGold ? formatMoney(dubaiGold.tolaLocal) : "—"}
                </dd>
              </div>
              <div className="rounded-lg bg-surface p-3">
                <dt className="text-sm text-muted">{ur ? "پاکستان سرفہ" : "Pakistan Sarafa"}</dt>
                <dd className="num text-2xl font-semibold text-ink">
                  Rs {board ? formatMoney(board.pakistanTola22, 0) : pakGold ? formatMoney(pakGold.tolaPkr, 0) : "—"}
                </dd>
              </div>
            </dl>
            {board ? (
              <p className="mt-3 text-sm text-muted">
                {ur
                  ? board.cheaper === "pakistan"
                    ? `سرفہ تولہ دبئی کے ریٹیل سے تقریباً ${formatMoney(board.gapPkr, 0)} روپے سستا ہے۔`
                    : `دبئی کا ریٹیل تولہ سرفہ سے تقریباً ${formatMoney(board.gapPkr, 0)} روپے سستا ہے۔`
                  : board.cheaper === "pakistan"
                    ? `The Sarafa tola is about Rs ${formatMoney(board.gapPkr, 0)} under Dubai retail.`
                    : `Dubai retail is about Rs ${formatMoney(board.gapPkr, 0)} under the Sarafa tola.`}
              </p>
            ) : null}
            <A href={h("/gold-rates")} className="mt-3 inline-flex min-h-11 items-center font-semibold text-green">
              {ur ? "سونا کہاں سستا ہے" : "Where gold is cheaper"}
            </A>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-8">
        {staleNote(market, locale)}
        <div className="mt-4 flex items-end justify-between gap-3">
          <h2 className="font-display text-3xl text-green">{ur ? "آج کے ریٹ" : "Today’s rates"}</h2>
          <p className="text-sm text-muted num">{formatWhen(market.fetchedAt, locale)}</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          {pairs.map((pair) => (
            <A key={pair.slug} href={h(`/rates/${pair.slug}`)} className="rounded-xl border border-line bg-surface p-4 hover:border-green">
              <p className="text-sm text-muted">{pair.code} → PKR</p>
              <p className="num mt-1 text-2xl font-semibold">{formatRate(pkrPer(market, pair.code))}</p>
              <p className="text-sm text-gold-ink">{ur ? "روپے فی 1" : "rupees per 1"}</p>
            </A>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="font-display text-3xl text-green">{ur ? "ملک چنیں" : "Pick a country"}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <A key={country.slug} href={h(`/${country.slug}`)} className="rounded-xl border border-line bg-surface p-4 hover:border-green">
                <p className="font-display text-2xl text-green">{country.short}</p>
                <p className="mt-1 text-sm text-muted">{ur ? country.blurbUr : country.blurb}</p>
                <p className="num mt-3 font-semibold">{country.currency} {formatRate(pkrPer(market, country.currency))}</p>
              </A>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["/tools/salary-converter", ur ? "تنخواہ" : "Salary", ur ? "روپے اور بچت" : "Rupees and what’s left"],
            ["/tools/gratuity-calculator", ur ? "گریچویٹی" : "Gratuity", ur ? "یو اے ای اور سعودی" : "UAE and Saudi"],
            ["/tools/remittance", ur ? "ترسیل" : "Remittance", ur ? "دو کوٹ کا حساب" : "Compare two quotes"],
            ["/gold-rates", ur ? "سونا" : "Gold", ur ? "گرام اور تولہ" : "Gram and tola"],
          ].map(([href, title, lede]) => (
            <A key={href} href={h(href)} className="rounded-xl bg-green p-4 text-on-green">
              <p className="font-display text-2xl">{title}</p>
              <p className="mt-1 text-on-green/85">{lede}</p>
            </A>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="font-display text-3xl text-green">{ur ? "تازہ رہنما" : "Latest guides"}</h2>
          <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-surface">
            {featured.map((guide) => (
              <li key={guide.slug}>
                <A href={h(`/guides/${guide.slug}`)} className="block px-4 py-4 hover:bg-gold-soft">
                  <p className="text-sm font-semibold text-gold-ink">{ur ? categoryBySlug(guide.category)?.ur : categoryBySlug(guide.category)?.en}</p>
                  <p className="mt-1 text-lg font-semibold text-ink">{ur && guide.urTitle ? guide.urTitle : guide.title}</p>
                </A>
              </li>
            ))}
          </ul>
        </div>
        <AdSlot />
      </section>
    </main>
  );
}

const countryTitles: Record<string, string> = {
  uae: "Live UAE Dirham Rates, Gold and Guides | Apna Ghar",
  "saudi-arabia": "Saudi Arabia Rates, Gold and Job Guides | Apna Ghar",
  qatar: "Qatar Riyal Rates, Gold and Visa Guides | Apna Ghar",
  kuwait: "Kuwait Dinar Rates, Gold and Job Guides | Apna Ghar",
  oman: "Live Oman Rial Rates, Gold and Visa Guides | Apna Ghar",
  bahrain: "Live Bahrain Dinar Rates, Gold and Guides | Apna Ghar",
};

const countryDescriptions: Record<string, string> = {
  uae: "UAE dirham to rupee, Dubai gold, and guides on work, visit visas, gratuity and sending money home. Rates on this hub are indicative only. Check them.",
  "saudi-arabia": "Saudi riyal to rupee, gold, and Iqama and work-visa guides for Pakistani workers and families. Mid-market figures, not a bank quote. Check first.",
  qatar: "Qatari riyal to rupee, gold, and visa and job notes for Pakistanis in Qatar. Figures are mid-market or spot. Making charges are extra on jewellery.",
  kuwait: "Kuwaiti dinar to rupee, gold, and practical notes for Pakistani workers in Kuwait. Check your own receipt before you send money or buy gold.",
  oman: "Omani rial to rupee, gold, and visa and job notes for Pakistanis in Oman. These are mid-market rates. A bank will not match them exactly. Check.",
  bahrain: "Bahraini dinar to rupee, gold, and visa and job notes for Pakistanis in Bahrain. Indicative rates, with the country guides linked below. Check.",
};

export function countryHead(country: Country, locale: Locale) {
  const ur = locale === "ur";
  const path = hrefFor(ur, `/${country.slug}`);
  const title = ur ? `${country.short}: ریٹ، سونا اور رہنما` : (countryTitles[country.slug] ?? `${country.short} rates and guides`);
  const description = ur
    ? country.blurbUr
    : countryDescriptions[country.slug];
  const base = pageMeta({ title, description, path, locale });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: ur ? "ہوم" : "Home", path: ur ? "/ur" : "/" },
        { name: country.short, path },
      ]),
    ],
  };
}

export function CountryView({ country, market, locale }: { country: Country; market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const list = guides.filter((guide) => guide.countries.includes(country.slug)).slice(0, 8);
  const gold = goldRows(market, country.currency).find((row) => row.karat === 22);
  return (
    <Page
      kicker={country.currency}
      title={ur ? `${country.short} میں پاکستانی` : `Pakistanis in ${country.short}`}
      lede={ur ? country.blurbUr : country.blurb}
    >
      <Crumb
        items={[
          { href: h("/"), label: ur ? "ہوم" : "Home" },
          { label: country.short },
        ]}
      />
      {staleNote(market, locale)}
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <A href={h(`/rates/${country.currency.toLowerCase()}-to-pkr`)} className="rounded-xl border border-line bg-surface p-4">
          <p className="text-sm text-muted">1 {country.currency}</p>
          <p className="num text-3xl font-semibold">Rs {formatRate(pkrPer(market, country.currency))}</p>
        </A>
        <A href={h(`/gold-rates/${country.goldSlug}`)} className="rounded-xl border border-line bg-surface p-4">
          <p className="text-sm text-muted">22K {ur ? "تولہ" : "tola"}</p>
          <p className="num text-3xl font-semibold">{country.currency} {gold ? formatMoney(gold.tolaLocal) : "—"}</p>
        </A>
        <A href={h("/tools/salary-converter")} className="rounded-xl bg-green p-4 text-on-green">
          <p className="font-display text-2xl">{ur ? "تنخواہ بدلیں" : "Convert a salary"}</p>
          <p className="text-sm text-on-green/85">{ur ? "روپے اور بچت" : "See rupees and savings"}</p>
        </A>
      </div>
      <h2 className="mt-8 font-display text-2xl text-green">{ur ? "رہنما" : "Guides"}</h2>
      <ul className="mt-3 divide-y divide-line rounded-xl border border-line bg-surface">
        {list.map((guide) => (
          <li key={guide.slug}>
            <A href={h(`/guides/${guide.slug}`)} className="block px-4 py-3 font-semibold">
              {ur && guide.urTitle ? guide.urTitle : guide.title}
            </A>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export function ratesHead(locale: Locale) {
  const ur = locale === "ur";
  const path = hrefFor(ur, "/rates");
  const title = ur ? "خلیجی کرنسی سے پاکستانی روپیہ | اپنا گھر" : "Gulf Currency Rates to Pakistani Rupee | Apna Ghar";
  const description = ur
    ? "درہم، ریال، دینار اور عمانی ریال کے درمیانی ریٹ، آخری اپڈیٹ کے ساتھ۔ بینک کا سودا نہیں۔"
    : "Mid-market dirham, riyal, dinar and Omani rial rates against the Pakistani rupee, with the last update and a note on each currency peg. Indicative.";
  const base = pageMeta({ title, description, path, locale });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: ur ? "ہوم" : "Home", path: ur ? "/ur" : "/" },
        { name: ur ? "ریٹس" : "Rates", path },
      ]),
    ],
  };
}

export function RatesIndex({ market, locale }: { market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  return (
    <Page
      kicker={ur ? "کرنسی" : "Currency"}
      title={ur ? "آج خلیجی کرنسی کتنے روپے ہے" : "Gulf currencies in rupees today"}
      lede={
        ur
          ? "یہ درمیانی ریٹ ہیں۔ آپ کا بینک یا ایکسچینج اس سے کم دے گا۔"
          : "These are mid-market rates. Your bank or exchange will usually give you less."
      }
    >
      {staleNote(market, locale)}
      <p className="mt-3 text-sm text-muted">
        {ur ? "آخری جانچ" : "Last checked"}: <span className="num">{formatWhen(market.fetchedAt, locale)}</span>
        {" · "}
        {market.source}
      </p>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="w-full min-w-[20rem] text-left">
          <thead className="bg-gold-soft text-sm">
            <tr>
              <th className="px-4 py-3">{ur ? "کرنسی" : "Currency"}</th>
              <th className="px-4 py-3">{ur ? "1 یونٹ = روپے" : "1 unit in PKR"}</th>
              <th className="px-4 py-3">{ur ? "1000 روپے خریدتے ہیں" : "Rs 1,000 buys"}</th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((pair) => {
              const rate = pkrPer(market, pair.code);
              return (
                <tr key={pair.slug} className="border-t border-line">
                  <td className="px-4 py-3">
                    <A href={h(`/rates/${pair.slug}`)} className="font-semibold text-green underline decoration-gold">
                      {pair.code}
                    </A>
                    <div className="text-sm text-muted">{pair.name}</div>
                  </td>
                  <td className="num px-4 py-3 text-lg">{formatRate(rate)}</td>
                  <td className="num px-4 py-3">{rate ? formatRate(1000 / rate) : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Page>
  );
}

const pairTitles: Record<string, string> = {
  AED: "AED to PKR Today: Dirham to Rupee Rate | Apna Ghar",
  SAR: "SAR to PKR Today: Saudi Riyal to Rupee | Apna Ghar",
  QAR: "QAR to PKR Today: Qatari Riyal to Rupee | Apna Ghar",
  KWD: "KWD to PKR Today: Kuwaiti Dinar to Rupee | Apna Ghar",
  OMR: "OMR to PKR Today: Omani Rial to Rupee Rate | Apna Ghar",
  BHD: "BHD to PKR Today: Bahraini Dinar to Rupee | Apna Ghar",
};

const PAIR_AMOUNTS = [100, 500, 1000, 5000];

function pairFaqs(pair: Pair, rate: number, ur: boolean) {
  const money = (n: number) => (rate ? formatMoney(n * rate) : "—");
  if (ur) {
    return [
      { q: `آج 1 ${pair.code} کتنے روپے ہے؟`, a: `درمیانی ریٹ ${formatRate(rate)} روپے فی 1 ${pair.code} ہے۔ یہ بینک یا ایکسچینج کا سودا نہیں۔` },
      { q: `1000 ${pair.code} کتنے روپے بنتے ہیں؟`, a: `اسی درمیانی ریٹ پر 1,000 ${pair.code} تقریباً ${money(1000)} روپے۔ رسید کا ریٹ الگ ہوگا۔` },
      { q: "میرا ایکسچینج کم کیوں دیتا ہے؟", a: "یہ صفحہ درمیانی ریٹ دکھاتا ہے۔ دکان فیس یا کمزور ریٹ کے ذریعے کٹوتی کرتی ہے۔ بھیجنے سے پہلے روپے گنیں۔" },
      { q: `${pair.code} روزانہ کیوں بدلتا ہے؟`, a: pair.pegUr },
      { q: "کیا یہ خرید و فروخت کا ریٹ ہے؟", a: "نہیں۔ لین دین سے پہلے اپنے بینک یا ایکسچینج کی رسید دیکھیں۔" },
    ];
  }
  return [
    { q: `What is 1 ${pair.code} in PKR today?`, a: `The mid-market rate is ${formatRate(rate)} Pakistani rupees for 1 ${pair.code}. It is not a bank quote.` },
    { q: `How many rupees is 1,000 ${pair.code}?`, a: `At this mid-market rate, 1,000 ${pair.code} is about Rs ${money(1000)}. Your receipt will usually be a bit less.` },
    { q: "Why does my exchange pay less?", a: "This page shows the mid-market rate. A bank or exchange takes a cut through the fee or a weaker rate. Count the rupees you will actually receive." },
    { q: `Why does ${pair.code} move against the rupee?`, a: pair.peg },
    { q: "Is this a buy or sell rate?", a: "No. Check the rate on your bank or exchange receipt before you send money or change cash." },
  ];
}

export function pairHead(pair: Pair, locale: Locale, rate = 0): { meta: any[]; links: any[] } {
  const ur = locale === "ur";
  const path = hrefFor(ur, `/rates/${pair.slug}`);
  const title = ur ? `${pair.code} سے روپیہ آج | اپنا گھر` : pairTitles[pair.code];
  const description = ur
    ? `${pair.name} کا آج کا درمیانی ریٹ، ۱۰۰ سے ۵۰۰۰ کا جدول، اور تیس دن کا رجحان۔ یہ بینک کا کوٹ نہیں۔`
    : `Today’s ${pair.name} to Pakistani rupee mid-market rate, a 100 to 5,000 table, the peg, and a 30-day trend. Indicative, not a bank quote. Check it.`;
  const base = pageMeta({ title, description, path, locale });
  const faqs = pairFaqs(pair, rate, ur);
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: ur ? "ہوم" : "Home", path: ur ? "/ur" : "/" },
        { name: ur ? "ریٹس" : "Rates", path: hrefFor(ur, "/rates") },
        { name: `${pair.code} to PKR`, path },
      ]),
      ld({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }),
    ],
  };
}

export function PairView({ pair, market, locale }: { pair: Pair; market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const rate = pkrPer(market, pair.code);
  const history = historyFor(market, pair.code);
  const country = countries.find((item) => item.slug === pair.countrySlug);
  const moneyGuide = pair.code === "SAR" ? "send-money-saudi-to-pakistan" : pair.code === "AED" ? "send-money-uae-to-pakistan" : "roshan-digital-account";
  return (
    <Page
      kicker={ur ? "درمیانی ریٹ" : "Mid-market rate"}
      title={`${pair.code} to PKR`}
      lede={ur ? pair.pegUr : pair.peg}
    >
      <Crumb
        items={[
          { href: h("/"), label: ur ? "ہوم" : "Home" },
          { href: h("/rates"), label: ur ? "ریٹس" : "Rates" },
          { label: `${pair.code} / PKR` },
        ]}
      />
      <div className="mt-4">
        {staleNote(market, locale)}
        <p className="mt-4 num font-display text-5xl text-green">{formatRate(rate)}</p>
        <p className="text-muted">{ur ? "روپے فی 1" : "Pakistani rupees for 1"} {pair.code}</p>
        <p className="mt-2 text-sm text-muted">
          {ur ? "آخری جانچ" : "Last updated"}: <span className="num">{formatWhen(market.fetchedAt, locale)}</span>
          {market.stale ? (ur ? " · محفوظ شدہ" : " · saved copy") : ""}
        </p>
        <p className="num mt-2 text-sm">1,000 PKR = {rate ? formatRate(1000 / rate) : "—"} {pair.code}</p>
      </div>
      <h2 className="mt-8 font-display text-2xl">{ur ? "تبدیلی کا جدول" : "Conversion table"}</h2>
      <p className="mt-2 max-w-2xl text-muted">
        {ur
          ? "یہ درمیانی ریٹ پر حساب ہے۔ آپ کے بینک یا ایکسچینج کی رسید اس سے کم روپے دکھا سکتی ہے۔"
          : "These rupee amounts use the mid-market rate above. A bank or exchange receipt is usually lower, because the fee or the rate is worse."}
      </p>
      <div className="mt-3 overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="w-full min-w-[18rem] text-left">
          <thead className="bg-gold-soft text-sm">
            <tr>
              <th className="px-4 py-3">{pair.code}</th>
              <th className="px-4 py-3">{ur ? "روپے" : "Pakistani rupees"}</th>
            </tr>
          </thead>
          <tbody>
            {PAIR_AMOUNTS.map((amount) => (
              <tr key={amount} className="border-t border-line">
                <td className="num px-4 py-3">{formatMoney(amount, 0)}</td>
                <td className="num px-4 py-3">{rate ? formatMoney(amount * rate) : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-8 font-display text-2xl">{ur ? "تیس دن کا رجحان" : "30-day trend"}</h2>
      <div className="mt-3 rounded-xl border border-line bg-surface p-3">
        <MiniChart points={history} label={`${pair.code} to PKR`} />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {country ? (
          <A href={h(`/gold-rates/${country.goldSlug}`)} className="inline-flex min-h-11 items-center rounded-md bg-green px-4 text-on-green">
            {ur ? "سونے کا ریٹ" : `${country.goldPlace} gold`}
          </A>
        ) : null}
        <A href={h("/tools/salary-converter")} className="inline-flex min-h-11 items-center rounded-md border border-green px-4 text-green">
          {ur ? "تنخواہ" : "Salary converter"}
        </A>
        <A href={h(`/guides/${moneyGuide}`)} className="inline-flex min-h-11 items-center rounded-md border border-line px-4">
          {ur ? "پیسے بھیجنا" : "Sending money home"}
        </A>
      </div>
      <p className="mt-6 max-w-2xl text-muted">
        {ur
          ? "لین دین سے پہلے بینک یا ایکسچینج کا ریٹ دیکھیں۔ یہ صفحہ خرید و فروخت کا سودا نہیں۔"
          : "Check the rate on your bank or exchange receipt before you send money. This page is not an offer to buy or sell currency."}
      </p>
      <section className="mt-8 max-w-3xl">
        <h2 className="font-display text-2xl text-green">{ur ? "عام سوال" : "Common questions"}</h2>
        <div className="mt-3 grid gap-3">
          {pairFaqs(pair, rate, ur).map((faq) => (
            <details key={faq.q} className="rounded-lg border border-line bg-surface px-4 py-3">
              <summary className="cursor-pointer font-semibold">{faq.q}</summary>
              <p className="mt-2 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </Page>
  );
}

const goldTitles: Record<string, string> = {
  dubai: "Dubai Gold Rate Today: 22K and 24K Retail | Apna Ghar",
  "saudi-arabia": "Saudi Arabia Gold Rate Today: 22K and 24K | Apna Ghar",
  qatar: "Qatar Gold Rate Today: 22K and 24K Price | Apna Ghar",
  kuwait: "Kuwait Gold Rate Today: 22K and 24K Board | Apna Ghar",
  oman: "Oman Gold Rate Today: 22K and 24K Price | Apna Ghar",
  bahrain: "Bahrain Gold Rate Today: 22K and 24K Board | Apna Ghar",
  pakistan: "Pakistan Gold Rate Today: Sarafa 22K Tola | Apna Ghar",
};

function goldAppLd(name: string, path: string) {
  return ld({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: absUrl(path),
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
    provider: { "@type": "Organization", name: SITE_NAME },
  });
}

export function goldHead(locale: Locale) {
  const ur = locale === "ur";
  const path = hrefFor(ur, "/gold-rates");
  const title = ur ? "آج سونا کہاں سستا ہے: دبئی اور سرفہ" : "Gold Rates Today: Where Gold Is Cheaper | Apna Ghar";
  const description = ur
    ? "دبئی کا شائع شدہ ۲۲ قیراط ریٹیل اور پاکستان کا سرفہ تولہ، الگ الگ۔ عالمی اسپاٹ اکیلے موازنہ نہیں۔"
    : "Dubai’s published 22K retail price beside the Pakistan Sarafa tola, so the rupee gap is a real board difference, not one spot price. Making is extra.";
  const base = pageMeta({ title, description, path, locale });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: ur ? "ہوم" : "Home", path: ur ? "/ur" : "/" },
        { name: ur ? "سونا" : "Gold", path },
      ]),
      goldAppLd(title, path),
    ],
  };
}

export function GoldIndex({ market, locale }: { market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const board = boardCompare(market);
  const pk = market.localGold?.pakistan;
  const dxb = market.localGold?.dubai;
  const rows = goldPlaces.map((place) => {
    const row = goldRows(market, place.code).find((item) => item.karat === 22);
    let pkr = row?.tolaPkr ?? 0;
    let local = row?.tolaLocal ?? 0;
    let kind = ur ? "اسپاٹ" : "Spot";
    if (place.slug === "pakistan" && pk) {
      pkr = pk.tola22;
      local = pk.tola22;
      kind = ur ? "سرفہ" : "Sarafa";
    }
    if (place.slug === "dubai" && board) {
      local = board.dubaiTola22;
      pkr = board.dubaiTola22Pkr;
      kind = ur ? "ریٹیل" : "Retail";
    }
    return { place, pkr, local, kind };
  });
  return (
    <Page
      kicker={ur ? "بورڈ" : "Board vs spot"}
      title={ur ? "آج سونا کہاں سستا ہے" : "Where gold is cheaper today"}
      lede={
        ur
          ? "پاکستان کا سرفہ ریٹ اور دبئی کا شائع شدہ ریٹیل بورڈ الگ ہیں۔ باقی ممالک عالمی اسپاٹ ہیں۔ میکنگ الگ ہے۔"
          : "Pakistan uses the Sarafa tola. Dubai uses the published retail board. Other countries stay on world spot. Making charges are extra."
      }
    >
      <Crumb
        items={[
          { href: h("/"), label: ur ? "ہوم" : "Home" },
          { label: ur ? "سونا" : "Gold" },
        ]}
      />
      {staleNote(market, locale)}
      {board ? (
        <p className="mt-4 max-w-2xl">
          {ur
            ? board.cheaper === "pakistan"
              ? `۲۲ قیراط کا تولہ پاکستان کے سرفہ پر دبئی کے ریٹیل سے تقریباً ${formatMoney(board.gapPkr, 0)} روپے کم ہے۔`
              : `۲۲ قیراط کا تولہ دبئی کے ریٹیل بورڈ پر سرفہ سے تقریباً ${formatMoney(board.gapPkr, 0)} روپے کم ہے۔`
            : board.cheaper === "pakistan"
              ? `A 22K tola is about Rs ${formatMoney(board.gapPkr, 0)} cheaper on the Pakistan Sarafa board than Dubai’s published retail price.`
              : `A 22K tola is about Rs ${formatMoney(board.gapPkr, 0)} cheaper on Dubai’s published retail board than the Pakistan Sarafa rate.`}
        </p>
      ) : null}
      <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="w-full min-w-[22rem] text-left">
          <thead className="bg-gold-soft text-sm">
            <tr>
              <th className="px-4 py-3">{ur ? "جگہ" : "Place"}</th>
              <th className="px-4 py-3">{ur ? "قسم" : "Kind"}</th>
              <th className="px-4 py-3">22K {ur ? "تولہ" : "tola"}</th>
              <th className="px-4 py-3">{ur ? "روپوں میں" : "In PKR"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.place.slug} className="border-t border-line">
                <td className="px-4 py-3">
                  <A href={h(`/gold-rates/${row.place.slug}`)} className="font-semibold text-green underline decoration-gold">
                    {row.place.name}
                  </A>
                </td>
                <td className="px-4 py-3 text-sm">{row.kind}</td>
                <td className="num px-4 py-3">
                  {row.place.slug === "pakistan" ? "Rs" : row.place.code} {formatMoney(row.local, row.place.slug === "pakistan" ? 0 : 2)}
                </td>
                <td className="num px-4 py-3">Rs {formatMoney(row.pkr, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-muted">
        1 tola = 11.6638 g. {ur ? "کرنسی" : "FX"}: <span className="num">{formatWhen(market.fetchedAt, locale)}</span>
        {pk ? (
          <>
            {" · "}
            {ur ? "سرفہ" : "Sarafa"}:{" "}
            <a className="text-green underline" href={pk.sourceUrl}>
              {pk.source}
            </a>{" "}
            <span className="num">{formatWhen(pk.asOf, locale)}</span>
            {pk.stale ? (ur ? " · محفوظ" : " · saved") : ""}
          </>
        ) : null}
        {dxb ? (
          <>
            {" · "}
            {ur ? "دبئی" : "Dubai"}:{" "}
            <a className="text-green underline" href={dxb.sourceUrl}>
              {dxb.source}
            </a>{" "}
            <span className="num">{formatWhen(dxb.asOf, locale)}</span>
            {dxb.stale ? (ur ? " · محفوظ" : " · saved") : ""}
          </>
        ) : null}
      </p>
    </Page>
  );
}

export function goldPlaceHead(place: GoldPlace, locale: Locale) {
  const ur = locale === "ur";
  const path = hrefFor(ur, `/gold-rates/${place.slug}`);
  const title = ur ? `${place.name} میں سونے کا ریٹ آج` : goldTitles[place.slug];
  const description = ur
    ? `${place.name} میں ۲۴، ۲۲، ۲۱ اور ۱۸ قیراط، فی گرام اور فی تولہ۔ بورڈ ریٹ جہاں شائع ہو، ورنہ اسپاٹ۔`
    : `${place.name} 24K, 22K, 21K and 18K gold per gram and per tola, in local money and rupees. Indicative, and making charges are extra. Not a shop invoice.`;
  const base = pageMeta({ title, description, path, locale });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: ur ? "ہوم" : "Home", path: ur ? "/ur" : "/" },
        { name: ur ? "سونا" : "Gold", path: hrefFor(ur, "/gold-rates") },
        { name: place.name, path },
      ]),
      goldAppLd(title, path),
    ],
  };
}

export function GoldPlaceView({ place, market, locale }: { place: GoldPlace; market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const rows = goldRows(market, place.code);
  const pk = place.slug === "pakistan" ? market.localGold?.pakistan : null;
  const dxb = place.slug === "dubai" ? market.localGold?.dubai : null;
  const aed = pkrPer(market, "AED");
  return (
    <Page kicker={place.code} title={ur ? `${place.name} میں سونا` : `Gold rate in ${place.name}`} lede={ur ? place.noteUr : place.note}>
      <Crumb
        items={[
          { href: h("/"), label: ur ? "ہوم" : "Home" },
          { href: h("/gold-rates"), label: ur ? "سونا" : "Gold" },
          { label: place.name },
        ]}
      />
      {staleNote(market, locale)}
      {pk ? (
        <div className="mt-4 rounded-xl border border-gold bg-gold-soft p-4">
          <p className="font-semibold">{ur ? "پاکستان سرفہ بورڈ" : "Pakistan Sarafa board"}</p>
          <p className="num mt-2 text-3xl font-display text-green">Rs {formatMoney(pk.tola22, 0)} <span className="text-lg">22K / {ur ? "تولہ" : "tola"}</span></p>
          <p className="num mt-1">24K / {ur ? "تولہ" : "tola"}: Rs {formatMoney(pk.tola24, 0)}</p>
          <p className="mt-2 text-sm">
            <a className="text-green underline" href={pk.sourceUrl}>{pk.source}</a>
            {" · "}
            <span className="num">{formatWhen(pk.asOf, locale)}</span>
            {pk.stale ? (ur ? " · آخری محفوظ ریٹ" : " · last saved board") : ""}
          </p>
        </div>
      ) : null}
      {dxb ? (
        <div className="mt-4 rounded-xl border border-gold bg-gold-soft p-4">
          <p className="font-semibold">{ur ? "دبئی کا شائع شدہ ریٹیل" : "Dubai published retail"}</p>
          <p className="num mt-2 text-3xl font-display text-green">AED {formatMoney(dxb.gram22)} <span className="text-lg">22K / {ur ? "گرام" : "gram"}</span></p>
          <p className="num mt-1">24K / {ur ? "گرام" : "gram"}: AED {formatMoney(dxb.gram24)} · 22K {ur ? "تولہ" : "tola"}: AED {formatMoney(dxb.gram22 * 11.6638)} · Rs {formatMoney(dxb.gram22 * 11.6638 * aed, 0)}</p>
          <p className="mt-2 text-sm">
            <a className="text-green underline" href={dxb.sourceUrl}>{dxb.source}</a>
            {" · "}
            <span className="num">{formatWhen(dxb.asOf, locale)}</span>
            {dxb.stale ? (ur ? " · آخری محفوظ ریٹ" : " · last saved board") : ""}
          </p>
        </div>
      ) : null}
      <h2 className="mt-6 font-display text-2xl text-green">{ur ? "عالمی اسپاٹ" : "World spot"}</h2>
      <p className="mt-2 text-sm text-muted num">{formatWhen(market.fetchedAt, locale)}</p>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="w-full min-w-[24rem] text-left">
          <thead className="bg-gold-soft text-sm">
            <tr>
              <th className="px-3 py-3">{ur ? "قیراط" : "Karat"}</th>
              <th className="px-3 py-3">{ur ? "فی گرام" : "Per gram"}</th>
              <th className="px-3 py-3">{ur ? "فی تولہ" : "Per tola"}</th>
              <th className="px-3 py-3">{ur ? "تولہ، روپے" : "Tola in PKR"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.karat} className="border-t border-line">
                <td className="px-3 py-3 font-semibold">{row.karat}K</td>
                <td className="num px-3 py-3">{formatMoney(row.gramLocal)}</td>
                <td className="num px-3 py-3">{formatMoney(row.tolaLocal)}</td>
                <td className="num px-3 py-3">{formatMoney(row.tolaPkr, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        <A href={h("/guides/gold-carry-dubai-saudi-pakistan")} className="font-semibold text-green underline">
          {ur ? "پاکستان کتنا سونا لے جا سکتے ہیں" : "How much gold you can carry to Pakistan"}
        </A>
      </p>
    </Page>
  );
}

export function guidesHead(locale: Locale) {
  const ur = locale === "ur";
  return pageMeta({
    title: ur ? "خلیج کے عملی رہنما: نوکری، ویزا، پیسے" : "Practical Gulf Guides for Jobs, Visas, Money | Apna Ghar",
    description: ur
      ? "نوکری، ویزا، خرچ، ترسیل، حقوق، حج اور پاکستان واپسی۔ فیس سرکاری صفحے سے، اندازے سے نہیں۔"
      : "Jobs, visas, the cost of living, remittances, labour rights, Hajj and the trip home for Pakistanis in the Gulf. Official sources are linked.",
    path: hrefFor(ur, "/guides"),
    locale,
  });
}

export function GuidesIndex({ locale, category }: { locale: Locale; category: string }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const active = categories.some((item) => item.slug === category) ? category : "";
  const list = active ? guides.filter((guide) => guide.category === active) : guides;
  return (
    <Page
      kicker={SITE_NAME}
      title={ur ? "رہنما" : "Guides"}
      lede={ur ? "سادہ انگریزی اور اردو۔ فیس خود سرکاری سائٹ سے دیکھیں۔" : "Plain English, with Urdu on the main guides. Check fees on the official site."}
    >
      <div className="flex flex-wrap gap-2">
        <A href={h("/guides")} className={`inline-flex min-h-11 items-center rounded-md px-3 ${active === "" ? "bg-green text-on-green" : "bg-gold-soft"}`}>
          {ur ? "سب" : "All"}
        </A>
        {categories.map((item) => (
          <a
            key={item.slug}
            href={`${h("/guides")}?category=${item.slug}`}
            className={`inline-flex min-h-11 items-center rounded-md px-3 ${active === item.slug ? "bg-green text-on-green" : "bg-gold-soft"}`}
          >
            {ur ? item.ur : item.en}
          </a>
        ))}
      </div>
      <ul className="mt-6 divide-y divide-line rounded-xl border border-line bg-surface">
        {list.map((guide) => (
          <li key={guide.slug}>
            <A href={h(`/guides/${guide.slug}`)} className="block px-4 py-4">
              <p className="text-sm font-semibold text-gold-ink">{ur ? categoryBySlug(guide.category)?.ur : categoryBySlug(guide.category)?.en}</p>
              <p className="text-lg font-semibold">{ur && guide.urTitle ? guide.urTitle : guide.title}</p>
              <p className="text-sm text-muted">{ur && guide.urDescription ? guide.urDescription : guide.description}</p>
            </A>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export function guideHead(payload: GuidePayload, updated: string): { meta: any[]; links: any[] } {
  const ur = payload.locale === "ur";
  const translated = payload.translated;
  const publicPath = hrefFor(ur, `/guides/${payload.slug}`);
  const canonicalPath = ur && !translated ? `/guides/${payload.slug}` : publicPath;
  const meta = guideBySlug(payload.slug);
  const seo = guideSeo[payload.slug];
  const title = seo?.title ?? meta?.seoTitle ?? payload.title;
  const description = seo?.description ?? meta?.description ?? payload.description;
  const base = pageMeta({
    title,
    description,
    path: canonicalPath,
    locale: ur && translated ? "ur" : "en",
    urAlternate: translated,
  });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: "Home", path: ur && translated ? "/ur" : "/" },
        { name: "Guides", path: hrefFor(ur && translated, "/guides") },
        { name: payload.title, path: canonicalPath },
      ]),
      ld({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: payload.title,
        dateModified: updated,
        description,
        author: { "@type": "Person", name: OWNER_NAME },
        publisher: { "@type": "Organization", name: SITE_NAME },
      }),
      ld({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: payload.body.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }),
    ],
  };
}

export function GuideArticle({ payload }: { payload: GuidePayload }) {
  const ur = payload.locale === "ur";
  const meta = guideBySlug(payload.slug);
  const h = (path: string) => hrefFor(ur, path);
  if (!meta) return null;
  const headings = payload.body.blocks.filter((block) => block.t === "h2");
  return (
    <Page kicker={ur ? categoryBySlug(meta.category)?.ur : categoryBySlug(meta.category)?.en} title={payload.title} lede={payload.description}>
      <Crumb
        items={[
          { href: h("/"), label: ur ? "ہوم" : "Home" },
          { href: h("/guides"), label: ur ? "رہنما" : "Guides" },
          { label: payload.title },
        ]}
      />
      <p className="mt-4 text-sm text-muted">
        {ur ? "آخری اپڈیٹ" : "Last updated"}: <time dateTime={meta.updated}>{formatDay(meta.updated)}</time>
      </p>
      {!payload.translated ? (
        <p className="mt-3 rounded-lg bg-gold-soft px-3 py-2 text-sm">
          یہ صفحہ ابھی انگریزی میں ہے۔ اہم رہنما اردو میں دستیاب ہیں۔
        </p>
      ) : null}
      {headings.length ? (
        <nav className="mt-4 rounded-xl border border-line bg-surface p-4" aria-label={ur ? "فہرست" : "Contents"}>
          <p className="font-semibold">{ur ? "اس صفحے میں" : "On this page"}</p>
          <ol className="mt-2 list-decimal ps-5">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a href={`#${heading.id}`} className="text-green underline decoration-gold">
                  {heading.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <article className="prose-guide mt-6 max-w-3xl">
        {payload.body.blocks.map((block, index) => {
          if (block.t === "h2") return <h2 key={index} id={block.id} className="mt-8 font-display text-2xl text-green">{block.text}</h2>;
          if (block.t === "p") return <p key={index} className="mt-3"><Rich text={block.text} /></p>;
          if (block.t === "note") return <p key={index} className="mt-4 rounded-lg border border-gold bg-gold-soft px-3 py-2 text-sm"><Rich text={block.text} /></p>;
          if (block.t === "ul") return (
            <ul key={index} className="mt-3 list-disc ps-5">
              {block.items.map((item) => <li key={item} className="mt-1"><Rich text={item} /></li>)}
            </ul>
          );
          return (
            <ol key={index} className="mt-3 list-decimal ps-5">
              {block.items.map((item) => <li key={item} className="mt-1"><Rich text={item} /></li>)}
            </ol>
          );
        })}
      </article>
      <section className="mt-8 max-w-3xl">
        <h2 className="font-display text-2xl text-green">{ur ? "عام سوال" : "Common questions"}</h2>
        <div className="mt-3 grid gap-3">
          {payload.body.faqs.map((faq) => (
            <details key={faq.q} className="rounded-lg border border-line bg-surface px-4 py-3">
              <summary className="cursor-pointer font-semibold">{faq.q}</summary>
              <p className="mt-2 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="mt-8 max-w-3xl">
        <h2 className="font-display text-2xl text-green">{ur ? "ذرائع" : "Sources"}</h2>
        <ul className="mt-2 list-disc ps-5">
          {payload.body.sources.map((source) => (
            <li key={source.href}>
              <a href={source.href} className="text-green underline" rel="noopener noreferrer" target="_blank">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <aside className="mt-8 grid gap-3 rounded-xl bg-green p-4 text-on-green sm:grid-cols-2">
        <A href={h(meta.toolHref)} className="font-display text-2xl text-gold">
          {meta.toolLabel}
        </A>
        <div>
          <p className="text-sm text-gold">{ur ? "متعلقہ" : "Related"}</p>
          <ul className="mt-1">
            {meta.related.map((slug) => {
              const related = guideBySlug(slug);
              return (
                <li key={slug}>
                  <A href={h(`/guides/${slug}`)} className="inline-flex min-h-11 items-center underline">
                    {related ? (ur && related.urTitle ? related.urTitle : related.title) : slug}
                  </A>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </Page>
  );
}

const legalCopy: Record<string, { enTitle: string; urTitle: string; en: string[]; ur: string[] }> = {
  about: {
    enTitle: "About Apna Ghar: Practical Rates, Tools and Guides",
    urTitle: "اپنا گھر کے بارے میں: ریٹ، اوزار اور رہنما",
    en: [
      "Apna Ghar is run by Salim Khan, based in Islamabad, Pakistan.",
      "The mission is practical, sourced guides for Pakistanis working in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain: currency and gold boards, calculators, and the official page behind a fee or a visa rule.",
      `${SITE_TAGLINE} It is not a government, not a bank, not an exchange house, and not a recruitment agency.`,
    ],
    ur: [
      "اپنا گھر سلیم خان چلاتے ہیں، جو اسلام آباد، پاکستان میں مقیم ہیں۔",
      "مقصد متحدہ عرب امارات، سعودی عرب، قطر، کویت، عمان اور بحرین میں کام کرنے والے پاکستانیوں کے لیے عملی، ماخذ کے ساتھ رہنما ہے۔",
      "یہ حکومت، بینک، ایکسچینج یا بھرتی ایجنسی نہیں۔",
    ],
  },
  contact: {
    enTitle: "Contact Apna Ghar for Gulf Rate and Visa Questions",
    urTitle: "اپنا گھر سے رابطہ: ریٹ اور ویزا کے سوال",
    en: [`Email ${CONTACT_EMAIL}. Salim Khan reads corrections and source notes at that address.`, "There is no account and no form that stores your message on a server."],
    ur: [`ای میل ${CONTACT_EMAIL}۔ سلیم خان اسی پتے پر درستی اور ذرائع پڑھتے ہیں۔`, "نہ اکاؤنٹ ہے، نہ ایسا فارم جو پیغام سرور پر محفوظ کرے۔"],
  },
  privacy: {
    enTitle: "Privacy Policy for Apna Ghar Readers, Rates and Tools",
    urTitle: "اپنا گھر کی رازداری: ریٹ، اوزار اور قارئین",
    en: [
      "Apna Ghar does not ask you to create an account. Calculators run in your browser.",
      "Currency and gold figures are fetched on the server from public rate feeds. We do not attach your name to that request.",
      "If a Google Analytics ID is configured, the site may send ordinary page-view data to Google. If it is empty, that tag is not added. Search Console verification is only a meta tag.",
    ],
    ur: [
      "اکاؤنٹ نہیں بنتا۔ کیلکولیٹر براؤزر میں چلتے ہیں۔",
      "ریٹ سرور پر عوامی فیڈز سے آتے ہیں۔ آپ کا نام اس درخواست کے ساتھ نہیں جاتا۔",
      "اگر گوگل اینالٹکس کی آئی ڈی لگائی گئی ہو تو صفحے کے عام اعداد جا سکتے ہیں۔ خالی ہو تو ٹیگ نہیں لگتا۔",
    ],
  },
  terms: {
    enTitle: "Terms of Use for Apna Ghar Rates, Tools and Guides",
    urTitle: "اپنا گھر کے استعمال کی شرائط اور رہنما",
    en: [
      "You may read Apna Ghar for personal information. Do not copy the guides onto another site and present them as your own.",
      "Calculators are estimates. They are not a contract, a court ruling, or a promise of a visa.",
    ],
    ur: [
      "ذاتی معلومات کے لیے پڑھ سکتے ہیں۔ رہنما نقل کر کے اپنی سائٹ پر اپنی تحریروں کے طور پر نہ لگائیں۔",
      "کیلکولیٹر اندازہ ہیں۔ یہ معاہدہ، عدالتی فیصلہ یا ویزے کا وعدہ نہیں۔",
    ],
  },
  disclaimer: {
    enTitle: "Disclaimer: Apna Ghar Rates and Gold Are Indicative",
    urTitle: "دستبرداری: اپنا گھر کے ریٹ اشاراتی ہیں",
    en: [
      "Rates and gold prices are indicative. A Sarafa or Dubai board is not a rate your bank, exchange or jeweller must honour.",
      "Labour, visa and customs rules change. Where a fee is not printed on the official page linked in a guide, do not treat a number from social media as fact.",
      "Check with your bank, exchange, MOHRE, HRSD, ICP, Absher or Pakistan Customs before you act.",
    ],
    ur: [
      "ریٹ اور سونا اشاراتی ہیں۔ سرفہ یا دبئی کا بورڈ آپ کے بینک یا سنار کا سودا نہیں۔",
      "قواعد بدلتے ہیں۔ جہاں فیس سرکاری صفحے پر نہ ہو، سوشل میڈیا کے عدد کو حقیقت نہ سمجھیں۔",
      "عمل سے پہلے اپنے بینک، محرہ، ایچ آر ایس ڈی، آئی سی پی، ابشر یا پاکستان کسٹمز سے تصدیق کریں۔",
    ],
  },
  editorial: {
    enTitle: "Editorial Policy of Apna Ghar Guides, Rates and Tools",
    urTitle: "اپنا گھر کی اداری پالیسی: رہنما اور ریٹ",
    en: [
      "Guides are written in plain language and linked to official sources. We do not invent visa fees, fines or salary averages.",
      "If a rule is uncertain, the page says so and points to the authority that publishes it.",
      "Affiliate offers for remittance, flights and display ads exist in the code and stay switched off until a human turns them on. They must never change a rate or a legal explanation.",
      `Corrections: email ${CONTACT_EMAIL} with the page link and the source.`,
    ],
    ur: [
      "رہنما سادہ زبان میں ہیں اور سرکاری ذرائع سے جڑے ہیں۔ ہم ویزا فیس، جرمانے یا اوسط تنخواہ نہیں گھڑتے۔",
      "قاعدہ غیر یقینی ہو تو صفحہ یہی کہتا ہے اور اتھارٹی کا لنک دیتا ہے۔",
      "اشتہار اور الحاق کوڈ میں ہیں اور بند ہیں۔ انہیں ریٹ یا قانونی وضاحت نہیں بدلنی چاہیے۔",
      `درستی کے لیے ${CONTACT_EMAIL} پر صفحے کا لنک بھیجیں۔`,
    ],
  },
};

const legalDescriptions: Record<string, { en: string; ur: string }> = {
  about:
    {
      en: "Apna Ghar is run by Salim Khan in Islamabad. Practical, sourced guides for Pakistanis working in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.",
      ur: "اپنا گھر سلیم خان چلاتے ہیں، اسلام آباد سے۔ خلیج کے چھ ممالک میں کام کرنے والے پاکستانیوں کے لیے عملی رہنما۔",
    },
  contact: {
    en: "Email Salim Khan at salimpk742@gmail.com about a rate, a guide, or a correction. Apna Ghar has no login and stores no messages on a server. Write.",
    ur: "ریٹ، رہنما یا درستی کے لیے salimpk742@gmail.com پر سلیم خان کو لکھیں۔ اپنا گھر پر لاگ ان نہیں اور پیغام محفوظ نہیں ہوتا۔",
  },
  privacy: {
    en: "Apna Ghar does not ask for an account. Calculators stay in your browser, and currency requests are not tied to your name, email or phone number.",
    ur: "اپنا گھر اکاؤنٹ نہیں مانگتا۔ کیلکولیٹر براؤزر میں رہتے ہیں اور ریٹ کی درخواست آپ کے نام سے نہیں جڑتی۔",
  },
  terms: {
    en: "Personal use of Apna Ghar is welcome. The guides are not a visa, a contract or a court ruling, and every calculator on the site stays an estimate.",
    ur: "اپنا گھر ذاتی استعمال کے لیے ہے۔ رہنما ویزا، معاہدہ یا وعدہ نہیں، اور اندازہ اندازہ ہی رہتا ہے۔",
  },
  disclaimer: {
    en: "Apna Ghar rates and gold boards are indicative only. Confirm the figure with your bank, exchange, jeweller, or the official authority before you act.",
    ur: "اپنا گھر کے ریٹ اور سونے کے بورڈ اشاراتی ہیں۔ رسید اپنے بینک، ایکسچینج، سنار یا سرکاری ادارے سے دیکھیں۔",
  },
  editorial: {
    en: "Apna Ghar links official sources and does not invent visa fees or fines. Affiliate slots stay switched off, and corrections go to the contact email.",
    ur: "اپنا گھر سرکاری ذرائع سے جوڑتا ہے اور ویزا فیس نہیں گھڑتا۔ الحاق بند ہیں، درستی رابطہ ای میل پر بھیجیں۔",
  },
};

export function legalHead(slug: string, locale: Locale) {
  const copy = legalCopy[slug];
  const ur = locale === "ur";
  const title = ur ? copy.urTitle : copy.enTitle;
  const description = ur ? legalDescriptions[slug].ur : legalDescriptions[slug].en;
  const path = hrefFor(ur, `/${slug}`);
  const base = pageMeta({ title, description, path, locale });
  const extra =
    slug === "about"
      ? [
          ld({
            "@context": "https://schema.org",
            "@type": "Person",
            name: OWNER_NAME,
            jobTitle: "Publisher",
            email: CONTACT_EMAIL,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Islamabad",
              addressCountry: "PK",
            },
            worksFor: {
              "@type": "Organization",
              name: SITE_NAME,
              url: "https://apnaaghar.pk",
            },
          }),
          ld({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: "https://apnaaghar.pk",
            email: CONTACT_EMAIL,
            logo: "https://apnaaghar.pk/favicon.svg",
            founder: { "@type": "Person", name: OWNER_NAME },
            address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
            description: `Apna Ghar is run by ${OWNER_NAME}, based in ${OWNER_CITY}. ${SITE_TAGLINE}`,
          }),
        ]
      : [];
  return { ...base, meta: [...base.meta, ...extra] };
}

export function LegalView({ slug, locale }: { slug: string; locale: Locale }) {
  const copy = legalCopy[slug];
  const ur = locale === "ur";
  const paragraphs = ur ? copy.ur : copy.en;
  return (
    <Page title={ur ? copy.urTitle : copy.enTitle}>
      {slug === "contact" ? (
        <p className="text-lg">
          <a className="font-semibold text-green underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      ) : null}
      <div className="mt-4 grid max-w-3xl gap-3">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Page>
  );
}

export function toolHead(kind: "salary" | "gratuity" | "remit" | "flights", locale: Locale): { meta: any[]; links: any[] } {
  const ur = locale === "ur";
  const map = {
    salary: {
      path: "/tools/salary-converter",
      title: ur ? "خلیجی تنخواہ کو پاکستانی روپوں میں بدلیں" : "Convert a Gulf Salary to Pakistani Rupees | Apna Ghar",
      description: ur
        ? "خلیجی تنخواہ روپوں میں دیکھیں، ماہانہ خرچ خود لکھیں، اور بچت کا اندازہ لگائیں۔ یہ سرکاری سروے نہیں۔"
        : "Turn a Gulf salary into rupees, subtract a monthly budget you can edit, and see what is left to send home. A planning tool, not an official survey.",
      name: "Salary converter",
    },
    gratuity: {
      path: "/tools/gratuity-calculator",
      title: ur ? "یو اے ای اور سعودی گریچویٹی کا اندازہ" : "UAE and Saudi Gratuity Calculator Estimate | Apna Ghar",
      description: ur
        ? "یو اے ای اور سعودی عرب کے اختتامِ خدمت کے فائدے کا اندازہ۔ سعودی آرٹیکل ۸۷ کے استثنا الگ نوٹ ہیں۔ حتمی فیصلہ نہیں۔"
        : "Estimate UAE and Saudi end-of-service pay, with Article 87 exceptions noted beside the Saudi rules. An estimate only, not a MOHRE or HRSD ruling.",
      name: "Gratuity calculator",
    },
    remit: {
      path: "/tools/remittance",
      title: ur ? "دو ترسیلی کوٹ کا موازنہ، روپوں میں" : "Compare Two Remittance Quotes in Rupees | Apna Ghar",
      description: ur
        ? "دو فیس اور دو ریٹ خود لکھیں اور دیکھیں کس کوٹ پر زیادہ روپے بنتے ہیں۔ کوئی الحاق کی فہرست نہیں۔"
        : "Type two fees and two exchange rates and see which quote lands more rupees in Pakistan. No company league table or affiliate offer is switched on.",
      name: "Remittance quote comparison",
    },
    flights: {
      path: "/tools/flights",
      title: ur ? "خلیج سے پاکستان پروازیں: نوٹس" : "Flights from the Gulf to Pakistan: Notes | Apna Ghar",
      description: ur
        ? "خلیج سے پاکستان کرایے کا موازنہ کیسے کریں۔ سرچ ابھی بند ہے، اس لیے یہاں فرضی قیمت نہیں۔"
        : "How to compare Gulf to Pakistan fares without inventing a price on this page. Flight search stays off until a real airline feed is connected.",
      name: "Flight notes",
    },
  }[kind];
  const path = hrefFor(ur, map.path);
  const base = pageMeta({ title: map.title, description: map.description, path, locale });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: ur ? "ہوم" : "Home", path: ur ? "/ur" : "/" },
        { name: map.name, path },
      ]),
      ld({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: map.name,
        url: absUrl(path),
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        provider: { "@type": "Organization", name: SITE_NAME },
      }),
    ],
  };
}

export function ToolView({
  kind,
  market,
  locale,
}: {
  kind: "salary" | "gratuity" | "remit" | "flights";
  market: Market;
  locale: Locale;
}) {
  const ur = locale === "ur";
  const title =
    kind === "salary"
      ? ur
        ? "تنخواہ کنورٹر"
        : "Salary converter"
      : kind === "gratuity"
        ? ur
          ? "گریچویٹی کیلکولیٹر"
          : "Gratuity calculator"
        : kind === "remit"
          ? ur
            ? "ترسیل کا موازنہ"
            : "Compare remittance quotes"
          : ur
            ? "پروازیں"
            : "Flights home";
  return (
    <Page
      title={title}
      lede={
        kind === "gratuity"
          ? ur
            ? "اندازہ ہے۔ محرہ یا ایچ آر ایس ڈی کا فیصلہ نہیں۔"
            : "An estimate, not a MOHRE or HRSD decision."
          : ur
            ? "اعداد اشاراتی ہیں۔ لین دین سے پہلے اپنی رسید دیکھیں۔"
            : "Figures are indicative. Read your own receipt before you transact."
      }
    >
      {kind === "salary" ? <SalaryTool market={market} locale={locale} /> : null}
      {kind === "gratuity" ? <GratuityTool locale={locale} /> : null}
      {kind === "remit" ? <RemittanceTool market={market} locale={locale} /> : null}
      {kind === "flights" ? <FlightNotes locale={locale} /> : null}
    </Page>
  );
}
