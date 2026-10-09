/* eslint-disable react-refresh/only-export-components */
import { A, Crumb, Page } from "@/components/shell";
import { Rich } from "@/components/rich-text";
import { jobSections, jobTitles } from "@/lib/content/job-hubs";
import { saudiQa } from "@/lib/content/qa-saudi";
import { QA_CHECKED, type QaPage } from "@/lib/content/qa-types";
import { uaeQa } from "@/lib/content/qa-uae";
import type { Block } from "@/lib/content/types";
import { breadcrumbLd, ld, pageMeta } from "@/lib/seo";
import { countries, type Country, type Locale } from "@/lib/site";
const QUESTION_TITLES: Record<string, string> = {
  uae: "Working in the UAE: Questions Pakistanis Ask | Apna Ghar",
  "saudi-arabia": "Working in Saudi Arabia: Questions Pakistanis Ask",
  qatar: "Working in Qatar: Questions Pakistanis Ask | Apna Ghar",
  kuwait: "Working in Kuwait: Questions Pakistanis Ask | Apna Ghar",
  oman: "Working in Oman: Questions Pakistanis Ask | Apna Ghar",
  bahrain: "Working in Bahrain: Questions Pakistanis Ask | Apna Ghar",
};

const QA_PAGES: Record<string, QaPage> = {
  uae: uaeQa,
  "saudi-arabia": saudiQa,
};

