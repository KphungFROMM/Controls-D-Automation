import type { MetadataRoute } from "next";
import { industries } from "@content/industries";
import { projects } from "@content/projects";
import { services } from "@content/services";

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
    "/faq",
    "/about",
    "/contact",
    "/quote",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${base}/industries/${industry.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(project.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...projectRoutes];
}
