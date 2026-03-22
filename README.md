# joshking.dev

Personal site built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and a small [Svelte](https://svelte.dev) island (live clock).

Requires **[Bun](https://bun.sh)** and **Node 24.x** (see `engines` in `package.json` and `.node-version`).

## Setup

```bash
bun install
```

## Development

```bash
bun dev
```

## Production

```bash
bun run build
bun run preview
```

## Tooling

| Tool                                                                               | Role                                                                                                               |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)                              | `bun run lint` / `lint:fix` — fast JS/TS lint (`.oxlintrc.json`)                                                   |
| [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)                            | `bun run fmt` / `fmt:check` — formatter (`.oxfmtrc.json`)                                                          |
| [unplugin-fonts](https://github.com/cssninjaStudio/unplugin-fonts)                 | Geist via **Fontsource** + preload `<link>`s (`unfonts.css`, `<Unfont />` in `Base.astro`)                         |
| [astro-icon](https://github.com/natemoo-re/astro-icon)                             | `Icon` + Iconify; only **`simple-icons`** `github` & `linkedin` are bundled (`astro.config.mjs` `include`)         |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | `sitemap-index.xml` at build; **`<link rel="sitemap">`** in `Base.astro` and **`Sitemap:`** in `public/robots.txt` |

## Deployment

Deploys to [Vercel](https://vercel.com) via `@astrojs/vercel` (static output). `vercel.json` uses **Bun** for install/build; **`bun.lock`** is the lockfile. There is **no** `packageManager` field: Corepack only supports npm/Yarn/pnpm, so `npm@…` conflicts with Bun detection, and `bun@…` can break Corepack. If builds log Corepack noise, set **`ENABLE_EXPERIMENTAL_COREPACK=0`** in the Vercel project’s Environment Variables.

### Open Graph image (generated)

Social **`og:image`** / **`twitter:image`** use **`/open-graph/site.png`**, built from [`astro-og-canvas`](https://github.com/delucis/astro-og-canvas) plus a **CTA pill** composited with **`sharp`** (`src/lib/og-site-image.ts`, route in `src/pages/open-graph/[...route].ts`). Copy lives in `SITE` (`ogImageBody`, `ogImageCta`). The build must reach **Fontsource** for Noto Sans TTFs.

This is separate from **astro-embed Link Preview**, which only reads _external_ URLs for optional work cards.

### Link previews (optional)

Notable work entries in `src/lib/notable-works.ts` can include **`previewUrl`**. That renders [`@astro-community/astro-embed-link-preview`](https://astro-embed.netlify.app/components/link-preview/) (Open Graph at **build** time; Vercel needs network access during `astro build`).
