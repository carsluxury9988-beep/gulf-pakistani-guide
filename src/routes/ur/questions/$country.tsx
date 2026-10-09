import { createFileRoute, notFound } from "@tanstack/react-router";
import { questionHead, QuestionsView } from "@/components/hubs";
import { countryBySlug } from "@/lib/site";

export const Route = createFileRoute("/ur/questions/$country")({
  loader: ({ params }) => {
    const country = countryBySlug(params.country);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => questionHead(loaderData!.country, "ur"),
  component: function Page() {
    const { country } = Route.useLoaderData();
    return <QuestionsView country={country} locale="ur" />;
  },
});
