import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/florium-shop/", // Убедитесь, что это соответствует имени репозитория
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
