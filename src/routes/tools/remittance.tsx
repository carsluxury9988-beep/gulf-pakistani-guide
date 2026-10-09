import { createFileRoute } from "@tanstack/react-router";
import { ToolView, toolHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";

export const Route = createFileRoute("/tools/remittance")({
  loader: () => getMarket(),
  head: () => toolHead("remit", "en"),
  component: function Page() {
    return <ToolView kind="remit" market={Route.useLoaderData()} locale="en" />;
  },
});
