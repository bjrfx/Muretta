import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
import fs from 'fs';
import { copyFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
    {
      name: 'copy-config-files',
      closeBundle() {
        // Copy routes.json to the dist directory
        const routesPath = path.resolve(__dirname, 'routes.json');
        const destPath = path.resolve(__dirname, 'dist', 'routes.json');
        if (fs.existsSync(routesPath)) {
          copyFileSync(routesPath, destPath);
          console.log('routes.json copied to dist directory');
        }
        
        // Copy staticwebapp.config.json to the dist directory
        const staticConfigPath = path.resolve(__dirname, 'staticwebapp.config.json');
        const staticConfigDestPath = path.resolve(__dirname, 'dist', 'staticwebapp.config.json');
        if (fs.existsSync(staticConfigPath)) {
          copyFileSync(staticConfigPath, staticConfigDestPath);
          console.log('staticwebapp.config.json copied to dist directory');
        }
      }
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
