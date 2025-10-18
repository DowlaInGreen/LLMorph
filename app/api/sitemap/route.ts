import { allPosts } from "contentlayer/generated"
import { NextResponse } from "next/server"

export async function GET() {
  const base = process.env.NEXT_PUBLIC_CANONICAL ?? "https://ll-morph.vercel.app"
  const now = new Date().toISOString()

  const urls = allPosts.map(p => `
    <url>
      <loc>${base}${p.slug}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`).join("")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${base}/blog</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>
    ${urls}
  </urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: { "Content-Type": "application/xml" }
  })
}
