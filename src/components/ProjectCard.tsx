import Link from "next/link";
import type { Project } from "@content/projects";
import { industries } from "@content/industries";

export function ProjectCard({ project }: { project: Project }) {
  const industryName =
    industries.find((item) => item.slug === project.industry)?.name ??
    project.industry;

  return (
    <article className="metallic-panel flex h-full flex-col rounded-xl p-6 shadow-[0_10px_30px_rgba(11,31,58,0.06)]">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-royal">
        <span>{industryName}</span>
        <span className="text-steel">·</span>
        <time dateTime={project.date}>
          {new Date(project.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
      <h3 className="mt-3 text-xl">
        <Link href={`/projects/${project.slug}`} className="hover:text-royal">
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.platforms.map((platform) => (
          <span
            key={platform}
            className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-navy"
          >
            {platform}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-royal hover:underline"
      >
        Read case study →
      </Link>
    </article>
  );
}
