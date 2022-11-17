import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(
  {
    plugins: [react()],
    base: "/Quizzical/",
  },
  {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "./index.html"),
          nested: resolve(__dirname, "./Quizz.html"),
        },
      },
    },
  }
);
