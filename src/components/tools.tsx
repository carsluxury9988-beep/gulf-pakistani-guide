import { useMemo, useState } from "react";
import { A } from "@/components/shell";
import { FlightSearch, RemittanceOffers } from "@/components/monetize";
import { formatMoney, pkrPer, type Market } from "@/lib/format";
import { salaryCountries, type Locale } from "@/lib/site";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1 text-sm font-semibold text-ink">
      {label}
      {children}
    </label>
  );
}

const inputClass =
  "min-h-11 rounded-md border border-line bg-surface px-3 text-base font-normal text-ink";

export function SalaryTool({ market, locale }: { market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const [code, setCode] = useState(salaryCountries[0].code);
  const country = salaryCountries.find((item) => item.code === code) ?? salaryCountries[0];
  const [presetId, setPresetId] = useState(country.presets[0].id);
  const preset = country.presets.find((item) => item.id === presetId) ?? country.presets[0];
  const [salary, setSalary] = useState(4000);
  const [lines, setLines] = useState(preset.lines.map((line) => line.amount));

  function chooseCountry(next: string) {
    const found = salaryCountries.find((item) => item.code === next) ?? salaryCountries[0];
    setCode(found.code);
    setPresetId(found.presets[0].id);
    setLines(found.presets[0].lines.map((line) => line.amount));
  }

  function choosePreset(id: string) {
    const found = country.presets.find((item) => item.id === id) ?? country.presets[0];
    setPresetId(found.id);
    setLines(found.lines.map((line) => line.amount));
  }

  const rate = pkrPer(market, code);
  const costs = lines.reduce((sum, value) => sum + (Number.isFinite(value) ? value : 0), 0);
  const left = salary - costs;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form className="grid gap-4 rounded-xl border border-line bg-surface p-4" onSubmit={(event) => event.preventDefault()}>
        <Field label={ur ? "ملک اور کرنسی" : "Country and currency"}>
          <select className={inputClass} value={code} onChange={(event) => chooseCountry(event.target.value)}>
            {salaryCountries.map((item) => (
              <option key={item.code} value={item.code}>
                {item.code}
              </option>
            ))}
          </select>
        </Field>
        <div className="flex flex-wrap gap-2">
          {country.presets.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`min-h-11 rounded-md px-3 ${item.id === preset.id ? "bg-green text-on-green" : "bg-gold-soft text-ink"}`}
              onClick={() => choosePreset(item.id)}
            >
              {ur ? item.ur : item.en}
            </button>
          ))}
        </div>
        <Field label={ur ? "ماہانہ تنخواہ" : "Monthly salary"}>
          <input
            className={`${inputClass} num`}
            inputMode="decimal"
            value={salary}
            onChange={(event) => setSalary(Number(event.target.value))}
          />
        </Field>
        <div className="grid gap-3">
          {preset.lines.map((line, index) => (
            <Field key={line.id} label={ur ? line.ur : line.en}>
              <input
                className={`${inputClass} num`}
                inputMode="decimal"
                value={lines[index] ?? 0}
                onChange={(event) => {
                  const next = [...lines];
                  next[index] = Number(event.target.value);
                  setLines(next);
                }}
              />
            </Field>
          ))}
        </div>
        <p className="text-sm text-muted">
          {ur
            ? "خرچ کی لائنیں منصوبہ بندی کی مثال ہیں۔ انہیں اپنے اصل کرایے اور سکول فیس سے بدل دیں۔ یہ سرکاری سروے نہیں۔"
            : "Cost lines are planning examples. Replace them with the rent and school fee you were actually quoted. They are not an official survey."}
        </p>
      </form>
      <aside className="rounded-xl bg-green p-5 text-on-green">
        <p className="text-sm text-gold">{ur ? "ماہانہ تصویر" : "Monthly picture"}</p>
        <dl className="mt-4 grid gap-3">
          <div>
            <dt>{ur ? "تنخواہ، روپوں میں" : "Salary in rupees"}</dt>
            <dd className="num font-display text-3xl">Rs {formatMoney(salary * rate)}</dd>
          </div>
          <div>
            <dt>{ur ? "خرچ" : "Costs"}</dt>
            <dd className="num text-xl">
              {formatMoney(costs)} {code} · Rs {formatMoney(costs * rate)}
            </dd>
          </div>
          <div>
            <dt>{ur ? "بچت" : "Left over"}</dt>
            <dd className="num font-display text-3xl">{left >= 0 ? "" : "−"}Rs {formatMoney(Math.abs(left) * rate)}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-on-green/85">
          {ur
            ? `درمیانی ریٹ: 1 ${code} = ${formatMoney(rate, 2)} روپے۔ بینک کا ریٹ مختلف ہوگا۔`
            : `Mid-market: 1 ${code} = Rs ${formatMoney(rate)}. Your bank’s rate will differ.`}
        </p>
      </aside>
    </div>
  );
}

