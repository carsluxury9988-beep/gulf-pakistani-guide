import { createFileRoute } from "@tanstack/react-router";
import { ToolView, toolHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/ur/tools/remittance")({
  loader: () => getMarket(),
  head: () => toolHead("remit", "ur"),
  component: function Page() {
    return <ToolView kind="remit" market={Route.useLoaderData()} locale="ur" />;
  },
});
