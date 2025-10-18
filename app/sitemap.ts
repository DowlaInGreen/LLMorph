import { allPosts } from ".contentlayer/generated"

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_CANONICAL ?? "https://ll-morph.vercel.app"
  const now = new Date().toISOString()
  const posts = allPosts.map(p => ({
    url: `${base}${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }))
  return [
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    ...posts
  ]
}
