/* eslint-disable react-refresh/only-export-components */
import { A, Crumb, Page } from "@/components/shell";
import { breadcrumbLd, ld, pageMeta } from "@/lib/seo";
import { countries, hrefFor, type Country, type Locale } from "@/lib/site";

const CHECKED = "10 October 2026";

const TITLES: Record<string, { jobs: string; questions: string }> = {
  uae: {
    jobs: "Jobs in UAE for Pakistanis 2026: How to Apply, Salaries, Demand",
    questions: "Working in the UAE: 26 Questions Pakistanis Ask (2026)",
  },
  "saudi-arabia": {
    jobs: "Jobs in Saudi Arabia for Pakistanis 2026: Apply, Pay, Demand",
    questions: "Working in Saudi Arabia: 26 Questions Pakistanis Ask (2026)",
  },
  qatar: {
    jobs: "Jobs in Qatar for Pakistanis 2026: How to Apply and What to Check",
    questions: "Working in Qatar: 26 Questions Pakistanis Ask (2026)",
  },
  kuwait: {
    jobs: "Jobs in Kuwait for Pakistanis 2026: How to Apply and What to Check",
    questions: "Working in Kuwait: 26 Questions Pakistanis Ask (2026)",
  },
  oman: {
    jobs: "Jobs in Oman for Pakistanis 2026: How to Apply and What to Check",
    questions: "Working in Oman: 26 Questions Pakistanis Ask (2026)",
  },
  bahrain: {
    jobs: "Jobs in Bahrain for Pakistanis 2026: How to Apply and What to Check",
    questions: "Working in Bahrain: 26 Questions Pakistanis Ask (2026)",
  },
};

type Qa = { q: string; a: string };

