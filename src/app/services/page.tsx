import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@content/services";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "PLC, HMI, SCADA, system integration, and migration services from Controls D Automation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="PLC, HMI, and SCADA services that protect uptime"
        lede="Whether you need a new application, multi-vendor integration, a focused update, or a full platform migration, we deliver maintainable controls work with clear documentation and commissioning support."
      />

      <section className="section">
        <div className="site-wrap space-y-8">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <article
                id={service.slug}
                className="grid gap-6 rounded-xl border border-silver/70 bg-white p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8"
              >
                <div>
                  <h2 className="text-3xl">
                    <Link
                      href={`/services/${service.slug}`}
                      className="transition-colors hover:text-royal"
                    >
                      {service.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-muted">{service.summary}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-block text-sm font-semibold text-royal hover:underline"
                  >
                    View service details →
                  </Link>
                </div>
                <ul className="space-y-3">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="border-l-2 border-royal/50 pl-4 text-navy"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-mist px-6 py-6">
              <p className="max-w-xl text-muted">
                Looking for platform-specific experience? See how we work with Rockwell Automation, GE, and Keyence.
              </p>
              <Link href="/platforms" className="btn btn-secondary">
                View platforms
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
