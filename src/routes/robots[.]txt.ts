import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const origin = SITE_URL || "https://apnaaghar.pk";
        const sitemap = `${origin}/sitemap.xml`;
        const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
        return new Response(body, {
          headers: { "content-type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});