function qa(country: Country): { heading: string; items: Qa[] }[] {
  const name = country.short;
  const money =
    country.slug === "saudi-arabia"
      ? "/guides/send-money-saudi-to-pakistan"
      : country.slug === "uae"
        ? "/guides/send-money-uae-to-pakistan"
        : "/guides/roshan-digital-account";
  const visa =
    country.slug === "uae"
      ? "/guides/uae-work-visa-pakistan"
      : country.slug === "saudi-arabia"
        ? "/guides/saudi-work-visa-pakistan"
        : `/guides/${country.slug}-visa-for-pakistanis`;
  return [
    {
      heading: "Jobs and skills",
      items: [
        {
          q: `Which skills are most in demand in ${name}?`,
          a: `Employers still hire drivers, electricians, nurses, hospitality staff and site trades, but demand moves with projects. A Facebook list is not a survey. Read a current vacancy from a company you can look up, and the [[${visa}|work visa guide]] before you resign.`,
        },
        {
          q: "Which jobs pay best for Pakistanis?",
          a: `There is no official league table of Pakistani wages in ${name}. Licensed professionals and supervisors are usually offered more than a general helper. The only figure that matters is the basic wage on the contract you can read.`,
        },
        {
          q: "What salary should a driver expect?",
          a: "There is no single driver salary. Ask for basic pay, housing, overtime and who pays the visa. The [[/guides/driver-jobs-in-dubai-salary|Dubai driver note]] explains how to read a contract. Do not treat an advert as a survey.",
        },
        {
          q: "What about electrician pay?",
          a: "Trade papers and a test often matter more than a round number in a chat. See [[/guides/electrician-jobs-in-gulf|electrician jobs in the Gulf]]. If the offer will not name basic pay, do not fly.",
        },
        {
          q: "What about nurse pay?",
          a: "Hospitals hire against a licence, not a WhatsApp salary. The [[/guides/nurse-jobs-in-saudi-salary|Saudi nurse note]] is the careful version. Other countries use their own health-authority path. Confirm that path before you pay an agent.",
        },
        {
          q: "What should an engineer or accountant expect?",
          a: `Credential attestation and a named employer matter more than a package slogan. ${name} does not publish a Pakistani engineer wage on a page this site can quote. Read the contract.`,
        },
        {
          q: "Can I get a job without experience?",
          a: "Helpers and some hospitality roles are offered to first-time travellers. That does not make a fee-first agent legitimate. A real offer still names the company.",
        },
        {
          q: "Do I need English or Arabic?",
          a: "Many sites run in English. Arabic helps with customers and with reading a fine. Neither language replaces a written wage.",
        },
      ],
    },
    {
      heading: "Remote work and freelancing",
      items: [
        {
          q: `Can I work remotely for a foreign company while living in ${name}?`,
          a: "A residence that was issued for a local employer is not automatic permission to work for someone else. Read the residence rules for your file before you invoice a client abroad.",
        },
        {
          q: "Is freelancing legal, and is there a freelance visa?",
          a: `${name} may offer a freelance or self-sponsorship product in some years and not in others. Check the interior or labour site for the current product. Do not buy a freelance visa from a Pakistan shop that cannot show that page.`,
        },
      ],
    },
    {
      heading: "Visa and documents",
      items: [
        {
          q: "How long does a work visa take?",
          a: `There is no official number of days that fits every file. Medical, the Protector in Pakistan, and the employer’s licence all sit in the queue. The steps are in the [[${visa}|visa guide]]. Checked on ${CHECKED}.`,
        },
        {
          q: "Can I change jobs?",
          a: "A transfer is a labour transaction, not a favour from a friend. Some contracts block it for a period. Read the labour ministry guidance for your sponsorship before you pay a broker for a no-objection letter.",
        },
        {
          q: "What happens if my visa expires?",
          a: "An expired residence can stop work, banking and travel. Tell the employer the day you see the date, and keep a screenshot. Do not pay a typing shop to hide it.",
        },
        {
          q: "Who should pay the visa fee?",
          a: "The employer usually files the work residence. A large cash fee in Pakistan, before any contract, is a reason to stop. See [[/guides/visa-agent-scam-pakistan|visa agent scams]] and [[/guides/protector-of-emigrants|the Protector]].",
        },
      ],
    },
    {
      heading: "Money",
      items: [
        {
          q: "How much can I save each month?",
          a: `Rent and food decide it, not a cousin’s story. Put your own wage and costs in the [[/tools/salary-converter|salary converter]]. ${name} has no official savings rate for Pakistani workers.`,
        },
        {
          q: "Is there income tax?",
          a: `Gulf states do not all use the same income-tax rule, and a rule can change. Read the finance ministry or tax authority for ${name} before you assume the wage is untouched. This page will not invent a rate.`,
        },
        {
          q: "What is the cheapest way to send money home?",
          a: `Compare the rupees that arrive, not a zero-fee advert. Use the [[/tools/remittance|quote tool]] and the [[${money}|remittance guide]].`,
        },
      ],
    },
    {
      heading: "Life",
      items: [
        {
          q: "What does it cost a single person to live?",
          a: "Shared housing is the usual starting point. The Dubai and Riyadh cost guides are planning examples you can edit, not a survey. Replace every line with a number you have been quoted in writing.",
        },
        {
          q: "What does a family budget look like?",
          a: "School fees and a flat change the sum completely. Confirm the school invoice with the school. Do not add a spouse to the residence until you have read the family-visa rule for your emirate or kingdom.",
        },
        {
          q: "Can I bring my family?",
          a: country.slug === "uae"
            ? `Checked on ${CHECKED}, the UAE family page says a sponsor needs AED 4,000, or AED 3,000 plus accommodation. Read [[/guides/family-visa-uae-salary-requirement|the family visa guide]] and the government page again before you apply.`
            : `Family residence in ${name} has its own salary and document test. It is not the same as a visit visa. Read the interior ministry page for your file. This site will not guess the threshold.`,
        },
        {
          q: "Is health insurance required?",
          a: "Many residences will not renew without insurance. Ask HR which policy covers you and when it ends. A verbal promise is not a policy number.",
        },
        {
          q: "What if the employer does not pay?",
          a: `Keep the contract, the attendance record and the unpaid months. Complain to the labour ministry in ${name}, not only in a family group. A broker who offers to fix it for cash is another risk.`,
        },
        {
          q: "Who provides accommodation?",
          a: "Some contracts include a room, some pay an allowance, some do neither. The line on the contract is the rule for your file. A camp photo in an advert is not.",
        },
        {
          q: "How many days off should the contract show?",
          a: "The weekly rest day and annual leave belong in the contract and in the labour law, not in a voice note. Read both before you sign.",
        },
        {
          q: "Can I open a bank account?",
          a: "Banks usually want a residence and a salary letter. A friend holding your card is how savings disappear. Open the account in your own name.",
        },
        {
          q: "Where do I complain about a fake agent in Pakistan?",
          a: "Keep receipts. The doors are the Bureau of Emigration and the FIA. See [[/guides/report-visa-fraud-fia|how to report fraud]]. A complaint is not a refund.",
        },
      ],
    },
  ];
}

