import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter, SiteHeader } from "@/components/shell";
import { CONTACT_EMAIL, isUrduPath, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import { gaId, gscToken, ld } from "@/lib/seo";
import appCss from "../styles.css?url";

const FONT =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,650&family=Noto+Nastaliq+Urdu:wght@400;700&family=Source+Sans+3:wght@400;600;700&display=swap";

export const Route = createRootRoute({
  head: () => {
    const ga = gaId();
    const gsc = gscToken();
    const meta: Array<Record<string, unknown>> = [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_NAME },
      { name: "description", content: SITE_TAGLINE },
      { name: "theme-color", content: "#0f3d2e" },
    ];
    if (gsc) meta.push({ name: "google-site-verification", content: gsc });
    meta.push(
      ld({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL || "https://apnaaghar.pk",
        logo: `${SITE_URL || "https://apnaaghar.pk"}/favicon.svg`,
        email: CONTACT_EMAIL,
        description: SITE_TAGLINE,
      }),
      ld({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL || "https://apnaaghar.pk",
        description: "Currency, gold and guides for Pakistanis in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.",
      }),
    );
    return {
      meta,
      links: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: FONT },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      ],
      scripts: ga
        ? [
            { src: `https://www.googletagmanager.com/gtag/js?id=${ga}`, async: true },
            {
              children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`,
            },
          ]
        : [],
    };
  },
  shellComponent: RootShell,
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const ur = isUrduPath(pathname);
  return (
    <html lang={ur ? "ur" : "en"} dir={ur ? "rtl" : "ltr"} className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>{children}</AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const ur = isUrduPath(pathname);
  return (
    <div lang={ur ? "ur" : "en"} dir={ur ? "rtl" : "ltr"} className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        {ur ? "مواد پر جائیں" : "Skip to content"}
      </a>
      <SiteHeader />
      <div id="content" className="flex-1">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}

function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl text-green">Page not found</h1>
      <p className="mt-3 text-muted">That page is not on the desk.</p>
      <a href="/" className="mt-6 inline-flex min-h-11 items-center font-semibold text-green underline">
        Back home
      </a>
    </main>
  );
}
