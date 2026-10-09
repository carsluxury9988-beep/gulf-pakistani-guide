import { createFileRoute } from "@tanstack/react-router";
import { ToolView, toolHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/ur/tools/salary-converter")({
  loader: () => getMarket(),
  head: () => toolHead("salary", "ur"),
  component: function Page() {
    return <ToolView kind="salary" market={Route.useLoaderData()} locale="ur" />;
  },
});
