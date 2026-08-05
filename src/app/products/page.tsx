import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { softwareProducts, softwareSuite } from "@content/software";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: `${softwareSuite.name} and industrial software products from ${site.name}.`,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Software built for industrial controls teams"
        lede="Beyond project services, Controls D Automation develops the Konnect Software Suite—Windows tools and on-prem plant software you can download, trial, and license for your facility."
      />

      <section className="section">
        <div className="site-wrap">
          <Reveal>
            <article className="overflow-hidden rounded-xl border border-silver/70 bg-white">
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
                  <p className="eyebrow mt-6">Featured product line</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl">{softwareSuite.name}</h2>
                  <p className="mt-4 text-muted">{softwareSuite.tagline}</p>
                  <p className="mt-3 text-sm text-navy/80">{softwareSuite.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-navy">
                    {softwareProducts.map((product) => (
                      <li key={product.slug} className="border-l-2 border-royal/50 pl-3">
                        <span className="font-semibold">{product.name}</span>
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
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
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
