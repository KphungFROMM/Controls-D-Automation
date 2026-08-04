import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@content/industries";
import { getProjectBySlug, projects } from "@content/projects";
import { getServiceBySlug } from "@content/services";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const industry = industries.find((item) => item.slug === project.industry);
  const industryName = industry?.name ?? project.industry;
  const relatedServices = (project.services ?? [])
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <section className="relative overflow-hidden border-b border-silver/50">
        <div className="absolute inset-0 atmosphere circuit-grid opacity-80" />
        <div className="site-wrap relative py-14">
          <Reveal>
            <Link href="/projects" className="text-sm font-semibold text-royal hover:underline">
              ← All projects
            </Link>
            <p className="eyebrow mt-5">
              {industry ? (
                <Link href={`/industries/${industry.slug}`} className="hover:underline">
                  {industryName}
                </Link>
              ) : (
                industryName
              )}{" "}
              ·{" "}
              <time dateTime={project.date}>
                {new Date(project.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">{project.title}</h1>
            <p className="lede mt-4">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-navy shadow-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {project.metrics && project.metrics.length > 0 ? (
        <section className="border-b border-silver/60 bg-white">
          <div className="site-wrap grid gap-6 py-8 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="border-l-2 border-royal/50 pl-4">
                <p className="font-[family-name:var(--font-display)] text-3xl text-navy">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="site-wrap grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <Reveal>
              <article>
                <h2 className="text-2xl">Client challenge</h2>
                <p className="mt-3 text-muted">{project.challenge}</p>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article>
                <h2 className="text-2xl">Proposed solution</h2>
                <p className="mt-3 text-muted">{project.solution}</p>
              </article>
            </Reveal>
            {project.process && project.process.length > 0 ? (
              <Reveal delay={120}>
                <article>
                  <h2 className="text-2xl">Implementation process</h2>
                  <ol className="mt-4 space-y-3">
                    {project.process.map((step, index) => (
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
            ) : null}
          </div>
          <Reveal delay={120}>
            <aside className="metallic-panel h-fit space-y-6 rounded-xl p-6">
              <div>
                <h2 className="text-xl">Results</h2>
                <ul className="mt-4 space-y-3">
                  {project.results.map((result) => (
                    <li key={result} className="border-l-2 border-royal/60 pl-3 text-sm text-navy">
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              {relatedServices.length > 0 ? (
                <div>
                  <h2 className="text-xl">Related services</h2>
                  <ul className="mt-3 space-y-2">
                    {relatedServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-sm font-semibold text-royal hover:underline"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <Link href="/quote?interest=project" className="btn btn-primary w-full">
                Discuss a similar project
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaBand primaryHref="/quote" primaryLabel="Request a consultation" />
    </>
  );
}
