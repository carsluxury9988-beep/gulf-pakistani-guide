import { createFileRoute } from "@tanstack/react-router";
import { RatesIndex, ratesHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";
import { MARKET_CACHE } from "@/lib/seo";

export const Route = createFileRoute("/ur/rates/")({
  loader: () => getMarket(),
  headers: () => MARKET_CACHE,
  head: () => ratesHead("ur"),
  component: function Page() {
    return <RatesIndex market={Route.useLoaderData()} locale="ur" />;
  },
});
