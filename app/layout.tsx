import "./globals.css"
import SiteHeader from "../components/site-header"

export const metadata = {
  title: "LLMorph — LLM Visibility Service",
  description: "GEO-first web builds: structured, fast, LLM-visible."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{fontFamily:"system-ui,-apple-system,Segoe UI,Roboto,Inter,sans-serif", color:"#0a0a0a", background:"#ffffff"}}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
