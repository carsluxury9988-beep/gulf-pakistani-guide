import { createFileRoute, notFound } from "@tanstack/react-router";
import { questionHead, QuestionsView } from "@/components/hubs";
import { countryBySlug } from "@/lib/site";

export const Route = createFileRoute("/questions/$country")({
  loader: ({ params }) => {
    const country = countryBySlug(params.country);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => questionHead(loaderData!.country, "en"),
  component: function Page() {
    const { country } = Route.useLoaderData();
    return <QuestionsView country={country} locale="en" />;
  },
});
