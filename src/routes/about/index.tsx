import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/about/")({
  head: () => legalHead("about", "en"),
  component: function Page() {
    return <LegalView slug="about" locale="en" />;
  },
});
