/** Unique job-hub copy. The five long country guides are rendered under these sections and then redirected here. */
export const jobGuideSlug: Record<string, string | undefined> = {
  uae: "jobs-in-dubai-for-pakistanis",
  "saudi-arabia": "jobs-in-saudi-arabia-for-pakistanis",
  qatar: "jobs-in-qatar-for-pakistanis",
  kuwait: "jobs-in-kuwait-for-pakistanis",
  oman: "jobs-in-oman-for-pakistanis",
};

export const jobTitles: Record<string, string> = {
  uae: "UAE Jobs for Pakistanis: How to Apply in 2026 | Apna Ghar",
  "saudi-arabia": "Saudi Jobs for Pakistanis: How to Apply | Apna Ghar",
  qatar: "Qatar Jobs for Pakistanis: How to Apply | Apna Ghar",
  kuwait: "Kuwait Jobs for Pakistanis: How to Apply | Apna Ghar",
  oman: "Oman Jobs for Pakistanis: How to Apply | Apna Ghar",
  bahrain: "Bahrain Jobs for Pakistanis: How to Apply | Apna Ghar",
};

export type JobSection = { heading: string; paragraphs: string[] };

export const jobSections: Record<string, JobSection[]> = {
  uae: [
    {
      heading: "Where a UAE file actually starts",
      paragraphs: [
        "A Dubai or Abu Dhabi offer is a company name you can look up, then a work permit the employer files with the [Ministry of Human Resources and Emiratisation](https://www.mohre.gov.ae). The public explanation of private-sector employment sits on [u.ae](https://u.ae/en/information-and-services/jobs). Identity and residence after that point sit with [ICP](https://icp.gov.ae), and a Dubai file can also pass [GDRFA Dubai](https://www.gdrfad.gov.ae). None of those sites sells a visa to a shop in Pakistan.",
        "From Pakistan, an employment departure still goes through the [Bureau of Emigration and Overseas Employment](https://beoe.gov.pk). If someone else is arranging the seat, their name should be on the Bureau’s promoter list, which the [[/guides/oep-licensed-agents|OEP licence guide]] shows how to read. A transfer to a personal account before that list matches is not a booking fee the ministry recognises.",
      ],
    },
    {
      heading: "What this hub will and will not quote",
      paragraphs: [
        "MOHRE does not publish one wage for Pakistani drivers, masons or nurses. The number that binds you is the basic wage on the contract you can open, plus any housing or transport line written beside it. Put that basic figure in the [[/tools/salary-converter|salary converter]] and treat the rupee result as a mid-market sketch, not the shop’s payout.",
        "Family residence is a different test from the job itself. The figure, when you need it, is on the u.ae family page linked from [[/guides/family-visa-uae-salary-requirement|the family visa guide]], not in a voice note. The longer Dubai hiring note that used to live at its own URL is the rest of this page.",
      ],
    },
  ],
  "saudi-arabia": [
    {
      heading: "Saudi hiring is a sponsor’s file",
      paragraphs: [
        "A Saudi job for a Pakistani worker is an employer sponsorship, not a PDF an agent can edit. After arrival, work transactions sit on [Qiwa](https://www.qiwa.sa) and the [Ministry of Human Resources](https://www.hrsd.gov.sa). Residence sits on [Absher](https://www.absher.sa) and [Muqeem](https://muqeem.sa). Those four are the pages to open when a camp conversation disagrees with your contract.",
        "The [Bureau of Emigration](https://beoe.gov.pk) is the Pakistan-side gate for an employment departure. A promoter who will not show a licence on that site is not “handling the Saudi embassy for you”. The visa steps are in [[/guides/saudi-work-visa-pakistan|the Saudi work visa guide]]. This page does not print a riyal fee, because the payment screen on the official service is the bill.",
      ],
    },
    {
      heading: "Pay, and the Iqama, stay on the document",
      paragraphs: [
        "There is no Ministry wage table for Pakistani electricians or hospital staff that this desk can honestly copy. Hospitals hire against a licence. The careful version of that path is [[/guides/nurse-jobs-in-saudi-salary|the nurse note]]. For every other trade, ask for basic pay, housing and who renews the residence, in writing.",
        "Iqama renewal is the employer’s transaction on Absher or Muqeem. This site will not invent a single SAR price for it. Read [[/guides/iqama-renewal|the Iqama note]] and then the screen that names your file.",
      ],
    },
  ],
  qatar: [
    {
      heading: "Qatar’s labour door",
      paragraphs: [
        "Qatar’s labour reforms, including the wage floor, are set out by the government on the [Government Communications Office labour-reform page](https://www.gco.gov.qa/en/media-centre/in-focus/labour-reform/). Checked on 10 October 2026, that page says the minimum wage introduced in March 2021 is QAR 1,000 a month, and that the employer must also provide QAR 500 for accommodation and QAR 300 for food, or provide those in kind. The same three rates are explained by the [International Labour Organization](https://www.ilo.org/resource/article/introducing-new-minimum-wage). That floor is not a promise of what a skilled Pakistani worker is offered. It is the legal bottom, and a contract under it is a reason to stop.",
        "Day-to-day services are on [Hukoomi](https://www.hukoomi.gov.qa). Residence questions often start at the [Ministry of Interior](https://portal.moi.gov.qa). The work residence is still the employer’s filing. A market office in Rawalpindi cannot issue it.",
      ],
    },
    {
      heading: "Applying from Pakistan",
      paragraphs: [
        "Match the company name on the offer to a company you can find, then let the [Bureau of Emigration](https://beoe.gov.pk) process an employment departure. The visa route is [[/guides/qatar-visa-for-pakistanis|the Qatar visa guide]]. This hub does not add a second, invented salary survey on top of the minimum wage the government has actually published.",
      ],
    },
  ],
  kuwait: [
    {
      heading: "Kuwait still means a local sponsor",
      paragraphs: [
        "Kuwaiti hiring for a Pakistani worker runs through a local employer. Residence questions sit with the [Ministry of Interior](https://www.moi.gov.kw). The Public Authority of Manpower is the labour side: start at [manpower.gov.kw](https://www.manpower.gov.kw) and read the service you are actually using, not a screenshot of a dashboard. A work residence is filed there by the sponsor. It is not a booklet you buy beside a bus terminal.",
        "Pakistan-side clearance for employment is the [Bureau of Emigration](https://beoe.gov.pk). If the person collecting money is an agent, the licence check is the same [[/guides/oep-licensed-agents|OEP list]]. The country visa note is [[/guides/kuwait-visa-for-pakistanis|the Kuwait visa guide]].",
      ],
    },
    {
      heading: "No dinar wage is printed here",
      paragraphs: [
        "Kuwait does not publish a Pakistani-only salary index that Apna Ghar can quote. Domestic work, a site trade and a hospital job are different files. Ask for the basic wage, whether housing is a room or an allowance, and who pays the residency. If the only number in the conversation is a fee due in Pakistan this week, treat that as the warning, not as the wage.",
      ],
    },
  ],
  oman: [
    {
      heading: "Oman: a named employer and the labour ministry",
      paragraphs: [
        "An Oman offer should name an Omani employer you can search, and a contract you can read before you resign. Labour services are published by the [Ministry of Labour](https://www.mol.gov.om). Residence and visa status questions often go through the [Royal Oman Police](https://www.rop.gov.om). Neither site takes a cash deposit in Lahore.",
        "Employment departures from Pakistan still pass the [Bureau of Emigration](https://beoe.gov.pk). The route in more detail is [[/guides/oman-visa-for-pakistanis|the Oman visa guide]]. This page will not convert a WhatsApp “package” into an official rial salary.",
      ],
    },
    {
      heading: "What to compare before you fly",
      paragraphs: [
        "Compare basic pay, housing and overtime as separate lines. Oman’s rial is pegged to the US dollar, so the rupee value of a wage mostly follows the dollar. That peg is not a raise. Use the [[/tools/salary-converter|salary converter]] on the written basic wage, then read the Protector step before anyone asks you to fly.",
      ],
    },
  ],
  bahrain: [
    {
      heading: "A Bahrain job is an LMRA work permit, not a shop receipt",
      paragraphs: [
        "Pakistanis work in Bahrain as sponsored employees. The body that regulates that market is the [Labour Market Regulatory Authority](https://www.lmra.gov.bh). A work permit is a record LMRA holds against an employer, not a paper a typing centre in Pakistan can laminate. If a person in Manama or in Sialkot cannot show you the employer’s name on an LMRA service, you do not yet have a job. You have a conversation.",
        "Visit entry is a different product. Bahrain publishes visit applications on the [eVisa portal](https://www.evisa.gov.bh). A visit lets you enter for the purpose that visa was issued for. It does not authorise you to take a wage. People still fly on a visit because someone said the work permit would be “fixed after you land”. That sequence is how a worker ends up paying rent with no residence to show a bank. Read the visit conditions on the eVisa site for your nationality before you pay, and do not let an agent merge the visit fee and a supposed work fee into one cash figure.",
        "The Labour Market Regulatory Authority also publishes guidance for employers on permits, transfers and violations. Those pages are written for the sponsor, which is useful to you: they show that the employer is the party in the system. A broker who says he will “open the LMRA file from Pakistan” is describing a login he does not have. Ask for the employer’s commercial name, the person who will sign your contract, and the address of the workplace. Then search that name yourself. A Facebook page with a stock photo of a skyline is not a commercial registration.",
      ],
    },
    {
      heading: "Coming from Pakistan",
      paragraphs: [
        "If you are leaving Pakistan for employment, the [Bureau of Emigration and Overseas Employment](https://beoe.gov.pk) is the office that stamps that departure. The Bureau’s site is where you check an Overseas Employment Promoter’s licence and where the protector process is described. Apna Ghar does not copy the Bureau’s fee table onto this page, because that table is the one on beoe.gov.pk on the day you go. A receipt that does not match the Bureau’s own description is a reason to keep the receipt and stop paying.",
        "A licensed promoter is allowed to recruit. An unlicensed person who demands a large sum for a “Bahrain visa slot” is not a shorter version of the same process. Slots are not a commodity the LMRA auctions to shops. Walk away, and if money has already moved, read [[/guides/report-visa-fraud-fia|how to report a visa fraud]] and keep every transfer record. The [Federal Investigation Agency](https://www.fia.gov.pk) is the complaint door for deception. A complaint is not a refund, but it is the official record.",
        "Papers you should expect to be asked for, once a real employer exists, are the ordinary ones: a passport with enough validity for the process the sponsor describes, photographs in the size the form states, and trade or education certificates if the job needs them. Attestation is whatever Bahrain’s authority or the Pakistan mission currently asks, not whatever a stall near the protector office is selling this week. Do not pay for a stamp you cannot see described on the receiving site. Medical instructions, when a Gulf work file needs them, come from the sponsor or from [Wafid](https://wafid.com), not from a neighbour. Book on the Wafid site if the instruction names it. A clinic token bought in a market is not the appointment.",
      ],
    },
    {
      heading: "Pay: what is published, and what is not",
      paragraphs: [
        "Bahrain does not publish a wage survey of Pakistani workers that this page can quote, and Apna Ghar will not invent a dinar salary for drivers, masons, sales staff or nurses. The dinar is pegged to the US dollar, so the rupee value of a written wage mostly moves with the dollar–rupee rate. That is a currency fact, not a pay rise. Put the basic wage from the contract into the [[/tools/salary-converter|salary converter]] and replace every living-cost line with a number you have been given in writing.",
        "Ask, before you accept, whether housing is a company bed, an allowance, or nothing. Ask who pays the work-permit charges the LMRA invoices to the employer. Ask what the weekly rest day is, and whether overtime is in the contract or only in the supervisor’s habit. Those answers belong in the document you sign. A round number in a WhatsApp status, with no basic wage beside it, is an advertisement. It is not a survey and it is not a promise the labour authority will enforce.",
        "If you are comparing Bahrain with Qatar, do not copy Qatar’s published minimum wage across the causeway. Qatar’s government has stated a riyal floor. Bahrain’s page, here, does not pretend that floor applies. If LMRA or Bahrain’s labour ministry publishes a figure later, this page should link that figure. Until then, the contract is the number.",
      ],
    },
    {
      heading: "After you land, and when something goes wrong",
      paragraphs: [
        "Keep a photo of the permit, the contract and the employer’s commercial name somewhere that is not only your work phone. Banks in Bahrain usually want a residence and a salary letter before they open an account in your name. A friend holding your card is how savings disappear. If the employer delays wages, write down the months and keep any transfer that did arrive. The complaint belongs with LMRA and the labour process they publish, not only in a family group.",
        "The [Embassy of Pakistan in Manama](https://mofa.gov.pk/manama), listed by the Ministry of Foreign Affairs, is the mission for consular help: passports, registration, and the grievance desk the embassy publishes. It does not issue Bahrain work permits, and it cannot turn a visit visa into a job. Register with the embassy if they ask residents to, and read their notices when the region is tense. Their phone numbers on that page are the ones to save. A shop that claims to be “the embassy’s agent” and asks for a fee to register you is not the embassy.",
        "Changing employer is a labour transaction. Some contracts and some permit types restrict it for a period. Read the LMRA guidance on transfer before you pay a broker for a no-objection letter. An expired residence can stop work, banking and travel. Tell the employer the day you see the date. Do not pay a typing shop to hide an expiry.",
      ],
    },
    {
      heading: "Scams that use the Bahrain name",
      paragraphs: [
        "The pattern is familiar and it is not unique to one city in Pakistan. Someone offers a “direct LMRA visa”, a free company email, and a fee due before any contract. The company cannot be found on a map. The fee is split into “file charges”, “medical”, and “urgent stamping” so that each transfer feels small. None of those labels is an LMRA invoice. The Authority invoices the employer inside its own system. You can refuse, and you should, even if a relative says the same person “sent three boys last year”.",
        "A second pattern uses a real company’s name and a fake offer letter. Call or write to the company on a phone number you found yourself, not the number printed on the PDF. If they do not know the letter, stop. Read [[/guides/fake-job-offer-dubai|fake job offers]] for the habit of checking, even though that note uses Dubai examples. The habit is the same: the employer confirms the letter, or you do not fly.",
        "This page is not a recruitment list. It does not rank agencies, and it does not know which sector in Bahrain is “hot” this month. Demand moves with projects, hotels and shops, and LMRA does not publish a Pakistani-only vacancy list for Apna Ghar to reprint. A vacancy on an employer’s own site, with a person who will put their name on a contract, is the list that counts. The sections above are the doors. The fee, if a government fee exists for your file, is the one on that government’s screen on the day you pay.",
      ],
    },
  ],
};
