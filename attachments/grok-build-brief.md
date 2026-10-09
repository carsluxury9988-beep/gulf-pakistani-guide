# Build brief: Gulf guide website for Pakistanis

Paste this whole brief into Grok Build.

## 1. Goal
Build a fast, mobile-first, SEO-friendly website for Pakistanis living and working in the Gulf: UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain. Visitors should come back every day for live rates and tools, and read practical guides on jobs, visas, cost of living and sending money home. Later it will earn from remittance, banking and travel affiliate links, plus display ads, so leave clean places for these but don't add any affiliate links yet.

Create a new GitHub repository (suggested name: `gulf-pakistani-guide`), commit everything there, and deploy it on Vercel.

## 2. Tech and quality rules
- Next.js (App Router) + TypeScript + Tailwind CSS, with static pages and incremental regeneration (ISR) so pages load instantly.
- Mobile first. It must look and work perfectly on a 360px-wide phone. Fast: Lighthouse 90+ on mobile.
- English first, with Urdu (RTL) versions of key pages under /ur/. Add an English/Urdu language switcher.
- Clean, trustworthy design: white background, deep green as the main colour, gold accents. Readable fonts, big tap targets, no pop-ups or annoying ads.
- Accessible: proper headings, alt text, good contrast.
- No login and no database needed at the start.

## 3. Pages and structure
- **Home:** a "Today's rates" strip (AED, SAR, QAR, KWD, OMR and BHD to PKR, plus 22K and 24K gold in Dubai and Pakistan), quick links to the tools, the latest guides, and a country picker.
- **Country hubs:** /uae, /saudi-arabia, /qatar, /kuwait, /oman, /bahrain. Each has that country's rates, gold price, tools and guides.
- **Tools (priority):**
  1. **Currency rates** /rates: each Gulf currency to PKR, updated automatically several times a day, with a "Last updated" time and a 30-day mini chart. One page per pair, e.g. /rates/aed-to-pkr and /rates/sar-to-pkr. These pages bring search traffic.
  2. **Gold rates** /gold-rates: today's 24K, 22K, 21K and 18K prices per gram and per tola in each Gulf country, side by side with the Pakistan price, plus "where is gold cheaper today". One page per country, e.g. /gold-rates/dubai and /gold-rates/saudi-arabia.
  3. **Salary converter** /tools/salary-converter: enter a Gulf salary and see it in PKR, with a typical monthly cost-of-living estimate and the savings left over.
  4. **Gratuity calculator** /tools/gratuity-calculator: end-of-service benefits under UAE and Saudi labour law, with notes on the rules and a clear "estimate only" disclaimer.
  5. Later: a remittance comparison table and a flight search widget. Make placeholders only.
- **Guides** /guides/[slug], in categories: Jobs, Visas & Documents, Cost of Living, Sending Money Home, Rights & Labour Law, Hajj & Umrah, Travel Home. Start with 10 high-quality guides (list below). Each guide gets a table of contents, a "Last updated" date, sources (official government links), FAQs and related guides.
- **About** (who runs the site and why), **Contact** (a simple email), **Privacy Policy**, **Terms**, **Disclaimer** (rates are indicative; check with your bank or exchange before transacting), and **Editorial policy**.

## 4. Data sources (automatic updates)
- **Currency:** use a free API such as open.er-api.com, exchangerate.host or frankfurter.app. Refresh every 3–6 hours with ISR or a Vercel cron job, and cache the results.
- **Gold:** use a gold price API such as metals.dev or goldapi.io (the free tier to start), or a free XAU/USD rate converted locally. Calculate per-gram and per-tola prices for each karat (1 tola = 11.6638 g). Show "Last updated" and an "indicative price" note.
- Put API keys in Vercel environment variables, never in code.
- If an API fails, show the last saved value with its time. Never show blank or fake numbers.

## 5. SEO requirements
- A unique title (under 60 characters) and meta description (under 160) on every page.
- Clean URLs, canonical tags, Open Graph and Twitter cards.
- sitemap.xml (auto-generated, including all rate, gold, tool and guide pages) and robots.txt.
- Structured data: Organization and WebSite (sitewide), Article and FAQPage on guides, BreadcrumbList, and SoftwareApplication or WebApplication on tools.
- Internal links: every rate page links to the matching gold, salary and remittance guide, and every guide links to 3 related guides and 1 tool.
- hreflang tags for the English and Urdu pages.
- Fast images (next/image, WebP) and no layout shift.
- Add placeholders for Google Analytics 4 and the Google Search Console verification meta tag, both set through environment variables.

## 6. First 10 guides (real, accurate, cite official sources)
1. Cheapest ways to send money from UAE to Pakistan
2. Cheapest ways to send money from Saudi Arabia to Pakistan
3. How to find a genuine job in Dubai from Pakistan (and avoid fake agents)
4. UAE visit visa vs work visa for Pakistanis
5. Saudi Iqama guide for Pakistani workers
6. Cost of living in Dubai for a single Pakistani worker (monthly budget)
7. Cost of living in Riyadh for a Pakistani family
8. Gratuity rules in UAE explained (with calculator)
9. How much gold can you carry from Dubai or Saudi to Pakistan
10. Roshan Digital Account: guide for overseas Pakistanis

