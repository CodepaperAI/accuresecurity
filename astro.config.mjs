import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://accuresecurity.ca",
  output: "static",
  adapter: vercel(),
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
