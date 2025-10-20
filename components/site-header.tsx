import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/cases", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
]

export default function SiteHeader() {
  return (
    <header style={{padding:"12px 16px", borderBottom:"1px solid #e5e7eb"}}>
      <nav style={{maxWidth:"960px", margin:"0 auto", display:"flex", gap:"12px", fontSize:"14px"}}>
        {links.map(l => (<Link key={l.href} href={l.href}>{l.label}</Link>))}
      </nav>
    </header>
  )
}
