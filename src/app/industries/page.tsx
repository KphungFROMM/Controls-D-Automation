import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@content/industries";
import { getProjectsByIndustry } from "@content/projects";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Automation controls services for manufacturing, water/wastewater, packaging, food & beverage, automotive, and more.",
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
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-silver/70 bg-white">
                  <Link href={`/industries/${industry.slug}`} className="relative h-48 overflow-hidden sm:h-52">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-2xl">
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="transition-colors hover:text-royal"
                      >
                        {industry.name}
                      </Link>
                    </h2>
                    <p className="mt-3 text-muted">{industry.summary}</p>
                    <p className="mt-3 text-sm text-navy/80">{industry.focus}</p>
                    <ul className="mt-5 space-y-2">
                      {industry.outcomes.map((outcome) => (
                        <li key={outcome} className="text-sm text-navy">
                          <span className="mr-2 text-royal">▸</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="mt-5 inline-flex text-sm font-semibold text-royal hover:underline"
                    >
                      View industry details →
                    </Link>
                    {related.length > 0 ? (
                      <div className="mt-auto border-t border-mist pt-4">
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
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Talk about your facility"
        body="Tell us about your process, platforms, and goals. We’ll help define a controls approach that fits your operation."
        primaryHref="/quote"
        primaryLabel="Talk about your facility"
      />
    </>
  );
}
