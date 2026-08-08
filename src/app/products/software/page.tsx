import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAvailableSoftwareProducts,
  getComingSoonSoftwareProducts,
  getSoftwareProduct,
  softwareSuite,
} from "@content/software";
import { konnectSymbols } from "@content/symbols";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SoftwareProductCard } from "@/components/SoftwareProductCard";

export const metadata: Metadata = {
  title: "Konnect Software Suite",
  description: softwareSuite.description,
};

export default function SoftwareSuitePage() {
  const available = getAvailableSoftwareProducts();
  const comingSoon = getComingSoonSoftwareProducts();
  const featured =
    getSoftwareProduct("oee") ?? getSoftwareProduct("edge") ?? available[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-silver/50">
        <div className="absolute inset-0 atmosphere circuit-grid opacity-80" />
        <div className="site-wrap relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <Reveal>
              <Image
                src="/software/branding/logo-wordmark.png"
                alt="Konnect"
                width={160}
                height={40}
                className="h-9 w-auto"
              />
              <p className="eyebrow mt-6">Konnect Software Suite</p>
              <h1 className="mt-3 max-w-xl text-4xl sm:text-5xl">{softwareSuite.tagline}</h1>
              <p className="lede mt-4 max-w-xl">{softwareSuite.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products/software/pricing" className="btn btn-primary">
                  View pricing
                </Link>
                <a
                  href="https://github.com/KphungFROMM/KonnectAutomationSuite-Releases/releases"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  All releases
                </a>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative overflow-hidden rounded-xl border border-silver/60 bg-navy shadow-[0_20px_50px_rgba(11,31,58,0.18)]">
                <div className="pointer-events-none absolute inset-0 circuit-grid opacity-20" />
                {featured?.screenshots[0] ? (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={featured.screenshots[0].src}
                      alt={featured.screenshots[0].alt}
                      fill
                      priority
                      className="hero-media object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : null}
                <div className="relative flex items-center justify-between gap-3 border-t border-white/10 bg-navy/90 px-4 py-3">
                  <p className="text-sm font-medium text-white">
                    Featured: {featured?.name ?? "Konnect"}
                  </p>
                  {featured ? (
                    <Link
                      href={`/products/software/${featured.slug}`}
                      className="text-sm font-semibold text-silver hover:text-white"
                    >
                      Details →
                    </Link>
                  ) : null}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section atmosphere">
        <div className="site-wrap">
          <Reveal>
            <p className="eyebrow">Why Konnect</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Built for OT realities</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {softwareSuite.valueProps.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="h-full border-l-2 border-royal/70 pl-4">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <p className="eyebrow">Available now</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Tools ready for public release</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {available.map((product, index) => (
              <Reveal key={product.slug} delay={index * 60}>
                <SoftwareProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {comingSoon.length > 0 ? (
        <section className="section pt-0">
          <div className="site-wrap">
            <Reveal>
              <p className="eyebrow">On the roadmap</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Coming soon</h2>
              <p className="mt-3 max-w-2xl text-muted">
                Edge design and on-prem reporting are in active development. Preview the UIs below
                and contact us if you want early access.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {comingSoon.map((product, index) => (
                <Reveal key={product.slug} delay={index * 60}>
                  <SoftwareProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section atmosphere pt-0">
        <div className="site-wrap">
          <Reveal>
            <article className="overflow-hidden rounded-xl border border-silver/70 bg-white shadow-[0_10px_30px_rgba(11,31,58,0.06)]">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-52 bg-mist lg:min-h-full">
                  <Image
                    src={konnectSymbols.screenshot.src}
                    alt={konnectSymbols.screenshot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="eyebrow">Also from Konnect</p>
                  <h2 className="mt-3 text-3xl">{konnectSymbols.name}</h2>
                  <p className="mt-3 text-muted">{konnectSymbols.tagline}</p>
                  <p className="mt-3 text-sm text-navy/80">{konnectSymbols.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={konnectSymbols.url}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit KonnectSymbols
                    </a>
                    <Link href="/products/symbols" className="btn btn-secondary">
                      Product details
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to license a Full seat?"
        body="Download the trial, copy your Machine ID, and request a license from the pricing page. We fulfill keys offline."
        primaryHref="/products/software/pricing"
        primaryLabel="Go to pricing"
        secondaryHref="/contact"
        secondaryLabel="Ask a question"
      />
    </>
  );
}
