import { createFileRoute } from "@tanstack/react-router";
import { GoldIndex, goldHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/gold-rates/")({
  loader: () => getMarket(),
  head: () => goldHead("en"),
  component: function Page() {
    return <GoldIndex market={Route.useLoaderData()} locale="en" />;
  },
});
