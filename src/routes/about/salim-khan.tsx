import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/about/salim-khan")({
  head: () => legalHead("salim-khan", "en"),
  component: function Page() {
    return <LegalView slug="salim-khan" locale="en" />;
  },
});
