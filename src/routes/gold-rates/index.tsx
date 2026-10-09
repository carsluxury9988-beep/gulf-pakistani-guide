import { createFileRoute } from "@tanstack/react-router";
import { GoldIndex, goldHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";
import { MARKET_CACHE } from "@/lib/seo";

export const Route = createFileRoute("/gold-rates/")({
  loader: () => getMarket(),
  headers: () => MARKET_CACHE,
  head: () => goldHead("en"),
  component: function Page() {
    return <GoldIndex market={Route.useLoaderData()} locale="en" />;
  },
});
