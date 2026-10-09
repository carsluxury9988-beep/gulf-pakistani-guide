import type { ArticleBody, Block, Faq, Source } from "@/lib/content/types";
import { S, feeNote } from "@/lib/content/sources";

function art(blocks: Block[], faqs: Faq[], sources: Source[]): ArticleBody {
  return { blocks: [...blocks, feeNote], faqs, sources };
}

const five = (faqs: Faq[]) => faqs;

const familyResidence: Source = {
  label: "UAE residence visa for family members (u.ae)",
  href: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members",
};

const wafidBook: Source = {
  label: "Wafid: book an appointment",
  href: "https://wafid.com/book-appointment/",
};

export const bodiesB: Record<string, ArticleBody> = {
  "genuine-dubai-job-from-pakistan": art(
    [
      {
        t: "p",
        text: "A genuine Dubai job from Pakistan starts with a company you can name and a contract the UAE Ministry of Human Resources and Emiratisation (MOHRE) will recognise. It does not start with a fee paid to a shop in your city. The usual order is a real offer, a work permit filed by the employer, an entry permit in your passport name, and only then the flight. If you are still in Pakistan, do not resign, do not transfer money to a personal account, and do not buy a non-refundable ticket until you can see that file yourself.",
      },
      {
        t: "h2",
        id: "path",
        text: "A clean path from Pakistan",
      },
      {
        t: "ol",
        items: [
          "The company sends an offer in the legal name on its trade licence, not a cousin's Gmail and not a brand that only exists on a Facebook page. Ask for the licence number or establishment number and write it down.",
          "Look that name up before you celebrate. Most private-sector jobs outside free zones go through MOHRE. A free-zone employer uses that zone's own system. Either way, you should see an official file. If you cannot find the company at all, stop.",
          "The employer applies for the work permission. You do not buy a visa file from a market in Lahore, Karachi, Islamabad or Rawalpindi. A demand for a large cash amount before any verifiable offer is a stop sign.",
          "If an agent in Pakistan is involved, that person should be a licensed Overseas Employment Promoter. Check the licence on the Bureau of Emigration site. The steps are in the [[/guides/oep-licensed-agents|OEP licence]] guide. An unlicensed shop is not allowed to send you for work.",
          "People leaving Pakistan for employment are expected to clear the Protector of Emigrants. Read the [[/guides/protector-of-emigrants|Protector process]] and the fee schedule on the Bureau site. Pay the published fee. Do not add a second urgent amount in cash. A visit visa does not replace this step when the trip is for a job.",
          "When an entry permit is issued, [[/guides/check-uae-visa-status|check the visa status]] yourself on ICP and, if the file is Dubai, on GDRFA Dubai. Match every letter of the name to the passport. Then buy the ticket.",
          "After you land, the medical, biometrics, Emirates ID and the labour contract are the employer's process to finish. Keep copies of every receipt. Your passport is your document. If someone wants to hold it for safekeeping, ask MOHRE what the rule is before you agree.",
        ],
      },
      {
        t: "h2",
        id: "offer",
        text: "How to read the offer before you resign",
      },
      {
        t: "p",
        text: "A genuine offer names the job, the place of work, the basic salary, and any allowance as separate lines. Eight thousand all inclusive in a voice note is not a contract. Ask which number is basic. Housing, transport and overtime sit on different lines. A low basic wage with a large other allowance can change end-of-service gratuity, and it can also change whether you later meet a family-sponsorship test. If the Arabic copy and the English copy do not show the same figures, do not sign. Ask the employer to open the offer inside the official system and read it with you.",
      },
      {
        t: "ul",
        items: [
          "Put only the basic salary written in the contract into the [[/tools/salary-converter|salary converter]]. Overtime that was promised in a speech is not pay. Use the [[/rates/aed-to-pkr|AED to PKR]] page so people at home can see the wage in rupees. That page is a mid-market reference, not the rate an exchange will give you.",
          "Gratuity later follows the wage in the labour contract. Read the [[/guides/uae-gratuity-rules|UAE gratuity rules]] and try the [[/tools/gratuity-calculator|gratuity calculator]] as an estimate, not as a MOHRE ruling.",
          "A typing centre can submit papers. It cannot invent an employer. If the only person you have met is the typist, you do not have a job yet.",
          "Read [[/guides/fake-job-offer-dubai|how to spot a fake offer]] and the [[/guides/visa-agent-scam-pakistan|visa agent scam]] notes before you send money. Keep the chat, the receipt and the licence number.",
          "If the agent disappears, those papers are what the Federal Investigation Agency and the Bureau of Emigration will ask for. The [[/guides/report-visa-fraud-fia|how to report fraud]] guide explains the complaint path.",
          "A visit visa with a promise that the work visa will be fixed after you arrive is not a job offer. Read [[/guides/uae-visit-visa-vs-work-visa|visit visa versus work visa]] before you fly.",
        ],
      },
      {
        t: "h2",
        id: "family",
        text: "If you later want to sponsor a spouse or children",
      },
      {
        t: "p",
        text: "A job and a family residence visa are different files. Checked on 9 October 2026, the u.ae family residence page, which itself shows an update of 28 September 2026, says a sponsor needs a salary of AED 4,000 a month, or AED 3,000 plus accommodation, to sponsor a spouse, unmarried daughters, sons under 25, and children with special needs. That line is for those relatives. It is not a parent rule. Parent sponsorship in Dubai is a separate, higher emirate rule. This guide does not state a dirham or rupee figure for parents. Read GDRFA Dubai for a parent file, and read [[/guides/family-visa-uae-salary-requirement|family sponsorship]] before you promise tickets to anyone at home.",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026 against the u.ae family residence page. Use that page for the spouse and child salary line. Use GDRFA Dubai for parents. Do not convert the dirham figure into rupees and treat the rupee number as the legal test.",
      },
      {
        t: "p",
        text: "[[/guides/jobs-in-dubai-for-pakistanis|Jobs in Dubai for Pakistanis]] can give you places to look. The licence, the official offer and the entry permit are still the check. A poster, a WhatsApp broadcast and a cousin who knows a PRO are not.",
      },
    ],
    five([
      {
        q: "Should I pay an agent in Pakistan for a Dubai job?",
        a: "A licensed Overseas Employment Promoter may charge the fee the Bureau of Emigration publishes. A demand for a large cash amount, especially into a personal account, before any offer you can verify is a stop sign. Check the licence on beoe.gov.pk. Ask MOHRE before you pay an employer or agent for recruitment. The person asking for the money is not the authority.",
      },
      {
        q: "Is a Word or PDF offer letter enough?",
        a: "No. An editable file is easy to fake. You want a company you can look up by its licence name, and later a contract in the MOHRE channel or the free-zone system that employer actually uses. If the only copy is a scan on WhatsApp, ask for the official screen.",
      },
      {
        q: "Can I go on a visit visa and search for work?",
        a: "A visit visa is not permission to work. Working on it is a risk. Changing status inside the UAE, where it is allowed, is a formal application by a real employer. It is not guaranteed, and it is not a favour an agent can promise. Read the visit-versus-work guide before you buy the ticket.",
      },
      {
        q: "Who pays the UAE work visa cost?",
        a: "Government fees exist. Who must pay them is a MOHRE question, and the answer depends on the rule in force, not on a voice note. Do not transfer a security deposit to a personal account. Get the position from MOHRE, and keep any receipt that separates a typing-centre service charge from a government fee.",
      },
      {
        q: "When should I resign from my job in Pakistan?",
        a: "After you can see an entry permit in your name and you have checked it on ICP or GDRFA Dubai. An offer in a chat is not that permit. Leave enough time for the Protector step if you are going for employment. Anyone who tells you to resign tonight so the visa is not wasted is rushing you on purpose.",
      },
      {
        q: "Where do I complain if the job was fake?",
        a: "In Pakistan, the Bureau of Emigration if a promoter was involved, and the FIA for fraud. Keep the receipt, the chat and the passport copy. In the UAE, MOHRE is the labour office once you are in their system. Immigration questions on the file itself go to ICP or GDRFA Dubai.",
      },
    ]),
    [S.mohre, S.beoe, S.fia, S.icp, S.gdrfa, familyResidence],
  ),

  "uae-visit-visa-vs-work-visa": art(
    [
      {
        t: "p",
        text: "A UAE visit visa and a UAE work visa are not the same document, and Pakistanis need the right one before they fly. A visit visa lets you enter for a visit. A work visa is tied to a job and a sponsoring employer. Working on a visit visa is a risk. Work permission goes through the employer and MOHRE, not through a typing centre that offers to adjust the stamp later. Apna Ghar will not invent the visit visa fee. The figure that counts is the one on the ICP or GDRFA Dubai payment page for the product you open.",
      },
      {
        t: "h2",
        id: "difference",
        text: "Visit visa and work visa, side by side",
      },
      {
        t: "ul",
        items: [
          "Visit: tourism, a family visit, or a short business trip. You cannot take a job on it. The longer note is the [[/guides/uae-visit-visa-for-pakistanis|UAE visit visa for Pakistanis]] guide.",
          "Work: the employer gets a work permit. For most private-sector jobs outside free zones that permit is through MOHRE. You then get a residence path, an Emirates ID and a labour contract. See [[/guides/uae-work-visa-pakistan|UAE work visa from Pakistan]].",
          "A visit can be arranged by a resident relative, a hotel or airline package, or another channel the official site currently allows. A job offer does not turn a visit stamp into a work permit.",
          "Status change, where the authorities allow it, is a formal application. It is not a favour, and it is not guaranteed because you already bought a ticket.",
          "An Emirates ID and a MOHRE contract belong to residence and employment. A visit entry permit does not give you those.",
          "Gratuity is an end-of-service question for people on an employment contract. It does not apply to a tourist stay. The [[/guides/uae-gratuity-rules|gratuity rules]] and the [[/tools/gratuity-calculator|gratuity calculator]] are for that employment contract only.",
        ],
      },
      {
        t: "h2",
        id: "risk",
        text: "Why working on a visit visa is a risk",
      },
      {
        t: "p",
        text: "Employers who say come on a visit and we will fix the work visa after salary day are asking you to work without permission. If the status change is refused, you have already spent the ticket and you may be out of status. Penalties for the wrong status are set by the authorities. This page does not copy a fine from a group chat. Read the current visit rules on ICP and GDRFA Dubai, and the work path on MOHRE, before you accept that plan.",
      },
      {
        t: "ol",
        items: [
          "Ask the employer for the company legal name and where the work permit will be filed. If they cannot answer, they are not ready to hire you.",
          "[[/guides/check-uae-visa-status|Check the file yourself]] with your passport number. A screenshot sent by an agent can be edited. Approved in a chat is not an entry permit.",
          "Do not hand anyone your one-time password, and do not leave your passport with a shop that says it will watch the system for you.",
          "If you are already inside the UAE on a visit and a real company wants to hire you, the company asks ICP or GDRFA whether your file can change status. You do not pay a stranger to know someone in the office.",
          "Keep the dates on the entry permit. Overstaying is a separate problem from working. The overstay penalty is on the official page, and it changes. Read it there when you need the number.",
        ],
      },
      {
        t: "h2",
        id: "family",
        text: "Family visit is not family residence",
      },
      {
        t: "p",
        text: "A family visit lets relatives come for a visit if that product is open to them. A family residence visa lets them live with you, and it has a salary test. Checked on 9 October 2026, the u.ae family residence page, updated on that site on 28 September 2026, says the sponsor needs AED 4,000 a month, or AED 3,000 plus accommodation, for a spouse, unmarried daughters, sons under 25, and children with special needs. That is the spouse and child rule. Parent sponsorship in Dubai is a separate, higher emirate rule. Do not use the spouse figure as a parent figure, and do not convert it into rupees and call the rupee number the rule. Read [[/guides/family-visa-uae-salary-requirement|family sponsorship]] and read GDRFA Dubai for a parent file.",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: the AED 4,000, or AED 3,000 plus accommodation, line is the spouse and child rule on the u.ae family residence page. No visit visa fee and no overstay fine is copied here, because those amounts are the ones on the ICP or GDRFA screen for your file.",
      },
      {
        t: "p",
        text: "If you are comparing a job that would support a family later, put the basic salary from the written offer into the [[/tools/salary-converter|salary converter]] and look at [[/rates/aed-to-pkr|AED to PKR]] only as a reference. A visit plan and a residence plan are different budgets. The visit fee, whatever the screen shows that day, is not a down payment on a work permit.",
      },
    ],
    five([
      {
        q: "Can I work in Dubai on a visit visa?",
        a: "No. Employment needs a work permit and a residence sponsored by the employer. A hotel, a shop or a delivery app telling you to start tomorrow on a visit stamp is not permission. MOHRE is the labour authority for most private-sector jobs. Free zones use their own system, which is still an official file, not a verbal okay.",
      },
      {
        q: "Can a visit visa be converted to a work visa?",
        a: "Sometimes a status change is possible inside the country. It is an official application by the employer, and the authority can refuse it. Ask ICP or GDRFA Dubai whether your file allows it before you resign a job at home or overstay. An agent who guarantees the change for an extra fee is selling a result they do not control.",
      },
      {
        q: "Which visa should my family apply for?",
        a: "If they are coming for a short stay, it is a visit product. If they are coming to live with you, it is family residence, and the sponsor's salary has to meet the u.ae rule for a spouse and children. Parents in Dubai are a different GDRFA file. Do not assume one approval covers every relative.",
      },
      {
        q: "What is the visit visa fee for Pakistanis?",
        a: "ICP and GDRFA Dubai show the fee for the product you choose, on the day you pay. It is not one number for the whole year, and this guide does not invent one. A typing centre may add a service charge. Ask for that charge on a receipt, separate from the government fee.",
      },
      {
        q: "How do I see if my visa is real?",
        a: "Check it yourself on ICP, and on GDRFA Dubai if the sponsor or the airline said the file is Dubai. Use your passport number and nationality. Save the result on your own phone. The status guide walks through the screens.",
      },
      {
        q: "Does a work visa mean I can sponsor my parents immediately?",
        a: "No. Even a spouse and children depend on the salary line above, plus the documents on the family form. Parents are not that form. Read GDRFA Dubai for a parent file and do not budget from a WhatsApp minimum.",
      },
    ]),
    [S.icp, S.gdrfa, S.mohre, familyResidence],
  ),

  "saudi-iqama-guide": art(
    [
      {
        t: "p",
        text: "A Saudi Iqama is the residence permit for a Pakistani worker who is living in the Kingdom under a sponsor. It is not the visa that was stamped or issued while you were in Pakistan, and it is not optional once you are a resident. The Iqama number, the expiry date and the profession on the card are the details that decide whether you can work, leave and come back legally. Renewal is the employer's job on Absher and Muqeem. You should still be able to see the expiry yourself.",
      },
      {
        t: "h2",
        id: "what",
        text: "What you should know in the first month",
      },
      {
        t: "ul",
        items: [
          "Your employer usually applies for the Iqama after you arrive and after the in-Kingdom steps they are told to finish. Until that card exists, keep the entry visa details and every medical receipt.",
          "The visa got you in. The Iqama is the residence record. They are not the same number. Keep both. If a recruiter in Pakistan shows you an Iqama photocopy before you have travelled, treat that as a reason to [[/guides/fake-saudi-visa-check|verify the visa]], not as proof of a job.",
          "You work for the sponsor named on the Iqama unless a legal transfer is finished. A side job for cash is how people lose the permit. Profession changes are a formal step, not a verbal agreement with a supervisor.",
          "You can see a lot of your own file on Absher. Establishments use Muqeem. Labour questions sit with HRSD and Qiwa. Do not hand your Absher one-time password to a stranger, a shop, or even the company PRO. The PRO has Muqeem.",
          "Dependents, if you sponsor them, have their own Iqamas and their own expiry dates. Your renewal does not silently extend theirs.",
          "Exit and re-entry is a different transaction from renewal, and a final exit is different again. If HR says you are on an exit, ask which kind, and read the status on Absher before you book leave.",
        ],
      },
      {
        t: "h2",
        id: "fees",
        text: "The fees people ask about, without a fake table",
      },
      {
        t: "p",
        text: "People want one number: the Iqama fee. There isn't a single figure this page can honestly print, because the bill is not one line and the amounts move. When the employer opens renewal, the payment screen on Absher or Muqeem is the bill that counts. The lines residents and employers argue about are separate: the residency renewal fee, the employer work-permit levy, and a monthly dependent levy. Late fines also show on that screen. Checked on 9 October 2026: Apna Ghar does not copy a WhatsApp fee table, and it will not say the fee is SAR anything as if someone had opened Absher for your file today.",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: this page does not copy a WhatsApp fee table. The residency renewal fee, the employer work-permit levy and the monthly dependent levy are separate lines. The figures on the Absher or Muqeem payment screen are the ones that count. Late fines show there too.",
      },
      {
        t: "p",
        text: "In a normal employment case the employer handles the residence renewal. If someone asks you for cash, read your contract and ask HRSD before you pay. Who is charged for a dependent is also a screen-and-contract question, not a camp proverb. Put only the wage written in your contract into the [[/tools/salary-converter|salary converter]], and use [[/rates/sar-to-pkr|SAR to PKR]] as a mid-market reference when you tell the family what you can send. Do not invent an average Saudi salary and plan a life on it.",
      },
      {
        t: "h2",
        id: "absher",
        text: "Absher, expiry and what to do if the date is close",
      },
      {
        t: "ol",
        items: [
          "Open Absher and sign in as yourself. The code comes to your phone. Nobody else needs it. Read the expiry in the residency section. Note both the Hijri and the Gregorian date and keep your own screenshot.",
          "If you cannot sign up, fix that through Absher's own process while the Iqama is still valid. Do not give your passport to a shop that will check Absher for you.",
          "Tell the company's government relations officer weeks before the date, not on the morning it expires. Renewal steps are in [[/guides/iqama-renewal|Iqama renewal]]. How to read the date is in [[/guides/check-iqama-status|check Iqama status]].",
          "Medical insurance for residents is part of staying legal. Ask HR which policy covers you and when it ends. A blocked renewal is often an insurance or passport problem, not a mystery.",
          "If Absher and the plastic card disagree, believe the online file and ask the employer to explain the difference in writing.",
        ],
      },
      {
        t: "p",
        text: "The path into the Kingdom for a new worker is the [[/guides/saudi-work-visa-pakistan|Saudi work visa from Pakistan]]: a real offer, the Wafid medical when the visa requires it, the Protector stamp, then the visa. The Iqama starts after you land. A visit visa never turns into an Iqama because a supervisor says you are hired.",
      },
    ],
    five([
      {
        q: "Who pays for the Iqama?",
        a: "In a normal employment case the employer handles the residence fees through Absher or Muqeem. If a person asks you for cash, ask HRSD or read the contract before you pay. The bill can show separate lines, including the residency renewal fee, the employer work-permit levy and a monthly dependent levy. The amount on the payment screen is the one that counts.",
      },
      {
        q: "What happens if my Iqama expires?",
        a: "You can face a fine and trouble working or leaving. The late fine is shown in the official service when the renewal is opened. It has been revised before, so a figure forwarded on WhatsApp is not reliable. Tell your employer before the date, and watch Absher yourself.",
      },
      {
        q: "Can I check the Iqama without my sponsor?",
        a: "Workers use Absher for their own residency enquiry, including the expiry. You do not need to share the one-time password with the sponsor to do that. If you cannot log in, sort that out before the expiry, not after. Muqeem is the establishment portal. You can ask HR to show you that screen.",
      },
      {
        q: "Is the Iqama number the same as the visa number?",
        a: "No. Keep both. The visa got you in. The Iqama is the residence record after arrival. A photocopy of either document, sent by a recruiter before you have left Pakistan, is not a live status.",
      },
      {
        q: "Does paying the renewal move me to a new sponsor?",
        a: "No. A transfer is a different transaction. Do not let anyone tell you that paying the renewal yourself, or paying a broker, changes the company on the Iqama. Sponsorship transfer sits with the labour and residence systems, and it is finished only when those systems say so.",
      },
      {
        q: "Where is the rule written?",
        a: "Residence practice sits with Absher and Muqeem. Work rules sit with HRSD and Qiwa. Read those sites rather than a camp summary. Checked on 9 October 2026, this guide still refuses to reprint a fee table.",
      },
    ]),
    [S.absher, S.muqeem, S.hrsd, S.qiwa],
  ),

  "uae-visit-visa-for-pakistanis": art(
    [
      {
        t: "p",
        text: "A UAE visit visa for Pakistanis in 2026 is something you arrange before you travel. A Pakistani passport is not part of a visa-free arrangement with the UAE. The product you need might be a tourist visit, a family visit, or another short entry the official site is selling that week. The fee is not printed here, because ICP and GDRFA Dubai show it on the payment page for that product, and it changes. Working on a visit visa is a risk. If the plan is a job, you need a work permit, not a visit stamp with a promise attached.",
      },
      {
        t: "h2",
        id: "apply",
        text: "How to apply without guessing the fee",
      },
      {
        t: "ol",
        items: [
          "Decide who is sponsoring the visit: a resident relative, a hotel or airline package, or another channel ICP or GDRFA currently allows. An agent who cannot show you that official page is not a sponsor.",
          "Read the passport rule on the form you are actually filling. People repeat six months of validity as if it were a law of nature. It is common. It is not a promise. The form also says how many blank pages and what photo it wants.",
          "If the form asks for health insurance, buy the policy the form names. A random PDF from the agent is not insurance.",
          "Pay the amount shown on the official payment page. A typing centre may add a service charge. Ask for it on a receipt, separate from the government fee. Do not add a third amount called urgent that nobody can receipt.",
          "Each person needs their own permission. A parent's approval does not silently cover a child. Check every name against the passport, including the order of surnames.",
          "When the file is approved you receive an entry permit. That is what you show the airline. [[/guides/check-uae-visa-status|Check the status yourself]] before you buy a non-refundable ticket.",
        ],
      },
      {
        t: "h2",
        id: "which",
        text: "Dubai files, other emirates, and overstay",
      },
      {
        t: "p",
        text: "Dubai-issued files are handled by GDRFA Dubai. Other emirates often go through ICP. If you are unsure which desk issued the file, check both with your passport number before you panic or pay a third party. A blank result can mean there is no file yet. That is useful. It means you should not fly.",
      },
      {
        t: "ul",
        items: [
          "The entry permit states how long you may stay and whether it is single or multiple entry. Read those lines before you book a return two months later.",
          "Overstaying has a penalty. The daily or other figure must be read on ICP or GDRFA when you need it. This guide will not guess it, and a comment under a video is not the law.",
          "Extension, where it exists, is an official service for that file. It is not automatic because your flight was cancelled. Ask the authority that issued the permit.",
          "A screenshot from an agent can be edited. Save the result on your own phone. Do not give a one-time password to the person who offered to watch the file.",
          "Use [[/rates/aed-to-pkr|AED to PKR]] only to understand prices once you are actually travelling. Look the visa up on ICP or GDRFA yourself. A demand for dirhams just to see a page you can open is a warning, not a government fee.",
        ],
      },
      {
        t: "h2",
        id: "family",
        text: "Family visit, tourist visit, and family residence",
      },
      {
        t: "p",
        text: "A family visit is still a visit. Family residence is a different visa, with a salary test for the sponsor. Checked on 9 October 2026, the u.ae family residence page, updated on 28 September 2026, says the sponsor needs AED 4,000 a month, or AED 3,000 plus accommodation, for a spouse, unmarried daughters, sons under 25, and children with special needs. Do not use that line to guess a parent file. Parent sponsorship in Dubai is a separate, higher emirate rule, and this page states no dirham or rupee figure for parents. Read GDRFA Dubai, and read [[/guides/family-visa-uae-salary-requirement|family sponsorship]]. If someone says come on a visit and we will fix the work visa later, read [[/guides/uae-visit-visa-vs-work-visa|visit visa versus work visa]] before you pay.",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: no UAE visit visa fee is stated on Apna Ghar, because the official payment page is the source. The only dirham figure in this guide is the spouse and child residence rule on u.ae, not a visit price and not a parent price.",
      },
      {
        t: "p",
        text: "Tourist products sold by airlines and hotels are still visit products. Whether a Pakistani passport is eligible for the offer in the advert is a question for the official page linked from that airline, not for the poster in the travel shop. If the job is the real plan, start with [[/guides/uae-work-visa-pakistan|a work visa from Pakistan]] instead of dressing a visit up as employment.",
      },
    ],
    five([
      {
        q: "What is the UAE visit visa fee for Pakistanis?",
        a: "ICP and GDRFA Dubai show the current fee for the product you choose. It changes. Copy it from their screen on the day you apply. A typing centre's service charge, if you use one, should be a separate receipt. Ignore round numbers from a shop that will not open the official page with you.",
      },
      {
        q: "Can I apply without a sponsor?",
        a: "Some tourist products are sold through airlines, hotels and the official channels those companies use. Whether your passport is eligible is on that official site on the day you apply. Do not pay an agent who cannot show the page. A resident relative is the usual route for a family visit, and the relationship is checked.",
      },
      {
        q: "How long can I stay?",
        a: "The entry permit states the length and the number of entries. Do not plan the stay from a WhatsApp voice note. Overstaying has a fine. Read the fine on ICP or GDRFA, not in a comment. If you need longer, ask whether that file can be extended before the date, not after.",
      },
      {
        q: "Which site is for Dubai?",
        a: "Dubai-issued residence and entry files are handled by GDRFA Dubai. Other emirates often go through ICP, the federal authority. If one site is blank, try the other with the same passport number before you pay anyone to interpret the blank page.",
      },
      {
        q: "What documents are usually asked for?",
        a: "A passport copy, a photo, and sometimes proof of the relationship, a hotel booking, or insurance. The checklist on the application is the list that matters. Passport validity is whatever that form requires on the day. Take the passport you will fly with, not an old booklet.",
      },
      {
        q: "Can I work after I enter on this visa?",
        a: "No. A visit is not a job. Work permission is through the employer and MOHRE, or the free-zone system that employer uses. Status change is a formal application and it can be refused. Do not resign in Pakistan because an agent said the visit is basically a work visa.",
      },
    ]),
    [S.icp, S.gdrfa, S.mohre, familyResidence],
  ),

  "uae-work-visa-pakistan": art(
    [
      {
        t: "p",
        text: "You get a UAE work visa from Pakistan through an employer, not by buying a visa in a market. The company obtains a work permit and an entry permit. You complete the Pakistan-side steps for people going abroad to work, then finish the medical, biometrics and Emirates ID after you arrive. A visit visa is not a shortcut. Working on a visit visa is a risk, and work permission goes through the employer and MOHRE, or through the free-zone system that employer actually uses.",
      },
      {
        t: "h2",
        id: "steps",
        text: "Steps that should happen, in order",
      },
      {
        t: "ol",
        items: [
          "A named company offers you a job. Check the legal name before you celebrate. The checks are in [[/guides/genuine-dubai-job-from-pakistan|genuine Dubai jobs from Pakistan]] and [[/guides/fake-job-offer-dubai|fake offer letters]].",
          "The employer files the work permission. For most private-sector jobs outside free zones you should be able to see an offer or contract in the MOHRE channel, not only a PDF from an agent. A free-zone company uses that zone's system. Ask which one, and ask to see it.",
          "In Pakistan, employment cases go through the Bureau of Emigration and the Protector stamp. See [[/guides/protector-of-emigrants|the Protector guide]]. The Bureau publishes the fee on beoe.gov.pk. This page does not invent a Protector fee, and it does not add an urgent cash extra.",
          "If an agent is involved, check that they are a licensed Overseas Employment Promoter. See [[/guides/oep-licensed-agents|how to check an OEP]]. Direct employment, with no agent, still has a Bureau process. Read that instruction on the Bureau site rather than skipping the Protector because nobody took a commission.",
          "A pre-departure medical is required only when your papers say so. If those papers say Wafid, book it on the official portal and read [[/guides/gamca-medical-test|the Wafid page]]. The UAE also does a medical after arrival for residence. A fit slip from home is not the Emirates ID.",
          "You enter on the permit, do the in-country medical and biometrics, and receive the residence and Emirates ID. Keep copies. [[/guides/check-uae-visa-status|Check the entry permit]] yourself before you buy a non-refundable ticket.",
        ],
      },
      {
        t: "h2",
        id: "contract",
        text: "The contract, the wage and gratuity",
      },
      {
        t: "p",
        text: "Ask which figure is the basic salary and which figures are allowances. Gratuity later depends on the wage in that contract, not on a voice note about overtime. Estimate it with the [[/tools/gratuity-calculator|gratuity calculator]] and read the [[/guides/uae-gratuity-rules|UAE gratuity rules]]. Put the basic salary into the [[/tools/salary-converter|salary converter]] and use [[/rates/aed-to-pkr|AED to PKR]] only as a mid-market reference for the family. Do not plan on an average you saw in a video.",
      },
      {
        t: "ul",
        items: [
          "If the Arabic and English copies do not match, stop and ask the employer to show the offer in the official system.",
          "Do not transfer a security deposit to a personal account. Who pays government visa fees is a MOHRE question. Get that answer from MOHRE, not from the person requesting the transfer.",
          "A typing centre can charge a service fee. That fee belongs on its own receipt. It is not the government fee, and it is not a job.",
          "Your passport stays with you. If the company wants to hold it, ask MOHRE before you agree.",
          "Anyone who guarantees the visa date in exchange for an extra fee is selling certainty they do not have. Medical appointments and security checks slip.",
          "Resign in Pakistan after the entry permit is in your name and you have checked it. An offer in a chat is earlier than that.",
        ],
      },
      {
        t: "h2",
        id: "family",
        text: "Sponsoring family after you have residence",
      },
      {
        t: "p",
        text: "A work residence does not automatically bring your family. Checked on 9 October 2026, the u.ae family residence page, updated on 28 September 2026, says a sponsor needs AED 4,000 a month, or AED 3,000 plus accommodation, for a spouse, unmarried daughters, sons under 25, and children with special needs. Read [[/guides/family-visa-uae-salary-requirement|family sponsorship]] and compare that test with the basic salary and accommodation line in your own contract. Parent sponsorship in Dubai is a separate, higher emirate rule. This guide states no dirham or rupee figure for parents. Read GDRFA Dubai for a parent file.",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: the spouse and child salary line above is from the u.ae family residence page. No work-visa fee and no Protector fee is copied here. Those amounts are on MOHRE, ICP, GDRFA or the Bureau of Emigration when you open the relevant service.",
      },
      {
        t: "p",
        text: "After you are employed, renewal is a later job for the sponsor. The steps and the reason not to guess the late fine are in [[/guides/uae-visa-renewal|UAE visa renewal]]. If the company will not show you the labour contract inside the official system, you do not yet have the paper that gratuity and complaints depend on.",
      },
    ],
    five([
      {
        q: "Can I get a UAE work visa without a job offer?",
        a: "No. A work residence needs a sponsoring employer. A market stall, a typing centre or a relative's PRO cannot invent that sponsor. If you cannot name the company and see it in MOHRE or the free-zone system, you are not in the process yet.",
      },
      {
        q: "Do I need the Protector stamp?",
        a: "Pakistanis leaving for employment are expected to clear the Bureau of Emigration process, including the Protector step. Confirm your case on beoe.gov.pk and read the fee there. Do not pay a second cash amount for speed. A visit visa is a different matter and does not replace the Protector when the trip is for work.",
      },
      {
        q: "What does the work visa cost me?",
        a: "Government fees exist, and who pays them is a MOHRE question. This page does not print a fee, because the payment screen is the source and it changes. Do not send a security deposit to a personal account. A typing centre's own charge should be receipted separately.",
      },
      {
        q: "How long does it take?",
        a: "It varies with the company, the medical and the authority. Anyone who guarantees a date in exchange for an extra fee is not in control of the queue. Build in time for the Protector appointment in Pakistan and do not book a non-refundable flight on a WhatsApp promise.",
      },
      {
        q: "Where do I see the labour contract?",
        a: "In the MOHRE channel for a normal private-sector job, or in the free-zone system if that is the employer. If your only copy is a scan from WhatsApp, ask the employer to show it on the official screen. Compare the basic salary with what you were told.",
      },
      {
        q: "Can I start on a visit visa and convert later?",
        a: "Working on a visit visa is a risk. A status change, where it is allowed, is a formal employer application to ICP or GDRFA Dubai. It can be refused. Read the visit-versus-work guide before you fly on that plan.",
      },
    ]),
    [S.mohre, S.icp, S.gdrfa, S.beoe, familyResidence],
  ),

  "uae-visa-renewal": art(
    [
      {
        t: "p",
        text: "UAE residence visa renewal is usually started by the sponsor, your employer or the relative who sponsors you, before the visa expires. Leaving it late can mean a fine. The fine is published by ICP or GDRFA Dubai and it changes, so this guide does not print one. Emirates ID renewal often sits in the same season of paperwork. A husband's new visa does not automatically extend his wife's, and a renewed work visa does not silently renew a family member.",
      },
      {
        t: "h2",
        id: "renew",
        text: "Renewal steps and documents",
      },
      {
        t: "ul",
        items: [
          "[[/guides/check-uae-visa-status|Check the expiry]] on ICP or GDRFA Dubai several weeks ahead. Do not trust a reminder from an unknown number. Save the screen yourself.",
          "The sponsor files the renewal. You will typically need your passport, a photo, and a medical fitness test. Health insurance is part of many residence files. Ask who is buying the policy and which dates it covers.",
          "Follow the ICP message for Emirates ID. Biometrics are not optional when the authority asks for them. A typing centre can book slots. It cannot skip the medical.",
          "Passport validity can block a file. Read the validity the form asks for. Do not assume the old six-month habit is enough, and do not assume it is always required in that exact form.",
          "If you are changing jobs, do not assume the old visa will roll forward. A new permit is a new file. After a visa is cancelled there is a limited time to change status or leave. The number of days is on ICP, GDRFA or MOHRE for your case. A camp rumour is not that number.",
          "Keep copies of the passport, the previous visa, the labour contract and the insurance card. If the company holds the only set, you cannot complain with evidence.",
        ],
      },
      {
        t: "h2",
        id: "cost",
        text: "Cost, the late fine, and who to ask",
      },
      {
        t: "p",
        text: "The government fee depends on the file. Read it on ICP or GDRFA when the sponsor opens the application. Typing centres add their own charge, which should be on a separate receipt. There is a penalty for overstay or late residence. This page will not guess the daily or monthly figure. Open the official calculator or the payment screen for your file and copy that number on the day you need it.",
      },
      {
        t: "ol",
        items: [
          "Ask the sponsor, in a message you can keep, when they will open the renewal. Polite and early is better than a fight on the last day.",
          "If the company will not renew, speak to MOHRE about the labour side and to ICP or GDRFA about the immigration file. Take the contract and the passport copy.",
          "Do not pay a stranger who says they can remove a fine from the system. Fines are paid through the authority, and the amount is on that screen.",
          "If you are outside the UAE, do not assume you can renew from Pakistan or walk back in on an expired residence. Ask ICP or GDRFA about that particular file before you buy a ticket.",
          "A status that says cancelled is not a status that says renewed. Read the words on the official page. If you do not understand them, use the authority's own help line rather than a paid translator of screenshots.",
        ],
      },
      {
        t: "h2",
        id: "family",
        text: "Family visas and the salary rule",
      },
      {
        t: "p",
        text: "Each family member has an expiry date. Renew them on those dates. If a family file is refused, check whether the sponsor still meets the residence rule. Checked on 9 October 2026, the u.ae family residence page, updated on 28 September 2026, says the sponsor needs AED 4,000 a month, or AED 3,000 plus accommodation, for a spouse, unmarried daughters, sons under 25, and children with special needs. Read [[/guides/family-visa-uae-salary-requirement|family sponsorship]] and compare it with the wage in the contract, using the [[/tools/salary-converter|salary converter]] so allowances are not mixed up with basic pay. Parent sponsorship in Dubai is a separate, higher emirate rule. Do not quote the spouse figure as a parent figure. Read GDRFA Dubai for parents.",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: the only salary figure in this renewal guide is the spouse and child line on the u.ae family page. The renewal fee and the late fine are whatever ICP or GDRFA show for your file that day.",
      },
      {
        t: "p",
        text: "If you are deciding whether to renew or to leave, gratuity is a separate sum from the visa fee. Read the [[/guides/uae-gratuity-rules|gratuity rules]] and run the contract wage through the [[/tools/gratuity-calculator|gratuity calculator]]. That estimate is not a MOHRE ruling. [[/rates/aed-to-pkr|AED to PKR]] is only a reference for what the dirhams mean in rupees.",
      },
    ],
    five([
      {
        q: "What is the cost of UAE visa renewal?",
        a: "The government fee depends on the visa type and the length. Read it on ICP or GDRFA Dubai when the sponsor opens the application. Typing centres add their own charge. Ask for two numbers on paper: the government fee and the service charge. This guide does not print a package price.",
      },
      {
        q: "How early should we start?",
        a: "Start weeks before expiry, not the day before a flight. Medical appointments, insurance and passport validity all slip. Checking the date yourself means you are not relying on a PRO's memory.",
      },
      {
        q: "What is the late fine?",
        a: "There is a penalty for staying after the residence ends. The figure must be read on ICP or GDRFA for your file. It changes, and group chats mix old daily rates with new ones. Pay through the official screen, not through a person who claims to know an officer.",
      },
      {
        q: "Can I renew from Pakistan?",
        a: "Residence renewal is normally done while the file is live. If you are outside the country, ask ICP or GDRFA about your particular file before you assume you can re-enter. An expired residence is not a small paperwork task you can fix at the airport desk with cash.",
      },
      {
        q: "Who do I call if the company will not renew?",
        a: "MOHRE for a labour dispute, and ICP or GDRFA for the immigration file. Keep your contract, passport copies and any message in which the company refused. Do not sign a cancellation you do not understand.",
      },
      {
        q: "Does my renewal cover my wife and children?",
        a: "No. Family visas have their own dates and their own applications. The sponsor still has to meet the family salary rule for a spouse and children. Parents are a different Dubai file. Read GDRFA Dubai rather than reusing the spouse figure.",
      },
    ]),
    [S.icp, S.gdrfa, S.mohre, familyResidence],
  ),

  "check-uae-visa-status": art(
    [
      {
        t: "p",
        text: "You can check a UAE visa status online with your passport number on the official ICP service, and on GDRFA Dubai if the file was issued in Dubai. You do not need to pay a stranger to see the system. Any charge that is not on the ICP or GDRFA page is not a government status fee. A demand for money, an OTP, or your passport kept overnight is the warning, not the service. Pakistani applicants should do this check before they buy a non-refundable ticket, and again if an agent sends a screenshot that looks a little too neat.",
      },
      {
        t: "h2",
        id: "how",
        text: "How to check, without handing over the OTP",
      },
      {
        t: "ol",
        items: [
          "Open ICP at icp.gov.ae and look for visa status or file validity. Have the passport number and nationality ready. Select Pakistan if the form asks for a country. Use the passport you applied with.",
          "If the sponsor, the airline or the typing centre said the file is Dubai, also try GDRFA Dubai at gdrfad.gov.ae. ICP is the federal authority. GDRFA handles many Dubai-issued residence and entry files. If one site is blank, try the other before you panic.",
          "Match the name letter by letter with the passport. A missing space, an extra surname, or Muhammad spelled a different way is a common miss. If you renewed the passport, try the number that was on the application as well as the new number.",
          "If the form asks for a file number or an application number, copy it from the email or the entry permit. Do not guess.",
          "Save the result yourself. A screenshot sent by an agent can be edited. They can sit with you while you check. They do not need your one-time password, and they do not need to keep the passport.",
          "If the site is down, try again later or use the authority's own app if they offer one. Do not pay a third party who claims to have a private login.",
        ],
      },
      {
        t: "h2",
        id: "meaning",
        text: "What the result means before you fly",
      },
      {
        t: "p",
        text: "If the status says nothing, you may not have a file yet. That is useful information. It means you should not book a non-refundable ticket and you should not resign. See [[/guides/fake-job-offer-dubai|fake offer letters]] if the only proof of the job was a PDF. Approved in a chat is not the same as an entry permit the airline will accept. Read the dates on the permit: when it was issued, when you must enter, and how long you may stay.",
      },
      {
        t: "ul",
        items: [
          "An old cancelled file can still appear. Read the dates and the status word. The latest entry permit, with dates that cover your flight, is the one that matters.",
          "Cancelled, expired, used and under process are different words. If you do not understand the word on the screen, use the authority's explanation. Do not pay someone to translate a screenshot.",
          "A visit file and a residence file are different. [[/guides/uae-visit-visa-vs-work-visa|Visit versus work]] explains why a visit approval is not permission to start a job.",
          "For a renewal, check the new expiry after the sponsor says it is done. The old date remaining on the screen means it is not done. See [[/guides/uae-visa-renewal|UAE visa renewal]].",
          "Family members are separate files. A husband's approved status does not prove his wife's. Check each passport.",
          "Once you are actually employed, use the [[/tools/salary-converter|salary converter]] and [[/rates/aed-to-pkr|AED to PKR]] for the wage in the contract. Do not use those tools to justify paying a shop to read a screen you can open on ICP or GDRFA.",
        ],
      },
      {
        t: "h2",
        id: "agent",
        text: "When an agent insists on checking it for you",
      },
      {
        t: "p",
        text: "Let them watch. Type the passport number yourself. If they ask for the OTP, refuse. That code is a login. Sending it is how accounts are taken over. If they ask you to transfer dirhams so their man inside can see a file the public page already shows, stop. The complaint path, if you already paid, is in [[/guides/report-visa-fraud-fia|how to report visa fraud]] and, where a promoter's licence is involved, the Bureau of Emigration.",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: ICP and GDRFA Dubai are still the places to read a UAE visa file. Apna Ghar is not stating a status-check fee, a visit fee, or an overstay fine. Those amounts, when they exist, are on the official payment screen.",
      },
      {
        t: "p",
        text: "Parents, spouses and children sponsored for residence are easy to mix up with visit files. If you are checking a family residence, the salary rule is a different question from the status screen. Checked on 9 October 2026, u.ae still publishes AED 4,000 a month, or AED 3,000 plus accommodation, for a spouse, unmarried daughters, sons under 25, and children with special needs. That is not a parent figure. Parent files in Dubai are read on GDRFA Dubai, and this page states no dirham or rupee amount for them. The residence rule itself is explained in [[/guides/family-visa-uae-salary-requirement|family sponsorship]].",
      },
    ],
    five([
      {
        q: "Is a passport number enough?",
        a: "Often yes, together with nationality and sometimes a file or application number. The form tells you which fields are required. If the passport was renewed after the application, try the number printed on the application. Match the name to the passport, including spaces.",
      },
      {
        q: "Why do ICP and GDRFA both exist?",
        a: "ICP is the federal authority for identity, citizenship and many visas. GDRFA Dubai handles many Dubai-issued residence and entry files. If one site is blank, try the other before you assume the visa is fake or cancelled.",
      },
      {
        q: "Can my agent check it for me?",
        a: "They can sit with you while you check it. Do not give them your one-time password or your passport to keep. A screenshot they send later can be edited. The result on the official site, saved by you, is the one to trust.",
      },
      {
        q: "The status says approved. Can I fly?",
        a: "Take the entry permit the airline will ask for, and read the dates on it. Approved in a chat is not the same as an entry permit in your email or on the official screen. Check that the name matches the passport you will carry.",
      },
      {
        q: "The site is down. What then?",
        a: "Try again later, or use the authority's app if they offer one. Do not pay a third party who claims to have a private login. A short outage is not a reason to hand over the OTP.",
      },
      {
        q: "The page is blank. Does that mean the visa is refused?",
        a: "Not always. It can mean the file was never opened, the file is with the other authority, or the passport number is wrong. Try ICP and GDRFA, check the spelling, and only then treat a missing file as a reason not to fly. See the fake-offer guide if someone already took a fee.",
      },
    ]),
    [S.icp, S.gdrfa, S.uae, familyResidence],
  ),

  "saudi-visit-visa-for-pakistanis": art(
    [
      {
        t: "p",
        text: "A Saudi visit visa for Pakistanis is usually a family visit, a business visit, or a tourist visa if the official site currently accepts Pakistani passports. Those are three different applications, with different sponsors and different fees. Eligibility for the tourist e-visa has not been the same for every nationality, so check visa.visitsaudi.com yourself before you pay anyone. Apna Ghar will not print a visit fee. The number on the official application is the one that counts.",
      },
      {
        t: "h2",
        id: "types",
        text: "Family, business and tourist",
      },
      {
        t: "ul",
        items: [
          "Family visit: a resident in the Kingdom normally sponsors relatives. The relationship and the sponsor's status are checked. Any salary minimum is an official rule on the Saudi portal. It has moved before. Read it there. Do not borrow a UAE dirham figure and pretend it is a Saudi riyal rule.",
          "Business visit: a Saudi company invites you. You should be able to name that company and say why you are going. A shop in Pakistan cannot be the inviting company.",
          "Tourist: only if visa.visitsaudi.com offers it for a Pakistani passport on the day you apply. A poster in a travel shop is not the offer. If the site says your passport is not eligible, no agent can honestly sell you that e-visa.",
          "An agent in Pakistan cannot sponsor you. The sponsor is the resident relative or the Saudi company, depending on the product.",
          "Each person, including children, needs their own visa. Do not assume a parent's approval covers a child.",
          "Work is not any of these products. A job needs a work visa and, after arrival, an Iqama. See [[/guides/saudi-work-visa-pakistan|Saudi work visa from Pakistan]] and the [[/guides/saudi-iqama-guide|Iqama guide]].",
        ],
      },
      {
        t: "h2",
        id: "apply",
        text: "How to apply, what to pay, and what to read on the visa",
      },
      {
        t: "ol",
        items: [
          "Open the official page for the product you actually want. For tourism that is visa.visitsaudi.com. For a family or business visit, use the channel the Saudi portal gives the sponsor. If the agent will not open that page, stop.",
          "Read passport validity, photo rules and insurance on the form. Do not trust a six-month rule you heard in 2019 if the form in front of you says something else.",
          "Pay the fee shown in the official application. Copy it from there. A service charge by a licensed travel agent, if you choose to use one, should be a separate receipt. A second cash amount called urgent is not a government fee.",
          "When the visa arrives, read the duration and whether it is single or multiple entry before you book a return. The visa states those lines. A voice note does not.",
          "Verify the number. [[/guides/fake-saudi-visa-check|How to verify a Saudi visa]] explains why a PDF is not enough. The Ministry of Foreign Affairs is the reference for visa policy.",
          "The resident sponsor can see much of their own residence file on Absher. That does not mean you should share an Absher one-time password. The visitor still checks the visa on the official enquiry.",
        ],
      },
      {
        t: "h2",
        id: "after",
        text: "Umrah, overstay, and what a visit does not allow",
      },
      {
        t: "p",
        text: "Pilgrim rules are separate and seasonal. Check Nusuk and the conditions printed on the visa. Do not assume every family visit includes Umrah, and do not assume a tourist visa is a work permit because you have a relative with a shop. Overstaying has a penalty. The amount is on the official system when it applies. This page does not copy a fine from a group chat.",
      },
      {
        t: "ul",
        items: [
          "You cannot take a job on a visit visa. A supervisor who says the Iqama will be fixed next month is not the Ministry of Interior.",
          "If the purpose is employment, stop and follow the work path: a real offer, Wafid when the visa instructions require it, the Protector in Pakistan, then a work visa you can verify.",
          "Use [[/rates/sar-to-pkr|SAR to PKR]] only to understand prices for a genuine trip. It is a mid-market reference, not a reason to pay an agent more than the official visa screen.",
          "If you already live in the Kingdom and you are the sponsor, your own Iqama has to be valid. Check the expiry on Absher before you promise dates to your parents. See [[/guides/check-iqama-status|check Iqama status]]. Do not send anyone your Absher code so they can look for you.",
          "Keep a copy of the invitation, the relationship papers the form asked for, and the payment receipt. If the agent disappears, those are what you have.",
        ],
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: this guide does not state a Saudi visit visa fee, a family-visit salary minimum, or an overstay fine. Family, business and tourist products are different. Read visa.visitsaudi.com for the tourist product, and the official application for the fee on the day you pay.",
      },
      {
        t: "p",
        text: "A family visit is also not the same thing as sponsoring relatives onto your Iqama. Residence for dependents has its own levy lines, explained without a fake riyal table in the [[/guides/iqama-renewal|Iqama renewal]] guide. If someone mixes a two-week visit with a resident dependent fee, ask which product they are actually selling.",
      },
    ],
    five([
      {
        q: "Can Pakistanis get a Saudi tourist e-visa?",
        a: "Only if the official Visit Saudi visa site lists Pakistani passports as eligible on the day you apply. Check visa.visitsaudi.com. Do not rely on this page for a yes or no that can change, and do not pay a shop that contradicts the site.",
      },
      {
        q: "What is the family visit fee?",
        a: "The fee is shown in the official application. Copy it from there. It is not the tourist fee, and it is not a number from a WhatsApp poster. A travel agent's service charge, if any, should be receipted separately.",
      },
      {
        q: "How long can my parents stay?",
        a: "The visa states the duration and whether it is single or multiple entry. Read those lines before you book a return two months later. Any minimum salary for the sponsor is on the Saudi portal for that product. This guide does not invent one.",
      },
      {
        q: "Can I do Umrah on a family visit visa?",
        a: "Pilgrim rules are separate and seasonal. Check Nusuk and the conditions on the visa. Do not assume every visit visa includes Umrah, and do not buy an Umrah package until the visa type actually allows the trip you booked.",
      },
      {
        q: "Who sponsors a family visit?",
        a: "Usually the resident relative. An agent in Pakistan cannot sponsor you. The sponsor's Iqama should be valid. They check that on Absher with their own login. They should not ask you for a one-time password, and you should not ask them for theirs.",
      },
      {
        q: "Can I start a job on this visa?",
        a: "No. Family, business and tourist visits are not work visas. Work needs a work visa and, after you arrive, an Iqama under the sponsor. A promise to convert later is not permission to work.",
      },
    ]),
    [S.visitsaudi, S.mofa, S.absher, S.nusuk],
  ),

  "saudi-work-visa-pakistan": art(
    [
      {
        t: "p",
        text: "A Saudi work visa from Pakistan runs through an employer in the Kingdom and through Pakistani emigration checks. The usual order is a real offer, a Wafid medical when the visa instructions require it, the Protector of Emigrants, and a visa you can verify before you fly. After you land, the employer starts the Iqama. Do not resign, and do not pay a personal account, until those pieces exist. A visit visa is not a way to start the job.",
      },
      {
        t: "h2",
        id: "process",
        text: "Process, medical and Protector",
      },
      {
        t: "ol",
        items: [
          "Confirm the employer. A contract you cannot match to a real establishment is not a job. Ask for the establishment name in Arabic and English and compare it with the visa later. If the visa names a different profession from the job you were promised, stop and ask why.",
          "Book the medical on Wafid if the visa instructions require it. The appointment page is wafid.com/book-appointment. Use the passport you will travel on, and choose Saudi Arabia if that is where you are going. A slip for the wrong country is wasted. Read [[/guides/gamca-medical-test|GAMCA / Wafid]] before you pay a clinic that promises to arrange it on WhatsApp.",
          "Pay the fee shown on Wafid. That is the official appointment fee. This guide does not print a second medical price. If a clinic asks for a package that is not on the portal, stop and contact Wafid.",
          "Clear the Protector. See [[/guides/protector-of-emigrants|the Protector stamp]]. The Bureau of Emigration publishes the fee on beoe.gov.pk. Do not invent a number, and do not add a cash urgent fee. Direct employment, with no agent, still has a Bureau process.",
          "If an agent is involved, look up the Overseas Employment Promoter licence. [[/guides/oep-licensed-agents|How to check an OEP]]. An unlicensed shop is not allowed to send you.",
          "Check the visa number on the official enquiry before you buy the ticket. See [[/guides/fake-saudi-visa-check|verify a Saudi visa]]. A PDF that never appears on the enquiry is not a visa.",
          "On arrival the employer handles the residence steps. Your guide to the card itself is [[/guides/saudi-iqama-guide|the Iqama guide]]. Until the Iqama exists, keep the visa, the medical receipt and the Protector papers.",
        ],
      },
      {
        t: "h2",
        id: "before",
        text: "What to check before you resign",
      },
      {
        t: "ul",
        items: [
          "Put only the wage written in the contract into the [[/tools/salary-converter|salary converter]]. Overtime in a speech is not pay. Use [[/rates/sar-to-pkr|SAR to PKR]] as a mid-market reference so the family can see the wage in rupees. Do not plan on an average salary from a video.",
          "Ask who pays the ticket and who pays the visa charges. Get that in the contract or in a message. A demand to transfer a security deposit to a personal account is a stop sign.",
          "The profession on the visa should match the work you were offered. A visa that says a different job is a different life. Ask the employer to correct it before you fly, not after.",
          "Fit and unfit are the words that matter on Wafid. The report has a validity window stated by the portal and the visa instruction. Do not assume it lasts a year.",
          "Keep photocopies. If the agent keeps the only originals, you are stuck at the airport and at the Protector office.",
          "Working after you enter on a visit visa is not this process. If that is the offer, refuse it. Residence after a real work visa is the Iqama, renewed later by the employer.",
        ],
      },
      {
        t: "h2",
        id: "after",
        text: "After you land",
      },
      {
        t: "p",
        text: "The employer applies for the Iqama. You should be able to see the expiry on Absher once the residence exists, without giving anyone your one-time password. Labour questions go to HRSD and Qiwa. Residence questions go to Absher and Muqeem. Renewal, including the separate lines people call fees, is explained in [[/guides/iqama-renewal|Iqama renewal]]. Checked on 9 October 2026, that bill is still not one SAR number this site can copy from a chat.",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: no Protector fee, no Wafid fee and no Saudi visa fee is printed here. Book the medical on the Wafid appointment page, read the Bureau of Emigration fee on beoe.gov.pk, and pay the visa amount on the official screen.",
      },
      {
        t: "p",
        text: "If the agent disappears after you have paid, keep the receipt and the chat. Complain to the Bureau of Emigration if they claimed to be a promoter, and read [[/guides/report-visa-fraud-fia|how to report fraud]] for the FIA path. A visa you cannot verify is not something to resign for.",
      },
    ],
    five([
      {
        q: "Do all Pakistani workers need a Wafid medical?",
        a: "Saudi work visas generally do. Book it on wafid.com/book-appointment with the passport you will travel on. If your papers say something else, follow the visa instruction, and still refuse a clinic that will not use Wafid when Wafid is required. Pay the fee the portal shows.",
      },
      {
        q: "What is the Protector fee?",
        a: "The Bureau of Emigration publishes it. Read beoe.gov.pk on the day you go. This guide does not copy a rupee figure, because the schedule is the source. Do not add a second urgent fee in cash, and do not pay it into a personal account.",
      },
      {
        q: "Can I go to Saudi on a visit visa and start the job?",
        a: "No. Work needs a work visa and, after arrival, an Iqama under the sponsor. A family visit, a business visit and a tourist visa are different products. None of them is permission to work.",
      },
      {
        q: "How do I know the agency in Pakistan is legal?",
        a: "Look up the Overseas Employment Promoter licence on the Bureau of Emigration site. The OEP guide shows what to compare. A shop that will not give you the licence number is not ready to send you.",
      },
      {
        q: "Which ministry handles the job after I arrive?",
        a: "Labour matters go through HRSD and Qiwa. Residence matters, including the Iqama, go through Absher and Muqeem. The employer usually files the residence. You can still see your own expiry on Absher.",
      },
      {
        q: "When should I resign in Pakistan?",
        a: "After the medical result is fit, the Protector step is done or clearly booked as the Bureau requires, and the visa number checks out on the official enquiry. An offer letter alone is earlier than that. Anyone rushing you to resign tonight is not on your side.",
      },
    ]),
    [S.hrsd, S.beoe, S.wafid, wafidBook, S.mofa, S.qiwa],
  ),

  "iqama-renewal": art(
    [
      {
        t: "p",
        text: "Iqama renewal is normally done by the employer on Muqeem or Absher before the expiry date. You should still watch the date yourself on Absher. A late renewal can bring a fine, and that fine is on the official payment screen, not in a group chat. People ask for one fee. The bill has separate lines: the residency renewal fee, the employer work-permit levy, and a monthly dependent levy. The Saudi National Platform service for [renewal of the residence permit](https://my.gov.sa/en/services/112096) lists the service cost as variable, not one SAR total for every worker. Checked on 10 October 2026, that page does not publish a single company-worker fee or a late-fine table. The figures on the Absher or Muqeem payment screen are the ones that count.",
      },
      {
        t: "h2",
        id: "steps",
        text: "What to do before the expiry",
      },
      {
        t: "ol",
        items: [
          "Log in to Absher with your own account. The one-time code comes to your phone. Nobody else needs it, including the company PRO. They have Muqeem.",
          "Read the Hijri and Gregorian expiry. Take a screenshot for yourself. How to find that date is in [[/guides/check-iqama-status|check Iqama status]].",
          "Ask the company's government relations officer, in a message, to confirm they have opened the renewal. Polite and early is better than a fight on the last day. Start weeks ahead. Insurance and passport validity can block a last-minute click.",
          "Medical insurance for residents is part of staying legal. Ask HR which policy covers you and which date it ends. A lapsed policy is a common reason a renewal will not go through.",
          "If you are on an exit visa or a final exit, renewal is the wrong conversation. Ask HR which status you are actually in, then read Absher. Do not pay a renewal fee for a file that is being closed.",
          "Dependents are renewed too. Their dates are not always the same as yours. A renewed worker Iqama does not silently extend a wife's or a child's.",
        ],
      },
      {
        t: "h2",
        id: "fees",
        text: "How to read the bill without a fake SAR figure",
      },
      {
        t: "p",
        text: "When the employer opens the renewal, Absher or Muqeem shows the amount due. That screen is the bill. Residents and employers argue about three different lines, and mixing them up is how WhatsApp tables go wrong. The residency renewal fee is one line. The employer work-permit levy is another. The monthly dependent levy is another. Late fines, if the date has passed, also show there. Who hands over the cash in your company is a contract question. In a normal employment case the employer handles the residence renewal. If someone asks you for cash, ask HRSD with the contract in hand before you pay.",
      },
      {
        t: "ul",
        items: [
          "Do not let a broker quote a single all-inclusive SAR number and call it the government fee. Ask them to show the payment screen.",
          "Paying the renewal does not change your sponsor. A transfer is a different transaction. The wider picture is the [[/guides/saudi-iqama-guide|Iqama guide]].",
          "The worker usually cannot submit the establishment renewal alone. You can see the result on Absher. If the company refuses to renew, speak to HRSD. Keep the contract and a copy of the expiry screenshot.",
          "Passport validity can block the click. Read what the service asks for. Do not assume a rule you remember from another year.",
          "Put the wage in your contract, not a camp average, into the [[/tools/salary-converter|salary converter]]. Use [[/rates/sar-to-pkr|SAR to PKR]] only as a mid-market reference when you tell the family what is left to send after real deductions you can see.",
          "A side job does not become legal because the Iqama was renewed. You still work for the sponsor unless a transfer is finished in the system.",
        ],
      },
      {
        t: "h2",
        id: "dependents",
        text: "Dependents and the monthly levy line",
      },
      {
        t: "p",
        text: "If you sponsor family members, each of them has an Iqama. The monthly dependent levy is one of the lines people ask about. The amount is whatever the payment screen shows for your file. This guide will not replace that screen with a forwarded table, and it will not tell you a rupee equivalent as if the rupee number were the rule. Check each dependent's expiry the same way you check your own, on Absher, without sharing the code. If a relative is only visiting, that is a visit visa, not an Iqama renewal. The products are explained in [[/guides/saudi-visit-visa-for-pakistanis|Saudi visit visa for Pakistanis]].",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: this page does not copy a WhatsApp fee table. The residency renewal fee, the employer work-permit levy and the monthly dependent levy are separate lines. The figures on the Absher or Muqeem payment screen are the ones that count. Late fines show there too.",
      },
      {
        t: "p",
        text: "New workers reach this step only after a real work visa. The order from Pakistan is in [[/guides/saudi-work-visa-pakistan|Saudi work visa from Pakistan]]. If your Iqama is already expired, tell the employer the same day and read the fine on the official screen before anyone quotes you a discount.",
      },
    ],
    five([
      {
        q: "What is the Iqama renewal fee?",
        a: "There is no single number on a public fee table this page can copy. The National Platform renewal service lists the cost as variable. The bill on Absher or Muqeem can include the residency renewal fee, the employer work-permit levy and a monthly dependent levy as separate lines. Copy the figures from the payment screen when the employer opens it.",
      },
      {
        q: "What is the late fine per day?",
        a: "There is a penalty for delay. It shows on the official service, and it has been revised before. Read the current penalty there. Group-chat amounts are often a mixture of old fines and service charges. Pay the official line, not a cash shortcut.",
      },
      {
        q: "Can I renew my own Iqama as a worker?",
        a: "The establishment usually submits the renewal on Muqeem or Absher. You can see the result on your own Absher login. If the company refuses, speak to HRSD with your contract and the expiry screenshot. Do not give a shop your one-time password so they can try.",
      },
      {
        q: "How many days before expiry should we start?",
        a: "Start weeks ahead. Insurance, passport validity and a public holiday can block a last-minute click. Watching the date yourself means you are not relying on a PRO who is also handling two hundred other files.",
      },
      {
        q: "Does renewal change my sponsor?",
        a: "No. A transfer is a different transaction. Do not let anyone tell you that paying the renewal yourself moves you to a new company. The sponsor changes only when the labour and residence systems say it has changed.",
      },
      {
        q: "Do my dependents renew with me automatically?",
        a: "No. Each dependent has an Iqama and an expiry. The monthly dependent levy is a separate line on the bill, and the amount is the one on the payment screen. Check their dates on Absher the same way you check yours.",
      },
    ]),
    [
      S.absher,
      S.muqeem,
      S.hrsd,
      {
        label: "National Platform: Renewal of Iqama",
        href: "https://my.gov.sa/en/services/112096",
      },
    ],
  ),

  "check-iqama-status": art(
    [
      {
        t: "p",
        text: "You can check Iqama status and expiry online on Absher with the account that belongs to you. The expiry is visible to the worker. You never share the Absher one-time password to let someone else look. Employers see the same residence through Muqeem. Either way, the number on a photocopied card is not a live status. If a recruiter in Pakistan sent you an Iqama copy before you have even left, that is a reason to [[/guides/fake-saudi-visa-check|verify the visa]], not a reason to celebrate.",
      },
      {
        t: "h2",
        id: "online",
        text: "Check expiry without sharing the code",
      },
      {
        t: "ol",
        items: [
          "Open Absher and sign in with your own ID. The one-time code comes to your phone. A company PRO, a typing shop and a helpful stranger do not need it. The PRO uses Muqeem for the establishment.",
          "Open the residency or Iqama section and read the expiry. Write down both the Hijri date and the Gregorian date. Take a screenshot and keep it on your own phone.",
          "Read the name, the profession and the sponsor as well as the date. If the profession is not the job you do, ask HR before you assume a renewal will fix it. A profession change is a separate step.",
          "If you sponsor family, open each dependent. Their expiry is not always your expiry. A green status on your card does not answer their file.",
          "If you cannot sign up, fix that with Absher's own process, a bank, or an Absher centre your colleagues actually use. Do not give your passport to a shop that will check Absher for you.",
          "If Absher and your paper card disagree, believe the online file and ask the employer to explain. The plastic card can be old. The system is what the airport and the next renewal will use.",
        ],
      },
      {
        t: "h2",
        id: "muqeem",
        text: "Absher for the worker, Muqeem for the company",
      },
      {
        t: "p",
        text: "Muqeem is the establishment portal. Workers live on Absher. You can ask HR to turn the Muqeem screen towards you so you can read the same expiry. You do not need to hand over your login to make that happen. Public rumours of a magic page that checks any Iqama number come and go. Avoid random websites that ask for the number and a fee. Those pages are how people lose the number and, sometimes, the password.",
      },
      {
        t: "ul",
        items: [
          "When the date is close, move to [[/guides/iqama-renewal|renewal]]. Tell the employer in a message, not only in the corridor.",
          "If Absher says the residence is expired, tell the employer the same day and keep the screenshot. Do not treat a verbal soon as permission to keep working or to travel. Ask them to show the renewal in progress on Muqeem, and get that in a message.",
          "An expired residence is a problem at exit and at work. Check the date before you book leave. Exit re-entry is a different transaction from a status check, and the fee for that permit is on the official screen when you or the employer apply. This page does not invent it.",
          "Final exit is not a status check you ignore. If HR says you are on a final exit, read Absher before you plan a renewal or a holiday.",
          "The wider meaning of the card, the sponsor and the fee lines is in the [[/guides/saudi-iqama-guide|Iqama guide]]. Renewal is the employer's job. Seeing the date is yours.",
          "Use the [[/tools/salary-converter|salary converter]] and [[/rates/sar-to-pkr|SAR to PKR]] for the wage in your contract once you know the residence is valid. They do not check an Iqama, and they are not a reason to pay a shop.",
        ],
      },
      {
        t: "h2",
        id: "abroad",
        text: "If you are still in Pakistan",
      },
      {
        t: "p",
        text: "If you already hold an Iqama and you are home on leave, Absher is still the place to read the expiry, as long as your own login works. Do not send the one-time password to a relative who offers to look. If you have never travelled and a recruiter shows you a card, you do not have a residence to check yet. Verify the work visa instead, after the offer, the Wafid medical and the Protector step in [[/guides/saudi-work-visa-pakistan|Saudi work visa from Pakistan]]. A visit visa is a different product. See [[/guides/saudi-visit-visa-for-pakistanis|Saudi visit visa for Pakistanis]]. Nobody genuine needs an Absher code before the account exists.",
      },
      {
        t: "note",
        text: "Checked on 9 October 2026: Iqama expiry is visible to the worker in Absher. Do not share the one-time password. This page does not copy a WhatsApp fee table. Any renewal amount, late fine, work-permit levy or dependent levy is the figure on the Absher or Muqeem payment screen.",
      },
      {
        t: "p",
        text: "If a shop asks for money to reveal a date you can see yourself, refuse. If they already took the money and the passport, keep the receipt and read [[/guides/report-visa-fraud-fia|how to report fraud]]. The Iqama number is sensitive. The password is more sensitive. Treat both that way.",
      },
    ],
    five([
      {
        q: "Can I check with only the Iqama number?",
        a: "Public rumours of a magic page come and go. Use Absher, which is tied to you, or ask the employer to show you Muqeem. Avoid random websites that ask for the number and a fee. The expiry on Absher is the live date.",
      },
      {
        q: "What if Absher says my number is expired?",
        a: "Tell the employer the same day and keep the screenshot. The late fine, if one applies, shows when they open renewal on Absher or Muqeem. Get a message if they claim a renewal is already in progress. Do not rely on a verbal promise when you are about to travel.",
      },
      {
        q: "Is Muqeem for workers?",
        a: "Muqeem is the establishment portal. Workers use Absher. You can ask HR to show you the Muqeem screen. You do not give them your Absher one-time password in exchange. They do not need it to do their job.",
      },
      {
        q: "Someone asked for my Absher code. Should I send it?",
        a: "No. That code is a login. Sending it is how accounts are taken over. This includes the company PRO, a relative, and any shop that says the check is easier from their phone. The code stays on your phone.",
      },
      {
        q: "Does expiry stop me at the airport?",
        a: "An expired residence is a problem at exit and at work. Check the date on Absher before you book leave. Exit re-entry is a separate permit. Read the status you actually have, not the status you hope the PRO applied for.",
      },
      {
        q: "Can I check my wife's Iqama from my login?",
        a: "If you sponsor her, her residency should be visible with the dependents on Absher. Her expiry can differ from yours. Do not ask her to send her own one-time password to a third person. Each adult keeps their own code.",
      },
    ]),
    [S.absher, S.muqeem, S.hrsd],
  ),
};
