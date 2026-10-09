import type { ArticleBody, Block, Faq, Source } from "@/lib/content/types";
import { S, feeNote } from "@/lib/content/sources";

function art(blocks: Block[], faqs: Faq[], sources: Source[]): ArticleBody {
  return { blocks: [...blocks, feeNote], faqs, sources };
}

export const bodiesA: Record<string, ArticleBody> = {
  "send-money-uae-to-pakistan": art(
    [
      {
        t: "p",
        text: "The cheapest way to send money from the UAE to Pakistan is the quote that leaves the most rupees in the account at home, not the advert with the loudest “zero fee”. A dirham transfer has two prices: the fee, and the exchange rate. A low fee with a weak rate often loses.",
      },
      {
        t: "h2",
        id: "compare",
        text: "Compare the rupees, not the slogan",
      },
      {
        t: "p",
        text: "Ask every bank, exchange house or app the same question: “If I send this many dirhams right now, how many rupees will arrive, after every fee?” Write down the time as well. A rate at the counter and a rate on a banner are not the same number. Use the [[/tools/remittance|quote comparison tool]] and today’s [[/rates/aed-to-pkr|AED to PKR rate]] only as a mid-market reference. Your payout will usually be a bit less than that reference.",
      },
      {
        t: "ul",
        items: [
          "Licensed UAE banks and exchange houses regulated by the Central Bank of the UAE.",
          "Apps that name a licensed company on the receipt, not only a brand.",
          "A Roshan Digital Account, if you already have one, as one possible place for the money to land. It is not automatically the best rate.",
        ],
      },
      {
        t: "h2",
        id: "avoid",
        text: "What to skip",
      },
      {
        t: "p",
        text: "Informal cash handovers have no receipt you can take to a regulator if the money vanishes. The State Bank of Pakistan expects personal remittances to move through proper channels. If someone asks you to hand over cash in Dubai and “collect from a shop” in Pakistan, you are not using a system you can complain about.",
      },
      {
        t: "p",
        text: "The Pakistan Remittance Initiative has, at times, been part of how formal remittances are encouraged. Schemes change. Read the current position on the State Bank site rather than a poster in an exchange shop.",
      },
    ],
    [
      {
        q: "Is a zero-fee transfer from the UAE always cheaper?",
        a: "No. The exchange rate can hide the cost. Compare the rupees that actually arrive.",
      },
      {
        q: "Should I trust the rate on GulfPK?",
        a: "It is a mid-market reference, not the rate your exchange will give you. Check the payout before you send.",
      },
      {
        q: "Can I send dirhams into a Roshan Digital Account?",
        a: "Many overseas Pakistanis receive money in an RDA. Confirm with your Pakistani bank that your account can take the transfer you are about to make.",
      },
      {
        q: "How fast should the money arrive?",
        a: "It depends on the channel and the banks in the middle. Ask for the expected time and keep the receipt until the rupees show up.",
      },
      {
        q: "Where do I complain about a UAE exchange?",
        a: "Start with the company’s own complaint desk and keep the receipt. The Central Bank of the UAE licenses exchange businesses. For the Pakistan side, the State Bank is the authority.",
      },
    ],
    [S.cbuae, S.sbp, S.rda],
  ),

  "send-money-saudi-to-pakistan": art(
    [
      {
        t: "p",
        text: "To send money from Saudi Arabia to Pakistan cheaply, compare the rupees you will receive, not the Arabic or English banner in the app. Banks, licensed money shops and phone wallets all take a cut, either as a fee or inside the rate.",
      },
      {
        t: "h2",
        id: "compare",
        text: "How to compare a riyal transfer",
      },
      {
        t: "ol",
        items: [
          "Decide the amount in riyals you want to send.",
          "Get two or three live quotes. Write the fee and the rupee amount separately.",
          "Check the name on the receipt matches a business you can look up.",
          "Send a small test first if you are using a channel that is new to you.",
        ],
      },
      {
        t: "p",
        text: "Use the [[/tools/remittance|quote tool]] for the arithmetic and the [[/rates/sar-to-pkr|SAR to PKR page]] as the mid-market yardstick. A quote far above that yardstick is a reason to ask questions. A quote far below it is also a reason to ask questions.",
      },
      {
        t: "h2",
        id: "legal",
        text: "Keep it on a receipt",
      },
      {
        t: "p",
        text: "The Saudi Central Bank supervises banks and remittance businesses in the Kingdom. In Pakistan, the State Bank of Pakistan is the authority for formal inflows. A transfer with no receipt is a poor idea, even when a friend says it is “what everyone does”.",
      },
    ],
    [
      {
        q: "Which Saudi app is the cheapest to Pakistan?",
        a: "It changes by the hour and by the amount. Compare the rupees on the day you send. This site does not rank companies.",
      },
      {
        q: "Does my Iqama name have to match the bank account?",
        a: "The sender’s name should match the identification the bank or exchange already holds. If it does not, the transfer can be stopped. Ask the counter before you queue.",
      },
      {
        q: "Can the money go to a Roshan Digital Account?",
        a: "Often yes. Confirm the exact account details with the Pakistani bank, then match them on the Saudi receipt.",
      },
      {
        q: "What if the rupees never arrive?",
        a: "Use the reference number on the receipt with the company that took the riyals. Note the time and the staff name if you were at a counter.",
      },
      {
        q: "Is a cash handover in the camp allowed?",
        a: "If there is no licensed receipt, you have almost no way to complain. Prefer a channel supervised in Saudi Arabia and recorded in Pakistan.",
      },
    ],
    [S.sama, S.sbp, S.rda],
  ),

  "cost-of-living-dubai": art(
    [
      {
        t: "p",
        text: "The cost of living in Dubai for a single Pakistani worker is mostly rent. A bed in a shared room and a studio flat are different lives, and different salaries. There is no official “Dubai budget” that fits every person.",
      },
      {
        t: "h2",
        id: "budget",
        text: "A planning budget, not a survey",
      },
      {
        t: "p",
        text: "On the [[/tools/salary-converter|salary converter]], the Dubai single-worker lines start as an example: shared rent, simple food, metro or bus, a phone and a little left for emergencies. Change every line. If your company gives housing, set rent to zero. If you send money home, that is not a living cost — it comes out of what is left.",
      },
      {
        t: "ul",
        items: [
          "Ask whether the offer is basic salary or a package with allowances. Gratuity in the UAE is worked out on basic wage.",
          "Ask who pays the visa, medical and Emirates ID.",
          "Price a room in the area you will actually live, not a national average from a video.",
        ],
      },
      {
        t: "p",
        text: "Food and transport are easier to cut than rent. A car is rarely the cheap option for one person near a metro line. Run the dirhams through the [[/rates/aed-to-pkr|AED to PKR rate]] so the family at home can see the same salary in rupees.",
      },
    ],
    [
      {
        q: "How much does a single worker need in Dubai?",
        a: "It depends on the room. Use the converter and type the rent you were actually quoted. Do not copy a number from a comment section.",
      },
      {
        q: "Is the figure on this page an official index?",
        a: "No. It is a planning example you can edit. Dubai does not publish one budget for Pakistani workers.",
      },
      {
        q: "Should I include annual leave ticket in the monthly budget?",
        a: "Only if your contract really pays it. Spread that amount across twelve months if you want a monthly picture.",
      },
      {
        q: "Does overtime belong in the salary?",
        a: "Treat overtime as extra, not as pay you can count on. Budget on the basic salary plus fixed allowances you can see in the contract.",
      },
      {
        q: "Where do I check the dirham rate?",
        a: "The AED to PKR page on this site is a mid-market reference. Your exchange or bank will show its own rate.",
      },
    ],
    [S.mohre, S.uae],
  ),

  "cost-of-living-riyadh": art(
    [
      {
        t: "p",
        text: "The cost of living in Riyadh for a Pakistani family is driven by three things: the flat, the school, and whether you need a car. A single man’s shared room is not a useful comparison.",
      },
      {
        t: "h2",
        id: "family-budget",
        text: "What to price before you bring the family",
      },
      {
        t: "ul",
        items: [
          "Rent for the kind of flat you will actually accept, including agency commission if the landlord charges it.",
          "School fees from the school, in writing. Do not use a Facebook average.",
          "A car, insurance and fuel if the compound or the school is not on a bus.",
          "Iqama medical insurance the way your employer actually provides it. Ask HR what dependents cost.",
          "Food. Cooking at home is the lever most families can move.",
        ],
      },
      {
        t: "p",
        text: "The family preset on the [[/tools/salary-converter|salary converter]] is only a starting sketch in riyals. Replace the school line with the offer you received. Then look at the [[/rates/sar-to-pkr|riyal to rupee rate]] so you can see what is left to send home.",
      },
      {
        t: "p",
        text: "Family visit and family residence rules, including any salary floor, are set by the Saudi authorities and have changed before. Read the current rule on Absher or the official visa guidance before you give notice on a flat in Pakistan.",
      },
    ],
    [
      {
        q: "Is Riyadh cheaper than Dubai for a family?",
        a: "Often rent is lower, but school fees and a car can erase that. Compare your two real quotes, not a headline.",
      },
      {
        q: "Can I use the salary on my Iqama for a family visa?",
        a: "Family sponsorship rules are official and they change. Check Absher and your employer’s government relations staff. Do not rely on a camp rumour.",
      },
      {
        q: "Are school fees regulated to one price?",
        a: "No. Ask the school for the year’s tuition, bus and uniform. Put that number in the converter.",
      },
      {
        q: "Should I budget in riyals or rupees?",
        a: "Budget rent and school in riyals. Convert the leftover with a current rate when you talk to family.",
      },
      {
        q: "What if my company pays housing?",
        a: "Set the rent line to zero only for the housing they actually provide. A housing allowance is not the same as a free flat if the allowance is smaller than the rent.",
      },
    ],
    [S.absher, S.hrsd, S.sbp],
  ),

  "uae-gratuity-rules": art(
    [
      {
        t: "p",
        text: "UAE gratuity, the end-of-service benefit, is set out in Federal Decree-Law No. 33 of 2021. For a full-time worker who completes at least one year, the usual calculation is 21 days of basic wage for each of the first five years, and 30 days of basic wage for each year after that. The total is capped at two years of wage.",
      },
      {
        t: "h2",
        id: "rules",
        text: "What the gratuity rules actually use",
      },
      {
        t: "ul",
        items: [
          "Basic wage, not the full package. Allowances are generally outside the sum. Check your contract for what is labelled basic.",
          "A daily rate is commonly basic wage divided by 30.",
          "A part year is included in proportion once you have crossed one full year.",
          "Under the current law, resigning does not by itself cut the gratuity the way the old law did. Confirm your own case with MOHRE if someone tells you “resignation means one third”.",
          "Days of unpaid leave are not counted as service.",
        ],
      },
      {
        t: "p",
        text: "The [[/tools/gratuity-calculator|gratuity calculator]] follows that pattern and labels the result an estimate. It is not a MOHRE decision. Limited contracts, misconduct dismissals and some domestic or part-time arrangements have their own rules. Read the chapter on end of service on the UAE government portal and ask MOHRE if your case is unusual.",
      },
      {
        t: "h2",
        id: "estimate",
        text: "Why two people with the same package get different numbers",
      },
      {
        t: "p",
        text: "If one contract shows a high basic and small allowances, and another shows the reverse, the gratuity is different even when the monthly cash feels the same. That is a reason to read the offer before you join, not only the total.",
      },
    ],
    [
      {
        q: "Is gratuity paid if I resign?",
        a: "Under Decree-Law 33 of 2021, a worker who has completed at least a year is generally entitled to the end-of-service benefit even when they resign. The old one-third and two-thirds cuts belonged to the previous law. Confirm on u.ae or with MOHRE.",
      },
      {
        q: "Does the calculator include my housing allowance?",
        a: "No. Put in the basic wage only, unless MOHRE or your contract says a particular allowance counts. When in doubt, ask MOHRE.",
      },
      {
        q: "What if I worked less than one year?",
        a: "The law’s gratuity starts after one year of continuous service. Your contract might still promise something. The calculator returns zero below one year.",
      },
      {
        q: "Can gratuity be more than two years of wage?",
        a: "The statute caps the benefit at two years of wage. The calculator applies that cap.",
      },
      {
        q: "Is this legal advice?",
        a: "No. It is a reading aid. MOHRE and the courts decide real disputes.",
      },
    ],
    [S.mohre, S.uae],
  ),

  "gold-carry-dubai-saudi-pakistan": art(
    [
      {
        t: "p",
        text: "How much gold you can carry from Dubai or Saudi Arabia to Pakistan is a customs question, and the honest answer is: read the current passenger rules before you fly. Gram limits and duty rates have changed over the years. A number in a WhatsApp status is not a law.",
      },
      {
        t: "h2",
        id: "check",
        text: "What to check before you buy a tola",
      },
      {
        t: "ul",
        items: [
          "Pakistan Customs and FBR passenger baggage rules for gold jewellery, and whether bars or coins are treated differently from jewellery you wear.",
          "Any State Bank rule on bringing gold into Pakistan. Gold is not the same thing as ordinary currency.",
          "Your airline’s baggage rule. Gold in the hold is a theft risk. Gold in the cabin still has to be declared if the rule says so.",
          "The shop invoice, with your name if they will print it. Customs officers ask for paperwork.",
        ],
      },
      {
        t: "p",
        text: "Today’s spot prices are on the [[/gold-rates|gold rates]] pages. They are not the souk price and they are not a promise that customs will let that quantity through for free. If you are unsure, declare the gold and ask the officer. Undeclared gold can be held.",
      },
      {
        t: "p",
        text: "The same caution applies in the other direction only if you are asking a different question. This page is about arriving in Pakistan.",
      },
    ],
    [
      {
        q: "Is there a fixed duty-free gold limit for Pakistanis?",
        a: "There have been limits, and they have been revised. Check FBR and Pakistan Customs for the rule in force on the day you land. This page will not invent a gram figure.",
      },
      {
        q: "Are gold bars treated like bangles?",
        a: "Often they are not. Ask customs in writing or on the official page which form of gold you are carrying.",
      },
      {
        q: "Does a Dubai invoice avoid duty?",
        a: "An invoice proves what you bought and what you paid. It does not by itself cancel Pakistani duty.",
      },
      {
        q: "Should I pack gold in checked baggage?",
        a: "No. The risk of loss is yours. Follow the airline’s rule for valuables and still declare the gold if the customs rule requires it.",
      },
      {
        q: "Where is the official page?",
        a: "Start at the Federal Board of Revenue website and the State Bank of Pakistan. Airport desks can explain the rule on the day, but do the reading before you buy.",
      },
    ],
    [S.fbr, S.sbp],
  ),

  "roshan-digital-account": art(
    [
      {
        t: "p",
        text: "A Roshan Digital Account is a State Bank of Pakistan scheme that lets a non-resident Pakistani, and some other non-residents, open a Pakistani bank account from abroad. It is for banking, payments and investment. It is not a special exchange rate, and it is not a substitute for reading your own bank’s terms.",
      },
      {
        t: "h2",
        id: "who",
        text: "Who the State Bank says can open one",
      },
      {
        t: "p",
        text: "SBP’s own page describes eligibility for non-resident Pakistanis, including people with a NICOP or POC, and it also describes room for some foreign nationals and entities. Resident Pakistanis are covered only in the cases SBP spells out. Do not guess from a YouTube title. Read the eligibility list on the SBP Roshan Digital Account page and the FAQ.",
      },
      {
        t: "ul",
        items: [
          "Accounts come in rupees and in foreign currency. The exact product names (such as NRVA and FCVA) are on the SBP FAQ.",
          "Naya Pakistan Certificates are a separate government instrument you may be offered inside the account. The profit rates change. Read the current table on the SBP page on the day you invest.",
          "Conventional and Shariah versions exist. Pick the one you mean.",
          "The account is opened with a Pakistani bank that offers RDA, not with the State Bank itself.",
        ],
      },
      {
        t: "p",
        text: "Money you send from the Gulf still needs a sensible remittance comparison. An RDA does not guarantee the best dirham or riyal rate. See [[/guides/send-money-uae-to-pakistan|sending money from the UAE]] or [[/guides/send-money-saudi-to-pakistan|from Saudi Arabia]], and check today’s rate on [[/rates|the rates desk]].",
      },
      {
        t: "note",
        text: "This page is not tax advice. If you are unsure whether a return is taxable for you, ask a tax adviser or read FBR guidance. Do not treat a bank brochure as a ruling.",
      },
    ],
    [
      {
        q: "Can every overseas Pakistani open a Roshan Digital Account?",
        a: "Most non-resident Pakistanis can, according to SBP, if a participating bank accepts the documents. Read the current eligibility list. A bank can still ask for extra papers.",
      },
      {
        q: "What profit will Naya Pakistan Certificates pay?",
        a: "SBP publishes the rates and they change. Use the table on the SBP site. This guide will not freeze a percentage that will be wrong next month.",
      },
      {
        q: "Is the account free?",
        a: "The bank sets charges. Read that bank’s schedule before you move a large sum.",
      },
      {
        q: "Which banks offer it?",
        a: "SBP keeps a list on its RDA pages. It changes when banks join or leave. Check there, not a blog.",
      },
      {
        q: "Does an RDA replace the Protector or a visa?",
        a: "No. It is a banking and investment channel. It has nothing to do with your Gulf visa.",
      },
    ],
    [S.rda, S.rdaFaq, S.sbp, S.fbr],
  ),

  "hajj-umrah-from-the-gulf": art(
    [
      {
        t: "p",
        text: "Hajj and Umrah from the Gulf are not the same paperwork as the ballot many families use inside Pakistan. Pakistanis living in the UAE, Saudi Arabia or another Gulf country need to see which door is open to them this season: Nusuk, their host country, or Pakistan’s Ministry of Religious Affairs.",
      },
      {
        t: "h2",
        id: "check-both",
        text: "Check Nusuk and the Pakistan ministry before you pay",
      },
      {
        t: "p",
        text: "Saudi Arabia runs much of the pilgrim booking through Nusuk. Quotas, packages and who may apply from which country are announced each season. Pakistan’s Ministry of Religious Affairs runs the Pakistani Hajj scheme for people applying from Pakistan. If you are a resident in the Gulf, do not assume the Pakistan ballot is your only route, and do not assume you are barred from it. Read both sites for this year’s instruction.",
      },
      {
        t: "ul",
        items: [
          "Pay only a company you can match to the official list for that season.",
          "A cheap Umrah package that cannot show a visa path on Nusuk or an official partner is a risk.",
          "Rules on who may perform Hajj, including any gap between pilgrimages, are announced by the Saudi side. Confirm them there.",
          "Keep the passport name identical on every booking.",
        ],
      },
      {
        t: "p",
        text: "Flights into Saudi Arabia around Hajj get expensive. The notes on [[/guides/cheap-flights-saudi-to-pakistan|Saudi–Pakistan flights]] are about going home, but the same habit applies: a PNR you can open on the airline site, and baggage you have read.",
      },
    ],
    [
      {
        q: "Can a Pakistani in Dubai apply for Hajj through Nusuk?",
        a: "Sometimes residents apply through the host country’s arrangement, and sometimes through Nusuk directly. The answer is seasonal. Read Nusuk for the current window.",
      },
      {
        q: "Does the Pakistan Hajj ballot cover people who live in Saudi Arabia?",
        a: "Do not assume either way. Read this year’s instruction from the Ministry of Religious Affairs and from the Saudi organiser.",
      },
      {
        q: "Are Umrah visas open all year?",
        a: "The Kingdom opens and pauses Umrah. Check Nusuk or the Saudi visa site rather than a travel agent’s poster.",
      },
      {
        q: "What does a package usually include?",
        a: "It varies. Ask, in writing, about the visa, the hotel distance, transport and what is refunded if the visa is refused.",
      },
      {
        q: "Where do I complain about a Hajj agent in Pakistan?",
        a: "Start with the Ministry of Religious Affairs for schemes they oversee, and with FIA if money has been taken by deception. Keep receipts.",
      },
    ],
    [S.nusuk, S.mora, S.visitsaudi],
  ),
};
