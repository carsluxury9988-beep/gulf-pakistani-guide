import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/disclaimer")({
  head: () => legalHead("disclaimer", "en"),
  component: function Page() {
    return <LegalView slug="disclaimer" locale="en" />;
  },
});
