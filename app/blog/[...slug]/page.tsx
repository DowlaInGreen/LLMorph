import { allPosts, Post } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"

export async function generateStaticParams() {
  return allPosts.map(p => ({ slug: p.slug.replace(/^\/|\/$/g,'').split('/') }))
}

function getPost(slugArr: string[]): Post | undefined {
  const slug = "/" + slugArr.join("/") + "/"
  return allPosts.find(p => p.slug === slug)
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
      <link rel="canonical" href={`https://YOURDOMAIN${post.slug}`} />
    </article>
  )
}

function getSchema(post: Post) {
  const schema = {
    "@context": "https://schema.org",
    "@type": post.schema_type || "FAQPage",
    "headline": post.title,
    "description": post.description,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://YOURDOMAIN${post.slug}` }
  }
  return JSON.stringify(schema)
}
