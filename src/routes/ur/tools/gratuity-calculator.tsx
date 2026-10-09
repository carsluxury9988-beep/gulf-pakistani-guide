import { createFileRoute } from "@tanstack/react-router";
import { ToolView, toolHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/ur/tools/gratuity-calculator")({
  loader: () => getMarket(),
  head: () => toolHead("gratuity", "ur"),
  component: function Page() {
    return <ToolView kind="gratuity" market={Route.useLoaderData()} locale="ur" />;
  },
});
