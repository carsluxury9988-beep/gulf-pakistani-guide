import type { QaPage } from "@/lib/content/qa-types";

const FAMILY =
  "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members";
const GRAT =
  "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector";
const HOURS =
  "https://u.ae/en/information-and-services/jobs/sector-of-employment/employment-in-the-private-sector/working-hours";
const WAGES =
  "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/payment-of-wages";
const PERMITS =
  "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/work-permits";
const WORKVISA =
  "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/residence-visa-for-working-in-the-uae";
const GOLDEN = "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa";
const EID = "https://u.ae/en/information-and-services/visa-and-emirates-id/emirates-id";
const ILOE = "https://www.iloe.ae/";
const LEAVE =
  "https://u.ae/en/information-and-services/jobs/sector-of-employment/employment-in-the-private-sector/types-of-leaves";
const DISPUTE =
  "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/labour-dispute";
const TAX = "https://u.ae/en/information-and-services/finance-and-investment/taxation/corporate-tax";

export const uaeQa: QaPage = {
  title: "Working in UAE: Questions Pakistanis Ask (2026)",
  description:
    "MOHRE permits, Emirates ID, ILOE, WPS pay dates, gratuity and the UAE family pay test. Numbers only where u.ae or iloe.ae states them.",
  lede: "Written for a Pakistani on a UAE private-sector file. Permits, the identity card, unemployment cover, wage transfers and family sponsorship are answered from the government page named under each reply.",
  groups: [
    {
      heading: "Jobs & skills",
      items: [
        {
          q: "Can I start a UAE job before the ministry issues a work permit?",
          a: "No. Article 6 of Federal Decree-Law No. 33 of 2021 makes it illegal to work in the UAE without a valid permit from the Ministry of Human Resources and Emiratisation. A permit to recruit someone from outside the country is valid for two years.",
          sourceName: "UAE government portal, work permits",
          sourceUrl: PERMITS,
          links: [{ href: "/jobs/uae", label: "UAE jobs page" }, { href: "/guides/uae-work-visa-pakistan", label: "Work visa from Pakistan" }],
        },
        {
          q: "Who files the ordinary employment residence?",
          a: "The government portal says the employer must apply for the standard work visa. It describes that visa as valid for two years and renewable on the conditions the issuing authority sets. A shop in Pakistan cannot replace that employer filing.",
          sourceName: "UAE government portal, work visa",
          sourceUrl: WORKVISA,
          links: [{ href: "/guides/genuine-dubai-job-from-pakistan", label: "Genuine Dubai job note" }],
        },
        {
          q: "Is there a UAE minimum wage I can quote in a salary argument?",
          a: "The wage page says the labour law does not stipulate a minimum salary. It does say wages must be sufficient to meet basic needs. There is no official table of Pakistani driver, electrician or helper pay on that page, so an advert is not a survey.",
          sourceName: "UAE government portal, payment of wages",
          sourceUrl: WAGES,
          links: [{ href: "/tools/salary-converter", label: "Salary converter" }, { href: "/guides/driver-jobs-in-dubai-salary", label: "How to read a driver offer" }],
        },
        {
          q: "What should I ask before I accept a site or trade offer?",
          a: "Ask which establishment will hold the MOHRE permit, what the basic wage is, and whether housing is cash or a room. The permit page lists separate products, including a transfer between establishments, each with its own validity. A voice note is not one of those products.",
          sourceName: "UAE government portal, work permits",
          sourceUrl: PERMITS,
          links: [{ href: "/guides/electrician-jobs-in-gulf", label: "Electrician jobs note" }],
        },
        {
          q: "Do I still need a permit if a hospital has already interviewed me?",
          a: "A hospital interview does not replace the ministry permit. The same Article 6 rule applies: working without a MOHRE permit is illegal. Health-authority licensing, where a profession needs it, sits beside that permit. This page does not invent a licence fee.",
          sourceName: "UAE government portal, work permits",
          sourceUrl: PERMITS,
          links: [{ href: "/guides/uae-work-visa-pakistan", label: "UAE work visa steps" }],
        },
      ],
    },
    {
      heading: "Freelancing & remote work",
      items: [
        {
          q: "What is the green visa, in plain words?",
          a: "The work-visa page says the green visa is for skilled employees on self-sponsorship. The standard work visa, by contrast, is for employees of government and private-sector employers, and the employer applies. Read the current green-visa conditions on that page before you pay a Pakistan agent for a “freelance residence”.",
          sourceName: "UAE government portal, work visa",
          sourceUrl: WORKVISA,
        },
        {
          q: "Is there a freelance work permit that is not a company job?",
          a: "Yes. MOHRE’s permit list includes a freelance work permit for people who want to work independently, including foreign nationals on a self-sponsored residence, without an employer sponsor and without an active employment contract. Income comes from a defined service to clients. You are not their employee.",
          sourceName: "UAE government portal, work permits",
          sourceUrl: PERMITS,
        },
        {
          q: "Can I invoice foreign clients while my residence belongs to a local employer?",
          a: "The portal does not treat an employer residence as a freelance permit. Freelance work has its own permit, for self-sponsored residence holders who are not on an employment contract. If your file is an ordinary employment residence, do not assume overseas invoices are covered. Open the permit list and your contract together.",
          sourceName: "UAE government portal, work permits",
          sourceUrl: PERMITS,
        },
        {
          q: "Do company owners have to buy ILOE unemployment insurance?",
          a: "The portal lists Emiratis and residents working in the federal government and the private sector as the people who subscribe. It exempts investors who own the companies they work at, domestic helpers, temporary-contract workers, juveniles under 18, and retirees who already draw a pension and have taken a new job.",
          sourceName: "ILOE scheme, official portal",
          sourceUrl: ILOE,
        },
      ],
    },
    {
      heading: "Visa & documents",
      items: [
        {
          q: "How long is the standard employment residence?",
          a: "The government portal says a foreigner can receive a normal employment visa valid for two years, renewable under the issuing authority’s conditions. The employer applies. Domestic helpers are on a different visa, also named on that page.",
          sourceName: "UAE government portal, work visa",
          sourceUrl: WORKVISA,
          links: [{ href: "/guides/check-uae-visa-status", label: "Check a UAE visa status" }],
        },
        {
          q: "What is an Emirates ID, and is it optional?",
          a: "It is the identity card from the federal identity authority, ICP. Citizens and residents must apply for it and carry it. Government services use it, and a citizen can also use it to travel inside the GCC. ICP says taking another person’s card is against the law.",
          sourceName: "UAE government portal, Emirates ID",
          sourceUrl: EID,
        },
        {
          q: "What happens to my Emirates ID if the residence is cancelled?",
          a: "The identity-card page says that when a residence visa is cancelled, the Emirates ID is cancelled automatically. Dubai visa holders are processed through the General Directorate of Identity and Foreigners Affairs. Other emirates go through ICP.",
          sourceName: "UAE government portal, Emirates ID",
          sourceUrl: EID,
          links: [{ href: "/guides/uae-visa-renewal", label: "UAE visa renewal" }],
        },
        {
          q: "Who is the golden visa for, and how long can it last?",
          a: "It is a long-term residence for named talent groups, including investors, entrepreneurs, scientists, outstanding students and graduates, humanitarian pioneers and frontline heroes. The portal’s category table shows 10 years for public investments and 5 years for real estate, with a minimum capital of AED 2 million among the investor conditions. Other rows have their own tests.",
          sourceName: "UAE government portal, golden visa",
          sourceUrl: GOLDEN,
        },
        {
          q: "Can a golden visa holder remain outside the UAE for more than six months?",
          a: "The golden-visa page lists that as a benefit: holders can stay outside the country for longer than the usual six months that keeps an ordinary residence valid. They also do not need a sponsor, and they can sponsor family, including a spouse and children. This is not the rule for a normal employment residence.",
          sourceName: "UAE government portal, golden visa",
          sourceUrl: GOLDEN,
        },
      ],
    },
    {
      heading: "Money & salary",
      items: [
        {
          q: "Does the UAE take income tax out of a private-sector wage?",
          a: "The corporate-tax page describes a tax on businesses and on individuals who conduct business under a commercial licence, including free-zone firms that meet the rules. It does not describe a personal income-tax deduction from an employee’s wage. Invoicing clients in your own licensed business is a different file from a salary.",
          sourceName: "UAE government portal, corporate tax",
          sourceUrl: TAX,
          links: [{ href: "/rates/aed-to-pkr", label: "Dirham to rupee rate" }],
        },
        {
          q: "When should last month’s wage arrive under WPS?",
          a: "Establishments registered with MOHRE must pay on the due date through the Wage Protection System. Ministerial Resolution No. 0340 of 2026 says the previous month’s salary is due on the first day of each Gregorian month, and at least 85 percent of wages due must move on time where a lawful deduction applies. The labour law states no minimum salary, though wages must be sufficient to meet basic needs.",
          sourceName: "UAE government portal, payment of wages",
          sourceUrl: WAGES,
          links: [{ href: "/tools/salary-converter", label: "Salary converter" }],
        },
        {
          q: "What does ILOE cost, and what can it pay if I am dismissed?",
          a: "The scheme page pays up to 60 percent of average basic salary over the six months before the job loss, for at most three months in one claim, and only after 12 consecutive months of premiums. If basic salary is AED 16,000 or below, the cap is AED 10,000 a month and the premium is AED 5 plus VAT. Above that salary the cap is AED 20,000 a month and the premium is AED 10 plus VAT. Across a working life in the UAE the total cannot pass 12 monthly benefits, and a resignation or a disciplinary dismissal sits outside the cover.",
          sourceName: "ILOE scheme, official portal",
          sourceUrl: ILOE,
          links: [{ href: "/tools/gratuity-calculator", label: "Gratuity calculator" }],
        },
        {
          q: "How is private-sector gratuity counted for a foreign full-time worker?",
          a: "After one year of continuous service, gratuity is worked out on the last basic salary only, so housing and transport stay outside the sum, and unpaid absence days are left out of the service count. The portal uses 21 days of that salary for each year when service is past one year and under five, then 30 days for each year after those first five, and nothing at all below one year. The total cannot exceed the wage of two years, and outstanding wages plus gratuity are due within 14 days of the contract ending.",
          sourceName: "UAE government portal, end-of-service benefits",
          sourceUrl: GRAT,
          links: [{ href: "/guides/uae-gratuity-rules", label: "Gratuity guide" }, { href: "/tools/gratuity-calculator", label: "Gratuity calculator" }],
        },
        {
          q: "How do I judge a dirham transfer to Pakistan?",
          a: "WPS only moves the wage into a bank or exchange the Central Bank has authorised. What a later transfer pays in rupees is a separate quote from that bank or exchange. Compare the amount that lands after the charge, and keep the slip. The dirham mid-market line on this site is not the amount your family received.",
          sourceName: "UAE government portal, payment of wages",
          sourceUrl: WAGES,
          links: [{ href: "/guides/send-money-uae-to-pakistan", label: "Send money from the UAE" }, { href: "/tools/remittance", label: "Compare two quotes" }],
        },
      ],
    },
    {
      heading: "Family & life",
      items: [
        {
          q: "What pay lets an employee sponsor a spouse or child?",
          a: "The family-residence page, updated 28 September 2026, says an employee can sponsor relatives with no job-title bar once pay is at least four thousand dirhams, or three thousand dirhams plus a place to live. The sponsorship section repeats that same pay test. Conditions can change, and the page tells you to check with ICP or GDRFA.",
          sourceName: "UAE government portal, family residence",
          sourceUrl: FAMILY,
          links: [{ href: "/guides/family-visa-uae-salary-requirement", label: "Family visa salary note" }],
        },
        {
          q: "Which relatives does that salary line cover?",
          a: "The people named are a husband or wife, daughters who are not married, sons who have not turned 25, and children who have special needs. A green-visa holder may also sponsor first-degree relatives, which is a separate line on the page. A medical fitness test applies once the person being sponsored is 18 or older. This is not a figure for bringing a parent.",
          sourceName: "UAE government portal, family residence",
          sourceUrl: FAMILY,
          links: [{ href: "/guides/family-visa-uae-salary-requirement", label: "Family visa salary note" }],
        },
        {
          q: "Does Dubai cost the same as Abu Dhabi for a single worker?",
          a: "Neither the wage page nor the family page publishes one Pakistani household budget for Dubai and another for Abu Dhabi. Rent, school and a room are invoices you collect yourself. A planning worksheet can hold those invoices. It is not a government survey.",
          sourceName: "UAE government portal, payment of wages",
          sourceUrl: WAGES,
          links: [{ href: "/guides/cost-of-living-dubai", label: "Dubai cost worksheet" }, { href: "/tools/salary-converter", label: "Salary converter" }],
        },
        {
          q: "How much paid annual leave does a private-sector worker get?",
          a: "Once a full year is complete, fully paid annual leave is 30 days. If service is past six months but still under a year, it is 2 days for each month. The employer must name the dates at least one month ahead. Leave you have not taken is paid when you leave, on basic salary, including the fraction of the last year.",
          sourceName: "UAE government portal, types of leave",
          sourceUrl: LEAVE,
        },
        {
          q: "What are normal hours, and what changes in Ramadan and in summer?",
          a: "Article 17 sets ordinary private-sector hours at 8 a day or 48 a week, and Ramadan reduces those hours by two each day. After five consecutive hours you get a break of at least one hour, and the break is not working time. Overtime cannot pass two extra hours in a day: it pays the basic-hour rate plus 25 percent, or plus 50 percent between 10 pm and 4 am, with an exception for shift work. From 15 June to 15 September, work directly under the sun in open places is barred from 12.30 pm to 3 pm.",
          sourceName: "UAE government portal, working hours",
          sourceUrl: HOURS,
        },
      ],
    },
    {
      heading: "Rights & complaints",
      items: [
        {
          q: "Where do I go if the wage does not arrive?",
          a: "The wage page tells private-sector workers to contact MOHRE or register a salary complaint. Wages are supposed to move through WPS on the due date. Keep the contract and the missing months. A typing shop that offers to “clear it for cash” is not the ministry.",
          sourceName: "UAE government portal, payment of wages",
          sourceUrl: WAGES,
          links: [{ href: "/guides/report-visa-fraud-fia", label: "Report a Pakistan-side fraud" }],
        },
        {
          q: "What can MOHRE decide, and when does a dispute go to court?",
          a: "Article 54 says you submit the dispute to the ministry, which tries to settle it. If there is no friendly settlement within 14 days, the ministry refers the case to the competent court with a short memorandum. Under Ministerial Resolution No. 782 of 2023, MOHRE may issue a final decision when the claim is under AED 50,000, or when the parties settle, whatever the amount. A larger unsettled claim is referred to the judiciary.",
          sourceName: "UAE government portal, labour disputes",
          sourceUrl: DISPUTE,
        },
        {
          q: "Is there a phone line for labour claims?",
          a: "Yes. The disputes page names MOHRE’s Labour Claims and Advisory Call Centre, toll-free 80084, for labour grievances and legal questions. Complaints can also be filed and tracked on the channels listed on that page. The number is not a promise that the ministry will award a particular sum.",
          sourceName: "UAE government portal, labour disputes",
          sourceUrl: DISPUTE,
        },
        {
          q: "Who is left out of the Wage Protection System?",
          a: "The wage page excludes three groups: workers whose wage complaint has already been referred to the judiciary, workers reported absent under a work-abandonment report, and workers whose freedom is restricted by an order of a competent authority for as long as they cannot work, if the ministry is notified. Exclusion is not a reason for an employer to ignore wages that are still due.",
          sourceName: "UAE government portal, payment of wages",
          sourceUrl: WAGES,
        },
        {
          q: "A Pakistan agent wants a fee before any MOHRE file exists. What then?",
          a: "The permit still has to be issued to an establishment registered with the ministry. A transfer into a personal account in Pakistan does not create that permit. If the money has already left, keep the slips and use the Bureau of Emigration and the FIA route in the notes below. Nothing here promises that the fee comes back.",
          sourceName: "UAE government portal, work permits",
          sourceUrl: PERMITS,
          links: [
            { href: "/guides/oep-licensed-agents", label: "Licensed Pakistan agents" },
            { href: "/guides/visa-agent-scam-pakistan", label: "Visa agent scams" },
            { href: "/guides/protector-of-emigrants", label: "Protector of Emigrants" },
          ],
        },
      ],
    },
  ],
};
