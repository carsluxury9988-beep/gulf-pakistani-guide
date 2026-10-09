import { absUrl, SITE_NAME, SITE_URL, type Locale } from "@/lib/site";

const GA_PATTERN = /^G-[A-Z0-9]+$/;

export const MARKET_CACHE = {
  "Cache-Control": "s-maxage=10800, stale-while-revalidate=10800",
} as const;

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  /** When false, the Urdu URL is not advertised (untranslated or noindexed twin). */
  urAlternate?: boolean;
  /** e.g. "noindex, follow" for templated pages that must stay out of search. */
  robots?: string;
}): { meta: any[]; links: any[] } {
  const canonicalPath = opts.path;
  const url = absUrl(canonicalPath);
  const enPath = canonicalPath.replace(/^\/ur(?=\/|$)/, "") || "/";
  const urPath = enPath === "/" ? "/ur" : `/ur${enPath}`;
  const image = absUrl("/og.jpg");
  const meta: Array<Record<string, unknown>> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: image },
  ];
  if (opts.robots) meta.push({ name: "robots", content: opts.robots });
  if (url.startsWith("http")) {
    meta.push({ property: "og:url", content: url });
  }
  const links = [
    { rel: "canonical", href: url },
    { rel: "alternate", hrefLang: "en", href: absUrl(enPath) },
    { rel: "alternate", hrefLang: "x-default", href: absUrl(enPath) },
  ];
  if (opts.urAlternate !== false) {
    links.splice(2, 0, { rel: "alternate", hrefLang: "ur", href: absUrl(urPath) });
  }
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

export function siteOrigin() {
  return SITE_URL || "https://apnaaghar.pk";
}

export function gscToken() {
  const token = import.meta.env.VITE_GSC_VERIFICATION ?? "";
  return /^[A-Za-z0-9_-]{10,128}$/.test(token) ? token : "";
}
