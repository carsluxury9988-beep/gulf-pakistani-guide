import { createFileRoute } from "@tanstack/react-router";
import { guides } from "@/lib/content/catalog";
import { countries, goldPlaces, pairs, SITE_URL } from "@/lib/site";

function loc(path: string) {
  if (!SITE_URL) return path;
  return `${SITE_URL}${path}`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/ur",
          "/rates",
          "/ur/rates",
          "/gold-rates",
          "/ur/gold-rates",
          "/guides",
          "/ur/guides",
          "/tools/salary-converter",
          "/ur/tools/salary-converter",
          "/tools/gratuity-calculator",
          "/ur/tools/gratuity-calculator",
          "/tools/remittance",
          "/ur/tools/remittance",
          "/tools/flights",
          "/ur/tools/flights",
          "/about",
          "/ur/about",
          "/contact",
          "/ur/contact",
          "/privacy",
          "/ur/privacy",
          "/terms",
          "/ur/terms",
          "/disclaimer",
          "/ur/disclaimer",
          "/editorial",
          "/ur/editorial",
          ...countries.flatMap((country) => [`/${country.slug}`, `/ur/${country.slug}`]),
          ...pairs.flatMap((pair) => [`/rates/${pair.slug}`, `/ur/rates/${pair.slug}`]),
          ...goldPlaces.flatMap((place) => [`/gold-rates/${place.slug}`, `/ur/gold-rates/${place.slug}`]),
          ...guides.flatMap((guide) => [`/guides/${guide.slug}`, `/ur/guides/${guide.slug}`]),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url><loc>${loc(path)}</loc></url>`,
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
