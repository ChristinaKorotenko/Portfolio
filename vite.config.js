import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: served from https://<user>.github.io/<repo>/
// Assets must be prefixed with the repo name or the main JS/CSS 404 and the app stays blank.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/Portfolio/" : "/",
  build: {
    // GitHub Pages (branch deploy) only publishes / or /docs — not /dist
    outDir: "docs",
    emptyOutDir: true
  },
  server: {
    port: 5173,
    strictPort: true
  }
}));

