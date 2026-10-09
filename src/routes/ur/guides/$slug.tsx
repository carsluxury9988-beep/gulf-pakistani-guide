import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { GuideArticle, guideHead } from "@/components/views";
import { guideBySlug } from "@/lib/content/catalog";
import { getGuide } from "@/lib/content.fn";
import { movedJobGuides } from "@/lib/site";

export const Route = createFileRoute("/ur/guides/$slug")({
  beforeLoad: ({ params }) => {
    const dest = movedJobGuides[params.slug];
    if (dest) throw redirect({ href: dest, statusCode: 301 });
  },
  loader: async ({ params }) => {
    const meta = guideBySlug(params.slug);
    const guide = await getGuide({ data: { slug: params.slug, locale: "ur" } });
    if (!meta || !guide) throw notFound();
    return { guide, updated: meta.updated };
  },
  head: ({ loaderData }) => guideHead(loaderData!.guide, loaderData!.updated),
  component: function Page() {
    return <GuideArticle payload={Route.useLoaderData().guide} />;
  },
});
