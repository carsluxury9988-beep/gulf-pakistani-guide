import { createFileRoute } from "@tanstack/react-router";
import { loadMarket } from "@/lib/market-load";

export const Route = createFileRoute("/api/cron/market")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const secret = process.env.CRON_SECRET;
        if (secret) {
          const auth = request.headers.get("authorization");
          if (auth !== `Bearer ${secret}`) {
            return new Response("Unauthorized", { status: 401 });
          }
        }
        const market = await loadMarket({ refresh: true });
        return Response.json({
          ok: true,
          asOf: market.asOf,
          stale: market.stale,
          pakistan: market.localGold.pakistan
            ? { tola22: market.localGold.pakistan.tola22, stale: market.localGold.pakistan.stale }
            : null,
          dubai: market.localGold.dubai
            ? { gram22: market.localGold.dubai.gram22, stale: market.localGold.dubai.stale }
            : null,
        });
      },
    },
  },
});
