import type { ArticleBody, Block, Faq, Source } from "@/lib/content/types";
import { S, feeNote } from "@/lib/content/sources";

function art(blocks: Block[], faqs: Faq[], sources: Source[]): ArticleBody {
  return { blocks: [...blocks, feeNote], faqs, sources };
}

const five = (faqs: Faq[]) => faqs;

export const bodiesB: Record<string, ArticleBody> = {
  "genuine-dubai-job-from-pakistan": art(
    [
      {
        t: "p",
        text: "A genuine job in Dubai, if you are still in Pakistan, starts with a company you can name and a contract the UAE Ministry of Human Resources will recognise. It does not start with a fee. The usual order is a real offer, a work permit from the employer, an entry permit, and only then the flight.",
      },
      {
        t: "h2",
        id: "path",
        text: "A clean path from Pakistan",
      },
      {
        t: "ol",
        items: [
          "The company sends an offer that matches its trade licence name, not a cousin’s Gmail.",
          "You can find that company on MOHRE or through the licence number on a Dubai economic register. If you cannot, stop.",
          "The employer applies for the work permission. You do not buy a “visa file” from a shop in your city.",
          "If you are going for employment, you also pass through the Protector of Emigrants in Pakistan. Check the [[/guides/protector-of-emigrants|Protector process]] and the [[/guides/oep-licensed-agents|OEP licence]].",
          "After you land, the medical, biometrics, Emirates ID and the MOHRE contract are the employer’s process to finish. Keep copies.",
        ],
      },
      {
        t: "p",
        text: "Read [[/guides/fake-job-offer-dubai|how to spot a fake offer]] before you resign. Put the basic salary, not the promised overtime, into the [[/tools/salary-converter|salary converter]].",
      },
    ],
    five([
      { q: "Should I pay an agent in Pakistan for a Dubai job?", a: "A licensed Overseas Employment Promoter may charge an official fee. A demand for a large cash amount before any verifiable offer is a stop sign. Check the licence on the Bureau of Emigration site." },
      { q: "Is a Word offer letter enough?", a: "No. You want a company you can look up, and later a MOHRE contract. An editable file is easy to fake." },
      { q: "Can I go on a visit visa and search for work?", a: "A visit visa is not permission to work. See the visit-versus-work guide. Changing status is a separate, official process and it is not guaranteed." },
      { q: "Who pays the visa cost?", a: "Ask MOHRE before you pay an employer or agent for recruitment. Charging workers unlawful fees is a common trick. Get the answer from MOHRE, not from the person asking for the money." },
      { q: "Where do I complain?", a: "In Pakistan, the Bureau of Emigration and FIA. In the UAE, MOHRE for labour issues once you are in their system." },
    ]),
    [S.mohre, S.beoe, S.uae, S.fia],
  ),

  "uae-visit-visa-vs-work-visa": art(
    [
      {
        t: "p",
        text: "A UAE visit visa lets you enter for a visit. A UAE work visa is tied to a job and a sponsoring employer. Pakistanis need permission before they fly. The two documents are not interchangeable, and working on a visit visa can get you fined and removed.",
      },
      {
        t: "h2",
        id: "difference",
        text: "Visit visa and work visa, side by side",
      },
      {
        t: "ul",
        items: [
          "Visit: tourism, family or a short business trip. You cannot take a job on it.",
          "Work: the employer gets a work permit through MOHRE and a residence path through ICP. You get an Emirates ID and a labour contract.",
          "A visit can be arranged by an airline, a hotel, a relative or a typing centre. The fee on the official screen is the one that counts.",
          "A job offer does not turn a visit stamp into a work permit. Status change, where it is allowed, is a formal application.",
        ],
      },
      {
        t: "p",
        text: "Read the current visit rules on ICP and GDRFA Dubai, and the work path on MOHRE and u.ae. The longer notes are [[/guides/uae-visit-visa-for-pakistanis|UAE visit visa for Pakistanis]] and [[/guides/uae-work-visa-pakistan|UAE work visa from Pakistan]].",
      },
    ],
    five([
      { q: "Can I work in Dubai on a visit visa?", a: "No. Employment needs a work permit and residence sponsored by the employer." },
      { q: "Can a visit visa be converted to a work visa?", a: "Sometimes a status change is possible inside the country. It is an official application by the employer, not a favour from an agent. Ask ICP or GDRFA whether your file allows it." },
      { q: "Which visa should my family apply for?", a: "If they are visiting you, it is a visit or a family residence, depending on your status and salary. Family residence has its own salary rule. Check ICP." },
      { q: "Do the fees stay the same all year?", a: "No. Read the fee on ICP or GDRFA when you apply." },
      { q: "How do I see if my visa is real?", a: "Check it yourself. The [[/guides/check-uae-visa-status|status guide]] explains the official screens." },
    ]),
    [S.icp, S.gdrfa, S.mohre, S.uae],
  ),

  "saudi-iqama-guide": art(
    [
      {
        t: "p",
        text: "An Iqama is the Saudi residence permit. For a Pakistani worker it is the card that shows you are allowed to live in the Kingdom under a sponsor. It is not the same document as the visa that was stamped in Pakistan, and it is not optional once you are a resident.",
      },
      {
        t: "h2",
        id: "what",
        text: "What you should know in the first month",
      },
      {
        t: "ul",
        items: [
          "Your employer usually applies for the Iqama after the in-Kingdom medical and the other arrival steps.",
          "The expiry date matters. A late renewal can draw a fine. The amount is on the official screen, not in a group chat.",
          "You can see a lot of your own file on Absher. Establishments use Muqeem. Do not hand your Absher one-time password to a stranger.",
          "You work for the sponsor on the Iqama unless a legal transfer is finished. A side job “for cash” is how people lose the permit.",
          "Dependents, if you sponsor them, have their own Iqamas and their own expiry dates.",
        ],
      },
      {
        t: "p",
        text: "Renewal steps are in [[/guides/iqama-renewal|Iqama renewal]]. Checking the date is in [[/guides/check-iqama-status|check Iqama status]]. Labour questions sit with HRSD and Qiwa.",
      },
    ],
    five([
      { q: "Who pays for the Iqama?", a: "In a normal employment case the employer handles the residence fees. If someone asks you for cash, ask HRSD or look at your contract before you pay." },
      { q: "What happens if my Iqama expires?", a: "You can face a fine and trouble leaving or working. Tell your employer before the date, and watch Absher yourself." },
      { q: "Can I check the Iqama without my sponsor?", a: "Workers use Absher for many personal enquiries. If you cannot log in, sort that out before the expiry, not after." },
      { q: "Is the Iqama number the same as the visa number?", a: "No. Keep both. The visa got you in. The Iqama is the residence record." },
      { q: "Where is the law written?", a: "Residence practice sits with the Saudi interior systems (Absher and Muqeem). Work rules sit with HRSD. Read those sites rather than a camp summary." },
    ]),
    [S.absher, S.muqeem, S.hrsd, S.qiwa],
  ),

  "uae-visit-visa-for-pakistanis": art(
    [
      {
        t: "p",
        text: "A UAE visit visa for Pakistanis in 2026 is still something you arrange before you travel. Pakistani passports are not part of a visa-free arrangement with the UAE. The exact product — tourist, family visit, or a short entry — and the fee are published by ICP and, for Dubai files, by GDRFA Dubai.",
      },
      {
        t: "h2",
        id: "apply",
        text: "How to apply without guessing the fee",
      },
      {
        t: "ol",
        items: [
          "Decide who is sponsoring the visit: a resident relative, a hotel or airline package, or another channel ICP currently allows.",
          "Prepare a passport with enough blank pages and enough validity for the rule on the form. Read that rule on the form, because six months is common but not a promise.",
          "Pay the amount shown on the official payment page. A typing centre may add a service charge. Ask for it on a receipt, separate from the government fee.",
          "When the file is approved you receive an entry permit. That is what you show the airline. Check the status yourself.",
        ],
      },
      {
        t: "p",
        text: "A visit is not a job. If someone says “come on a visit and we will fix the work visa later”, read [[/guides/uae-visit-visa-vs-work-visa|visit visa versus work visa]] before you buy the ticket.",
      },
    ],
    five([
      { q: "What is the UAE visit visa fee for Pakistanis?", a: "ICP and GDRFA show the current fee for the product you choose. It changes. Copy it from their screen on the day you apply." },
      { q: "Can I apply without a sponsor?", a: "Some tourist products are sold through airlines and hotels. Whether your passport is eligible is on the official site. Do not pay an agent who cannot show that page." },
      { q: "How long can I stay?", a: "The entry permit states the length. Overstaying has a fine. Read the fine on ICP or GDRFA, not in a comment." },
      { q: "Which site is for Dubai?", a: "Dubai-issued files are handled by GDRFA Dubai. Other emirates often go through ICP. If you are unsure, check both with your passport number." },
      { q: "What documents are usually asked for?", a: "A passport copy, a photo, and sometimes proof of the relationship or a hotel booking. The checklist on the application is the one that matters." },
    ]),
    [S.icp, S.gdrfa, S.uae],
  ),

  "uae-work-visa-pakistan": art(
    [
      {
        t: "p",
        text: "You get a UAE work visa from Pakistan through an employer, not by buying a visa in a market. The company obtains a work permit and an entry permit. You complete the Pakistan-side steps for people going abroad to work, then finish medical and Emirates ID after you arrive.",
      },
      {
        t: "h2",
        id: "steps",
        text: "Steps that should happen, in order",
      },
      {
        t: "ol",
        items: [
          "A named company offers you a job. Check it. See [[/guides/genuine-dubai-job-from-pakistan|genuine Dubai jobs]].",
          "The employer files with MOHRE. You should be able to see an offer or contract in the MOHRE channel, not only a PDF from an agent.",
          "In Pakistan, employment cases go through the Bureau of Emigration and the Protector stamp. See [[/guides/protector-of-emigrants|the Protector guide]].",
          "A medical may be required before departure for some destinations. If your papers say Wafid, book it only on [[/guides/gamca-medical-test|the Wafid page]]. The UAE also does a medical after arrival for residence.",
          "You enter on the permit, do the in-country medical and biometrics, and receive the residence and Emirates ID.",
        ],
      },
      {
        t: "p",
        text: "Gratuity later depends on the basic wage in that contract. Estimate it with the [[/tools/gratuity-calculator|gratuity calculator]] and read the [[/guides/uae-gratuity-rules|rules]].",
      },
    ],
    five([
      { q: "Can I get a work visa without a job offer?", a: "No. A work residence needs a sponsoring employer." },
      { q: "Do I need the Protector stamp?", a: "Pakistanis leaving for employment are expected to clear the Bureau of Emigration process. Confirm your case on beoe.gov.pk. A visit visa is a different matter." },
      { q: "What does the work visa cost me?", a: "Government fees exist, and who pays them is a MOHRE question. Do not transfer a “security deposit” to a personal account." },
      { q: "How long does it take?", a: "It varies with the company and the medical. Anyone who guarantees a date in exchange for an extra fee is selling certainty they do not have." },
      { q: "Where do I see the labour contract?", a: "MOHRE. If your only copy is a scan from WhatsApp, ask the employer to show it in the official system." },
    ]),
    [S.mohre, S.icp, S.beoe, S.uae],
  ),

  "uae-visa-renewal": art(
    [
      {
        t: "p",
        text: "UAE residence visa renewal is usually started by the sponsor — your employer, or the relative who sponsors you — before the visa expires. Leaving it late can mean a fine. The fine is published by ICP or GDRFA and it changes, so read it there.",
      },
      {
        t: "h2",
        id: "renew",
        text: "Renewal steps and documents",
      },
      {
        t: "ul",
        items: [
          "Check the expiry on ICP or GDRFA several weeks ahead. Do not trust a reminder from an unknown number.",
          "The sponsor files the renewal. You will typically need your passport, a photo, and a medical fitness test. Health insurance is part of many residence files. Ask who is buying it.",
          "Emirates ID renewal sits in the same season of paperwork. Follow the ICP message.",
          "If you are changing jobs, do not assume the old visa will roll forward. A new permit is a new file.",
          "Family visas renew on their own dates. A husband’s renewed visa does not automatically extend his wife’s.",
        ],
      },
      {
        t: "p",
        text: "If the renewal is stuck because of a salary or dependency rule, read [[/guides/family-visa-uae-salary-requirement|family sponsorship]] and confirm the figure on ICP.",
      },
    ],
    five([
      { q: "What is the cost of UAE visa renewal?", a: "The government fee depends on the file. Read it on ICP or GDRFA when the sponsor opens the application. Typing centres add their own charge." },
      { q: "How early should we start?", a: "Start weeks before expiry, not the day before the flight. Medical appointments slip." },
      { q: "What is the late fine?", a: "There is a penalty for overstay. The daily or monthly figure must be read on the official site. This page will not guess it." },
      { q: "Can I renew from Pakistan?", a: "Residence renewal is normally done while the file is live and you are in status. If you are outside, ask ICP or GDRFA about your particular file before you assume you can re-enter." },
      { q: "Who do I call if the company will not renew?", a: "MOHRE for a labour dispute, and ICP or GDRFA for the immigration file. Keep your contract and passport copies." },
    ]),
    [S.icp, S.gdrfa, S.mohre, S.uae],
  ),

  "check-uae-visa-status": art(
    [
      {
        t: "p",
        text: "You can check a UAE visa status online with your passport number on the official ICP service, and on GDRFA Dubai if the file was issued in Dubai. You do not need to pay a stranger to “see the system”.",
      },
      {
        t: "h2",
        id: "how",
        text: "How to check, without handing over the OTP",
      },
      {
        t: "ol",
        items: [
          "Open ICP (icp.gov.ae) and look for visa status or file validity. Have the passport number and nationality ready.",
          "If the sponsor or the airline said the file is Dubai, also try GDRFA Dubai (gdrfad.gov.ae).",
          "Match the name letter by letter with the passport. A missing space or an extra surname is a common miss.",
          "Save the result yourself. A screenshot sent by an agent can be edited.",
        ],
      },
      {
        t: "p",
        text: "If the status says nothing, you may not have a file yet. That is useful information. It means you should not book a non-refundable ticket. See also [[/guides/fake-job-offer-dubai|fake offer letters]].",
      },
    ],
    five([
      { q: "Is a passport number enough?", a: "Often yes, together with nationality and sometimes a file or application number. The form tells you which fields are required." },
      { q: "Why do ICP and GDRFA both exist?", a: "ICP is the federal authority. GDRFA Dubai handles many Dubai-issued residence and entry files. If one site is blank, try the other before you panic." },
      { q: "Can my agent check it for me?", a: "They can sit with you while you check it. Do not give them your one-time password or your passport to keep." },
      { q: "The status says approved. Can I fly?", a: "Take the entry permit the airline will ask for, and read the dates on it. Approved in a chat is not the same as an entry permit in your email." },
      { q: "The site is down. What then?", a: "Try again later, or use the authority’s app if they offer one. Do not pay a third party who claims to have a private login." },
    ]),
    [S.icp, S.gdrfa, S.uae],
  ),

  "saudi-visit-visa-for-pakistanis": art(
    [
      {
        t: "p",
        text: "A Saudi visit visa for Pakistanis is usually a family visit, a business visit, or a tourist visa if the official site currently accepts Pakistani passports. Those are three different applications. Eligibility for the tourist e-visa has not been the same for every nationality, so check visa.visitsaudi.com yourself before you pay anyone.",
      },
      {
        t: "h2",
        id: "types",
        text: "Family, business and tourist",
      },
      {
        t: "ul",
        items: [
          "Family visit: a resident in the Kingdom normally sponsors relatives. The relationship and the sponsor’s status are checked. Any salary minimum is an official rule. Read it on the Saudi portal, because it has moved before.",
          "Business visit: a Saudi company invites you. You should be able to name that company.",
          "Tourist: only if the official visa site offers it for a Pakistani passport on the day you apply. A poster in a travel shop is not the offer.",
        ],
      },
      {
        t: "p",
        text: "When the visa arrives, verify the number. [[/guides/fake-saudi-visa-check|How to verify a Saudi visa]] explains why a PDF is not enough. The Ministry of Foreign Affairs is the reference for visa policy.",
      },
    ],
    five([
      { q: "Can Pakistanis get a Saudi tourist e-visa?", a: "Only if the official Visit Saudi visa site lists Pakistani passports as eligible. Check it. Do not rely on this page for a yes or no that can change." },
      { q: "What is the family visit fee?", a: "The fee is shown in the official application. Copy it from there." },
      { q: "How long can my parents stay?", a: "The visa states the duration and whether it is single or multiple entry. Read those lines before you book a return two months later." },
      { q: "Can I do Umrah on a family visit visa?", a: "Pilgrim rules are separate and seasonal. Check Nusuk and the visa conditions. Do not assume every visit visa includes Umrah." },
      { q: "Who sponsors a family visit?", a: "Usually the resident relative. An agent in Pakistan cannot sponsor you." },
    ]),
    [S.visitsaudi, S.mofa, S.absher, S.nusuk],
  ),

  "saudi-work-visa-pakistan": art(
    [
      {
        t: "p",
        text: "A Saudi work visa from Pakistan runs through an employer in the Kingdom and through Pakistani emigration checks. The usual pieces are a real offer, a Wafid (GAMCA) medical, the Protector of Emigrants, and a visa you can verify. After you land, the employer starts the Iqama.",
      },
      {
        t: "h2",
        id: "process",
        text: "Process, medical and Protector",
      },
      {
        t: "ol",
        items: [
          "Confirm the employer. A contract you cannot match to a real establishment is not a job.",
          "Book the medical only on Wafid if the visa instructions require it. See [[/guides/gamca-medical-test|GAMCA / Wafid]].",
          "Clear the Protector. See [[/guides/protector-of-emigrants|Protector stamp]]. The Bureau of Emigration publishes the fee.",
          "Check the visa number on the official enquiry before you buy the ticket. See [[/guides/fake-saudi-visa-check|verify a Saudi visa]].",
          "On arrival the employer handles the residence steps. Your guide to the card itself is [[/guides/saudi-iqama-guide|the Iqama guide]].",
        ],
      },
      {
        t: "p",
        text: "Put only the wage written in the contract into the [[/tools/salary-converter|salary converter]]. Overtime in a speech is not pay.",
      },
    ],
    five([
      { q: "Do all Pakistani workers need a Wafid medical?", a: "Saudi work visas generally do. If your papers say something else, follow the visa instruction and still refuse a clinic that will not book through Wafid when Wafid is required." },
      { q: "What is the Protector fee?", a: "The Bureau of Emigration publishes it. Read beoe.gov.pk. Do not add a second “urgent” fee in cash." },
      { q: "Can I go to Saudi on a visit visa and start the job?", a: "No. Work needs a work visa and, after arrival, an Iqama under the sponsor." },
      { q: "How do I know the agency in Pakistan is legal?", a: "Look up the Overseas Employment Promoter licence. [[/guides/oep-licensed-agents|How to check an OEP]]." },
      { q: "Which ministry handles the job after I arrive?", a: "Labour matters go through HRSD and Qiwa. Residence matters go through Absher and Muqeem." },
    ]),
    [S.hrsd, S.beoe, S.wafid, S.mofa],
  ),

  "iqama-renewal": art(
    [
      {
        t: "p",
        text: "Iqama renewal is normally done by the employer on Muqeem or Absher before the expiry date. You should still watch the date yourself. A late renewal can bring a fine. The fine is set by the Saudi authorities and has been revised before, so read the figure on the official payment screen.",
      },
      {
        t: "h2",
        id: "steps",
        text: "Absher, fees and the late fine",
      },
      {
        t: "ul",
        items: [
          "Log in to Absher and note the Hijri and Gregorian expiry. Take a screenshot for yourself.",
          "Ask the company’s government relations officer to confirm they have opened the renewal. Polite and early is better than a fight on the last day.",
          "Medical insurance for residents is part of staying legal. Ask HR which policy covers you.",
          "If you are on an exit visa or a final exit, renewal is the wrong conversation. Ask HR which status you are actually in.",
          "Dependents are renewed too. Their dates are not always the same as yours.",
        ],
      },
      {
        t: "p",
        text: "How to look the date up is covered in [[/guides/check-iqama-status|check Iqama status]]. The wider picture is the [[/guides/saudi-iqama-guide|Iqama guide]].",
      },
    ],
    five([
      { q: "What is the Iqama renewal fee?", a: "The amount due is shown when the employer opens the renewal. It depends on the category and the year. Copy it from Muqeem or Absher. This page will not print a number that may already be out of date." },
      { q: "What is the late fine per day?", a: "There is a penalty for delay. Read the current penalty on the official service. Group-chat amounts are often wrong." },
      { q: "Can I renew my own Iqama as a worker?", a: "The establishment usually submits it. You can see the result on Absher. If the company refuses, speak to HRSD with your contract in hand." },
      { q: "How many days before expiry should we start?", a: "Start weeks ahead. Insurance and passport validity can block a last-minute click." },
      { q: "Does renewal change my sponsor?", a: "No. A transfer is a different transaction. Do not let anyone tell you that paying the renewal yourself moves you to a new company." },
    ]),
    [S.absher, S.muqeem, S.hrsd],
  ),

  "check-iqama-status": art(
    [
      {
        t: "p",
        text: "You can check Iqama status and expiry online on Absher with the account that belongs to you. Employers look at the same residence through Muqeem. Either way, the number on a photocopied card is not a live status.",
      },
      {
        t: "h2",
        id: "online",
        text: "Check expiry without sharing the code",
      },
      {
        t: "ol",
        items: [
          "Open Absher and sign in with your own ID. The one-time code comes to your phone. Nobody else needs it.",
          "Open the residency or Iqama section and read the expiry.",
          "If you cannot sign up, fix that with a visit to a bank or the Absher centre your colleagues use. Do not give your passport to a shop that “will check Absher for you”.",
          "If Absher and your paper card disagree, believe the online file and ask the employer to explain.",
        ],
      },
      {
        t: "p",
        text: "When the date is close, move to [[/guides/iqama-renewal|renewal]]. If a recruiter sent you an Iqama copy before you have even left Pakistan, treat it as a reason to [[/guides/fake-saudi-visa-check|verify the visa]] properly.",
      },
    ],
    five([
      { q: "Can I check with only the Iqama number?", a: "Public rumours of a magic page come and go. Use Absher, which is tied to you, or ask the employer to show you Muqeem. Avoid random websites that ask for the number and a fee." },
      { q: "What if Absher says my number is expired?", a: "Tell the employer the same day. Keep working only if they confirm in the system that a renewal is actually in progress. Get that in a message." },
      { q: "Is Muqeem for workers?", a: "Muqeem is the establishment portal. Workers live on Absher. You can ask HR to show you the Muqeem screen." },
      { q: "Someone asked for my Absher code. Should I send it?", a: "No. That code is a login. Sending it is how accounts are taken over." },
      { q: "Does expiry stop me at the airport?", a: "An expired residence is a problem at exit and at work. Check the date before you book leave." },
    ]),
    [S.absher, S.muqeem],
  ),
};
