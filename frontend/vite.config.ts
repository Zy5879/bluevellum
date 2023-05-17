/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
  server: {
    proxy: {
      "/products": {
        // target: "https://blue-vellum.onrender.com",
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
