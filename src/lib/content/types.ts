import type { CategorySlug } from "@/lib/site";

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; id: string; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "note"; text: string };

export type Faq = { q: string; a: string };
export type Source = { label: string; href: string };

export type ArticleBody = {
  blocks: Block[];
  faqs: Faq[];
  sources: Source[];
};

export type GuideMeta = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: CategorySlug;
  updated: string;
  countries: string[];
  related: [string, string, string];
  toolHref: string;
  toolLabel: string;
  urTitle?: string;
  urDescription?: string;
  featured?: boolean;
};
