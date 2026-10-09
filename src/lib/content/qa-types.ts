export type QaLink = { href: string; label: string };

export type QaItem = {
  q: string;
  a: string;
  sourceName: string;
  sourceUrl: string;
  links?: QaLink[];
};

export type QaGroup = { heading: string; items: QaItem[] };

export type QaPage = {
  title: string;
  description: string;
  lede: string;
  groups: QaGroup[];
};

export const QA_CHECKED = "10 October 2026";
