import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/privacy")({
  head: () => legalHead("privacy", "en"),
  component: function Page() {
    return <LegalView slug="privacy" locale="en" />;
  },
});
