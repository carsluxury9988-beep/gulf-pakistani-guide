import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/ur/contact")({
  head: () => legalHead("contact", "ur"),
  component: function Page() {
    return <LegalView slug="contact" locale="ur" />;
  },
});
