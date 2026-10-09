import { createFileRoute } from "@tanstack/react-router";
import { ToolView, toolHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/tools/gratuity-calculator")({
  loader: () => getMarket(),
  head: () => toolHead("gratuity", "en"),
  component: function Page() {
    return <ToolView kind="gratuity" market={Route.useLoaderData()} locale="en" />;
  },
});
