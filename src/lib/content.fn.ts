import { createServerFn } from "@tanstack/react-start";
import { guideBySlug } from "@/lib/content/catalog";
import type { ArticleBody } from "@/lib/content/types";
import type { Locale } from "@/lib/site";

export type GuidePayload = {
  slug: string;
  locale: Locale;
  translated: boolean;
  title: string;
  description: string;
  body: ArticleBody;
};

export const getGuide = createServerFn({ method: "GET" })
  .validator((input: unknown) => {
    const data = input as { slug?: string; locale?: string };
    const slug = String(data?.slug ?? "");
    const locale: Locale = data?.locale === "ur" ? "ur" : "en";
    if (!/^[a-z0-9-]{3,80}$/.test(slug)) throw new Error("Invalid guide");
    return { slug, locale };
  })
  .handler(async ({ data }): Promise<GuidePayload | null> => {
    const meta = guideBySlug(data.slug);
    if (!meta) return null;
    const [{ bodiesA }, { bodiesB }, { bodiesC }, { bodiesD }, { urduArticles }] = await Promise.all([
      import("@/lib/content/bodies-a"),
      import("@/lib/content/bodies-b"),
      import("@/lib/content/bodies-c"),
      import("@/lib/content/bodies-d"),
      import("@/lib/content/articles-ur"),
    ]);
    const english = bodiesA[data.slug] ?? bodiesB[data.slug] ?? bodiesC[data.slug] ?? bodiesD[data.slug];
    if (!english) return null;
    if (data.locale === "ur" && urduArticles[data.slug]) {
      return {
        slug: data.slug,
        locale: "ur",
        translated: true,
        title: meta.urTitle ?? meta.title,
        description: meta.urDescription ?? meta.description,
        body: urduArticles[data.slug],
      };
    }
    return {
      slug: data.slug,
      locale: data.locale,
      translated: data.locale !== "ur",
      title: meta.title,
      description: meta.description,
      body: english,
    };
  });
