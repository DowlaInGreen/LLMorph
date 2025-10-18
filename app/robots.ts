export default function robots() {
  const base = process.env.NEXT_PUBLIC_CANONICAL ?? "https://ll-morph.vercel.app"
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base
  }
}
