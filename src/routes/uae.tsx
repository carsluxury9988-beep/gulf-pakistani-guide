import { createFileRoute, notFound } from "@tanstack/react-router";
import { CountryView, countryHead } from "@/components/views";
import { getMarket } from "@/lib/market.fn";
import { countryBySlug } from "@/lib/site";

export const Route = createFileRoute("/uae")({
  loader: async () => {
    const country = countryBySlug("uae");
    if (!country) throw notFound();
    return { country, market: await getMarket() };
  },
  head: ({ loaderData }) => countryHead(loaderData!.country, "en"),
  component: function Page() {
    const data = Route.useLoaderData();
    return <CountryView country={data.country} market={data.market} locale="en" />;
  },
});
