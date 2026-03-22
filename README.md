# joshking.dev

Personal site built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and a small [Svelte](https://svelte.dev) island (live clock).

Requires **[Bun](https://bun.sh)** and **Node 24+** (see `engines` in `package.json`).

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

Deploys to [Vercel](https://vercel.com) via `@astrojs/vercel` (static output). Install/build on Vercel use Bun (`vercel.json`).
