import { createFileRoute, notFound } from "@tanstack/react-router";
import { CountryView, countryHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";
import { countryBySlug } from "@/lib/site";

export const Route = createFileRoute("/ur/kuwait")({
  loader: async () => {
    const country = countryBySlug("kuwait");
    if (!country) throw notFound();
    return { country, market: await getMarket() };
  },
  head: ({ loaderData }) => countryHead(loaderData!.country, "ur"),
  component: function Page() {
    const data = Route.useLoaderData();
    return <CountryView country={data.country} market={data.market} locale="ur" />;
  },
});
