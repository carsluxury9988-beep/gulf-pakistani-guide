/** Unique orientation for each country hub. Official links only. No invented fees. */
export type CountryNote = {
  paragraphs: string[];
  checklist: string[];
};

export const countryNotes: Record<string, CountryNote> = {
  uae: {
    paragraphs: [
      "The UAE dirham is pegged to the US dollar, so the dirham–rupee rate on this site mostly follows the dollar–rupee mid-market rate from the named currency source. It is not a Central Bank of the UAE dealing rate and not what an exchange in Karachi will hand you. Dubai gold on this desk is the published retail board, separate from that currency feed. Making charges are still the shop’s.",
      "Work in the private sector is explained on [u.ae’s employment pages](https://u.ae/en/information-and-services/jobs) and filed by the employer with [MOHRE](https://www.mohre.gov.ae). Identity cards and many residence services sit with the [Federal Authority for Identity and Citizenship](https://icp.gov.ae). A Dubai residence file can also go through [GDRFA Dubai](https://www.gdrfad.gov.ae). Family residence has its own salary test on the u.ae family page. That test is not the same sentence as “can I afford a flat”, and it is not the parent rule. Read it on the day you apply. The [[/guides/family-visa-uae-salary-requirement|family visa guide]] points at the same page.",
      "Pakistan missions are listed by the [Ministry of Foreign Affairs](https://mofa.gov.pk). Use the Abu Dhabi embassy or the Dubai consulate page on that site for passports and registration, not a typing centre that uses the flag. Employment departures from Pakistan still pass the [Bureau of Emigration](https://beoe.gov.pk). Emergency help inside the UAE is 999 for police, ambulance and fire. Save that before you need the roaming SIM to work.",
      "In the first week, open a bank account only in your own name once the residence allows it, and keep the salary transfer description that matches the contract. Gratuity, if you stay long enough for it to matter, is a UAE labour-law calculation, not a bonus the supervisor remembers at the airport. The [[/guides/uae-gratuity-rules|gratuity guide]] and the calculator are estimates. MOHRE is the authority. Do not sign a final settlement you have not read.",
    ],
    checklist: [
      "Photograph the entry stamp, the residence, and the employer’s name.",
      "Open the MOHRE or ICP service your contract names. Do not pay a third party to “check status” on a page you can open.",
      "Put the written basic wage into the salary converter. Replace rent with the figure the landlord put in writing.",
      "Save the Pakistan mission number from mofa.gov.pk and 999.",
    ],
  },
  "saudi-arabia": {
    paragraphs: [
      "The Saudi riyal is pegged to the US dollar. The riyal–rupee figure here is a mid-market reference from the currency source named on the rate page, not a bank’s buy rate and not SAMA’s dealing desk. Gold on the Saudi page of this site is world spot in riyals, labelled as spot, because this desk does not have a single national retail board it can republish the way it republishes Dubai’s.",
      "After you arrive, residence is [Absher](https://www.absher.sa) and [Muqeem](https://muqeem.sa). Work transfers and contracts sit with [Qiwa](https://www.qiwa.sa) and the [Ministry of Human Resources](https://www.hrsd.gov.sa). Iqama renewal is the employer’s screen on those portals. There is no single SAR fee this site will print, because the lines differ and the payment screen is the bill. The [[/guides/iqama-renewal|Iqama guide]] says the same thing at more length.",
      "The Pakistan mission is on the [Ministry of Foreign Affairs](https://mofa.gov.pk) list for Riyadh, with consulates where that site names them. Register if the mission asks. Employment travel from Pakistan is a [Bureau of Emigration](https://beoe.gov.pk) file, not a WhatsApp “Saudi visa”. Police and emergency services in the Kingdom use 911 and 999 depending on the service. Confirm the number your city publishes when you land, and keep the employer’s security number beside it.",
      "End-of-service pay in Saudi Arabia is in the labour law, not the UAE 21-day pattern. Do not type a riyal wage into the UAE side of the calculator and treat the result as yours. The calculator’s Saudi switch describes Articles 84, 85 and 87 as an estimate. The statute is the Bureau of Experts file linked from the gratuity tool. If the company offers a final settlement in cash with no paper, ask for the paper.",
    ],
    checklist: [
      "Create your own Absher access. Do not hand the password to a camp typist.",
      "Read the Iqama expiry yourself. Tell the employer the week you notice it, not the week after it lapses.",
      "Keep the contract’s basic wage separate from allowances when you convert it to rupees.",
      "Save the mission’s consular number from mofa.gov.pk.",
    ],
  },
  qatar: {
    paragraphs: [
      "The Qatari riyal is pegged to the US dollar. Rates on Apna Ghar are mid-market, updated from a daily currency file, and a Doha exchange will not match them to the fils. Gold shown for Qatar is world spot in riyals, not a jeweller’s board. Ask the shop for the all-in price per gram.",
      "Checked on 10 October 2026, Qatar’s [Government Communications Office](https://www.gco.gov.qa/en/media-centre/in-focus/labour-reform/) says the minimum wage is QAR 1,000 a month, and that the employer must provide QAR 500 for accommodation and QAR 300 for food or provide them in kind. The [ILO’s note](https://www.ilo.org/resource/article/introducing-new-minimum-wage) explains the same floor. It is a legal bottom for workers in Qatar, not a typical Pakistani salary and not a number you should paste into a Bahrain or Kuwait conversation. Public services start at [Hukoomi](https://www.hukoomi.gov.qa). Interior and visa status often start at the [Ministry of Interior portal](https://portal.moi.gov.qa).",
      "The Pakistan embassy in Doha is listed by the [Ministry of Foreign Affairs](https://mofa.gov.pk). Use that page for passports and registration. A job departure from Pakistan is processed by the [Bureau of Emigration](https://beoe.gov.pk). Emergency services in Qatar use 999. Save it, and save the embassy number, before the first week is over.",
      "Wage protection in Qatar is part of the same reform the government describes: wages are meant to move through the banking system so they can be checked against the contract. If you are paid only in cash, keep your own written record of the months. A contract that quotes a high “package” and a basic wage under QAR 1,000 is not a clever structure. It is under the floor the government published.",
    ],
    checklist: [
      "Check the written basic wage against the QAR 1,000 floor. Allowances are extra lines, not a way to hide a basic wage under the floor.",
      "Open Hukoomi yourself for the service your employer named.",
      "Photograph the contract and the residence grant.",
      "Register with the embassy if their notice asks residents to.",
    ],
  },
  kuwait: {
    paragraphs: [
      "The Kuwaiti dinar is pegged to a basket around the US dollar, and it is worth many rupees per dinar, which makes a bad contract look generous if you only stare at the total. The rate on this site is mid-market. Your exchange’s receipt will differ. Gold for Kuwait on this desk is world spot in dinars, not a souk board.",
      "Residence is handled through the [Ministry of Interior](https://www.moi.gov.kw). Labour permits sit with the Public Authority of Manpower at [manpower.gov.kw](https://www.manpower.gov.kw). The sponsor files the work residence. A Pakistani agent cannot log into that authority from a market office. Read the service page for the thing you were promised, whether that is a new permit or a transfer, and stop if the person demanding money cannot point at it.",
      "The Pakistan embassy in Kuwait City is on the [Ministry of Foreign Affairs](https://mofa.gov.pk) list. Employment exit from Pakistan is the [Bureau of Emigration](https://beoe.gov.pk). Emergency lines in Kuwait are published as 112. Confirm the number on an official interior page when you arrive, and keep your civil ID number written down somewhere other than the phone the company issued.",
      "Kuwait’s dinar is easy to over-read. A wage of a few dozen dinars is not “a few dozen rupees”, and a fee of a few dozen dinars asked in Pakistan is a large sum. Convert both the wage and any demand with the rate page before you agree. If the demand is due before a permit exists, the size of the dinar is not what makes it legitimate.",
    ],
    checklist: [
      "Match the sponsor’s name on the offer to the name on the permit.",
      "Ask whether housing is a room in a company flat or an allowance that never arrives.",
      "Do not surrender your passport as a condition of being paid.",
      "Save the embassy number from mofa.gov.pk and the civil ID expiry.",
    ],
  },
  oman: {
    paragraphs: [
      "The Omani rial is pegged to the US dollar. One rial is a large rupee amount, so a small-sounding salary can be misread in both directions. Use the mid-market rate on this site only as a sketch, then read the converter against the basic wage in the contract. Gold for Oman here is world spot in rials. A shop in Muscat adds making. Compare the finished price per gram, not a headline.",
      "Labour services are on the [Ministry of Labour](https://www.mol.gov.om) site. Visa and residence status often involve the [Royal Oman Police](https://www.rop.gov.om). The employer is the party that holds the work clearance. A visit visa, when Royal Oman Police is issuing one for your nationality, is not permission to work. Do not let an agent describe them as one product with one price.",
      "The Pakistan embassy in Muscat is listed by the [Ministry of Foreign Affairs](https://mofa.gov.pk). Passports and attestation questions go there, or to the Pakistan authority the embassy names, not to a stall. Leaving Pakistan on employment still means the [Bureau of Emigration](https://beoe.gov.pk). Emergency services in Oman use 9999. Write it down. A first week without that number and without a photo of the contract is a first week you will regret if the phone is lost.",
      "Heat rules and rest days are labour-ministry matters, not a favour. If the site works through the afternoon in summer, ask which notice the employer is following. Apna Ghar will not invent an Omani fine for that. The fine, if one is published, is on the Ministry of Labour or Royal Oman Police page for that offence. A supervisor’s number is not the statute.",
    ],
    checklist: [
      "Read the labour clearance in the employer’s name before you book a seat.",
      "Separate basic pay from housing when you convert rials to rupees.",
      "Keep a paper copy of the residence, not only a photo on a company phone.",
      "Save 9999 and the Muscat mission number from mofa.gov.pk.",
    ],
  },
  bahrain: {
    paragraphs: [
      "The Bahraini dinar is pegged to the US dollar. The dinar–rupee rate on Apna Ghar is a mid-market reference and will not match a Manama exchange window. Gold on the Bahrain page is world spot in dinars, labelled as spot. There is no single jewellers’ association board on this site for Bahrain, so do not treat the spot line as a shop price.",
      "Work permits are the [Labour Market Regulatory Authority’s](https://www.lmra.gov.bh) record of an employer and a worker. Visit applications, when they are open for your passport, are on the [eVisa portal](https://www.evisa.gov.bh). Those are different doors. A longer, Bahrain-only hiring note is on the [[/jobs/bahrain|jobs page]], including what this desk will not invent about wages. The shorter point for a first week: if you cannot see the employer inside an LMRA service, you are not employed yet.",
      "The [Embassy of Pakistan in Manama](https://mofa.gov.pk/manama) publishes consular services and its own notices. Use that page. Employment departure from Pakistan is the [Bureau of Emigration](https://beoe.gov.pk). Emergency services in Bahrain use 999. Save the embassy number from the Manama page beside it. A person who offers to register you with the embassy for a fee is not the embassy.",
      "Bahrain is small enough that people treat a friend’s employer as a recruitment agency. It is not. A transfer between sponsors is an LMRA process with conditions, not a lift to another shop. Read the jobs page before you pay anyone who says they can move your permit this week. If you are still in Pakistan, the only fee you should be able to match to a government site is the one that site is charging you itself.",
    ],
    checklist: [
      "Ask for the LMRA permit in the employer’s name, not a “visa copy” with no authority on it.",
      "Do not work on a visit entry while someone promises the permit is “in process”.",
      "Convert only the written basic wage. Ignore a package number that hides rent.",
      "Register or read the latest notice on mofa.gov.pk/manama.",
    ],
  },
};
