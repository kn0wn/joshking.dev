import type { APIRoute } from "astro";
import { generateOgSitePng } from "../../lib/og-site-image";

/** Build-time OG image: canvas + CTA pill — see `src/lib/og-site-image.ts` */
export function getStaticPaths() {
  return [{ params: { route: "site.png" } }];
}

export const GET: APIRoute = async () => {
  const buffer = await generateOgSitePng();
  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
