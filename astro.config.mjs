import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://joshking.dev",
  output: "static",
  adapter: vercel(),
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
});
