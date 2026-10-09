import { CONTACT_EMAIL, OWNER_NAME, SITE_NAME } from "@/lib/site";

export type LegalPage = {
  enTitle: string;
  urTitle: string;
  en: string[];
  ur: string[];
  enDescription: string;
  urDescription: string;
};

export const legalPages: Record<string, LegalPage> = {
  about: {
    enTitle: "About Apna Ghar: Practical Rates, Tools and Guides",
    urTitle: "اپنا گھر کے بارے میں: ریٹ، اوزار اور رہنما",
    enDescription:
      "Apna Ghar is run by Salim Khan in Islamabad. Practical, sourced guides for Pakistanis working in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.",
    urDescription:
      "اپنا گھر سلیم خان چلاتے ہیں، اسلام آباد سے۔ خلیج کے چھ ممالک میں کام کرنے والے پاکستانیوں کے لیے عملی رہنما۔",
    en: [
      "Apna Ghar is a small desk run by Salim Khan from Islamabad, Pakistan. It publishes currency rates, gold boards and practical guides for Pakistanis who work, or are about to work, in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.",
      "Salim started the site because those decisions were being made from forwarded screenshots: a dirham rate with no date, a visa fee with no official page, a salary that was only a voice note. The desk exists so a reader can open the government page, the rate source, or the contract line, and see which is which. He does not hold himself out as a lawyer, a licensed recruiter, or a banker, and this page will not invent a Gulf work history, a team, or a user count.",
      "Guides are researched by opening the official page first. A figure is written down only when that page states it, with the link beside it. Rates refresh from the named feeds, on a cache of a few hours, not from a dealing room. Gold for Pakistan is the Sarafa figure from the named board. Dubai gold is the published retail board named on that page. Other countries stay on world spot, and the page says so.",
      `The person who checks a page before it is published is ${OWNER_NAME}. There is a short author page at [[/about/salim-khan|Salim Khan]]. Corrections go to ${CONTACT_EMAIL}. ${SITE_NAME} is not a government, not a bank, not an exchange house, and not a recruitment agency.`,
    ],
    ur: [
      "اپنا گھر اسلام آباد سے سلیم خان کا ایک چھوٹا ڈیسک ہے۔ یہ متحدہ عرب امارات، سعودی عرب، قطر، کویت، عمان اور بحرین میں کام کرنے والے پاکستانیوں کے لیے کرنسی، سونے کے بورڈ اور عملی رہنما شائع کرتا ہے۔",
      "سلیم نے یہ سائٹ اس لیے شروع کی کہ فیصلے آگے کیے گئے اسکرین شاٹ سے ہو رہے تھے: بغیر تاریخ کے درہم، بغیر سرکاری صفحے کے ویزا فیس، اور صرف صوتی نوٹ والی تنخواہ۔ ڈیسک اس لیے ہے کہ قاری سرکاری صفحہ، ریٹ کا ماخذ، یا معاہدے کی سطر خود کھول سکے۔ وہ خود کو وکیل، لائسنس یافتہ بھرتی کنندہ یا بینکر نہیں کہتے۔ یہاں کوئی فرضی خلیجی ملازمت، ٹیم یا صارفین کی گنتی نہیں لکھی گئی۔",
      "رہنما پہلے سرکاری صفحہ کھول کر لکھے جاتے ہیں۔ عدد صرف تب لکھا جاتا ہے جب وہ صفحہ اسے بیان کرے، اور لنک ساتھ ہو۔ ریٹ نامزد فیڈ سے چند گھنٹے کے ذخیرے پر تازہ ہوتے ہیں۔ پاکستان کا سونا نامزد سرفہ بورڈ ہے، دبئی کا سونا شائع شدہ ریٹیل بورڈ، اور باقی ممالک عالمی اسپاٹ پر رہتے ہیں۔",
      `صفحہ شائع کرنے سے پہلے ${OWNER_NAME} دیکھتے ہیں۔ مختصر تعارف [[/ur/about/salim-khan|سلیم خان]] کے صفحے پر ہے۔ درستی ${CONTACT_EMAIL} پر بھیجیں۔ اپنا گھر حکومت، بینک، ایکسچینج یا بھرتی ایجنسی نہیں۔`,
    ],
  },
  "salim-khan": {
    enTitle: "Salim Khan, Publisher of Apna Ghar",
    urTitle: "سلیم خان، اپنا گھر کے ناشر",
    enDescription:
      "Salim Khan publishes Apna Ghar from Islamabad. He checks guides against official pages. He is not a recruiter, a lawyer, or a bank.",
    urDescription:
      "سلیم خان اپنا گھر اسلام آباد سے شائع کرتے ہیں۔ رہنما سرکاری صفحات سے جانچے جاتے ہیں۔ وہ بھرتی کنندہ، وکیل یا بینک نہیں۔",
    en: [
      "Salim Khan publishes Apna Ghar from Islamabad. He reads the official page a guide depends on, and he is the person named on the byline of the guides.",
      "He does not sell visas, exchange currency, or represent any government. He does not claim a law licence, a recruitment licence, or a following he has not counted. If a page is wrong, write to him at salimpk742@gmail.com with the link and the source. Corrections are noted on the page they affect, with a date.",
      "A guide’s byline links here so you can see who is responsible for the words. The organisation behind the site is just this desk. There is no newsroom and no undisclosed expert panel.",
    ],
    ur: [
      "سلیم خان اپنا گھر اسلام آباد سے شائع کرتے ہیں۔ وہ وہ سرکاری صفحہ پڑھتے ہیں جس پر رہنما کھڑی ہے، اور رہنماؤں پر ان کا نام ہے۔",
      "وہ ویزا نہیں بیچتے، کرنسی نہیں بدلتے، اور کسی حکومت کی نمائندگی نہیں کرتے۔ وہ قانون یا بھرتی کا لائسنس نہیں دکھاتے۔ اگر صفحہ غلط ہو تو لنک اور ماخذ کے ساتھ salimpk742@gmail.com پر لکھیں۔ درستی اسی صفحے کے نیچے تاریخ کے ساتھ لکھی جاتی ہے۔",
      "رہنما کا نام یہاں جڑتا ہے تاکہ ذمہ دار شخص نظر آئے۔ سائٹ کے پیچھے یہی ڈیسک ہے۔ کوئی الگ نیوز روم یا چھپا ماہر پینل نہیں۔",
    ],
  },
  contact: {
    enTitle: "Contact Apna Ghar: Email Salim Khan in Islamabad",
    urTitle: "اپنا گھر سے رابطہ: سلیم خان کو ای میل کریں",
    enDescription:
      "Email Salim Khan at salimpk742@gmail.com about a rate, a guide, or a correction. Apna Ghar has no login and stores no messages on a server.",
    urDescription:
      "ریٹ، رہنما یا درستی کے لیے salimpk742@gmail.com پر سلیم خان کو لکھیں۔ اپنا گھر پر لاگ ان نہیں اور پیغام محفوظ نہیں ہوتا۔",
    en: [
      `Write to ${CONTACT_EMAIL}. That inbox is Salim Khan in Islamabad. Use it for a wrong figure, a broken official link, or a page that has gone out of date.`,
      "There is no account on this site and no form that stores your message on our server. Email is the whole channel. Please include the page address and, if you can, the official source you are comparing it with.",
    ],
    ur: [
      `${CONTACT_EMAIL} پر لکھیں۔ یہ اسلام آباد میں سلیم خان کا پتہ ہے۔ غلط عدد، ٹوٹا سرکاری لنک، یا پرانا صفحہ اسی پر بھیجیں۔`,
      "اس سائٹ پر اکاؤنٹ نہیں اور کوئی فارم آپ کا پیغام ہمارے سرور پر نہیں رکھتا۔ ای میل ہی راستہ ہے۔ صفحے کا پتہ لکھیں، اور اگر ہو سکے تو وہ سرکاری ماخذ بھی جس سے آپ موازنہ کر رہے ہیں۔",
    ],
  },
  editorial: {
    enTitle: "Editorial Policy of Apna Ghar Guides, Rates and Tools",
    urTitle: "اپنا گھر کی اداری پالیسی: رہنما اور ریٹ",
    enDescription:
      "How Apna Ghar chooses sources, what Checked on means, how often guides are reviewed, and how to send a correction to Salim Khan.",
    urDescription:
      "اپنا گھر ماخذ کیسے چنتا ہے، جانچ کی تاریخ کا مطلب کیا ہے، رہنما کب دیکھے جاتے ہیں، اور درستی کہاں بھیجیں۔",
    en: [
      "Sources are chosen official-first. A ministry, a central bank, a police or interior portal, or the Bureau of Emigration outranks a news blog and a WhatsApp forward. Where the official page does not publish a number, the guide says so. It does not fill the gap with a round figure from a video.",
      "“Checked on” a date means a person opened that linked page on that date and the sentence beside the date is what the page supported then. It is not a freshness stamp for the whole website. A page does not get a new review date unless someone actually reviewed it.",
      "Guides are reviewed when a law, a fee page or a board changes, and at least when a reader sends a correction. There is no promise that every URL is opened every morning. Rates are refreshed on a short cache from the named feed. A rate date is the date the feed published, which for the currency file is one rate per day. The clock time beside it is only when this site fetched that file.",
      `Corrections: email ${CONTACT_EMAIL} with the page link and the better source. If the correction is accepted, it is noted at the bottom of that page with the date. Drafts may be prepared with AI tools. Every page is reviewed and fact-checked by Salim Khan before publishing.`,
      "Affiliate links and display ads are off. If they are turned on later, they will be labelled, and they will never change a rate or a legal explanation.",
    ],
    ur: [
      "ماخذ پہلے سرکاری ہوتا ہے۔ وزارت، مرکزی بینک، داخلہ یا پولیس کا پورٹل، یا بیورو آف امیگریشن، خبر کے بلاگ اور واٹس ایپ سے اوپر ہے۔ جہاں سرکاری صفحہ عدد نہیں دیتا، رہنما یہی کہتی ہے۔ ویڈیو کا گول عدد اس خلا کو نہیں بھرتا۔",
      "“جانچ” کی تاریخ کا مطلب ہے کہ کسی شخص نے اس تاریخ کو وہ لنک کھولا اور ساتھ والا جملہ اسی صفحے کے مطابق تھا۔ یہ پوری ویب سائٹ کی تازگی کی مہر نہیں۔ جائزے کی تاریخ تب بدلتی ہے جب کوئی واقعی دیکھے۔",
      "رہنما تب دیکھی جاتی ہے جب قانون، فیس کا صفحہ یا بورڈ بدلے، اور جب قاری درستی بھیجے۔ یہ وعدہ نہیں کہ ہر لنک ہر صبح کھلتا ہے۔ ریٹ نامزد فیڈ سے مختصر ذخیرے پر تازہ ہوتے ہیں۔ کرنسی فائل روز ایک ریٹ دیتی ہے۔ ساتھ کا وقت صرف وہ لمحہ ہے جب اس سائٹ نے فائل لی۔",
      `درستی: ${CONTACT_EMAIL} پر صفحے کا لنک اور بہتر ماخذ بھیجیں۔ اگر درستی مان لی جائے تو وہ اسی صفحے کے نیچے تاریخ کے ساتھ لکھی جاتی ہے۔ مسودہ مصنوعی ذہانت کے آلے سے تیار ہو سکتا ہے۔ شائع کرنے سے پہلے ہر صفحہ سلیم خان دیکھتے اور جانچتے ہیں۔`,
      "الحاقی لنک اور ڈسپلے اشتہار بند ہیں۔ اگر بعد میں کھلیں تو نشان لگے گا، اور وہ ریٹ یا قانونی وضاحت نہیں بدلیں گے۔",
    ],
  },
  privacy: {
    enTitle: "Privacy Policy for Apna Ghar Readers",
    urTitle: "اپنا گھر کی رازداری کی پالیسی",
    enDescription:
      "What Apna Ghar collects: hosting logs, Google Fonts, and analytics only if enabled. No account, no sale of data. Contact Salim Khan.",
    urDescription:
      "اپنا گھر کیا رکھتا ہے: ہوسٹنگ لاگ، گوگل فونٹس، اور تجزیہ صرف اگر چالو ہو۔ اکاؤنٹ نہیں، ڈیٹا نہیں بکتا۔",
    en: [
      `Effective 10 October 2026. The controller is ${OWNER_NAME}, Islamabad, Pakistan. Contact ${CONTACT_EMAIL}.`,
      "Apna Ghar does not ask you to create an account. Calculators run in your browser. Currency and gold pages do not ask for your name, phone number or Iqama number.",
      "The site is hosted on Vercel. The host’s logs can include your IP address, user agent and the page you requested, for security and operations. Apna Ghar does not use those logs to build a marketing profile.",
      "Pages load fonts from Google Fonts. That request sends your IP address to Google. Google’s own policy describes what they do with it.",
      "If a Google Analytics 4 measurement ID is configured, GA4 may set cookies and collect usage data. That is off unless the ID is present. Google’s policy is at https://policies.google.com/privacy. You can also use your browser’s controls.",
      "Advertising. Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits to this website or other websites. Users may opt out of personalised advertising by visiting Google Ads Settings. Partner sites: https://policies.google.com/technologies/partner-sites. Ads settings: https://adssettings.google.com. Display ads are not switched on at the date of this policy. Before ads or GA4 are turned on for visitors in the EEA, the UK or Switzerland, the site will add a Google-certified consent banner and Consent Mode v2.",
      "Affiliates. There are no affiliate links in use. If a labelled affiliate link is added later, this policy will say so. An affiliate relationship will not change a rate or a legal explanation.",
      "Retention. Server logs follow the host’s ordinary retention. Emails you send are kept long enough to answer and to record a correction. Apna Ghar does not sell personal data.",
      "Rights. You may ask what we hold that identifies you, and you may ask for a correction or deletion of an email thread, by writing to the address above. Hosting logs are controlled in part by the host. This policy is published for readers everywhere, including where a local privacy law gives you further rights.",
    ],
    ur: [
      `نافذ ۱۰ اکتوبر ۲۰۲۶۔ ذمہ دار ${OWNER_NAME} ہیں، اسلام آباد، پاکستان۔ رابطہ ${CONTACT_EMAIL}۔`,
      "اپنا گھر اکاؤنٹ نہیں مانگتا۔ کیلکولیٹر آپ کے براؤزر میں چلتے ہیں۔ کرنسی اور سونے کے صفحات نام، فون یا اقامہ نمبر نہیں پوچھتے۔",
      "سائٹ ورسل پر ہے۔ ہوسٹ کے لاگ میں آپ کا آئی پی، براؤزر اور کھولا گیا صفحہ شامل ہو سکتا ہے، حفاظت اور چلانے کے لیے۔ ان لاگ سے مارکیٹنگ پروفائل نہیں بنتی۔",
      "صفحات گوگل فونٹس سے فونٹ لاتی ہیں۔ اس درخواست میں آپ کا آئی پی گوگل کو جاتا ہے۔ گوگل کی اپنی پالیسی بتاتی ہے وہ کیا کرتے ہیں۔",
      "اگر گوگل اینالٹکس ۴ کی آئی ڈی لگی ہو تو کوکیز اور استعمال کا ڈیٹا جمع ہو سکتا ہے۔ آئی ڈی کے بغیر یہ بند ہے۔ گوگل کی پالیسی https://policies.google.com/privacy پر ہے۔",
      "اشتہار۔ تیسرے فریق، بشمول گوگل، کوکیز استعمال کر سکتے ہیں تاکہ پہلے دوروں کی بنیاد پر اشتہار دکھائیں۔ ذاتی نوعیت کے اشتہار سے آپٹ آؤٹ گوگل ایڈز سیٹنگز پر ہے۔ پارٹنر سائٹس: https://policies.google.com/technologies/partner-sites۔ ایڈز سیٹنگز: https://adssettings.google.com۔ اس پالیسی کی تاریخ پر ڈسپلے اشتہار بند ہیں۔ یورپی اقتصادی علاقے، برطانیہ یا سوئٹزرلینڈ کے لیے اشتہار یا اینالٹکس چالو کرنے سے پہلے تصدیق شدہ رضامندی کا بینر اور Consent Mode v2 لگے گا۔",
      "الحاق۔ اب کوئی الحاقی لنک استعمال نہیں ہو رہا۔ اگر بعد میں نشان شدہ لنک آئے تو یہ پالیسی کہے گی۔ الحاق ریٹ یا قانونی وضاحت نہیں بدلے گا۔",
      "رکھنا۔ سرور لاگ ہوسٹ کے عام دورانیے پر رہتے ہیں۔ آپ کی ای میل جواب اور درستی کے ریکارڈ تک رکھی جاتی ہے۔ ذاتی ڈیٹا نہیں بکا جاتا۔",
      "حقوق۔ آپ پوچھ سکتے ہیں کہ آپ کی شناخت سے کیا رکھا ہے، اور ای میل کی درستی یا حذف کے لیے اوپر کے پتے پر لکھ سکتے ہیں۔ ہوسٹنگ لاگ جزوی طور پر ہوسٹ کے پاس ہیں۔",
    ],
  },
  terms: {
    enTitle: "Terms of Use for Apna Ghar",
    urTitle: "اپنا گھر کی شرائط استعمال",
    enDescription:
      "Personal use of Apna Ghar. No warranty, Pakistani law, Islamabad courts, and a contact for Salim Khan. Guides are not a visa or a ruling.",
    urDescription:
      "اپنا گھر ذاتی استعمال کے لیے ہے۔ کوئی وارنٹی نہیں، پاکستانی قانون، اسلام آباد کی عدالتیں، اور سلیم خان کا رابطہ۔",
    en: [
      `These terms govern your use of ${SITE_NAME}. The site is published by ${OWNER_NAME}, Islamabad. Questions about the terms go to ${CONTACT_EMAIL}.`,
      "You may read the pages for your own use. You may not copy the guides onto another site and present them as yours, and you may not scrape the rate tables to republish as a feed. Official documents linked from the guides remain the property of the authorities that published them.",
      "The guides, calculators and rates are information. They are not a visa, a contract, a recruitment service, or a court ruling. There is no warranty that a page is complete or current. To the extent Pakistani law allows, Salim Khan is not liable for a decision you take after reading a page: a ticket you buy, a fee you pay, or a job you refuse. Nothing here limits liability that the law does not allow to be limited.",
      "Links to ministries, airlines, banks and news pages leave this site. Those sites have their own terms. Apna Ghar does not control them.",
      "These terms can change. The page will show the new text. Continued use of the site after a change is your acceptance of the new text. The terms are governed by the law of Pakistan. The courts of Islamabad have jurisdiction, without limiting any right a consumer statute gives you.",
    ],
    ur: [
      `یہ شرائط ${SITE_NAME} کے استعمال پر ہیں۔ سائٹ ${OWNER_NAME} شائع کرتے ہیں، اسلام آباد۔ سوال ${CONTACT_EMAIL} پر۔`,
      "صفحات اپنے استعمال کے لیے پڑھ سکتے ہیں۔ رہنما نقل کر کے اپنی نہیں بنا سکتے، اور ریٹ کے جدول کھرچ کر فیڈ نہیں بنا سکتے۔ جڑے سرکاری دستاویز اسی ادارے کی ملکیت رہتے ہیں جس نے شائع کیے۔",
      "رہنما، کیلکولیٹر اور ریٹ معلومات ہیں۔ وہ ویزا، معاہدہ، بھرتی یا عدالتی فیصلہ نہیں۔ مکمل یا تازہ ہونے کی کوئی وارنٹی نہیں۔ پاکستانی قانون جس حد تک اجازت دے، صفحہ پڑھ کر آپ جو فیصلہ کریں اس کا ذمہ سلیم خان پر نہیں: ٹکٹ، فیس، یا نوکری۔ جو ذمہ قانون ختم نہیں ہونے دیتا، وہ یہ شرائط بھی ختم نہیں کرتیں۔",
      "وزارتوں، ایئرلائنوں، بینکوں اور خبروں کے لنک اس سائٹ سے باہر جاتے ہیں۔ ان کی اپنی شرائط ہیں۔",
      "شرائط بدل سکتی ہیں۔ نیا متن اسی صفحے پر ہوگا۔ تبدیلی کے بعد استعمال نئی شرائط کی قبولیت ہے۔ قانون پاکستان کا ہے۔ اسلام آباد کی عدالتوں کو اختیار ہے، اس حق کے بغیر جو صارف کے قانون نے دیا ہو۔",
    ],
  },
  disclaimer: {
    enTitle: "Disclaimer: Rates, Visas and Gold on Apna Ghar",
    urTitle: "دستبرداری: اپنا گھر کے ریٹ، ویزا اور سونا",
    enDescription:
      "Not legal, immigration, financial or tax advice. Rates and gold come from named sources. Fees change. Affiliates, when added, will be labelled.",
    urDescription:
      "یہ قانونی، امیگریشن، مالی یا ٹیکس مشورہ نہیں۔ ریٹ اور سونا نامزد ماخذ سے ہیں۔ فیس بدلتی ہے۔ الحاق بعد میں نشان کے ساتھ۔",
    en: [
      "Apna Ghar is not legal, immigration, financial or tax advice. It is not a government notice. Before you pay a fee, resign a job, carry gold, or send money, read the official page and the receipt in front of you.",
      "Fees, fines and salary thresholds change. If a number is not written on the official page linked from a guide, treat a WhatsApp figure as unchecked.",
      "Currency rates are mid-market figures from the currency-api published by fawazahmed0, which posts one rate per day. They are not a bank or exchange quote. Gold for Pakistan is attributed to the Sarafa board named on the gold page, currently read from PakGold. Dubai retail gold is attributed to the Khaleej Times board named on that page. Other countries show world spot and say so. A jeweller’s making charge is not included.",
      "Advertising and affiliate links are not used yet. When they are added, they will be labelled, and they will not change a rate or a legal explanation.",
    ],
    ur: [
      "اپنا گھر قانونی، امیگریشن، مالی یا ٹیکس مشورہ نہیں۔ یہ سرکاری نوٹس نہیں۔ فیس دینے، نوکری چھوڑنے، سونا لے جانے یا پیسے بھیجنے سے پہلے سرکاری صفحہ اور اپنی رسید پڑھیں۔",
      "فیس، جرمانے اور تنخواہ کی حدیں بدلتی ہیں۔ اگر عدد اس سرکاری صفحے پر نہ ہو جو رہنما سے جڑا ہے تو واٹس ایپ کے عدد کو غیر جانچا سمجھیں۔",
      "کرنسی کے ریٹ فواز احمد کے کرنسی ماخذ کے درمیانی ریٹ ہیں، جو روز ایک ریٹ دیتا ہے۔ یہ بینک یا ایکسچینج کا کوٹ نہیں۔ پاکستان کا سونا سونے کے صفحے پر نامزد سرفہ بورڈ ہے، اب پاک گولڈ سے۔ دبئی کا ریٹیل سونا اس صفحے پر نامزد خلیج ٹائمز بورڈ ہے۔ باقی ممالک عالمی اسپاٹ دکھاتے ہیں اور یہی کہتے ہیں۔ سنار کا میکنگ چارج شامل نہیں۔",
      "اشتہار اور الحاقی لنک ابھی استعمال نہیں ہو رہے۔ جب آئیں گے تو نشان لگے گا، اور وہ ریٹ یا قانونی وضاحت نہیں بدلیں گے۔",
    ],
  },
};

export function legalPath(slug: string) {
  return slug === "salim-khan" ? "/about/salim-khan" : `/${slug}`;
}
