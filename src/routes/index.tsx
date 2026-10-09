import { createFileRoute } from "@tanstack/react-router";
import { HomeView, homeHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/")({
  loader: () => getMarket(),
  head: () => homeHead("en"),
  component: function Page() {
    return <HomeView market={Route.useLoaderData()} locale="en" />;
  },
});
