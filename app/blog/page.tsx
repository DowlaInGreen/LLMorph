import Link from "next/link"
import { allPosts } from ".contentlayer/generated"

export const metadata = {
  title: "LLM GEO Blog",
  description: "Q&A blog optimized for Generative Engines."
}

export default function BlogIndex() {
  const posts = [...allPosts].sort((a,b)=> a.slug.localeCompare(b.slug))
  return (
    <main className="prose max-w-3xl px-4 py-10">
      <h1>LLM GEO Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={p.slug}>{p.title}</Link> — <small>{p.pillar}</small>
          </li>
        ))}
      </ul>
    </main>
  )
}
