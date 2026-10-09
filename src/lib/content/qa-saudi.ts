import type { QaPage } from "@/lib/content/qa-types";

const LEAVE = "https://www.hrsd.gov.sa/en/knowledge-centre/articles/321";
const LEAVE_AR = "https://www.hrsd.gov.sa/media-center/media/levacation";
const SPA_FEE = "https://www.spa.gov.sa/1645492";
const SPA_LEVY = "https://www.spa.gov.sa/en/N2468180";
const WPP =
  "https://www.hrsd.gov.sa/en/media-center/news/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%AD%D9%85%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%B1";
const MUSANED =
  "https://www.hrsd.gov.sa/en/media-center/news/%D8%AD%D9%81%D8%B8-%D8%A7%D9%84%D8%AD%D9%82%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%82%D8%AF%D9%8A%D8%A9-%D8%A8%D9%8A%D9%86-%D8%A3%D8%B5%D8%AD%D8%A7%D8%A8-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D9%88%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9";
const NITAQAT =
  "https://www.hrsd.gov.sa/en/media-center/news/%D8%A5%D8%B7%D9%84%D8%A7%D9%82-%D9%85%D8%B1%D8%AD%D9%84%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D9%85%D9%86-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%86%D8%B7%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B7%D9%88%D8%B1";
const GOSI = "https://beta.gosi.gov.sa/en/social-insurance";
const GOSI_FAQ = "https://www.gosi.gov.sa/GOSIOnline/FAQ_Contributor&locale=en_US";
const ZATCA = "https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Simplified-Guideline-for-Income-Tax.pdf";

