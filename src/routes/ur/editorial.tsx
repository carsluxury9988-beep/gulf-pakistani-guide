import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/ur/editorial")({
  head: () => legalHead("editorial", "ur"),
  component: function Page() {
    return <LegalView slug="editorial" locale="ur" />;
  },
});
