import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAvailableSoftwareProducts,
  getComingSoonSoftwareProducts,
  softwareSuite,
} from "@content/software";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SoftwareProductCard } from "@/components/SoftwareProductCard";

export const metadata: Metadata = {
  title: "Konnect Software Suite",
  description: softwareSuite.description,
};

export default function SoftwareSuitePage() {
  const available = getAvailableSoftwareProducts();
  const comingSoon = getComingSoonSoftwareProducts();

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
                Edge design and on-prem reporting are in active development. Preview the UIs below and
                contact us if you want early access.
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
