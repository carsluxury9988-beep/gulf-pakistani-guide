import { absUrl, type Locale } from "@/lib/site";

const GA_PATTERN = /^G-[A-Z0-9]+$/;

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
}): { meta: any[]; links: any[] } {
  const url = absUrl(opts.path);
  const enPath = opts.path.replace(/^\/ur(?=\/|$)/, "") || "/";
  const urPath = enPath === "/" ? "/ur" : `/ur${enPath}`;
  const meta: Array<Record<string, unknown>> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
  if (url.startsWith("http")) {
    meta.push({ property: "og:url", content: url });
  }
  const links = [
    { rel: "canonical", href: url },
    { rel: "alternate", hrefLang: "en", href: absUrl(enPath) },
    { rel: "alternate", hrefLang: "ur", href: absUrl(urPath) },
    { rel: "alternate", hrefLang: "x-default", href: absUrl(enPath) },
  ];
  return { meta, links };
}

export function ld(data: Record<string, unknown>) {
  return { "script:ld+json": data };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return ld({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  });
}

export function gaId() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID ?? "";
  return GA_PATTERN.test(id) ? id : "";
}

export function gscToken() {
  const token = import.meta.env.VITE_GSC_VERIFICATION ?? "";
  return /^[A-Za-z0-9_-]{10,128}$/.test(token) ? token : "";
}
