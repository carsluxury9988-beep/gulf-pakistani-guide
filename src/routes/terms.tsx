import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/terms")({
  head: () => legalHead("terms", "en"),
  component: function Page() {
    return <LegalView slug="terms" locale="en" />;
  },
});
