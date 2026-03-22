// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  hooks: {
    "nitro:config"(nitroConfig) {
      // @nuxtjs/sitemap@7.x imports queryCollectionWithEvent which was renamed
      // to queryCollection in @nuxt/content@3.12+. Override the alias it sets
      // so our compat shim fills the gap without touching node_modules.
      if (nitroConfig.alias?.["#sitemap/content-v3-nitro-path"]) {
        nitroConfig.alias["#sitemap/content-v3-nitro-path"] = fileURLToPath(
          new URL("./server/content-sitemap-compat", import.meta.url)
        );
      }
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxt/image",
    "nuxt-fathom",
    "@nuxtjs/seo",
  ],
  fonts: {
    families: [
      { name: "Geist", provider: "google", weights: [400, 500, 600, 700] },
      {
        name: "Geist Mono",
        provider: "google",
        weights: [400, 500, 600, 700],
      },
    ],
  },
  components: {
    dirs: ["~/components", "~/components/content"],
  },
  content: {
    experimental: {
      nativeSqlite: true,
    },
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
    },
  },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
  },
  site: {
    url: "https://joshking.dev",
    name: "Josh King",
    description: "Partnering with founders to create products of the future.",
    defaultLocale: "en",
  },
  sitemap: {
    urls: ["/ambient-computing", "predictions-2025", "raycast-train-times"],
  },
  fathom: {
    siteId: "NXIDHQVO",
  },
  runtimeConfig: {
    public: {
      linkedin: "https://www.linkedin.com/in/josh-king-connect",
      github: "https://github.com/kn0wn",
    },
  },
});
