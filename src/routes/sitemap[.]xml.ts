import { createFileRoute } from "@tanstack/react-router";
import { urduArticles } from "@/lib/content/articles-ur";
import { guides } from "@/lib/content/catalog";
import { countries, goldPlaces, pairs, SITE_URL } from "@/lib/site";

function loc(path: string) {
  const origin = SITE_URL || "https://apnaaghar.pk";
  return `${origin}${path}`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const translated = new Set(Object.keys(urduArticles));
        const today = "2026-10-10";
        const entries: { path: string; lastmod: string }[] = [
          ["/", today],
          ["/ur", today],
          ["/rates", today],
          ["/ur/rates", today],
          ["/gold-rates", today],
          ["/ur/gold-rates", today],
          ["/guides", today],
          ["/ur/guides", today],
          ["/tools/salary-converter", today],
          ["/ur/tools/salary-converter", today],
          ["/tools/gratuity-calculator", today],
          ["/ur/tools/gratuity-calculator", today],
          ["/tools/remittance", today],
          ["/ur/tools/remittance", today],
          ["/tools/flights", today],
          ["/ur/tools/flights", today],
          ["/about", today],
          ["/ur/about", today],
          ["/contact", today],
          ["/ur/contact", today],
          ["/privacy", today],
          ["/ur/privacy", today],
          ["/terms", today],
          ["/ur/terms", today],
          ["/disclaimer", today],
          ["/ur/disclaimer", today],
          ["/editorial", today],
          ["/ur/editorial", today],
          ...countries.flatMap((country) => [
            [`/${country.slug}`, today],
            [`/ur/${country.slug}`, today],
            [`/jobs/${country.slug}`, today],
            [`/ur/jobs/${country.slug}`, today],
            [`/questions/${country.slug}`, today],
            [`/ur/questions/${country.slug}`, today],
          ]),
          ...pairs.flatMap((pair) => [
            [`/rates/${pair.slug}`, today],
            [`/ur/rates/${pair.slug}`, today],
          ]),
          ...goldPlaces.flatMap((place) => [
            [`/gold-rates/${place.slug}`, today],
            [`/ur/gold-rates/${place.slug}`, today],
          ]),
          ...guides.flatMap((guide) =>
            (translated.has(guide.slug)
              ? [`/guides/${guide.slug}`, `/ur/guides/${guide.slug}`]
              : [`/guides/${guide.slug}`]
            ).map((path) => [path, guide.updated]),
          ),
        ].map(([path, lastmod]) => ({ path, lastmod }));
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
