import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { konnectSymbols } from "@content/symbols";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: konnectSymbols.name,
  description: konnectSymbols.summary,
};

export default function KonnectSymbolsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-silver/50">
        <div className="absolute inset-0 atmosphere circuit-grid opacity-80" />
        <div className="site-wrap relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <Reveal>
              <Link
                href="/products"
                className="text-sm font-semibold text-royal hover:underline"
              >
                ← Products
              </Link>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Image
                  src="/software/branding/logo-mark.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <p className="eyebrow mt-0">Live product · Browser catalog</p>
              </div>
              <h1 className="mt-3 max-w-xl text-4xl sm:text-5xl">{konnectSymbols.name}</h1>
              <p className="mt-3 text-lg font-medium text-navy">{konnectSymbols.tagline}</p>
              <p className="lede mt-4 max-w-xl">{konnectSymbols.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={konnectSymbols.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit KonnectSymbols
                </a>
                <a
                  href={konnectSymbols.catalogUrl}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Browse catalog
                </a>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative overflow-hidden rounded-xl border border-silver/60 bg-navy shadow-[0_20px_50px_rgba(11,31,58,0.18)]">
                <div className="pointer-events-none absolute inset-0 circuit-grid opacity-20" />
                <div className="relative aspect-[16/10]">
                  <Image
                    src={konnectSymbols.screenshot.src}
                    alt={konnectSymbols.screenshot.alt}
                    fill
                    priority
                    className="hero-media object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-10">
            <Reveal>
              <article>
                <h2 className="text-2xl">What you get</h2>
                <ul className="mt-5 space-y-3">
                  {konnectSymbols.highlights.map((item) => (
                    <li key={item} className="border-l-2 border-royal/50 pl-4 text-navy">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={60}>
              <article>
                <h2 className="text-2xl">Typical plant jobs</h2>
                <ul className="mt-5 space-y-3">
                  {konnectSymbols.plantJobs.map((job) => (
                    <li key={job} className="border-l-2 border-steel/70 pl-4 text-muted">
                      {job}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article>
                <h2 className="text-2xl">From Controls D Automation</h2>
                <p className="mt-3 text-muted">{konnectSymbols.description}</p>
                <p className="mt-3 text-sm text-muted">
                  Pair it with Konnect commissioning tools and on-prem OEE when your project needs
                  more than panel artwork.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <aside className="metallic-panel h-fit space-y-5 rounded-xl p-6 shadow-[0_10px_30px_rgba(11,31,58,0.06)] lg:sticky lg:top-24">
              <div>
                <h2 className="text-xl">Open the product</h2>
                <p className="mt-3 text-sm text-muted">
                  Guests can browse the full Modern SCADA catalog and open the free builder with no
                  credit card.
                </p>
              </div>
              <a
                href={konnectSymbols.url}
                className="btn btn-primary w-full"
                target="_blank"
                rel="noreferrer"
              >
                Visit site
              </a>
              <a
                href={konnectSymbols.catalogUrl}
                className="btn btn-secondary w-full"
                target="_blank"
                rel="noreferrer"
              >
                Browse catalog
              </a>
              <a
                href={konnectSymbols.builderUrl}
                className="inline-flex w-full justify-center text-sm font-semibold text-royal hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Open free builder →
              </a>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Need HMI standards and commissioning help?"
        body="Controls D Automation builds PLC, HMI, and SCADA systems—and ships Konnect tools your team can keep using after handover."
        primaryHref="/contact"
        primaryLabel="Request a consultation"
        secondaryHref="/products/software"
        secondaryLabel="Browse Konnect software"
      />
    </>
  );
}
