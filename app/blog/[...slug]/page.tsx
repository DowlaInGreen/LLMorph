import { allPosts, Post } from ".contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"

// Generate params using ONLY the part after "/blog/"
export async function generateStaticParams() {
  return allPosts.map(p => {
    const afterBlog = p.slug.replace(/^\/blog\//, "")      // drop leading "/blog/"
    const noTrailing = afterBlog.replace(/\/$/, "")        // drop trailing "/"
    return { slug: noTrailing.split("/") }                 // ["geo","is-geo-replacing-seo"]
  })
}

// Match the request by re-prefixing "/blog/"
function getPost(slugArr: string[]): Post | undefined {
  const reqFull = "/blog/" + slugArr.join("/")             // "/blog/geo/is-geo-replacing-seo"
  const norm = (s: string) => s.replace(/\/$/, "")         // strip trailing "/"
  return allPosts.find(p => norm(p.slug || "") === norm(reqFull))
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const post = getPost(params.slug)
  if (!post) return notFound()
  const MDX = useMDXComponent(post.body.code)
  return (
    <article className="prose max-w-3xl px-4 py-10">
      <h1>{post.title}</h1>
      <MDX />
    </article>
  )
}
