import { createFileRoute } from "@tanstack/react-router";
import { RatesIndex, ratesHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/rates/")({
  loader: () => getMarket(),
  head: () => ratesHead("en"),
  component: function Page() {
    return <RatesIndex market={Route.useLoaderData()} locale="en" />;
  },
});
