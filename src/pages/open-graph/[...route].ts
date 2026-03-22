import { OGImageRoute } from "astro-og-canvas";
import { SITE } from "../../lib/site";

/** Build-time OG image — see https://github.com/delucis/astro-og-canvas */
export const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages: {
    site: {
      title: SITE.title,
      description: SITE.description,
      cta: SITE.ogImageCta,
    },
  },
  getImageOptions: (_path, page) => ({
    title: page.title,
    // astro-og-canvas only renders title + description; append CTA for on-image prompt.
    description: `${page.description}\n\n${page.cta}`,
    bgGradient: [
      [0, 48, 143],
      [0, 24, 107],
    ],
    font: {
      title: {
        color: [255, 255, 255],
        size: 56,
        weight: "Bold",
        families: ["Noto Sans"],
      },
      description: {
        color: [220, 225, 235],
        size: 28,
        lineHeight: 1.4,
        weight: "Normal",
        families: ["Noto Sans"],
      },
    },
    fonts: [
      "https://api.fontsource.org/v1/fonts/noto-sans/latin-400-normal.ttf",
      "https://api.fontsource.org/v1/fonts/noto-sans/latin-700-normal.ttf",
    ],
    padding: 72,
  }),
});
