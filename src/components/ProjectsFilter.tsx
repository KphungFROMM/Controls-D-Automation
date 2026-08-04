"use client";

import { useMemo, useState } from "react";
import type { Project } from "@content/projects";
import { industries } from "@content/industries";
import { ProjectCard } from "./ProjectCard";

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [industry, setIndustry] = useState("all");
  const [platform, setPlatform] = useState("all");

  const platforms = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.platforms))).sort(),
    [projects],
  );

  const filtered = projects.filter((project) => {
    const industryMatch = industry === "all" || project.industry === industry;
    const platformMatch = platform === "all" || project.platforms.includes(platform);
    return industryMatch && platformMatch;
  });

  return (
    <div>
      <div className="metallic-panel flex flex-col gap-4 rounded-xl p-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label className="form-label" htmlFor="filter-industry">
            Industry
          </label>
          <select
            id="filter-industry"
            className="select"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="all">All industries</option>
            {industries.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="form-label" htmlFor="filter-platform">
            Platform
          </label>
          <select
            id="filter-platform"
            className="select"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="all">All platforms</option>
            {platforms.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-muted">No projects match these filters yet.</p>
      ) : null}
    </div>
  );
}
