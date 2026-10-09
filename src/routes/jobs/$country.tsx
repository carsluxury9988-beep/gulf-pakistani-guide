import { createFileRoute, notFound } from "@tanstack/react-router";
import { jobHead, JobsView } from "@/components/hubs";
import { countryBySlug } from "@/lib/site";

export const Route = createFileRoute("/jobs/$country")({
  loader: ({ params }) => {
    const country = countryBySlug(params.country);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => jobHead(loaderData!.country, "en"),
  component: function Page() {
    const { country } = Route.useLoaderData();
    return <JobsView country={country} locale="en" />;
  },
});
