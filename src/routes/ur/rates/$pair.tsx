import { createFileRoute, notFound } from "@tanstack/react-router";
import { PairView, pairHead } from "@/components/views";
import { pkrPer } from "@/lib/format";
import { getMarket } from "@/lib/market.fn";
import { MARKET_CACHE } from "@/lib/seo";
import { pairBySlug } from "@/lib/site";

export const Route = createFileRoute("/ur/rates/$pair")({
  loader: async ({ params }) => {
    const pair = pairBySlug(params.pair);
    if (!pair) throw notFound();
    return { pair, market: await getMarket() };
  },
  headers: () => MARKET_CACHE,
  head: ({ loaderData }) =>
    pairHead(loaderData!.pair, "ur", pkrPer(loaderData!.market, loaderData!.pair.code)),
  component: function Page() {
    const data = Route.useLoaderData();
    return <PairView pair={data.pair} market={data.market} locale="ur" />;
  },
});