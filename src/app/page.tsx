import Image from "next/image";
import Link from "next/link";
import { industries } from "@content/industries";
import { partners } from "@content/partners";
import { getFeaturedProjects } from "@content/projects";
import { getApprovedReviews, getAverageRating } from "@content/reviews";
import { services } from "@content/services";
import { CtaBand } from "@/components/CtaBand";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { StarRating } from "@/components/StarRating";

const processSteps = [
  {
    title: "Assess",
    body: "Understand your process, installed base, and risk windows before touching production.",
  },
  {
    title: "Design & Program",
    body: "Build maintainable PLC, HMI, and SCADA applications with clear structure and documentation.",
  },
  {
    title: "Commission",
    body: "Validate sequences, alarms, and operator workflows with a controlled startup plan.",
  },
  {
    title: "Support",
    body: "Hand off knowledge cleanly and stay available for updates, migrations, and improvements.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);
  const approvedReviews = getApprovedReviews();
  const average = getAverageRating(approvedReviews);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="hero-media absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(11,31,58,0.88), rgba(30,75,140,0.55)), url('https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
          <div className="absolute inset-0 circuit-grid opacity-30" />
        </div>

        <div className="container relative grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12 xl:gap-16 lg:py-16">
          <div className="fade-up text-white">
            <h1 className="text-3xl !text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Controls D Automation
            </h1>
            <p className="mt-3 max-w-2xl text-base text-silver sm:text-lg xl:text-xl">
              Reliable PLC, HMI, and SCADA development, updates, and migrations—built to keep production running.
            </p>
            <div className="hero-actions mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Request a consultation
              </Link>
              <Link
                href="/services"
                className="btn border border-white/35 bg-white/10 text-white hover:bg-white/15"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div className="fade-up grid grid-cols-2 gap-3 sm:gap-4" style={{ animationDelay: "120ms" }}>
            <figure className="relative col-span-2 overflow-hidden rounded-lg border border-white/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80"
                alt="Industrial automation workstation representing HMI operator interfaces"
                width={1600}
                height={900}
                className="h-44 w-full object-cover sm:h-56 lg:h-64 xl:h-72"
                priority
              />
              <figcaption className="absolute bottom-0 left-0 bg-navy/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                HMI
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-lg border border-white/20 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1621905252472-943afaa20e20?auto=format&fit=crop&w=1000&q=80"
                alt="Industrial electrical control panel and PLC hardware"
                width={1000}
                height={700}
                className="h-40 w-full object-cover sm:h-48 lg:h-52 xl:h-56"
              />
              <figcaption className="absolute bottom-0 left-0 bg-navy/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                PLC
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-lg border border-white/20 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                alt="SCADA-style monitoring dashboards and process data displays"
                width={1000}
                height={700}
                className="h-40 w-full object-cover sm:h-48 lg:h-52 xl:h-56"
              />
              <figcaption className="absolute bottom-0 left-0 bg-navy/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                SCADA
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">What we deliver</p>
            <h2 className="mt-3 max-w-4xl text-3xl sm:text-4xl xl:text-5xl">
              Automation controls services for plants that cannot afford guesswork
            </h2>
            <p className="lede mt-4">
              From greenfield applications to legacy migrations, Controls D Automation focuses on maintainable code, practical operator interfaces, and commissioning that respects production.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <div className="h-full border-l-2 border-royal/70 pl-4">
                  <h3 className="text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="text-sm font-semibold text-royal hover:underline">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-silver/60 bg-white">
        <div className="container py-10">
          <Reveal>
            <p className="eyebrow">Platform expertise</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-xl text-3xl">Rockwell Automation · GE · Keyence</h2>
              <Link href="/platforms" className="text-sm font-semibold text-royal hover:underline">
                Platform details →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section atmosphere">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Built for facilities that depend on uptime</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 60}>
                <Link
                  href="/industries"
                  className="block rounded-lg border border-silver/70 bg-white/80 px-5 py-4 transition hover:border-royal/40 hover:shadow-md"
                >
                  <h3 className="text-lg">{industry.name}</h3>
                  <p className="mt-2 text-sm text-muted">{industry.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Projects</p>
                <h2 className="mt-3 text-3xl sm:text-4xl">Recent work</h2>
              </div>
              <Link href="/projects" className="text-sm font-semibold text-royal hover:underline">
                Browse all projects →
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow">Partners</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Stronger solutions through collaboration</h2>
            <p className="lede mt-4">
              We partner with OEMs, panel shops, software vendors, and field teams to deliver complete automation solutions.
            </p>
            <Link href="/partners" className="btn btn-secondary mt-6">
              Explore partnerships
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-3 sm:grid-cols-2">
              {partners.slice(0, 4).map((partner) => (
                <div
                  key={partner.slug}
                  className="rounded-lg border border-dashed border-steel/50 bg-mist/50 px-4 py-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-royal">
                    {partner.category}
                  </p>
                  <p className="mt-2 font-semibold text-navy">{partner.name}</p>
                  <p className="mt-1 text-xs text-muted">Partner placeholder</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">A practical path from assessment to support</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl text-silver">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <div className="metallic-panel rounded-xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Customer reviews</p>
                  <h2 className="mt-3 text-3xl">Trusted by plant and operations teams</h2>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <StarRating rating={average} size="lg" />
                    <span className="text-2xl font-semibold text-navy">{average.toFixed(1)}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    Based on {approvedReviews.length} reviews
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {approvedReviews.slice(0, 2).map((review) => (
                  <blockquote key={review.id} className="border-l-2 border-royal/60 pl-4">
                    <StarRating rating={review.rating} size="sm" />
                    <p className="mt-2 text-muted">&ldquo;{review.comment}&rdquo;</p>
                    <footer className="mt-3 text-sm font-semibold text-navy">
                      {review.name}
                      {review.company ? ` · ${review.company}` : ""}
                    </footer>
                  </blockquote>
                ))}
              </div>
              <Link href="/reviews" className="mt-6 inline-flex text-sm font-semibold text-royal hover:underline">
                Read all reviews →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
