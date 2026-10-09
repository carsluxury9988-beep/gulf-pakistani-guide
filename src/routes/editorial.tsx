import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/editorial")({
  head: () => legalHead("editorial", "en"),
  component: function Page() {
    return <LegalView slug="editorial" locale="en" />;
  },
});
