export const SITE = {
  url: "https://joshking.dev",
  name: "Josh King",
  /**
   * `<title>`, `og:title`, Twitter title — ~50–60 chars works well in link previews.
   */
  title:
    "Josh King — Technical architect for ambitious product teams",
  /**
   * Meta description, `og:description`, Twitter — ~110–160 chars for rich previews.
   */
  description:
    "London-based technical architect—spatial tooling, multi-agent platforms, design systems, product engineering. Explore projects at joshking.dev.",
  /** Shown on the generated OG image (astro-og-canvas has no separate CTA layer). */
  ogImageCta: "Visit joshking.dev →",
  linkedin: "https://www.linkedin.com/in/josh-king-connect",
  github: "https://github.com/kn0wn",
  fathomSiteId: "NXIDHQVO",
  /** Generated at build by `astro-og-canvas` (`src/pages/open-graph/[...route].ts`). */
  ogImagePath: "/open-graph/site.png",
  /** Canvas size from `astro-og-canvas` (see `src/pages/open-graph/[...route].ts`). */
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    "Josh King — Technical architect for ambitious product teams (joshking.dev)",
} as const;
