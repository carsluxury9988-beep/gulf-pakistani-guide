/* eslint-disable react-refresh/only-export-components */
import { A, Crumb, Page } from "@/components/shell";
import { AdSlot } from "@/components/monetize";
import { MiniChart } from "@/components/mini-chart";
import { Rich } from "@/components/rich-text";
import { FlightNotes, GratuityTool, RemittanceTool, SalaryTool } from "@/components/tools";
import { guides, guideBySlug } from "@/lib/content/catalog";
import { guideSeo } from "@/lib/content/seo-copy";
import type { GuidePayload } from "@/lib/content.fn";
import { countryNotes } from "@/lib/content/country-notes";
import { legalPages, legalPath } from "@/lib/content/legal-pages";
import {
  boardCompare,
  formatDay,
  formatMoney,
  formatRate,
  formatWhen,
  gramLines,
  historyFor,
  pkrPer,
  rateMove,
  type Market,
} from "@/lib/format";
import { breadcrumbLd, ld, pageMeta } from "@/lib/seo";
import {
  categories,
  categoryBySlug,
  CONTACT_EMAIL,
  countries,
  goldPlaces,
  hrefFor,
  OWNER_NAME,
  pairs,
  pathForGuide,
  SITE_NAME,
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

const FLAGS: Record<string, string> = {
  uae: "🇦🇪",
  "saudi-arabia": "🇸🇦",
  qatar: "🇶🇦",
  kuwait: "🇰🇼",
  oman: "🇴🇲",
  bahrain: "🇧🇭",
};

export function HomeView({ market, locale }: { market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const featured = guides.filter((guide) => guide.featured).slice(0, 4);
  const board = boardCompare(market);
  const dubaiLines = gramLines(market, "dubai", "AED");
  const gram24 = dubaiLines.find((line) => line.karat === 24);
  const gram22 = dubaiLines.find((line) => line.karat === 22);
  return (
    <main>
      <section className="hero-panel text-on-green">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
            {ur ? "خلیج میں پاکستانیوں کے لیے سب کچھ، ایک جگہ۔" : "Everything Pakistanis in the Gulf need, in one place."}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-on-green/85">
            {ur
              ? "کرنسی ریٹ، سونا، نوکری، ویزا اور پیسے بھیجنے کے سوال۔ رہنما سرکاری صفحے بتاتی ہے، ریٹ نامزد ماخذ سے آتے ہیں۔"
              : "Currency rates, gold, jobs, visas and the money you send home. Guides cite official pages. Rates come from the sources named on each page."}
          </p>
          <div className="mt-6">
            <div className="flex items-end justify-between gap-3">
              <p className="font-display text-2xl text-gold sm:text-3xl">
                {ur ? "آج کے کرنسی ریٹ" : "Today’s currency rates"}
              </p>
              <p className="text-xs text-on-green/80">{market.stale ? (ur ? "تاخیر ہو سکتی ہے" : "May be delayed") : ur ? "تازہ" : "Updated"}</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {pairs.map((pair) => {
                const move = rateMove(market, pair.code);
                const delta = move?.delta ?? 0;
                return (
                  <A
                    key={pair.slug}
                    href={h(`/rates/${pair.slug}`)}
                    className="rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur hover:bg-white/15"
                  >
                    <p className="text-xs font-semibold text-gold">{pair.code} → PKR</p>
                    <p className="num mt-0.5 text-2xl font-semibold leading-none">{formatRate(pkrPer(market, pair.code))}</p>
                    <p className="num mt-1 text-xs text-on-green/80">
                      {move
                        ? `${delta > 0 ? "▲" : delta < 0 ? "▼" : "—"} ${delta === 0 ? "" : formatMoney(Math.abs(delta), 2)} ${ur ? "بمقابلہ" : "vs"} ${formatDay(move.versus)}`
                        : "—"}
                    </p>
                  </A>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-on-green/75">{rateLine(market, locale)}</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {countries.map((country) => (
              <A
                key={country.slug}
                href={h(`/${country.slug}`)}
                className="flex min-h-11 items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur hover:bg-white/15"
              >
                <span aria-hidden>{FLAGS[country.slug]}</span>
                {country.short}
              </A>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-8">
        {staleNote(market, locale)}
        <div className="mt-2 flex items-end justify-between gap-3">
          <h2 className="font-display text-3xl text-green">{ur ? "سونا" : "Gold"}</h2>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <A href={h("/gold-rates/dubai")} className="rounded-2xl border border-line bg-surface p-4 shadow-sm">
            <p className="text-sm text-muted">{ur ? "دبئی سونا، فی گرام" : "Dubai gold, per gram"}</p>
            <p className="num mt-1 text-2xl font-semibold">24K AED {gram24 ? formatMoney(gram24.gram) : "—"}</p>
            <p className="num text-lg">22K AED {gram22 ? formatMoney(gram22.gram) : "—"}</p>
            <p className="mt-1 text-sm text-muted">{dxbNote(market, ur)}</p>
          </A>
          <A href={h("/gold-rates/pakistan")} className="rounded-2xl border border-line bg-surface p-4 shadow-sm">
            <p className="text-sm text-muted">{ur ? "پاکستان سرفہ" : "Pakistan Sarafa"}</p>
            <p className="num mt-1 text-2xl font-semibold">22K Rs {board ? formatMoney(board.pakistanTola22, 0) : "—"}</p>
            <p className="text-sm text-muted">{ur ? "فی تولہ" : "per tola"} · {board ? formatWhen(market.localGold.pakistan?.asOf || market.fetchedAt, locale) : ""}{market.localGold.pakistan?.stale ? (ur ? " · تاخیر ہو سکتی ہے" : " · may be delayed") : ""}</p>
          </A>
        </div>
        <h2 className="mt-10 font-display text-3xl text-green">{ur ? "اوزار" : "Tools"}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["/rates", ur ? "کرنسی" : "Currency converter", ur ? "درہم اور ریال سے روپیہ" : "Dirham and riyal into rupees"],
            ["/gold-rates", ur ? "سونا" : "Gold rates", ur ? "فی گرام، مقامی کرنسی" : "Per gram, in local money"],
            ["/tools/salary-converter", ur ? "تنخواہ" : "Salary converter", ur ? "روپے اور بچت" : "Rupees and what is left"],
            ["/tools/gratuity-calculator", ur ? "گریچویٹی" : "Gratuity calculator", ur ? "یو اے ای اور سعودی" : "UAE and Saudi estimate"],
          ].map(([href, title, lede]) => (
            <A key={href} href={h(href)} className="rounded-2xl bg-green p-4 text-on-green shadow-sm">
              <p className="font-display text-2xl">{title}</p>
              <p className="mt-1 text-on-green/85">{lede}</p>
            </A>
          ))}
        </div>
        <h2 className="mt-10 font-display text-3xl text-green">{ur ? "مشہور رہنما" : "Popular guides"}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {featured.map((guide) => (
            <A key={guide.slug} href={h(pathForGuide(guide.slug))} className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm hover:border-green">
              <img
                src={cardImage(guide.slug, guide.category)}
                alt=""
                width={640}
                height={640}
                className="aspect-square w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gold-ink">{ur ? categoryBySlug(guide.category)?.ur : categoryBySlug(guide.category)?.en}</p>
                <p className="mt-1 text-lg font-semibold">{ur && guide.urTitle ? guide.urTitle : guide.title}</p>
              </div>
            </A>
          ))}
        </div>
        <h2 className="mt-10 font-display text-3xl text-green">{ur ? "ملک کے لحاظ سے نوکریاں" : "Jobs by country"}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <A key={country.slug} href={h(`/jobs/${country.slug}`)} className="rounded-2xl border border-line bg-surface p-4 shadow-sm hover:border-green">
              <p className="font-display text-2xl text-green">
                <span aria-hidden>{FLAGS[country.slug]} </span>
                {country.short}
              </p>
              <p className="mt-1 text-sm text-muted">{ur ? "نوکری، ویزا اور تنخواہ کا معاہدہ" : "Jobs, the visa path, and what the contract should say"}</p>
            </A>
          ))}
        </div>
        <h2 className="mt-10 font-display text-3xl text-green">{ur ? "ملک کے لحاظ سے سوال" : "Questions by country"}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {countries.map((country) => (
            <A key={country.slug} href={h(`/questions/${country.slug}`)} className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-sm font-semibold">
              {FLAGS[country.slug]} {country.short}
            </A>
          ))}
        </div>
        <AdSlot />
      </section>
    </main>
  );
}

function cardImage(slug: string, category: string) {
  if (slug === "send-money-saudi-to-pakistan") return "/images/cards/money-saudi.webp";
  if (category === "jobs") return "/images/cards/jobs.webp";
  if (category === "visas" || category === "rights") return "/images/cards/visas.webp";
  if (category === "cost" || category === "travel") return "/images/cards/cost.webp";
  if (category === "gold") return "/images/cards/gold.webp";
  return "/images/cards/money.webp";
}

function rateLine(market: Market, locale: Locale) {
  const ur = locale === "ur";
  const rateDate = formatDay(market.asOf);
  const checked = formatWhen(market.fetchedAt, locale);
  return ur
    ? `ریٹ کی تاریخ: ${rateDate} (ماخذ روزانہ) · جانچ: ${checked}`
    : `Rate date: ${rateDate} (source updates daily) · Checked: ${checked}`;
}

function dxbNote(market: Market, ur: boolean) {
  const dxb = market.localGold?.dubai;
  if (!dxb) return ur ? "بورڈ نہیں ملا" : "Board unavailable";
  return `${formatWhen(dxb.asOf, ur ? "ur" : "en")}${dxb.stale ? (ur ? " · تاخیر ہو سکتی ہے" : " · may be delayed") : ""}`;
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

const countryUrTitles: Record<string, string> = {
  uae: "متحدہ عرب امارات: ریٹ، سونا اور رہنما | اپنا گھر",
  "saudi-arabia": "سعودی عرب: ریٹ، سونا اور نوکری رہنما | اپنا گھر",
  qatar: "قطر: ریال، سونا اور ویزا رہنما | اپنا گھر",
  kuwait: "کویت: دینار، سونا اور نوکری رہنما | اپنا گھر",
  oman: "عمان: ریال، سونا اور ویزا رہنما | اپنا گھر",
  bahrain: "بحرین: دینار، سونا اور رہنما | اپنا گھر",
};

const countryUrDescriptions: Record<string, string> = {
  uae: "متحدہ عرب امارات میں پاکستانیوں کے لیے درہم کا درمیانی ریٹ، دبئی کا سونا فی گرام، اور نوکری، ویزا، گریچویٹی اور گھر پیسے بھیجنے کی عملی رہنما۔",
  "saudi-arabia": "سعودی عرب میں پاکستانی کارکنوں کے لیے ریال کا ریٹ، سونا، اقامہ اور ورک ویزا۔ اعداد درمیانی ہیں، بینک کا کوٹ نہیں، اور ذرائع صفحے پر ہیں۔",
  qatar: "قطر میں پاکستانیوں کے لیے قطری ریال، سونے کا اسپاٹ ریٹ، اور ویزا و نوکری کے نوٹس۔ زیورات پر میکنگ الگ ہے، اور فیس سرکاری صفحے سے دیکھیں۔",
  kuwait: "کویت میں پاکستانی کارکنوں کے لیے کویتی دینار، سونا، اور عملی نوٹس۔ پیسے بھیجنے یا سونا خریدنے سے پہلے اپنی رسید خود دیکھیں۔",
  oman: "عمان میں پاکستانیوں کے لیے عمانی ریال، سونا، اور ویزا و نوکری کے نوٹس۔ یہ درمیانی ریٹ ہیں، بینک ہمیشہ یہی عدد نہیں دیتا۔",
  bahrain: "بحرین میں پاکستانیوں کے لیے بحرینی دینار، سونا، اور ویزا و نوکری کے نوٹس۔ ریٹ اشاراتی ہیں، اور ملک کی رہنما نیچے جڑی ہیں۔",
};

export function countryHead(country: Country, locale: Locale) {
  const ur = locale === "ur";
  const path = hrefFor(ur, `/${country.slug}`);
  const title = ur ? countryUrTitles[country.slug] : (countryTitles[country.slug] ?? `${country.short} rates and guides`);
  const description = ur ? countryUrDescriptions[country.slug] : countryDescriptions[country.slug];
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
  const list = guides
    .filter((guide) => guide.countries.includes(country.slug) && pathForGuide(guide.slug).startsWith("/guides"))
    .slice(0, 8);
  const gold = gramLines(market, country.goldSlug, country.currency).find((row) => row.karat === 22);
  return (
    <Page
      kicker={country.currency}
      title={ur ? `${country.nameUr} میں پاکستانی` : `Pakistanis in ${country.short}`}
      lede={ur ? country.blurbUr : country.blurb}
    >
      <Crumb
        items={[
          { href: h("/"), label: ur ? "ہوم" : "Home" },
          { label: country.short },
        ]}
      />
      {staleNote(market, locale)}
      <CountryNoteBlock slug={country.slug} />
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <A href={h(`/rates/${country.currency.toLowerCase()}-to-pkr`)} className="rounded-xl border border-line bg-surface p-4">
          <p className="text-sm text-muted">1 {country.currency}</p>
          <p className="num text-3xl font-semibold">Rs {formatRate(pkrPer(market, country.currency))}</p>
        </A>
        <A href={h(`/gold-rates/${country.goldSlug}`)} className="rounded-xl border border-line bg-surface p-4">
          <p className="text-sm text-muted">22K {ur ? "فی گرام" : "per gram"}</p>
          <p className="num text-3xl font-semibold">{country.currency} {gold ? formatMoney(gold.gram) : "—"}</p>
        </A>
        <A href={h("/tools/salary-converter")} className="rounded-xl bg-green p-4 text-on-green">
          <p className="font-display text-2xl">{ur ? "تنخواہ بدلیں" : "Convert a salary"}</p>
          <p className="text-sm text-on-green/85">{ur ? "روپے اور بچت" : "See rupees and savings"}</p>
        </A>
        <A href={h(`/jobs/${country.slug}`)} className="rounded-xl border border-line bg-surface p-4">
          <p className="font-display text-2xl text-green">{ur ? "نوکریاں" : "Jobs"}</p>
          <p className="text-sm text-muted">{ur ? "۲۰۲۶ میں کیسے اپلائی کریں" : "How to apply in 2026"}</p>
        </A>
        <A href={h(`/questions/${country.slug}`)} className="rounded-xl border border-line bg-surface p-4">
          <p className="font-display text-2xl text-green">{ur ? "سوالات" : "Q&A"}</p>
          <p className="text-sm text-muted">{ur ? "مختصر جواب" : "Short answers"}</p>
        </A>
      </div>
      <h2 className="mt-8 font-display text-2xl text-green">{ur ? "رہنما" : "Guides"}</h2>
      <ul className="mt-3 divide-y divide-line rounded-xl border border-line bg-surface">
        {list.map((guide) => (
          <li key={guide.slug}>
            <A href={h(pathForGuide(guide.slug))} className="block px-4 py-3 font-semibold">
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
        { name: ur ? "کرنسی ریٹ" : "Currency rates", path },
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
        {ur ? "آخری جانچ" : "Checked"}: <span className="num">{rateLine(market, locale)}</span>
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
        { name: ur ? "کرنسی ریٹ" : "Currency rates", path: hrefFor(ur, "/rates") },
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
          { href: h("/rates"), label: ur ? "کرنسی ریٹ" : "Currency rates" },
          { label: `${pair.code} / PKR` },
        ]}
      />
      <div className="mt-4">
        {staleNote(market, locale)}
        <p className="mt-4 num font-display text-5xl text-green">{formatRate(rate)}</p>
        <p className="text-muted">{ur ? "روپے فی 1" : "Pakistani rupees for 1"} {pair.code}</p>
        <p className="mt-2 text-sm text-muted">
          {ur ? "آخری جانچ" : "Checked"}: <span className="num">{rateLine(market, locale)}</span>
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
  dubai: "Gold Rate Today in Dubai: 24K, 22K, 21K, 18K per Gram (AED)",
  "saudi-arabia": "Gold Rate Today in Saudi Arabia: 24K and 22K per Gram (SAR)",
  qatar: "Gold Rate Today in Qatar: 24K, 22K and 21K per Gram (QAR)",
  kuwait: "Gold Rate Today in Kuwait: 24K, 22K, 21K per Gram (KWD)",
  oman: "Gold Rate Today in Oman: 24K, 22K and 21K per Gram (OMR)",
  bahrain: "Gold Rate Today in Bahrain: 24K and 22K per Gram (BHD)",
  pakistan: "Pakistan Gold Rate Today: Sarafa per Gram and Tola",
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
    const line = gramLines(market, place.slug, place.code).find((item) => item.karat === 22);
    let pkr = (line?.tola ?? 0) * pkrPer(market, place.code);
    let gram = line?.gram ?? 0;
    let kind = ur ? "اسپاٹ" : "Spot";
    if (place.slug === "pakistan" && pk) {
      pkr = pk.tola22;
      gram = pk.tola22 / 11.6638;
      kind = ur ? "سرفہ" : "Sarafa";
    }
    if (place.slug === "dubai" && board) {
      gram = board.dubaiGram22;
      pkr = board.dubaiTola22Pkr;
      kind = ur ? "ریٹیل" : "Retail";
    }
    return { place, pkr, gram, kind };
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
      <ul className="mt-4 grid gap-3 md:hidden">
        {rows.map((row) => (
          <li key={row.place.slug}>
            <A href={h(`/gold-rates/${row.place.slug}`)} className="block rounded-xl border border-line bg-surface p-4 shadow-sm">
              <p className="font-semibold text-green">{ur ? row.place.nameUr : row.place.name}</p>
              <p className="mt-1 inline-flex rounded-full bg-gold-soft px-2 py-0.5 text-xs font-semibold">{row.kind}</p>
              <p className="num mt-2 text-2xl font-semibold">
                {row.place.slug === "pakistan" ? "Rs" : row.place.code} {formatMoney(row.gram, row.place.slug === "pakistan" ? 0 : 2)}
              </p>
              <p className="text-sm text-muted">{ur ? "۲۲ قیراط فی گرام" : "22K per gram"}</p>
              <p className="num mt-1 text-sm">Rs {formatMoney(row.pkr, 0)} {ur ? "فی تولہ" : "per tola"}</p>
            </A>
          </li>
        ))}
      </ul>
      <div className="mt-4 hidden overflow-hidden rounded-xl border border-line bg-surface md:block">
        <table className="w-full text-left">
          <thead className="bg-gold-soft text-sm">
            <tr>
              <th className="px-4 py-3">{ur ? "جگہ" : "Place"}</th>
              <th className="px-4 py-3">{ur ? "قسم" : "Kind"}</th>
              <th className="px-4 py-3">22K {ur ? "فی گرام" : "per gram"}</th>
              <th className="px-4 py-3">{ur ? "روپے / تولہ" : "PKR / tola"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.place.slug} className="border-t border-line">
                <td className="px-4 py-3">
                  <A href={h(`/gold-rates/${row.place.slug}`)} className="font-semibold text-green underline decoration-gold">
                    {ur ? row.place.nameUr : row.place.name}
                  </A>
                </td>
                <td className="px-4 py-3 text-sm">{row.kind}</td>
                <td className="num px-4 py-3">
                  {row.place.slug === "pakistan" ? "Rs" : row.place.code} {formatMoney(row.gram, row.place.slug === "pakistan" ? 0 : 2)}
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
  const title = ur ? `${place.nameUr} میں آج سونے کا ریٹ فی گرام | اپنا گھر` : goldTitles[place.slug];
  const description = ur
    ? `${place.name} میں ۲۴، ۲۲، ۲۱ اور ۱۸ قیراط فی گرام، مقامی کرنسی میں۔ آخری اپڈیٹ کا وقت درج ہے۔ زیورات پر میکنگ الگ ہے۔`
    : `${place.name} gold per gram in ${place.code}: 24K, 22K, 21K and 18K, and the price of 10 grams. The update time is on the page. Making charges are extra.`;
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
      <h2 className="mt-6 font-display text-2xl text-green">
        {place.slug === "pakistan"
          ? ur
            ? "سرفہ، روپے میں"
            : "Sarafa rate in rupees"
          : ur
            ? `فی گرام، ${place.code}`
            : `Per gram in ${place.code}`}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        {place.slug === "pakistan"
          ? ur
            ? "۲۲ اور ۲۴ قیراط سرفہ بورڈ سے ہیں۔ ۲۱ اور ۱۸ قیراط ۲۴ قیراط تولے سے نکالے گئے ہیں۔"
            : "22K and 24K are the Sarafa board. 21K and 18K are scaled from the 24K tola, not a separate shop quote."
          : place.slug === "dubai"
            ? ur
              ? "دبئی کا شائع شدہ ریٹیل بورڈ: ۲۴، ۲۲، ۲۱ اور ۱۸ قیراط فی گرام، درہم میں۔ میکنگ الگ ہے۔"
              : "Dubai’s published retail board: 24K, 22K, 21K and 18K per gram in dirhams. Making charges are extra."
            : ur
              ? "یہ عالمی اسپاٹ ہے، دکان کا بورڈ نہیں۔ قیمت مقامی کرنسی میں فی گرام ہے۔"
              : "This is the world spot price in the local currency, not a shop board. Making charges are extra."}
        {dxb?.stale || pk?.stale ? (ur ? " ریٹ تاخیر کا شکار ہو سکتا ہے۔" : " The figure may be delayed.") : ""}
      </p>
      <ul className="mt-4 grid gap-3 md:hidden">
        {gramLines(market, place.slug, place.code).map((line) => (
          <li key={line.karat} className="rounded-xl border border-line bg-surface p-4 shadow-sm">
            <p className="text-sm font-semibold text-gold-ink">{line.karat}K</p>
            <p className="num mt-1 text-2xl font-semibold">
              {place.slug === "pakistan" ? "Rs" : place.code} {formatMoney(line.gram, place.slug === "pakistan" ? 0 : 2)}
            </p>
            <p className="text-sm text-muted">{ur ? "فی گرام" : "per gram"}</p>
            <p className="num mt-1 text-sm">
              10 g · {place.slug === "pakistan" ? "Rs" : place.code} {formatMoney(line.ten, place.slug === "pakistan" ? 0 : 2)}
              {place.slug === "pakistan" ? ` · ${ur ? "تولہ" : "tola"} ${formatMoney(line.tola, 0)}` : ""}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-4 hidden overflow-x-auto rounded-xl border border-line bg-surface md:block">
        <table className="w-full text-left">
          <thead className="bg-gold-soft text-sm">
            <tr>
              <th className="px-4 py-3">{ur ? "قیراط" : "Karat"}</th>
              <th className="px-4 py-3">{ur ? "فی گرام" : "Price per gram"}</th>
              <th className="px-4 py-3">{ur ? "دس گرام" : "Price per 10 g"}</th>
              {place.slug === "pakistan" ? <th className="px-4 py-3">{ur ? "فی تولہ" : "Per tola"}</th> : null}
            </tr>
          </thead>
          <tbody>
            {gramLines(market, place.slug, place.code).map((line) => (
              <tr key={line.karat} className="border-t border-line">
                <td className="px-4 py-3 font-semibold">{line.karat}K</td>
                <td className="num px-4 py-3">
                  {place.slug === "pakistan" ? "Rs" : place.code} {formatMoney(line.gram, place.slug === "pakistan" ? 0 : 2)}
                </td>
                <td className="num px-4 py-3">
                  {place.slug === "pakistan" ? "Rs" : place.code} {formatMoney(line.ten, place.slug === "pakistan" ? 0 : 2)}
                </td>
                {place.slug === "pakistan" ? <td className="num px-4 py-3">Rs {formatMoney(line.tola, 0)}</td> : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {place.slug !== "pakistan" ? (
        <aside className="mt-4 rounded-xl border border-gold bg-gold-soft p-4">
          <p className="font-semibold">{ur ? "پاکستان سے موازنہ" : "Compare with Pakistan"}</p>
          <p className="mt-2 text-sm text-muted">
            {ur
              ? "اصل قیمت اوپر مقامی کرنسی میں ہے۔ یہ خانہ صرف سرفہ تولے سے روپے کا موازنہ ہے۔"
              : "The prices above stay in the local currency. This box is only a rupee comparison with the Sarafa tola."}
          </p>
          <p className="num mt-2">
            22K {ur ? "فی گرام" : "per gram"}: {place.code}{" "}
            {formatMoney(gramLines(market, place.slug, place.code).find((line) => line.karat === 22)?.gram ?? 0)}
            {" · Rs "}
            {formatMoney(
              (gramLines(market, place.slug, place.code).find((line) => line.karat === 22)?.gram ?? 0) *
                pkrPer(market, place.code),
              0,
            )}
            {market.localGold?.pakistan
              ? ` · ${ur ? "سرفہ تولہ" : "Sarafa tola"} Rs ${formatMoney(market.localGold.pakistan.tola22, 0)}`
              : ""}
          </p>
        </aside>
      ) : null}
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
  const list = (active ? guides.filter((guide) => guide.category === active) : guides).filter((guide) =>
    pathForGuide(guide.slug).startsWith("/guides"),
  );
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
            <A href={h(pathForGuide(guide.slug))} className="block px-4 py-4">
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
  const title =
    ur && translated
      ? `${meta?.urTitle ?? payload.title} | اپنا گھر`
      : (seo?.title ?? meta?.seoTitle ?? payload.title);
  const description =
    ur && translated
      ? (meta?.urDescription ?? payload.description)
      : (seo?.description ?? meta?.description ?? payload.description);
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
        datePublished: "2026-10-09",
        dateModified: updated,
        image: absUrl("/og.jpg"),
        description,
        author: { "@type": "Organization", name: SITE_NAME, url: absUrl("/") },
        publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: absUrl("/logo-512.png") } },
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
        {ur ? "لکھا" : "By"}{" "}
        <A href={h("/about")} className="font-semibold text-green underline">{ur ? "اپنا گھر" : SITE_NAME}</A>
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
      <p className="mt-4 text-sm text-muted">
          <A href={h("/disclaimer")} className="text-green underline">
            {ur ? "فیس اور جرمانے بدلتے ہیں۔ عدد صرف سرکاری صفحے پر ہو تو مانیں۔ دستبرداری پڑھیں۔" : "Fees and fines change. If a number is not on the official page linked above, treat it as unchecked. Read the disclaimer."}
          </A>
        </p>
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
                  <A href={h(pathForGuide(slug))} className="inline-flex min-h-11 items-center underline">
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

function CountryNoteBlock({ slug }: { slug: string }) {
  const note = countryNotes[slug];
  if (!note) return null;
  return (
    <section className="mt-6 max-w-3xl">
      {note.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mt-3"><Rich text={paragraph} /></p>
      ))}
      <h2 className="mt-6 font-display text-2xl text-green">First week</h2>
      <ul className="mt-2 list-disc ps-5">
        {note.checklist.map((item) => (
          <li key={item} className="mt-1">{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function legalHead(slug: string, locale: Locale) {
  const copy = legalPages[slug];
  const ur = locale === "ur";
  const title = ur ? copy.urTitle : copy.enTitle;
  const description = ur ? copy.urDescription : copy.enDescription;
  const path = hrefFor(ur, legalPath(slug));
  const base = pageMeta({ title, description, path, locale });
  const extra =
    slug === "about"
      ? [
          ld({
            "@context": "https://schema.org",
            "@type": "Person",
            name: OWNER_NAME,
            url: absUrl(ur ? "/ur/about" : "/about"),
            jobTitle: "Publisher",
            email: CONTACT_EMAIL,
            address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
            worksFor: { "@type": "Organization", name: SITE_NAME, url: "https://apnaaghar.pk" },
          }),
        ]
      : [];
  return { ...base, meta: [...base.meta, ...extra] };
}

export function LegalView({ slug, locale }: { slug: string; locale: Locale }) {
  const copy = legalPages[slug];
  const ur = locale === "ur";
  const paragraphs = ur ? copy.ur : copy.en;
  return (
    <Page title={ur ? copy.urTitle : copy.enTitle}>
      <div className="mt-4 grid max-w-3xl gap-3">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}><Rich text={paragraph} /></p>
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
