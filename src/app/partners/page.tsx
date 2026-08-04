import type { Metadata } from "next";
import Link from "next/link";
import { partners, partnerValueProps } from "@content/partners";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Solution partnerships with OEMs, panel shops, software vendors, and field teams—Controls D Automation.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Build stronger solutions together"
        lede="Controls D Automation collaborates with complementary companies to deliver complete automation outcomes—controls engineering paired with fabrication, OEM equipment, software, or field coverage."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why partner</p>
            <h2 className="mt-3 max-w-2xl text-3xl">Joint delivery without blurred accountability</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {partnerValueProps.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="h-full border-t-2 border-royal pt-4">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Current partners</p>
                <h2 className="mt-3 text-3xl">Partner network</h2>
              </div>
              <p className="text-sm text-muted">Placeholder slots ready for real logos and names.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner, index) => (
              <Reveal key={partner.slug} delay={index * 60}>
                <article className="flex h-full flex-col rounded-xl border border-dashed border-steel/55 bg-mist/40 p-5">
                  <div className="mb-6 flex h-20 items-center justify-center rounded-lg bg-white/80 text-sm font-semibold uppercase tracking-[0.14em] text-steel">
                    Logo TBD
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-royal">
                    {partner.category}
                  </p>
                  <h3 className="mt-2 text-lg">{partner.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{partner.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Become a partner"
        body="OEMs, panel shops, integrators, and software vendors: let’s talk about joint proposals and complementary delivery."
        primaryHref="/contact?interest=partnership"
        primaryLabel="Start a partner conversation"
        secondaryHref="/contact"
        secondaryLabel="General contact"
      />

      <section className="section pt-0">
        <div className="container text-center">
          <Reveal>
            <p className="text-muted">
              Prefer email first? Reach us at{" "}
              <Link href="/contact" className="font-semibold text-royal hover:underline">
                the contact page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
