import type { MetadataRoute } from "next";
import { projects } from "@content/projects";

const base = "https://controls-d-automation.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/platforms",
    "/industries",
    "/partners",
    "/projects",
    "/reviews",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(project.date),
  }));

  return [...staticRoutes, ...projectRoutes];
}
