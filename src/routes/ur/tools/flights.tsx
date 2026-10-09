import { createFileRoute } from "@tanstack/react-router";
import { ToolView, toolHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/ur/tools/flights")({
  loader: () => getMarket(),
  head: () => toolHead("flights", "ur"),
  component: function Page() {
    return <ToolView kind="flights" market={Route.useLoaderData()} locale="ur" />;
  },
});
