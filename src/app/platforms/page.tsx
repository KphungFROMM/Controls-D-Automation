import type { Metadata } from "next";
import { platforms } from "@content/platforms";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "Rockwell Automation, GE, and Keyence expertise for PLC, HMI, and SCADA projects.",
};

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platforms"
        title="Deep experience where your plant already runs"
        lede="Controls D Automation supports Rockwell Automation, GE, and Keyence environments—plus mixed-vendor sites that need practical integration, not forced rip-and-replace."
      />

      <section className="section">
        <div className="site-wrap grid gap-6 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <Reveal key={platform.slug} delay={index * 80}>
              <article className="metallic-panel h-full rounded-xl p-6">
                <h2 className="text-2xl">{platform.name}</h2>
                <p className="mt-3 text-sm text-muted">{platform.summary}</p>
                <ul className="mt-5 space-y-2">
                  {platform.focus.map((item) => (
                    <li key={item} className="text-sm text-navy">
                      <span className="mr-2 text-royal">▸</span>
                      {item}
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
            <div className="rounded-xl border border-silver/70 bg-white px-6 py-8">
              <h2 className="text-2xl">Other platforms on request</h2>
              <p className="mt-3 max-w-3xl text-muted">
                Many facilities run more than one ecosystem. If your site includes additional PLC, HMI, or SCADA platforms, ask us about integration, coexistence, or staged migration options.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Need a platform migration plan?"
        body="Share your installed base and production constraints. We’ll outline a practical path that protects uptime."
      />
    </>
  );
}
