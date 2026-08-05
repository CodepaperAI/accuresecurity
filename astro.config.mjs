import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://accuresecurity.ca",
  output: "static",
  adapter: vercel(),
  security: {
    checkOrigin: false,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      customPages: ["https://accuresecurity.ca/blog/"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
