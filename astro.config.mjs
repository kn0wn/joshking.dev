import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import unfonts from "unplugin-fonts/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://joshking.dev",
  output: "static",
  adapter: vercel(),
  integrations: [
    unfonts({
      fontsource: {
        families: [
          { name: "Geist Sans", weights: [400, 500, 600, 700], subset: "latin" },
          { name: "Geist Mono", weights: [400, 500, 600, 700], subset: "latin" },
        ],
      },
    }),
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown({
      config: {
        debug: false,
      },
    }),
    icon({
      include: {
        "simple-icons": ["github", "linkedin"],
      },
    }),
    sitemap({
      filter: (page) => !page.includes("/open-graph/"),
    }),
  ],
});