Write in simple, friendly English. Don't invent laws, fees or numbers: link official sources (e.g. UAE MOHRE, Saudi HRSD, State Bank of Pakistan, Pakistan Customs, Bureau of Emigration). Mark anything uncertain to be checked.

## 7. Monetisation placeholders (don't activate yet)
- Leave reusable components for a remittance provider comparison card, a flight search widget and an ad slot. Keep them off by default and switch them on through a config flag later.

## 8. Done when
- The repo is on GitHub, the site is deployed on Vercel, and it works on mobile.
- Rates and gold update automatically and show "Last updated".
- All 4 tools work. The 10 guides, the legal pages and the sitemap are live.
- Lighthouse mobile is 90+ for Performance, SEO and Accessibility.
- There's a README explaining how to add a new guide, update API keys and switch on affiliates.

## 9. SEO keyword map (use these as titles, H1s and URL slugs)
Build these as separate guide pages with keyword-focused URLs. Write in simple English and give each page an FAQ section using the "People also ask" style questions.

**Visas (apply, renew, check status)**
- /guides/uae-visit-visa-for-pakistanis: "UAE visit visa for Pakistanis 2026: requirements, fees, how to apply"
- /guides/uae-work-visa-pakistan: "How to get a UAE work visa from Pakistan"
- /guides/uae-visa-renewal: "UAE residence visa renewal: steps, documents, cost"
- /guides/check-uae-visa-status: "How to check UAE visa status online with passport number"
- /guides/saudi-visit-visa-for-pakistanis: "Saudi visit visa for Pakistanis: family, business, tourist"
- /guides/saudi-work-visa-pakistan: "Saudi work visa from Pakistan: process, Protector, medical"
- /guides/iqama-renewal: "Iqama renewal: fees, Absher steps, late fine"
- /guides/check-iqama-status: "Check Iqama status and expiry online"
- /guides/qatar-visa-for-pakistanis, /guides/kuwait-visa-for-pakistanis, /guides/oman-visa-for-pakistanis, /guides/bahrain-visa-for-pakistanis
- /guides/family-visa-uae-salary-requirement: "UAE family visa for Pakistanis: minimum salary and documents"
- /guides/gamca-medical-test: "GAMCA / Wafid medical test for Gulf visa: booking, fees, centres in Pakistan"
- /guides/protector-of-emigrants: "Protector stamp: Bureau of Emigration process and fees"

**Jobs (how to apply)**
- /guides/jobs-in-dubai-for-pakistanis: "Jobs in Dubai for Pakistanis 2026: how to apply and where to find genuine vacancies"
- /guides/jobs-in-saudi-arabia-for-pakistanis
- /guides/jobs-in-qatar-for-pakistanis, /guides/jobs-in-kuwait-for-pakistanis, /guides/jobs-in-oman-for-pakistanis
- /guides/driver-jobs-in-dubai-salary, /guides/nurse-jobs-in-saudi-salary, /guides/electrician-jobs-in-gulf
- /guides/gulf-cv-format: "CV format for Gulf jobs (free template)"
- /guides/oep-licensed-agents: "How to check a licensed Overseas Employment Promoter (OEP) in Pakistan"

**Scams and fake agents**
- /guides/fake-job-offer-dubai: "How to spot a fake Dubai job offer letter"
- /guides/visa-agent-scam-pakistan: "Visa agent scams in Pakistan: warning signs and where to complain"
- /guides/fake-saudi-visa-check: "How to verify a Saudi visa is genuine"
- /guides/report-visa-fraud-fia: "Report visa or job fraud to FIA and Bureau of Emigration"

**Tickets and flights**
- /guides/cheap-flights-dubai-to-pakistan: "Cheap flights Dubai to Lahore, Karachi, Islamabad, Peshawar: when to book"
- /guides/cheap-flights-saudi-to-pakistan: "Riyadh / Jeddah / Dammam to Pakistan cheap flights"
- /guides/baggage-allowance-gulf-to-pakistan: "Baggage allowance on PIA, Emirates, flydubai, Air Arabia, Saudia, airblue"
- /guides/eid-flights-to-pakistan-tips
- Route pages later (with an affiliate search box): /flights/dubai-to-lahore, /flights/riyadh-to-islamabad, etc.

**Rules for every keyword page**
- Main keyword in the title, H1, URL, first 100 words and one H2. Add 2–3 related phrases naturally, with no stuffing.
- Add a "Last updated" date and official sources (GDRFA/ICP, Absher/Muqeem, MOHRE, HRSD, Bureau of Emigration, FIA, GAMCA/Wafid).
- At least 5 FAQs with FAQPage schema.
- Internal links to 3 related guides plus one tool (rates, salary converter or gratuity calculator).
- Never invent fees or rules. If unsure, write "check the official site" and link it.