export function jobHead(country: Country, locale: Locale) {
  const ur = locale === "ur";
  const path = hrefFor(ur, `/jobs/${country.slug}`);
  const label = ur ? country.nameUr : country.short;
  const title = ur ? `${label} میں نوکریاں ۲۰۲۶ | اپنا گھر` : TITLES[country.slug].jobs;
  const description = ur
    ? `${label} میں پاکستانیوں کے لیے نوکری کا راستہ: مانگ، لائسنس یافتہ او ای پی، ویزا، میڈیکل، دستاویزات اور دھوکے۔ تنخواہ وہی ہے جو تحریری معاہدے پر لکھی ہو۔`
    : `How Pakistanis look for work in ${country.short} in 2026: demand, a licensed path from Pakistan, the visa steps, documents, and the scams to refuse. The wage is the one on the contract.`;
  const base = pageMeta({ title, description, path, locale });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: ur ? "ہوم" : "Home", path: ur ? "/ur" : "/" },
        { name: label, path: hrefFor(ur, `/${country.slug}`) },
        { name: ur ? "نوکری" : "Jobs", path },
      ]),
    ],
  };
}

export function questionHead(country: Country, locale: Locale) {
  const ur = locale === "ur";
  const path = hrefFor(ur, `/questions/${country.slug}`);
  const label = ur ? country.nameUr : country.short;
  const title = ur ? `${label}: پاکستانیوں کے سوال، ۲۰۲۶ | اپنا گھر` : TITLES[country.slug].questions;
  const description = ur
    ? `${label} میں کام، ویزا، پیسے، فری لانس اور خاندان کے مختصر سوال۔ جہاں عدد سرکاری صفحے پر ہے وہیں لنک ہے۔ جو عدد نظر نہیں آتا، اسے لکھا نہیں گیا۔`
    : `Short answers Pakistanis ask before working in ${country.short}: jobs, visas, money and family. A number is stated only when an official page states it.`;
  const groups = qa(country);
  const base = pageMeta({ title, description, path, locale });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: "Home", path: ur ? "/ur" : "/" },
        { name: label, path: hrefFor(ur, `/${country.slug}`) },
        { name: "Q&A", path },
      ]),
      ld({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: groups.flatMap((group) =>
          group.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2") },
          })),
        ),
      }),
    ],
  };
}

