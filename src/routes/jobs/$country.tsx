import { createFileRoute, notFound } from "@tanstack/react-router";
import { jobHead, JobsView } from "@/components/hubs";
import { getGuide } from "@/lib/content.fn";
import { jobGuideSlug } from "@/lib/content/job-hubs";
import { countryBySlug } from "@/lib/site";

export const Route = createFileRoute("/jobs/$country")({
  loader: async ({ params }) => {
    const country = countryBySlug(params.country);
    if (!country) throw notFound();
    const slug = jobGuideSlug[country.slug];
    const guide = slug ? await getGuide({ data: { slug, locale: "en" } }) : null;
    return { country, blocks: guide?.body.blocks ?? [] };
  },
  head: ({ loaderData }) => jobHead(loaderData!.country, "en"),
  component: function Page() {
    const { country, blocks } = Route.useLoaderData();
    return <JobsView country={country} locale="en" blocks={blocks} />;
  },
});
