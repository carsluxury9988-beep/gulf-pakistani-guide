import { createFileRoute } from "@tanstack/react-router";
import { HomeView, homeHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";
import { MARKET_CACHE } from "@/lib/seo";

export const Route = createFileRoute("/ur/")({
  loader: () => getMarket(),
  headers: () => MARKET_CACHE,
  head: () => homeHead("ur"),
  component: function Page() {
    return <HomeView market={Route.useLoaderData()} locale="ur" />;
  },
});
