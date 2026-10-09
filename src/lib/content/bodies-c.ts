import type { ArticleBody, Block, Faq, Source } from "@/lib/content/types";
import { S, feeNote } from "@/lib/content/sources";

function art(blocks: Block[], faqs: Faq[], sources: Source[]): ArticleBody {
  return { blocks: [...blocks, feeNote], faqs, sources };
}

export const bodiesC: Record<string, ArticleBody> = {
  "qatar-visa-for-pakistanis": art(
    [
      {
        t: "p",
        text: "A Qatar visa for Pakistanis is permission you must hold before you travel. A Pakistani passport does not have a general visa-free or visa-on-arrival entry to Qatar, so the flight is the last step, not the first. Visit products open and close, and the only list that matters is the one on the Qatar Ministry of Interior portal the day you apply. A work residence is different: a company in Qatar sponsors it. An office in Lahore, Karachi or Islamabad can type forms. It cannot be your sponsor. Apna Ghar will not print a fee, a processing day count, or a “guaranteed” visa product, because those numbers live on the official screen and they move.",
      },
      {
        t: "h2",
        id: "work-and-visit",
        text: "Visit visas and work residence",
      },
      {
        t: "p",
        text: "Treat visit and work as two doors that do not open onto each other. A visit, where the Ministry of Interior is offering one to a Pakistani passport, is for the purpose written on that visa. It is not a quiet way to start a job, and it is not a document you “convert at the airport” because an agent said so. If a relative in Doha is hosting you, the application still has to be a visit product the portal actually allows, with that host named in the way the form asks. If the portal refuses the passport or the purpose, stop. Buying the ticket does not change the rule.",
      },
      {
        t: "p",
        text: "A work residence starts with an employer you can name. Ask for the company’s registered name, the job title, the place of work, and the wage in Qatari riyals before you resign in Pakistan. The employer, or a channel you can see linked from the Ministry of Interior, requests the work residence. You should be able to see a reference that you can check yourself. A colour PDF in WhatsApp is a picture. It is not the status. Match the passport number, the spelling of your name, and the dates to the screen. If any of those three disagree, do not fly.",
      },
      {
        t: "ul",
        items: [
          "Visit: apply only through a channel you can open on the Ministry of Interior site, or through an airline page that sends you back to that site. If the button is not there for a Pakistani passport, the product is not open.",
          "Work: the employer in Qatar requests the work residence. Know the company’s name, the job title and the city before you give notice at home.",
          "Do not pay a large fee in Pakistan before a reference exists on an official screen. A token, a “file opening” charge and an embassy fee that you cannot see on the portal are reasons to stop.",
          "Employment departures from Pakistan still pass the Protector of Emigrants. Read the [[/guides/protector-of-emigrants|Protector guide]] and check any agent on the Bureau of Emigration list first.",
          "A medical may be required before you fly. If the instruction names Wafid, book only on the official portal, as the [[/guides/gamca-medical-test|GAMCA medical guide]] explains. Do not buy a slip from a clinic that promises to arrange it.",
          "Keep the passport name, the visa name and the ticket name identical, including father’s name and spelling. A one-letter difference is how people miss flights.",
          "After arrival, residence formalities such as medical checks, biometrics and the residence card are the employer’s process to finish. Ask who books them and who holds your passport while they are pending. Take a receipt if the company keeps the passport.",
          "A visit visa is not permission to work. If the job is real, the employer can sponsor the correct residence. Anyone who tells you to “enter as a visitor and we will fix it” is describing a risk, not a plan.",
        ],
      },
      {
        t: "h2",
        id: "papers-and-scams",
        text: "Papers people prepare, and the stories that waste them",
      },
      {
        t: "p",
        text: "The form on the day is the checklist. A typical work file still tends to include a passport with enough validity for the visa they are requesting, a plain photograph in the size the form states, and the offer or contract the employer will file. Some jobs ask for attested education or trade certificates. Attest only what that employer or the portal asks for, through the channel the form names, not through a stall that sells “embassy stamps” without a receipt in an official name. Family visit papers, when that product is open, usually add proof of the relationship and the host’s identity. Do not email extra scans of your family’s documents to a stranger because a shop said it speeds the file.",
      },
      {
        t: "p",
        text: "Three warning signs show up in almost every bad Qatar file we hear about from Pakistan. The first is a fee before any reference number. The second is an agent who will not let you open the Ministry of Interior page yourself. The third is a job title on the visa that does not match the work you were promised, with a promise that “HR will change it after you land”. You cannot know that, and you should not resign on it. If you already paid, keep the receipt, the account name, the chat and the shop address, and read [[/guides/visa-agent-scam-pakistan|visa agent scams]] and [[/guides/report-visa-fraud-fia|how to report fraud]]. Paying the next instalment does not make a missing visa appear.",
      },
      {
        t: "h2",
        id: "money-and-next",
        text: "What to settle before you resign",
      },
      {
        t: "p",
        text: "Read the wage as basic salary plus any housing, transport or food allowance, each on its own line. A single “package” number is how people discover, too late, that rent was never included. Put the basic figure through the [[/tools/salary-converter|salary converter]] and use [[/rates/qar-to-pkr|QAR to PKR]] only as a mid-market reference, not as the rate a shop will give you. Ask who pays the ticket to Doha, who pays the return if the visa is refused, and whether accommodation is a company room, an allowance, or nothing. Jobs themselves are covered in [[/guides/jobs-in-qatar-for-pakistanis|jobs in Qatar for Pakistanis]]. The Ministry of Interior fee, if there is one for your product, is the figure on its payment page. This guide will not copy it.",
      },
    ],
    [
      {
        q: "Can Pakistanis get a Qatar visa on arrival?",
        a: "Do not assume so. A Pakistani passport is not in a general visa-free category for Qatar. Open the Ministry of Interior portal before you buy a ticket and see whether any visit product is offered to your passport this month. A transit desk is not a plan, and a blog that groups “Asian passports” together is not the rule.",
      },
      {
        q: "Who sponsors a Qatar work visa?",
        a: "The employer in Qatar. An agent in Pakistan can prepare papers only if the real sponsor has started a file. The agent cannot be the sponsor, and a relative’s visit invitation is not a work permit. Ask for the company name and check the reference yourself.",
      },
      {
        q: "What is the Qatar visa fee for Pakistanis?",
        a: "Read it on the Ministry of Interior application or payment page for the product you are actually using. Apna Ghar will not copy a riyal or rupee number that may already have changed. A shop price that does not match that screen is the shop’s price, not the state’s.",
      },
      {
        q: "How do I check a Qatar visa status?",
        a: "Use the reference number on the Ministry of Interior service and match passport number, name and dates. A PDF forwarded by an agent is not the status. If the site will not show your file, you do not have a file you can fly on.",
      },
      {
        q: "Do I need the Protector stamp for Qatar?",
        a: "If you are leaving Pakistan for employment, you should clear the Bureau of Emigration before you fly. A pure visit is a different path. Confirm your case on beoe.gov.pk rather than letting an agent decide which stamp to sell you. The Protector fee is the one on the Bureau receipt.",
      },
      {
        q: "Is a Qatar visit visa a way to find a job?",
        a: "No. Working needs the correct residence, sponsored by the employer. Entering on a visit and starting work is how people end up illegal. If the company wants you, it can file the work residence while you are still at home.",
      },
    ],
    [S.moiqa, S.beoe, S.wafid],
  ),

  "kuwait-visa-for-pakistanis": art(
    [
      {
        t: "p",
        text: "A Kuwait visa for Pakistanis is a sponsored permission, not a stamp you collect at the airport because a shop in Pakistan printed a copy. Work visas come from an employer in Kuwait. Visit visas, in the periods when they are open to a Pakistani passport, are applied through official Ministry of Interior channels. A forwarded “visa copy”, a voice note, or a PDF with a blurry eagle is not proof. Apna Ghar will not invent a dinar fee or a processing time. The fee is the one on the official payment screen, and the status is the one that screen will show you when you type the reference yourself.",
      },
      {
        t: "h2",
        id: "kuwait-check",
        text: "How to apply and how to check",
      },
      {
        t: "p",
        text: "Start by separating the purpose. A company job, a domestic job in a private house, and a visit to family are three different files. Mixing them is how people land on the wrong sponsorship and then cannot change it. For a company job, ask for the employer’s registered name, the job title, the wage in Kuwaiti dinars, and who provides housing. For domestic work, the sponsor is usually the household, and the contract is not the same paper a construction company uses. Do not sign a company-looking offer for a house job, and do not accept a house job described as “just a visa, you can work anywhere”.",
      },
      {
        t: "p",
        text: "The check is simple and people skip it because the agent talks faster than they can open a website. Ask for the application or visa number. Open a Ministry of Interior service yourself. Match your passport number, the spelling of your name, the sponsor, and the dates. If the agent says the enquiry is “only for embassies” or “down for Pakistan”, that is convenient for the agent. Try the official page on another day, from your own phone, before you pay the next amount. A status website that asks for a fee to “unlock” a result the government shows for nothing is not the Ministry.",
      },
      {
        t: "ul",
        items: [
          "Ask the sponsor for the application number and check it on a Ministry of Interior service yourself. Save a screenshot that shows the passport number and the date.",
          "Do not pay a large fee in Pakistan before that number exists. A cash security deposit, a refundable bond, or a personal JazzCash request is a warning sign, not a procedure.",
          "Domestic work is a separate sponsorship track from a company job. Read the contract you were given, not a friend’s contract from another house.",
          "Employment cases leaving Pakistan go through the Protector of Emigrants. See the [[/guides/protector-of-emigrants|Protector guide]]. A Gulf visa does not replace that stamp.",
          "If the instruction names a Wafid medical, book it only on wafid.com, using the passport you will travel on. The [[/guides/gamca-medical-test|medical guide]] explains why a clinic cannot sell you the slip.",
          "Keep your passport. If a shop must hold it for a stated hour, take a written receipt with the shop’s name and the date they will return it.",
          "Match the name on the passport, the visa and the ticket, including spaces and father’s name. Airlines on this route do check.",
          "A visit visa is not permission to work. Do not let an agent sell a visit as if it were a job, and do not resign in Pakistan on a visit file.",
        ],
      },
      {
        t: "h2",
        id: "wage-and-papers",
        text: "Reading the wage, and the papers that belong in the file",
      },
      {
        t: "p",
        text: "The Kuwaiti dinar is a strong currency, so a salary that looks like a small number can still be a large number in rupees, and a salary that looks “normal” next to a dirham wage can be something else entirely. Always convert. Use [[/rates/kwd-to-pkr|KWD to PKR]] as a mid-market reference and put the basic wage, not the agent’s spoken package, into the [[/tools/salary-converter|salary converter]]. Ask which part is basic salary and which part is a housing, food or transport allowance. Allowances are not the same as basic pay when you later ask about end-of-service benefits. This site will not print an average Kuwait salary, because advertised averages are not your contract.",
      },
      {
        t: "p",
        text: "Papers depend on the product. A work file commonly needs the passport, a photograph in the size the form states, and the offer the sponsor will file. Some trades are asked for attested certificates. Attest what the sponsor or the official form asks, and keep the receipt from the attestation channel. Do not pay a market stall for a stamp you cannot trace. Medical instructions, when they exist, come from the sponsor or the portal, not from a neighbour who “just sent his brother”. Hiring notes sit in [[/guides/jobs-in-kuwait-for-pakistanis|jobs in Kuwait]]. If the story starts with a fee, leave, and read [[/guides/visa-agent-scam-pakistan|visa agent scams]].",
      },
      {
        t: "h2",
        id: "before-you-fly",
        text: "Before you fly",
      },
      {
        t: "p",
        text: "Do not buy a non-refundable ticket until the visa you need is visible on an official screen and the name matches. Ask who meets you, which airport, and which document you must carry in your hand, not in the suitcase. Ask who completes the residence steps after landing, and what happens to your passport during those days. If you are going to work, the Protector endorsement should already be done, and the fee you paid in Pakistan should match a Bureau of Emigration receipt, not a blank cash note. If the sponsor’s name on the visa is not the employer you were promised, stop. “We will transfer you later” is not a transfer.",
      },
    ],
    [
      {
        q: "Can I check a Kuwait visa with my passport?",
        a: "Use the Ministry of Interior’s own enquiry and match the passport number, name, sponsor and dates. Avoid websites that charge a fee to unlock a status the government shows without that charge. A PDF from an agent is not the enquiry.",
      },
      {
        q: "What does a Kuwait work visa cost the worker?",
        a: "Ask before you pay anything, and read the official payment screen if you are the person paying a government fee. A request for a cash security deposit into a personal account is a warning sign. Apna Ghar will not invent a dinar figure.",
      },
      {
        q: "Is a Kuwait visit visa a way to find a job?",
        a: "No. Working requires the correct residence and the correct sponsor. Do not let an agent sell you a visit as if it were a job, and do not enter on a visit because someone promised to “fix the visa inside”.",
      },
      {
        q: "Are medical tests required?",
        a: "Often yes for residence. If the instruction names Wafid, book only on wafid.com and attend the centre named on the slip. A fit result is a medical result. It is not the visa.",
      },
      {
        q: "Where do I complain about an agent in Pakistan?",
        a: "If they claimed to be a promoter, use the Bureau of Emigration. If money was taken by deception, use the FIA at fia.gov.pk. Keep the receipt, the chat, the account name and the shop address. A complaint is not a promise of a refund.",
      },
      {
        q: "Why does the salary look so small?",
        a: "One Kuwaiti dinar is a large amount in rupees. Convert the written basic wage before you compare it with a dirham or riyal offer. Do not compare the raw numbers across currencies.",
      },
    ],
    [S.moikw, S.beoe, S.fia],
  ),

  "oman-visa-for-pakistanis": art(
    [
      {
        t: "p",
        text: "An Oman visa for Pakistanis has to be read on the Royal Oman Police site, because e-visa eligibility is not the same for every passport and it is not something a blog can freeze. A work visa is sponsored by an employer in Oman. Do not buy a ticket until the visa you need is visible on an official screen, with your name spelled as it is in the passport. Apna Ghar will not state that visa-on-arrival is open, and it will not copy a fee. The Royal Oman Police payment page shows the charge for the product it is willing to sell you that day. If your passport is not offered that product, there is nothing to pay.",
      },
      {
        t: "h2",
        id: "oman-routes",
        text: "Visit rules and work visas",
      },
      {
        t: "p",
        text: "On the Royal Oman Police site, start an application far enough to see whether a Pakistani passport is offered the visa you want. Stop before paying if it is not. Do not rely on a page that groups all Asian passports together, and do not rely on a travel agent’s laminated price list. A family visit, a tourism product and an entry for work are different purposes. Using the wrong one because it was the only button that worked is how files get refused at the end, after the money and the ticket are already gone.",
      },
      {
        t: "p",
        text: "For a job, the employer’s name should match the visa. Ask for the registered name, the city, the job title, the wage in Omani rials, the hours, and whether housing is a company bed, an allowance, or your problem. The Ministry of Labour is the labour authority. The employer deals with the work permission. You should still know that a file exists in your name before you resign. An agent in Pakistan is optional. If you use one, they need a Bureau of Emigration licence, and they still are not the sponsor. The sponsor is in Oman.",
      },
      {
        t: "ul",
        items: [
          "Open the Royal Oman Police channel and confirm your passport and purpose are accepted before you pay an agent or a ticket desk.",
          "For a job, match the employer’s name to the visa. Read [[/guides/jobs-in-oman-for-pakistanis|jobs in Oman]] before you treat a WhatsApp offer as a contract.",
          "Clear the Protector of Emigrants in Pakistan if the trip is for employment. A visit file does not need to be dressed up as a work exit, and a work exit should not skip the Bureau.",
          "Keep the passport name consistent on the visa and the ticket. Include the father’s name if the passport shows it.",
          "If a medical is required and the instruction says Wafid, book on the official portal only. See the [[/guides/gamca-medical-test|GAMCA guide]].",
          "Ask who pays the ticket, who pays a change if the visa date moves, and what happens if the application is refused.",
          "Do not hand over original certificates without a written list of what was taken and when it will be returned.",
          "A shop that offers “Oman visa in three days, any passport” is selling a slogan. The Police site is selling the visa, if it is selling one at all.",
        ],
      },
      {
        t: "h2",
        id: "papers",
        text: "Papers, attestation and the wage",
      },
      {
        t: "p",
        text: "The form is the list. People commonly prepare a passport with enough validity, a photograph in the stated size, and, for work, the offer the employer will file. Education or trade certificates are attested only when the employer or the official checklist asks. Use the attestation route that checklist names. A faster stamp from a market is not faster if the receiving officer will not accept it. Family papers, where a family product is open, usually need proof of the relationship. Do not send those scans to a free email address.",
      },
      {
        t: "p",
        text: "The rial’s mid-market rate is on [[/rates/omr-to-pkr|OMR to PKR]]. It is a reference, not a bank quote and not a salary. Put the written basic wage into the [[/tools/salary-converter|salary converter]] with a rent you might actually pay if housing is not provided. This guide will not invent an average Omani wage for Pakistanis. Two offers are comparable only after rent, food and the ticket are written down. A higher package that is mostly an allowance you never see in the bank is not the higher offer.",
      },
      {
        t: "h2",
        id: "stop-signs",
        text: "When to stop",
      },
      {
        t: "p",
        text: "Stop if the agent will not let you see the Royal Oman Police page. Stop if the fee is a round cash figure with no Bureau receipt and no official payment reference. Stop if the visa purpose is a visit and the plan is to start work on Monday. Stop if the sponsor name is a person you have never heard of when you were hired by a company, or a company you have never heard of when you were hired by a household. If money has already moved, keep every receipt and read [[/guides/report-visa-fraud-fia|how to report visa fraud]]. Another payment is not a rescue.",
      },
    ],
    [
      {
        q: "Does Oman offer visas on arrival to Pakistanis?",
        a: "Check Royal Oman Police on the day you plan to travel. Do not rely on a blog that groups all Asian passports together, and do not buy a ticket on a cousin’s experience from a different year.",
      },
      {
        q: "What is the work visa process?",
        a: "The employer in Oman sponsors it. You complete any medical they specify and, if you are leaving Pakistan for employment, the Protector step. An agent at home can help with papers only after you have checked their licence.",
      },
      {
        q: "How much is the Oman visa fee?",
        a: "The Royal Oman Police payment page shows it for the product your passport can apply for. Copy it from there. Apna Ghar will not print a rial or rupee fee that the screen might not be charging.",
      },
      {
        q: "Can a Pakistani agent be my sponsor?",
        a: "No. The sponsor is in Oman, whether that is a company or, for some domestic cases, a household. The agent is a middleman. If there is no sponsor, there is no work visa.",
      },
      {
        q: "Where do I verify the agent at home?",
        a: "On the Bureau of Emigration list of licensed Overseas Employment Promoters, if they are recruiting you for a job. A travel-agency sign is not that licence. See the OEP guide linked from the Protector pages on beoe.gov.pk.",
      },
      {
        q: "Can I go and search for work on a visit visa?",
        a: "Only if that visa allows the trip you are making, and even then working on the wrong status is a bad start. Check the purpose on the Police screen before you fly. A job hunt is not a reason to ignore the purpose.",
      },
    ],
    [S.rop, S.beoe, S.wafid],
  ),

  "bahrain-visa-for-pakistanis": art(
    [
      {
        t: "p",
        text: "A Bahrain visa for Pakistanis should be read on the official eVisa site or on Nationality, Passports and Residence Affairs guidance, not on a printout from a shop. Work permits sit with the Labour Market Regulatory Authority and a sponsoring employer. Eligibility for a visit product is a setting the official site controls. It can differ by passport, and it is not a fact this page should freeze. Apna Ghar will not quote a dinar fee. If you are about to pay, the only fee that counts is the one on the official payment screen for the application you opened yourself.",
      },
      {
        t: "h2",
        id: "bahrain-apply",
        text: "Visit eVisa and work permits",
      },
      {
        t: "p",
        text: "Open the Bahrain eVisa site and see if your passport and your purpose are accepted before you pay an agent. If the site will not start the application, an agent cannot honestly sell you that visa. If the site will start it, you can often see the fee before you commit. Write that figure down. A shop price that is many times higher needs an explanation you can check, not a speech about “embassy contacts”. Visit, family visit and work are different purposes. A button that says tourism is not a work permit with a friendlier name.",
      },
      {
        t: "p",
        text: "For a job, ask which Labour Market Regulatory Authority work permit covers you. The employer applies. You should know the employer’s registered name, the job title, the wage in Bahraini dinars, and whether housing and transport are included as cash, as a place to sleep, or not at all. Ask for a permit or application reference you can verify on an official enquiry before you resign and before you fly. A Word file with a logo is not that reference. Employment from Pakistan also means the Protector of Emigrants. The Gulf permit does not cancel the Pakistan exit step.",
      },
      {
        t: "ul",
        items: [
          "Open the Bahrain eVisa site and see if your passport and purpose are accepted before you pay anyone else.",
          "For a job, ask which LMRA work permit covers you. The employer applies. You should still see that it exists.",
          "Employment from Pakistan also means the Protector. Read [[/guides/protector-of-emigrants|the Protector guide]] and check the agent on the Bureau list.",
          "Verify any visa or permit number on the official enquiry before you fly. Match passport number, name and dates.",
          "If a medical is instructed through Wafid, book only on the official portal. The centre is the one named on the slip.",
          "Keep passport, ticket and visa names identical.",
          "Do not start work on a visit status because a supervisor said the permit is “in process”. In process is not permission.",
          "If an agent disappears with the fee, complain with paper. The FIA and, where they claimed to be a licensed promoter, the Bureau of Emigration are the doors. See [[/guides/report-visa-fraud-fia|how to report fraud]].",
        ],
      },
      {
        t: "h2",
        id: "wage",
        text: "How to read a Bahrain offer",
      },
      {
        t: "p",
        text: "Use [[/rates/bhd-to-pkr|BHD to PKR]] as a mid-market reference when you compare a salary with life at home, and run the basic wage through the [[/tools/salary-converter|salary converter]]. The dinar, like the Kuwaiti dinar, is a strong currency. A small-looking number can be a serious wage or a poor one depending on rent. Separate basic salary from allowances. Ask who pays the visa, the ticket, and any medical. Ask what the hours are, and whether overtime is contractual or a hope. This page will not publish an average salary for Pakistanis in Bahrain. Your offer is the number on the paper the employer will stand behind, not the number in an advert.",
      },
      {
        t: "p",
        text: "Certificates are attested only if the employer or the permit checklist asks. Carry originals to interviews if they ask, and do not leave them behind. A skill test, if there is one, should be at the employer or an authorised centre, not in a flat above a mobile-phone shop. Domestic work, if that is the offer, is a different contract from a company job. Read the paper in front of you. A friend’s contract from another Gulf country is not a translation of yours.",
      },
      {
        t: "h2",
        id: "fly",
        text: "Tickets, status and complaints",
      },
      {
        t: "p",
        text: "Buy the ticket when the visa is visible and the name matches, not when the agent is impatient. Open the booking on the airline site the same day and confirm the PNR. A booking without a PNR is not a ticket. If you are comparing fares home later, the habit is the same one in the [[/guides/cheap-flights-dubai-to-pakistan|Dubai flight notes]]: compare the total with bags, and do not invent a “usual” fare. If the file goes quiet after you pay, stop paying. Photograph the receipt, the shop front, the chat and the account. Then use the complaint doors. Anger in a family group is not a case file.",
      },
    ],
    [
      {
        q: "Can Pakistanis apply for a Bahrain eVisa?",
        a: "Check the official eVisa site on the day. Eligibility is a setting that site controls, not a fact this article should freeze. If the site will not offer the product to your passport, do not pay an agent for it.",
      },
      {
        q: "What is the LMRA?",
        a: "The Labour Market Regulatory Authority handles work permits in Bahrain. Your employer deals with it. You should still know your permit exists and that the employer name matches the job you accepted.",
      },
      {
        q: "What does the Bahrain visa cost?",
        a: "The official payment screen shows the fee. Ignore round numbers from a shop. Apna Ghar does not copy a fee that may have changed since this page was written.",
      },
      {
        q: "Is a visit visa permission to work?",
        a: "No. A visit is the purpose written on it. Starting a job on that status is not a shortcut. It is a way to be on the wrong paper from the first day.",
      },
      {
        q: "Who do I tell if an agent disappears with the fee?",
        a: "The FIA, and the Bureau of Emigration if they claimed to be a licensed promoter. Keep the receipt, the chat, the account title and the shop address. A complaint is not a refund.",
      },
      {
        q: "Do I need a medical for Bahrain?",
        a: "Residence and work files often do. Follow the instruction on your file. If it names Wafid, use only the official booking page and the centre printed on the slip.",
      },
    ],
    [S.evisabh, S.lmra, S.beoe, S.fia],
  ),

  "family-visa-uae-salary-requirement": art(
    [
      {
        t: "p",
        text: "The UAE family visa salary requirement is a published rule, not a rumour in a building lobby. Checked on 9 October 2026, the UAE government page on a residence visa for family members, updated 28 September 2026, says the sponsor must have a minimum salary of AED 4,000, or AED 3,000 plus accommodation. That page is the [residence visa for family members](https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members). It is the figure for the relatives it names. It is not a figure Apna Ghar has guessed, and it is not the rule for sponsoring parents. Read the page again on the day you apply, because this threshold has changed before and the official wording wins if it changes again.",
      },
      {
        t: "h2",
        id: "who",
        text: "Who that salary rule covers",
      },
      {
        t: "p",
        text: "On that same UAE government page, the family members a resident can sponsor under this route are a spouse, unmarried daughters, sons under 25, and children with special needs. Those are the categories to read against your own household. A son who is 25 or older is not “under 25” because he is still studying, unless the current page says something extra, which you must read there rather than assume. An unmarried daughter is a status the documents have to support. Children with special needs are a category the page names, and the medical and evidence side of that file should follow the checklist, not a neighbour’s memory.",
      },
      {
        t: "p",
        text: "Parent sponsorship is not this AED 4,000 or AED 3,000-plus-accommodation figure. Do not let an agent paste the spouse rule onto a mother or father. Dubai’s General Directorate of Residency and Foreigners Affairs sets a separate, higher bar for parents. Use [GDRFA Dubai](https://www.gdrfad.gov.ae) for a Dubai residence file and read the parent conditions there. This guide will not invent a parent salary, a bank-deposit figure, or a one-year visa fee. Other emirates can differ because the sponsor’s residence is issued in a specific emirate. If you live in Abu Dhabi, Sharjah or another emirate, use the authority that issued your residence, and the federal page, rather than a Dubai screenshot forwarded in a group.",
      },
      {
        t: "ul",
        items: [
          "Spouse: the marriage has to be documented in the way the application asks, which usually means an attested marriage certificate, not only a nikah photo on a phone.",
          "Unmarried daughters: the civil status has to match what you declare. Do not guess. Read the document line on the form.",
          "Sons under 25: check the age against the passport date of birth on the day you file, not against the age he was when you first discussed the move.",
          "Children with special needs: follow the evidence the form asks for. Do not pay a clinic for a letter the authority did not request.",
          "Parents: stop and open GDRFA if the sponsor’s visa is a Dubai visa. The spouse minimum is the wrong test.",
          "Each family member is a separate residence with its own expiry. A wife’s visa can end on a different day from a child’s. See [[/guides/uae-visa-renewal|UAE visa renewal]].",
          "Medical fitness is required for those 18 and older. Build that appointment into the plan. It is not a surprise at the typing centre.",
          "You need your own valid residence to be the sponsor. A visit visa, or a visa that is about to expire, is not a family-sponsorship plan.",
        ],
      },
      {
        t: "h2",
        id: "salary",
        text: "How the AED 4,000 and AED 3,000 lines work",
      },
      {
        t: "p",
        text: "The official wording, checked on 9 October 2026, is a minimum salary of AED 4,000, or AED 3,000 plus accommodation. Read whether your contract shows a basic salary, a housing allowance, or employer-provided accommodation, because those are different lines on a UAE contract. A spoken “package” of four thousand that is actually three thousand basic plus a transport allowance is not something you should assume passes. Take the contract, the salary certificate, and the tenancy, and compare them with the sentence on the government page. If your papers do not match the sentence, fix the papers or delay the application. Do not ask a typing centre to “put a number”.",
      },
      {
        t: "p",
        text: "Price the flat, the school and the insurance before you celebrate a salary that clears the minimum. A visa you can get is not a budget you can live. Put the basic wage and the rent into the [[/tools/salary-converter|salary converter]], and use [[/rates/aed-to-pkr|AED to PKR]] only as a mid-market reference when you explain the move to family in Pakistan. The [[/guides/cost-of-living-dubai|Dubai cost of living]] notes are a way to list rent and school, not a promise of prices. Employer accommodation, if it is real, should be written down: who can live there, whether dependents are allowed, and what happens if you change jobs.",
      },
      {
        t: "h2",
        id: "documents",
        text: "Documents people prepare",
      },
      {
        t: "p",
        text: "People preparing a family file are commonly asked for the sponsor’s and each family member’s passport, photographs, attested marriage or birth certificates, a tenancy contract (Ejari in Dubai), a salary certificate, and health insurance. Medical fitness applies to those 18 and older. The application service runs through the Federal Authority for Identity, Citizenship, Customs and Port Security. Start from [ICP](https://icp.gov.ae) and from the UAE government page linked above, and use the checklist on the service you actually open. Attestation of Pakistani marriage and birth certificates is a chain. Follow the chain the form names. A document that was attested for a different country, or attested years ago and then changed, may need to be done again. Ask before you book the family’s tickets.",
      },
      {
        t: "p",
        text: "Insurance is commonly required for dependents. Ask who pays the premium, what the policy covers, and whether the policy must be issued before the residence is stamped. Do not buy a policy from a caller who already knows your passport number. Use an insurer you can identify, and keep the policy number next to each person’s residence expiry. Tenancy evidence matters because the AED 3,000-plus-accommodation route depends on accommodation being real. In Dubai that conversation usually includes Ejari. A bedroom in a shared flat with no contract in your name is a weak story. If the employer provides a staff room, ask whether that room is accepted as the accommodation the rule means, and get the answer from the official wording and the service desk, not from the roommate.",
      },
      {
        t: "h2",
        id: "order",
        text: "A sensible order, and what not to book yet",
      },
      {
        t: "ol",
        items: [
          "Read the UAE government family-visa page on the day you start, including the salary line and the list of relatives.",
          "If the relative is a parent, leave that page and open the emirate authority. For Dubai, that is GDRFA. Do not reuse the spouse figure.",
          "Collect passports, photos, attested marriage or birth certificates, tenancy or employer accommodation proof, the salary certificate, and insurance quotes.",
          "Book medical fitness for every person who is 18 or older, inside the window the application gives you.",
          "File through ICP or the emirate channel the service names. Keep every reference number.",
          "Buy tickets only when each person’s entry or residence step is actually issued, and the names match the passports.",
        ],
      },
      {
        t: "p",
        text: "The sponsor’s job sits under the work-visa rules in [[/guides/uae-work-visa-pakistan|UAE work visa from Pakistan]] if you have not moved yet. Family sponsorship is a later step. You cannot sponsor anyone on a hope and a visit visa. If a typing centre asks for cash “to the officer” on top of the receipt, refuse. The fee is the one on the official service. This page does not copy typing-centre bundles.",
      },
    ],
    [
      {
        q: "What is the minimum salary for a UAE family visa?",
        a: "Checked on 9 October 2026, the UAE government page updated on 28 September 2026 says the sponsor must have a minimum salary of AED 4,000, or AED 3,000 plus accommodation. Read that page again before you apply. The figure is for the relatives it lists. It is not the parent rule.",
      },
      {
        q: "Does a housing allowance count?",
        a: "The official alternative to AED 4,000 is AED 3,000 plus accommodation. Look at your contract and your tenancy, not at a 2019 video. A transport allowance is not automatically accommodation. If your papers do not match the sentence, do not file.",
      },
      {
        q: "Who can I sponsor under that rule?",
        a: "The same government page names a spouse, unmarried daughters, sons under 25, and children with special needs. Check ages and marital status against the documents. Parents are a different file.",
      },
      {
        q: "Can I sponsor my parents on AED 4,000?",
        a: "No. Parent sponsorship is not this figure. Dubai’s GDRFA sets a separate higher bar. Open gdrfad.gov.ae if your residence is from Dubai, and do not let anyone invent a parent salary for you. Other emirates use their own authority.",
      },
      {
        q: "Do documents need attestation?",
        a: "Marriage and birth certificates usually need the legalisation chain the application describes. A photo of a nikah nama is not the end of that chain. Follow ICP and the UAE government checklist, and keep the receipts.",
      },
      {
        q: "Who needs a medical?",
        a: "Medical fitness is required for those 18 and older. Plan it inside the application window. Children under 18 follow the checklist for their age. Do not skip an adult because they feel well.",
      },
      {
        q: "How long does a family visa take?",
        a: "It varies with the file and the emirate. Apply with the passport validity and the medical window the form asks for, and do not buy non-refundable tickets for the whole family first. The reference number is the clock, not the typing centre’s promise.",
      },
    ],
    [
      {
        label: "UAE: residence visa for family members",
        href: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members",
      },
      S.icp,
      S.gdrfa,
    ],
  ),

  "gamca-medical-test": art(
    [
      {
        t: "p",
        text: "The GAMCA medical test, now booked as Wafid, is the Gulf-approved health check many work and residence visas ask for before a Pakistani worker flies. You book it on the official Wafid portal, on the [book appointment](https://wafid.com/book-appointment/) page, using the passport you will travel on. You do not book it by paying a clinic, a token shop, or a WhatsApp number that promises to “arrange GAMCA”. Apna Ghar checked the public Wafid pages on 9 October 2026. Those pages do not authorise a fixed Pakistan clinic price in rupees. The slip fee is whatever the official payment screen shows on the day you book. Quote that screen. Do not print a rupee total you cannot see on wafid.com.",
      },
      {
        t: "h2",
        id: "book",
        text: "How to book, and what the two fees actually are",
      },
      {
        t: "p",
        text: "There are two different payments, and mixing them up is how people overpay. The first is the Wafid slip fee. You pay it on the official portal. The amount is the one on that payment screen, in the currency the screen uses, on that day. A third-party “token” shop that takes your passport and books the slip for you adds its own charge. That extra charge is not the government fee. It is the shop’s commission, and you do not need the shop to press the button. The second payment is the examination fee. The medical centre named on your slip collects its own examination fee in person, when you attend. That centre fee is not printed as a Pakistan-wide rupee total on the public Wafid pages we use. Ask the centre what it charges when you arrive, and take a receipt in the centre’s name.",
      },
      {
        t: "ol",
        items: [
          "Open the official booking page and start the appointment with the passport you will travel on. A slip in a slightly different name is a wasted day.",
          "Choose the country you are actually going to. A slip for the wrong Gulf state does not transfer because the capitals are near each other.",
          "Pay only the slip fee shown on the Wafid payment screen. Photograph that screen before you pay, so you know the official figure.",
          "Do not pay a token shop a second, larger rupee price for the same slip. If someone offers a package, ask which part is the screen fee and which part is their commission. Then book it yourself.",
          "The portal assigns the approved centre. You attend the centre named on the slip. You do not pick a cousin’s lab, and you do not ask the centre to swap you.",
          "The centre collects its examination fee in person. That is separate from the slip. Take the receipt.",
          "Results are reported through the system. Check them on the [medical status search](https://wafid.com/en/medical-status-search/). Fit and unfit are the words that matter.",
          "Keep the slip, the payment proof and the status screenshot with your visa file. The Protector and the airline may ask what the visa instruction already required.",
        ],
      },
      {
        t: "h2",
        id: "centres",
        text: "Centres, countries and what the report is for",
      },
      {
        t: "p",
        text: "The report is for Gulf work and residence medicals. It is not a general health certificate for a university, and it is not the medical you may still have to do after you arrive. Saudi work visas are the classic Wafid case. Other Gulf work visas often ask for the same slip when the instruction says so. Read your visa instruction before you choose the country on the form. The UAE also does a separate medical after arrival for residence and Emirates ID. A fit Wafid slip is not the Emirates ID, and a fit result is not the visa. The centre must be the one named on the slip. An approved-looking sign on a different street does not count. If you attend the wrong building, the system will not have your result, and paying them cash will not create it.",
      },
      {
        t: "p",
        text: "Cities and centres change with the portal’s own list. You take the option the booking gives you. You cannot insist on a hospital that is not assigned, even if it is nearer your bus stop. Go on the day the slip says, with the passport, the slip, and any previous reports the centre told you to bring. Fasting and medicines: follow what that centre tells you when you confirm the appointment, not a video. If you are unwell on the day, ask the centre whether you should postpone before you start the tests. Do not ask a dalal outside the gate to “adjust” a result. The status page will not agree with a handwritten note.",
      },
      {
        t: "h2",
        id: "around",
        text: "Where the medical sits in the rest of the file",
      },
      {
        t: "p",
        text: "A sensible employment order is a real offer, then the medical if that visa requires it, then the Protector registration in Pakistan, then the flight. The medical is not the first thing you buy, and it is not a product an agent should sell you before an employer exists. See [[/guides/saudi-work-visa-pakistan|Saudi work visa from Pakistan]] and [[/guides/protector-of-emigrants|the Protector]] for the steps around the slip. Other country notes, including [[/guides/qatar-visa-for-pakistanis|Qatar]] and [[/guides/uae-work-visa-pakistan|the UAE work visa]], say when a pre-departure medical is named. If your paper does not name Wafid, do not buy a Wafid slip “just in case” from a shop. You may need a different test, or a test only after you land.",
      },
      {
        t: "p",
        text: "Validity is a window, not a souvenir. The visa instruction and the Wafid record state how long a fit report can be used. Do not assume it lasts a year, and do not assume a fit report from a previous country still covers a new application. If the status says unfit, the Gulf state will not accept that report for the visa. Ask the centre only to explain what the portal already says. Do not pay for a second secret test, a “recheck with a friend”, or a letter that promises to overturn the system. If a further official step exists, it will be on the portal or in the visa instruction, not in a car park.",
      },
      {
        t: "h2",
        id: "scams",
        text: "Token shops and fake fees",
      },
      {
        t: "p",
        text: "The pattern is old. A shop near the Protector or near a bus terminal says the Wafid site is complicated, takes its own extra charge, and later sends a slip you could have printed. Sometimes the slip is real, and you have only overpaid. Sometimes the slip is for the wrong country, or the appointment is not in the system when you reach the centre. Compare any demand with the payment screen. Checked on 9 October 2026, the public pages do not authorise a fixed clinic price, so anyone quoting one “official GAMCA fee in rupees” for all of Pakistan is not quoting Wafid. If you already paid a shop, keep the receipt. If the slip is missing, do not pay them again. Book on the portal, or complain through the contacts Wafid publishes, and read [[/guides/visa-agent-scam-pakistan|visa agent scams]] if the same person is also holding a visa fee.",
      },
    ],
    [
      {
        q: "What is the GAMCA fee in Pakistan?",
        a: "Checked on 9 October 2026, the public Wafid pages do not authorise a fixed Pakistan clinic price. The slip fee is whatever the official payment screen shows on the day you book. The medical centre collects its own examination fee in person. A token shop’s rupee total is not the government fee. Quote the screen, not a poster.",
      },
      {
        q: "Can I choose the medical centre?",
        a: "No. You book on wafid.com and you attend the centre named on the slip. You may see city options the portal offers. You cannot move the appointment to a relative’s lab or to a centre that is not on that slip.",
      },
      {
        q: "How long is a fit report valid?",
        a: "The visa instruction and the Wafid record state the window. Do not assume it lasts a year, and do not reuse a slip for a different country without reading the new instruction.",
      },
      {
        q: "What if I am unfit?",
        a: "The Gulf state will not accept that report for the visa. Ask the centre only what the portal already shows. Do not pay for a secret second test. If there is an official review path, it will be on Wafid or in the visa instruction.",
      },
      {
        q: "Is GAMCA the same as Wafid?",
        a: "Wafid is the system that replaced the old GAMCA name. Book at wafid.com/book-appointment/ and check status at the medical status search. Any site with a similar name that asks you to pay a different merchant is not the portal.",
      },
      {
        q: "Does a fit slip mean I have the visa?",
        a: "No. The slip is the medical. The visa is a separate file with the Gulf authority, and the Protector stamp is a separate Pakistan step if you are leaving for employment. A fit result does not book your ticket.",
      },
      {
        q: "Can a clinic book Wafid for me?",
        a: "The appointment is created on the official portal. A third party can only add their own service charge, which is not the government fee. You can book it yourself. The centre you attend must still be the one named on the slip, and it will charge its examination fee when you are there.",
      },
    ],
    [
      {
        label: "Wafid: book an appointment",
        href: "https://wafid.com/book-appointment/",
      },
      {
        label: "Wafid: medical status search",
        href: "https://wafid.com/en/medical-status-search/",
      },
      S.beoe,
    ],
  ),

  "protector-of-emigrants": art(
    [
      {
        t: "p",
        text: "The Protector of Emigrants stamp is the Bureau of Emigration and Overseas Employment clearance for Pakistanis going abroad to work. The Bureau’s site is [beoe.gov.pk](https://beoe.gov.pk). The stamp sits on the emigration side in Pakistan. It is not a Gulf visa, and a Gulf visa does not replace it. Airlines on labour routes ask for it because the Pakistani rule, not the employer’s WhatsApp, says a person leaving for employment should be registered. Apna Ghar will not invent the Protector fee or the insurance premium. Both are whatever the Bureau shows on the day, and the fee you pay is the one printed on the BEOE receipt.",
      },
      {
        t: "h2",
        id: "process",
        text: "The order that actually works",
      },
      {
        t: "p",
        text: "People are pushed into the Protector office too early, with no employer, or too late, on the way to the airport. The workable order is short. First, an offer you can believe: a named foreign employer, a job title, and a wage. Second, the medical if that visa requires one, booked the way the instruction says, which for many Gulf work visas means Wafid and not a token shop. Third, either a licensed Overseas Employment Promoter or a direct-employment path, which you confirm on the Bureau site. Fourth, Protector registration itself. Fifth, you pay the fee shown on the BEOE receipt, not a cash top-up for “the officer”. If someone reorders those steps so that the fee comes before the offer, you are not in the process. You are in a queue.",
      },
      {
        t: "ol",
        items: [
          "Confirm you are going on employment. A pure visit is a different path. Do not buy a Protector stamp for a holiday because a shop said the airport likes to see one.",
          "Read the offer. You should know the country, the employer’s name, the job title and the wage before anyone talks about a fee.",
          "Do the medical if the visa instruction requires it. If it names Wafid, use the [[/guides/gamca-medical-test|Wafid booking guide]]. A fit slip is not the Protector stamp.",
          "If an agent is involved, check that they are a licensed Overseas Employment Promoter before you pay them. See [[/guides/oep-licensed-agents|how to check an OEP]] and search the list on beoe.gov.pk. An expired licence is not a small detail.",
          "If there is no agent, read the Bureau’s direct-employment instructions. Direct hire still has a Bureau process. “No OEP” does not mean “no Protector”.",
          "Register with the Protector. Take the foreign service agreement and the insurance papers the Bureau asks for. The insurance premium is the one in that official file, not a number this guide will invent.",
          "Pay the fee shown on the BEOE receipt. Keep that receipt. Add nothing in cash.",
          "Take the endorsement before you fly for work. Keep photocopies. If the agent keeps the only original, you are stuck at the airport and they are not.",
        ],
      },
      {
        t: "h2",
        id: "fee",
        text: "Fees, insurance and offices",
      },
      {
        t: "p",
        text: "The Bureau publishes the charges that apply to emigration clearance. Read them on beoe.gov.pk on the day you go, and then look at your own receipt. If the receipt is blank, in a different name from the office, or higher than the published charge with no explanation on the paper, do not argue in the corridor and do not pay the gap in cash. Ask the desk to put the figure on a Bureau receipt, or leave and use the complaint channel the Bureau publishes. The insurance that belongs in an emigration file is the policy the process asks for. A promoter who sells a different policy at a premium this page cannot see is not quoting the Bureau. Ask to see the policy name and the premium on the paper you will sign.",
      },
      {
        t: "p",
        text: "Protector offices are the ones the Bureau lists. Use that list, not a shop that says it is “next to the Protector” and can get you a stamp without the queue. Those shops are where passports sit for weeks. If you must use a licensed promoter, the licence is checked first, the receipt is in that promoter’s name, and the Protector fee is still a separate, official charge. A single round cash figure called “everything” is how the official fee and the promoter’s fee and a fiction get glued together. Split them on paper.",
      },
      {
        t: "h2",
        id: "direct",
        text: "OEP, direct employment, and what the stamp does not prove",
      },
      {
        t: "p",
        text: "A licensed OEP is allowed to process recruitment. The licence does not make the foreign job real. You still match the visa on the Gulf side, using the enquiry for that country, before you fly. Direct employment, where the foreign company hires you without a promoter, is a path the Bureau describes. Read those instructions on beoe.gov.pk rather than skipping the Protector because nobody in Pakistan took a commission. The company abroad does not cancel Pakistani emigration rules by sending a polite email.",
      },
      {
        t: "p",
        text: "The stamp means the emigration file was processed. It does not mean the salary will be paid, the housing exists, or the sponsor is the person named in the offer letter. Keep the contract. Put the basic wage through the [[/tools/salary-converter|salary converter]] before you accept, and read the country guide for the place you are actually going, whether that is [[/guides/jobs-in-dubai-for-pakistanis|Dubai]], [[/guides/jobs-in-saudi-arabia-for-pakistanis|Saudi Arabia]], or another Gulf state. If the promoter was not licensed, or the fee on the receipt is not what you paid, complain to the Bureau and, where there is deception, to the FIA. See [[/guides/report-visa-fraud-fia|how to report fraud]].",
      },
      {
        t: "h2",
        id: "day",
        text: "What to carry on the day",
      },
      {
        t: "ul",
        items: [
          "Passport, CNIC, photographs in the size the office asks for, and copies of each.",
          "The offer or foreign service agreement, with the employer’s name readable.",
          "The medical slip, if one was required, and the Wafid status if that was the test.",
          "The OEP licence number, if a promoter is in the file, after you have found that number on the Bureau list.",
          "Insurance papers the Bureau’s current instruction names.",
          "Enough time. Eid week and Friday closures are not the moment to discover a missing copy.",
          "A bag for your own photocopies. Leave with your originals.",
        ],
      },
    ],
    [
      {
        q: "What is the Protector fee?",
        a: "The Bureau of Emigration publishes the current charge, and the fee you pay is the one on the BEOE receipt. Read beoe.gov.pk on the day you go. Apna Ghar will not invent a rupee figure. Add nothing in cash for an officer.",
      },
      {
        q: "What is the insurance premium?",
        a: "It is the premium in the policy the Bureau’s process requires, shown on that paper. This guide will not guess it. If a promoter quotes a different product, ask the Bureau before you pay.",
      },
      {
        q: "Do visit-visa travellers need the Protector stamp?",
        a: "The Protector system is for people going to work. If an agent tells a visit-visa passenger to buy a stamp, ask the Bureau before you pay. A visit is not improved by an emigration stamp you did not need.",
      },
      {
        q: "Which cities have a Protector office?",
        a: "The Bureau lists its offices on beoe.gov.pk. Use that list. A shop that says it sits next to the Protector is not the Protector.",
      },
      {
        q: "What if the OEP was not licensed?",
        a: "You can complain to the Bureau of Emigration and to the FIA if money was taken by deception. Keep the receipt and the chat. See the fraud report guide. Do not send a second fee while you wait.",
      },
      {
        q: "Does the stamp guarantee the job is real?",
        a: "No. It means the emigration file was processed in Pakistan. You still verify the employer and the visa on the Gulf side, and you still read the wage on the contract.",
      },
      {
        q: "I have a direct offer and no agent. Do I still register?",
        a: "Yes, if you are leaving Pakistan for employment. Read the direct-employment instructions on the Bureau site and complete the Protector step. The absence of an OEP is not an exemption you invent yourself.",
      },
    ],
    [S.beoe, S.fia, S.mohre],
  ),

  "jobs-in-dubai-for-pakistanis": art(
    [
      {
        t: "p",
        text: "Jobs in Dubai for Pakistanis are real, and so are the fake adverts wrapped around them. The honest search starts where you can name the employer: the company’s own site, a recruiter who answers from that company’s domain, or a board posting that links back to the company. It does not start with a fee. Apna Ghar will not print an average Dubai salary, because a Facebook number is not a statistic and it is not your contract. The number that matters is the basic wage on the employment contract the Ministry of Human Resources and Emiratisation will recognise, after you have separated housing, transport and commission.",
      },
      {
        t: "h2",
        id: "apply",
        text: "Where to look and how to apply",
      },
      {
        t: "p",
        text: "Use company career pages and well-known boards as a start, then leave the advert behind. An advertisement is not a MOHRE contract. The offer is only serious when the company name matches a licence you can ask about, and when the employer, not a shop in Pakistan, is the one who will open the work permit. From Pakistan, the safe sequence is the one in [[/guides/genuine-dubai-job-from-pakistan|genuine Dubai jobs from Pakistan]]: a real offer, a work permit from the employer, an entry permit you can check, and only then the flight. You still clear the Protector of Emigrants if you are leaving for employment. A promoter, if you use one, must be on the Bureau of Emigration list.",
      },
      {
        t: "ul",
        items: [
          "Apply where the company’s name is visible, and keep the job title they advertised next to the job title on the offer. If those two titles describe different work, ask before you accept.",
          "Read basic salary, housing, transport, food and overtime or commission as separate lines. Put only the basic into the [[/tools/salary-converter|salary converter]].",
          "Ask who pays the visa, the ticket, and medical insurance. A “free visa” that you later repay out of wages is a debt, not a gift.",
          "A driver, a nurse, an electrician and a software job are not one market. If you drive, read [[/guides/driver-jobs-in-dubai-salary|driver jobs]]. If you are in a trade, read [[/guides/electrician-jobs-in-gulf|electrician jobs]].",
          "Use a plain CV. The headings in the [[/guides/gulf-cv-format|Gulf CV format]] are enough. Do not buy a designed CV from the same person who is charging a placement fee.",
          "Walk-in interviews still happen. Go to the address on the company’s own advert. Do not pay an entrance fee, and do not hand over your passport “for the file” at a hotel lobby.",
          "Check the visa later on the official UAE channels described in [[/guides/check-uae-visa-status|how to check a UAE visa]]. A PDF is not the status.",
          "If the story starts with a fee, leave. Read [[/guides/fake-job-offer-dubai|fake Dubai offers]] before you send another transfer.",
        ],
      },
      {
        t: "h2",
        id: "contract",
        text: "How to read the contract, not the advert",
      },
      {
        t: "p",
        text: "MOHRE is the UAE labour door. The contract it holds is the one that should state your basic wage. Recruitment ads, WhatsApp broadcasts and “urgent requirement” posters are invitations to apply. They are not that contract. When a real offer arrives, write down four lines: basic salary, allowances, hours, and who provides housing. Gratuity conversations use basic wage. The [[/guides/uae-gratuity-rules|UAE gratuity guide]] and the [[/tools/gratuity-calculator|gratuity calculator]] are there so you can see why a low basic and a high allowance is a different deal from the same total written as basic. Ask what happens in the probation period, who holds the passport, and whether overtime is paid or “included”. Included is not a number.",
      },
      {
        t: "p",
        text: "Rent decides whether a wage is livable. A basic salary that looks fine in a staff room can be a crisis if you must rent in the open market. Read [[/guides/cost-of-living-dubai|the cost of living notes]] as a list of questions, not as a price guarantee. Convert dirhams with [[/rates/aed-to-pkr|AED to PKR]] when you talk to family, and remember the mid-market rate is not the rate you will get at a shop. Do not accept a job because the rupee figure in the agent’s voice note was large. Accept it because the basic wage, the housing and the visa are written down and the company exists.",
      },
      {
        t: "h2",
        id: "refuse",
        text: "What to refuse",
      },
      {
        t: "p",
        text: "Refuse a placement fee into a personal account. Refuse a security deposit. Refuse to start work on a visit visa. Refuse a contract in a language you cannot read unless a translation you trust is attached and the Arabic or the MOHRE version is the one you were told matches it. Refuse to resign in Pakistan before the entry permit is visible on an official screen. Refuse an agent who is not on the Bureau list. None of these refusals costs you a real job. A real employer still wants you next week. A fake file needs your money today.",
      },
      {
        t: "p",
        text: "After you arrive, finish the medical, the Emirates ID and the labour contract, and keep copies. Your passport is yours. If the company holds it for a visa step, take a receipt and a date. If the work is not the work in the contract, speak to the company in writing first and use MOHRE if the written contract is being ignored. Do not pay a camp broker to “move your visa”. Transfers, where they exist, are official steps. They are not products sold in a parking lot.",
      },
    ],
    [
      {
        q: "What is a good Dubai salary for a Pakistani?",
        a: "There isn’t one number, and this site will not invent an average. A basic wage you can live on depends on rent and on whether housing is provided. Run the basic figure through the salary converter with a real room price, and ignore package totals until they are split into lines.",
      },
      {
        q: "Are walk-in interviews still a thing?",
        a: "Some companies hold them. Go to the address on the company’s own advert. Do not pay an entrance fee, and do not attend a walk-in that only exists inside an agent’s office in Pakistan.",
      },
      {
        q: "Should I pay for a placement?",
        a: "Not to an unknown account. Check any Pakistani promoter on the Bureau of Emigration list first. The Protector fee, if you are going for employment, is a separate charge on a Bureau receipt. It is not a placement package.",
      },
      {
        q: "Do I need Arabic?",
        a: "Some jobs want it. Many do not. The advert and the contract should say. Do not pay for a certificate the employer did not ask for.",
      },
      {
        q: "How do I avoid a fake vacancy?",
        a: "If the company cannot be named, if the email is a free address, or if the story starts with a fee, leave. Read the fake-offer guide. A real MOHRE contract comes after a real employer, not before a JazzCash transfer.",
      },
      {
        q: "Is the advertisement the job offer?",
        a: "No. An advert is not a MOHRE contract. The binding wage is the basic salary on the employment contract, with allowances listed separately. Ask for that paper before you resign.",
      },
    ],
    [S.mohre, S.beoe, S.uae],
  ),

  "jobs-in-saudi-arabia-for-pakistanis": art(
    [
      {
        t: "p",
        text: "Jobs in Saudi Arabia for Pakistanis still come through a sponsoring employer. You apply, you get an offer you can verify, you do the medical if it is required, you pass the Protector of Emigrants in Pakistan, and only then do you fly. After arrival the job lives on Qiwa and the residence lives on the Iqama. Apna Ghar will not invent an average riyal wage. Advertised salaries are not HRSD contracts, and a WhatsApp broadcast is not a contract at all. Read the basic salary separately from housing, transport and food allowances before you compare two offers.",
      },
      {
        t: "h2",
        id: "saudi-apply",
        text: "How to apply without buying a contract",
      },
      {
        t: "p",
        text: "Prefer a company name you can search, a person who replies from that company’s domain, and a contract that states the wage in riyals. Domestic work is a different system from a company job. Do not sign a company-looking paper for a house job, and do not accept a house job that says you may “work outside on your own Iqama”. That sentence is how people become illegal while holding a plastic card that looks official. Nurses should read [[/guides/nurse-jobs-in-saudi-salary|nurse jobs]] because the licence sits with the Saudi Commission for Health Specialties, not only with the hospital’s advert. Trades should still ask whether a test or an attested certificate is required before they pay a shop to invent one.",
      },
      {
        t: "ul",
        items: [
          "Ask for the employer’s name, the city, the job title, the basic wage, the allowances, the hours and who provides housing.",
          "The visa path from Pakistan is [[/guides/saudi-work-visa-pakistan|the Saudi work visa guide]]. Check the visa number on the official enquiry before you fly. A PDF can be edited.",
          "Book Wafid only if the instruction names it, and only on the official portal. See [[/guides/gamca-medical-test|the medical guide]].",
          "Clear the Protector. If an agent is involved, their name must be on the Bureau of Emigration OEP list. See [[/guides/oep-licensed-agents|licensed agents]].",
          "Convert the wage with [[/rates/sar-to-pkr|SAR to PKR]] and the [[/tools/salary-converter|salary converter]]. Use the basic line, not the agent’s total.",
          "Keep your passport. A receipt is required if anyone holds it overnight.",
          "Use the [[/guides/gulf-cv-format|CV format]] so dates and licence numbers are easy to check. Do not decorate it.",
          "After arrival, ask HR how your contract appears on Qiwa and how the Iqama is issued. See [[/guides/saudi-iqama-guide|the Iqama guide]]. You should be able to see your own file.",
        ],
      },
      {
        t: "h2",
        id: "contract",
        text: "Basic salary, allowances, and why the advert does not count",
      },
      {
        t: "p",
        text: "An advertisement, even a polished one on a company page, is not the employment contract. In the UAE people talk about MOHRE contracts. You are not in that system when the job is in Saudi Arabia. The binding paper is the contract the Saudi employer will stand behind and register, not a banner that says “salary up to”. Read basic pay on its own. Then read housing, transport, food and any site allowance. End-of-service and everyday life depend on which line is which. A high “package” with a tiny basic is a different job from the same package written as basic. Ask who pays overtime, who pays the ticket home, and whether the probation wage is the same as the later wage. If the answers are only spoken, they are not answers.",
      },
      {
        t: "p",
        text: "Qiwa is the labour platform workers are told to use for contracts and transfers. Absher is where a resident later sees Iqama services. Neither of them is a website an agent in Pakistan should log into with your one-time password. Do not share a code. Transfers between sponsors exist under Saudi rules and they are not automatic. Read the Ministry of Human Resources guidance, or look at your own Qiwa file, before you pay anyone who promises a transfer. A “free visa”, meaning a visa you work on for someone other than the sponsor, is a common way to become illegal. Avoid it even when the salary sounds higher.",
      },
      {
        t: "h2",
        id: "refuse",
        text: "Warning signs",
      },
      {
        t: "p",
        text: "Walk away from a fee before a visa number exists, from a Gmail address pretending to be a ministry, from a contract that does not name the employer, and from any request to send your family’s documents to a stranger. Walk away from a medical booked by a token shop. If you have already paid, stop the next instalment, keep the evidence, and use [[/guides/report-visa-fraud-fia|the FIA and Bureau complaint guide]]. The job, if it is real, can be checked without another transfer. The city matters too. A Riyadh offer and a remote site offer are not the same life. Ask where you will sleep, how you will leave the site, and what a day off actually means.",
      },
    ],
    [
      {
        q: "Is a Saudi job offer on WhatsApp enough?",
        a: "No. You need an employer you can identify and a visa you can check on the official enquiry. A voice note salary is not a contract. Ask for the written basic wage and the allowances on separate lines.",
      },
      {
        q: "What salary should I expect?",
        a: "It depends on the trade and the contract in front of you. This page will not publish a fake average. Compare the written basic wage with whether housing is provided, and convert riyals before you judge the figure.",
      },
      {
        q: "Can I transfer sponsors later?",
        a: "Transfers exist under Saudi rules and they are not automatic. Use HRSD guidance or your own Qiwa file. Do not pay a camp broker for a transfer, and do not share an Absher code.",
      },
      {
        q: "Are there jobs without a medical?",
        a: "Work visas expect a medical when the instruction says so. Book Wafid only then, and only on wafid.com. A shop medical with no slip is not the test.",
      },
      {
        q: "What about a free visa?",
        a: "A visa you work on for someone other than the sponsor is a common way to become illegal. The sponsor on the Iqama should be the employer you work for. Avoid the arrangement.",
      },
      {
        q: "Where do I check the Pakistani agent?",
        a: "On the Bureau of Emigration list of Overseas Employment Promoters, at beoe.gov.pk, before you pay. A licensed name can still cheat, so keep the receipt either way.",
      },
    ],
    [S.hrsd, S.qiwa, S.beoe, S.wafid],
  ),

  "jobs-in-qatar-for-pakistanis": art(
    [
      {
        t: "p",
        text: "Jobs in Qatar for Pakistanis are employer-sponsored. You apply to a company you can name, you read a wage written in riyals, and you treat any large upfront fee as a reason to walk away. The visa side is the [[/guides/qatar-visa-for-pakistanis|Qatar visa guide]]. Apna Ghar will not invent an average salary for Doha or for a camp outside it. Two Pakistanis with the same job title can be on different basic wages, different housing, and different hours. The contract is the comparison. The advert is not.",
      },
      {
        t: "h2",
        id: "qatar-jobs",
        text: "How to apply",
      },
      {
        t: "p",
        text: "Use the company website or a recruiter who answers from that company’s domain. A free email address can belong to a real person, but it is a weak place to send your passport. Ask for the registered company name and the city. Ask whether the role is a direct hire or a supply-company placement, because the name on the visa should match the name that will pay you. If a Pakistani promoter is in the middle, check the Overseas Employment Promoter licence on beoe.gov.pk before any transfer. Then follow the Protector steps in [[/guides/protector-of-emigrants|the Protector guide]]. The promoter is not the sponsor. The sponsor is in Qatar.",
      },
      {
        t: "ul",
        items: [
          "Get the wage in riyals as basic salary, plus housing, transport and food if those are separate. Put the basic through the [[/tools/salary-converter|salary converter]].",
          "Ask who pays the ticket to Qatar and the ticket home, and what happens if the visa is refused.",
          "Keep your passport. Give it for a named official step and take a receipt if they must hold it.",
          "Match the job title on the offer with the job title on the visa. A promise to change it after you land is not a change.",
          "Use the [[/guides/gulf-cv-format|CV format]]. List real dates and real certificates only.",
          "Electricians and other trades should read [[/guides/electrician-jobs-in-gulf|electrician jobs]] so a skill test is not a surprise, and so a fake certificate is not a temptation.",
          "Check the visa on the Ministry of Interior side yourself. A PDF from the agent is not the status.",
          "From Pakistan, finish Protector registration for employment and pay only the fee on the Bureau receipt.",
        ],
      },
      {
        t: "h2",
        id: "read",
        text: "Basic pay, allowances, and the advert",
      },
      {
        t: "p",
        text: "Read the offer the way you would read a UAE MOHRE contract even though MOHRE is not the Qatari ministry: the advert is not the contract. A banner that says “salary up to” is a range used to collect CVs. Your number is the basic wage in the paper you sign, and the allowances have to be lines, not adjectives. Housing in a company camp is not the same as a housing allowance you must spend in the city. Food on site is not the same as cash. Ask the hours, the overtime rule, and whether the overtime is paid at a stated rate. “Overtime available” means someone is hoping.",
      },
      {
        t: "p",
        text: "Use [[/rates/qar-to-pkr|QAR to PKR]] when you explain the wage at home. It is a mid-market reference, not the rate an exchange will give your family. Do not compare a Qatari riyal figure with a Saudi riyal figure as if the words were the same money. They are not. Do not compare either of them with a Kuwaiti dinar without converting. The [[/tools/salary-converter|salary converter]] is the calculator. A friend who “knows the rate” is not.",
      },
      {
        t: "h2",
        id: "after",
        text: "After you accept, and when to refuse",
      },
      {
        t: "p",
        text: "Refuse a fee for a visa file, a security deposit, or a medical booked outside Wafid when Wafid is the instruction. Refuse to start work on a visit visa. Refuse to hand over original education certificates without a list. Labour rules in Qatar allow some job changes and block others. Read the Ministry of Labour guidance that applies to your sponsorship. Do not pay a broker who promises a no-objection certificate as if it were a product on a shelf. If the company will not let you read the contract in a language you understand, do not sign it on a video call because the flight is tomorrow.",
      },
      {
        t: "p",
        text: "If the offer was fake and you paid, keep the receipt, the chat, the account title and the shop photo. Complain through the Bureau if they acted as a promoter, and through the FIA if the money was taken by deception. See [[/guides/visa-agent-scam-pakistan|visa agent scams]]. Paying the balance will not make a missing Ministry of Interior file appear.",
      },
      {
        t: "p",
        text: "When the offer is real, ask how you will be paid in the first month, whether the site is in Doha or outside it, and who keeps the passport while the residence card is made. A camp with meals is not the same job as a city wage with no housing, even if the basic line looks similar. Keep a copy of the contract in your own bag. Open the Ministry of Interior status yourself before you give notice in Pakistan. The [[/tools/salary-converter|salary converter]] is for the basic wage. It is not a reason to skip the sponsor’s name.",
      },
    ],
    [
      {
        q: "Is Qatar still hiring Pakistanis?",
        a: "Companies hire for roles they need. There is no single national quota you can read on this page. Apply to employers you can name, and ignore broadcasts that say a quota closes tonight.",
      },
      {
        q: "What salary should I expect in Qatar?",
        a: "It depends on the trade and on the written basic wage. This site will not invent an average. Compare that basic with whether housing and food are provided, and convert riyals before you decide.",
      },
      {
        q: "Can I change jobs after I arrive?",
        a: "Labour rules allow some changes and block others. Read the Ministry of Labour guidance for your case. Do not pay a broker who promises a no-objection certificate.",
      },
      {
        q: "Do I need Arabic?",
        a: "Only if the job says so. Do not buy a language certificate the employer did not request.",
      },
      {
        q: "Who licenses agents in Pakistan?",
        a: "The Bureau of Emigration and Overseas Employment. Search the licensed promoter list on beoe.gov.pk before you pay. A travel agent is not an OEP unless that list says so.",
      },
      {
        q: "Is a recruitment advert a contract?",
        a: "No. The advert is an invitation. The contract is the paper that states basic salary and allowances separately, from an employer you can identify. Do not resign on the advert.",
      },
    ],
    [S.moiqa, S.beoe],
  ),

  "jobs-in-kuwait-for-pakistanis": art(
    [
      {
        t: "p",
        text: "Jobs in Kuwait for Pakistanis depend on a sponsor who will actually put you on their file. The dinar salaries look small until you convert them. Convert first, then decide. The visa notes are in [[/guides/kuwait-visa-for-pakistanis|Kuwait visa for Pakistanis]]. Apna Ghar will not publish an average Kuwaiti wage. A Facebook post is not a Ministry of Interior record, and it is not a labour contract. Read basic salary on its own line, then housing, food and transport. The spoken “package” is how people board a flight and discover the bank transfer is half of what the agent said.",
      },
      {
        t: "h2",
        id: "kuwait-jobs",
        text: "How to apply and what to refuse",
      },
      {
        t: "p",
        text: "Get the employer’s name and a written contract, not a voice note. Company jobs and domestic jobs are different sponsorships. If you are going to a house, the contract should say so, and the sponsor should be the household you expect. If you are going to a company, the company name on the visa should be the company that pays you. A personal “visa for sale”, where you pay someone to be a sponsor so you can find work later, is how people get stranded. Refuse it. Refuse a cash demand before a visa number exists. See [[/guides/visa-agent-scam-pakistan|visa agent scams]].",
      },
      {
        t: "ul",
        items: [
          "Ask for the registered name, the city, the job title, the hours and the wage in dinars, split into basic and allowances.",
          "Put the basic wage into the [[/tools/salary-converter|salary converter]] and glance at [[/rates/kwd-to-pkr|KWD to PKR]] so the rupee picture is honest.",
          "Electricians and other trades should read [[/guides/electrician-jobs-in-gulf|electrician jobs]] for certificates and tests. Do not buy a Gulf certificate from a shop.",
          "Check any Pakistani promoter on beoe.gov.pk before you pay them. Then complete the Protector step if you are leaving to work.",
          "Check the visa number on a Ministry of Interior service yourself. Match the passport and the sponsor.",
          "Keep original certificates in your bag. Give copies.",
          "Use the [[/guides/gulf-cv-format|CV headings]]. A designed CV does not make a sponsor real.",
          "Do not fly on a visit visa to start the job. The residence is the permission.",
        ],
      },
      {
        t: "h2",
        id: "read-wage",
        text: "Reading basic pay against the advert",
      },
      {
        t: "p",
        text: "Kuwait is not the UAE, so the labour contract is not a MOHRE contract. The lesson from MOHRE still applies: an advertisement is not the contract. A poster that says “KD 120, food included” has not told you what is basic, what is food, and what happens if the food stops. Write those lines down and ask the employer to confirm them in the paper you will sign. Ask who pays fines if you drive, who pays the residence medical, and whether overtime has a rate. Domestic workers should not use a friend’s company contract as a guide. The hours, the room and the day off need to be in their own paper.",
      },
      {
        t: "p",
        text: "One dinar is a large amount in rupees. A wage that looks like pocket money next to an Indian-rupee number can be a solid salary, and a wage that a relative calls “standard” can be poor once you are paying for a bed the company does not provide. Convert, then price the bed. This page will not say what a driver or a mason “usually” earns. Usual is not an official series. Your offer is the only series you can check.",
      },
      {
        t: "h2",
        id: "papers",
        text: "Papers and the Pakistan exit",
      },
      {
        t: "p",
        text: "Carry the passport, the certificates you can defend, and the CV. Attest what the employer asks, through a channel you can receipt, not a random list from a market. If the medical instruction names Wafid, book it yourself on the official portal. Clear the Protector of Emigrants and pay the fee on the Bureau receipt. Do not add cash. If the agent’s licence is not on the Bureau site, do not pay them to “handle Kuwait” anyway. The Ministry in Kuwait will not fix a Pakistani recruitment fraud after you land. If you have been cheated, keep the evidence and use [[/guides/report-visa-fraud-fia|FIA and the Bureau]].",
      },
      {
        t: "p",
        text: "Before you resign, ask where you will live and whether that room is in the contract or only in the interview. A company that houses you on a site outside the city is a different job from a shop job in Kuwait City with no housing at all. Ask the day off, the length of the shift, and whether the passport stays with you after the residence is stamped. If you drive, ask who pays the fines. If you are going to a house, ask who else lives there and what a day off means in practice. Write those answers next to the basic wage and the allowances. Then decide. The [[/guides/kuwait-visa-for-pakistanis|Kuwait visa guide]] is the status check. This page is the job check. You need both, and you still need the Protector stamp if the journey starts in Pakistan. A real sponsor can wait while you read. A file that cannot wait is usually a fee.",
      },
    ],
    [
      {
        q: "Why is the Kuwait salary such a small number?",
        a: "The dinar is a strong currency. One dinar is a large amount in rupees. Always convert the written basic wage before you compare it with a dirham or riyal offer.",
      },
      {
        q: "Are domestic jobs the same as company jobs?",
        a: "No. The contract and the sponsor type differ. Read the contract you were given. Do not assume a company visa lets you work in a house, or the other way round.",
      },
      {
        q: "Can I pay for a Kuwait visa myself?",
        a: "A personal visa for sale is how people get stranded. The sponsor should be the employer. Do not buy a sponsorship so you can look for work after you arrive.",
      },
      {
        q: "What documents should I carry?",
        a: "Passport, the certificates you can defend, and a plain CV. Attest what the employer asks, not a random list. Keep originals with you.",
      },
      {
        q: "Where do I check a Pakistani promoter?",
        a: "On beoe.gov.pk, in the Bureau’s list of licensed Overseas Employment Promoters, before you pay. Then keep the receipt even if the name is real.",
      },
      {
        q: "Is the salary in the advert the salary I will get?",
        a: "No. The advert is not the contract. Read basic pay and each allowance in the paper the sponsor will sign. A spoken package is not a line on that paper.",
      },
    ],
    [S.moikw, S.beoe, S.fia],
  ),

  "jobs-in-oman-for-pakistanis": art(
    [
      {
        t: "p",
        text: "Jobs in Oman for Pakistanis should be offered by a named employer and backed by a visa you can see on the Royal Oman Police side. The Ministry of Labour is the labour authority. An agent in Pakistan is optional, and if you use one they need a Bureau of Emigration licence. Apna Ghar will not invent an average Omani salary. Compare the written basic wage, the allowances, and the housing. An advert that says “good salary” is not a contract, any more than a Dubai classified is a MOHRE contract. The paper you sign is the offer. The poster is an invitation to ask.",
      },
      {
        t: "h2",
        id: "oman-jobs",
        text: "How to apply",
      },
      {
        t: "ol",
        items: [
          "Ask for the job title, the city, the wage in rials, the hours and the housing in writing, with basic salary separated from allowances.",
          "Check the visa route in [[/guides/oman-visa-for-pakistanis|Oman visa for Pakistanis]]. Do not buy a ticket until the Police screen shows your name.",
          "Put the basic wage in the [[/tools/salary-converter|salary converter]] with a realistic rent if housing is not provided. Use [[/rates/omr-to-pkr|OMR to PKR]] as a reference only.",
          "Complete the Protector step for employment, and check any promoter on beoe.gov.pk first. See [[/guides/oep-licensed-agents|the OEP guide]].",
          "Use the [[/guides/gulf-cv-format|Gulf CV format]] so the certificate dates are easy to read. Do not invent dates.",
          "Attest only the certificates the employer or the ministry asked for. Keep the originals.",
          "If a medical is required through Wafid, book the slip yourself. The centre is the one on the slip.",
          "Refuse a fee before a file number exists. A real employer does not need your cash deposit.",
        ],
      },
      {
        t: "h2",
        id: "contract",
        text: "How to read the wage",
      },
      {
        t: "p",
        text: "Write four lines before you accept: basic salary, allowances, housing, and overtime. A total package hides which part is basic. That split matters when you ask what will actually be paid into the account every month, and it matters if an allowance is only paid when you are on a particular site. Ask who pays the visa and the ticket. Ask whether a trade test is required and where it is held. The test should be at the employer or an authorised centre. A shop selling “Oman certificates” is not the ministry.",
      },
      {
        t: "p",
        text: "Is Oman a better salary than the UAE? Only your two written offers can answer that, after rent. Currency names are not a comparison. Run both basics through the salary converter and write the rent next to each. A staff room in one country against a paid flat in the other can reverse the result. This guide will not declare a winner, and it will not print a typical mason’s or driver’s wage. Those figures in forums are not official statistics.",
      },
      {
        t: "h2",
        id: "warnings",
        text: "Warning signs and the Pakistan side",
      },
      {
        t: "p",
        text: "A fee first, a free email address, and no company phone number are enough to stop. So is a visit visa sold as a work visa, and a sponsor name that does not match the company that interviewed you. Working on the wrong status is a bad start even if the supervisor is friendly. Check the purpose on the Royal Oman Police side. If you are leaving Pakistan for employment, the Protector registration still applies, whether or not an agent is involved. Direct hire is not an exemption you invent. Read the Bureau’s instructions.",
      },
      {
        t: "p",
        text: "If you have paid and the file is fiction, keep the receipt, the chat and the shop address. Complain to the Bureau of Emigration when a promoter is involved, and to the FIA when the conduct is deception. The steps are in [[/guides/report-visa-fraud-fia|how to report visa fraud]]. Do not send the “last” instalment to unlock a visa that was never filed. The Police site will show a real file for free.",
      },
      {
        t: "p",
        text: "After you accept a real offer, ask who meets you, which airport, and how the first month’s wage will be paid if the bank account is not open yet. Ask whether overtime is a written rate or a hope, and whether the site is in Muscat or hours away from it. A camp job with housing is not a city job without housing, even when the basic wage looks similar on paper. Keep copies of the contract in your own bag. Your passport should return to you once the residence step that needed it is finished. If the employer will not say when, do not treat that silence as normal. The [[/guides/oman-visa-for-pakistanis|visa guide]] tells you how to see the permission. The salary converter tells you whether the basic wage can carry the rent. Neither one is a substitute for the employer’s name matching the sponsor.",
      },
    ],
    [
      {
        q: "Is Oman a good salary compared with the UAE?",
        a: "Compare your two written offers after rent, not the currency names. Put each basic wage through the salary converter. This page will not invent an average for either country.",
      },
      {
        q: "Do I need a licence for my trade?",
        a: "If the employer or the ministry asks for a test or an attested certificate, that request should come from them, not from a shop selling certificates. Ask which test, and where it is held.",
      },
      {
        q: "Can I go and search on a visit visa?",
        a: "Only if that visa allows the trip you are making. Working on the wrong status is a bad start. Check Royal Oman Police before you fly, and do not resign on a visit file.",
      },
      {
        q: "What is a warning sign?",
        a: "A fee first, a free email address, no company phone number, and a sponsor name that does not match the employer. Any one of those is a reason to stop paying.",
      },
      {
        q: "Which rate page do I use?",
        a: "OMR to PKR, as a mid-market reference. Your bank or exchange will not match it exactly. The salary converter is where you test the basic wage against rent.",
      },
      {
        q: "Is the advert the contract?",
        a: "No. Read basic salary and allowances on the employer’s paper. A poster is not a labour contract, in Oman or anywhere else in the Gulf.",
      },
    ],
    [S.rop, S.beoe],
  ),

  "driver-jobs-in-dubai-salary": art(
    [
      {
        t: "p",
        text: "Driver jobs in Dubai do not have one salary, and Apna Ghar will not invent an average. A light-vehicle driver, a school-bus driver, a delivery rider and a heavy-truck driver are different jobs, with different licences and different basic wages. The number that matters is the basic salary on the MOHRE contract, not the figure in a classified ad. Advertisements are not MOHRE contracts. A poster that names a round dirham figure and then says “plus” has not told you what is basic, what is an allowance, and what is a commission that may never arrive. Read the contract. Then decide.",
      },
      {
        t: "h2",
        id: "salary",
        text: "How to read a driver salary",
      },
      {
        t: "p",
        text: "Split every offer into lines before you compare it with another offer. Basic wage is the line that should appear as basic on the employment contract. Housing, food, transport and mobile allowances are separate, even when the agent adds them up and calls the total your salary. Target pay, trip commission, overtime and “monthly incentive” are not basic. They can be real money in a good month and nothing in a bad one. Budget on the basic salary. If you cannot pay for the bed and the food on that basic figure, the commission is not a plan. Gratuity conversations also use basic wage. See [[/guides/uae-gratuity-rules|UAE gratuity]] and try the numbers in the [[/tools/gratuity-calculator|gratuity calculator]] so you can see how a low basic changes the end-of-service figure.",
      },
      {
        t: "ul",
        items: [
          "Write basic, housing, food, and any commission on four separate lines. If the employer will not split them, you do not yet have an offer you can judge.",
          "Ask who pays traffic fines, fuel, Salik or parking, and damage. A wage that looks fair can disappear into fines the contract makes you pay.",
          "Ask who pays the visa, the Emirates ID and the medical. A deduction from the first months of salary is a cost. Get it in writing.",
          "A UAE driving licence is not the same as a Pakistani one. Ask which test the employer will sponsor, how many attempts, and who pays if you fail.",
          "Do not pay a broker for a licence, a file, or a “learning permit”. The licensing authority and the employer are the doors. A flat above a cafeteria is not.",
          "Put the basic wage into the [[/tools/salary-converter|salary converter]] with the rent you will really pay. Company housing changes the picture. A bed in a shared room is not the same as “housing provided” in a family flat.",
          "The hiring path from Pakistan is the [[/guides/jobs-in-dubai-for-pakistanis|Dubai jobs guide]] and [[/guides/genuine-dubai-job-from-pakistan|genuine jobs from Pakistan]]. The Protector step still applies if you are leaving to work.",
          "Check the company name against the name on the visa. If you will drive for a delivery brand but the sponsor is a different supply company, know which of them pays you and which of them can cancel you.",
        ],
      },
      {
        t: "h2",
        id: "licence",
        text: "Licences, hours and the vehicle",
      },
      {
        t: "p",
        text: "Bring the licence you actually hold, Pakistani or otherwise, and say what it covers. A car licence is not a bus licence, and a light vehicle is not a trailer. The employer should explain the UAE test in plain words: eyesight, theory, yard, road, and how long you may drive on a learning permit with their supervisor. Do not start carrying passengers or taking paid trips because a supervisor said the licence is “in process”. In process is not a licence. Ride-hailing and delivery apps have their own permit rules on top of the driving licence. A visit visa is not one of those permits. You need the legal residence and the licence the activity requires.",
      },
      {
        t: "p",
        text: "Hours are the other half of the wage. A basic salary for ten hours is not the same job as the same basic for fourteen hours with a promise of overtime that never appears on the payslip. Ask the roster, the day off, and what happens on Friday. Ask whether you take the vehicle home. Ask whether you are expected to wash it, load it, or collect cash. Cash collection is a risk. If the contract is silent, the argument later will be your memory against theirs. School-bus work adds a child’s safety to the licence question. Do not treat it as a lighter version of a delivery bike.",
      },
      {
        t: "h2",
        id: "ads",
        text: "Why the advert is not the contract",
      },
      {
        t: "p",
        text: "MOHRE is the Ministry of Human Resources and Emiratisation. The employment contract it is concerned with is the document that should state your basic wage and your job. A Dubizzle post, a WhatsApp status, a yard banner and a voice note are adverts. They can be useful as a way to find the yard. They are not the contract, even when they name a dirham figure, and even when they use the company’s logo. Ask for the contract before you resign in Pakistan and before you refuse another offer. If the basic wage on that contract is lower than the advert, believe the contract. Send one written question: which figure will be on the MOHRE contract? If the answer is anger, you have your answer.",
      },
      {
        t: "p",
        text: "Company housing, if it is offered, needs its own questions. How many people in the room? Is food included or deducted? Can you leave on your day off? What happens to the housing if you change jobs? An allowance instead of a room means you must find the room. Price it before you accept. Use [[/rates/aed-to-pkr|AED to PKR]] only to explain the wage at home. Do not let a relative’s rupee conversion, done at the wrong rate, talk you into a job the dirham figure cannot support. And do not pay an agent in Pakistan a “driver visa” fee. The employer sponsors the visa. Your check is the official status, not the agent’s PDF.",
      },
    ],
    [
      {
        q: "What is the average Dubai driver salary in dirhams?",
        a: "Advertised figures move and they are not official statistics. Apna Ghar will not invent an average. Compare the basic wage on your MOHRE contract with your rent, your hours and any commission you are not counting on.",
      },
      {
        q: "Is commission guaranteed?",
        a: "No. Budget on the basic salary. Treat target pay and trip incentives as extra only after you have seen them on a payslip, not on a poster.",
      },
      {
        q: "Do I need a Pakistani heavy licence first?",
        a: "Bring the licence you actually hold and tell the truth about what it covers. The UAE test is a separate step the employer should explain. Do not pay a broker to sit it for you.",
      },
      {
        q: "Can I drive for a ride-hailing app on a visit visa?",
        a: "No. You need the legal residence and the licence the activity requires. A visit visa is not permission to work, and a friend’s account is not your permit.",
      },
      {
        q: "Who checks the company?",
        a: "You match the trade name with the sponsor on the visa and with the employer on the contract. MOHRE is the labour door if the written contract is not being honoured. If the names do not match, do not join.",
      },
      {
        q: "Does housing count as salary?",
        a: "It counts as housing. It is not the same line as basic wage. A staff room can make a lower basic livable, and a missing room can make a higher basic impossible. Price the actual bed.",
      },
    ],
    [S.mohre, S.uae],
  ),

  "nurse-jobs-in-saudi-salary": art(
    [
      {
        t: "p",
        text: "Nurse jobs in Saudi Arabia are hired against a classification from the Saudi Commission for Health Specialties, not only against a hospital advert. Dataflow-style verification, an exam and a licence step are common, and the current route is the one on scfhs.org.sa, not the one a recruiter describes from memory. The wage on the contract is the wage. The wage in the advert is an invitation to ask. Apna Ghar will not publish an average nurse salary in riyals. Hospitals differ, cities differ, and a basic salary plus housing is not the same offer as a higher package that is mostly an allowance.",
      },
      {
        t: "h2",
        id: "licence",
        text: "Licence, hiring and pay",
      },
      {
        t: "p",
        text: "Read the classification route on the Commission’s own site before you pay anyone for a “Prometric date” or a file number you cannot see in that system. Your Pakistani nursing council certificate is the start of your history. It is not, by itself, permission to practise in Saudi Arabia. Ask the hospital which classification they need for the ward they are hiring, whether they sponsor the exam and the verification, and whether you must pass before the visa or after you land. Get that sequence in writing. A demand to pay an unknown person for a seat is a stop, not a step.",
      },
      {
        t: "ul",
        items: [
          "Open the Commission’s site and follow the path it shows for your qualification. Do not pay an agent for a screenshot of a page you can open.",
          "Ask the hospital whether they sponsor the licence steps, the ticket, and the visa. “We will see” is not sponsorship.",
          "Split the offer into basic salary, housing, transport and any shift allowance. Put the basic into the [[/tools/salary-converter|salary converter]].",
          "Housing for nurses is sometimes a hospital residence. If it is not, price a room before you accept. A housing allowance is only useful if a room exists at that price.",
          "The visa path is [[/guides/saudi-work-visa-pakistan|Saudi work visa from Pakistan]], including Wafid when the instruction requires it. See [[/guides/gamca-medical-test|the medical guide]].",
          "Clear the Protector of Emigrants if you leave Pakistan for employment. A hospital offer does not cancel the Bureau step.",
          "After arrival, the employer starts the residence. The Iqama is not the nursing licence. See [[/guides/saudi-iqama-guide|the Iqama guide]] so you do not confuse the two cards.",
          "Keep copies of every certificate you upload. A verification company will ask for documents you may not remember sending.",
        ],
      },
      {
        t: "h2",
        id: "contract",
        text: "Basic salary, allowances, and the advert",
      },
      {
        t: "p",
        text: "An advertisement is not a contract. In the UAE, people say an advert is not a MOHRE contract. You should use the same suspicion here even though the ministry is not MOHRE. The Saudi hospital’s written contract, and the contract that later shows on the labour platform, is the wage. The Facebook post that says “SR high salary, female nurses urgent” is a net for CVs. Read basic pay on one line. Read housing on another. A hospital room with meals is a large part of the offer and it is still not basic pay. A transport allowance is not housing. Shift differential, if it exists, should say which shifts and which rate. If the only number you have is a total, you do not yet know the job.",
      },
      {
        t: "p",
        text: "Ask the hours, the patient load they are willing to describe, the probation length, and whether the probation wage matches the later wage. Ask who pays the exam fee if you fail once. Ask whether overtime is available or required. Required overtime that is not paid is just a longer day. Use [[/rates/sar-to-pkr|SAR to PKR]] when you explain the offer at home, and remember a mid-market rate is not cash in a relative’s hand. Compare this offer with any other written offer you hold. Do not compare it with a cousin’s memory of 2018.",
      },
      {
        t: "h2",
        id: "refuse",
        text: "What to refuse",
      },
      {
        t: "p",
        text: "Refuse to work on a ward because a recruiter said the licence is “fine pending”. Work only if the hospital and the Commission say that status is allowed. Refuse to hand over original diplomas without a written receipt. Refuse a fee into a personal account for Dataflow, for the exam, or for the visa. Official fees, when you are the person paying them, appear on official payment screens. This guide will not invent those figures. Refuse a contract you cannot read. Ask for a translation you trust, and ask which language version governs. If the hospital will not say, do not resign.",
      },
      {
        t: "p",
        text: "The wider hiring picture is in [[/guides/jobs-in-saudi-arabia-for-pakistanis|jobs in Saudi Arabia for Pakistanis]]. If the recruiter in Pakistan is an Overseas Employment Promoter, their licence should be on beoe.gov.pk. A genuine hospital can still be reached without a dalal. If you have been cheated, keep the transfer receipts and read [[/guides/report-visa-fraud-fia|how to report fraud]]. Another payment will not create a classification the Commission does not show.",
      },
    ],
    [
      {
        q: "What is a nurse’s salary in Saudi Arabia?",
        a: "Hospitals differ. Use the basic figure in the written offer and the allowances on their own lines. Apna Ghar will not publish a fake average, and an advert’s “up to” number is not a salary.",
      },
      {
        q: "Is the Pakistani nursing council certificate enough?",
        a: "It is the start. Saudi practice needs the Commission’s classification. Check scfhs.org.sa for your case before you pay an agent to explain the site to you.",
      },
      {
        q: "Who pays the exam fee?",
        a: "Agree that in writing with the hospital. A demand to pay an unknown person is a stop. If you pay an official fee yourself, the figure is the one on the official screen, which this page will not invent.",
      },
      {
        q: "Can I work while the licence is pending?",
        a: "Only if the hospital and the Commission say that status is allowed. Do not start because a recruiter said it is fine. Pending is not a licence.",
      },
      {
        q: "Where is the Iqama in this process?",
        a: "After you arrive, the employer starts the residence. The Iqama and the nursing classification are different documents. You may need both. Neither one is created by a WhatsApp PDF.",
      },
      {
        q: "Is the hospital advert a MOHRE contract?",
        a: "No. MOHRE is the UAE labour ministry, and an advert is not a contract there or in Saudi Arabia. Your wage is the basic salary and the stated allowances in the hospital’s contract, not the banner.",
      },
    ],
    [S.scfhs, S.hrsd, S.wafid, S.beoe],
  ),

  "electrician-jobs-in-gulf": art(
    [
      {
        t: "p",
        text: "Electrician jobs in the Gulf are trade jobs. Employers ask for certificates you can defend, sometimes a skill test, and a contract with a basic wage written separately from allowances. You should not start work on a visit visa, and you should not buy a “Gulf certificate” from a shop that is not the institute that taught you. Apna Ghar will not invent an average electrician salary for Dubai, Riyadh, Doha or Kuwait. The only wage you can check is the one on the contract for the country you are actually offered. An advert is not that contract. In the UAE it is not a MOHRE contract. In other Gulf states it is not the labour contract either.",
      },
      {
        t: "h2",
        id: "papers",
        text: "Papers, tests and the contract",
      },
      {
        t: "p",
        text: "Carry the original trade certificate and the experience letters you can stand behind in an interview. If a date is wrong, fix the CV. Do not stretch a helper’s year into a foreman’s year. Ask whether that country wants the certificate attested, and attest through the channel the employer or the embassy checklist names. A stall that sells stamps without a receipt is how files fail later. A skill test, if there is one, should be at the employer or an authorised centre. Pay the centre’s official fee if there is one, on their receipt. Do not pay a middleman who says he can sit the practical for you.",
      },
      {
        t: "ul",
        items: [
          "Read basic salary, housing, food, site allowance and overtime as separate lines. Budget on the basic wage.",
          "Ask the hours, the day off, and whether overtime has a rate or is a favour. Electricity plus fatigue is how people get hurt.",
          "Ask who supplies tools and personal protective equipment, and who replaces them when they fail. “Bring your own” should be written down.",
          "Ask who pays the visa, the ticket and the medical. A deduction spread over six months is still your money.",
          "Country hiring notes differ. Start with [[/guides/jobs-in-dubai-for-pakistanis|Dubai]], [[/guides/jobs-in-qatar-for-pakistanis|Qatar]] or [[/guides/jobs-in-kuwait-for-pakistanis|Kuwait]], and the Saudi notes if that is the offer.",
          "Use the [[/guides/gulf-cv-format|CV format]]. Put the licence or certificate number and the institute, not a paragraph about passion.",
          "If you leave Pakistan for employment, clear the Protector. See [[/guides/protector-of-emigrants|the Protector guide]]. Check any agent on beoe.gov.pk first.",
          "Put the basic wage in the [[/tools/salary-converter|salary converter]]. Convert the currency you were actually offered, not a neighbouring one.",
        ],
      },
      {
        t: "h2",
        id: "mohre",
        text: "Ads are not MOHRE contracts",
      },
      {
        t: "p",
        text: "A yard banner, a Facebook post and a voice note can all say “electrician, family visa, high salary”. None of those sentences is a contract. Where the job is in the UAE, the document that matters is the employment contract MOHRE’s rules are about: basic wage, job title, employer name. Ask to see that paper, or the offer that will become that paper, before you resign. If the basic wage is lower than the advert, the advert was bait. Where the job is in Saudi Arabia, Qatar, Kuwait, Oman or Bahrain, the same test applies with that country’s labour contract. The sponsor’s name should match the company that will pay you. A supply company on the visa and a different brand on the helmet is something you should understand before you fly, not after the first argument about wages.",
      },
      {
        t: "p",
        text: "Helper, electrician and foreman are different grades. A contract that says helper while the agent said electrician is a different salary and a different life. Do not accept “we will change the designation after probation” unless the change is written with the new wage. Probation is when it is easiest to remove you, not when it is easiest for you to renegotiate. Read overtime and rest breaks. A site that treats breaks as optional is a site that will treat lock-out and isolation as optional too. You are allowed to stop a job that is unsafe. Tell the supervisor in words they cannot later deny, and if the written contract is being ignored, the labour door is MOHRE in the UAE and the Ministry of Human Resources in Saudi Arabia. Do not trade a lock-out for a Friday’s overtime.",
      },
      {
        t: "h2",
        id: "refuse",
        text: "Fees, NOCs and fake papers",
      },
      {
        t: "p",
        text: "Do not pay for a promised no-objection certificate. Transfers and NOCs, where the host country allows them, are official steps, not products. Do not pay for a visa file before a number exists on that country’s enquiry. Do not buy experience letters. A forged certificate fails at attestation or at the test, and it can finish the visa. If a Pakistani promoter is recruiting you, the licence check is [[/guides/oep-licensed-agents|the OEP guide]]. If they have already taken money for a job that does not exist, keep the evidence and use [[/guides/report-visa-fraud-fia|the complaint guide]]. The next instalment is not a strategy.",
      },
    ],
    [
      {
        q: "What salary does an electrician get in the Gulf?",
        a: "It varies by country and by whether you hold a recognised certificate or only a helper’s letter. Apna Ghar will not invent an average. Compare the written basic wage in the salary converter, and keep allowances on their own lines.",
      },
      {
        q: "Is a Pakistani licence valid?",
        a: "It supports your experience. The host country may still test you or ask for attestation. Ask the employer which test, and do not buy a certificate the employer did not name.",
      },
      {
        q: "Should I pay for a promised NOC?",
        a: "No. Transfers and no-objection letters are official steps, not products sold in a camp. Pay the authority’s fee only if you are the person the official screen is charging.",
      },
      {
        q: "Do I need the Protector stamp?",
        a: "Yes if you leave Pakistan for employment, including a direct hire with no agent. Read the Bureau of Emigration instructions and pay the fee on the BEOE receipt.",
      },
      {
        q: "What if the site is unsafe?",
        a: "Stop and tell the supervisor. In the UAE, MOHRE is the labour door if the contract is being ignored. In Saudi Arabia, use the Ministry of Human Resources. Do not trade safety for overtime.",
      },
      {
        q: "Is the salary on the banner a MOHRE contract?",
        a: "No. An advert is not a MOHRE contract in the UAE, and it is not the labour contract in any other Gulf state. The basic wage on the signed contract is the wage. Designation matters as much as the number.",
      },
    ],
    [S.mohre, S.hrsd, S.beoe],
  ),

  "gulf-cv-format": art(
    [
      {
        t: "p",
        text: "A CV for Gulf jobs should be one or two pages, easy to skim, and boring in a good way. Employers look for your trade, your dates, your passport nationality and whether you are already in the country. They do not need a paragraph about your passion, a coloured sidebar, or a QR code that opens your Instagram. Apna Ghar’s format below is a heading template you can copy into a document tonight. It is not a design. It will not get you a visa. It will stop a busy recruiter guessing which Muhammad you are and which licence you hold.",
      },
      {
        t: "h2",
        id: "template",
        text: "Copy these headings, in this order",
      },
      {
        t: "p",
        text: "Use the headings as the skeleton. Under each one, write facts you can prove with a certificate, a passport or an experience letter. If a heading does not apply, write “None” rather than deleting the line and leaving the reader unsure. Do not invent dates. A fake certificate is how a real offer dies at attestation or at the medical. When the CV is true, apply through the [[/guides/jobs-in-dubai-for-pakistanis|Dubai jobs]] notes or the [[/guides/jobs-in-saudi-arabia-for-pakistanis|Saudi jobs]] notes, and check any Pakistani promoter with [[/guides/oep-licensed-agents|the OEP guide]].",
      },
      {
        t: "ul",
        items: [
          "Heading: Full name, exactly as in the passport, with the father’s name if the passport shows it.",
          "Heading: Mobile number with country code, and one email address you actually open.",
          "Heading: Current city and country. Do not write a full street address on the CV.",
          "Heading: Nationality, and date of birth as DD Month YYYY.",
          "Heading: Passport number and expiry date. Renew the passport before you apply if it is close to expiry. Do not hide a short expiry.",
          "Heading: Visa status. Either “In Pakistan, ready to travel” or the Gulf country, visa type and expiry if you already hold one. Do not write “visit visa, can start work”.",
          "Heading: Target job title, one line. Example: Electrician, industrial maintenance, 8 years. Not a list of six trades.",
          "Heading: Professional summary, two lines only. Trade, years, and the kind of site. No adjectives.",
          "Heading: Work experience, newest job first. For each job: company name, country, city, month and year started, month and year ended, job title, and three duties you really did.",
          "Heading: Certificates and licences. Institute, country, year, and the certificate or licence number if it has one.",
          "Heading: Languages, with honest levels. “Basic Arabic” is allowed. “Fluent” is not, if you are not.",
          "Heading: Driving licence, only if you hold one, with the class and the country. If you do not, write “None”.",
        ],
      },
      {
        t: "h2",
        id: "example",
        text: "What a filled heading looks like",
      },
      {
        t: "p",
        text: "A work block is not a story. “ABC Contracting, Doha, Qatar. March 2019 to January 2024. Electrician. Maintained panel boards on a residential site. Worked under a site engineer. Did not supervise a crew.” That is enough. The false version adds “team leader” because it sounds better. The test later asks who signed the experience letter. If the letter says electrician, the CV says electrician. Match them. A gap between jobs can be written as “In Pakistan, between contracts, June 2024 to August 2025.” A gap you hide looks like a date you changed.",
      },
      {
        t: "p",
        text: "A photo is commonly expected in private-sector Gulf hiring. Use a plain, recent photograph, alone, with a light background. It is a habit of that market, not a law this site is declaring, and it is not a reason to pay a studio connected to a recruitment shop. Do not put the photo on the passport page you then photocopy into the same file in a way that hides the expiry. The photo belongs in the corner of the CV. The passport copy, when a form asks for it, is a separate scan. Expected salary stays off the CV unless the form has a box. If you write a number, you may be bargaining against yourself before you know whether housing is included. Wait until you can see basic wage and allowances as separate lines, then use the [[/tools/salary-converter|salary converter]].",
      },
      {
        t: "h2",
        id: "send",
        text: "How to send it, and what not to add",
      },
      {
        t: "p",
        text: "Save one PDF with your name in the file name. Send it from your own email. Do not let an agent merge it with five other people’s papers into one WhatsApp album. Do not include your family’s CNIC numbers, your bank account, or a scan of every certificate on the first email. Certificates go when a real employer asks. Keep the originals at home until an official step needs them, and then take a receipt. One page is enough early in a trade. Two pages is enough when the jobs are real. Four pages means you have pasted duties three times.",
      },
      {
        t: "p",
        text: "Change the target job title when you apply for a different role. Do not keep “driver / electrician / storekeeper” on one line because you need the money. Recruiters read that as no trade. You can keep the same experience section if the facts are true. You should not create a second CV with different dates for a second country. People compare. The Bureau of Emigration file, if you later go through a promoter, should match this CV. A mismatch is a gift to the person who wants to say you lied. Read [[/guides/fake-job-offer-dubai|fake Dubai offers]] before you email the PDF to a stranger who asked for a fee in the same message.",
      },
    ],
    [
      {
        q: "How long should a Gulf CV be?",
        a: "One page if you are early in the trade. Two pages if you have the jobs to fill them. Not four. Duties are three lines per job, not a life story.",
      },
      {
        q: "Should I include expected salary?",
        a: "Only if the form asks. Otherwise wait until you know the basic wage and the allowances. A number on the CV can undercut you before housing is even discussed.",
      },
      {
        q: "Do I need a photo?",
        a: "Many private employers in the Gulf expect one. Keep it simple, recent and alone. Do not pay a recruitment shop’s photographer as part of a placement fee.",
      },
      {
        q: "Should I list my full home address?",
        a: "City and country are enough on the CV. Give the full address when a form asks for it. A CV that circulates does not need your gate number.",
      },
      {
        q: "Can I use the same CV for every country?",
        a: "Yes, if the facts are true. Change the target job title and any licence line the country actually asked for. Do not keep two versions with different dates.",
      },
      {
        q: "What headings should I copy?",
        a: "Full name, phone and email, city, nationality and date of birth, passport number and expiry, visa status, target job title, a two-line summary, work experience, certificates, languages, and driving licence. That is the template.",
      },
    ],
    [S.beoe, S.mohre],
  ),

  "oep-licensed-agents": art(
    [
      {
        t: "p",
        text: "An Overseas Employment Promoter is allowed to recruit Pakistanis for jobs abroad only if the Bureau of Emigration and Overseas Employment has licensed them. You check that licence on [beoe.gov.pk](https://beoe.gov.pk). A shop sign that says “OEP”, a Facebook page with a flag, and a laminated certificate on the wall are not the licence. Apna Ghar will not tell you a reasonable fee in rupees, because the Bureau’s notified charges are the ones on its site and on its receipt, and a promoter’s own service charge is something you must see written in their name before you pay. Search the official list first. Pay second, if you pay at all.",
      },
      {
        t: "h2",
        id: "check",
        text: "How to search the Bureau’s list",
      },
      {
        t: "p",
        text: "Do this on your own phone, not on the agent’s laptop. Open beoe.gov.pk. Use the site’s search or the published list of licensed Overseas Employment Promoters. The menu wording moves when the site is redesigned, so do not trust a blog that says “click the third button”. If you cannot see the list immediately, use the Bureau’s own search for “Overseas Employment Promoter” and ignore third-party directories that sell “verification”. Type the licence number the agent gave you. Then type the exact business name. Both should land on the same record. Match the city. Match the validity. An expired number is not a small detail and it is not “under renewal” because the agent says so. Renewal, if it is real, is visible on the Bureau’s record, not in a voice note.",
      },
      {
        t: "ol",
        items: [
          "Ask for the promoter’s licence number, the exact business name, and the city of the office. Write them down. Do not accept “we are on the website” without the number.",
          "Open beoe.gov.pk yourself. Search the licensed-promoter list by that number and again by the business name.",
          "Read the status and the validity dates. If the record is missing, suspended, or expired, stop.",
          "Match the city and the office address with the shop you are standing in. A licence for a different city is not this shop’s licence.",
          "Photograph the Bureau page, including the date on your phone. A later argument needs that picture.",
          "Pay only against a receipt in that same business name. Cash without a receipt is not a payment you can complain about.",
          "Keep the Protector fee separate. It is the charge on the BEOE receipt, described in the [[/guides/protector-of-emigrants|Protector guide]]. It is not a line the promoter may inflate and call official.",
          "If the name is not on the list, do not pay. Read [[/guides/visa-agent-scam-pakistan|visa agent scams]] and leave.",
        ],
      },
      {
        t: "h2",
        id: "not-a-licence",
        text: "What is not a licence",
      },
      {
        t: "p",
        text: "A travel agent who sells tickets is not an Overseas Employment Promoter unless the Bureau list says that same business holds the promoter licence. A typing centre is not an OEP. A relative who “has a man in the Gulf” is not an OEP. A sub-agent who works out of a mobile-phone shop and says the real licence is with his boss in another city is asking you to skip the only check that matters. Ask for the boss’s number and search that name too. If the person taking your money is not the licensee, your receipt should still show the licensed name, and you should know why a different person is holding the cash. If you cannot explain it in one sentence, do not pay.",
      },
      {
        t: "p",
        text: "The Bureau site can be slow. Try again, or use the contact number published on beoe.gov.pk. Do not accept a photograph of a certificate as the only proof, because certificates can be old or edited. Do not accept a WhatsApp forward of someone else’s search. Search again. A licensed promoter can still cheat. The licence means they are registered and can be complained about. It does not mean the foreign employer is real, the wage is the wage in the voice note, or your visa will be issued. You still verify the Gulf visa on that country’s official enquiry, and you still read basic salary and allowances on a contract. The [[/tools/salary-converter|salary converter]] is for the wage. The Bureau list is for the agent. They answer different questions.",
      },
      {
        t: "h2",
        id: "complain",
        text: "If the licence is fake or the job is not the job",
      },
      {
        t: "p",
        text: "Keep the receipt, the chat, the licence number they claimed, the photograph of the shop, and the Bureau search that shows the name missing or expired. Complain to the Bureau of Emigration through the channel on its site. If money was taken by deception, complain to the FIA as well. The paperwork for that is in [[/guides/report-visa-fraud-fia|how to report visa fraud]]. A complaint is not a refund. It is the door that exists. Do not pay a second person who says they can get the first person’s licence cancelled and your money back for a new fee. That is the same story in a different chair.",
      },
      {
        t: "p",
        text: "Before you sign a foreign service agreement, read the employer’s name aloud and compare it with the visa. A licensed OEP processing a vague “various companies” file is still a vague file. Ask which country, which job title, and which basic wage. If those three are not known, you are paying for a hope. Hopes do not need a licence. Jobs do.",
      },
    ],
    [
      {
        q: "Is every travel agent an OEP?",
        a: "No. A ticket shop is not allowed to send you for employment unless it also holds the promoter licence. Search the business name on beoe.gov.pk. The sign outside is not the search.",
      },
      {
        q: "The agent says the Bureau website is down. What now?",
        a: "Try again later, or call the number published on beoe.gov.pk. Do not accept a photo of a certificate as the only proof, and do not pay while the site is “down” only on their laptop.",
      },
      {
        q: "Can a licensed OEP still cheat?",
        a: "Yes. The licence means they are registered. Keep receipts in their exact business name, and complain to the Bureau if the job is not the job you paid for. Check the Gulf visa yourself anyway.",
      },
      {
        q: "What is a reasonable OEP fee?",
        a: "Read any official charge on the Bureau’s site, and read the promoter’s own fee on a receipt in the licensed name. Apna Ghar will not invent a rupee package. Anything demanded only in cash, with no receipt, needs a question to the Bureau before you pay.",
      },
      {
        q: "Where do I report a fake licence?",
        a: "To the Bureau of Emigration, and to the FIA if you were deceived into paying. Keep the number they gave you and the screenshot of the search that does not match.",
      },
      {
        q: "How do I search the list?",
        a: "On beoe.gov.pk, search the licensed Overseas Employment Promoter records by licence number and by exact business name. Match city and validity. Do the search yourself.",
      },
    ],
    [S.beoe, S.fia],
  ),

  "fake-job-offer-dubai": art(
    [
      {
        t: "p",
        text: "A fake Dubai job offer usually arrives as a rush. The salary is high, the fee is today, and the company email is a free address. A genuine offer can wait long enough for you to check the company and, later, the work permit. Apna Ghar will not tell you that a high salary proves a fake, or that a modest salary proves a real job. The test is whether an employer exists, whether the visa can be seen on an official UAE screen, and whether the basic wage on a real contract matches the story. An advertisement is not a MOHRE contract. A Word file with a logo is not one either.",
      },
      {
        t: "h2",
        id: "signs",
        text: "Signs the offer is not real",
      },
      {
        t: "ul",
        items: [
          "The company name on the letter does not match a business you can find, or it matches a real company and the email domain does not.",
          "You are asked to pay for the visa, a security deposit, or medical insurance into a personal account, JazzCash, or a name that is not the company’s.",
          "The logo looks right but the phone number is a mobile that never answers as a receptionist.",
          "They refuse to let you check the file on ICP or GDRFA, or they say the enquiry is only for Emiratis.",
          "The contract is a Word file and they get angry if you ask which line is basic salary and which line is an allowance.",
          "The job title is “general worker” in the file and “supervisor” in the voice note, with a promise to change it after you land.",
          "They want your passport, CNIC and a family member’s documents before any reference number exists.",
          "They push a non-refundable ticket for this week. A real entry permit does not need you to be reckless.",
        ],
      },
      {
        t: "h2",
        id: "check",
        text: "How to check without paying",
      },
      {
        t: "p",
        text: "Ask for the employer’s registered name and the work-permit or entry-permit reference. Check the status the way [[/guides/check-uae-visa-status|the UAE visa status guide]] describes, on an official channel, yourself. Match your passport number and the spelling of your name. A QR code is real only if it opens an official MOHRE, ICP or GDRFA page and the details match. A code that opens a PDF on a private site proves that someone can make a QR code. It does not prove a visa. If the letter names a salary, ask which figure will be basic on the employment contract. Put that basic figure, not the package, into the [[/tools/salary-converter|salary converter]]. Housing that is “included” must say room or allowance. Included is not a type of money.",
      },
      {
        t: "p",
        text: "The clean path, if the company is real and you are still in Pakistan, is [[/guides/genuine-dubai-job-from-pakistan|genuine jobs from Pakistan]]. The wider search is [[/guides/jobs-in-dubai-for-pakistanis|jobs in Dubai]]. Neither path starts with a fee to a stranger. If a Pakistani promoter is involved, their name has to be on the Bureau of Emigration list before they touch your money. See [[/guides/oep-licensed-agents|how to check an OEP]]. A promoter licence still does not make this particular letter true. You check both.",
      },
      {
        t: "h2",
        id: "already-paid",
        text: "If you already paid",
      },
      {
        t: "p",
        text: "Stop the next transfer. Paying the balance is how the loss grows, and it does not make a missing file appear on ICP. Collect the evidence while it is still on your phone: the offer letter, the chat, the receipt, the account title and number, the shop photo, and any passport receipt. Write a timeline of what you were promised and when you paid. Then read [[/guides/report-visa-fraud-fia|how to report it]] and use the FIA at [fia.gov.pk](https://www.fia.gov.pk) if the conduct is deception, and the Bureau if they acted as a promoter. If a real UAE company is misusing a name, MOHRE is the labour door. Do not fly to “sort it out” on a visit visa and a ticket you cannot change.",
      },
      {
        t: "p",
        text: "Tell your family the expectation clearly. A complaint is not a refund. It is the official door. A Facebook post naming the agent can warn other people and it can also complicate a case. File first. If your passport is with the shop, ask for it back in writing the same day. A passport is not their property, and a visa file that does not exist does not need your passport overnight.",
      },
      {
        t: "h2",
        id: "looks-real",
        text: "Offers that look careful and are still wrong",
      },
      {
        t: "p",
        text: "Some fakes are sloppy. Some are not. A letter can name a real developer, a real mall, or a real hospital, because those names are on the internet. The test is whether that organisation’s own domain is writing to you, and whether a permit exists in your passport number. A relative in Dubai can be shown the same PDF and still not be able to verify it by “asking around”. Asking around is not GDRFA. Similarly, a real company can be paired with a fake recruiter who collects a fee the company never sees. Call the number on the company’s own website, not the number in the letter, and ask if they issued this offer. If they do not know your name, you have learned enough.",
      },
    ],
    [
      {
        q: "The letter has a QR code. Is it real?",
        a: "Only if the code opens an official MOHRE, ICP or GDRFA page and the details match your passport. A code that opens a PDF on a private site proves nothing. Scan it before you pay, not after.",
      },
      {
        q: "They know my passport number. Does that mean the visa is filed?",
        a: "No. You gave it to them, or someone else did. Check the status yourself on the official channel. Knowledge of your passport is not a file.",
      },
      {
        q: "Is a high salary a sign of a fake?",
        a: "It is a reason to slow down, not proof by itself. Check the company either way, and ask which part of that salary is basic wage on the contract.",
      },
      {
        q: "Should I fly and sort it out there?",
        a: "Not on a ticket you cannot change, and not on a visit visa to start work. If the permit is real, it will still be real next week. If it is not, the airport will not fix it.",
      },
      {
        q: "Who do I tell in the UAE and in Pakistan?",
        a: "If a real company is misusing your name, MOHRE. If the crime happened in Pakistan, the FIA at fia.gov.pk and the Bureau of Emigration if a promoter was involved. Keep copies of everything.",
      },
      {
        q: "What evidence should I keep?",
        a: "The offer PDF, the chat, receipts, the account name, the shop front, and a timeline of payments. Do not delete the thread because you are embarrassed. Embarrassment does not file a case.",
      },
    ],
    [S.mohre, S.icp, S.gdrfa, S.fia],
  ),

  "visa-agent-scam-pakistan": art(
    [
      {
        t: "p",
        text: "Visa agent scams in Pakistan follow a pattern you can recognise before the last transfer. You pay in pieces: token, medical, “embassy”, insurance, then a last demand the week you were supposed to fly. The visa never becomes visible on an official website. Apna Ghar will not guess how much a scammer typically takes. The amount is whatever you sent, and the proof is the receipt, not a round number in a warning poster. The defence is the same in every city: check the Overseas Employment Promoter licence on beoe.gov.pk, check the Gulf visa on that country’s official screen, and do not pay the next piece while either check fails.",
      },
      {
        t: "h2",
        id: "signs",
        text: "Warning signs",
      },
      {
        t: "ul",
        items: [
          "No licence on the Bureau of Emigration list. Check [[/guides/oep-licensed-agents|how to look up an OEP]] before the first token, not after the third.",
          "Pressure to pay today because a quota closes, a Ramadan offer ends, or the embassy officer is “only in the office until 4”.",
          "Receipts that are blank, in a different name from the shop sign, or handwritten without the business name you searched.",
          "Your original passport held for weeks, with a new reason each Friday.",
          "A visa file you cannot see on ICP, GDRFA, a Saudi enquiry, or the Ministry of Interior site for the country they named.",
          "A medical sold as a GAMCA package at a rupee total you cannot see on wafid.com. Book the slip yourself. See [[/guides/gamca-medical-test|the medical guide]].",
          "A request for your wife’s or mother’s documents for a job that was advertised as a single man’s visa.",
          "A second agent who offers to recover the first agent’s fee for a new fee.",
        ],
      },
      {
        t: "h2",
        id: "evidence",
        text: "What evidence to keep",
      },
      {
        t: "p",
        text: "Cases fail when the only record is a memory. Keep a folder, on paper and on your phone, and do not edit the files later. You want the original chat, not a retelling. Photograph the shop front, the sign, and any licence they have framed. Save the receipt and, if you transferred money, the account title, the account number, the bank or wallet name, and the date. Save the offer letter and any visa PDF. Save the CNIC copy they took if you still have it, and write down every document you handed over. If they recorded a voice note, keep the audio. Write a one-page timeline: date, amount, what they promised would happen next, and what actually happened. Names matter. “The boy at the counter” is harder to use than a name and a phone number.",
      },
      {
        t: "p",
        text: "Send one written request for your passport and your originals, and keep the reply, including silence. Do not send more money while you wait for that reply. Do not hand the originals to a new helper. If other people were in the same shop on the same day, their stories can support yours, but your own receipts are the spine of the complaint. A group chat full of anger is not a case file.",
      },
      {
        t: "h2",
        id: "doors",
        text: "Where to complain",
      },
      {
        t: "p",
        text: "Use the Federal Investigation Agency for criminal deception, including online payments. Start from [fia.gov.pk](https://www.fia.gov.pk) and use only the contact or form that site publishes. Copycat complaint pages exist. Use the Bureau of Emigration and Overseas Employment at [beoe.gov.pk](https://beoe.gov.pk) when the person acted as a promoter or claimed a promoter licence. The steps and the limits are written out in [[/guides/report-visa-fraud-fia|how to report visa fraud]]. A local police report is sometimes needed as well. Ask the FIA desk what they want in your city rather than guessing. Neither office can promise the money back. Say that to your family before they ask.",
      },
      {
        t: "p",
        text: "A licensed promoter who delivered a different job from the one in the agreement is still a Bureau complaint. A person with no licence who took a visa fee is an FIA complaint. Many cases are both. File both if both are true, and do not wait to see which one feels friendlier. If you are already in the Gulf on a bad visa, speak to the Pakistani mission and, for labour issues, the host ministry. MOHRE in the UAE and the Ministry of Human Resources in Saudi Arabia are the labour doors. They cannot undo a transfer you made to a shop in Gujranwala. That undo, if it ever happens, is a Pakistan matter.",
      },
    ],
    [
      {
        q: "I already paid half. Should I pay the rest to finish?",
        a: "Not if you still cannot see a visa on the official site, and not if the agent is not on the Bureau list. Paying more is how the loss grows. Ask for the passport back in writing.",
      },
      {
        q: "The agent is my relative. What then?",
        a: "The same checks. A licence is a licence. Keep the conversation in messages, not only in conversation at a wedding. Relatives can be licensed, and relatives can still take a fee for a file that does not exist.",
      },
      {
        q: "Can I get the passport back?",
        a: "Ask in writing and keep the reply. If they refuse, include that in the FIA complaint. A passport is not their property, and a fake file does not need it.",
      },
      {
        q: "Is every agent a scam?",
        a: "No. Licensed promoters process real jobs. The test is the licence on beoe.gov.pk, the receipt in that name, and a visa you can verify on the Gulf site. Fail any one of those and you stop paying.",
      },
      {
        q: "What should I photograph?",
        a: "The receipt, the account you transferred to, the shop front, the offer letter, the visa PDF, and the chat. Add a timeline of dates and amounts. That folder is the complaint.",
      },
      {
        q: "Will complaining get my money back?",
        a: "A complaint is not a refund. It is how the FIA and the Bureau can be told, with evidence. Keep that expectation accurate so a second scammer cannot sell you a recovery.",
      },
    ],
    [S.beoe, S.fia, S.icp],
  ),

  "fake-saudi-visa-check": art(
    [
      {
        t: "p",
        text: "To verify a Saudi visa is genuine, check the visa number on an official Saudi enquiry before you buy a ticket. A colour PDF can be edited in an hour, and a barcode can point at any website the editor chooses. Apna Ghar will not name a single secret page that checks every visa type, because work visas, family visas and tourist visas are not all issued in the same queue. Tourist visas that were issued through the official tourist platform belong on that platform. Other visas should be checked on the enquiry the issuing authority names, starting from the Ministry of Foreign Affairs rather than a look-alike domain an agent sent you. Your flight waits until the enquiry agrees with the paper.",
      },
      {
        t: "h2",
        id: "verify",
        text: "What to match on the screen",
      },
      {
        t: "ul",
        items: [
          "Visa number, passport number, and the spelling of the name, including the father’s name if it is in the passport.",
          "The sponsor or the purpose: work, family visit, tourism, or something else. A work story with a visit visa is the wrong document. See [[/guides/saudi-visit-visa-for-pakistanis|Saudi visit visas]] and [[/guides/saudi-work-visa-pakistan|the work visa guide]].",
          "The dates. An expired visa that “will be extended on arrival” is a sentence you should not trust.",
          "The nationality and the number of entries, if the screen shows them. A one-entry visa is not a multiple-entry visa because the PDF says so.",
          "The embassy, the platform, or the mission that issued it. The Ministry of Foreign Affairs is the policy home. A random “visa check” site with ads is not.",
          "The job title, if it is a work visa. Compare it with the offer. A mismatch is a problem now, not after you land.",
        ],
      },
      {
        t: "h2",
        id: "pdf",
        text: "PDFs, barcodes and agents",
      },
      {
        t: "p",
        text: "Open the official site by typing it, or from a bookmark you created earlier. Do not tap the link in the same WhatsApp message as the PDF. Look-alike domains change a letter and copy the layout. If the agent says the enquiry is only for embassies, that is convenient for the agent. Try the official page yourself. If the site is down, wait and try again. A down site is not a reason to pay the agent’s cousin for a “manual check”. Scan a barcode only if the address it opens is a government address you recognise. A barcode can point anywhere, including a page that always says “valid”.",
      },
      {
        t: "p",
        text: "A genuine visa can still sit on top of a false job. The enquiry proves the visa record. It does not prove the salary, the housing, or that you will work for the sponsor named on the paper. Read basic wage and allowances on the contract, and put the basic through the [[/tools/salary-converter|salary converter]]. Use [[/rates/sar-to-pkr|SAR to PKR]] only as a mid-market reference. If the sponsor is not the employer you were promised, stop. “Free visa” arrangements, where you work for someone else, are how people become illegal while holding a visa that was, technically, genuine.",
      },
      {
        t: "h2",
        id: "next",
        text: "If the number does not exist",
      },
      {
        t: "p",
        text: "Stop paying. Ask for the passport back in writing. Keep the PDF, the chat, the receipt and the screenshot of the enquiry that does not find the number. Read [[/guides/report-visa-fraud-fia|how to report fraud]] and use FIA plus, if a promoter was involved, the Bureau of Emigration. Do not let the agent issue a “replacement visa” for another fee. Replacement, in this pattern, means a second PDF. The work path, when the visa is real and the job is the job, continues in the Saudi work-visa guide, including the medical if Wafid is required and the Protector step in Pakistan.",
      },
      {
        t: "p",
        text: "An Iqama is not checked the same way. A visa is the document before you are a resident. An Iqama is checked later on Absher by the resident, not by an agent who asks you for the one-time code. Never share that code. If someone says they can “convert the visit into an Iqama” without the official steps, they are describing a story. See [[/guides/check-iqama-status|checking an Iqama]] only after you actually have one. Until then, the visa enquiry is the tool.",
      },
      {
        t: "p",
        text: "Do the check before you resign and before you buy a non-refundable ticket. Write down the visa number, the passport number and the date you looked. If a friend in Riyadh offers to “see it on the system”, thank them and still open the official page yourself. A friend’s screenshot can be old. The enquiry you run on the day you pay for the flight is the one that counts. If the purpose is work, the Protector step in Pakistan is still waiting after the visa is real. A genuine visa does not cancel that stamp, and a genuine stamp does not prove the visa.",
      },
    ],
    [
      {
        q: "Which website do I use?",
        a: "Use the enquiry on the official visa platform that issued your application, or the service the Ministry of Foreign Affairs points you to. Type the address yourself. Do not use a look-alike sent in the same chat as the PDF.",
      },
      {
        q: "The agent says the enquiry is only for embassies.",
        a: "That is convenient for the agent. Try the official page yourself. If it is down, wait and try again. Do not pay a third party to look up a number the official page is there to show.",
      },
      {
        q: "The PDF has a barcode.",
        a: "Scan it only if it opens a government address and the passport number matches. A barcode can be drawn to open any site, including a fake “valid” page.",
      },
      {
        q: "Can I check an Iqama the same way?",
        a: "An Iqama is checked on Absher after you are a resident. A visa is the earlier document. Do not share an Absher one-time code with the person who sent the PDF.",
      },
      {
        q: "What if the visa is real but the job is different?",
        a: "The visa being real does not make the salary true. You still want the basic wage and the allowances in a contract you can keep, and you want the sponsor to be the employer.",
      },
      {
        q: "The number is not on the enquiry. What now?",
        a: "Stop paying, ask for the passport in writing, and keep the PDF and the receipts. Report the deception to the FIA and, if they claimed to be a promoter, to the Bureau of Emigration.",
      },
    ],
    [S.mofa, S.visitsaudi, S.absher],
  ),

  "report-visa-fraud-fia": art(
    [
      {
        t: "p",
        text: "You can report visa or job fraud to the Federal Investigation Agency and, where a promoter is involved, to the Bureau of Emigration and Overseas Employment. Go with papers. A story without a receipt is harder to act on, and neither office can promise that you will get the money back. Apna Ghar will not invent a helpline number. Use the contacts published on [fia.gov.pk](https://www.fia.gov.pk) and [beoe.gov.pk](https://beoe.gov.pk). Copycat complaint sites use similar names and ask for a fee to “file”. The official sites do not need a middleman.",
      },
      {
        t: "h2",
        id: "report",
        text: "What to take, and which door",
      },
      {
        t: "ul",
        items: [
          "Your CNIC, and copies of the passport if you still hold it. If they kept the passport, say so in the first paragraph.",
          "Receipts, bank or wallet transfer records, the account title, and the date of each payment.",
          "The chat, email, and voice notes. Export them before you block the number, so the export still exists.",
          "The offer letter, the fake visa PDF, and a screenshot of the official enquiry that does not show that visa.",
          "The agent’s full name, shop address, phone number, and any licence number they claimed. Photograph the shop front.",
          "A short timeline: when you paid, how much, and what they promised would happen next.",
          "FIA for criminal deception, including online payments. Use only the form or address on fia.gov.pk.",
          "The Bureau of Emigration if the person acted as an Overseas Employment Promoter or used a fake OEP licence. Use beoe.gov.pk.",
          "A local police report if the FIA desk in your city asks for one. Ask them. Do not invent the sequence.",
        ],
      },
      {
        t: "h2",
        id: "write",
        text: "How to describe it in one page",
      },
      {
        t: "p",
        text: "Write like a witness, not like a speech. Start with your name and CNIC. Then one sentence on what they promised: a work visa for a named country and a named job. Then the dates and the amounts. Then what you asked to see and did not see: no licence on the Bureau list, no visa on the official enquiry. Then what you want recorded: the complaint, the passport if it is held, and the documents you handed over. Attach the folder. Do not attach only a link to a Facebook video. Officers cannot build a file from a video that disappears.",
      },
      {
        t: "p",
        text: "Read [[/guides/visa-agent-scam-pakistan|the scam patterns]] so you can name what happened in plain sentences, and [[/guides/fake-job-offer-dubai|fake Dubai offers]] or [[/guides/fake-saudi-visa-check|the Saudi visa check]] if that was the document. If the loss is still only a deposit and the passport is with you, do not send more money while you wait for a reply. A waiting complaint is not a reason to pay the “last embassy fee”. There is no last fee on a file that does not exist.",
      },
      {
        t: "h2",
        id: "limits",
        text: "What a complaint will not do",
      },
      {
        t: "p",
        text: "It will not automatically reverse a wallet transfer. It will not create a Gulf visa. It will not punish a foreign employer who never heard of you, if the entire fiction was in Pakistan. It may still be the right record, especially if the same shop is taking fees from other people. Keep your expectation accurate when you talk to your family, because a second scammer sells “recovery” to people who were promised a refund the state never offered. Nobody official will ask you to pay a percentage to release your complaint. That sentence is another fraud.",
      },
      {
        t: "p",
        text: "If you are already in the Gulf on a bad visa, the Pakistan complaint does not replace local help. Speak to the Pakistani embassy or consulate, and for labour issues use the host ministry: MOHRE in the UAE, the Ministry of Human Resources in Saudi Arabia, and the labour authority in the country you are actually in. Keep copies of everything you signed, including a contract you regret. Do not give your passport to a camp broker who says he will “fix the complaint”. If you are in danger, the consulate is the call, not a forum. The salary you were promised can still be written down for the labour case. Use the [[/tools/salary-converter|salary converter]] only to explain a real written wage, not to invent the wage the scammer spoke.",
      },
      {
        t: "p",
        text: "Take a patient person with you if forms are hard, but do not hand them your only copies. Sit with the officer’s questions. If they ask for something you do not have, write down the missing item and the date, and bring it next time. Do not invent a document to fill the gap. A forged receipt makes a true complaint look false. The [[/guides/oep-licensed-agents|OEP licence check]] is part of the story when a promoter was involved. Say whether you searched beoe.gov.pk, and attach the screenshot. That one page is often clearer than an hour of explanation.",
      },
    ],
    [
      {
        q: "Will FIA refund me?",
        a: "A complaint is not a refund. It is how an investigation can start. Keep that expectation accurate when you talk to your family, and do not pay anyone who says they can speed a refund.",
      },
      {
        q: "Can I complain online?",
        a: "Use only the form or email published on fia.gov.pk. Copycat complaint sites exist and sometimes charge a fee. The Bureau’s complaints start from beoe.gov.pk, not from a Facebook page.",
      },
      {
        q: "The agent is in another city. Where do I file?",
        a: "Ask FIA which desk wants the file. Do not let distance stop you collecting the papers. Your timeline and receipts travel more easily than you do.",
      },
      {
        q: "Should I post the agent’s photo on Facebook first?",
        a: "File the complaint first. A public post can warn others, and it can also complicate a case. Ask the officer before you turn the file into a broadcast.",
      },
      {
        q: "What if I am already in the Gulf on a bad visa?",
        a: "Speak to the Pakistani embassy or consulate and, for labour issues, the host ministry, such as MOHRE or the Saudi Ministry of Human Resources. Keep copies of everything you signed. Also file in Pakistan if the fee was taken there.",
      },
      {
        q: "What evidence is enough to walk in with?",
        a: "CNIC, receipts, transfer records, the chat, the offer, the fake visa, the shop address, and a one-page timeline. A story with none of those is harder to act on. Bring what you have and say what is missing.",
      },
    ],
    [S.fia, S.beoe, S.mohre, S.hrsd],
  ),

  "cheap-flights-dubai-to-pakistan": art(
    [
      {
        t: "p",
        text: "Cheap flights from Dubai to Pakistan are the fares that stay cheap after you add a bag, not the headline that disappears when you select Lahore, Karachi, Islamabad or Peshawar. Emirates, flydubai, PIA, airblue and Air Arabia all fly parts of this route, and a lite or basic ticket can be a cabin bag only. Apna Ghar will not invent a fare in dirhams or rupees, and it will not name a cheapest month. Prices move. Eid and the school holidays push them up. The comparison that works is the total on the airline’s own site, with the bag you will actually carry, for the airport you will actually reach.",
      },
      {
        t: "h2",
        id: "book",
        text: "When to book, and what to compare",
      },
      {
        t: "ul",
        items: [
          "Compare the total, not the base fare. A suitcase for gifts can cost more than the difference between two airlines.",
          "Read the fare brand. Lite and basic tickets are often cabin-bag only. The kilogram figure, if any, is the one on that ticket, explained in [[/guides/baggage-allowance-gulf-to-pakistan|the baggage guide]].",
          "Mid-week dates are often calmer than Friday night. That is a habit of this route, not a guarantee and not a published cheapest day.",
          "Eid and the December school holidays cost more and sell out. See [[/guides/eid-flights-to-pakistan-tips|Eid flight tips]]. Book when your leave is signed.",
          "DXB and DWC are different airports. A cheaper DWC fare is not cheaper if the taxi and the time wipe out the difference.",
          "Check which city the ticket actually serves. Schedules to Peshawar, Multan, Sialkot, Faisalabad, Lahore, Karachi and Islamabad change. Look up the date. Do not trust last year’s memory.",
          "Buy on the airline’s site or through an agent you can visit again. Open the booking on the airline site the same day.",
          "A booking without a PNR is not a ticket. A WhatsApp screenshot of a name and a price is not a PNR either.",
        ],
      },
      {
        t: "h2",
        id: "total",
        text: "The total, with bags and with the right airport",
      },
      {
        t: "p",
        text: "Write three numbers before you pay: the fare, the bag, and the change fee if your leave might move. Add them. Then look at the other airline’s three numbers. A “cheap” flydubai or Air Arabia fare can beat Emirates before the bag and lose after it. PIA and airblue can go the other way. There is no standing winner. The notes on [[/tools/flights|flight search]] are a way to keep those lines straight. This site does not sell tickets, and the box stays switched off until there is a real search to show. Nobody here can see tomorrow’s seat.",
      },
      {
        t: "p",
        text: "Open the PNR on the airline website before you leave the shop, while you can still cancel the cash. The PNR is the booking reference the airline recognises. If the agent cannot produce it, you do not have a booking. If the name on the PNR is not the name in your passport, you do not have a booking you can fly. Correct the spelling while you are still at the desk. Gold in the suitcase is not a baggage question. It is a customs question. Read [[/guides/gold-carry-dubai-saudi-pakistan|the gold carry guide]] before you buy jewellery to take home. A cheap ticket does not make an undeclared bangle legal.",
      },
      {
        t: "h2",
        id: "agent",
        text: "Agents, employers and group tickets",
      },
      {
        t: "p",
        text: "A travel agent can be a reasonable way to pay in cash if the PNR appears under your name the same day. They are not a reason to skip the bag rule. Ask them to open the booking and show the baggage line. If they say “30 kilos, everyone knows”, they are remembering a different fare brand. Employer travel desks should give you the PNR and the baggage in writing as well. A seat held verbally for a company annual leave rush is not a seat. If two of you are travelling, book so you can see both names. A group screenshot with your name typed in a caption is how people reach the airport and find they were never in the booking.",
      },
      {
        t: "p",
        text: "Change fees and refund rules are part of the price. A slightly higher fare you can change can be cheaper than a lite fare you must throw away when the camp shifts the off-day. Read that rule before Eid, not in the queue. If you are also sending money home for the ticket, compare the transfer the way you would any other remittance, and do not buy the ticket from a stranger who says they will “adjust it in the hawala”. You want an airline PNR and, separately, a receipt for any money you sent. Those are different pieces of paper.",
      },
    ],
    [
      {
        q: "Which month is cheapest from Dubai to Pakistan?",
        a: "There is no honest single month. Avoid Eid and school holidays if you can move your dates, and compare the total with bags. Apna Ghar will not invent a fare or a cheapest week.",
      },
      {
        q: "Is flydubai cheaper than Emirates?",
        a: "Sometimes on the base fare, and sometimes not once a suitcase is added. Compare both totals on the airline sites for your date. A lite fare can be cabin-bag only.",
      },
      {
        q: "Are Peshawar and Multan served direct?",
        a: "Schedules change. Check the airline for Peshawar, Multan, Sialkot, Faisalabad, Lahore, Karachi and Islamabad on your dates. Do not buy a connection you have not read.",
      },
      {
        q: "Should I buy from a WhatsApp dealer?",
        a: "Only if the booking appears under your name on the airline site, with a PNR, before you leave the shop. A screenshot without a PNR is not a ticket.",
      },
      {
        q: "Can I carry gold as baggage?",
        a: "That is a customs question, not a free-bag question. Read the gold carry guide before you buy it. The airline allowance does not decide what Pakistan or the UAE lets you carry.",
      },
      {
        q: "Why did the price jump when I added a bag?",
        a: "Because the cheap fare often excludes the suitcase. Add the bag before you compare airlines. The bargain is the total, not the first number on the page.",
      },
    ],
    [S.emirates, S.flydubai, S.pia, S.airblue, S.airarabia],
  ),

  "cheap-flights-saudi-to-pakistan": art(
    [
      {
        t: "p",
        text: "Cheap flights from Saudi Arabia to Pakistan are easier to judge when you are flexible by a day and honest about bags. Riyadh, Jeddah and Dammam are not one airport, and a fare that looks cheap from the city you do not live in is not your fare. Saudia, PIA and airblue are names to check on the route you actually need, and other carriers appear and disappear from the schedule. Apna Ghar will not invent a riyal price or a cheapest month. Eid prices rise. A booking without a PNR is not a ticket. Compare the total with the bag you will carry, on the airline’s own site.",
      },
      {
        t: "h2",
        id: "saudi-fares",
        text: "Riyadh, Jeddah, Dammam",
      },
      {
        t: "ul",
        items: [
          "Search the city you can leave from. A cheap Jeddah fare is useless if you live in Dammam and the bus or the extra night costs the saving.",
          "Open the fare rules for baggage before you pay. See [[/guides/baggage-allowance-gulf-to-pakistan|baggage allowance]]. Lite and basic fares can be cabin-bag only. Do not assume a kilogram figure this site has not invented.",
          "Eid bookings follow the same pressure as everywhere else. Read [[/guides/eid-flights-to-pakistan-tips|Eid tips]] and buy when leave is approved, not the week before.",
          "Confirm the PNR on the airline website the same day. If the agent cannot show it, do not pay.",
          "A connection via Dubai or another Gulf city can be cheaper or a trap. Read whether you need a transit visa for a Pakistani passport before you celebrate the fare.",
          "DXB and DWC are different if you connect in the UAE. Leave enough time, and do not assume the bags are checked through.",
          "Match the passenger name to the passport. A father’s name in the wrong box is a long argument at Jeddah.",
          "Use [[/tools/flights|the flight notes]] to keep fare, bag and change fee as three lines. This site does not sell the seat.",
        ],
      },
      {
        t: "h2",
        id: "compare",
        text: "How to compare without a fake fare",
      },
      {
        t: "p",
        text: "For one date, open Saudia, and open PIA or airblue if they show a flight from your city. Write the total in riyals after the bag. Then decide. A third airline’s advert in a WhatsApp group is not a third line until you can open it on that airline’s site. flynas and other carriers may be on your route. Treat them as real airlines and still read the bag rule. Their lite fares are strict. A status message that says “only two seats at this price” is a sales line. Either the seat is in a booking with your PNR, or it is not.",
      },
      {
        t: "p",
        text: "Connections need a second look. A long layover can be fine if you may stay in the transit area, and a disaster if a Pakistani passport needs a visa you do not have. Check that rule with the airline and with the transit country’s official page before you pay. Do not rely on a group chat. If the bags are not checked through, you will collect them and check in again, which means time and sometimes a terminal change. Build that into the price. A “cheap” ticket that misses the onward flight is the expensive ticket.",
      },
      {
        t: "h2",
        id: "pay",
        text: "Who books it, and what you keep",
      },
      {
        t: "p",
        text: "Your employer’s travel desk can book the flight. Ask for the PNR and the baggage allowance in writing, and open the PNR yourself. A verbal seat for annual leave is how people arrive at the airport in Eid week with nothing in the system. If you pay an agent in the camp, stay until your name is visible. Keep the receipt separate from the booking. Gold, cash and gifts are customs questions. Read [[/guides/gold-carry-dubai-saudi-pakistan|carrying gold]] before you put bangles in the suitcase. The airline’s extra-bag fee does not decide Saudi or Pakistani customs.",
      },
      {
        t: "p",
        text: "Change the ticket only on the airline’s channels or through the agent who can show the new PNR. A “change” that is only a new screenshot may be the old booking still sitting there, or no booking at all. If your leave moves because of the moon sighting, the change fee you read earlier is the number that matters. This page will not guess it. Dubai connections are covered in spirit by [[/guides/cheap-flights-dubai-to-pakistan|Dubai to Pakistan flights]]. The same rule applies: total with bags, real PNR, no invented fare.",
      },
      {
        t: "p",
        text: "If you are comparing a direct flight with a connection, write the hours as well as the money. A long night in a transit airport is a cost even when the fare is lower, and it is a bigger cost if you are carrying original certificates for a job. Keep those in the cabin bag. Check the baggage brand on each ticket of a connection. Two airlines on one journey can mean two different allowances, and the stricter one is the one that matters at the first desk. Add that bag price before you call the fare cheap.",
      },
    ],
    [
      {
        q: "Which Saudi city is cheapest to Pakistan?",
        a: "It changes with the date. Search Riyadh, Jeddah and Dammam separately if you can reach more than one. Include the cost of getting to that airport. Apna Ghar will not invent a cheapest city.",
      },
      {
        q: "Is a low-cost airline a real airline?",
        a: "If it is the carrier on your ticket, yes. Still open the booking on their site, and read the bag rule. Lite fares are often cabin-bag only. A logo in a WhatsApp status is not the booking.",
      },
      {
        q: "Do I need a transit visa if I connect?",
        a: "Sometimes, depending on the airport and your passport. Check before you buy a connection that looks clever. A fare you cannot board is not cheap.",
      },
      {
        q: "Can my employer’s travel desk book it?",
        a: "Yes. Ask for the PNR and the baggage in writing, and open the PNR yourself. A promise in the camp WhatsApp group is not a ticket.",
      },
      {
        q: "When do Eid fares jump?",
        a: "As soon as people are sure of the holiday and the leave list. Book when your leave is approved. Waiting for a drop is a gamble, not a strategy. This page will not quote a price.",
      },
      {
        q: "What proves I have a ticket?",
        a: "A PNR you can open on the airline’s website, with your passport name and the flight. A booking without a PNR is not a ticket. A screenshot that cannot be opened is not a PNR.",
      },
    ],
    [S.saudia, S.pia, S.airblue, S.mofa],
  ),

  "baggage-allowance-gulf-to-pakistan": art(
    [
      {
        t: "p",
        text: "Baggage allowance from the Gulf to Pakistan is the allowance printed on your ticket, and it is not one Gulf rule. PIA, Emirates, flydubai, Air Arabia, Saudia and airblue each publish their own brands. A cheap fare can be a cabin bag only. Apna Ghar will not invent a kilogram figure for PIA, flydubai, Air Arabia, Saudia or airblue. For those airlines the allowance is the one on the ticket brand, on the airline page linked below. Emirates is the exception on this page because its checked-baggage table is public. Checked on 9 October 2026, the figures below are the ones on Emirates’ own weight-concept page, not the piece concept used for journeys to and from the Americas.",
      },
      {
        t: "h2",
        id: "emirates",
        text: "Emirates checked and cabin baggage",
      },
      {
        t: "p",
        text: "Emirates checked baggage, on the [checked baggage page](https://www.emirates.com/english/before-you-fly/baggage/checked-baggage/), checked on 9 October 2026, is published by fare brand under the weight concept. Economy Special is 20 kg. Economy Saver is 25 kg. Economy Flex is 30 kg. Economy Flex Plus is 35 kg. Premium Economy is 35 kg. Business is 40 kg. First is 50 kg. Each bag must not weigh more than 32 kg. That last line matters when you split a 40 kg allowance into two cases. One case cannot be 33 kg with the other making up the rest. The page you bought against is the page that wins if Emirates changes the table. Open it again on the day you fly, and open your booking, because a Special fare is not a Flex fare.",
      },
      {
        t: "p",
        text: "Emirates cabin baggage in economy, on the [cabin baggage rules](https://www.emirates.com/english/before-you-fly/baggage/cabin-baggage-rules/) page, checked on 9 October 2026, is 7 kg, and the size is 55 x 38 x 22 cm. That is the economy cabin bag. It is not a second suitcase you hope the gate agent will ignore in Eid week. Other cabins have their own lines on that same page. Read the cabin you actually bought. A laptop bag plus a cabin bag can break the rule even when each one feels small. If your ticket is a partner airline or a different brand, do not paste the Emirates table onto it.",
      },
      {
        t: "h2",
        id: "others",
        text: "PIA, flydubai, Air Arabia, Saudia and airblue",
      },
      {
        t: "p",
        text: "For these airlines, do not take a kilogram number from a forum or from this sentence, because this sentence is refusing to invent one. The allowance is the one on the ticket brand. Lite and basic fares can be cabin-bag only, which means the suitcase is a paid extra you should add while you compare fares, not at the airport desk. Open the page for the airline you are flying and then open your booking:",
      },
      {
        t: "ul",
        items: [
          "flydubai publishes baggage rules on its [baggage page](https://www.flydubai.com/en/flying-with-us/baggage/). Read the brand on your ticket. Do not borrow a cousin’s kilogram figure.",
          "Air Arabia publishes its rules on its [baggage page](https://www.airarabia.com/en/baggage). Many low fares are hand baggage only until you add a bag. The fare you are buying is the fare that counts.",
          "PIA’s site is [piac.com.pk](https://www.piac.com.pk). Some fares have included a suitcase and some have not. Read the flight you hold. This guide will not print a PIA kilogram number.",
          "Saudia publishes [baggage allowances](https://www.saudia.com/before-flying/baggage/baggage-allowances). Check them with your ticket number. Brands differ between a light fare and a flexible one.",
          "airblue publishes baggage with the booking flow at [its baggage page](https://www.airblue.com/bookings/baggage.asp). Use that page, not a travel agent’s memory of a 30 kg habit.",
          "If a travel agent says the bag is included, ask them to show that line inside the booking before you pay. A spoken “it is included” is not an allowance.",
          "Extra-bag prices are usually lower online, before the airport. The price on the day is the airline’s price. This page does not copy it.",
          "Infants, sports kit and wheelchairs have their own lines on each airline’s page. Do not assume they share the adult suitcase.",
        ],
      },
      {
        t: "h2",
        id: "gold",
        text: "Gold, pooling, and the ticket you already hold",
      },
      {
        t: "p",
        text: "Gold in the suitcase is a customs question, not a baggage-allowance question. A 20 kg Emirates Special fare does not decide what you may import into Pakistan, and a cabin-bag-only fare does not make jewellery duty-free. Read [[/guides/gold-carry-dubai-saudi-pakistan|the gold carry guide]] before you buy it, and declare what the rules say to declare. Cash and restricted goods sit in the same category: customs and security, not the check-in belt.",
      },
      {
        t: "p",
        text: "Pooling bags with a brother is allowed only if that airline’s rule for that fare says so. Ask at check-in with both of you present, and do not assume a Gulf habit is a written rule. If you are comparing tickets, add the bag first. The habit is the same on [[/guides/cheap-flights-dubai-to-pakistan|Dubai to Pakistan]] and [[/guides/cheap-flights-saudi-to-pakistan|Saudi to Pakistan]] flights, and it matters most when [[/guides/eid-flights-to-pakistan-tips|Eid fares]] are already high. A booking without a PNR is not a ticket, so it also has no baggage allowance to argue about. Open the PNR, read the brand, then read the airline page for that brand.",
      },
    ],
    [
      {
        q: "How many kilos do I get on Emirates to Pakistan?",
        a: "Checked on 9 October 2026, Emirates’ weight-concept table shows Economy Special 20 kg, Saver 25 kg, Flex 30 kg, Flex Plus 35 kg, Premium Economy 35 kg, Business 40 kg and First 50 kg. Each bag must be at most 32 kg. Your booking shows which brand you bought. Re-check the Emirates page if you are flying later.",
      },
      {
        q: "What is the Emirates economy cabin bag?",
        a: "Checked on 9 October 2026, economy cabin baggage is 7 kg, sized 55 x 38 x 22 cm, on the Emirates cabin baggage page. Other cabins are on that same page. A second loose bag can still be refused at the gate.",
      },
      {
        q: "Is Air Arabia always hand baggage only?",
        a: "Many of their low fares are, until you add a bag. This guide will not invent a kilogram figure. Read airarabia.com/en/baggage for the fare you are buying, and read the line inside your booking.",
      },
      {
        q: "Does PIA include a fixed kilogram allowance?",
        a: "It depends on the ticket brand. This page will not print a PIA kilogram number. Open piac.com.pk and your booking. Some fares include a suitcase and some current fares do not.",
      },
      {
        q: "What about Saudia, flydubai and airblue?",
        a: "Use the Saudia baggage-allowances page, the flydubai baggage page, and airblue’s baggage page. The allowance is the one on your ticket brand. Lite or basic fares can be cabin-bag only. Do not copy a forum number.",
      },
      {
        q: "Can I put gold in the suitcase if I am under the weight limit?",
        a: "Weight is the airline’s rule. Gold is a customs rule. Being under 20 kg or 30 kg does not answer it. Read the gold carry guide and the customs rules before you travel.",
      },
    ],
    [
      {
        label: "Emirates checked baggage",
        href: "https://www.emirates.com/english/before-you-fly/baggage/checked-baggage/",
      },
      {
        label: "Emirates cabin baggage rules",
        href: "https://www.emirates.com/english/before-you-fly/baggage/cabin-baggage-rules/",
      },
      {
        label: "flydubai baggage",
        href: "https://www.flydubai.com/en/flying-with-us/baggage/",
      },
      {
        label: "Air Arabia baggage",
        href: "https://www.airarabia.com/en/baggage",
      },
      {
        label: "PIA",
        href: "https://www.piac.com.pk",
      },
      {
        label: "Saudia baggage allowances",
        href: "https://www.saudia.com/before-flying/baggage/baggage-allowances",
      },
      {
        label: "airblue baggage",
        href: "https://www.airblue.com/bookings/baggage.asp",
      },
    ],
  ),

  "eid-flights-to-pakistan-tips": art(
    [
      {
        t: "p",
        text: "Eid flights to Pakistan get expensive because everyone wants the same few days, and the date of Eid depends on the moon, so the calendar shift is real. Apna Ghar will not invent a fare and will not tell you the cheapest day to fly. Prices rise when leave lists are signed. They do not follow a secret week you can wait for. Book when your holiday is approved and you can pay. Keep the ticket in your own name, on the airline’s website, with a PNR. A booking without a PNR is not a ticket, and a WhatsApp screenshot is not a PNR.",
      },
      {
        t: "h2",
        id: "eid",
        text: "Booking habits that actually help",
      },
      {
        t: "ul",
        items: [
          "Be ready to fly a day earlier or later. The middle night of the rush is the painful one, and flexibility is the only discount this page can honestly offer.",
          "Add the bag when you compare fares. Eid is when the empty-bag fare hurts most, because gifts and winter clothes do not fit in a cabin bag. Read [[/guides/baggage-allowance-gulf-to-pakistan|the baggage guide]].",
          "If two of you are travelling, book so both names are in the same booking. A sold-out return is a bad surprise if only one of you is ticketed.",
          "Open the PNR the same day. See [[/guides/cheap-flights-dubai-to-pakistan|Dubai flights]] and [[/guides/cheap-flights-saudi-to-pakistan|Saudi flights]] for the same test. No PNR, no ticket.",
          "Leave time for the Protector or any exit paper if your status needs it. The airport in Eid week is slow, and so is the road to it.",
          "Read the change fee before you need it. Moon-sighting can move a leave letter. A rigid lite fare is a gamble on that moon.",
          "DXB and DWC, and Riyadh, Jeddah and Dammam, are different airports. A cheaper ticket from the wrong city is not cheaper.",
          "Do not buy gold because the ticket was a bargain. Gold is a customs question in [[/guides/gold-carry-dubai-saudi-pakistan|the gold guide]].",
        ],
      },
      {
        t: "h2",
        id: "price",
        text: "Why waiting is not a plan",
      },
      {
        t: "p",
        text: "Sometimes a seat appears late. Often it does not, or it appears at a price that makes the early fare look kind. Waiting is a gamble, not a strategy, and it is a worse gamble if your leave cannot move. Compare a return with two one-way tickets only by adding the totals, including bags. Do not assume the return is cheaper because it usually was for someone else. Use [[/tools/flights|the flight notes]] to keep those lines, and use the airline sites to see the real totals. This site does not sell the seat and cannot see a hidden Eid inventory.",
      },
      {
        t: "p",
        text: "Employer charters and camp agents get busy at the same time as the websites. Their queue does not create a booking. Ask for the PNR and check it before you transfer the money, not after the office closes for the holiday. If they say the airline system is down for Eid, that is a reason to wait until you can see your name, not a reason to pay faster. A group list on a clipboard is not a passenger list. Your name needs to be in the airline’s record.",
      },
      {
        t: "h2",
        id: "day",
        text: "The week you fly",
      },
      {
        t: "p",
        text: "Reach the airport earlier than you would in a normal week. Bags are heavier, desks are slower, and a cabin-bag argument at the gate will not be resolved kindly. Weigh the case at home. If you are on an Emirates weight-concept ticket, the brand on your booking is the allowance, and each bag still has a maximum the airline publishes. If you are on another carrier, the allowance is the one on that ticket brand, not a number you remember from a previous Eid. Repack before you leave the accommodation. The airport shop will sell you a second bag at a price you will not like.",
      },
      {
        t: "p",
        text: "If the moon-sighting shifts Eid and your employer shifts the leave, open the ticket rules that day, not the next morning in a taxi. Change only through the airline or the agent who can show the new PNR. Keep the old receipt until the new booking is visible. Tell the people meeting you in Pakistan the flight number from the airline app, not from a forwarded screenshot that might be yesterday’s fare. If you are also carrying documents for a family visa or a job, they belong in the cabin bag. A delayed suitcase is an inconvenience. A delayed passport is a different problem.",
      },
      {
        t: "p",
        text: "Pay only on a card or a receipt you can show later. A camp collection in cash, with a name on a list, is the pattern that fails when the flight is full and the collector is suddenly not in the camp. If several of you are paying together, each person still needs their own PNR check. One booking reference for the group is fine only when every name is inside it. Count the names. Then go home and open the airline site again on your own phone, away from the person who took the money.",
      },
    ],
    [
      {
        q: "How many weeks before Eid should I book?",
        a: "As soon as your holiday is approved and you can pay. There is no magic day. Earlier is usually calmer. Apna Ghar will not invent a fare for that week.",
      },
      {
        q: "Will prices fall if I wait?",
        a: "Sometimes a seat appears, and often it does not. Waiting is a gamble, not a strategy. If your leave cannot move, gambling is how you stay in the camp.",
      },
      {
        q: "Are return tickets cheaper than two one-way tickets?",
        a: "Compare both totals with bags. Do not assume. A return you cannot change can be worse than two fares you can.",
      },
      {
        q: "What if the moon-sighting shifts Eid?",
        a: "Your employer’s leave letter may shift too. Check the ticket change fee before you need it, and do not buy the most rigid lite fare if the date is still a rumour.",
      },
      {
        q: "Can I buy gold and extra bags on the same ticket?",
        a: "Buy the bag on the airline site if your fare does not include one. Gold is a customs matter. Read the gold guide before you carry it. The two questions are not the same.",
      },
      {
        q: "What counts as a real Eid booking?",
        a: "A PNR you can open on the airline website, in the passport name, with the baggage line you expect. A booking without a PNR is not a ticket, however busy the agent’s office looks.",
      },
    ],
    [S.emirates, S.pia, S.saudia, S.flydubai],
  ),
};

