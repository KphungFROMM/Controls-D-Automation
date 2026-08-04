import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}—automation controls services for PLC, HMI, and SCADA.`,
};

const reasons = [
  {
    title: "Uptime-first mindset",
    body: "Every recommendation is filtered through production reality—cutover windows, spare parts risk, and operator usability.",
  },
  {
    title: "Maintainable deliverables",
    body: "We write controls applications the next engineer can understand: structure, comments, and documentation included.",
  },
  {
    title: "Platform fluency",
    body: "Rockwell Automation, GE, and Keyence experience means less ramp-up and fewer surprises on mixed sites.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A controls partner focused on reliable automation"
        lede={`${site.name} helps manufacturers and industrial facilities develop, update, and migrate PLC, HMI, and SCADA systems—without unnecessary complexity.`}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="text-3xl">Who we are</h2>
            <p className="mt-4 text-muted">
              Controls D Automation exists to make industrial control systems clearer, more maintainable, and more reliable. We work across new development, targeted updates, and platform migrations—always with an eye on commissioning success and long-term supportability.
            </p>
            <p className="mt-4 text-muted">
              Location and contact details on this site are placeholders for now. The engineering focus is not: practical PLC logic, operator-ready HMIs, and SCADA visibility that helps teams act before downtime grows.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="metallic-panel rounded-xl p-6">
              <h3 className="text-xl">Our approach</h3>
              <ol className="mt-4 space-y-3 text-sm text-muted">
                <li>
                  <strong className="text-navy">1. Listen first</strong> — process constraints before technology preferences.
                </li>
                <li>
                  <strong className="text-navy">2. Design for handoff</strong> — code and screens your team can own.
                </li>
                <li>
                  <strong className="text-navy">3. Commission carefully</strong> — validate what matters under real conditions.
                </li>
                <li>
                  <strong className="text-navy">4. Stay available</strong> — updates and migrations as needs change.
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why clients choose us</p>
            <h2 className="mt-3 text-3xl">Clarity over noise</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 70}>
                <div className="rounded-xl border border-silver/70 bg-white p-5">
                  <h3 className="text-xl">{reason.title}</h3>
                  <p className="mt-2 text-sm text-muted">{reason.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
