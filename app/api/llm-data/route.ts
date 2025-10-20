import { NextResponse } from "next/server"
import { allPosts } from "contentlayer/generated"

export const dynamic = "force-dynamic"
export const revalidate = 0
export const runtime = "nodejs"

export async function GET() {
  const base = "https://ll-morph.vercel.app"

  const schema_index = allPosts.map(p => ({
    title: p.title,
    slug: p.slug,
    description: p.description ?? "",
    date: p.date,
    pillar: p.pillar ?? "",
    schema_type: p.schema_type ?? "",
    url: `${base}${p.slug}`,
  }))

  const entities = Array.from(new Set(allPosts.flatMap(p => (p.pillar ? [p.pillar] : []))))

  const relations = allPosts.map(p => ({
    from: `${base}${p.slug}`,
    to: `${base}/#org`,
    type: "publishedBy",
  }))

  const faqs = allPosts
    .filter(p => (p.schema_type || "").toLowerCase().includes("faq"))
    .map(p => ({ url: `${base}${p.slug}`, title: p.title }))

  return NextResponse.json(
    { schema_index, entities, relations, faqs },
    { headers: { "Cache-Control": "no-store" } }
  )
}
