import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAvailableSoftwareProducts,
  softwareProducts,
  softwareSuite,
} from "@content/software";
import { konnectSymbols } from "@content/symbols";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: `${softwareSuite.name}, ${konnectSymbols.name}, and industrial software products from ${site.name}.`,
};

export default function ProductsPage() {
  const previewProducts = getAvailableSoftwareProducts().slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Software built for industrial controls teams"
        lede="Beyond project services, Controls D Automation develops the Konnect line—HMI symbols, Windows commissioning tools, and on-prem plant software your facility can download, trial, and keep."
      />

      <section className="section pt-0">
        <div className="site-wrap space-y-8">
          <Reveal>
            <article className="overflow-hidden rounded-xl border border-silver/70 bg-white shadow-[0_14px_40px_rgba(11,31,58,0.06)]">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/software/branding/logo-mark.png"
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                    <p className="eyebrow mt-0">Featured product</p>
                  </div>
                  <h2 className="mt-4 text-3xl sm:text-4xl">{konnectSymbols.name}</h2>
                  <p className="mt-4 text-muted">{konnectSymbols.tagline}</p>
                  <p className="mt-3 text-sm text-navy/80">{konnectSymbols.summary}</p>
                  <ul className="mt-6 space-y-2 text-sm text-navy">
                    {konnectSymbols.highlights.slice(0, 3).map((item) => (
                      <li key={item} className="border-l-2 border-royal/50 pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
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
                <div className="relative min-h-64 bg-mist lg:min-h-full">
                  <Image
                    src={konnectSymbols.screenshot.src}
                    alt={konnectSymbols.screenshot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="overflow-hidden rounded-xl border border-silver/70 bg-white shadow-[0_14px_40px_rgba(11,31,58,0.06)]">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/software/branding/logo.png"
                      alt="Konnect"
                      width={160}
                      height={40}
                      className="h-9 w-auto"
                    />
                  </div>
                  <p className="eyebrow mt-6">Desktop & on-prem suite</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl">{softwareSuite.name}</h2>
                  <p className="mt-4 text-muted">{softwareSuite.tagline}</p>
                  <p className="mt-3 text-sm text-navy/80">{softwareSuite.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-navy">
                    {softwareProducts.map((product) => (
                      <li key={product.slug} className="border-l-2 border-royal/50 pl-3">
                        <span className="font-semibold">{product.name}</span>
                        {product.comingSoon ? (
                          <span className="ml-2 text-xs font-semibold uppercase tracking-[0.1em] text-royal">
                            Coming soon
                          </span>
                        ) : null}
                        <span className="text-muted"> — {product.tagline}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/products/software" className="btn btn-primary">
                      Explore software
                    </Link>
                    <Link href="/products/software/pricing" className="btn btn-secondary">
                      View pricing
                    </Link>
                  </div>
                </div>
                <div className="relative flex min-h-72 flex-col justify-between overflow-hidden bg-gradient-to-br from-navy via-[#14325c] to-royal px-8 py-10 text-white lg:min-h-full">
                  <div className="pointer-events-none absolute inset-0 circuit-grid opacity-25" />
                  <div className="relative">
                    <Image
                      src="/software/branding/logo-mark.png"
                      alt=""
                      width={88}
                      height={88}
                      className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                    />
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-silver">
                      Konnect Software Suite
                    </p>
                    <p className="mt-3 max-w-xs text-2xl font-semibold leading-snug text-white sm:text-3xl">
                      Commissioning tools and on-prem plant software
                    </p>
                  </div>
                  <ul className="relative mt-10 grid grid-cols-2 gap-2 text-sm text-silver">
                    {softwareProducts.map((product) => (
                      <li
                        key={product.slug}
                        className="rounded-md border border-white/15 bg-white/5 px-3 py-2 font-medium text-white"
                      >
                        {product.shortName}
                        {product.comingSoon ? (
                          <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-silver/80">
                            Coming soon
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">In the suite</p>
              <h2 className="mt-3 text-2xl sm:text-3xl">Product UI at a glance</h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {previewProducts.map((product, index) => {
                const shot = product.screenshots[0];
                return (
                  <Reveal key={product.slug} delay={index * 50}>
                    <Link
                      href={`/products/software/${product.slug}`}
                      className="group block overflow-hidden rounded-xl border border-silver/70 bg-white shadow-sm transition hover:border-royal/40"
                    >
                      <div className="relative aspect-[16/10] bg-mist">
                        {shot ? (
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                        ) : null}
                      </div>
                      <div className="px-3 py-3">
                        <p className="text-sm font-semibold text-navy">{product.shortName}</p>
                        <p className="mt-0.5 line-clamp-1 text-xs text-muted">{product.tagline}</p>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need services and software together?"
        body="We can commission your lines and equip your team with Konnect tools—tell us what you are building."
        primaryHref="/contact"
        primaryLabel="Request a consultation"
        secondaryHref="/products/software"
        secondaryLabel="Browse Konnect software"
      />
    </>
  );
}
