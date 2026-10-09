import { createFileRoute, notFound } from "@tanstack/react-router";
import { PairView, pairHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";
import { pairBySlug } from "@/lib/site";

export const Route = createFileRoute("/ur/rates/$pair")({
  loader: async ({ params }) => {
    const pair = pairBySlug(params.pair);
    if (!pair) throw notFound();
    return { pair, market: await getMarket() };
  },
  head: ({ loaderData }) => pairHead(loaderData!.pair, "ur"),
  component: function Page() {
    const data = Route.useLoaderData();
    return <PairView pair={data.pair} market={data.market} locale="ur" />;
  },
});