export function GratuityTool({ locale }: { locale: Locale }) {
  const ur = locale === "ur";
  const [place, setPlace] = useState<"uae" | "saudi">("uae");
  const [wage, setWage] = useState(3000);
  const [years, setYears] = useState(3);
  const [days, setDays] = useState(0);
  const [resigned, setResigned] = useState(false);
  const service = years + days / 365;

  const result = useMemo(() => {
    if (wage <= 0 || service < 0) return null;
    if (place === "uae") {
      const daily = wage / 30;
      if (service < 1) return { total: 0, note: ur ? "ایک سال سے کم: اندازہ صفر۔" : "Under one year: the estimate is zero." };
      const raw = Math.min(service, 5) * 21 * daily + Math.max(0, service - 5) * 30 * daily;
      const cap = wage * 24;
      const capped = raw > cap;
      return {
        total: Math.min(raw, cap),
        note: capped
          ? ur
            ? "دو سال کی تنخواہ کی قانونی حد لگ گئی۔"
            : "The two-year wage cap applies."
          : ur
            ? "پہلے پانچ سال ۲۱ دن، پھر ۳۰ دن، بنیادی تنخواہ ÷ ۳۰۔"
            : "21 days for the first five years, then 30. Daily wage is basic ÷ 30.",
      };
    }
    const full = Math.min(service, 5) * wage * 0.5 + Math.max(0, service - 5) * wage;
    let factor = 1;
    if (resigned) {
      if (service < 2) factor = 0;
      else if (service < 5) factor = 1 / 3;
      else if (service < 10) factor = 2 / 3;
    }
    return {
      total: full * factor,
      note: resigned
        ? ur
          ? "استعفیٰ پر سعودی قانون کی کٹوتی لگی ہے: دو سال سے کم پر صفر، پانچ سے کم پر ایک تہائی، دس سے کم پر دو تہائی۔"
          : "Resignation scale: nothing under 2 years, one third under 5, two thirds under 10, full after 10."
        : ur
          ? "آجر کی طرف سے ختم ہونے پر مکمل ایوارڈ: پہلے پانچ سال آدھا مہینہ، پھر پورا مہینہ۔"
          : "Employer-ended service: half a month for each of the first five years, then a full month.",
    };
  }, [place, resigned, service, ur, wage]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form className="grid gap-4 rounded-xl border border-line bg-surface p-4" onSubmit={(event) => event.preventDefault()}>
        <Field label={ur ? "ملک" : "Country"}>
          <select className={inputClass} value={place} onChange={(event) => setPlace(event.target.value as "uae" | "saudi")}>
            <option value="uae">{ur ? "متحدہ عرب امارات" : "United Arab Emirates"}</option>
            <option value="saudi">{ur ? "سعودی عرب" : "Saudi Arabia"}</option>
          </select>
        </Field>
        <Field label={place === "uae" ? (ur ? "ماہانہ بنیادی تنخواہ" : "Monthly basic wage") : ur ? "آخری ماہانہ تنخواہ" : "Last monthly wage"}>
          <input className={`${inputClass} num`} inputMode="decimal" value={wage} onChange={(event) => setWage(Number(event.target.value))} />
        </Field>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label={ur ? "پورے سال" : "Full years"}>
            <input className={`${inputClass} num`} inputMode="numeric" value={years} onChange={(event) => setYears(Number(event.target.value))} />
          </Field>
          <Field label={ur ? "اضافی دن" : "Extra days"}>
            <input className={`${inputClass} num`} inputMode="numeric" value={days} onChange={(event) => setDays(Number(event.target.value))} />
          </Field>
        </div>
        {place === "saudi" ? (
          <fieldset className="grid gap-2">
            <legend className="text-sm font-semibold">{ur ? "سروس کیسے ختم ہوئی؟" : "How did the job end?"}</legend>
            <label className="flex min-h-11 items-center gap-2">
              <input type="radio" name="end" checked={!resigned} onChange={() => setResigned(false)} />
              {ur ? "آجر نے ختم کیا" : "Employer ended it"}
            </label>
            <label className="flex min-h-11 items-center gap-2">
              <input type="radio" name="end" checked={resigned} onChange={() => setResigned(true)} />
              {ur ? "کارکن نے استعفیٰ دیا" : "Worker resigned"}
            </label>
          </fieldset>
        ) : null}
        <p className="rounded-lg bg-gold-soft p-3 text-sm text-ink">
          {ur
            ? "یہ صرف اندازہ ہے۔ یو اے ای میں محرہ اور سعودی عرب میں وزارت انسانی وسائل حتمی فیصلہ کرتے ہیں۔ غلط برطرفی کے استثنا الگ ہیں۔"
            : "Estimate only. MOHRE in the UAE and HRSD in Saudi Arabia decide real cases. Misconduct dismissals and some contract types are excluded."}
        </p>
      </form>
      <aside className="rounded-xl bg-green p-5 text-on-green">
        <p className="text-sm text-gold">{ur ? "اندازہ" : "Estimate"}</p>
        <p className="num mt-3 font-display text-4xl">
          {result ? formatMoney(result.total) : "—"} <span className="text-2xl">{place === "uae" ? "AED" : "SAR"}</span>
        </p>
        <p className="mt-4 text-on-green/90">{result?.note}</p>
        <p className="mt-4">
          <A href={ur ? "/ur/guides/uae-gratuity-rules" : "/guides/uae-gratuity-rules"} className="text-gold underline">
            {ur ? "یو اے ای کے قواعد پڑھیں" : "Read the UAE rules"}
          </A>
        </p>
      </aside>
    </div>
  );
}

