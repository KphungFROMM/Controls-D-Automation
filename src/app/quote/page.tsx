import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: `Request a consultation or quote from ${site.name} for PLC, HMI, SCADA, integration, migration, or support work.`,
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Quote"
        title="Ready to scope this work?"
        lede="Tell us which service you need, your platforms, and production constraints. We’ll follow up with a practical next step—not a generic sales script."
      />

      <section className="section">
        <div className="site-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-5">
              <h2 className="text-2xl">What helps us scope quickly</h2>
              <ul className="space-y-3 text-sm text-muted">
                <li className="border-l-2 border-royal/50 pl-4">
                  Controller and HMI/SCADA platforms currently installed
                </li>
                <li className="border-l-2 border-royal/50 pl-4">
                  Whether this is new development, an update, a migration, or support
                </li>
                <li className="border-l-2 border-royal/50 pl-4">
                  Available downtime windows and target go-live timing
                </li>
                <li className="border-l-2 border-royal/50 pl-4">
                  Any drawings, P&IDs, or program backups you can share later
                </li>
              </ul>
              <p className="text-sm text-muted">
                Prefer email or phone? Reach us at{" "}
                <a className="font-semibold text-royal hover:underline" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>{" "}
                or{" "}
                <a className="font-semibold text-royal hover:underline" href={`tel:${site.contact.phone}`}>
                  {site.contact.phone}
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Suspense fallback={<div className="metallic-panel rounded-xl p-8">Loading form…</div>}>
              <QuoteForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
