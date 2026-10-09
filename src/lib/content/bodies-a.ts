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
        text: "The cheapest way to send money from the UAE to Pakistan is the quote that leaves the most rupees in the account at home, not the advert with the loudest “zero fee”. A dirham transfer has two prices: the fee, and the exchange rate. A low fee with a weak rate often loses. This guide is the practical way to compare those two prices before you hand over cash or tap send in an app.",
      },
      {
        t: "h2",
        id: "compare",
        text: "Compare the rupees, not the slogan",
      },
      {
        t: "p",
        text: "Ask every bank, exchange house or app the same question: “If I send this many dirhams right now, how many rupees will arrive, after every fee?” Write down the time as well. A rate at the counter and a rate on a banner are not the same number. Use the [[/tools/remittance|quote comparison tool]] and today’s [[/rates/aed-to-pkr|AED to PKR rate]] only as a mid-market reference. Your payout will usually be a bit less than that reference. Apna Ghar does not move the money and does not add a transfer fee of its own to that screen.",
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
        t: "p",
        text: "Do not invent a winner from last month’s screenshot. The rupee moves. Take the quotes within a few minutes of each other, for the same dirham amount, into the same kind of payout. A cash-pickup quote and a bank-deposit quote are not the same product. If one of them looks far above the mid-market rate on Apna Ghar, ask what is being left out. If one looks far below it, ask the same question. Both can be a sign that the number on the screen is not the number that will arrive.",
      },
      {
        t: "h2",
        id: "two-prices",
        text: "The fee and the rate are one price",
      },
      {
        t: "p",
        text: "Write four lines for each quote: dirhams you hand over, fee in dirhams, exchange rate they will use, and rupees the beneficiary will receive. Then ignore the slogan. The only line that feeds a family is the rupee line. A transfer advertised as zero fee can still take its cut inside a weaker rate. A transfer with a visible fee can still leave more rupees if the rate is better. Apna Ghar will not publish a “typical fee”, because fees change by company, by amount and by the hour, and a made-up fee would be a lie.",
      },
      {
        t: "p",
        text: "Ask whether any other charge can be taken off later. Some routes mention a correspondent or beneficiary-bank deduction that is not in the first fee. If the clerk cannot say whether the rupee figure is the amount that will be credited, or only the amount that will be sent before someone else takes a cut, do not treat that quote as finished. Ask them to say it in one sentence: “This many rupees will be credited.” If they will not, use a company that will.",
      },
      {
        t: "h2",
        id: "steps",
        text: "How to take a quote today",
      },
      {
        t: "ol",
        items: [
          "Decide the dirham amount you can spare after rent and food. Do not send money you need for the next ten days.",
          "Open two or three licensed channels. Use the same amount and the same payout type in each.",
          "Write the time, the legal name on the licence, the fee, the rate and the rupees.",
          "Put the two best rupee totals into the [[/tools/remittance|quote comparison tool]] so the arithmetic is in one place.",
          "If the beneficiary or the app is new, send a small test first and wait until those rupees actually show.",
          "Only then send the rest, on the same channel, and keep the receipt until the full amount is visible in Pakistan.",
        ],
      },
      {
        t: "h2",
        id: "details",
        text: "Name, IBAN and the receipt",
      },
      {
        t: "p",
        text: "The sender’s name should match the Emirates ID or passport the exchange already holds. The beneficiary’s name should match the Pakistani account, the cash-pickup ID, or the Roshan Digital Account. A missing letter, an old surname, or an account in a relative’s name is a common reason a transfer sits. Ask which number they want: a Pakistani IBAN, an old account number, or a mobile-wallet number. Do not guess. Read it back. Then check the receipt before you leave the counter or close the app.",
      },
      {
        t: "ul",
        items: [
          "Reference or tracking number.",
          "Date, time and the dirham amount, including the fee.",
          "The rupee amount they promised, and the rate.",
          "Beneficiary name and account or pickup details.",
          "The licensed company name, not only the app icon.",
        ],
      },
      {
        t: "p",
        text: "If you are sending to a bank, ask whether the credit will show the same day or after the banks in the middle have processed it. Pakistani public holidays and UAE weekends do not line up. A Friday afternoon transfer can look “stuck” when both sides are simply closed. That is annoying. It is not the same as a missing receipt. Keep the reference and check once on the next working day before you panic, and before you send the money a second time.",
      },
      {
        t: "h2",
        id: "where",
        text: "Where the rupees can land",
      },
      {
        t: "p",
        text: "A normal Pakistani bank account, a cash pickup, a mobile wallet in the beneficiary’s own name, and a Roshan Digital Account are different doors. None of them is automatically cheapest. If the family wants the money in a particular account, get that IBAN from the bank’s own app or cheque book, not from an old SMS. Read [[/guides/roshan-digital-account|what a Roshan Digital Account is]] before you assume it is the right door. It is a banking channel for many overseas Pakistanis. It is not a special dirham rate.",
      },
      {
        t: "p",
        text: "Tell the person at home what to look for: the rupee amount, the sender name, and the day. Ask them to send you a screenshot of the credit, not only a voice note that says “it came”. If the amount is short, you still have time to raise it with the company that took the dirhams. If you wait a month, the conversation is harder.",
      },
      {
        t: "h2",
        id: "avoid",
        text: "What to skip",
      },
      {
        t: "p",
        text: "Informal cash handovers have no receipt you can take to a regulator if the money vanishes. The State Bank of Pakistan expects personal remittances to move through proper channels. If someone asks you to hand over cash in Dubai and “collect from a shop” in Pakistan, you are not using a system you can complain about. A friend who has “a rate better than the bank” and no licence is not doing you a favour. You are taking the loss if that friend disappears.",
      },
      {
        t: "p",
        text: "The Pakistan Remittance Initiative has, at times, been part of how formal remittances are encouraged. Schemes change. Read the current position on the State Bank site rather than a poster in an exchange shop. Do not choose a channel because a poster mentions a prize, a rebate or a points scheme. Choose it because the rupees are higher and the company is one you can complain about.",
      },
      {
        t: "h2",
        id: "complain",
        text: "If the rupees do not arrive",
      },
      {
        t: "ol",
        items: [
          "Find the reference number, the time and the licensed company name.",
          "Ask that company, in writing if you can, where the transfer is. Note the reply.",
          "Do not send a second full amount until you know the first one is lost or returned.",
          "If the company will not help, use the complaint route of the Central Bank of the UAE for a business it licenses. Keep the receipt.",
          "If the problem is on the Pakistani account, the beneficiary can ask their own bank, and the State Bank of Pakistan is the authority for formal inflows.",
        ],
      },
      {
        t: "p",
        text: "Checked on 9 October 2026, the places to start are still the Central Bank of the UAE, the State Bank of Pakistan, and the State Bank’s Roshan Digital Account pages if that is where you asked the money to land. Those sites do not list a single “best” exchange house, and neither does Apna Ghar. The comparison is yours, on the day, in rupees.",
      },
    ],
    [
      {
        q: "Is a zero-fee transfer from the UAE always cheaper?",
        a: "No. The exchange rate can hide the cost. Compare the rupees that actually arrive, after every fee, for the same dirham amount. A visible fee with a stronger rate can beat a zero-fee banner.",
      },
      {
        q: "Should I trust the rate on Apna Ghar?",
        a: "It is a mid-market reference, not the rate your exchange will give you. Check the payout before you send. Apna Ghar does not operate the transfer.",
      },
      {
        q: "Can I send dirhams into a Roshan Digital Account?",
        a: "Many overseas Pakistanis receive money in an RDA. Confirm with your Pakistani bank that your account can take the transfer you are about to make, and match the account details on the UAE receipt. An RDA is not automatically the best rate.",
      },
      {
        q: "How fast should the money arrive?",
        a: "It depends on the channel and the banks in the middle. Ask for the expected time and keep the receipt until the rupees show up. Weekends and public holidays on either side can add a day. A missing reference number is a bigger problem than a slow holiday.",
      },
      {
        q: "Where do I complain about a UAE exchange?",
        a: "Start with the company’s own complaint desk and keep the receipt. The Central Bank of the UAE licenses exchange businesses. For the Pakistan side, the State Bank is the authority. Take the reference number with you.",
      },
      {
        q: "Should I send a test before a large amount?",
        a: "Yes, if the beneficiary, the IBAN or the app is new to you. Wait until that small credit appears, then send the rest on the same details. A test does not make an unlicensed handover safe.",
      },
      {
        q: "Does Apna Ghar charge a remittance fee?",
        a: "No. The fee and the rate belong to the bank or exchange you choose. This site will not invent those numbers. Compare the rupees on the day you send.",
      },
    ],
    [S.cbuae, S.sbp, S.rda],
  ),

  "send-money-saudi-to-pakistan": art(
    [
      {
        t: "p",
        text: "To send money from Saudi Arabia to Pakistan cheaply, compare the rupees you will receive, not the Arabic or English banner in the app. Banks, licensed money shops and phone wallets all take a cut, either as a fee or inside the rate. The practical question is the same every payday: if I hand over this many riyals now, how many rupees will land, after every charge?",
      },
      {
        t: "h2",
        id: "compare",
        text: "How to compare a riyal transfer",
      },
      {
        t: "ol",
        items: [
          "Decide the amount in riyals you want to send, after your own rent and food.",
          "Get two or three live quotes from licensed businesses. Write the fee and the rupee amount separately.",
          "Use the same payout type in each quote. Cash pickup, a bank credit and a wallet are not one product.",
          "Check the name on the receipt matches a business you can look up.",
          "Send a small test first if you are using a channel, an IBAN or a beneficiary that is new to you.",
          "Send the rest only after the test rupees are visible, and keep the receipt until the full credit shows.",
        ],
      },
      {
        t: "p",
        text: "Use the [[/tools/remittance|quote tool]] for the arithmetic and the [[/rates/sar-to-pkr|SAR to PKR page]] as the mid-market yardstick. A quote far above that yardstick is a reason to ask questions. A quote far below it is also a reason to ask questions. Apna Ghar shows a reference rate. It is not the rate a bank or exchange in the Kingdom will give you, and it is not a fee. Do not treat a zero-fee banner as the cheapest path. The rate can hide the cost. Compare the rupees.",
      },
      {
        t: "h2",
        id: "write-down",
        text: "What to write down at the counter or in the app",
      },
      {
        t: "ul",
        items: [
          "The time you took the quote. A morning rate and an evening rate can differ.",
          "Riyals you pay, the fee, and the rupees promised.",
          "Whether that rupee figure is the amount that will be credited, or a figure before another bank takes a cut.",
          "Beneficiary name exactly as it is on the Pakistani ID or account.",
          "IBAN, account number, or wallet number, read back once.",
          "The reference number and the legal name of the company that took the riyals.",
        ],
      },
      {
        t: "p",
        text: "Apna Ghar will not invent a Saudi transfer fee. Fees move with the company, the amount and the hour. Anyone who tells you a single “Saudi rate today” without showing the rupees on a receipt is guessing. Take the live quote yourself. If a colleague’s screenshot is from yesterday, it is already a different market.",
      },
      {
        t: "h2",
        id: "names",
        text: "Iqama name, beneficiary name and a new account",
      },
      {
        t: "p",
        text: "The sender’s name should match the identification the bank or exchange already holds. If your Iqama name and the name on the app do not match, the transfer can be stopped. Ask the counter before you queue with a large amount. Do not send from someone else’s Iqama because their limit is free, and do not let a colleague send your salary in their name. If the money goes missing, the receipt will not be yours.",
      },
      {
        t: "p",
        text: "On the Pakistan side, the account should belong to the person you mean to pay. A cousin’s account “for convenience” becomes a family argument the day the rupees are short. If you want the money in a Roshan Digital Account, confirm the exact details with the Pakistani bank first. Read [[/guides/roshan-digital-account|how an RDA works]]. It is one possible place for the money to land. It does not guarantee a better riyal rate than a normal transfer.",
      },
      {
        t: "h2",
        id: "timing",
        text: "How long it takes, and when to wait",
      },
      {
        t: "p",
        text: "Ask for the expected time in hours or business days, not “soon”. Saudi weekends and Pakistani public holidays do not match. A transfer started late on a Thursday can sit until both banking systems are open. That delay is not proof the money is gone. What you need is the reference number. Check with the company that took the riyals before you send the salary a second time. A second send, made in panic, is how people pay twice.",
      },
      {
        t: "p",
        text: "Tell the family what rupee amount to expect and which name will appear. Ask for a screenshot of the credit. A voice note is easy to mishear. If the credited rupees are less than the receipt, raise it while the reference is fresh. Write down the staff name if you were at a counter.",
      },
      {
        t: "h2",
        id: "legal",
        text: "Keep it on a receipt",
      },
      {
        t: "p",
        text: "The Saudi Central Bank supervises banks and remittance businesses in the Kingdom. In Pakistan, the State Bank of Pakistan is the authority for formal inflows. A transfer with no receipt is a poor idea, even when a friend says it is “what everyone does”. The State Bank expects personal remittances to move through proper channels. A shop-to-shop handover inside a camp has almost nowhere to complain if the rupees never appear.",
      },
      {
        t: "p",
        text: "Incentive schemes on the Pakistan side have changed before and can change again. Read the current position on the State Bank site rather than a banner in an app. Do not pick a channel because it mentions a prize. Pick it because the rupee total is higher and you can name the licensed company. Checked on 9 October 2026, the authorities to know are still the Saudi Central Bank and the State Bank of Pakistan, including the Roshan Digital Account pages if that is the account you used. Neither site ranks a “cheapest app”, and Apna Ghar does not either.",
      },
      {
        t: "h2",
        id: "complain",
        text: "If the transfer stalls",
      },
      {
        t: "ol",
        items: [
          "Open the receipt and copy the reference, the time and the riyal amount.",
          "Contact the company that took the money. Ask where the transfer is, and keep the reply.",
          "Ask the beneficiary to check with their bank whether a credit is pending under a slightly different spelling.",
          "Do not hand a second bundle of cash to a different person while the first transfer is still open.",
          "If the licensed company will not answer, use its complaint process and the route the Saudi Central Bank provides for supervised firms. On the Pakistan side, the receiving bank and the State Bank are the authorities.",
        ],
      },
      {
        t: "p",
        text: "The same habit is worth using when you send from the UAE. The currency and the regulator change, but the test does not. The guide to [[/guides/send-money-uae-to-pakistan|sending dirhams]] is the same idea in another country: rupees received, on a receipt, from a business you can name.",
      },
    ],
    [
      {
        q: "Which Saudi app is the cheapest to Pakistan?",
        a: "It changes by the hour and by the amount. Compare the rupees on the day you send. This site does not rank companies, and it does not invent a fee.",
      },
      {
        q: "Does my Iqama name have to match the bank account?",
        a: "The sender’s name should match the identification the bank or exchange already holds. If it does not, the transfer can be stopped. Ask the counter before you queue. Do not send under someone else’s Iqama.",
      },
      {
        q: "Can the money go to a Roshan Digital Account?",
        a: "Often yes. Confirm the exact account details with the Pakistani bank, then match them on the Saudi receipt. An RDA is not automatically a better rate than another formal transfer.",
      },
      {
        q: "What if the rupees never arrive?",
        a: "Use the reference number on the receipt with the company that took the riyals. Note the time and the staff name if you were at a counter. Do not send the amount again until you know the first transfer has failed or been returned.",
      },
      {
        q: "Is a cash handover in the camp allowed?",
        a: "If there is no licensed receipt, you have almost no way to complain. Prefer a channel supervised in Saudi Arabia and recorded in Pakistan. A better-sounding rate without a receipt is how people lose a month’s salary.",
      },
      {
        q: "Is a zero-fee riyal transfer always cheaper?",
        a: "No. Compare the rupees that will be credited. The rate can hide a larger cut than a fee you can see.",
      },
      {
        q: "Should I trust the SAR to PKR figure on Apna Ghar?",
        a: "Use it as a mid-market yardstick only. Your bank or exchange has its own rate. A quote very far from the yardstick, in either direction, is a reason to ask questions before you pay.",
      },
    ],
    [S.sama, S.sbp, S.rda],
  ),

  "cost-of-living-dubai": art(
    [
      {
        t: "p",
        text: "The cost of living in Dubai for a single Pakistani worker is mostly rent. A bed in a shared room and a studio flat are different lives, and different salaries. There is no official “Dubai budget” that fits every person. The figures below are planning examples you can edit in the [[/tools/salary-converter|salary converter]]. They are not a government survey and they are not a promise of what a room will cost this month.",
      },
      {
        t: "h2",
        id: "budget",
        text: "A planning budget, not a survey",
      },
      {
        t: "p",
        text: "On the [[/tools/salary-converter|salary converter]], the Dubai single-worker lines start as an example: shared rent, simple food, metro or bus, a phone and a little left for emergencies. The starting lines, which you should replace, are rent and housing AED 1,800, food AED 900, transport AED 350, phone and internet AED 200, and other costs AED 400. Change every line. If your company gives housing, set rent to zero. If you send money home, that is not a living cost — it comes out of what is left. Checked on 9 October 2026, those dirham lines are still only the editable example inside the converter, not an official index.",
      },
      {
        t: "ul",
        items: [
          "Ask whether the offer is basic salary or a package with allowances. Gratuity in the UAE is worked out on basic wage. Read [[/guides/uae-gratuity-rules|how gratuity is counted]] before you treat the whole package as the number that matters later.",
          "Ask who pays the visa, medical and Emirates ID. A salary that looks fine can feel thin if those bills come out of your first months.",
          "Price a room in the area you will actually live, not a national average from a video. Include the deposit the landlord really asked for.",
          "Separate a fixed housing allowance from a free room. If the allowance is smaller than the rent, the gap is your cost.",
        ],
      },
      {
        t: "p",
        text: "Food and transport are easier to cut than rent. A car is rarely the cheap option for one person near a metro line. A car adds fuel, insurance, parking and tolls, and those lines belong in the converter if you will actually drive. Cooking most meals will usually beat eating out every day, but write the grocery number you can live with, not a number from a comment. Run the dirhams through the [[/rates/aed-to-pkr|AED to PKR rate]] so the family at home can see the same salary in rupees. That rate is a mid-market reference. Your exchange will show its own.",
      },
      {
        t: "h2",
        id: "offer",
        text: "Read the offer before you accept the room",
      },
      {
        t: "p",
        text: "Put the basic wage in one column and every allowance in another. Overtime, commission and a promised “target” are not pay you can count on. Budget on the basic salary plus fixed allowances written in the contract. If the contract says the company provides accommodation, ask where, how many people share the room, and whether a deduction still appears on the payslip. A bed space in a far district is not the same as a room near the job. Add the bus or metro fare for the real commute, six days a week, not a one-day sample.",
      },
      {
        t: "ol",
        items: [
          "Write the monthly basic wage and each fixed allowance.",
          "Write rent, deposit, and any agency fee the landlord or agent actually quoted.",
          "Add food, a phone, transport, and a small emergency line. The converter’s “other” line is there for that.",
          "If the contract pays an annual leave ticket, you may spread that amount across twelve months. If it does not, leave it out.",
          "Subtract what you intend to send home only after the living lines are filled. Sending money is a choice from the leftover, not a Dubai living cost.",
          "Look at the rupee picture with the family. A salary that feels large in dirhams can look ordinary once rent is paid.",
        ],
      },
      {
        t: "h2",
        id: "shared",
        text: "Shared room, partition and studio",
      },
      {
        t: "p",
        text: "People say “rent in Dubai” as if it were one price. It is not. A bed in a shared room, a partition in a flat, and a studio you do not share are three different budgets. The converter’s single-worker example is the shared-room shape. If you are looking at a studio, delete AED 1,800 and type the studio quote. Do not average them. Also ask what is included: electricity, water, internet, and the number of people already in the flat. A low bed fee with a surprise electricity split can cost more than a slightly higher rent that includes the bills.",
      },
      {
        t: "p",
        text: "Visit the building if you can, at the time you would actually sleep, not only on a Friday afternoon. Ask how salaries are paid and whether the landlord wants cash without a receipt. You want a receipt and the name of the person you pay. Keep a photo of the room on the day you move in. None of that is a legal ruling. It is how you avoid arguing later about a deposit.",
      },
      {
        t: "h2",
        id: "family",
        text: "If you later sponsor family",
      },
      {
        t: "p",
        text: "A single worker’s room does not become a family budget by adding a little food. The converter also has a family sketch for a one-bedroom flat: rent and housing AED 4,500, food AED 2,200, transport AED 700, phone and internet AED 350, school or childcare AED 1,500, and other costs AED 800. That is still a planning example, checked on 9 October 2026 as the editable starting point, not a survey. Replace the school line with a figure the school has given you in writing. Uniforms, the bus and books are often extra.",
      },
      {
        t: "p",
        text: "Family residence has its own salary rule, separate from whether you can personally afford the flat. The official UAE page says: “The sponsor must have a minimum salary of AED 4,000 or AED 3,000 plus accommodation.” Checked on 9 October 2026. That page was updated on 28 September 2026. The same page says expatriate residents may bring in a spouse, unmarried daughters, sons under 25 years old, and children with special needs. Medical fitness applies to family members who have completed the age of 18. The page also says conditions can change and that you should confirm with ICP or GDRFA. Read the current line, and the longer note on [[/guides/family-visa-uae-salary-requirement|family visa salary]], before you give notice on a home in Pakistan.",
      },
      {
        t: "note",
        text: "AED 4,000, or AED 3,000 plus accommodation, is the sponsorship test on the UAE government page, not a recommended lifestyle budget. A visa you can apply for can still be a flat you cannot pay for. Run both numbers.",
      },
      {
        t: "h2",
        id: "leftover",
        text: "What is left to send home",
      },
      {
        t: "p",
        text: "After the living lines, whatever remains is the money you could send, save, or use for a ticket. Compare transfer quotes by the rupees that arrive, not by a zero-fee advert. The steps are in [[/guides/send-money-uae-to-pakistan|sending money from the UAE to Pakistan]]. Do not promise the family a fixed rupee amount every month if overtime is not in the contract. Promise what the basic wage can support after the rent you have actually been quoted.",
      },
    ],
    [
      {
        q: "How much does a single worker need in Dubai?",
        a: "It depends on the room. Use the converter and type the rent you were actually quoted. The starting example is AED 1,800 for shared housing, AED 900 for food, AED 350 for transport, AED 200 for a phone and AED 400 for other costs. Those lines are a planning sketch, not an official budget. Do not copy a number from a comment section.",
      },
      {
        q: "Is the figure on this page an official index?",
        a: "No. It is a planning example you can edit. Dubai does not publish one budget for Pakistani workers. Checked on 9 October 2026, the dirham lines above are still only the converter’s starting point.",
      },
      {
        q: "Should I include annual leave ticket in the monthly budget?",
        a: "Only if your contract really pays it. Spread that amount across twelve months if you want a monthly picture. If the ticket is not in the contract, leave it out.",
      },
      {
        q: "Does overtime belong in the salary?",
        a: "Treat overtime as extra, not as pay you can count on. Budget on the basic salary plus fixed allowances you can see in the contract. Gratuity later is worked out on basic wage, not on the full package.",
      },
      {
        q: "Where do I check the dirham rate?",
        a: "The AED to PKR page on Apna Ghar is a mid-market reference. Your exchange or bank will show its own rate when you send money.",
      },
      {
        q: "What salary do I need to sponsor my family?",
        a: "The UAE government page, updated on 28 September 2026, says the sponsor must have a minimum salary of AED 4,000 or AED 3,000 plus accommodation. Checked on 9 October 2026. That is the sponsorship test, not your food and school budget. Confirm the current line with ICP or GDRFA, because the page says conditions can change.",
      },
      {
        q: "Who can I sponsor?",
        a: "The same official page says expatriate residents may bring in a spouse, unmarried daughters, sons under 25, and children with special needs. Family members who have completed 18 need a medical fitness test. Read the page before you apply, and price the flat separately.",
      },
    ],
    [
      S.mohre,
      S.uae,
      S.icp,
      {
        label: "UAE: residence visa for family members",
        href: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members",
      },
    ],
  ),

  "cost-of-living-riyadh": art(
    [
      {
        t: "p",
        text: "The cost of living in Riyadh for a Pakistani family is driven by three things: the flat, the school, and whether you need a car. A single man’s shared room is not a useful comparison. There is no official family budget that fits every neighbourhood. The riyal figures in this guide are planning examples you can edit in the [[/tools/salary-converter|salary converter]]. They are not a survey.",
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
          "The deposit, and whether electricity, water and internet are inside the rent or on top.",
          "School fees from the school, in writing. Do not use a Facebook average. Ask about the bus, uniform, books and registration as separate lines.",
          "A car, insurance and fuel if the compound or the school is not on a bus. A second car is a different budget again.",
          "Iqama medical insurance the way your employer actually provides it. Ask HR what dependents cost, and whether that cost is deducted from salary.",
          "Food. Cooking at home is the lever most families can move. Write the grocery bill you can keep, not a restaurant week.",
        ],
      },
      {
        t: "p",
        text: "The family preset on the [[/tools/salary-converter|salary converter]] is only a starting sketch in riyals. The lines you should overwrite are rent and housing SAR 2,500, food SAR 1,800, transport SAR 600, phone and internet SAR 250, school SAR 1,500, and other costs SAR 600. Replace the school line with the offer you received. Then look at the [[/rates/sar-to-pkr|riyal to rupee rate]] so you can see what is left to send home. Checked on 9 October 2026, those six lines are still the converter’s editable example, not an official cost of living index. The rate on Apna Ghar is a mid-market reference. A bank will use its own.",
      },
      {
        t: "p",
        text: "Family visit and family residence rules, including any salary floor, are set by the Saudi authorities and have changed before. Read the current rule on Absher or the official visa guidance before you give notice on a flat in Pakistan. This page will not print a riyal minimum for family sponsorship, because that figure is not something to copy from a camp conversation. If a colleague quotes a salary floor, open Absher and read the line that matches your Iqama.",
      },
      {
        t: "h2",
        id: "rent",
        text: "How to price the flat",
      },
      {
        t: "p",
        text: "Ask for the yearly rent and the number of payments. Some landlords want a larger slice up front. A monthly picture that ignores that first cheque will look fine and then break. Type the true monthly equivalent into the converter, and keep a separate note of the cash you must have on the day you sign. If an agent’s commission is one month, or half a month, add it. Do not assume it is included because nobody mentioned it.",
      },
      {
        t: "ol",
        items: [
          "Visit the flat at the time of day you would live there, not only in a managed viewing.",
          "Ask who lives in the building and how far the school run is without a car.",
          "Write the deposit, the commission and what the landlord will return if you leave on time.",
          "Photograph the meter readings and the condition of the walls on move-in day.",
          "Get the rent receipt in the name of the person who pays. Cash without a name is a weak record.",
        ],
      },
      {
        t: "p",
        text: "A compound and an ordinary apartment are different products. The compound may include a pool you will not use and a rent you cannot. The apartment may need a car the compound bus would have replaced. Price the life you will actually live. A friend’s lower rent in another district is not your rent if your child’s school is an hour away.",
      },
      {
        t: "h2",
        id: "school",
        text: "School fees are not a Facebook average",
      },
      {
        t: "p",
        text: "Email the school and ask for this year’s tuition, the admission fee, the bus, the uniform and any book list. Put only the numbers they confirm into the converter. The SAR 1,500 school line is a placeholder so the row is not empty. It is not a typical Pakistani-family fee and it is not a cap. Two children are not one child doubled in a neat way either: some schools discount a sibling and some do not. Ask.",
      },
      {
        t: "p",
        text: "Ask what happens to fees already paid if the family residence is refused or delayed. Get that answer in writing before you transfer a term’s fees. A visa you hope to receive is not a receipt the school has to honour. Read the current family-visa instruction on Absher before you pay a non-refundable admission charge.",
      },
      {
        t: "h2",
        id: "car",
        text: "Car, insurance and the school run",
      },
      {
        t: "p",
        text: "Riyadh is hard to live in as a family without thinking about transport. If the school bus exists and the timings work, type that fee and leave the car out. If they do not, you need a car, insurance, fuel, servicing and a parking reality at the building. The converter’s transport line of SAR 600 is only a starting sketch. Replace it. Do not copy a colleague’s fuel spend if your commute is twice as long.",
      },
      {
        t: "p",
        text: "A single worker’s shared-room preset in the same converter is a different life: rent SAR 1,000, food SAR 800, transport SAR 250, phone SAR 150 and other costs SAR 350. Those lines are also planning examples, not a survey. Do not use them to decide whether a family can move. A man sharing a room and sending most of his salary home is not the same household as a spouse and children in a flat.",
      },
      {
        t: "h2",
        id: "salary",
        text: "What to ask HR before anyone flies",
      },
      {
        t: "ul",
        items: [
          "Does the contract pay a housing allowance, provide a flat, or neither?",
          "Which dependents does medical insurance cover, and what is deducted?",
          "Is there a schooling allowance, and is it paid to you or to the school?",
          "Will the company help with the family residence file, or is that your own Absher work?",
          "What is basic wage versus allowances? If you later compare this job with a UAE offer, gratuity there is on basic wage. See [[/guides/uae-gratuity-rules|UAE gratuity]] only for that UAE question. Do not mix the two contracts in one total.",
        ],
      },
      {
        t: "p",
        text: "After rent, school, food and transport, the leftover is what you could send to Pakistan. Compare that transfer by the rupees received, not by a zero-fee banner. The steps are in [[/guides/send-money-saudi-to-pakistan|sending money from Saudi Arabia]]. Do not promise relatives a fixed monthly rupee figure until the school letter and the tenancy are real.",
      },
      {
        t: "h2",
        id: "single-versus-family",
        text: "A visit is not the same bill as residence",
      },
      {
        t: "p",
        text: "A family visit has flights, a short stay and food. Family residence has a flat, a school year and insurance. People mix those costs and then feel cheated by a job that was only ever a single-worker job. If the plan is a visit, budget the visit. If the plan is residence, budget the residence and confirm on Absher that your Iqama can sponsor them this year. Giving notice on a rented home in Pakistan is the last step, after the Saudi rule and the Riyadh quotes are both on paper.",
      },
    ],
    [
      {
        q: "Is Riyadh cheaper than Dubai for a family?",
        a: "Often rent is lower, but school fees and a car can erase that. Compare your two real quotes, not a headline. The converter’s starting sketches are not a survey of either city.",
      },
      {
        q: "Can I use the salary on my Iqama for a family visa?",
        a: "Family sponsorship rules are official and they change. Check Absher and your employer’s government relations staff. Do not rely on a camp rumour, and do not copy a dirham rule from the UAE onto a Saudi Iqama. This page does not print a riyal salary floor.",
      },
      {
        q: "Are school fees regulated to one price?",
        a: "No. Ask the school for the year’s tuition, bus and uniform. Put that number in the converter. The SAR 1,500 line is only a placeholder.",
      },
      {
        q: "Should I budget in riyals or rupees?",
        a: "Budget rent and school in riyals. Convert the leftover with a current rate when you talk to family. The SAR to PKR page on Apna Ghar is a mid-market reference, not your bank’s rate.",
      },
      {
        q: "What if my company pays housing?",
        a: "Set the rent line to zero only for the housing they actually provide. A housing allowance is not the same as a free flat if the allowance is smaller than the rent. Type the gap as your cost.",
      },
      {
        q: "Are the riyal figures on this page official?",
        a: "No. Checked on 9 October 2026, they are the editable family and single-worker examples in the salary converter. Replace rent with the landlord’s quote and school with the school’s letter.",
      },
      {
        q: "Does a family visit cost the same as bringing them to live?",
        a: "No. A visit is flights and a short stay. Living in Riyadh adds the flat, the school year and dependent insurance. Confirm the residence rule on Absher before you treat a visit as a trial move.",
      },
    ],
    [S.absher, S.hrsd, S.sbp],
  ),

  "uae-gratuity-rules": art(
    [
      {
        t: "p",
        text: "UAE gratuity, the end-of-service benefit, is set out in Federal Decree-Law No. 33 of 2021. For a full-time worker who completes at least one year, the usual calculation is 21 days of basic wage for each of the first five years, and 30 days of basic wage for each year after that. The total is capped at two years of wage. Under one year of service there is no gratuity under that rule. Checked on 9 October 2026. This page explains those steps in plain language. It is not a MOHRE decision.",
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
          "A daily rate in the calculator is basic wage divided by 30. That is the daily wage the estimator uses.",
          "A part year is included in proportion once you have crossed one full year.",
          "Under the current law, resigning does not by itself cut the gratuity the way the old law did. Confirm your own case with MOHRE if someone tells you “resignation means one third”.",
          "Days of unpaid leave are not counted as service. Unpaid leave and misconduct can change the result.",
          "The total stops at two years of wage even if the raw sum of days is higher.",
        ],
      },
      {
        t: "p",
        text: "The [[/tools/gratuity-calculator|gratuity calculator]] follows that pattern and labels the result an estimate. It is not a MOHRE decision. Limited contracts, misconduct dismissals and some domestic or part-time arrangements have their own rules. Read the chapter on end of service on the UAE government portal and ask MOHRE if your case is unusual. MOHRE’s site is the ministry’s own door for labour questions.",
      },
      {
        t: "h2",
        id: "estimate",
        text: "Why two people with the same package get different numbers",
      },
      {
        t: "p",
        text: "If one contract shows a high basic and small allowances, and another shows the reverse, the gratuity is different even when the monthly cash feels the same. That is a reason to read the offer before you join, not only the total. A housing allowance, a transport allowance and a food allowance can make payday look healthy while the basic wage, which gratuity uses, stays small. Ask the employer to point at the word “basic” on the offer. If they will not, you do not yet know the end-of-service sum.",
      },
      {
        t: "h2",
        id: "steps",
        text: "How to work the estimate yourself",
      },
      {
        t: "p",
        text: "Suppose the basic wage is AED 3,000. That number is only here so the steps are easy to see. It is not a typical salary and it is not a MOHRE award. The calculator’s daily wage is basic divided by 30, so the daily piece is AED 100. For each of the first five years the estimate uses 21 of those days. For each year after the fifth it uses 30 of those days. Three full years would be 3 times 21 times 100, which is AED 6,300. Six full years would be five years at 21 days plus one year at 30 days: AED 10,500 plus AED 3,000, which is AED 13,500.",
      },
      {
        t: "p",
        text: "The cap is two years of wage. Two years of a AED 3,000 basic wage is AED 72,000. The six-year illustration sits under that cap, so the cap does not change it. A very long service can hit the cap. The calculator applies it. Under one year, the estimate is zero. You do not get a fraction of the 21 days for eleven months of work under the basic rule described here. A contract might still promise something else. Read the contract, and do not treat a promise that is not in it as pay.",
      },
      {
        t: "ol",
        items: [
          "Copy the basic wage from the contract or the payslip, not the total that hits your account.",
          "Count complete years. The calculator then turns extra days into a fraction of a year so a part year can be included in proportion. MOHRE may count that fraction differently. The screen is an estimate.",
          "Take unpaid leave out of the service you are counting. Those days are not service.",
          "Multiply. First five years at 21 days of basic wage per year, then 30 days per year.",
          "If the result is more than two years of wage, stop at two years of wage.",
          "If service is under one year, the gratuity estimate is zero.",
          "If you were dismissed for misconduct, or your contract is not a standard full-time one, stop and ask MOHRE. The calculator cannot see that.",
        ],
      },
      {
        t: "h2",
        id: "resign",
        text: "Resignation, limited contracts and misconduct",
      },
      {
        t: "p",
        text: "People still repeat the old one-third and two-thirds cuts for a worker who resigns. Under Decree-Law 33 of 2021, a worker who has completed at least a year is generally entitled to the end-of-service benefit even when they resign. That is a change from the previous law. It is also the sort of sentence a camp conversation gets wrong. If someone tells you that resignation means one third, ask them to show you the current law, or ask MOHRE, rather than accepting a memory of the old rule.",
      },
      {
        t: "p",
        text: "Unpaid leave is the other quiet change to the result. If you took months without pay, those days are not counted as service. A five-year anniversary on the calendar can be less than five years of counted service. Misconduct can change the result too. The calculator does not ask why the job ended, because it cannot judge a dismissal. If the employer says you forfeited gratuity, that is a dispute. Keep the contract, the payslips, the Emirates ID and any termination letter, and take them to MOHRE. Do not sign a clearance that says you received the money if you have not.",
      },
      {
        t: "p",
        text: "Limited-term contracts, part-time work and domestic work are not automatically the same sum as a full-time private-sector job. The calculator is built for the usual full-time pattern: 21 days, then 30, daily wage equal to basic divided by 30, zero under one year, and a cap of two years of wage. If your contract says something else on its face, the contract and MOHRE outrank the screen.",
      },
      {
        t: "h2",
        id: "before-you-join",
        text: "What to check before you join",
      },
      {
        t: "ul",
        items: [
          "Find the basic wage in writing. A higher total with a tiny basic is a smaller gratuity later.",
          "Ask which allowances are really allowances, and which ones the employer might fold into basic. Get the answer on the offer, not in a voice note.",
          "Do not budget your life on gratuity. It is paid at the end, and only if the rules are met. Monthly rent has to come from wages. The [[/tools/salary-converter|salary converter]] is the place for that monthly picture.",
          "Keep every payslip. If basic wage changes, the later calculation has to follow the wage the law uses, and you will want the history.",
          "When you leave, ask for the end-of-service figure in writing and compare it with the calculator. A gap is a reason to ask MOHRE, not a reason to guess that the website is the court.",
        ],
      },
      {
        t: "h2",
        id: "saudi",
        text: "Saudi end-of-service is a different law",
      },
      {
        t: "p",
        text: "The same calculator on Apna Ghar can switch to Saudi Arabia, but those riyals are not UAE gratuity. Do not type a Saudi wage into the UAE pattern of 21 days and 30 days. Saudi end-of-service is in the Labour Law. Checked on 9 October 2026, Article 84 is half a month’s wage for each of the first five years, then a full month for each year after that. Article 85 covers resignation: one third of the award after two to five years, two thirds after five to ten years, and the full award after ten years. The one-third starts after a service of not less than two years, so a shorter resignation is outside those fractions.",
      },
      {
        t: "p",
        text: "Article 87 keeps the full award in some cases even when the worker leaves. The exceptions named in that article include force majeure beyond the worker’s control, and a female worker who ends the contract within six months of marriage or within three months of giving birth. The calculator’s resignation button does not apply Article 87 by itself. If one of those cases is yours, read the law and ask the Ministry of Human Resources, and do not accept the lower resignation estimate as the last word. The statute file is the Bureau of Experts download linked below. Wage in that law is not the same sentence as UAE basic wage. Use the definition in the file, not a Gulf rumour.",
      },
      {
        t: "note",
        text: "Nothing on this page is legal advice. MOHRE decides UAE disputes. A calculator estimate that ignores unpaid leave or misconduct will be wrong for that worker even when the day-count looks tidy.",
      },
    ],
    [
      {
        q: "Is gratuity paid if I resign?",
        a: "Under Decree-Law 33 of 2021, a worker who has completed at least a year is generally entitled to the end-of-service benefit even when they resign. The old one-third and two-thirds cuts belonged to the previous law. Confirm on u.ae or with MOHRE. Checked on 9 October 2026, that is still the reading this guide uses. It is not a ruling on your file.",
      },
      {
        q: "Does the calculator include my housing allowance?",
        a: "No. Put in the basic wage only, unless MOHRE or your contract says a particular allowance counts. When in doubt, ask MOHRE. Two workers with the same total pay and different basic wages get different estimates.",
      },
      {
        q: "What if I worked less than one year?",
        a: "The law’s gratuity starts after one year of continuous service. Your contract might still promise something. The calculator returns zero below one year. Unpaid leave does not count toward that year.",
      },
      {
        q: "Can gratuity be more than two years of wage?",
        a: "The statute caps the benefit at two years of wage. The calculator applies that cap. Checked on 9 October 2026.",
      },
      {
        q: "Is this legal advice?",
        a: "No. It is a reading aid. MOHRE and the courts decide real disputes. Misconduct and some contract types can change the result. The calculator cannot see those facts.",
      },
      {
        q: "Why does the calculator divide basic wage by 30?",
        a: "That is the daily wage it uses: basic wage divided by 30, then 21 of those days for each of the first five years and 30 days for each year after. It is an estimate of the pattern in Decree-Law 33 of 2021, not a MOHRE printout.",
      },
      {
        q: "Does this page also calculate Saudi end-of-service?",
        a: "The calculator has a Saudi switch, but the law is different. Article 84 is half a month for each of the first five years and a full month after that. Article 85 scales a resignation to one third after two to five years, two thirds after five to ten, and the full award after ten. Article 87 can still give the full award, including for force majeure beyond the worker’s control, and for a female worker who ends the contract within six months of marriage or three months of giving birth. Read the law file. Do not use the UAE 21-day rule for a Saudi job.",
      },
    ],
    [
      S.mohre,
      S.uae,
      {
        label: "Saudi Labour Law PDF (Bureau of Experts)",
        href: "https://laws.boe.gov.sa/Files/Download/?attId=704cf56e-eb7a-4ddb-8c28-adbb01244dc6",
      },
    ],
  ),

  "gold-carry-dubai-saudi-pakistan": art(
    [
      {
        t: "p",
        text: "How much gold you can carry from Dubai or Saudi Arabia to Pakistan is a customs question, and the honest answer is: read the current passenger rules before you fly. Gram limits and duty rates have changed over the years. A number in a WhatsApp status is not a law. This page will not invent a gram figure, including the “10 grams” line that circulates in chats. Checked on 9 October 2026, there is still no single current official gram cap to copy onto this page.",
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
          "The passenger declaration. Gold and precious metals are meant to be declared. That duty is not the same thing as a gram allowance.",
          "Any State Bank rule on bringing gold into Pakistan. Gold is not the same thing as ordinary currency.",
          "Your airline’s baggage rule. Gold in the hold is a theft risk. Gold in the cabin still has to be declared if the rule says so.",
          "The shop invoice, with your name if they will print it. Customs officers ask for paperwork.",
          "The departure country’s own rule for taking gold out. This page is about arriving in Pakistan. It does not set a Dubai or Saudi export limit.",
        ],
      },
      {
        t: "p",
        text: "Today’s spot prices are on the [[/gold-rates|gold rates]] pages. They are not the souk price and they are not a promise that customs will let that quantity through for free. Making charges sit on top of the metal. If you are unsure, declare the gold and ask the officer. Undeclared gold can be held.",
      },
      {
        t: "h2",
        id: "declare",
        text: "Declare gold on the passenger form",
      },
      {
        t: "p",
        text: "Pakistan Customs requires declaration of gold and precious metals on the passenger declaration form notified by SRO 689(I)/2019. The Federal Board of Revenue has explained that this form widened the declaration so that it covers gold jewellery, precious stones and other prohibited or restricted goods, for passengers coming in and passengers going out. Checked on 9 October 2026. Declaring is how you put the gold on the record. It is not a trick that cancels duty, and it is not something to skip because a relative said “ornaments do not count”.",
      },
      {
        t: "p",
        text: "Fill the form for what you are actually carrying. Do not leave the gold line blank and hope the bangles look like ordinary clothes. If an officer asks what you bought in the Gulf, the invoice is the useful paper: shop name, date, weight if the shop printed it, karat, and your name. An invoice proves what you bought and what you paid. It does not by itself cancel Pakistani duty.",
      },
      {
        t: "h2",
        id: "reasonable",
        text: "Reasonable jewellery is not a gram cap",
      },
      {
        t: "p",
        text: "The older Baggage Rules PDF on the FBR site allows personal wearing apparel, and it allows personal jewellery in reasonable quantity, for Pakistani nationals. Those duty-free allowances are tied to the first visit of the year. Checked on 9 October 2026, that PDF does not state a single gram cap. “Reasonable quantity” is not the same sentence as “10 grams”, or any other figure a video puts on the screen. Do not turn a phrase into a number the page does not contain.",
      },
      {
        t: "p",
        text: "That file is an older rules text. It is not a promise that the officer at the airport today will treat a heavy lot as personal jewellery. Read it, and also read whatever Pakistan Customs has published for the day you land. If the two feel different, ask Customs before you buy, not after you have packed. Apna Ghar cannot clear a bag.",
      },
      {
        t: "h2",
        id: "bars",
        text: "Bars, coins and a commercial lot",
      },
      {
        t: "p",
        text: "Gold bars and commercial quantities are not the same as worn jewellery. A chain you wear and a stack of biscuits or coins for resale are different things in a customs hall, even when both are gold. Customs has seized large jewellery lots. A family that piles every relative’s sets onto one passenger can look like a commercial quantity even when the story is “gifts”. Each passenger should be ready to declare what they themselves are carrying. Do not assume that splitting the metal across handbags changes the rules. Ask, and declare.",
      },
      {
        t: "ul",
        items: [
          "Worn personal jewellery: still something you may need to declare. “Reasonable” is not a secret gram limit.",
          "Bars, coins and unfinished bullion: do not treat them as bangles. Ask Customs which rule applies before you buy them to carry.",
          "A quantity you intend to sell: that is not a personal allowance story. Do not describe stock as personal wear.",
          "Gold bought for someone who is not travelling: their absence does not make it your personal jewellery.",
        ],
      },
      {
        t: "h2",
        id: "cash",
        text: "Cash limits are not gold limits",
      },
      {
        t: "p",
        text: "People mix the currency rules with the gold rules because both come up at the airport. They are not the same allowance. Outbound cash for adults is USD 5,000 per visit and USD 30,000 a year under SRO 2201(I)/2022. Checked on 9 October 2026. That SRO is about foreign currency taken out of Pakistan. It is not a permission to carry USD 5,000 worth of gold, and it is not a cap written in grams. The same SRO sets a lower table for travellers under 18. Read the table rather than applying the adult line to a child.",
      },
      {
        t: "p",
        text: "Incoming currency over USD 10,000 must be declared. Checked on 9 October 2026. That is a currency declaration. It does not mean gold under that dollar figure is free, and it does not mean gold over it is the only gold you declare. Declare currency when the currency rule says so, and declare gold and precious metals on the passenger declaration. If you are carrying both notes and jewellery, they are two lines, not one blended guess.",
      },
      {
        t: "h2",
        id: "pack",
        text: "How to carry it on the day",
      },
      {
        t: "ol",
        items: [
          "Buy only what you are prepared to declare. If you would rather hide it, do not buy it.",
          "Keep the invoice in your cabin bag, with the gold, not in a suitcase you have checked in.",
          "Do not pack gold in checked baggage. The risk of loss is yours. Follow the airline’s rule for valuables and still declare the gold if the customs rule requires it.",
          "Wear what you will wear, and be ready to say what is new and what you took out of Pakistan on the way to the Gulf.",
          "On arrival, use the passenger declaration. If you are unsure which channel to walk through, ask an officer. Guessing the green channel is how undeclared gold gets held.",
          "If relatives meet you with a plan to “just walk out”, ignore the plan. The receipt and the form are the record you can explain later.",
        ],
      },
      {
        t: "p",
        text: "The same caution applies in the other direction only if you are asking a different question. This page is about arriving in Pakistan. Taking dirhams or riyals out of the Gulf, and taking gold out of the UAE or Saudi Arabia, can have their own rules. Read those on the official sites of the country you are leaving. Do not use a Pakistan baggage PDF as a Dubai export licence. Baggage weight is a third question again. See [[/guides/baggage-allowance-gulf-to-pakistan|baggage allowance]] for kilos on the ticket, not for gold.",
      },
      {
        t: "p",
        text: "Prices move. Check [[/gold-rates|today’s gold rates]] before you compare a souk quote with the rate at home, and remember the souk price includes making charges the spot page does not. A cheap-looking tola that you cannot clear is not a bargain. If the shop will not put your name on the invoice, ask why before you pay.",
      },
    ],
    [
      {
        q: "Is there a fixed duty-free gold limit for Pakistanis?",
        a: "There have been limits, and they have been revised. Check FBR and Pakistan Customs for the rule in force on the day you land. This page will not invent a gram figure. The older Baggage Rules talk about personal jewellery in reasonable quantity on the first visit of the year, plus personal wearing apparel. Checked on 9 October 2026, that PDF does not state a single gram cap.",
      },
      {
        q: "Are gold bars treated like bangles?",
        a: "Often they are not. Gold bars and commercial quantities are not the same as worn jewellery. Ask customs in writing or on the official page which form of gold you are carrying. Customs has seized large jewellery lots.",
      },
      {
        q: "Does a Dubai invoice avoid duty?",
        a: "An invoice proves what you bought and what you paid. It does not by itself cancel Pakistani duty. Keep it anyway, in your name if the shop will print it, and declare the gold.",
      },
      {
        q: "Should I pack gold in checked baggage?",
        a: "No. The risk of loss is yours. Follow the airline’s rule for valuables and still declare the gold if the customs rule requires it. The declaration is a Customs form, not a baggage tag.",
      },
      {
        q: "Where is the official page?",
        a: "Start with the FBR notice on the passenger declaration under SRO 689(I)/2019, the older Baggage Rules PDF, and SRO 2201(I)/2022 for currency. The State Bank of Pakistan is the authority for the currency side. Airport desks can explain the rule on the day, but do the reading before you buy.",
      },
      {
        q: "Can I carry USD 5,000 of gold because that is the cash limit?",
        a: "No. Outbound cash for adults is USD 5,000 per visit and USD 30,000 a year under SRO 2201(I)/2022. That is currency, not gold. Incoming currency over USD 10,000 must be declared. Checked on 9 October 2026. Gold is declared on the passenger declaration form. Do not blend the two.",
      },
      {
        q: "Does this page cover taking gold out of Dubai?",
        a: "No. It is about arriving in Pakistan. The UAE or Saudi Arabia may have their own rule for gold you take out. Read that country’s official customs page before you buy. Do not invent a gram limit from a chat.",
      },
    ],
    [
      {
        label: "FBR: passenger and currency declaration",
        href: "https://www.fbr.gov.pk/fbr-dispels-misleading-information-regarding-currency-declaration-requirements-/173667",
      },
      {
        label: "FBR: Baggage Rules PDF",
        href: "https://download1.fbr.gov.pk/Docs/20111111511734406baggae_rules_090904.pdf",
      },
      {
        label: "SRO 2201(I)/2022 foreign currency limits",
        href: "https://download1.fbr.gov.pk/SROs/20221213171233144SRO2201-2022.pdf",
      },
      S.fbr,
      S.sbp,
    ],
  ),

  "roshan-digital-account": art(
    [
      {
        t: "p",
        text: "A Roshan Digital Account is a State Bank of Pakistan scheme that lets a non-resident Pakistani, and some other non-residents, open a Pakistani bank account from abroad. It is for banking, payments and investment. It is not a special exchange rate, and it is not a substitute for reading your own bank’s terms. If you work in the Gulf, it is one possible place for salary you send home to land. It does not, by itself, pick the cheapest dirham or riyal quote.",
      },
      {
        t: "h2",
        id: "who",
        text: "Who the State Bank says can open one",
      },
      {
        t: "p",
        text: "SBP’s own page describes eligibility for non-resident Pakistanis, including people with a NICOP or POC, and it also describes room for some foreign nationals and entities. Resident Pakistanis are covered only in the cases SBP spells out. Do not guess from a YouTube title. Read the eligibility list on the SBP Roshan Digital Account page and the FAQ. A Gulf work visa does not, on its own, answer the question. The bank will ask which category you fall into.",
      },
      {
        t: "p",
        text: "The FAQ describes two products. A non-resident Pakistani and a non-resident POC holder can be eligible for both. Federal or provincial government officials posted abroad in the tax year are also described there. For the foreign-currency account, the FAQ also includes a resident Pakistani who has declared assets held abroad in the wealth statement of the latest tax return filed with FBR. For the time being, that resident case is not a fully digital opening: the FAQ says those customers need to visit a branch. Checked on 9 October 2026. Read the current FAQ before you rely on a shorter list, because SBP can amend the wording.",
      },
      {
        t: "ul",
        items: [
          "Accounts come in rupees and in foreign currency. The product names on the SBP FAQ are NRP Rupee Value Account (NRVA) and Foreign Currency Value Account (FCVA).",
          "The FAQ lists several foreign currencies for an FCVA, including the UAE dirham and the Saudi riyal. The full list is on that page. Do not assume every Gulf currency is open at every bank.",
          "A minor can be on a joint account with a parent or guardian if the legal steps and the bank’s own policy are met.",
          "Naya Pakistan Certificates are a separate government instrument you may be offered inside the account. The profit rates change. Read the current table on the SBP page, and read the rate on the bank’s own page, on the day you invest.",
          "Conventional and Shariah versions exist. Pick the one you mean.",
          "The account is opened with a Pakistani bank that offers RDA, not with the State Bank itself.",
        ],
      },
      {
        t: "h2",
        id: "open",
        text: "How to open it from the Gulf",
      },
      {
        t: "ol",
        items: [
          "Read the eligibility list on the SBP FAQ and decide whether you are applying as a non-resident Pakistani, a POC holder, or another category the page actually names.",
          "Pick a bank from the list SBP publishes. The list changes when banks join or leave. A blog’s “best bank” line is not that list.",
          "Choose rupees (NRVA) or foreign currency (FCVA), and choose the conventional or Shariah version on purpose.",
          "Use the passport, NICOP or POC the bank asks for. The name should match the document you will later give an exchange house.",
          "Submit the digital form. The FAQ describes opening within two working days after a complete form and correctly uploaded documents. A bank can still ask for extra papers. If it does, the two days are not a promise.",
          "When the account exists, copy the IBAN from the bank’s own app or letter. Do not rebuild it from memory.",
        ],
      },
      {
        t: "p",
        text: "Checked on 9 October 2026, that two-working-day line is what the SBP FAQ describes for a completed digital file. It is not a service standard Apna Ghar can enforce. If the portal rejects a scan, fix the scan. Do not pay a typing centre that claims it has a “back door” at the State Bank. You are opening an account with a commercial bank under SBP’s scheme.",
      },
      {
        t: "h2",
        id: "rates",
        text: "Profit rates and the exchange rate are different",
      },
      {
        t: "p",
        text: "Two rates get mixed up. The first is the dirham or riyal rate you get when you send money. An RDA does not guarantee the best one. Compare the rupees, or the foreign currency that will actually be credited, the way any other transfer is compared. See [[/guides/send-money-uae-to-pakistan|sending money from the UAE]] or [[/guides/send-money-saudi-to-pakistan|from Saudi Arabia]], and check today’s rate on [[/rates|the rates desk]]. Apna Ghar’s rate is a mid-market reference, not your bank’s payout.",
      },
      {
        t: "p",
        text: "The second rate is the profit or return on money left inside the account or in a certificate. SBP publishes Naya Pakistan Certificate rates and they change. The figure that will apply to you is the one on the bank’s own page for the product you are buying, on the day you invest. This guide will not freeze a percentage. A screenshot in a WhatsApp group is how people lock in a number that has already been revised. If you cannot find the rate on the bank’s page and on the SBP table, do not invest on the strength of a voice note.",
      },
      {
        t: "h2",
        id: "use",
        text: "What the account is for, and what it refuses",
      },
      {
        t: "p",
        text: "People use an RDA to receive money from abroad, hold rupees or foreign currency, and invest in the products the bank shows under the scheme. The FAQ says funds in these accounts can be remitted back from Pakistan without prior approval from the bank or SBP. It also describes a narrower rule for real estate: if you disinvest before three years, the principal can be repatriated, while a capital gain can be repatriated after three years from the investment. If you paid in instalments, the FAQ treats the date of the last instalment as the investment date. Read that section yourself before you buy property through the account. Checked on 9 October 2026.",
      },
      {
        t: "p",
        text: "The same FAQ says these accounts are not a place to park money generated inside Pakistan, except for profit or return on eligible investments and the proceeds when those investments are sold or mature. Do not try to deposit a local salary or a local cash business into an RDA because it sounds convenient. Funds from an older foreign-currency account are not something you simply sweep across either. The instructions are different. Ask the bank, and read the FAQ, before you move a balance you cannot easily reverse.",
      },
      {
        t: "p",
        text: "If you return to Pakistan for good, the FAQ describes a choice: keep the RDA with restrictions, or change status. The restrictions it mentions include not crediting domestic funds, apart from redemptions or disinvestment proceeds, and not making further investments through the rupee RDA. That is a reason to tell the bank when you move home, not a reason to ignore the account until a transfer is blocked.",
      },
      {
        t: "h2",
        id: "careful",
        text: "Bank charges, tax and your visa",
      },
      {
        t: "p",
        text: "The bank sets charges. Read that bank’s schedule before you move a large sum. A free opening can still sit next to a conversion charge or a low balance fee. Ask for the schedule in writing. Apna Ghar will not invent those fees.",
      },
      {
        t: "note",
        text: "This page is not tax advice. If you are unsure whether a return is taxable for you, ask a tax adviser or read FBR guidance. Do not treat a bank brochure as a ruling.",
      },
      {
        t: "p",
        text: "An RDA does not replace the Protector of Emigrants, an Iqama, an Emirates ID or a visa. It is a banking and investment channel. It will not get you on a flight, and it will not renew a residence permit. Keep that file in a separate envelope from your bank letters.",
      },
    ],
    [
      {
        q: "Can every overseas Pakistani open a Roshan Digital Account?",
        a: "Most non-resident Pakistanis can, according to SBP, if a participating bank accepts the documents. The FAQ also covers non-resident POC holders and some other cases, including government officials posted abroad, and a resident who has declared foreign assets with FBR for the foreign-currency account. That resident case is not fully digital for the time being. Read the current eligibility list. A bank can still ask for extra papers.",
      },
      {
        q: "What profit will Naya Pakistan Certificates pay?",
        a: "SBP publishes the rates and they change. Use the table on the SBP site, and read the rate on the bank’s own page on the day you invest. This guide will not freeze a percentage that will be wrong next month.",
      },
      {
        q: "Is the account free?",
        a: "The bank sets charges. Read that bank’s schedule before you move a large sum. Do not assume a zero opening fee means every later conversion is free.",
      },
      {
        q: "Which banks offer it?",
        a: "SBP keeps a list on its RDA pages. It changes when banks join or leave. Check there, not a blog.",
      },
      {
        q: "Does an RDA replace the Protector or a visa?",
        a: "No. It is a banking and investment channel. It has nothing to do with your Gulf visa, your Iqama or your Emirates ID.",
      },
      {
        q: "Is an RDA the cheapest way to send dirhams or riyals?",
        a: "Not automatically. Compare the rupees or the foreign currency that will actually arrive. Use it as the landing account only if the bank confirms it can receive that transfer and the quote is the one you want.",
      },
      {
        q: "Can I put Pakistani cash into the account?",
        a: "The FAQ says these accounts are not credited with funds generated from local sources, except profit on eligible investments and the proceeds when those investments end. Do not use an RDA as an ordinary local deposit account. Ask the bank if your case is the exception the FAQ already names.",
      },
    ],
    [S.rda, S.rdaFaq, S.sbp, S.fbr],
  ),

  "hajj-umrah-from-the-gulf": art(
    [
      {
        t: "p",
        text: "Hajj and Umrah from the Gulf are not the same paperwork as the ballot many families use inside Pakistan. Pakistanis living in the UAE, Saudi Arabia or another Gulf country need to see which door is open to them this season: Nusuk, their host country, or Pakistan’s Ministry of Religious Affairs. Those are two different systems. One is the route for a Gulf resident. The other is Pakistan’s quota. Paying the wrong desk does not move you into the right quota.",
      },
      {
        t: "h2",
        id: "check-both",
        text: "Check Nusuk and the Pakistan ministry before you pay",
      },
      {
        t: "p",
        text: "Saudi Arabia runs much of the pilgrim booking through Nusuk. Quotas, packages and who may apply from which country are announced each season. Pakistan’s Ministry of Religious Affairs runs the Pakistani Hajj scheme for people applying from Pakistan. If you are a resident in the Gulf, do not assume the Pakistan ballot is your only route, and do not assume you are barred from it. Read both sites for this year’s instruction. Apna Ghar cannot see your passport or reserve a seat. The official screen can.",
      },
      {
        t: "ul",
        items: [
          "Pay only a company you can match to the official list for that season.",
          "A cheap Umrah package that cannot show a visa path on Nusuk or an official partner is a risk.",
          "Rules on who may perform Hajj, including any gap between pilgrimages, are announced by the Saudi side. Confirm them there. Do not repeat last year’s rule as if it were still printed.",
          "Keep the passport name identical on every booking. One missing surname is enough to stall a file.",
          "Get the visa, the hotel, the transport and the refund rule in writing before you transfer the money.",
        ],
      },
      {
        t: "h2",
        id: "two-doors",
        text: "The Gulf-resident route and the Pakistan quota",
      },
      {
        t: "p",
        text: "Treat them as two doors, not as two prices for the same door. The Gulf-resident route is for people who live in a host country such as the UAE, Saudi Arabia, Qatar, Kuwait, Oman or Bahrain. In a given season that may mean applying through the host country’s Hajj arrangement, through Nusuk as a resident of that country, or through an organiser the Saudi side has named for residents. A Pakistani living in Dubai is not automatically in the same pool as a Pakistani applying from Lahore.",
      },
      {
        t: "p",
        text: "The Pakistan quota is the scheme the Ministry of Religious Affairs runs for the Pakistani Hajj, including the ballot families inside Pakistan know. Some years the ministry’s instruction speaks to overseas Pakistanis. Some years it does not in the way a WhatsApp forward claims. Read this year’s instruction on the ministry site and the Saudi organiser’s instruction side by side. If you pay a private agent in Pakistan while you are a Gulf resident, ask which of the two systems they are actually using, and match their company to the official list. A receipt from a shop is not a quota.",
      },
      {
        t: "ol",
        items: [
          "Write down where you are resident now, and which passport you will travel on.",
          "Open Nusuk and read who may apply from that country this season.",
          "Open the Ministry of Religious Affairs site and read whether the Pakistan scheme is open to someone in your situation.",
          "Only then talk to an organiser. Ask them to point at the list that includes their name.",
          "If the two official pages disagree with the agent, believe the pages. Stop the payment.",
        ],
      },
      {
        t: "h2",
        id: "umrah",
        text: "Umrah is not a small Hajj",
      },
      {
        t: "p",
        text: "Umrah is a separate visit for worship. The Kingdom opens and pauses it. A travel agent’s poster that says “Umrah is open all year” is not the rule. Check Nusuk or the Saudi visa site for the current window. When it is open, the booking still needs a visa path you can see, not a promise that “the visa will come after you pay”. Ask which hotel, how far it is from the Haram, what transport is included, and what is refunded if the visa is refused or if the season is paused after you have paid.",
      },
      {
        t: "p",
        text: "This guide will not print a package price. Prices move with the month, the hotel and the quota, and a number typed here would be a fiction by the next week. Compare offers only after each one shows the same items: visa, nights, distance, meals, transport, and the refund line. A lower headline that drops the visa, or that quotes a hotel you later find is a long bus ride away, is not cheaper. Get the distance in writing. “Near the Haram” is not a distance.",
      },
      {
        t: "h2",
        id: "papers",
        text: "Passport, residence and health rules",
      },
      {
        t: "p",
        text: "Use the passport you will travel on. If you renewed it, every booking has to follow the new number. Gulf residents are often asked for a residence visa or Iqama copy as well, because that is what shows which door they are using. Take the validity the form asks for. Do not guess that six months is enough if the screen says something else.",
      },
      {
        t: "p",
        text: "Health rules are seasonal. Vaccination, if it is required this year, will be on Nusuk or the ministry instruction, not on a clinic’s banner. Take the certificate the form names. A mahram rule, an age rule, or a rule about repeating Hajj can also change by season. Confirm those on Nusuk rather than from a relative’s memory of their own pilgrimage. Women and children should read the current condition themselves, not accept “it is the same as last time”.",
      },
      {
        t: "ul",
        items: [
          "Passport bio page, and the residence visa or Iqama if you are applying as a Gulf resident.",
          "Photos in the size the screen asks for this year.",
          "The spellings on the form matched to the passport, including father’s name if it asks.",
          "Vaccine proof only if this season’s official page requires it.",
          "The organiser’s place on the official list, saved as a screenshot with the date.",
        ],
      },
      {
        t: "h2",
        id: "pay",
        text: "How to pay without losing the money",
      },
      {
        t: "p",
        text: "Pay the company named on the official list, to the account they publish, and keep the transfer receipt next to the booking. A request to pay a personal name, or a cousin who will “pass it on”, is a stop. Ask what happens to the money if the visa is refused, if you are not selected in a ballot, or if the Saudi side shortens the season. “We will see” is not a refund policy. Write the answer into the receipt or the email before the transfer.",
      },
      {
        t: "p",
        text: "Flights into Saudi Arabia around Hajj get expensive. The notes on [[/guides/cheap-flights-saudi-to-pakistan|Saudi–Pakistan flights]] are about going home, but the same habit applies: a PNR you can open on the airline site, and baggage you have read. If the package includes the flight, open the airline booking in your own name. If it does not, budget the ticket separately and do not let the agent fold an invisible airfare into a vague total. See also [[/guides/cheap-flights-dubai-to-pakistan|Dubai–Pakistan flights]] only if the journey home is from the UAE. Neither page is a Hajj fare.",
      },
      {
        t: "h2",
        id: "complain",
        text: "If an agent takes the money and stalls",
      },
      {
        t: "ol",
        items: [
          "Collect the receipt, the chat, the account you paid, and the name they used.",
          "Ask the organiser, in writing, for the Nusuk or ministry reference.",
          "If the scheme is one the Ministry of Religious Affairs oversees, start the complaint there.",
          "If money was taken by deception, the FIA is the authority people use for that kind of case in Pakistan. Keep the paper trail.",
          "Warn family members who were about to pay the same shop. Do not wait for a full refund before you tell them to stop.",
        ],
      },
      {
        t: "p",
        text: "Checked on 9 October 2026, the two sites to read before any payment are still Nusuk and the Ministry of Religious Affairs. Saudi visa pages are the third place when the question is a visit entry rather than the Hajj scheme. No poster in a Gulf market replaces those pages, and Apna Ghar will not invent a package price to fill the gap.",
      },
    ],
    [
      {
        q: "Can a Pakistani in Dubai apply for Hajj through Nusuk?",
        a: "Sometimes residents apply through the host country’s arrangement, and sometimes through Nusuk directly. The answer is seasonal. Read Nusuk for the current window. Do not assume the Pakistan ballot is your only door, and do not assume you are barred from it.",
      },
      {
        q: "Does the Pakistan Hajj ballot cover people who live in Saudi Arabia?",
        a: "Do not assume either way. Read this year’s instruction from the Ministry of Religious Affairs and from the Saudi organiser. A Gulf resident and a Pakistan-quota applicant are two different systems until those pages say otherwise.",
      },
      {
        q: "Are Umrah visas open all year?",
        a: "The Kingdom opens and pauses Umrah. Check Nusuk or the Saudi visa site rather than a travel agent’s poster. A package with no visible visa path is a risk.",
      },
      {
        q: "What does a package usually include?",
        a: "It varies. Ask, in writing, about the visa, the hotel distance, transport and what is refunded if the visa is refused. This guide does not print a price, because a made-up package figure would be wrong immediately.",
      },
      {
        q: "Where do I complain about a Hajj agent in Pakistan?",
        a: "Start with the Ministry of Religious Affairs for schemes they oversee, and with FIA if money has been taken by deception. Keep receipts, the account you paid, and any claim that the company was on the official list.",
      },
      {
        q: "Should the name on Nusuk match the passport exactly?",
        a: "Yes. Keep the passport name identical on every booking. If you renewed the passport, update the booking. A family member’s spelling “close enough” is how files stall.",
      },
      {
        q: "Can Apna Ghar tell me this year’s Hajj package price?",
        a: "No. Quotas and prices are announced each season on Nusuk and, for the Pakistan scheme, by the Ministry of Religious Affairs. Compare written offers that list the visa, the hotel, the transport and the refund. Do not pay from a poster.",
      },
    ],
    [S.nusuk, S.mora, S.visitsaudi, S.fia],
  ),
};
