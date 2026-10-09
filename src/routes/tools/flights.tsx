import { createFileRoute } from "@tanstack/react-router";
import { ToolView, toolHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/tools/flights")({
  loader: () => getMarket(),
  head: () => toolHead("flights", "en"),
  component: function Page() {
    return <ToolView kind="flights" market={Route.useLoaderData()} locale="en" />;
  },
});
