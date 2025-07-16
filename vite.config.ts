import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  server: {
    host: true, // 👈 This exposes the dev server on your local network (0.0.0.0)
    port: 5173, // 👈 Optional: set a fixed port for consistency
    hmr: {
      timeout: 5000,
    },
  },
});
