import { createFileRoute, notFound } from "@tanstack/react-router";
import { GuideArticle, guideHead } from "@/components/views";
import { guideBySlug } from "@/lib/content/catalog";
import { getGuide } from "@/lib/content.fn";

export const Route = createFileRoute("/guides/$slug")({
  loader: async ({ params }) => {
    const meta = guideBySlug(params.slug);
    const guide = await getGuide({ data: { slug: params.slug, locale: "en" } });
    if (!meta || !guide) throw notFound();
    return { guide, updated: meta.updated };
  },
  head: ({ loaderData }) => guideHead(loaderData!.guide, loaderData!.updated),
  component: function Page() {
    return <GuideArticle payload={Route.useLoaderData().guide} />;
  },
});