export function RemittanceTool({ market, locale }: { market: Market; locale: Locale }) {
  const ur = locale === "ur";
  const [amount, setAmount] = useState(1000);
  const [feeA, setFeeA] = useState(15);
  const [rateA, setRateA] = useState(Number(pkrPer(market, "AED").toFixed(2)));
  const [feeB, setFeeB] = useState(0);
  const [rateB, setRateB] = useState(Number((pkrPer(market, "AED") - 0.4).toFixed(2)));
  const receive = (fee: number, rate: number) => Math.max(0, amount - fee) * rate;
  const a = receive(feeA, rateA);
  const b = receive(feeB, rateB);
  return (
    <div className="grid gap-4">
      <RemittanceOffers />
      <p className="text-muted">
        {ur
          ? "یہ ٹول کمپنیوں کی فہرست نہیں۔ دو کوٹ خود لکھیں: فیس اور وہ ریٹ جو رسید پر روپے بناتا ہے۔"
          : "This is not a league table of companies. Type two quotes yourself: the fee, and the rate that turns into rupees on the receipt."}
      </p>
      <Field label={ur ? "جتنی رقم بھیجنی ہے" : "Amount you hand over"}>
        <input className={`${inputClass} num max-w-xs`} inputMode="decimal" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />
      </Field>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          [ur ? "پہلا کوٹ" : "Quote A", feeA, setFeeA, rateA, setRateA, a],
          [ur ? "دوسرا کوٹ" : "Quote B", feeB, setFeeB, rateB, setRateB, b],
        ].map(([label, fee, setFee, rate, setRate, got]) => (
          <fieldset key={String(label)} className="grid gap-3 rounded-xl border border-line bg-surface p-4">
            <legend className="px-1 font-semibold">{label as string}</legend>
            <Field label={ur ? "فیس، اسی کرنسی میں" : "Fee, same currency"}>
              <input className={`${inputClass} num`} inputMode="decimal" value={fee as number} onChange={(event) => (setFee as (n: number) => void)(Number(event.target.value))} />
            </Field>
            <Field label={ur ? "روپے فی ایک یونٹ" : "Rupees per 1 unit"}>
              <input className={`${inputClass} num`} inputMode="decimal" value={rate as number} onChange={(event) => (setRate as (n: number) => void)(Number(event.target.value))} />
            </Field>
            <p className="num text-2xl font-display text-green">Rs {formatMoney(got as number)}</p>
          </fieldset>
        ))}
      </div>
      <p className="font-semibold text-ink">
        {a === b
          ? ur
            ? "دونوں کوٹ برابر روپے دیتے ہیں۔"
            : "Both quotes land the same rupees."
          : a > b
            ? ur
              ? "پہلا کوٹ زیادہ روپے دیتا ہے۔"
              : "Quote A lands more rupees."
            : ur
              ? "دوسرا کوٹ زیادہ روپے دیتا ہے۔"
              : "Quote B lands more rupees."}
      </p>
    </div>
  );
}

export function FlightNotes({ locale }: { locale: Locale }) {
  const ur = locale === "ur";
  return (
    <div className="grid gap-4">
      <FlightSearch />
      <p className="text-muted">
        {ur
          ? "فلائٹ سرچ ابھی بند ہے۔ جب تک اصل سرچ نہ ہو، قیمتیں نہیں دکھاتے۔ تاریخ، بیگ اور پی این آر خود ایئرلائن کی سائٹ پر دیکھیں۔"
          : "Flight search is switched off. Until a real search is connected, this page will not invent fares. Check the date, the bag and the PNR on the airline’s own site."}
      </p>
      <ul className="grid gap-2">
        <li>
          <A href={ur ? "/ur/guides/cheap-flights-dubai-to-pakistan" : "/guides/cheap-flights-dubai-to-pakistan"} className="text-green underline">
            {ur ? "دبئی سے پاکستان" : "Dubai to Pakistan"}
          </A>
        </li>
        <li>
          <A href={ur ? "/ur/guides/cheap-flights-saudi-to-pakistan" : "/guides/cheap-flights-saudi-to-pakistan"} className="text-green underline">
            {ur ? "سعودی عرب سے پاکستان" : "Saudi Arabia to Pakistan"}
          </A>
        </li>
        <li>
          <A href={ur ? "/ur/guides/baggage-allowance-gulf-to-pakistan" : "/guides/baggage-allowance-gulf-to-pakistan"} className="text-green underline">
            {ur ? "سامان کی حد" : "Baggage allowance"}
          </A>
        </li>
      </ul>
    </div>
  );
}
