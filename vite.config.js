import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    server: {
      //   proxy: {
      //     "/api": {
      //       target: "http://localhost:5000",
      //       changeOrigin: true,
      //       secure: false,
      //     },
      //   },
      port: 3000,
    },
    build: {
      outDir: "dist",
    },

    plugins: [react()],
  };
});
