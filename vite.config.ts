import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Avidity POS",
        short_name: "APOS",
        description: "Avidity Point of Sales",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "desktopss1.png",
            sizes: "1924x1090",
            type: "image/png",
            form_factor: "wide",
            label: "Wonder Widgets",
          },
          {
            src: "mobiless1.png",
            sizes: "752x1336",
            type: "image/png",
            form_factor: "narrow",
            label: "Wonder Widgets",
          },
        ],
      },
    }),
  ],
});
