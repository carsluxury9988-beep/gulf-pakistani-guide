import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/ur/disclaimer")({
  head: () => legalHead("disclaimer", "ur"),
  component: function Page() {
    return <LegalView slug="disclaimer" locale="ur" />;
  },
});
