import { createFileRoute } from "@tanstack/react-router";
import { RatesIndex, ratesHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";
import { MARKET_CACHE } from "@/lib/seo";

export const Route = createFileRoute("/rates/")({
  loader: () => getMarket(),
  headers: () => MARKET_CACHE,
  head: () => ratesHead("en"),
  component: function Page() {
    return <RatesIndex market={Route.useLoaderData()} locale="en" />;
  },
});
