# Apna Ghar

Guides, rates and tools for Pakistanis in the Gulf. The site is https://apnaaghar.pk (non-www).

Salim Khan, Islamabad, runs it. Contact: salimpk742@gmail.com.

Rates are indicative. They are not a bank quote. Pakistan gold on the comparison is the Sarafa board, and Dubai gold is the published retail board. Other countries stay on world spot.

## Add a guide

1. Add a row to `src/lib/content/catalog.ts` (slug, title, category, three related slugs, one tool).
2. Add a 50–60 character `title` and a 140–155 character `description` in `src/lib/content/seo-copy.ts`.
3. Add the body in `src/lib/content/bodies-a.ts`, `bodies-b.ts` or `bodies-c.ts`. Aim for at least 900 words. Use `[[/guides/another-slug|label]]` for internal links. For an official figure, name it, deep-link the exact page, and add “Checked on [date]”.
4. Optional Urdu: add the same slug to `src/lib/content/articles-ur.ts`. Without that, `/ur/guides/...` is not listed in the sitemap and its canonical points at the English page.
5. Do not invent visa fees, fines or salary averages.

The sitemap picks up new guides automatically. Set `VITE_SITE_URL=https://apnaaghar.pk` (already the default) so canonical, hreflang, Open Graph, `sitemap.xml` and `robots.txt` use absolute URLs.

## Rates and gold

Live currency and the world gold spot come from the public [fawazahmed0 currency-api](https://github.com/fawazahmed0/currency-api) (no key). The server caches them for three hours. Home, `/rates` and `/gold-rates` send `Cache-Control: s-maxage=10800, stale-while-revalidate=10800`.

A Vercel cron hits `/api/cron/market` once a day at 03:00 UTC (`0 3 * * *`). Hobby plans reject a cron that runs more often than once a day. The pages also refresh when someone visits and the in-memory copy is older than three hours.

Store the last good payload in Vercel KV (`KV_REST_API_URL` + `KV_REST_API_TOKEN`) or Vercel Blob (`BLOB_READ_WRITE_TOKEN`). If neither is connected, the fallback is the JSON seed in `src/data/`, and a failed live fetch is marked stale. Set `CRON_SECRET` in the Vercel project. The cron route returns 401 until that variable exists, and Vercel sends `Authorization: Bearer …`.

Pakistan Sarafa is read from PakGold (`https://www.pakgold.net/gold-rate-cities`), a third-party board, not a government site. The source name and link stay on the page. Dubai retail is read from the Khaleej Times gold page when that fetch succeeds. If it fails, the last saved board is shown with its time and a delayed note. You can override either board with:

- `GOLD_PK_TOLA_24`, `GOLD_PK_TOLA_22`, optional `GOLD_PK_SOURCE`, `GOLD_PK_SOURCE_URL`, `GOLD_PK_ASOF`
- `GOLD_DXB_GRAM_24`, `GOLD_DXB_GRAM_22`, optional `GOLD_DXB_GRAM_21`, `GOLD_DXB_GRAM_18`, `GOLD_DXB_SOURCE`, `GOLD_DXB_SOURCE_URL`, `GOLD_DXB_ASOF`

Protect the cron with `CRON_SECRET` (Vercel sends `Authorization: Bearer …`). One tola is 11.6638 grams. Shop jewellery still adds making charges.

No API keys are required for the currency feed. Do not put keys in the repository.

## Analytics and Search Console

- `VITE_SITE_URL` — `https://apnaaghar.pk`
- `VITE_GA_MEASUREMENT_ID` — `G-` plus letters and numbers. Anything else is ignored.
- `VITE_GSC_VERIFICATION` — Search Console token.

## Affiliates

`src/lib/site.ts` exports `features`: `remittanceOffers`, `flightSearch`, `ads`. All three are `false`.

## Old rental URLs

`/listings`, `/property`, `/properties`, `/cities`, `/post-ad` and `/login` redirect to the homepage. This site has no accounts.
