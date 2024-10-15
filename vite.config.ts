import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    write: true,
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
  server: {
    host:true,
    fs: {
      strict: true,
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       workbox: {
//         globPatterns: ["**/*.{ts,tsx,js,css,html,ico,png,svg}"],
//         runtimeCaching: [
//           {
//             urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
//             handler: "CacheFirst",
//             options: {
//               cacheName: "image-cache",
//               expiration: {
//                 maxEntries: 50,
//                 maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
//               },
//             },
//           },
//           {
//             urlPattern: /^https:\/\/fonts\.googleapis\.com/,
//             handler: "CacheFirst",
//             options: {
//               cacheName: "google-fonts",
//               expiration: {
//                 maxEntries: 10,
//                 maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
//               },
//             },
//           },
//           {
//             urlPattern: /^https:\/\/fonts\.gstatic\.com/,
//             handler: "CacheFirst",
//             options: {
//               cacheName: "gstatic-fonts",
//               expiration: {
//                 maxEntries: 10,
//                 maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
//               },
//             },
//           },
//         ],
//         cleanupOutdatedCaches: true,
//       },
//     }),
//   ],
//   server: {
//     host: true,
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         assetFileNames: "[name]-[hash][extname]", // Append hash to asset filenames for cache busting
//       },
//     },
//   },
// });
