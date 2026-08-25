import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.accuresecurity.com",
  output: "static",
  adapter: vercel(),
  security: {
    checkOrigin: false,
  },
  devToolbar: {
    enabled: false,
  },
  redirects: {
    "/service-areas/": {
      status: 301,
      destination: "/locations/",
    },
  },
  integrations: [
    sitemap({
      customPages: ["https://www.accuresecurity.com/blog/"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
