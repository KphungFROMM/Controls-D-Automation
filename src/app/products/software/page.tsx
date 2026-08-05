import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { softwareProducts, softwareSuite } from "@content/software";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SoftwareProductCard } from "@/components/SoftwareProductCard";

export const metadata: Metadata = {
  title: "Konnect Software Suite",
  description: softwareSuite.description,
};

export default function SoftwareSuitePage() {
  return (
    <>
      <PageHero
        eyebrow="Konnect Software Suite"
        title={softwareSuite.tagline}
        lede={softwareSuite.description}
      />

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-mist px-6 py-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/software/branding/logo-wordmark.png"
                  alt="Konnect"
                  width={140}
                  height={36}
                  className="h-8 w-auto"
                />
                <p className="text-sm text-muted">From Controls D Automation · Windows 10/11</p>
              </div>
              <div className="flex flex-wrap gap-3">
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
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <p className="eyebrow">Why Konnect</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Built for OT realities</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
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
            <p className="eyebrow">Products</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Five tools ready for public release</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {softwareProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 60}>
                <SoftwareProductCard product={product} />
              </Reveal>
            ))}
          </div>
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