function faqLd(pack: QaPage) {
  return ld({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pack.groups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${item.a} Source: ${item.sourceName}. Checked on ${QA_CHECKED}.`,
        },
      })),
    ),
  });
}

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
          a: `There is no official number of days that fits every file. Medical, the Protector in Pakistan, and the employer’s licence all sit in the queue. The steps are in the [[${visa}|visa guide]].`,
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
            ? `The UAE family page states a sponsor salary test. Read [[/guides/family-visa-uae-salary-requirement|the family visa guide]] and that government page again before you apply. This answer does not restate the figure without you opening the page.`
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

export function jobHead(country: Country, _locale: Locale) {
  const path = `/jobs/${country.slug}`;
  const title = jobTitles[country.slug];
  const description = `How Pakistanis look for work in ${country.short}: the official labour portal, a licensed path from Pakistan, and the contract lines that matter. No invented salary survey.`;
  const base = pageMeta({ title, description, path, locale: "en", urAlternate: false });
  return {
    ...base,
    meta: [
      ...base.meta,
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: country.short, path: `/${country.slug}` },
        { name: "Jobs", path },
      ]),
    ],
  };
}

export function questionHead(country: Country, _locale: Locale) {
  const path = `/questions/${country.slug}`;
  const pack = QA_PAGES[country.slug];
  const title = pack?.title ?? QUESTION_TITLES[country.slug];
  const description =
    pack?.description ??
    `Short answers Pakistanis ask before working in ${country.short}. These pages repeat a template and are kept out of search until each answer is sourced.`;
  const base = pageMeta({
    title,
    description,
    path,
    locale: "en",
    urAlternate: false,
    ...(pack ? {} : { robots: "noindex, follow" }),
  });
  return {
    ...base,
    meta: [
      ...base.meta,
      ...(pack ? [faqLd(pack)] : []),
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: country.short, path: `/${country.slug}` },
        { name: "Q&A", path },
      ]),
    ],
  };
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.t === "h2") return <h2 key={index} id={block.id} className="mt-8 font-display text-2xl text-green">{block.text}</h2>;
        if (block.t === "p") return <p key={index} className="mt-3"><Rich text={block.text} /></p>;
        if (block.t === "note") return null;
        if (block.t === "ul") {
          return (
            <ul key={index} className="mt-3 list-disc ps-5">
              {block.items.map((item) => <li key={item} className="mt-1"><Rich text={item} /></li>)}
            </ul>
          );
        }
        if (block.t === "ol") {
          return (
            <ol key={index} className="mt-3 list-decimal ps-5">
              {block.items.map((item) => <li key={item} className="mt-1"><Rich text={item} /></li>)}
            </ol>
          );
        }
        return null;
      })}
    </>
  );
}

export function JobsView({ country, blocks }: { country: Country; locale: Locale; blocks: Block[] }) {
  const sections = jobSections[country.slug] ?? [];
  return (
    <Page
      kicker={country.short}
      title={`Jobs in ${country.short} for Pakistanis`}
      lede="One page for this country: the labour portal, the Pakistan-side exit, and what the contract has to say. The wage is the one written down."
    >
      <Crumb items={[{ href: "/", label: "Home" }, { href: `/${country.slug}`, label: country.short }, { label: "Jobs" }]} />
      <article className="mt-6 max-w-3xl">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mt-8 font-display text-2xl text-green">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mt-3"><Rich text={paragraph} /></p>
            ))}
          </section>
        ))}
        {blocks.length ? (
          <>
            <h2 className="mt-8 font-display text-2xl text-green">The longer note</h2>
            <Blocks blocks={blocks} />
          </>
        ) : null}
        <p className="mt-6 text-sm text-muted">
          Fees and fines change. If a number is not on the official page linked here, treat it as unchecked.{" "}
          <A href="/disclaimer" className="text-green underline">Disclaimer</A>.
        </p>
      </article>
    </Page>
  );
}

export function QuestionsView({ country }: { country: Country; locale: Locale }) {
  const pack = QA_PAGES[country.slug];
  if (pack) return <SourcedQuestions country={country} pack={pack} />;
  const groups = qa(country);
  return (
    <Page
      kicker={country.short}
      title={QUESTION_TITLES[country.slug]}
      lede="These answers are a shared template with the country name swapped. They stay on the site for readers, and they are marked noindex until each country has its own sourced set."
    >
      <Crumb items={[{ href: "/", label: "Home" }, { href: `/${country.slug}`, label: country.short }, { label: "Q&A" }]} />
      <CountryPills current={country.slug} />
      {groups.map((group) => (
        <section key={group.heading} className="mt-8 max-w-3xl">
          <h2 className="font-display text-2xl text-green">{group.heading}</h2>
          <div className="mt-3 grid gap-3">
            {group.items.map((item) => (
              <details key={item.q} className="rounded-xl border border-line bg-surface px-4 py-3" open>
                <summary className="cursor-pointer font-semibold">{item.q}</summary>
                <p className="mt-2 text-muted"><Richish text={item.a} hrefFor={(path) => path} /></p>
              </details>
            ))}
          </div>
        </section>
      ))}
      <p className="mt-8">
        <A href={`/jobs/${country.slug}`} className="font-semibold text-green underline">Jobs in {country.short}</A>
      </p>
    </Page>
  );
}

function SourcedQuestions({ country, pack }: { country: Country; pack: QaPage }) {
  return (
    <Page kicker={country.short} title={pack.title} lede={pack.lede}>
      <Crumb items={[{ href: "/", label: "Home" }, { href: `/${country.slug}`, label: country.short }, { label: "Q&A" }]} />
      <CountryPills current={country.slug} />
      {pack.groups.map((group) => (
        <section key={group.heading} className="mt-8 max-w-3xl">
          <h2 className="font-display text-2xl text-green">{group.heading}</h2>
          <div className="mt-3 grid gap-3">
            {group.items.map((item) => (
              <details key={item.q} className="rounded-xl border border-line bg-surface px-4 py-3">
                <summary className="cursor-pointer font-semibold">{item.q}</summary>
                <p className="mt-2">{item.a}</p>
                <p className="mt-2 text-sm text-muted">
                  Source:{" "}
                  <a href={item.sourceUrl} className="font-semibold text-green underline" target="_blank" rel="noopener noreferrer">
                    {item.sourceName}
                  </a>
                  . Checked on {QA_CHECKED}.
                </p>
                {item.links?.length ? (
                  <p className="mt-2 text-sm">
                    {item.links.map((link) => (
                      <A key={link.href} href={link.href} className="me-3 inline-block font-semibold text-green underline">
                        {link.label}
                      </A>
                    ))}
                  </p>
                ) : null}
              </details>
            ))}
          </div>
        </section>
      ))}
    </Page>
  );
}

function CountryPills({ current }: { current: string }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {countries.map((item) => (
        <A key={item.slug} href={`/questions/${item.slug}`} className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm ${item.slug === current ? "bg-green text-on-green" : "bg-gold-soft"}`}>
          {item.short}
        </A>
      ))}
    </div>
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
