import { createFileRoute } from "@tanstack/react-router";
import { GuidesIndex, guidesHead } from "@/components/views";

export const Route = createFileRoute("/guides/")({
  validateSearch: (search: Record<string, unknown>): { category?: string } =>
    typeof search.category === "string" && search.category ? { category: search.category } : {},
  head: () => guidesHead("en"),
  component: function Page() {
    const { category } = Route.useSearch();
    return <GuidesIndex locale="en" category={category ?? ""} />;
  },
});
