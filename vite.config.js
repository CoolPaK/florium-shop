import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Простая конфигурация
export default defineConfig({
  plugins: [react()],
  base: "/florium-shop/",
});
