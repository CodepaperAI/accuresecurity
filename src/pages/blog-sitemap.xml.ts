export const prerender = false;

import type { APIRoute } from "astro";
import { listBlogs } from "@/lib/upliftai";
import { site } from "@/data/site";

const escapeXml = (input: string) =>
  input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const GET: APIRoute = async () => {
  const urls: Array<{ loc: string; lastmod?: string }> = [
    { loc: `${site.url}/blog/` },
  ];

  try {
    let page = 1;
    while (page <= 10) {
      const { blogs, pagination } = await listBlogs({ page, limit: 100, status: "PUBLISH" });
      for (const blog of blogs) {
        urls.push({
          loc: `${site.url}/blog/${blog.slug}/`,
          lastmod: blog.updatedAt ?? blog.publishDate ?? blog.createdAt,
        });
      }
      if (!pagination || page >= pagination.totalPages) break;
      page += 1;
    }
  } catch (err) {
    console.error("[blog-sitemap] failed to list blogs", err);
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((entry) => {
    const lastmod = entry.lastmod
      ? `\n    <lastmod>${escapeXml(new Date(entry.lastmod).toISOString())}</lastmod>`
      : "";
    return `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>${lastmod}\n  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
};
