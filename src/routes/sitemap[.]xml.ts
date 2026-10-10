import { createFileRoute } from "@tanstack/react-router";
import { urduArticles } from "@/lib/content/articles-ur";
import { guides } from "@/lib/content/catalog";
import { countries, goldPlaces, movedJobGuides, pairs, SITE_URL } from "@/lib/site";
import { loadMarket } from "@/lib/market-load";

function loc(path: string) {
  const origin = SITE_URL || "https://apnaaghar.pk";
  return `${origin}${path}`;
}

const PUBLISHED = "2026-10-09";
const LEGAL_EDIT = "2026-10-10";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const translated = new Set(Object.keys(urduArticles));
        const moved = new Set(Object.keys(movedJobGuides));
        let rateDate = PUBLISHED;
        let goldDate = PUBLISHED;
        try {
          const market = await loadMarket();
          if (/^\d{4}-\d{2}-\d{2}/.test(market.asOf)) rateDate = market.asOf.slice(0, 10);
          const pk = market.localGold?.pakistan?.asOf;
          if (pk && /^\d{4}-\d{2}-\d{2}/.test(pk)) goldDate = pk.slice(0, 10);
          else if (pk) goldDate = pk.slice(0, 10);
        } catch {
          /* keep the publish date if the feed is down */
        }
        const entries: { path: string; lastmod: string }[] = [
          ["/", rateDate],
          ["/ur", rateDate],
          ["/rates", rateDate],
          ["/ur/rates", rateDate],
          ["/gold-rates", goldDate],
          ["/ur/gold-rates", goldDate],
          ["/guides", PUBLISHED],
          ["/ur/guides", PUBLISHED],
          ["/tools/salary-converter", PUBLISHED],
          ["/ur/tools/salary-converter", PUBLISHED],
          ["/tools/gratuity-calculator", PUBLISHED],
          ["/ur/tools/gratuity-calculator", PUBLISHED],
          ["/tools/remittance", PUBLISHED],
          ["/ur/tools/remittance", PUBLISHED],
          ["/tools/flights", PUBLISHED],
          ["/ur/tools/flights", PUBLISHED],
          ["/about", LEGAL_EDIT],
          ["/ur/about", LEGAL_EDIT],
          ["/contact", LEGAL_EDIT],
          ["/ur/contact", LEGAL_EDIT],
          ["/privacy", LEGAL_EDIT],
          ["/ur/privacy", LEGAL_EDIT],
          ["/terms", LEGAL_EDIT],
          ["/ur/terms", LEGAL_EDIT],
          ["/disclaimer", LEGAL_EDIT],
          ["/ur/disclaimer", LEGAL_EDIT],
          ["/editorial", LEGAL_EDIT],
          ["/ur/editorial", LEGAL_EDIT],
          ...countries.flatMap((country) => [
            [`/${country.slug}`, LEGAL_EDIT],
            [`/ur/${country.slug}`, LEGAL_EDIT],
            [`/jobs/${country.slug}`, LEGAL_EDIT],
          ]),
          ["/questions/uae", LEGAL_EDIT],
          ["/questions/saudi-arabia", LEGAL_EDIT],
          ...pairs.flatMap((pair) => [
            [`/rates/${pair.slug}`, rateDate],
            [`/ur/rates/${pair.slug}`, rateDate],
          ]),
          ...goldPlaces.flatMap((place) => [
            [`/gold-rates/${place.slug}`, goldDate],
            [`/ur/gold-rates/${place.slug}`, goldDate],
          ]),
          ...guides
            .filter((guide) => !moved.has(guide.slug))
            .flatMap((guide) =>
              (translated.has(guide.slug)
                ? [`/guides/${guide.slug}`, `/ur/guides/${guide.slug}`]
                : [`/guides/${guide.slug}`]
              ).map((path) => [path, guide.updated]),
            ),
        ].map(([path, lastmod]) => ({ path, lastmod: String(lastmod).slice(0, 10) }));
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) =>
      `  <url><loc>${loc(entry.path)}</loc><lastmod>${entry.lastmod}</lastmod></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
