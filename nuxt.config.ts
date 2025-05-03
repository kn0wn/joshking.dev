// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxt/image",
    "nuxt-fathom",
    "@nuxtjs/seo",
  ],
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
      x: "https://x.com/josh_fyi",
      linkedin: "https://www.linkedin.com/in/josh-king-connect",
      github: "https://github.com/kn0wn",
    },
  },
});
