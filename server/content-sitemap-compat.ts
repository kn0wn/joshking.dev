// Compatibility shim for @nuxtjs/sitemap@7.x with @nuxt/content@3.12+
// queryCollectionWithEvent was renamed to queryCollection in @nuxt/content@3.x
export * from "@nuxt/content/nitro";
export { queryCollection as queryCollectionWithEvent } from "@nuxt/content/nitro";
