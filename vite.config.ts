/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react({}), tailwindcss(), tsconfigPaths()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "UI"),
    },
  },
  server:{
    open: true,
    watch: {
      usePolling: true,
    }, 
    host: true,
    // proxy:{
    //   '/api': {
    //     target:'https://test.sarphat.com/',
    //     changeOrigin: true,
    //     secure: false,
    //     // rewrite: (path) => path.replace(/^\/api/, '/api'),
    //   },
    //   '/ws': {
    //     target:'ws://test.sarphat.com/',
    //     // changeOrigin: true,
    //     // secure: false,
    //     // rewrite: (path) => path.replace(/^\/api/, '/api'),
    //   },
    
    // }
    

  }
});
