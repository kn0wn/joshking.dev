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
  components: true,
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
  },
  site: {
    url: "https://joshking.dev",
    name: "Josh King",
  },
  sitemap: {
    strictNuxtContentPaths: true,
    urls: ["/ambient-computing"],
  },
  fathom: {
    siteId: "NXIDHQVO",
  },
});
