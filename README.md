# GulfPK

A mobile-first desk for Pakistanis in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain: mid-market rates, spot gold, a salary converter, a gratuity estimate, and practical guides.

Rates are indicative. They are not a bank quote.

## Add a guide

1. Add a row to `src/lib/content/catalog.ts` (slug, title under 60 characters for `seoTitle`, description under 160 characters, category, three related slugs, one tool).
2. Add the body in `src/lib/content/bodies-a.ts`, `bodies-b.ts` or `bodies-c.ts`. Use `[[/guides/another-slug|label]]` for internal links.
3. Optional Urdu: add the same slug to `src/lib/content/articles-ur.ts` and `urTitle` / `urDescription` on the catalog row. Without that, `/ur/guides/...` shows the English article inside the Urdu chrome.
4. Do not invent visa fees, fines or salary averages. Link the official page and say to check it.

The sitemap picks up new guides automatically.

## Rates and gold

Live figures come from the public [fawazahmed0 currency-api](https://github.com/fawazahmed0/currency-api) (no key). The server caches them for three hours. If the feed fails, the site shows `src/data/market-snapshot.json` and labels it as the last saved copy.

Gold is the world spot price (XAU in US dollars per troy ounce), converted with the same feed. One tola is 11.6638 grams. Shop prices include making charges. The pages say so.

No API keys are required. Do not put keys in the repository. If you later use a paid metal feed, set it in the host’s environment, not in code.

## Analytics and Search Console

Set these on the host (they are public by nature):

- `VITE_SITE_URL` — absolute origin, no trailing slash, used for canonical links, hreflang and the sitemap.
- `VITE_GA_MEASUREMENT_ID` — `G-` plus letters and numbers. Anything else is ignored.
- `VITE_GSC_VERIFICATION` — Search Console token. It is rendered as `google-site-verification` only when it matches a safe token shape.

## Affiliates

`src/lib/site.ts` exports `features`:

- `remittanceOffers`
- `flightSearch`
- `ads`

All three are `false`. The components in `src/components/monetize.tsx` render nothing until you flip a flag. Do not add affiliate links until the editorial policy still holds: a partner must not change a rate or a legal explanation.

## Contact address

Change `CONTACT_EMAIL` in `src/lib/site.ts` before you treat the site as yours.
