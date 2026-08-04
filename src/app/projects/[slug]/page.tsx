import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@content/industries";
import { getProjectBySlug, projects } from "@content/projects";
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

  const industryName =
    industries.find((item) => item.slug === project.industry)?.name ?? project.industry;

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
              {industryName} ·{" "}
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
                  className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy shadow-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <Reveal>
              <article>
                <h2 className="text-2xl">Challenge</h2>
                <p className="mt-3 text-muted">{project.challenge}</p>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article>
                <h2 className="text-2xl">What we delivered</h2>
                <p className="mt-3 text-muted">{project.solution}</p>
              </article>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <aside className="metallic-panel h-fit rounded-xl p-6">
              <h2 className="text-xl">Results</h2>
              <ul className="mt-4 space-y-3">
                {project.results.map((result) => (
                  <li key={result} className="border-l-2 border-royal/60 pl-3 text-sm text-navy">
                    {result}
                  </li>
                ))}
              </ul>
              <Link href="/contact?interest=project" className="btn btn-primary mt-6 w-full">
                Discuss a similar project
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
