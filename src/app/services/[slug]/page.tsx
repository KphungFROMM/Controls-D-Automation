import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@content/industries";
import { getServiceBySlug, services } from "@content/services";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = service.relatedIndustries
    .map((industrySlug) => industries.find((item) => item.slug === industrySlug))
    .filter((item): item is (typeof industries)[number] => Boolean(item));

  const contactHref = `/contact?interest=project&service=${service.slug}`;

  return (
    <>
      <section className="relative overflow-hidden border-b border-silver/50">
        <div className="absolute inset-0 atmosphere circuit-grid opacity-80" />
        <div className="site-wrap relative py-14">
          <Reveal>
            <Link href="/services" className="text-sm font-semibold text-royal hover:underline">
              ← All services
            </Link>
            <p className="eyebrow mt-5">Service</p>
            <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">{service.title}</h1>
            <p className="lede mt-4">{service.summary}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-10">
            <Reveal>
              <article>
                <h2 className="text-2xl">Capabilities</h2>
                <ul className="mt-4 space-y-3">
                  {service.capabilities.map((item) => (
                    <li key={item} className="border-l-2 border-royal/50 pl-4 text-navy">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={60}>
              <article>
                <h2 className="text-2xl">Challenges we address</h2>
                <ul className="mt-4 space-y-3">
                  {service.challenges.map((item) => (
                    <li key={item} className="border-l-2 border-steel/70 pl-4 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article>
                <h2 className="text-2xl">Implementation process</h2>
                <ol className="mt-4 space-y-3">
                  {service.process.map((step, index) => (
                    <li key={step} className="flex gap-4 text-navy">
                      <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-royal tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>

            {service.faqs.length > 0 ? (
              <Reveal delay={140}>
                <article>
                  <h2 className="text-2xl">Frequently asked questions</h2>
                  <div className="mt-4 space-y-3">
                    {service.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group border-b border-silver/70 pb-3"
                      >
                        <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                          <span className="flex items-start justify-between gap-4">
                            <span>{faq.question}</span>
                            <span
                              aria-hidden
                              className="text-royal transition-transform group-open:rotate-45"
                            >
                              +
                            </span>
                          </span>
                        </summary>
                        <p className="mt-3 text-sm text-muted">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </article>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={80}>
            <aside className="metallic-panel h-fit space-y-6 rounded-xl p-6 lg:sticky lg:top-24">
              <div>
                <h2 className="text-xl">Supported technologies</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-navy shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl">Benefits</h2>
                <ul className="mt-3 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="border-l-2 border-royal/60 pl-3 text-sm text-navy">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={contactHref} className="btn btn-primary w-full">
                Request this service
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-y border-silver/60 bg-white">
          <div className="site-wrap py-14">
            <Reveal>
              <p className="eyebrow">Related industries</p>
              <h2 className="mt-3 text-3xl">Where this service applies</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((industry, index) => (
                <Reveal key={industry.slug} delay={index * 60}>
                  <Link
                    href="/industries"
                    className="block h-full border-l-2 border-royal/60 pl-4 transition-colors hover:border-royal"
                  >
                    <h3 className="text-lg">{industry.name}</h3>
                    <p className="mt-2 text-sm text-muted">{industry.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title="Ready to scope this work?"
        body={`Tell us about your ${service.title.toLowerCase()} needs—timeline, platforms, and production constraints. We’ll help define a practical next step.`}
        primaryHref={contactHref}
        primaryLabel="Request a consultation"
        secondaryHref="/services"
        secondaryLabel="Browse all services"
      />
    </>
  );
}
