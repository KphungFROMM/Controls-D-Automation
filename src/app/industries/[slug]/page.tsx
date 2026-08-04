import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug, industries } from "@content/industries";
import { getProjectsByIndustry } from "@content/projects";
import { getServiceBySlug } from "@content/services";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry" };
  return {
    title: industry.name,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedServices = industry.services
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedProjects = getProjectsByIndustry(industry.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-silver/50">
        <div className="absolute inset-0">
          <Image
            src={industry.image}
            alt={industry.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/45" />
        </div>
        <div className="site-wrap relative py-16 text-white">
          <Reveal>
            <Link href="/industries" className="text-sm font-semibold text-silver hover:text-white">
              ← All industries
            </Link>
            <p className="eyebrow mt-5 !text-circuit">Industry</p>
            <h1 className="mt-3 max-w-3xl text-4xl !text-white sm:text-5xl">{industry.name}</h1>
            <p className="mt-4 max-w-2xl text-base text-silver sm:text-lg">{industry.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <Reveal>
              <article>
                <h2 className="text-2xl">Common automation challenges</h2>
                <ul className="mt-4 space-y-3">
                  {industry.challenges.map((item) => (
                    <li key={item} className="border-l-2 border-steel/70 pl-4 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article>
                <h2 className="text-2xl">Typical systems & solutions</h2>
                <ul className="mt-4 space-y-3">
                  {industry.systems.map((item) => (
                    <li key={item} className="border-l-2 border-royal/50 pl-4 text-navy">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <aside className="metallic-panel h-fit space-y-6 rounded-xl p-6">
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
              <Link
                href={`/quote?service=${relatedServices[0]?.slug ?? "plc"}`}
                className="btn btn-primary w-full"
              >
                Discuss your facility
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="border-y border-silver/60 bg-white">
          <div className="site-wrap py-14">
            <Reveal>
              <p className="eyebrow">Work in this industry</p>
              <h2 className="mt-3 text-3xl">Related projects</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {relatedProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 60}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block border-l-2 border-royal/60 pl-4 transition-colors hover:border-royal"
                  >
                    <h3 className="text-lg">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted">{project.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title="Discuss your facility’s control systems"
        body={`Tell us about your ${industry.name.toLowerCase()} process, platforms, and goals. We’ll help define a controls approach that fits your operation.`}
        primaryHref="/quote"
        primaryLabel="Request a consultation"
      />
    </>
  );
}
