import { createFileRoute } from "@tanstack/react-router";
import { LegalView, legalHead } from "@/components/views";

export const Route = createFileRoute("/contact")({
  head: () => legalHead("contact", "en"),
  component: function Page() {
    return <LegalView slug="contact" locale="en" />;
  },
});
