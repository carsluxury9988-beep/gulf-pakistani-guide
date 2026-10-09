import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/ur/privacy")({
  head: () => legalHead("privacy", "ur"),
  component: function Page() {
    return <LegalView slug="privacy" locale="ur" />;
  },
});
