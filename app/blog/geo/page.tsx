import Link from "next/link"
import { allPosts } from ".contentlayer/generated"

export const metadata = { title: "GEO – Pillar Index" }
export const revalidate = 43200

export default function GeoPillar(){
  const posts = allPosts
    .filter(p=>p.slug.startsWith("/blog/geo/"))
    .sort((a,b)=>a.slug.localeCompare(b.slug))
  return (
    <main className="prose max-w-3xl px-4 py-10">
      <h1>GEO – Pillar Index</h1>
      <ul>{posts.map(p=> <li key={p.slug}><Link href={p.slug}>{p.title}</Link></li>)}</ul>
    </main>
  )
}
