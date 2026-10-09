import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/ur/terms")({
  head: () => legalHead("terms", "ur"),
  component: function Page() {
    return <LegalView slug="terms" locale="ur" />;
  },
});
