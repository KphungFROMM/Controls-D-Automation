import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for PLC, HMI, SCADA, migration, or partnership inquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a consultation"
        lede="Tell us about your control system, timeline, and goals. Use the form below and we’ll follow up promptly."
      />

      <section className="section">
        <div className="site-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl">Reach us</h2>
                <p className="mt-2 text-sm text-muted">{site.socialNote}</p>
              </div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-navy">Phone</dt>
                  <dd className="text-muted">
                    <a href={`tel:${site.contact.phone}`}>{site.contact.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Email</dt>
                  <dd className="text-muted">
                    <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Hours</dt>
                  <dd className="text-muted">{site.contact.hours}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Location</dt>
                  <dd className="text-muted">
                    {site.contact.addressLine1}
                    <br />
                    {site.contact.addressLine2}
                    <br />
                    {site.contact.location}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Suspense fallback={<div className="metallic-panel rounded-xl p-8">Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
