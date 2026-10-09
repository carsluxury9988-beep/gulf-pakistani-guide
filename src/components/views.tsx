import { A, Crumb, hrefFor, Page } from "@/components/shell";
import { AdSlot } from "@/components/monetize";
import { MiniChart } from "@/components/mini-chart";
import { Rich } from "@/components/rich-text";
import { FlightNotes, GratuityTool, RemittanceTool, SalaryTool } from "@/components/tools";
import { guides, guideBySlug } from "@/lib/content/catalog";
import type { GuidePayload } from "@/lib/content.fn";
import {
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
  pairs,
  SITE_NAME,
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
  const title = locale === "ur" ? "گلف پی کے: ریٹ، سونا اور رہنما" : "GulfPK: rates and guides for Pakistanis";
  const description =
    locale === "ur"
      ? "خلیج میں پاکستانیوں کے لیے آج کے درہم، ریال، سونے کے ریٹ اور عملی رہنما۔"
      : "Today’s dirham, riyal and gold rates, plus practical guides for Pakistanis in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.";
  return {
    ...pageMeta({ title, description, path, locale }),
    meta: [
      ...pageMeta({ title, description, path, locale }).meta,
      ld({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
      }),
    ],
  };
}

export function HomeView({ market, locale }: { market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const featured = guides.filter((guide) => guide.featured).slice(0, 6);
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
              <h2 className="font-display text-2xl text-green">{ur ? "سونے کا اشارہ" : "Gold, spot"}</h2>
              <span className="text-sm text-muted">22K / {ur ? "تولہ" : "tola"}</span>
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-surface p-3">
                <dt className="text-sm text-muted">{ur ? "دبئی" : "Dubai"}</dt>
                <dd className="num text-2xl font-semibold text-ink">AED {dubaiGold ? formatMoney(dubaiGold.tolaLocal) : "—"}</dd>
              </div>
              <div className="rounded-lg bg-surface p-3">
                <dt className="text-sm text-muted">{ur ? "پاکستان" : "Pakistan"}</dt>
                <dd className="num text-2xl font-semibold text-ink">Rs {pakGold ? formatMoney(pakGold.tolaPkr, 0) : "—"}</dd>
              </div>
            </dl>
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

export function countryHead(country: Country, locale: Locale) {
  const path = hrefFor(locale === "ur", `/${country.slug}`);
  const title = locale === "ur" ? `${country.short}: ریٹ اور رہنما` : `${country.short} rates and guides`;
  const description = locale === "ur" ? country.blurbUr : country.blurb;
  return pageMeta({ title, description, path, locale });
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
  const path = hrefFor(locale === "ur", "/rates");
  return pageMeta({
    title: locale === "ur" ? "خلیج سے پاکستانی روپیہ" : "Gulf currencies to Pakistani rupee",
    description:
      locale === "ur"
        ? "درہم، ریال، دینار اور عمانی ریال کے درمیانی ریٹ، آخری اپڈیٹ کے ساتھ۔"
        : "Mid-market dirham, riyal, dinar and Omani rial rates against the Pakistani rupee, with the last update time.",
    path,
    locale,
  });
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

export function pairHead(pair: Pair, locale: Locale): { meta: any[]; links: any[] } {
  const path = hrefFor(locale === "ur", `/rates/${pair.slug}`);
  const title = `${pair.code} to PKR today`.slice(0, 60);
  return {
    ...pageMeta({
      title,
      description: `Today’s ${pair.name} to Pakistani rupee mid-market rate, a 30-day trend, and links to gold, salary and sending money home.`,
      path,
      locale,
    }),
    meta: [
      ...pageMeta({
        title,
        description: `Today’s ${pair.name} to Pakistani rupee mid-market rate, a 30-day trend, and links to gold, salary and sending money home.`,
        path,
        locale,
      }).meta,
      breadcrumbLd([
        { name: "Home", path: locale === "ur" ? "/ur" : "/" },
        { name: "Rates", path: hrefFor(locale === "ur", "/rates") },
        { name: `${pair.code} to PKR`, path },
      ]),
      ld({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: `${pair.code} to PKR`,
        applicationCategory: "FinanceApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
      lede={pair.peg}
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
    </Page>
  );
}

export function goldHead(locale: Locale) {
  const path = hrefFor(locale === "ur", "/gold-rates");
  return pageMeta({
    title: locale === "ur" ? "خلیج اور پاکستان میں سونے کے ریٹ" : "Gold rates: Gulf and Pakistan",
    description:
      locale === "ur"
        ? "۲۴، ۲۲، ۲۱ اور ۱۸ قیراط، فی گرام اور فی تولہ۔ اشاراتی اسپاٹ قیمت۔"
        : "24K, 22K, 21K and 18K gold per gram and per tola across the Gulf and Pakistan. Indicative spot prices.",
    path,
    locale,
  });
}

export function GoldIndex({ market, locale }: { market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const rows = goldPlaces.map((place) => {
    const row = goldRows(market, place.code).find((item) => item.karat === 22);
    return { place, pkr: row?.tolaPkr ?? 0, local: row?.tolaLocal ?? 0 };
  });
  const priced = rows.filter((row) => row.pkr > 0);
  const cheapest = priced.reduce((best, row) => (row.pkr < best.pkr ? row : best), priced[0]);
  const spread = priced.length ? Math.max(...priced.map((row) => row.pkr)) - Math.min(...priced.map((row) => row.pkr)) : 0;
  const same = cheapest ? spread / cheapest.pkr < 0.005 : true;
  return (
    <Page
      kicker={ur ? "اسپاٹ" : "Spot"}
      title={ur ? "آج سونا کہاں سستا ہے" : "Where gold is cheaper today"}
      lede={
        ur
          ? "یہ عالمی اسپاٹ قیمت ہے، دکان کا بورد نہیں۔ میکنگ چارجز الگ ہیں۔"
          : "This is the world spot price, not a shop board. Making charges are extra."
      }
    >
      {staleNote(market, locale)}
      <p className="mt-4 max-w-2xl">
        {same
          ? ur
            ? "درمیانی ریٹ پر ۲۲ قیراط سونے کا تولہ ہر ملک میں تقریباً اتنے ہی روپے بنتا ہے۔ فرق دکان کے میکنگ چارج اور آپ کے ایکسچینج ریٹ سے پڑتا ہے۔"
            : "At the mid-market spot, one tola of 22K gold costs about the same rupees everywhere. The gap you feel is making charges and the rate your exchange gives you."
          : ur
            ? `آج روپوں میں سب سے کم اسپاٹ ${cheapest?.place.name} میں ہے۔ پھر بھی دکان کا ریٹ الگ ہوگا۔`
            : `The lowest spot in rupees today is ${cheapest?.place.name}. A shop will still add making charges.`}
      </p>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="w-full min-w-[22rem] text-left">
          <thead className="bg-gold-soft text-sm">
            <tr>
              <th className="px-4 py-3">{ur ? "جگہ" : "Place"}</th>
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
                <td className="num px-4 py-3">{row.place.code} {formatMoney(row.local)}</td>
                <td className="num px-4 py-3">Rs {formatMoney(row.pkr, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-muted">
        1 tola = 11.6638 g. {ur ? "آخری جانچ" : "Last updated"}: <span className="num">{formatWhen(market.fetchedAt, locale)}</span>
      </p>
    </Page>
  );
}

export function goldPlaceHead(place: GoldPlace, locale: Locale) {
  const path = hrefFor(locale === "ur", `/gold-rates/${place.slug}`);
  const title = `Gold rate in ${place.name} today`.slice(0, 60);
  return pageMeta({
    title,
    description: `Indicative ${place.name} gold prices for 24K, 22K, 21K and 18K per gram and per tola, beside the rupee value.`,
    path,
    locale,
  });
}

export function GoldPlaceView({ place, market, locale }: { place: GoldPlace; market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const rows = goldRows(market, place.code);
  return (
    <Page kicker={place.code} title={ur ? `${place.name} میں سونا` : `Gold rate in ${place.name}`} lede={place.note}>
      {staleNote(market, locale)}
      <p className="mt-3 text-sm text-muted num">{formatWhen(market.fetchedAt, locale)}</p>
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
  return pageMeta({
    title: locale === "ur" ? "خلیج کے لیے عملی رہنما" : "Practical Gulf guides",
    description:
      locale === "ur"
        ? "نوکری، ویزا، خرچ، ترسیل، حقوق، حج اور پاکستان واپسی کے سفر۔"
        : "Jobs, visas, cost of living, remittances, labour rights, Hajj and the trip home.",
    path: hrefFor(locale === "ur", "/guides"),
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
  const path = hrefFor(payload.locale === "ur", `/guides/${payload.slug}`);
  const meta = guideBySlug(payload.slug);
  const title = (meta?.seoTitle ?? payload.title).slice(0, 60);
  const base = pageMeta({
    title,
    description: payload.description.slice(0, 160),
    path,
    locale: payload.locale,
  });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: "Home", path: payload.locale === "ur" ? "/ur" : "/" },
        { name: "Guides", path: hrefFor(payload.locale === "ur", "/guides") },
        { name: payload.title, path },
      ]),
      ld({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: payload.title,
        dateModified: updated,
        author: { "@type": "Organization", name: SITE_NAME },
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
    enTitle: "About GulfPK",
    urTitle: "گلف پی کے کے بارے میں",
    en: [
      "GulfPK is an independent desk for Pakistanis living and working in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.",
      "It publishes mid-market currency and gold figures, calculators, and practical guides. It is not a government, not a bank, not an exchange house, and not a recruitment agency.",
      "The point is to send people to official sources instead of WhatsApp numbers.",
    ],
    ur: [
      "گلف پی کے خلیج میں رہنے والے پاکستانیوں کے لیے ایک آزاد ڈیسک ہے۔",
      "یہ درمیانی ریٹ، سونا، کیلکولیٹر اور عملی رہنما شائع کرتا ہے۔ یہ حکومت، بینک، ایکسچینج یا بھرتی ایجنسی نہیں۔",
      "مقصد یہ ہے کہ لوگ واٹس ایپ کے بجائے سرکاری ذرائع دیکھیں۔",
    ],
  },
  contact: {
    enTitle: "Contact",
    urTitle: "رابطہ",
    en: [`Email ${CONTACT_EMAIL}. Change this address in the site settings before you launch.`, "There is no account and no form that stores your message on a server."],
    ur: [`ای میل ${CONTACT_EMAIL}۔ سائٹ چلانے سے پہلے یہ پتہ اپنی ترتیب میں بدل لیں۔`, "نہ اکاؤنٹ ہے، نہ ایسا فارم جو پیغام سرور پر محفوظ کرے۔"],
  },
  privacy: {
    enTitle: "Privacy policy",
    urTitle: "رازداری",
    en: [
      "GulfPK does not ask you to create an account. Calculators run in your browser.",
      "Currency and gold figures are fetched on the server from a public rate feed. We do not attach your name to that request.",
      "If a Google Analytics ID is configured, the site may send ordinary page-view data to Google. If it is empty, that tag is not added. Search Console verification is only a meta tag.",
    ],
    ur: [
      "اکاؤنٹ نہیں بنتا۔ کیلکولیٹر براؤزر میں چلتے ہیں۔",
      "ریٹ سرور پر ایک عوامی فیڈ سے آتے ہیں۔ آپ کا نام اس درخواست کے ساتھ نہیں جاتا۔",
      "اگر گوگل اینالٹکس کی آئی ڈی لگائی گئی ہو تو صفحے کے عام اعداد جا سکتے ہیں۔ خالی ہو تو ٹیگ نہیں لگتا۔",
    ],
  },
  terms: {
    enTitle: "Terms of use",
    urTitle: "استعمال کی شرائط",
    en: [
      "You may read GulfPK for personal information. Do not copy the guides onto another site and present them as your own.",
      "Calculators are estimates. They are not a contract, a court ruling, or a promise of a visa.",
    ],
    ur: [
      "ذاتی معلومات کے لیے پڑھ سکتے ہیں۔ رہنما نقل کر کے اپنی سائٹ پر اپنی تحریروں کے طور پر نہ لگائیں۔",
      "کیلکولیٹر اندازہ ہیں۔ یہ معاہدہ، عدالتی فیصلہ یا ویزے کا وعدہ نہیں۔",
    ],
  },
  disclaimer: {
    enTitle: "Disclaimer",
    urTitle: "دستبرداری",
    en: [
      "Rates and gold prices are indicative mid-market figures. They are not a rate your bank, exchange or jeweller must honour.",
      "Labour, visa and customs rules change. Where a fee is not printed on the official page linked in a guide, do not treat a number from social media as fact.",
      "Check with your bank, exchange, MOHRE, HRSD, ICP, Absher or Pakistan Customs before you act.",
    ],
    ur: [
      "ریٹ اور سونا اشاراتی درمیانی قیمتیں ہیں۔ آپ کا بینک یا سنار اس کا پابند نہیں۔",
      "قواعد بدلتے ہیں۔ جہاں فیس سرکاری صفحے پر نہ ہو، سوشل میڈیا کے عدد کو حقیقت نہ سمجھیں۔",
      "عمل سے پہلے اپنے بینک، محرہ، ایچ آر ایس ڈی، آئی سی پی، ابشر یا پاکستان کسٹمز سے تصدیق کریں۔",
    ],
  },
  editorial: {
    enTitle: "Editorial policy",
    urTitle: "ادارتی پالیسی",
    en: [
      "Guides are written in plain language and linked to official sources. We do not invent visa fees, fines or salary averages.",
      "If a rule is uncertain, the page says so and points to the authority that publishes it.",
      "Affiliate offers for remittance, flights and display ads exist in the code and stay switched off until a human turns them on. They must never change a rate or a legal explanation.",
      "Corrections: email the contact address with the page link and the source.",
    ],
    ur: [
      "رہنما سادہ زبان میں ہیں اور سرکاری ذرائع سے جڑے ہیں۔ ہم ویزا فیس، جرمانے یا اوسط تنخواہ نہیں گھڑتے۔",
      "قاعدہ غیر یقینی ہو تو صفحہ یہی کہتا ہے اور اتھارٹی کا لنک دیتا ہے۔",
      "اشتہار اور الحاق کوڈ میں ہیں اور بند ہیں۔ انہیں ریٹ یا قانونی وضاحت نہیں بدلنی چاہیے۔",
      "درستی کے لیے رابطہ ای میل پر صفحے کا لنک بھیجیں۔",
    ],
  },
};

export function legalHead(slug: string, locale: Locale) {
  const copy = legalCopy[slug];
  const title = (locale === "ur" ? copy.urTitle : copy.enTitle).slice(0, 60);
  return pageMeta({
    title,
    description: (locale === "ur" ? copy.ur[0] : copy.en[0]).slice(0, 160),
    path: hrefFor(locale === "ur", `/${slug}`),
    locale,
  });
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
  const map = {
    salary: {
      path: "/tools/salary-converter",
      title: locale === "ur" ? "خلیجی تنخواہ، روپوں میں" : "Gulf salary in Pakistani rupees",
      description: "Convert a Gulf salary to rupees and subtract a monthly budget you can edit.",
      name: "Salary converter",
    },
    gratuity: {
      path: "/tools/gratuity-calculator",
      title: locale === "ur" ? "یو اے ای اور سعودی گریچویٹی" : "UAE and Saudi gratuity calculator",
      description: "Estimate end-of-service benefits under UAE and Saudi rules. An estimate only.",
      name: "Gratuity calculator",
    },
    remit: {
      path: "/tools/remittance",
      title: locale === "ur" ? "دو ترسیلی کوٹ کا موازنہ" : "Compare two remittance quotes",
      description: "Enter two fees and two rates. See which quote lands more rupees. No affiliate offers.",
      name: "Remittance quote comparison",
    },
    flights: {
      path: "/tools/flights",
      title: locale === "ur" ? "خلیج سے پاکستان پروازیں" : "Flights from the Gulf to Pakistan",
      description: "Notes on comparing Gulf to Pakistan fares. The search widget is not switched on.",
      name: "Flight notes",
    },
  }[kind];
  const path = hrefFor(locale === "ur", map.path);
  const base = pageMeta({ title: map.title, description: map.description, path, locale });
  return {
    ...base,
    meta: [
      ...base.meta,
      ld({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: map.name,
        applicationCategory: "FinanceApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
