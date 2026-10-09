import { createFileRoute } from "@tanstack/react-router";
import { GuidesIndex, guidesHead } from "@/components/views";

export const Route = createFileRoute("/ur/guides/")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : "",
  }),
  head: () => guidesHead("ur"),
  component: function Page() {
    const { category } = Route.useSearch();
    return <GuidesIndex locale="ur" category={category} />;
  },
});
