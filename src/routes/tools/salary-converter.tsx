import { createFileRoute } from "@tanstack/react-router";
import { ToolView, toolHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/tools/salary-converter")({
  loader: () => getMarket(),
  head: () => toolHead("salary", "en"),
  component: function Page() {
    return <ToolView kind="salary" market={Route.useLoaderData()} locale="en" />;
  },
});
