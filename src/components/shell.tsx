import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { categories, countries, isUrduPath, SITE_NAME, switchPath, urduPath } from "@/lib/site";

const nav = [
  { href: "/rates", en: "Rates", ur: "ریٹس" },
  { href: "/gold-rates", en: "Gold", ur: "سونا" },
  { href: "/tools/salary-converter", en: "Salary", ur: "تنخواہ" },
  { href: "/tools/gratuity-calculator", en: "Gratuity", ur: "گریچویٹی" },
  { href: "/guides", en: "Guides", ur: "رہنما" },
];

export function hrefFor(ur: boolean, path: string) {
  if (!ur) return path;
  return urduPath(path);
}

export function A({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link to={href as never} className={className}>
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const ur = isUrduPath(pathname);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <A href={ur ? "/ur" : "/"} className="flex min-h-11 items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-green text-on-green">
            <span className="font-display text-lg leading-none">G</span>
          </span>
          <span className="font-display text-2xl leading-none text-green">
            Gulf<span className="text-gold-ink">PK</span>
          </span>
        </A>
        <nav className="ms-auto hidden items-center gap-1 lg:flex" aria-label={ur ? "مرکزی" : "Primary"}>
          {nav.map((item) => (
            <A
              key={item.href}
              href={hrefFor(ur, item.href)}
              className="min-h-11 rounded-md px-3 py-2 text-ink hover:bg-gold-soft"
            >
              {ur ? item.ur : item.en}
            </A>
          ))}
          <a
            href={switchPath(pathname)}
            className="ms-1 inline-flex min-h-11 items-center rounded-md border border-green px-3 font-semibold text-green"
            hrefLang={ur ? "en" : "ur"}
          >
            {ur ? "English" : "اردو"}
          </a>
        </nav>
        <button
          type="button"
          className="ms-auto inline-flex h-11 w-11 items-center justify-center rounded-md border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          <span className="sr-only">{open ? (ur ? "بند کریں" : "Close menu") : ur ? "مینو" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-4 py-3 lg:hidden" aria-label={ur ? "موبائل" : "Mobile"}>
          <div className="grid gap-1">
            {nav.map((item) => (
              <A
                key={item.href}
                href={hrefFor(ur, item.href)}
                className="flex min-h-11 items-center rounded-md px-2 text-lg"
              >
                {ur ? item.ur : item.en}
              </A>
            ))}
            <a href={switchPath(pathname)} className="flex min-h-11 items-center rounded-md px-2 font-semibold text-green">
              {ur ? "English" : "اردو"}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const ur = isUrduPath(pathname);
  const legal = [
    { href: "/about", en: "About", ur: "تعارف" },
    { href: "/contact", en: "Contact", ur: "رابطہ" },
    { href: "/editorial", en: "Editorial policy", ur: "ادارتی پالیسی" },
    { href: "/disclaimer", en: "Disclaimer", ur: "دستبرداری" },
    { href: "/privacy", en: "Privacy", ur: "رازداری" },
    { href: "/terms", en: "Terms", ur: "شرائط" },
  ];
  return (
    <footer className="mt-16 border-t border-line bg-green text-on-green">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">
            {SITE_NAME}
          </p>
          <p className="mt-2 text-on-green/90">
            {ur
              ? "خلیج میں رہنے والے پاکستانیوں کے لیے ریٹ، سونا اور عملی رہنما۔ بینک نہیں، حکومت نہیں۔"
              : "Rates, gold and practical guides for Pakistanis in the Gulf. Not a bank. Not a government site."}
          </p>
        </div>
        <div>
          <p className="font-semibold text-gold">{ur ? "ممالک" : "Countries"}</p>
          <ul className="mt-2 grid gap-1">
            {countries.map((country) => (
              <li key={country.slug}>
                <A href={hrefFor(ur, `/${country.slug}`)} className="inline-flex min-h-11 items-center hover:text-gold">
                  {country.short}
                </A>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gold">{ur ? "رہنما" : "Guides"}</p>
          <ul className="mt-2 grid gap-1">
            {categories.map((category) => (
              <li key={category.slug}>
                <a
                  href={`${ur ? "/ur/guides" : "/guides"}?category=${category.slug}`}
                  className="inline-flex min-h-11 items-center hover:text-gold"
                >
                  {ur ? category.ur : category.en}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gold">{ur ? "صفحات" : "The desk"}</p>
          <ul className="mt-2 grid gap-1">
            {legal.map((item) => (
              <li key={item.href}>
                <A href={hrefFor(ur, item.href)} className="inline-flex min-h-11 items-center hover:text-gold">
                  {ur ? item.ur : item.en}
                </A>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-gold/40 px-4 py-4 text-center text-sm text-on-green/80">
        {ur
          ? "ریٹ اشاراتی ہیں۔ لین دین سے پہلے اپنے بینک یا ایکسچینج سے تصدیق کریں۔"
          : "Rates are indicative. Check your bank or exchange before you send money or buy gold."}
      </p>
    </footer>
  );
}

export function Crumb({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <A href={item.href} className="underline decoration-line underline-offset-4">
                {item.label}
              </A>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Page({
  children,
  kicker,
  title,
  lede,
}: {
  children: React.ReactNode;
  kicker?: string;
  title: string;
  lede?: string;
}) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <header className="max-w-3xl">
        {kicker ? <p className="text-sm font-semibold tracking-wide text-gold-ink uppercase">{kicker}</p> : null}
        <h1 className="mt-2 font-display text-4xl text-green sm:text-5xl">{title}</h1>
        {lede ? <p className="mt-4 text-lg text-muted">{lede}</p> : null}
      </header>
      <div className="mt-8">{children}</div>
    </main>
  );
}
