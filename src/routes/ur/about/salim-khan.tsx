import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/ur/about/salim-khan")({
  head: () => legalHead("salim-khan", "ur"),
  component: function Page() {
    return <LegalView slug="salim-khan" locale="ur" />;
  },
});