export function JobsView({ country, locale }: { country: Country; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const visa =
    country.slug === "uae"
      ? "/guides/uae-work-visa-pakistan"
      : country.slug === "saudi-arabia"
        ? "/guides/saudi-work-visa-pakistan"
        : `/guides/${country.slug}-visa-for-pakistanis`;
  return (
    <Page
      kicker={country.short}
      title={ur ? `${country.nameUr} میں نوکریاں` : `Jobs in ${country.short} for Pakistanis`}
      lede={ur ? "۲۰۲۶ کا راستہ: کمپنی، ویزا، دستاویز، اور فیس پہلے۔" : "The 2026 path: a named company, a visa, the papers, and no fee-first agent."}
    >
      <Crumb items={[{ href: h("/"), label: ur ? "ہوم" : "Home" }, { href: h(`/${country.slug}`), label: country.short }, { label: ur ? "نوکری" : "Jobs" }]} />
      <p className="mt-4 text-sm text-muted">{ur ? "آخری جائزہ" : "Last reviewed"}: {CHECKED}</p>
      <section className="mt-6 max-w-3xl">
        <h2 className="font-display text-2xl text-green">{ur ? "مانگ" : "In demand"}</h2>
        <p className="mt-2">
          Drivers, electricians, nurses, hospitality and site trades are the roles Pakistanis are usually offered. {country.short} does not publish a Pakistani-only demand list. A vacancy on a company site you can verify is the list that counts.
        </p>
        <h2 className="mt-8 font-display text-2xl text-green">{ur ? "پاکستان سے درخواست" : "How to apply from Pakistan"}</h2>
        <ol className="mt-2 list-decimal space-y-2 ps-5">
          <li>Look for a named employer, not a “guaranteed visa”.</li>
          <li>If you use an agent, check the Overseas Employment Promoter on the Bureau of Emigration list. See the <A href={h("/guides/oep-licensed-agents")} className="text-green underline">licence guide</A>.</li>
          <li>The employer files the work visa. You do not buy the file in a market office.</li>
          <li>Employment departures pass the Protector. Read the <A href={h("/guides/protector-of-emigrants")} className="text-green underline">Protector guide</A>.</li>
        </ol>
        <h2 className="mt-8 font-display text-2xl text-green">{ur ? "ویزا اور میڈیکل" : "Visa and medical"}</h2>
        <p className="mt-2">
          Follow the <A href={h(visa)} className="text-green underline">visa guide for {country.short}</A>. If the instruction names Wafid, book only on wafid.com. A fit slip is not the visa.
        </p>
        <h2 className="mt-8 font-display text-2xl text-green">{ur ? "تنخواہ" : "Typical pay"}</h2>
        <p className="mt-2">
          This page does not print a salary survey. Basic pay, housing and overtime are lines on the contract. Put that basic wage in the <A href={h("/tools/salary-converter")} className="text-green underline">salary converter</A>. Driver, nurse and electrician notes linked from the Q&A explain how to read an offer without treating an advert as data.
        </p>
        <h2 className="mt-8 font-display text-2xl text-green">{ur ? "دستاویزات" : "Documents"}</h2>
        <p className="mt-2">
          Passport, photographs, trade or education certificates, and a police or medical paper when the file asks for them. Attestation is whatever the receiving authority currently asks. Do not pay for a stamp you cannot see on that authority’s page.
        </p>
        <h2 className="mt-8 font-display text-2xl text-green">{ur ? "دھوکا" : "Scams"}</h2>
        <p className="mt-2">
          A fee before an offer, a free email, and a company you cannot find are the usual three. Read <A href={h("/guides/fake-job-offer-dubai")} className="text-green underline">fake offers</A> and <A href={h("/guides/visa-agent-scam-pakistan")} className="text-green underline">agent scams</A>.
        </p>
        <p className="mt-6">
          <A href={h(`/questions/${country.slug}`)} className="font-semibold text-green underline">{ur ? "سوالات پڑھیں" : `Questions about working in ${country.short}`}</A>
        </p>
      </section>
    </Page>
  );
}

export function QuestionsView({ country, locale }: { country: Country; locale: Locale }) {
  const ur = locale === "ur";
  const h = (path: string) => hrefFor(ur, path);
  const groups = qa(country);
  return (
    <Page
      kicker={country.short}
      title={ur ? `${country.nameUr} کے سوال` : TITLES[country.slug].questions}
      lede={ur ? "مختصر جواب۔ عدد صرف وہیں جہاں سرکاری صفحہ ہو۔" : "Short answers. A number appears only when an official page states it."}
    >
      <Crumb items={[{ href: h("/"), label: "Home" }, { href: h(`/${country.slug}`), label: country.short }, { label: "Q&A" }]} />
      <p className="mt-4 text-sm text-muted">Last reviewed: {CHECKED}. Checked dates inside answers use the same day unless a guide says otherwise.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {countries.map((item) => (
          <A key={item.slug} href={h(`/questions/${item.slug}`)} className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm ${item.slug === country.slug ? "bg-green text-on-green" : "bg-gold-soft"}`}>
            {item.short}
          </A>
        ))}
      </div>
      {groups.map((group) => (
        <section key={group.heading} className="mt-8 max-w-3xl">
          <h2 className="font-display text-2xl text-green">{group.heading}</h2>
          <div className="mt-3 grid gap-3">
            {group.items.map((item) => (
              <details key={item.q} className="rounded-xl border border-line bg-surface px-4 py-3" open>
                <summary className="cursor-pointer font-semibold">{item.q}</summary>
                <p className="mt-2 text-muted"><Richish text={item.a} hrefFor={h} /></p>
              </details>
            ))}
          </div>
        </section>
      ))}
      <p className="mt-8">
        <A href={h(`/jobs/${country.slug}`)} className="font-semibold text-green underline">Jobs in {country.short}</A>
      </p>
    </Page>
  );
}

function Richish({ text, hrefFor: mapHref }: { text: string; hrefFor: (path: string) => string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = /^\[\[([^|\]]+)\|([^\]]+)\]\]$/.exec(part);
        if (!match) return <span key={index}>{part}</span>;
        return (
          <A key={index} href={mapHref(match[1])} className="font-semibold text-green underline">
            {match[2]}
          </A>
        );
      })}
    </>
  );
}
