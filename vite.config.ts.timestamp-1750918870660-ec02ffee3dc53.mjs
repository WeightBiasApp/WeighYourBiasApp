// vite.config.ts
import react from "file:///Users/nikeishaparsot/Desktop/Weight%20bias/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwind from "file:///Users/nikeishaparsot/Desktop/Weight%20bias/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///Users/nikeishaparsot/Desktop/Weight%20bias/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()]
    }
  },
  server: {
    host: true,
    // 👈 This exposes the dev server on your local network (0.0.0.0)
    port: 5173,
    // 👈 Optional: set a fixed port for consistency
    hmr: {
      timeout: 5e3
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmlrZWlzaGFwYXJzb3QvRGVza3RvcC9XZWlnaHQgYmlhc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL25pa2Vpc2hhcGFyc290L0Rlc2t0b3AvV2VpZ2h0IGJpYXMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL25pa2Vpc2hhcGFyc290L0Rlc2t0b3AvV2VpZ2h0JTIwYmlhcy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB0YWlsd2luZCBmcm9tIFwidGFpbHdpbmRjc3NcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHB1YmxpY0RpcjogXCIuL3N0YXRpY1wiLFxuICBiYXNlOiBcIi4vXCIsXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZCgpXSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiB0cnVlLCAvLyBcdUQ4M0RcdURDNDggVGhpcyBleHBvc2VzIHRoZSBkZXYgc2VydmVyIG9uIHlvdXIgbG9jYWwgbmV0d29yayAoMC4wLjAuMClcbiAgICBwb3J0OiA1MTczLCAvLyBcdUQ4M0RcdURDNDggT3B0aW9uYWw6IHNldCBhIGZpeGVkIHBvcnQgZm9yIGNvbnNpc3RlbmN5XG4gICAgaG1yOiB7XG4gICAgICB0aW1lb3V0OiA1MDAwLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1MsT0FBTyxXQUFXO0FBQ2pVLE9BQU8sY0FBYztBQUNyQixTQUFTLG9CQUFvQjtBQUc3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFNBQVMsQ0FBQztBQUFBLElBQ3RCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
