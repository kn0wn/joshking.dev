import adapter from "@sveltejs/adapter-netlify";
import { sveltePreprocess } from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    postcss: true,
  }),

  kit: {
    adapter: adapter({
      edge: true,
      split: false,
    }),
  },
};
export default config;

