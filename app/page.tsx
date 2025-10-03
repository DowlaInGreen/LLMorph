export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-8">
        <div className="inline-block rounded-xl bg-brand-accent2/15 px-3 py-1 text-sm text-brand-accent2">
          LLM GEO • JSON-LD • Entity Linking
        </div>
        <h1 className="mt-4 font-heading text-5xl tracking-tight text-brand-accent2">LLMorph</h1>
        <h2 className="mt-2 font-heading text-2xl text-brand-accent1">
          Generative Engine Optimization, implemented in code
        </h2>
        <p className="mt-3 max-w-2xl text-base/7 text-white/80">
          Structured, disambiguated, fast, accessible. We build pages LLMs can parse and trust.
        </p>
      </header>
      <section className="grid gap-6">
        <div className="rounded-xl border border-white/10 p-4">
          <div className="text-sm text-white/60">Core Web Vitals</div>
          <div className="text-2xl font-heading text-brand-accent1">≥ 90</div>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <div className="text-sm text-white/60">Accessibility</div>
          <div className="text-2xl font-heading text-brand-accent1">WCAG 2.2 AA</div>
        </div>
      </section>
    </main>
  );
}
