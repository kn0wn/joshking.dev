import { generateOpenGraphImage } from "astro-og-canvas";
import sharp from "sharp";
import { SITE } from "./site";

/** Escape text for SVG `<text>` content. */
function escapeSvgText(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * OG image: astro-og-canvas base + composited CTA “pill” (clear action, not body copy).
 * Surfaces: rounded rect, soft shadow, light stroke — see make-interfaces-feel-better skill.
 */
export async function generateOgSitePng(): Promise<Buffer> {
  const base = await generateOpenGraphImage({
    title: SITE.title,
    description: SITE.ogImageBody,
    dir: "ltr",
    bgGradient: [
      [0, 48, 143],
      [0, 24, 107],
    ],
    border: {
      color: [255, 255, 255],
      width: 5,
      side: "inline-start",
    },
    font: {
      title: {
        color: [255, 255, 255],
        size: 56,
        lineHeight: 1,
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
    format: "PNG",
  });

  const cta = escapeSvgText(SITE.ogImageCta);
  const pillW = 452;
  const pillH = 56;
  const pillRx = 14;
  const inset = 72;
  const top = 630 - inset - pillH;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="ctaPillShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="2" stdDeviation="5" flood-color="#000000" flood-opacity="0.33"/>
    </filter>
  </defs>
  <g transform="translate(${inset}, ${top})">
    <rect
      x="0"
      y="0"
      width="${pillW}"
      height="${pillH}"
      rx="${pillRx}"
      ry="${pillRx}"
      fill="rgba(255,255,255,0.14)"
      stroke="rgba(255,255,255,0.34)"
      stroke-width="1"
      filter="url(#ctaPillShadow)"
    />
    <text
      x="24"
      y="36"
      font-family="system-ui, -apple-system, 'Segoe UI', sans-serif"
      font-size="22"
      font-weight="600"
      fill="#ffffff"
      letter-spacing="0.02em"
    >${cta}</text>
  </g>
</svg>`;

  return sharp(base)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .png()
    .toBuffer();
}
