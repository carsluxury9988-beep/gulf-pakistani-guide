import { createFileRoute, notFound } from "@tanstack/react-router";
import { GoldPlaceView, goldPlaceHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";
import { MARKET_CACHE } from "@/lib/seo";
import { goldBySlug } from "@/lib/site";

export const Route = createFileRoute("/ur/gold-rates/$place")({
  loader: async ({ params }) => {
    const place = goldBySlug(params.place);
    if (!place) throw notFound();
    return { place, market: await getMarket() };
  },
  headers: () => MARKET_CACHE,
  head: ({ loaderData }) => goldPlaceHead(loaderData!.place, "ur"),
  component: function Page() {
    const data = Route.useLoaderData();
    return <GoldPlaceView place={data.place} market={data.market} locale="ur" />;
  },
});
