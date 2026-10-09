import type { ArticleBody, Block, Faq, Source } from "@/lib/content/types";
import { S, feeNote } from "@/lib/content/sources";

function art(blocks: Block[], faqs: Faq[], sources: Source[]): ArticleBody {
  return { blocks: [...blocks, feeNote], faqs, sources };
}

export const bodiesD: Record<string, ArticleBody> = {
  "pakistan-government-hajj-scheme": art(
    [
      {
        t: "p",
        text: "A Pakistani working in the Gulf does not automatically book Hajj on Nusuk, and does not automatically join Pakistan’s government queue either. Those are two different doors. Pakistan’s door is run by the Ministry of Religious Affairs and Interfaith Harmony. The application and the payment live on the [Pak Hajj portal](https://hajj.mora.gov.pk). Saudi Arabia’s door for many residents and visitors is [Nusuk](https://www.nusuk.sa). A shop in Dubai, Riyadh or Karachi that mixes the two names on one receipt is not doing you a favour. Read which door you are in before you transfer a single rupee or dirham.",
      },
      {
        t: "h2",
        id: "policy",
        text: "What the 2027–2030 policy actually is",
      },
      {
        t: "p",
        text: "Checked on 9 October 2026, the ministry’s [Hajj Policy and Plan 2027–2030](https://www.mora.gov.pk/SiteImage/Misc/files/270726_HajjPolicy2027-30(1).pdf) is a 16-page framework, not a price list for your seat. It covers Hajj 2027 through 2030, corresponding to 1448–1451 AH. The same file is linked from the ministry’s [Hajj policies page](https://www.mora.gov.pk/Detail/N2YzYjlmM2UtZTQxNi00ZDBlLTllNjQtMTZiMDYyYzhhNzlk). The introduction says this is the first multi-year framework, so that registration, contracts and a waiting list can last more than one season, subject to Saudi rules. It also says the government intends to move gradually toward regulating private operators rather than running every seat itself. None of that sentence is a promise that you, sitting in Sharjah or Dammam, already have a seat.",
      },
      {
        t: "p",
        text: "The policy names a digital system with the National Information Technology Board, a queue for people who are not selected because the quota is full, and a Hajj saving idea so families can put money aside in earlier years. It also says contracts for accommodation, catering, transport, air travel and luggage can run for more than one year, subject to Saudi “Taleemat”. Those are planning rules for the ministry and its contractors. They are not a voucher you can show an airline. If a Gulf agent says the multi-year policy means your 2024 receipt is still a confirmed seat, ask them to point at the paragraph. They will not find it.",
      },
      {
        t: "h2",
        id: "not-the-fee",
        text: "Figures in the PDF that are not your package price",
      },
      {
        t: "p",
        text: "People paste rupee numbers from this PDF into WhatsApp and call them the Hajj fee. Most of those numbers are about companies, not about you. Checked on 9 October 2026, the private-operator section says Hajj business for a single pilgrim is indicated at Rs. 1 million, and then sets paid-up capital and business-volume tests in the millions and billions for companies that want a licence. That Rs. 1 million line is a licensing yardstick for a munazzam. It is not the amount a pilgrim transfers, and it is not a cap on what a private package may cost. A company that tells you “the ministry fixed Hajj at ten lakh, so pay me ten lakh in cash” is using a sentence about its own capital as if it were your invoice.",
      },
      {
        t: "ul",
        items: [
          "Hujjaj Muhafiz contribution, in the same PDF: a non-refundable Rs. 1,000. The scheme started in 2011. This is not the Hajj package.",
          "Compensation named for death during Hajj in Saudi Arabia: Rs. 2,000,000. The PDF says the ministry may notify changes.",
          "Compensation named when illness stops the performance of Hajj: Rs. 250,000, again with the ministry’s right to notify a change.",
          "A licence threshold, a welfare contribution and an insurance-style compensation are three different things. Do not add them up and call the total “the official Hajj cost”.",
        ],
      },
      {
        t: "p",
        text: "The package you actually owe is the figure on the payment screen of the Pak Hajj portal for your application, or the figure in the ministry advertisement for that year’s government scheme. Apna Ghar does not copy a press-conference number onto this page when that number is not printed in the policy PDF. If a newspaper says one total and the portal says another, the portal is the one that takes your money. Open [hajj.mora.gov.pk](https://hajj.mora.gov.pk) yourself. A screenshot forwarded from a cousin is not the screen.",
      },
      {
        t: "h2",
        id: "gulf",
        text: "If you live in the Gulf",
      },
      {
        t: "p",
        text: "Your UAE residence, Iqama or Qatar ID does not, by itself, move you from one scheme to the other. Some years the ministry’s instructions allow overseas Pakistanis to register on the Pakistan portal with a Pakistani passport and a CNIC or NICOP. Some years a resident of Saudi Arabia is pushed toward the Saudi resident route instead. The year’s instruction on the portal is the rule. Do not let a camp office tell you that “Gulf people always use Nusuk” or “Gulf people always use the Pakistan quota” without the sentence on the official page. Read [[/guides/hajj-umrah-from-the-gulf|the shorter Gulf overview]] and [[/guides/umrah-from-uae-on-nusuk|the Umrah note]] so the words Hajj and Umrah stay separate. Umrah from Dubai is not a down payment on the Pakistan Hajj queue.",
      },
      {
        t: "ol",
        items: [
          "Confirm you are applying as a Pakistani pilgrim under the government scheme, not buying a Saudi resident package.",
          "Use the passport you will travel on. A name that does not match the machine-readable line will stall the visa later.",
          "Register and pay only on the Pak Hajj portal or the method that portal prints, such as a PSID through a bank. A personal account in Dubai is not a ministry account.",
          "Keep the application number, the PSID and the bank receipt. A voice note is not a receipt.",
          "Read the medical, mahram and biometric forms linked from the ministry’s downloads for that year before you book a non-refundable flight home.",
        ],
      },
      {
        t: "p",
        text: "Private operators, called munazzams in the policy, are a second Pakistan route. They must be companies the ministry has recognised. The policy says their quota is announced by the government, that bookings should run through the ministry’s digital system, and that selling or subletting quota is barred. A Gulf shop that says it “has quota” but cannot show a current recognition letter on the ministry site is selling a rumour. The ministry publishes warnings about fraudulent companies. Search the name on [mora.gov.pk](https://www.mora.gov.pk) before you pay a booking fee in dirhams.",
      },
      {
        t: "h2",
        id: "pay",
        text: "How payment should look",
      },
      {
        t: "p",
        text: "Government-scheme dues are collected in instalments in the years the ministry advertises them. The policy framework does not freeze those dates for every future season. The live instruction does. When the portal is open, the first instalment and the second instalment are whatever that screen says, in rupees, with a deadline on the same screen. Paying “half now” to an agent’s exchange house, in cash, with a promise that he will generate your PSID later, is how families lose the season. If you are in the UAE, you can still pay a Pakistan-side PSID from a bank that supports it, or ask a trusted person at home to pay from their own account against your PSID and send you the bank slip. You do not need to hand the dirhams to a stranger first.",
      },
      {
        t: "p",
        text: "Watch the exchange rate only as a planning tool. The [[/rates/aed-to-pkr|dirham]] and [[/rates/sar-to-pkr|riyal]] pages are mid-market. Your bank will not match them exactly. The Hajj portal bills you in rupees. Convert on the day you pay, not on the day a friend guessed. A weaker rupee makes the same package cost more dirhams. That is not a new Hajj fee. It is the currency.",
      },
      {
        t: "h2",
        id: "after",
        text: "After you are selected",
      },
      {
        t: "p",
        text: "Selection is not the flight. The ministry’s training, the medical certificate, the mahram affidavit where it applies, the biometric appointment and the Saudi visa are later steps, and the forms change. The policy talks about a Hajj Medical Mission and about staff in Saudi Arabia under Saudi requirements and the Nusuk Masar system. That is the ministry’s own operation in the Kingdom. It does not mean you should download a random “Nusuk Hajj” APK from a Telegram channel and type your Pakistan portal password into it. Official apps are the ones the ministry’s download page names. An app that asks for your bank OTP is not the Hajj app.",
      },
      {
        t: "p",
        text: "If you are not selected because the quota is full, the 2027–2030 policy describes a queue, with a first right in a later year for people already in that queue. Read the clause before you pay a private operator a “jump the queue” fee. A payment to skip a government queue is the thing the policy is trying to stop, not a service the policy sells. If your group is split, the policy allows some correction of processing errors and some family cases, subject to quota and the ministry’s decision. An agent cannot promise that correction. Only the file can.",
      },
      {
        t: "p",
        text: "Complaints go to the ministry’s own channels, not to a Facebook page that uses the ministry’s logo. The policy names a complaint system and a Hujjaj Muhafiz scheme with the amounts above. If someone dies or falls seriously ill during Hajj, the family should deal with the official mission papers, not with a collector who offers to “process the two million” for a cut. Compensation figures in a PDF are not cash in a drawer. They are claims, and the ministry says it may change them.",
      },
    ],
    [
      {
        q: "Is the government Hajj package Rs. 1 million?",
        a: "No. Checked on 9 October 2026, the Rs. 1 million line in the Hajj Policy and Plan 2027–2030 is a licensing yardstick for a private operator’s business per pilgrim, not the fee you transfer. Your dues are the number on hajj.mora.gov.pk for your application.",
      },
      {
        q: "What is the Rs. 1,000 on the Hajj policy?",
        a: "The same PDF describes a non-refundable Rs. 1,000 contribution to the Hujjaj Muhafiz scheme. It is not the package price. Death compensation is listed at Rs. 2,000,000 and a serious illness that stops the Hajj at Rs. 250,000, and the ministry may notify changes.",
      },
      {
        q: "I work in Dubai. Do I apply on Nusuk or on the Pakistan portal?",
        a: "Hajj under Pakistan’s government scheme is the Pak Hajj portal. Nusuk is Saudi Arabia’s platform and is the usual door for Umrah and for some residents’ Hajj products. Read the year’s instruction. Do not pay a shop that claims to be both.",
      },
      {
        q: "Can I pay the Pakistan instalment in dirhams to an agent?",
        a: "Pay the way the portal prints, usually a rupee PSID through a bank. An agent’s personal account is not the ministry. Keep the bank slip with your application number.",
      },
      {
        q: "Does a multi-year policy mean my old receipt is still valid?",
        a: "The 2027–2030 document is a framework for how the ministry will run several seasons. It does not revive an old receipt. Your status is whatever the portal shows for this application.",
      },
    ],
    [S.hajjPolicy, S.hajjPolicies, S.hajjPortal, S.nusuk, S.mora],
  ),
  "umrah-from-uae-on-nusuk": art(
    [
      {
        t: "p",
        text: "Umrah from the UAE is a Saudi visit for worship, booked under Saudi rules, usually while you are already a UAE resident. It is not a seat in Pakistan’s Hajj ballot, and it is not a substitute for a work visa. The official Saudi platform is [Nusuk](https://www.nusuk.sa). The ministry behind it is the [Ministry of Hajj and Umrah](https://haj.gov.sa/en). A Pakistani living in Dubai, Sharjah or Abu Dhabi should start there, or with a company that can show its booking inside that system, before paying a shop in the old souq.",
      },
      {
        t: "h2",
        id: "nusuk",
        text: "What Nusuk is for",
      },
      {
        t: "p",
        text: "Nusuk is the Kingdom’s public site and app for Umrah, for visits to the Rawdah, and for a growing list of related bookings. The ministry has also described a Nusuk Masar side used for operator contracts. You do not need to memorise the product names. You need the site that asks for your passport and shows a package with a hotel, dates and a price before you pay. Checked on 9 October 2026, that public site is nusuk.sa. A page that looks similar, on a different domain, asking for a card payment to a personal name, is not Nusuk. Type the address yourself. Do not tap a link in a broadcast message.",
      },
      {
        t: "p",
        text: "Pakistan’s [Hajj Policy and Plan 2027–2030](https://www.mora.gov.pk/SiteImage/Misc/files/270726_HajjPolicy2027-30(1).pdf) mentions Nusuk Masar as the system through which Saudi service contracts are handled. That sentence is about Pakistan’s Hajj operation inside Saudi Arabia. It does not mean your Umrah from Dubai is booked on hajj.mora.gov.pk. Keep the two logins apart. The Pakistan portal takes rupees for the government Hajj scheme, as [[/guides/pakistan-government-hajj-scheme|that guide]] explains. Nusuk takes the Umrah booking under Saudi rules. Using one password on both, or paying one agent for both, is how people discover in Ramadan that they bought neither.",
      },
      {
        t: "h2",
        id: "resident",
        text: "UAE residence is the starting point",
      },
      {
        t: "p",
        text: "Most Pakistanis who perform Umrah from the UAE do it as residents, on the passport that matches their Emirates ID, with an account that accepts a UAE mobile number. The Saudi side has, in past seasons, asked residents to complete steps such as a vaccine record or a fingerprint at an authorised centre before travel. The exact step changes. The Saudi ministry’s own news has described Tasheer centres and Nusuk as the tools for residents coming from the UAE, including a 2024 ministerial visit that talked about fingerprints before travel so the airport queue is shorter. Treat that as a description of the direction, not as a fee. The live Nusuk page for your nationality and your residence is the checklist. Apna Ghar will not invent an Umrah visa price in dirhams, because Nusuk does not publish one fixed “Pakistani in Dubai” fee on a page that stays still.",
      },
      {
        t: "ul",
        items: [
          "Passport validity and the name as printed, including the father’s name if the account asks for it.",
          "UAE residence still valid on the dates you want to travel. A visit visa to the UAE is a different product.",
          "A photo and a phone number you can receive a code on. Do not use the agent’s SIM as the only number.",
          "The vaccine or health note if the current Nusuk form asks for it. A clinic letter that Nusuk does not ask for is not a shortcut.",
          "Hotel and dates you can actually take off from work. A confirmed Umrah visa does not excuse an absence your employer did not approve.",
        ],
      },
      {
        t: "h2",
        id: "package",
        text: "What a real package shows",
      },
      {
        t: "p",
        text: "A proper Umrah package names the operator, the visa route, the hotel or the distance from the Haram, the dates, the transport between Makkah and Madinah if it is included, and the total in a currency you can see before you pay. It does not say “five-star, near Haram” with no building name. It does not take a cash deposit in a parking lot. If you book on Nusuk yourself, the confirmation is inside your Nusuk account. If a UAE travel agency books for you, ask them to show the booking in your name on that system, or a visa that you can check on the official Saudi enquiry, the same habit described in [[/guides/fake-saudi-visa-check|the visa-check guide]]. A PDF with a gold border is not a check.",
      },
      {
        t: "p",
        text: "Prices move with Ramadan, with school holidays in the Gulf, and with how close the hotel is. Anyone who advertises one dirham figure “for the whole year, official rate” is inventing a stability Nusuk does not have. Compare two live offers on the same day, for the same dates, and read what is excluded. Zamzam, the train, a private transfer and a room with a view are the usual extras that appear later. The [[/rates/aed-to-pkr|dirham to rupee]] page is only for your own budget if you are sending money home as well. It is not the Umrah price.",
      },
      {
        t: "h2",
        id: "not-hajj",
        text: "Umrah does not hold a Hajj seat",
      },
      {
        t: "p",
        text: "Families mix the words because both journeys use the same two cities. The rules do not mix. Pakistan’s government Hajj scheme has a quota, a queue and instalments in rupees. Umrah from the UAE can often be booked when Nusuk is open for your residence, without waiting for that quota. Paying for Umrah does not move you up the Pakistan Hajj list. A shop that offers a “combo” — Umrah now, Hajj seat later, one cash price — is selling the second half without the ministry’s portal. Walk out. Read [[/guides/hajj-umrah-from-the-gulf|Hajj and Umrah from the Gulf]] if you need the two paths on one page before you decide which one you are actually buying.",
      },
      {
        t: "p",
        text: "Women travelling from the UAE should read the current Saudi rule on who may travel with them, on Nusuk, not in a 2019 video. The rule has changed more than once. Apna Ghar will not print a mahram requirement here as if it were permanent. If the form on the day you book does not ask for a male relative, do not let an agent add a fee for “the mahram letter” anyway. If the form does ask, a made-up letter from a typist in Karachi will not pass the airline.",
      },
      {
        t: "h2",
        id: "travel",
        text: "Flights, leave and the return",
      },
      {
        t: "p",
        text: "Dubai, Sharjah and Abu Dhabi have frequent flights to Jeddah and Madinah. The fare is not part of Nusuk unless the package says the ticket is included. Book the ticket in the same passport name, and read the bag on the airline’s own page, using the notes in [[/guides/baggage-allowance-gulf-to-pakistan|baggage allowance]] if you are combining the trip with a later flight to Pakistan. A tight connection through Jeddah on the way home to Lahore is a separate ticket problem, not an Umrah problem. Leave from work is your contract. An Umrah visa is not annual leave.",
      },
      {
        t: "p",
        text: "On the ground, Nusuk is also where many pilgrims now open permits for the Rawdah and see maps. The Saudi ministry has said the app’s essential services can work for visitors on a local SIM without using a data bundle. That is a convenience after you land. It is not a reason to skip the booking before you fly. Download the app from the store link on nusuk.sa, on your own phone, while you still have time to see that the booking is there.",
      },
      {
        t: "h2",
        id: "avoid",
        text: "The usual losses",
      },
      {
        t: "ol",
        items: [
          "Cash to a person who promises to “put you on Nusuk” but never shows you the account.",
          "A cheaper Umrah that is actually a visit visa with no hotel, sold as if the hotel were included.",
          "A passport given overnight. You can fill Nusuk without surrendering the passport for a week.",
          "A fee described as the “official Umrah tax” that does not appear on the Nusuk payment page.",
          "Pressure to resign or to overstay a UAE visa because the return flight was left open.",
        ],
      },
      {
        t: "p",
        text: "If the money has already gone, keep the transfer slip, the chat and the name of the shop. A UAE-licensed travel agency has a name you can search. A desk that moves every Friday does not. Saudi-side complaints about a Nusuk booking start in the Nusuk account, not with a Pakistani police station, unless fraud also happened in Pakistan. For the Pakistan Hajj scheme the door is different, and it is the ministry, not Nusuk support.",
      },
      {
        t: "p",
        text: "Check the live Nusuk page on the day you pay. Checked on 9 October 2026, there is no single official dirham fee on a stable government page that Apna Ghar can honestly print for every Pakistani resident. The number that counts is the one on your Nusuk offer, in your name, for your dates. Anything else is a quote from a shop, and you should be able to see what it adds on top.",
      },
    ],
    [
      {
        q: "Where do I book Umrah from Dubai?",
        a: "Start at nusuk.sa, or with a UAE agency that can show the booking in your name on that system. Do not start with a cash deposit and a promise.",
      },
      {
        q: "Is there one official Umrah fee for Pakistanis in the UAE?",
        a: "No stable official dirham fee was on a single government page we could cite on 9 October 2026. The price is the live Nusuk offer for your dates, plus whatever a hotel or agency adds and shows you before you pay.",
      },
      {
        q: "Does an Umrah booking reserve my Pakistan Hajj seat?",
        a: "No. Pakistan’s government Hajj scheme is a separate queue on hajj.mora.gov.pk. Umrah does not move you up that list.",
      },
      {
        q: "Can the agent keep my passport until the visa comes?",
        a: "You should not need to surrender it for days. Fill the Nusuk account yourself, or sit with the agent while the booking is made, and leave with your passport.",
      },
      {
        q: "Which Nusuk app is real?",
        a: "The one linked from nusuk.sa. Do not install an APK from a chat group, and do not type a bank one-time code into it.",
      },
    ],
    [S.nusuk, S.hajMinistry, S.hajjPolicy, S.hajjPortal, S.mora],
  ),
};