export const saudiQa: QaPage = {
  title: "Working in Saudi Arabia: Iqama, Salary, Visa Q&A (2026)",
  description:
    "Iqama screens, the dependent-fee notice, Mudad wages, Nitaqat Mutawar, GOSI hazards and Saudi leave. No invented salary survey.",
  lede: "Written for a Pakistani whose file is a Saudi residence, not a UAE labour card with the name swapped. Fees that appear only on your own issuance screen are not copied here.",
  groups: [
    {
      heading: "Jobs & skills",
      items: [
        {
          q: "Does the ministry publish one wage for Pakistani drivers or helpers?",
          a: "No wage league table sits on the leave note or the wage-protection note. The figure that binds you is the wage in the documented contract, paid through the wage file. An advert in a group chat is not that file.",
          sourceName: "HRSD, Wage Protection Program",
          sourceUrl: WPP,
          links: [{ href: "/jobs/saudi-arabia", label: "Saudi jobs page" }, { href: "/guides/saudi-work-visa-pakistan", label: "Saudi work visa from Pakistan" }],
        },
        {
          q: "What is Nitaqat Mutawar in 2026, and does it set my pay?",
          a: "The ministry announced a new phase starting in 2026 and running for three years, aimed at localising more than 340,000 additional private-sector jobs. That announcement does not print a salary for a Pakistani electrician, nurse or driver. Your pay remains the contract. The establishment’s Saudization target is on its own file, not a single percentage I can copy for every company.",
          sourceName: "HRSD, Nitaqat Mutawar phase",
          sourceUrl: NITAQAT,
          links: [{ href: "/guides/nurse-jobs-in-saudi-salary", label: "Saudi nurse note" }],
        },
        {
          q: "Where should a private-sector salary show up?",
          a: "The Wage Protection Program monitors private-sector pay. Salaries are transferred electronically through banks and financial institutions on the Mudad platform, against the amount in the documented contract. By the end of 2025 the ministry said more than 10 million workers had wages documented there. If your transfer does not match the contract, that platform is the record to raise, not a screenshot from a supervisor.",
          sourceName: "HRSD, Wage Protection Program",
          sourceUrl: WPP,
          links: [{ href: "/tools/salary-converter", label: "Salary converter" }],
        },
        {
          q: "A hospital named a round number in a message. Is that my wage?",
          a: "Only the documented contract, paid through the wage system, is the wage the ministry can see. A chat total often mixes housing and overtime. Ask for the basic amount in the contract before you resign in Pakistan. This page does not add a hospital pay scale, because the ministry note does not publish one.",
          sourceName: "HRSD, Wage Protection Program",
          sourceUrl: WPP,
          links: [{ href: "/guides/nurse-jobs-in-saudi-salary", label: "Saudi nurse note" }],
        },
        {
          q: "Is a domestic-worker hire the same door as a company job?",
          a: "No. Domestic labour is handled on Musaned, the ministry platform for household employment. Company jobs are monitored through the private-sector wage program. Mixing the two is how families pay a recruitment office for a visa that was never a company iqama.",
          sourceName: "HRSD, Musaned contractual rights",
          sourceUrl: MUSANED,
        },
      ],
    },
    {
      heading: "Freelancing & remote work",
      items: [
        {
          q: "If I trade in my own name, is that the same as my salary for tax?",
          a: "ZATCA’s income-tax guideline taxes shares of non-Saudi partners in resident companies, and a non-Saudi resident who practises a commercial activity. It does not describe a monthly withholding tax on an employee’s wage. A salary and a business you run yourself are different files. Read the guideline before you issue invoices.",
          sourceName: "ZATCA, simplified income-tax guideline (PDF)",
          sourceUrl: ZATCA,
        },
        {
          q: "Is Musaned a freelance or remote-work portal?",
          a: "No. Musaned documents household employment: contracts, monthly salary records and insurance for domestic workers. It is not a visa for a software contractor serving clients abroad. Using a domestic-worker route for ordinary company work is the wrong door.",
          sourceName: "HRSD, Musaned contractual rights",
          sourceUrl: MUSANED,
        },
        {
          q: "Can an employer iqama be treated as permission to run a shop?",
          a: "The income-tax guideline puts a non-Saudi who practises a commercial activity inside the income-tax net, and it does not describe an employee wage that way. Do not open a till, or invoice in your own name, on the assumption that the residence for your job covers a business. Check ZATCA and the municipality licence for that activity, because this page will not invent a freelance-residence product those Saudi pages do not describe.",
          sourceName: "ZATCA, simplified income-tax guideline (PDF)",
          sourceUrl: ZATCA,
        },
      ],
    },
    {
      heading: "Visa & documents",
      items: [
        {
          q: "What should I trust as the iqama renewal amount?",
          a: "The Passports notice on dependent fees does not print one renewal price for every profession. The amount you owe is the one on the official issuance or renewal screen, paid in advance through SADAD. A forwarded PDF is not that screen.",
          sourceName: "Saudi Press Agency, dependent and companion fees",
          sourceUrl: SPA_FEE,
          links: [{ href: "/guides/saudi-iqama-guide", label: "Iqama guide" }, { href: "/guides/iqama-renewal", label: "Iqama renewal" }, { href: "/guides/check-iqama-status", label: "Check iqama status" }],
        },
        {
          q: "What dependent fee did Passports start collecting, and from when?",
          a: "The General Directorate of Passports, reported by the Saudi Press Agency, set a monthly fee on dependents and companions of private-sector expatriates. The schedule in that notice reaches SR 400 a month from 1 July 2020. It is collected annually in advance. Pay the figure your own screen shows, in case a later decision has changed your file.",
          sourceName: "Saudi Press Agency, dependent and companion fees",
          sourceUrl: SPA_FEE,
        },
        {
          q: "Who counts as a dependent, and who counts as a companion, in that notice?",
          a: "Dependents in the notice are a wife, male sons under 18, and daughters. Companions include male sons over 18, further wives, a father or mother, parents-in-law, household workers, and any other person the residence system lists as sponsored by the worker. People already exempt inside the iqama system stay exempt. A newborn is charged from the registration date, and missed registration is not a free gap back to 1 July 2017.",
          sourceName: "Saudi Press Agency, dependent and companion fees",
          sourceUrl: SPA_FEE,
        },
        {
          q: "When else is that family fee collected, besides a renewal?",
          a: "The same notice says the fee is levied when an iqama is issued or renewed, and also when an exit and re-entry visa is issued, and when a final-exit visa is issued. It is paid in advance through SADAD and is described as non-refundable. This page does not add a separate exit-visa price on top, because the notice does not print one.",
          sourceName: "Saudi Press Agency, dependent and companion fees",
          sourceUrl: SPA_FEE,
          links: [{ href: "/guides/fake-saudi-visa-check", label: "Check a Saudi visa file" }],
        },
        {
          q: "Did the December 2025 cabinet decision cancel the family fee?",
          a: "No. That decision, reported by the Saudi Press Agency on 17 December 2025, cancelled the expat levy on foreign workers inside licensed industrial establishments. It is about the industrial establishments’ worker levy, not the dependent and companion fee in the earlier Passports notice. Read your own screen before you assume a family charge has disappeared.",
          sourceName: "Saudi Press Agency, industrial expat levy",
          sourceUrl: SPA_LEVY,
        },
        {
          q: "What is a final exit in that fee notice?",
          a: "The notice treats a final-exit visa as one of the moments when the dependent and companion fee is collected, alongside exit and re-entry. It is the departure product in that text, not a holiday visa. Clear the screen before you book a one-way ticket. This page does not state a ticket rule or a fine for overstaying, because those figures are not in the notice.",
          sourceName: "Saudi Press Agency, dependent and companion fees",
          sourceUrl: SPA_FEE,
        },
      ],
    },
    {
      heading: "Money & salary",
      items: [
        {
          q: "Is my monthly wage subject to Saudi income tax?",
          a: "ZATCA’s guideline imposes income tax on non-Saudi shares in resident companies and on a non-Saudi resident who practises a commercial activity, among other business cases. It does not describe tax taken off an employee’s monthly wage. If you only draw a salary, do not confuse that with a shop or a contracting business in your own name.",
          sourceName: "ZATCA, simplified income-tax guideline (PDF)",
          sourceUrl: ZATCA,
          links: [{ href: "/rates/sar-to-pkr", label: "Riyal to rupee rate" }],
        },
        {
          q: "If I resign, am I still paid for annual leave I did not take?",
          a: "The ministry’s English note says you are entitled to wages for annual-leave days you did not use if you leave the job, including a proportional part of the year. The separate end-of-service award sits in the Labor Law. This page does not restate a fraction for that award, because the statute file did not open on the day these answers were checked. Ask for the written settlement.",
          sourceName: "HRSD, annual leave",
          sourceUrl: LEAVE,
          links: [{ href: "/tools/gratuity-calculator", label: "Gratuity calculator" }],
        },
        {
          q: "How many days of annual leave does the ministry state?",
          a: "Not less than 21 days, rising to not less than 30 days after five consecutive years with the same employer. The note says the leave is paid in advance, that you should take it in the year it falls due, and that you may not give it up for cash while you are still employed.",
          sourceName: "HRSD, annual leave",
          sourceUrl: LEAVE,
        },
        {
          q: "What sick leave and family-event leave does the Arabic ministry note list?",
          a: "The Arabic leave note says sick leave that is medically certified is paid in full for the first 30 days, at three quarters of the wage for the next 60 days, and unpaid for the following 30 days, inside one year, whether the days are continuous or split. It also lists three days for a birth, and five days for a marriage or for the death of a spouse or of a parent or child.",
          sourceName: "HRSD, leaves (Arabic)",
          sourceUrl: LEAVE_AR,
        },
        {
          q: "How do I compare a riyal transfer to a Pakistani account?",
          a: "Mudad records the riyals that reached you inside the Kingdom. A transfer home is a second transaction, and the bank or exchange sets how many rupees arrive. Ask for that landing figure before you send, and keep the paper until it shows in the account. The riyal comparison on this site is not that paper.",
          sourceName: "HRSD, Wage Protection Program",
          sourceUrl: WPP,
          links: [{ href: "/guides/send-money-saudi-to-pakistan", label: "Send money from Saudi Arabia" }, { href: "/tools/remittance", label: "Compare two quotes" }],
        },
      ],
    },
    {
      heading: "Family & life",
      items: [
        {
          q: "Is the family fee the same thing as rent and school?",
          a: "No, the Passports notice is a government charge on dependents and companions, not a rent or school bill. Health insurance is another invoice the notice does not price. Add those from the papers in your hand, and do not treat SR 400 a month as a full family budget.",
          sourceName: "Saudi Press Agency, dependent and companion fees",
          sourceUrl: SPA_FEE,
          links: [{ href: "/guides/cost-of-living-riyadh", label: "Riyadh cost worksheet" }],
        },
        {
          q: "Does GOSI cover a non-Saudi worker for a workplace injury?",
          a: "The Social Insurance Law applies the Occupational Hazards Branch to all workers with no distinction of nationality. The contribution is 2 percent of contributory wages, paid by the employer. The annuities branch is for Saudi workers. A workplace injury is not the same product as a pension.",
          sourceName: "GOSI, Social Insurance Law",
          sourceUrl: GOSI,
        },
        {
          q: "If a non-Saudi is badly injured, is the compensation a monthly pension?",
          a: "GOSI’s contributor FAQ says a non-Saudi who qualifies is paid a lump-sum compensation once, not an ongoing pension. For permanent total disability the FAQ states 84 months of the contributor’s wage, and the sum will not go above SR 330,000. A partial disability uses a different multiple on that same page, so open the row that matches the injury before you trust a workshop figure.",
          sourceName: "GOSI contributor FAQ",
          sourceUrl: GOSI_FAQ,
        },
        {
          q: "Can I assume a family flat in Riyadh from an official cost survey?",
          a: "HRSD’s leave page and the fee notice do not publish a Pakistani family rent. School fees belong on the school’s invoice. Use a worksheet only to hold numbers you have been given in writing. It is not a government budget.",
          sourceName: "HRSD, annual leave",
          sourceUrl: LEAVE,
          links: [{ href: "/guides/cost-of-living-riyadh", label: "Riyadh cost worksheet" }, { href: "/tools/salary-converter", label: "Salary converter" }],
        },
      ],
    },
    {
      heading: "Rights & complaints",
      items: [
        {
          q: "The wage on Mudad is lower than the contract. What is the official record?",
          a: "The ministry describes Mudad as the place where wage payment is checked against the documented contract, in the amount the parties agreed. That file is the record to dispute. Keep your copy of the contract beside it. A promise to “fix the difference in cash” leaves the official file short.",
          sourceName: "HRSD, Wage Protection Program",
          sourceUrl: WPP,
        },
        {
          q: "What does Musaned protect for a household worker?",
          a: "The ministry says the Musaned contract and the monthly salary record, together with the insurance on that platform, can compensate the employer or the domestic worker when wages cannot be paid for a defined reason such as disability. It can also cover some recruitment costs if the worker is absent, refuses the work, dies, or cannot continue. By the end of 2025 the note put users of these services above 1.69 million. This is household employment, not a company payroll complaint.",
          sourceName: "HRSD, Musaned contractual rights",
          sourceUrl: MUSANED,
        },
        {
          q: "Is insurance automatic on a new domestic-worker contract?",
          a: "That news page does not say the cover starts by itself on every new contract, and it does not print a premium. Compensation is tied to the documented household contract and to defined cases, including disability that stops the employer paying wages. Read the schedule shown for the contract in front of you.",
          sourceName: "HRSD, Musaned contractual rights",
          sourceUrl: MUSANED,
        },
        {
          q: "Can a low Nitaqat standing be fixed by paying a Pakistan agent?",
          a: "Nitaqat Mutawar is the ministry’s Saudization program for establishments, and the 2026 phase is about localising private-sector jobs. An agent in Pakistan cannot sell you a better band, because the establishment deals with the ministry. Your own protection is a documented contract and a wage that matches it.",
          sourceName: "HRSD, Nitaqat Mutawar phase",
          sourceUrl: NITAQAT,
          links: [{ href: "/guides/oep-licensed-agents", label: "Licensed Pakistan agents" }, { href: "/guides/visa-agent-scam-pakistan", label: "Visa agent scams" }],
        },
        {
          q: "Someone in Pakistan sold me a visa PDF. Where is the real fee paid?",
          a: "The Passports notice says these government charges are paid in advance through SADAD. A transfer to a person is not that government channel. Hold the receipt, and if the cash has already gone, the Pakistan notes below are the reporting doors. Filing one does not, on its own, return the money.",
          sourceName: "Saudi Press Agency, dependent and companion fees",
          sourceUrl: SPA_FEE,
          links: [{ href: "/guides/fake-saudi-visa-check", label: "Check a Saudi visa file" }, { href: "/guides/report-visa-fraud-fia", label: "Report fraud to the FIA" }, { href: "/guides/protector-of-emigrants", label: "Protector of Emigrants" }],
        },
      ],
    },
  ],
};
