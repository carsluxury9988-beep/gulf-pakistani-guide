import type { ArticleBody, Block, Faq, Source } from "@/lib/content/types";
import { S, feeNote } from "@/lib/content/sources";

function art(blocks: Block[], faqs: Faq[], sources: Source[]): ArticleBody {
  return { blocks: [...blocks, feeNote], faqs, sources };
}

export const bodiesC: Record<string, ArticleBody> = {
  "qatar-visa-for-pakistanis": art(
    [
      { t: "p", text: "A Qatar visa for Pakistanis is required before travel. There is no open visa-free entry for a Pakistani passport. Visit products change, so the Ministry of Interior portal is the place to see what a Pakistani passport can apply for this month. A work residence is sponsored by a Qatari employer." },
      { t: "h2", id: "work-and-visit", text: "Visit visas and work residence" },
      { t: "ul", items: [
        "Visit: apply only through a channel you can see on the MOI site or on an airline that links back to it.",
        "Work: the employer requests the work residence. You should know the company’s name before you resign in Pakistan.",
        "Employment departures from Pakistan still pass the Protector of Emigrants. See the Protector guide.",
        "A medical may be required. If the instruction says Wafid, book on wafid.com only.",
      ] },
      { t: "p", text: "Jobs are covered in [[/guides/jobs-in-qatar-for-pakistanis|jobs in Qatar for Pakistanis]]. The mid-market rate is on [[/rates/qar-to-pkr|QAR to PKR]]." },
    ],
    [
      { q: "Can Pakistanis get a Qatar visa on arrival?", a: "Do not assume so. Check the Ministry of Interior before you fly. A transit desk is not a plan." },
      { q: "Who sponsors a work visa?", a: "The employer in Qatar. An agent in Pakistan can only process papers. They cannot be your sponsor." },
      { q: "What is the fee?", a: "Read it on the MOI application. This page will not copy a number that may have changed." },
      { q: "How do I check the status?", a: "Use the reference number on the MOI service. A PDF from an agent is not the status." },
      { q: "Do I need the Protector stamp?", a: "If you are leaving Pakistan for employment, yes, you should clear the Bureau of Emigration. Confirm your case on beoe.gov.pk." },
    ],
    [S.moiqa, S.beoe, S.wafid],
  ),

  "kuwait-visa-for-pakistanis": art(
    [
      { t: "p", text: "A Kuwait visa for Pakistanis is a sponsored permission. Work visas come from an employer in Kuwait. Visit visas, where they are open, are applied through the official Ministry of Interior channels. A forwarded “visa copy” is not proof." },
      { t: "h2", id: "kuwait-check", text: "How to apply and how to check" },
      { t: "ul", items: [
        "Ask the sponsor for the application number and check it on an MOI service yourself.",
        "Do not pay a large fee in Pakistan before that number exists.",
        "Domestic work is a separate sponsorship track from a company job. Do not mix the two contracts.",
        "Employment cases from Pakistan go through the Protector. See that guide.",
      ] },
      { t: "p", text: "For hiring, read [[/guides/jobs-in-kuwait-for-pakistanis|jobs in Kuwait]]. Rates are on [[/rates/kwd-to-pkr|KWD to PKR]]. The dinar is a strong currency, so a small salary in dinars is still a large number in rupees. Read the wage carefully." },
    ],
    [
      { q: "Can I check a Kuwait visa with my passport?", a: "Use the Ministry of Interior’s own enquiry. Avoid websites that ask for a fee to “unlock” a status the government shows for nothing." },
      { q: "What does a work visa cost the worker?", a: "Ask before you pay anything. A request for a cash security deposit is a warning sign. See the scam guide." },
      { q: "Is a visit visa a way to find a job?", a: "No. Working requires the correct residence. Do not let an agent sell you a visit as if it were a job." },
      { q: "Are medical tests required?", a: "Often yes for residence. If Wafid is named, book only on wafid.com." },
      { q: "Where do I complain about an agent in Pakistan?", a: "Bureau of Emigration if they claim to be a promoter, and FIA if money was taken by deception." },
    ],
    [S.moikw, S.beoe, S.fia],
  ),

  "oman-visa-for-pakistanis": art(
    [
      { t: "p", text: "An Oman visa for Pakistanis has to be checked on the Royal Oman Police site, because e-visa eligibility is not the same for every passport. A work visa is sponsored by an employer in Oman. Do not buy a ticket until the visa you need is visible on an official screen." },
      { t: "h2", id: "oman-routes", text: "Visit rules and work visas" },
      { t: "ul", items: [
        "On the ROP site, start an application far enough to see whether a Pakistani passport is offered the visa you want. Stop before paying if it is not.",
        "For a job, the employer’s name should match the visa. See [[/guides/jobs-in-oman-for-pakistanis|jobs in Oman]].",
        "Clear the Protector in Pakistan if the trip is for employment.",
        "Keep the passport name consistent on the visa and the ticket.",
      ] },
      { t: "p", text: "The rial’s mid-market rate is on [[/rates/omr-to-pkr|OMR to PKR]]. It is a reference, not a bank quote." },
    ],
    [
      { q: "Does Oman offer visas on arrival to Pakistanis?", a: "Check Royal Oman Police. Do not rely on a blog that groups all Asian passports together." },
      { q: "What is the work visa process?", a: "The employer sponsors it. You complete any medical they specify and the Pakistan Protector step for employment." },
      { q: "How much is the fee?", a: "The ROP payment page shows it. Copy it from there." },
      { q: "Can a Pakistani agent be my sponsor?", a: "No. The sponsor is in Oman." },
      { q: "Where do I verify the agent at home?", a: "On the Bureau of Emigration OEP list, if they are recruiting you for a job." },
    ],
    [S.rop, S.beoe, S.wafid],
  ),

  "bahrain-visa-for-pakistanis": art(
    [
      { t: "p", text: "A Bahrain visa for Pakistanis should be read on the official eVisa site or the Nationality, Passports and Residence Affairs guidance, not on a printout. Work permits sit with the Labour Market Regulatory Authority and a sponsoring employer." },
      { t: "h2", id: "bahrain-apply", text: "Visit eVisa and work permits" },
      { t: "ul", items: [
        "Open the Bahrain eVisa site and see if your passport and purpose are accepted before you pay an agent.",
        "For a job, ask which LMRA work permit covers you. The employer applies.",
        "Employment from Pakistan also means the Protector of Emigrants.",
        "Verify any visa number on the official enquiry before you fly.",
      ] },
      { t: "p", text: "Use [[/rates/bhd-to-pkr|BHD to PKR]] as a mid-market reference when you compare a salary with life at home." },
    ],
    [
      { q: "Can Pakistanis apply for a Bahrain eVisa?", a: "Check evisa.gov.bh on the day. Eligibility is a setting the site controls, not a fact this article should freeze." },
      { q: "What is the LMRA?", a: "The Labour Market Regulatory Authority handles work permits. Your employer deals with it. You should still know your permit exists." },
      { q: "What does the visa cost?", a: "The official payment screen shows the fee. Ignore round numbers from a shop." },
      { q: "Is a visit visa permission to work?", a: "No." },
      { q: "Who do I tell if an agent disappears with the fee?", a: "FIA and, if they claimed to be a licensed promoter, the Bureau of Emigration. Keep the receipt and the chat." },
    ],
    [S.evisabh, S.lmra, S.beoe, S.fia],
  ),

  "family-visa-uae-salary-requirement": art(
    [
      { t: "p", text: "A UAE family visa for Pakistanis depends on your own residence and on a minimum salary set by ICP. That salary figure has been changed before, and housing has sometimes been treated as part of the test. The only safe number is the one on the ICP family-sponsorship page today." },
      { t: "h2", id: "salary", text: "Minimum salary and documents" },
      { t: "ul", items: [
        "Read the current salary rule on ICP or u.ae. Write down the date you read it.",
        "See whether the rule uses basic salary or total salary. Those are different numbers on a UAE contract.",
        "Typical papers include your passport and Emirates ID, the family passports, photos, and proof of the relationship such as a marriage certificate. Attestation rules are on the form.",
        "Medical insurance for dependents is commonly required. Ask who pays it.",
        "Each family member has their own expiry date. See [[/guides/uae-visa-renewal|renewal]].",
      ] },
      { t: "p", text: "Price the flat and the school in the [[/tools/salary-converter|salary converter]] before you apply. A visa you can get is not the same as a budget you can live." },
    ],
    [
      { q: "What is the minimum salary for a UAE family visa?", a: "ICP publishes it. Because it has changed, this guide does not print a dirham figure. Open ICP and read the line that matches your case." },
      { q: "Does a housing allowance count?", a: "Sometimes the rule looks at salary plus accommodation, and sometimes it does not. Read the current wording. Do not rely on a 2019 video." },
      { q: "Can I sponsor my parents?", a: "Parent sponsorship has had extra conditions. Check ICP for parents separately from a spouse and children." },
      { q: "Do documents need attestation?", a: "Marriage and birth certificates usually need a legalisation chain. The UAE embassy or ICP checklist is the list to follow." },
      { q: "How long does it take?", a: "It varies. Apply with the passport validity and the medical window the form asks for, and do not book a one-way ticket for the family first." },
    ],
    [S.icp, S.uae, S.gdrfa],
  ),

  "gamca-medical-test": art(
    [
      { t: "p", text: "The GAMCA medical, now booked as Wafid, is the Gulf-approved health check many work visas ask for before you fly. In Pakistan you book it on wafid.com. You do not book it by paying a clinic that promises to “arrange GAMCA” on WhatsApp." },
      { t: "h2", id: "book", text: "Booking, centres and the fee" },
      { t: "ol", items: [
        "Open wafid.com and start a booking with the passport you will travel on.",
        "Choose the country you are actually going to. A slip for the wrong country is wasted.",
        "Pay the fee shown on Wafid. That is the official appointment fee. A clinic may not add a second medical price on the side. If they ask, stop and contact Wafid.",
        "The portal assigns an approved centre. You do not pick a cousin’s lab.",
        "Results are reported through the system. Check the status on Wafid. Fit and unfit are the words that matter.",
      ] },
      { t: "p", text: "Saudi work visas are the classic Wafid case. Other Gulf work visas often ask for the same slip. Read your visa instruction. The UAE also does a separate medical after you arrive for residence. A fit slip is not the Emirates ID." },
      { t: "p", text: "See [[/guides/saudi-work-visa-pakistan|Saudi work visa]] and [[/guides/protector-of-emigrants|the Protector]] for the steps around the medical." },
    ],
    [
      { q: "What is the GAMCA fee in Pakistan?", a: "Wafid shows the appointment fee when you book. Pay that figure. Anyone quoting a different “package” is not the official price." },
      { q: "Can I choose the city?", a: "You choose according to the portal’s options. You cannot insist on a centre that is not assigned." },
      { q: "How long is a fit report valid?", a: "The visa instruction and Wafid state the window. Do not assume it lasts a year." },
      { q: "What if I am unfit?", a: "The Gulf state will not accept that report for the visa. Ask the centre only what the portal already says. Do not pay for a second secret test." },
      { q: "Is GAMCA the same as Wafid?", a: "Wafid is the system that replaced the old GAMCA name. Use the Wafid site." },
    ],
    [S.wafid, S.beoe, S.hrsd],
  ),

  "protector-of-emigrants": art(
    [
      { t: "p", text: "The Protector stamp is the Bureau of Emigration and Overseas Employment clearance for Pakistanis going abroad to work. It sits on the emigration side in Pakistan. It is not a Gulf visa, and a Gulf visa does not replace it." },
      { t: "h2", id: "process", text: "Bureau of Emigration process and fees" },
      { t: "ol", items: [
        "Confirm you are going on employment. A pure visit is a different path.",
        "If an agent is involved, check that they are a licensed Overseas Employment Promoter. See [[/guides/oep-licensed-agents|check an OEP]].",
        "The foreign service agreement, insurance and the fee receipt are part of the file. The fee schedule is on beoe.gov.pk. Pay against that schedule.",
        "Take the protector endorsement before you fly for work. Airlines on labour routes ask for it.",
        "Keep photocopies. If the agent keeps the originals, you are stuck.",
      ] },
      { t: "p", text: "Direct employment, where the foreign company hires you without an OEP, still has a Bureau process. Read the direct-employment instructions on the Bureau site rather than skipping the Protector because there is no agent." },
    ],
    [
      { q: "What is the Protector fee?", a: "The Bureau publishes the current fee. Read it on beoe.gov.pk on the day you go. Add nothing in cash for “the officer”." },
      { q: "Do visit-visa travellers need it?", a: "The Protector system is for people going to work. If an agent tells a visit-visa passenger to buy a protector stamp, ask the Bureau before you pay." },
      { q: "Which cities have a Protector office?", a: "The Bureau lists its offices. Use that list, not a shop that says it is “next to the Protector”." },
      { q: "What if the OEP was not licensed?", a: "You can complain to the Bureau and to FIA. See [[/guides/report-visa-fraud-fia|how to report fraud]]." },
      { q: "Does the stamp guarantee the job is real?", a: "It means the emigration file was processed. You still need to verify the employer and the visa on the Gulf side." },
    ],
    [S.beoe, S.fia, S.mohre],
  ),

  "jobs-in-dubai-for-pakistanis": art(
    [
      { t: "p", text: "Jobs in Dubai for Pakistanis in 2026 are real, and so are the fake adverts around them. Apply where you can name the employer: the company’s own site, a recruiter you can call at that company, or a board posting that links back to the company. Then confirm the company before you pay anyone." },
      { t: "h2", id: "apply", text: "Where to look and how to apply" },
      { t: "ul", items: [
        "Company career pages and well-known boards are a start. The offer is only serious when it matches a licence you can check with MOHRE.",
        "Read basic salary, allowances, housing and overtime as separate lines. Put the basic into the [[/tools/salary-converter|salary converter]].",
        "A driver, a nurse and a software job are not one market. See the driver guide if that is your trade.",
        "From Pakistan, the safe sequence is in [[/guides/genuine-dubai-job-from-pakistan|genuine jobs from Pakistan]].",
        "Use a plain CV. The [[/guides/gulf-cv-format|CV format]] is enough.",
      ] },
    ],
    [
      { q: "What is a good Dubai salary for a Pakistani?", a: "There isn’t one number. A basic wage you can live on depends on rent. Run your offer through the salary converter with a real room price." },
      { q: "Are walk-in interviews still a thing?", a: "Some companies hold them. Go to the address on the company’s own advert. Do not pay an entrance fee." },
      { q: "Should I pay for a placement?", a: "Not to an unknown account. Check any Pakistani promoter on the Bureau of Emigration list first." },
      { q: "Do I need Arabic?", a: "Some jobs want it. Many do not. The advert should say." },
      { q: "How do I avoid a fake vacancy?", a: "Read [[/guides/fake-job-offer-dubai|fake Dubai offers]]. If the story starts with a fee, leave." },
    ],
    [S.mohre, S.beoe, S.uae],
  ),

  "jobs-in-saudi-arabia-for-pakistanis": art(
    [
      { t: "p", text: "Jobs in Saudi Arabia for Pakistanis still come through a sponsoring employer. You apply, you get an offer you can verify, you do the medical and the Protector step, and only then do you fly. After arrival the job lives on Qiwa and the residence lives on the Iqama." },
      { t: "h2", id: "saudi-apply", text: "How to apply without buying a contract" },
      { t: "ul", items: [
        "Prefer a company name you can search, and a contract that states the wage in riyals.",
        "Domestic work is a different system from a company job. Do not sign a company-looking paper for a house job.",
        "Nurses should read [[/guides/nurse-jobs-in-saudi-salary|nurse jobs]] because the licence sits with the health commission.",
        "The visa path is [[/guides/saudi-work-visa-pakistan|Saudi work visa from Pakistan]].",
        "Convert the wage with [[/rates/sar-to-pkr|SAR to PKR]] and the [[/tools/salary-converter|salary converter]] before you accept.",
      ] },
    ],
    [
      { q: "Is a Saudi job offer on WhatsApp enough?", a: "No. You need an employer you can identify and a visa you can check on the official enquiry." },
      { q: "Can I transfer sponsors later?", a: "Transfers exist under Saudi rules and they are not automatic. Ask HRSD or look at Qiwa. Do not pay a camp broker for a transfer." },
      { q: "Are there jobs without a medical?", a: "Work visas expect a medical. Book Wafid when the instruction says so." },
      { q: "What about a “free visa”?", a: "A visa you work on for someone other than the sponsor is a common way to become illegal. Avoid it." },
      { q: "Where do I check the Pakistani agent?", a: "On the Bureau of Emigration OEP search." },
    ],
    [S.hrsd, S.qiwa, S.beoe, S.wafid],
  ),

  "jobs-in-qatar-for-pakistanis": art(
    [
      { t: "p", text: "Jobs in Qatar for Pakistanis are employer-sponsored. Apply to a company you can name, and treat any request for a large upfront fee as a reason to walk away. The visa side is the [[/guides/qatar-visa-for-pakistanis|Qatar visa guide]]." },
      { t: "h2", id: "qatar-jobs", text: "How to apply" },
      { t: "ul", items: [
        "Use the company website or a recruiter who answers from that company’s domain.",
        "Ask for the wage in riyals, housing, and who pays the ticket.",
        "Keep your passport. Give it for an official step and take a receipt if they must hold it.",
        "Run the wage through the [[/tools/salary-converter|salary converter]].",
        "From Pakistan, finish the Protector process for employment.",
      ] },
    ],
    [
      { q: "Is Qatar still hiring Pakistanis?", a: "Companies hire for roles they need. There is no single national quota you can read on this page. Apply to real employers." },
      { q: "What salary should I expect?", a: "It depends on the trade. Compare the written basic wage with rent in the area they will house you, or not house you." },
      { q: "Can I change jobs after I arrive?", a: "Labour rules allow some changes and block others. Read the Ministry of Labour guidance. Do not pay a broker who promises a no-objection certificate." },
      { q: "Do I need Arabic?", a: "Only if the job says so." },
      { q: "Who licenses agents in Pakistan?", a: "The Bureau of Emigration. Check the licence." },
    ],
    [S.moiqa, S.beoe],
  ),

  "jobs-in-kuwait-for-pakistanis": art(
    [
      { t: "p", text: "Jobs in Kuwait for Pakistanis depend on a sponsor who will actually put you on their file. The dinar salaries look small until you convert them. Convert first, then decide. The visa notes are in [[/guides/kuwait-visa-for-pakistanis|Kuwait visa for Pakistanis]]." },
      { t: "h2", id: "kuwait-jobs", text: "How to apply and what to refuse" },
      { t: "ul", items: [
        "Get the employer’s name and a contract, not a voice note.",
        "Refuse a cash demand before a visa number exists. See [[/guides/visa-agent-scam-pakistan|visa agent scams]].",
        "Electricians and other trades should read [[/guides/electrician-jobs-in-gulf|electrician jobs]] for papers and tests.",
        "Use [[/rates/kwd-to-pkr|KWD to PKR]] and the salary converter.",
        "Clear the Protector if you are leaving Pakistan to work.",
      ] },
    ],
    [
      { q: "Why is the salary such a small number?", a: "The dinar is a strong currency. One dinar is a large amount in rupees. Always convert." },
      { q: "Are domestic jobs the same as company jobs?", a: "No. The contract and the sponsor type differ. Read the contract you were given, not a friend’s." },
      { q: "Can I pay for a Kuwait visa myself?", a: "A personal “visa for sale” is how people get stranded. The sponsor should be the employer." },
      { q: "What documents should I carry?", a: "Passport, certificates, and the CV format in the CV guide. Attest what the employer asks, not a random list." },
      { q: "Where do I check a Pakistani promoter?", a: "beoe.gov.pk." },
    ],
    [S.moikw, S.beoe, S.fia],
  ),

  "jobs-in-oman-for-pakistanis": art(
    [
      { t: "p", text: "Jobs in Oman for Pakistanis should be offered by a named employer and backed by a visa you can see on the Royal Oman Police side. The Ministry of Labour is the labour authority. An agent in Pakistan is optional, and if you use one they need a licence." },
      { t: "h2", id: "oman-jobs", text: "How to apply" },
      { t: "ol", items: [
        "Ask for the job title, wage in rials, hours and housing in writing.",
        "Check the visa route in [[/guides/oman-visa-for-pakistanis|Oman visa for Pakistanis]].",
        "Put the wage in the [[/tools/salary-converter|salary converter]] with a realistic rent.",
        "Complete the Protector step for employment.",
        "Use the [[/guides/gulf-cv-format|Gulf CV format]] so the certificate dates are easy to read.",
      ] },
    ],
    [
      { q: "Is Oman a good salary compared with the UAE?", a: "Compare your two written offers after rent, not the currency names. Use the converter." },
      { q: "Do I need a licence for my trade?", a: "If the employer or the ministry asks for a test or an attested certificate, that request should come from them, not from a shop selling certificates." },
      { q: "Can I go and search on a visit visa?", a: "Only if that visa allows the trip you are making. Working on the wrong status is a bad start. Check ROP." },
      { q: "What is a warning sign?", a: "A fee first, a free email address, and no company phone number." },
      { q: "Which rate page do I use?", a: "OMR to PKR." },
    ],
    [S.rop, S.beoe],
  ),

  "driver-jobs-in-dubai-salary": art(
    [
      { t: "p", text: "Driver jobs in Dubai do not have one salary. A light-vehicle driver, a school bus driver and a heavy truck driver are different jobs, with different licences and different basic wages. The number that matters is the basic salary on the MOHRE contract." },
      { t: "h2", id: "salary", text: "How to read a driver salary" },
      { t: "ul", items: [
        "Separate basic wage, housing, food and “target” or commission. Gratuity uses basic wage. See [[/guides/uae-gratuity-rules|UAE gratuity]].",
        "Ask who pays fines, fuel and the visa.",
        "A UAE driving licence is not the same as a Pakistani one. Ask the employer which test they will sponsor. Do not pay a broker for a licence.",
        "Put the basic wage into the [[/tools/salary-converter|salary converter]] with the rent you will really pay. Company housing changes the picture.",
        "The hiring path from Pakistan is the [[/guides/jobs-in-dubai-for-pakistanis|Dubai jobs guide]].",
      ] },
    ],
    [
      { q: "What is the average Dubai driver salary in dirhams?", a: "Advertised figures move and they are not official statistics. This site will not invent an average. Compare the basic wage on your contract with your rent." },
      { q: "Is commission guaranteed?", a: "No. Budget on the basic salary." },
      { q: "Do I need a Pakistani heavy licence first?", a: "Bring the licence you actually hold. The UAE test is a separate step the employer should explain." },
      { q: "Can I drive for a ride-hailing app on a visit visa?", a: "No. You need the legal residence and the licence the activity requires." },
      { q: "Who checks the company?", a: "MOHRE and the company’s trade name. If they do not match, do not join." },
    ],
    [S.mohre, S.uae],
  ),

  "nurse-jobs-in-saudi-salary": art(
    [
      { t: "p", text: "Nurse jobs in Saudi Arabia are hired against a classification from the Saudi Commission for Health Specialties, not only against a hospital advert. Dataflow, an exam and a licence step are common. The wage on the contract is the wage. The wage in the advert is an invitation to ask." },
      { t: "h2", id: "licence", text: "Licence, hiring and pay" },
      { t: "ul", items: [
        "Read the current classification route on scfhs.org.sa. Do not pay an agent for a “prometric date” you cannot see on that system.",
        "Ask the hospital whether they sponsor the licence steps and the ticket.",
        "Housing for nurses is sometimes provided. If it is not, price a room before you accept.",
        "The visa path is [[/guides/saudi-work-visa-pakistan|Saudi work visa from Pakistan]], including Wafid when it is required.",
        "Convert the riyals with the [[/tools/salary-converter|salary converter]].",
      ] },
    ],
    [
      { q: "What is a nurse’s salary in Saudi Arabia?", a: "Hospitals differ. Use the figure in the offer and confirm it is basic pay. This page will not publish a fake average." },
      { q: "Is the Pakistani nursing council certificate enough?", a: "It is the start. Saudi practice needs the Commission’s classification. Check their site for your case." },
      { q: "Who pays the exam fee?", a: "Agree that in writing with the employer. A demand to pay an unknown person is a stop." },
      { q: "Can I work while the licence is pending?", a: "Only if the hospital and the Commission say that status is allowed. Do not start because a recruiter said “it’s fine”." },
      { q: "Where is the Iqama in this process?", a: "After you arrive, the employer starts the residence. See the Iqama guide." },
    ],
    [S.scfhs, S.hrsd, S.wafid, S.beoe],
  ),

  "electrician-jobs-in-gulf": art(
    [
      { t: "p", text: "Electrician jobs in the Gulf are trade jobs. Employers ask for certificates, sometimes a skill test, and a contract with a basic wage. You should not start work on a visit visa, and you should not buy a “Gulf certificate” from a shop that is not the institute that taught you." },
      { t: "h2", id: "papers", text: "Papers, tests and the contract" },
      { t: "ul", items: [
        "Carry the original trade certificate and the experience letters you can defend.",
        "Ask whether the country wants an attested certificate. Attest through the proper channel, not a stall.",
        "A skill test, if there is one, should be at the employer or an authorised centre.",
        "Read overtime and safety kit in the contract. Electricity is not a job for “we’ll see later”.",
        "Country hiring notes: [[/guides/jobs-in-dubai-for-pakistanis|Dubai]], [[/guides/jobs-in-qatar-for-pakistanis|Qatar]], [[/guides/jobs-in-kuwait-for-pakistanis|Kuwait]].",
      ] },
    ],
    [
      { q: "What salary does an electrician get in the Gulf?", a: "It varies by country and by whether you hold a licence or only a helper’s letter. Compare the written basic wage in the salary converter." },
      { q: "Is a Pakistani licence valid?", a: "It supports your experience. The host country may still test you. Ask the employer which test." },
      { q: "Should I pay for a promised NOC?", a: "No. Transfers and no-objection letters are official steps, not products." },
      { q: "Do I need the Protector stamp?", a: "Yes if you leave Pakistan for employment." },
      { q: "What if the site is unsafe?", a: "Stop and tell the supervisor. In the UAE, MOHRE is the labour door. In Saudi Arabia, HRSD. Do not trade safety for a Friday’s overtime." },
    ],
    [S.mohre, S.hrsd, S.beoe],
  ),

  "gulf-cv-format": art(
    [
      { t: "p", text: "A CV for Gulf jobs should be one or two pages, easy to skim, and boring in a good way. Employers look for your trade, your dates, your passport nationality and whether you are already in the country. They do not need a paragraph about your passion." },
      { t: "h2", id: "template", text: "A simple template you can copy" },
      { t: "ul", items: [
        "Name, phone with country code, email, city, nationality, date of birth.",
        "Passport number and expiry. If you already hold a Gulf visa, say the emirate or city and the expiry.",
        "Trade title in one line. Example: Electrician, 8 years, industrial maintenance.",
        "Work history, newest first. Company, country, dates, three duties, no stories.",
        "Certificates and licences with the year and the institute.",
        "Languages and a driving licence if you have one.",
        "A photo is commonly expected in private-sector Gulf hiring. Use a plain one. It is a habit of the market, not a law.",
      ] },
      { t: "p", text: "Do not invent dates. A fake certificate is how a real offer dies at the medical or the attestation step. When you have the CV, apply through [[/guides/jobs-in-dubai-for-pakistanis|Dubai]] or [[/guides/jobs-in-saudi-arabia-for-pakistanis|Saudi]] notes, and check the agent with [[/guides/oep-licensed-agents|the OEP guide]]." },
    ],
    [
      { q: "How long should a Gulf CV be?", a: "One page if you are early in the trade. Two pages if you have the jobs to fill them. Not four." },
      { q: "Should I include expected salary?", a: "Only if the form asks. Otherwise wait until you know the basic wage they pay." },
      { q: "Do I need a photo?", a: "Many private employers expect one. Keep it simple, recent and alone." },
      { q: "Should I list my full home address?", a: "City and country are enough on the CV. Give the full address when a form asks." },
      { q: "Can I use the same CV for every country?", a: "Yes, if the facts are true. Change only the licence lines the country actually asked for." },
    ],
    [S.beoe, S.mohre],
  ),

  "oep-licensed-agents": art(
    [
      { t: "p", text: "An Overseas Employment Promoter is allowed to recruit Pakistanis for jobs abroad only if the Bureau of Emigration has licensed them. You can check that licence on beoe.gov.pk. A shop sign that says “OEP” is not the licence." },
      { t: "h2", id: "check", text: "How to check the licence" },
      { t: "ol", items: [
        "Ask for the promoter’s licence number and the exact business name.",
        "Search that name on the Bureau’s list of licensed promoters.",
        "Check the city and that the licence is still valid. An expired number is not a small detail.",
        "Pay only against a receipt in that same name. The Protector fee is a separate, published charge. See [[/guides/protector-of-emigrants|Protector stamp]].",
        "If the name is not on the list, do not pay. Read [[/guides/visa-agent-scam-pakistan|visa agent scams]].",
      ] },
    ],
    [
      { q: "Is every travel agent an OEP?", a: "No. A ticket shop is not allowed to send you for employment unless it also holds the promoter licence." },
      { q: "The agent says the website is down. What now?", a: "Try again, or call the Bureau on the number published on its site. Do not accept a photo of a certificate as the only proof." },
      { q: "Can a licensed OEP still cheat?", a: "Yes. The licence means they are registered. Keep receipts, and complain to the Bureau if the job is not the job you paid for." },
      { q: "What is a reasonable fee?", a: "The Bureau notifies official charges. Anything far above that, especially in cash, needs a question to the Bureau before you pay." },
      { q: "Where do I report a fake licence?", a: "Bureau of Emigration and FIA. See the fraud report guide." },
    ],
    [S.beoe, S.fia],
  ),

  "fake-job-offer-dubai": art(
    [
      { t: "p", text: "A fake Dubai job offer letter usually arrives as a rush. The salary is high, the fee is today, and the company email is a free address. Genuine offers can wait long enough for you to check MOHRE." },
      { t: "h2", id: "signs", text: "Signs the offer is not real" },
      { t: "ul", items: [
        "The company name on the letter does not match a licence you can find.",
        "You are asked to pay for the visa, a “security deposit”, or medical insurance into a personal account.",
        "The logo looks right but the phone number is a mobile that never answers as a company.",
        "They refuse to let you check the file on ICP or GDRFA.",
        "The contract is a Word file and they get angry if you edit nothing and only ask questions.",
      ] },
      { t: "p", text: "The clean path is [[/guides/genuine-dubai-job-from-pakistan|genuine jobs from Pakistan]]. If you already paid, keep every receipt and read [[/guides/report-visa-fraud-fia|how to report it]]." },
    ],
    [
      { q: "The letter has a QR code. Is it real?", a: "Only if the code opens an official MOHRE or ICP page and the details match. A code that opens a PDF on a private site proves nothing." },
      { q: "They know my passport number. Does that mean the visa is filed?", a: "No. You gave it to them, or someone else did. Check the status yourself." },
      { q: "Is a high salary a sign of a fake?", a: "It is a reason to slow down, not proof by itself. Check the company either way." },
      { q: "Should I fly and sort it out there?", a: "Not on a ticket you cannot refund, and not on a visit visa to start work." },
      { q: "Who do I tell in the UAE?", a: "If a real company is misusing your name, MOHRE. If the crime happened in Pakistan, FIA and the Bureau of Emigration." },
    ],
    [S.mohre, S.icp, S.gdrfa, S.fia],
  ),

  "visa-agent-scam-pakistan": art(
    [
      { t: "p", text: "Visa agent scams in Pakistan follow a pattern. You pay in pieces: token, medical, “embassy”, then a last demand the week you were supposed to fly. The visa never becomes visible on an official website." },
      { t: "h2", id: "signs", text: "Warning signs and where to complain" },
      { t: "ul", items: [
        "No licence on the Bureau of Emigration list. Check [[/guides/oep-licensed-agents|how to look up an OEP]].",
        "Pressure to pay today because “the quota closes”.",
        "Receipts that are blank or in a different name from the shop sign.",
        "Your original passport held for weeks.",
        "A visa file you cannot see on ICP, GDRFA, or the Saudi enquiry.",
      ] },
      { t: "p", text: "Complain with paper, not only with anger. The steps are in [[/guides/report-visa-fraud-fia|report visa fraud to FIA]]. A complaint does not promise your money back. It is still the right door." },
    ],
    [
      { q: "I already paid half. Should I pay the rest to finish?", a: "Not if you still cannot see a visa on the official site. Paying more is how the loss grows." },
      { q: "The agent is my relative. What then?", a: "The same checks. A licence is a licence. Keep the conversation in messages." },
      { q: "Can I get the passport back?", a: "Ask in writing. If they refuse, include that in the FIA complaint. A passport is not their property." },
      { q: "Is every agent a scam?", a: "No. Licensed promoters process real jobs. The test is the licence, the receipt, and a visa you can verify." },
      { q: "What should I photograph?", a: "The receipt, the CNIC they took, the shop front, the account you transferred to, and the offer letter." },
    ],
    [S.beoe, S.fia, S.icp],
  ),

  "fake-saudi-visa-check": art(
    [
      { t: "p", text: "To verify a Saudi visa is genuine, check the visa number on the official Saudi enquiry. A colour PDF can be edited in an hour. Your flight should wait until the enquiry agrees with the paper." },
      { t: "h2", id: "verify", text: "What to match on the screen" },
      { t: "ul", items: [
        "Visa number, passport number, and the spelling of the name.",
        "The sponsor or the purpose: work, family visit, or something else. A work story with a visit visa is the wrong document. See [[/guides/saudi-visit-visa-for-pakistanis|Saudi visit visas]].",
        "The dates. An expired visa that “will be extended on arrival” is a sentence you should not trust.",
        "The embassy or the platform that issued it. The Ministry of Foreign Affairs is the policy home.",
      ] },
      { t: "p", text: "If the number does not exist, stop paying and read [[/guides/report-visa-fraud-fia|how to report fraud]]. The work path, when the visa is real, continues in [[/guides/saudi-work-visa-pakistan|Saudi work visa from Pakistan]]." },
    ],
    [
      { q: "Which website do I use?", a: "Use the visa enquiry on the Saudi Ministry of Foreign Affairs services, or the official visa platform named on your application. Do not use a look-alike domain." },
      { q: "The agent says the enquiry is only for embassies.", a: "That is convenient for the agent. Try the official page yourself." },
      { q: "The PDF has a barcode.", a: "Scan it only if it opens a government address. A barcode can point anywhere." },
      { q: "Can I check an Iqama the same way?", a: "An Iqama is checked on Absher after you are a resident. A visa is the earlier document." },
      { q: "What if the visa is real but the job is different?", a: "The visa being real does not make the salary true. You still want the wage in a contract you can keep." },
    ],
    [S.mofa, S.visitsaudi, S.absher],
  ),

  "report-visa-fraud-fia": art(
    [
      { t: "p", text: "You can report visa or job fraud to the FIA and, where a promoter is involved, to the Bureau of Emigration. Go with papers. A story without a receipt is harder to act on. Neither office can promise that you will get the money back." },
      { t: "h2", id: "report", text: "What to take, and which door" },
      { t: "ul", items: [
        "Your CNIC, the receipts, bank transfer records, and the chat or email.",
        "The offer letter, the fake visa PDF, and the agent’s full name and shop address.",
        "A short timeline: when you paid, how much, and what they promised.",
        "FIA for criminal deception, including online payments. Use the contact published on fia.gov.pk.",
        "The Bureau of Emigration if the person acted as an Overseas Employment Promoter. Use beoe.gov.pk.",
        "A local police report is sometimes needed as well. Ask the FIA desk what they want in your city.",
      ] },
      { t: "p", text: "Read [[/guides/visa-agent-scam-pakistan|the scam patterns]] so you can describe what happened in plain sentences. If the loss is still only a deposit and the passport is with you, do not send more money while you wait." },
    ],
    [
      { q: "Will FIA refund me?", a: "A complaint is not a refund. It is how an investigation can start. Keep that expectation accurate when you talk to your family." },
      { q: "Can I complain online?", a: "Use only the form or email published on fia.gov.pk. Copycat complaint sites exist." },
      { q: "The agent is in another city. Where do I file?", a: "Ask FIA. Do not let distance stop you collecting the papers." },
      { q: "Should I post the agent’s photo on Facebook first?", a: "File the complaint first. A public post can warn others, and it can also complicate a case. Ask the officer." },
      { q: "What if I am already in the Gulf on a bad visa?", a: "Speak to your country’s embassy or consulate and, for labour issues, the host ministry (MOHRE or HRSD). Keep copies of everything you signed." },
    ],
    [S.fia, S.beoe, S.mohre, S.hrsd],
  ),

  "cheap-flights-dubai-to-pakistan": art(
    [
      { t: "p", text: "Cheap flights from Dubai to Lahore, Karachi, Islamabad or Peshawar are the fares that stay cheap after you add a bag. Emirates, flydubai, PIA, airblue and Air Arabia all fly parts of this route, and a “lite” ticket can be a cabin bag only." },
      { t: "h2", id: "book", text: "When to book, and what to compare" },
      { t: "ul", items: [
        "Compare the total, not the base fare. A bag to take gifts home can cost more than the difference between two airlines.",
        "Mid-week dates are often calmer than Friday night. That is a habit, not a guarantee.",
        "Eid and the December school holidays cost more and sell out. See [[/guides/eid-flights-to-pakistan-tips|Eid flight tips]].",
        "DWC and DXB are different airports. Check which one your ticket uses.",
        "Buy on the airline’s site or a agent you can visit again. Open the PNR on the airline site the same day.",
      ] },
      { t: "p", text: "Baggage rules are in [[/guides/baggage-allowance-gulf-to-pakistan|the baggage guide]]. This site does not sell tickets. The flight box stays switched off until there is a real search to show." },
    ],
    [
      { q: "Which month is cheapest from Dubai to Pakistan?", a: "There is no honest single month. Avoid Eid and school holidays if you can move your dates, and compare the total with bags." },
      { q: "Is flydubai cheaper than Emirates?", a: "Sometimes on the fare, and sometimes not once a suitcase is added. Compare both totals." },
      { q: "Are Peshawar and Multan served direct?", a: "Schedules change. Check the airline for Peshawar, Multan, Sialkot, Lahore, Karachi and Islamabad on your dates." },
      { q: "Should I buy from a WhatsApp dealer?", a: "Only if the booking appears under your name on the airline site before you leave the shop." },
      { q: "Can I carry gold as baggage?", a: "That is a customs question. Read [[/guides/gold-carry-dubai-saudi-pakistan|carrying gold to Pakistan]] before you buy it." },
    ],
    [S.emirates, S.flydubai, S.pia, S.airblue, S.airarabia],
  ),

  "cheap-flights-saudi-to-pakistan": art(
    [
      { t: "p", text: "Cheap flights from Riyadh, Jeddah or Dammam to Pakistan are easier to find when you are flexible by a day and honest about bags. Saudia, PIA, airblue and flynas are the names to check on the route you actually need. A connection via another Gulf city can be cheaper or a trap. Read the transit visa rule before you celebrate the fare." },
      { t: "h2", id: "saudi-fares", text: "Riyadh, Jeddah, Dammam" },
      { t: "ul", items: [
        "Search the city you can leave from. A cheap Jeddah fare is useless if you live in Dammam and the bus costs your saving.",
        "Open the fare rules for baggage. See [[/guides/baggage-allowance-gulf-to-pakistan|baggage allowance]].",
        "Eid bookings follow the same pressure as everywhere else. Read [[/guides/eid-flights-to-pakistan-tips|Eid tips]].",
        "Confirm the PNR on the airline website.",
        "Dubai connections are covered in spirit by [[/guides/cheap-flights-dubai-to-pakistan|Dubai to Pakistan flights]].",
      ] },
    ],
    [
      { q: "Which Saudi city is cheapest to Pakistan?", a: "It changes with the date. Search Riyadh, Jeddah and Dammam separately if you can reach more than one." },
      { q: "Is flynas a real airline?", a: "Yes. Still open the booking on their site, and read the bag rule. Lite fares are strict." },
      { q: "Do I need a transit visa if I connect?", a: "Sometimes, depending on the airport and your passport. Check before you buy a connection that looks clever." },
      { q: "Can my employer’s travel desk book it?", a: "Yes. Ask for the PNR and the baggage in writing." },
      { q: "When do Eid fares jump?", a: "As soon as people are sure of the holiday. Book when your leave is approved, not the week before." },
    ],
    [S.saudia, S.pia, S.airblue, S.mofa],
  ),

  "baggage-allowance-gulf-to-pakistan": art(
    [
      { t: "p", text: "Baggage allowance on PIA, Emirates, flydubai, Air Arabia, Saudia and airblue is printed on your ticket. It is not one Gulf rule. A cheap fare on flydubai, Air Arabia or a PIA lite brand can be a cabin bag only, while a flexible fare includes a suitcase." },
      { t: "h2", id: "allowance", text: "What to read on the ticket" },
      { t: "ul", items: [
        "The kilogram or piece allowance for the fare brand you bought, not the allowance your cousin had last year.",
        "The cabin bag size. Airlines differ, and the gate is stricter than the advert.",
        "Extra-bag prices, which are usually lower if you buy them online before the airport.",
        "Sports kit, wheelchairs and infants. Those have their own lines on the airline page.",
        "Gold, cash and restricted goods. Those are customs questions, not baggage questions. See [[/guides/gold-carry-dubai-saudi-pakistan|gold to Pakistan]].",
      ] },
      { t: "p", text: "Use the airline sites listed below. If a travel agent tells you the bag is included, ask them to show that line inside the booking." },
    ],
    [
      { q: "How many kilos do I get on Emirates to Pakistan?", a: "It depends on the fare brand. Open your booking on emirates.com. This page will not print a kilo number that your ticket might not have." },
      { q: "Is Air Arabia always hand baggage only?", a: "Many of their low fares are. You can often add a bag. Read the fare you are buying." },
      { q: "Does PIA include 30kg?", a: "Some fares have, and some current fares do not. Read piac.com.pk for your flight." },
      { q: "What about Saudia from Jeddah?", a: "Check saudia.com with your ticket number. Brands differ." },
      { q: "Can I pool bags with my brother?", a: "Only if the airline’s rule for that fare says so. Ask at check-in with both of you present. Do not assume." },
    ],
    [S.pia, S.emirates, S.flydubai, S.airarabia, S.saudia, S.airblue],
  ),

  "eid-flights-to-pakistan-tips": art(
    [
      { t: "p", text: "Eid flights to Pakistan get expensive because everyone wants the same three days. The date of Eid depends on the moon, so the calendar shift is real. Book when your leave is signed, and keep the ticket in your own name on the airline’s website." },
      { t: "h2", id: "eid", text: "Booking habits that actually help" },
      { t: "ul", items: [
        "Be ready to fly a day earlier or later. The middle night of the rush is the painful one.",
        "Add the bag when you compare fares. Eid is when the empty-bag fare hurts most.",
        "If two of you are travelling, book together so you are not split across a sold-out return.",
        "A WhatsApp screenshot of a ticket is not a PNR. See [[/guides/cheap-flights-dubai-to-pakistan|Dubai flights]] and [[/guides/cheap-flights-saudi-to-pakistan|Saudi flights]].",
        "Leave time for the Protector or exit papers if your status needs them. The airport in Eid week is slow.",
      ] },
    ],
    [
      { q: "How many weeks before Eid should I book?", a: "As soon as your holiday is approved and you can pay. There is no magic day. Earlier is usually calmer." },
      { q: "Will prices fall if I wait?", a: "Sometimes a seat appears, and often it does not. Waiting is a gamble, not a strategy." },
      { q: "Are return tickets cheaper than two one-way tickets?", a: "Compare both totals with bags. Do not assume." },
      { q: "What if the moon-sighting shifts Eid?", a: "Your employer’s leave letter may shift too. Check the ticket change fee before you need it." },
      { q: "Can I buy gold and extra bags on the same ticket?", a: "Buy the bag on the airline site. Gold is a customs matter. Read the gold guide before you carry it." },
    ],
    [S.emirates, S.pia, S.saudia, S.flydubai],
  ),
};
