import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/ur/about/")({
  head: () => legalHead("about", "ur"),
  component: function Page() {
    return <LegalView slug="about" locale="ur" />;
  },
});
