import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue(), WindiCSS()],
};
