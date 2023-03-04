import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";

const config: UserConfig = {
  plugins: [sveltekit(), lightningcss()],
};

export default config;
