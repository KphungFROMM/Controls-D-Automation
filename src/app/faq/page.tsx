import type { Metadata } from "next";
import Link from "next/link";
import { faqs, getFaqCategories } from "@content/faqs";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about PLC, HMI, SCADA, integration, commissioning, and support from Controls D Automation.",
};

export default function FaqPage() {
  const categories = getFaqCategories();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Support"
        title="Frequently asked questions"
        lede="Straight answers about platforms, project scope, remote support, commissioning, and ongoing maintenance."
      />

      <section className="section">
        <div className="site-wrap space-y-12">
          {categories.map((category, index) => {
            const items = faqs.filter((faq) => faq.category === category);
            return (
              <Reveal key={category} delay={index * 40}>
                <div>
                  <h2 className="text-2xl">{category}</h2>
                  <div className="mt-4 space-y-3">
                    {items.map((faq) => (
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
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-mist px-6 py-6">
              <p className="max-w-xl text-muted">
                Question not answered here? Tell us about your process and we’ll follow up with a practical next step.
              </p>
              <Link href="/quote" className="btn btn-primary">
                Request a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand primaryHref="/quote" primaryLabel="Request a consultation" />
    </>
  );
}
