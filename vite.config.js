import path from "path";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [vue(), WindiCSS(), Pages()],
};
