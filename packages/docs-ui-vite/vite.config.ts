import { defineConfig } from "vite";
import vueJSX from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
export default defineConfig({
  plugins: [vueJSX(), Unocss()],
});
