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

Deploys to [Vercel](https://vercel.com) via `@astrojs/vercel` (static output). `vercel.json` uses **Bun** for install/build. `package.json` declares **`packageManager`: `npm@…`** so Vercel’s Corepack step can run (Corepack does not support Bun; using `bun@…` here breaks the build).
