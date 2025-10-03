import "./../styles/globals.css";
import type { Metadata } from "next";
import { Montserrat, Notable } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const notable = Notable({ subsets: ["latin"], weight: "400", variable: "--font-notable" });

export const metadata: Metadata = {
  title: { default: "LLMorph", template: "%s | LLMorph" },
  description: "GEO-first web builds: structured, fast, LLM-visible."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${notable.variable}`}>
      <body className="bg-brand-background text-brand-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
