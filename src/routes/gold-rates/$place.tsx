import { createFileRoute, notFound } from "@tanstack/react-router";
import { GoldPlaceView, goldPlaceHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";
import { goldBySlug } from "@/lib/site";

export const Route = createFileRoute("/gold-rates/$place")({
  loader: async ({ params }) => {
    const place = goldBySlug(params.place);
    if (!place) throw notFound();
    return { place, market: await getMarket() };
  },
  head: ({ loaderData }) => goldPlaceHead(loaderData!.place, "en"),
  component: function Page() {
    const data = Route.useLoaderData();
    return <GoldPlaceView place={data.place} market={data.market} locale="en" />;
  },
});
