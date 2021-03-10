import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "../../");

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.join(PROJECT_ROOT, "node_modules"),
    },
  },
  server: {
    port: 8080,
  },
});
