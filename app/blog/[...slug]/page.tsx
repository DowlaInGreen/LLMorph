import { allPosts, Post } from ".contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { Metadata } from "next"

// params like ["geo","is-geo-replacing-seo"]
export async function generateStaticParams() {
  return allPosts.map(p => {
    const afterBlog = p.slug.replace(/^\/blog\//, "")
    const noTrailing = afterBlog.replace(/\/$/, "")
    return { slug: noTrailing.split("/") }
  })
}

function getPost(slugArr: string[]): Post | undefined {
  const reqFull = "/blog/" + slugArr.join("/")
  const norm = (s: string) => s.replace(/\/$/, "")
  return allPosts.find(p => norm(p.slug || "") === norm(reqFull))
}

export const revalidate = 43200 // 12h

export async function generateMetadata(
  { params }: { params: { slug: string[] } }
): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  const base = process.env.NEXT_PUBLIC_CANONICAL ?? "https://ll-morph.vercel.app"
  const url = `${base}${post.slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: { type: "article", title: post.title, description: post.description, url }
  }
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const post = getPost(params.slug)
  if (!post) return notFound()
  const MDX = useMDXComponent(post.body.code)
  return (
    <article className="prose max-w-3xl px-4 py-10">
      <h1>{post.title}</h1>
      <MDX />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getSchema(post) }}
      />
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_CANONICAL ?? "https://ll-morph.vercel.app"}${post.slug}`}
      />
    </article>
  )
}

function getSchema(post: Post) {
  const base = process.env.NEXT_PUBLIC_CANONICAL ?? "https://ll-morph.vercel.app"
  const schema = {
    "@context": "https://schema.org",
    "@type": post.schema_type || "FAQPage",
    "headline": post.title,
    "description": post.description,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${base}${post.slug}` }
  }
  return JSON.stringify(schema)
}
