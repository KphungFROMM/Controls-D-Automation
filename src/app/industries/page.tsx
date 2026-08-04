import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@content/industries";
import { getProjectsByIndustry } from "@content/projects";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Automation controls services for manufacturing, water/wastewater, packaging, food & beverage, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Controls support for operations that cannot pause"
        lede="We tailor PLC, HMI, and SCADA work to the realities of your industry—throughput, compliance, remote assets, and the people who keep the plant running."
      />

      <section className="section">
        <div className="site-wrap grid gap-6 md:grid-cols-2">
          {industries.map((industry, index) => {
            const related = getProjectsByIndustry(industry.slug);
            return (
              <Reveal key={industry.slug} delay={index * 50}>
                <article className="h-full rounded-xl border border-silver/70 bg-white p-6">
                  <h2 className="text-2xl">{industry.name}</h2>
                  <p className="mt-3 text-muted">{industry.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {industry.outcomes.map((outcome) => (
                      <li key={outcome} className="text-sm text-navy">
                        <span className="mr-2 text-royal">▸</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  {related.length > 0 ? (
                    <div className="mt-5 border-t border-mist pt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-steel">
                        Related projects
                      </p>
                      <ul className="mt-2 space-y-1">
                        {related.map((project) => (
                          <li key={project.slug}>
                            <Link
                              href={`/projects/${project.slug}`}
                              className="text-sm font-medium text-royal hover:underline"
                            >
                              {project.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Talk about your facility"
        body="Tell us about your process, platforms, and goals. We’ll help define a controls approach that fits your operation."
        primaryLabel="Talk about your facility"
      />
    </>
  );
}
