import Image from "next/image";
import Link from "next/link";
import { industries } from "@content/industries";
import { getFeaturedProjects } from "@content/projects";
import { getApprovedReviews, getAverageRating } from "@content/reviews";
import { softwareSuite } from "@content/software";
import { services } from "@content/services";
import { CtaBand } from "@/components/CtaBand";
import { PlatformCarousel } from "@/components/PlatformCarousel";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { StarRating } from "@/components/StarRating";
import { StatsCounter } from "@/components/StatsCounter";

const whyChooseUs = [
  {
    title: "Multi-platform depth",
    body: "Rockwell Automation, GE, and Keyence expertise under one roof—without forcing a platform switch to work with us.",
  },
  {
    title: "Documentation as standard",
    body: "Tag databases, I/O lists, and logic narratives delivered on every project, not as a paid add-on.",
  },
  {
    title: "Safety-first logic design",
    body: "Interlock and safety logic reviewed against the actual failure modes of your process, not a generic template.",
  },
  {
    title: "Support after go-live",
    body: "Maintenance and remote support options so systems stay current instead of drifting out of documentation.",
  },
];

const processSteps = [
  {
    title: "Process & P&ID review",
    body: "We start in your process documentation, not a blank programming environment.",
  },
  {
    title: "PLC logic design",
    body: "Interlocks, sequencing, and tag architecture built for maintainability.",
  },
  {
    title: "HMI & SCADA build",
    body: "Operator screens and monitoring layered on top of tested logic.",
  },
  {
    title: "Commissioning",
    body: "I/O checkout, loop testing, and startup support through to steady state.",
  },
];

const homeStats = [
  { value: 18, suffix: "+", label: "Years delivering control systems" },
  { value: 240, suffix: "+", label: "Systems commissioned" },
  { value: 3, label: "Controller platforms supported" },
  { value: 99.6, suffix: "%", label: "Average post-deployment uptime", decimals: 1 },
];

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);
  const approvedReviews = getApprovedReviews();
  const average = getAverageRating(approvedReviews);
  const homeServices = services.slice(0, 6);

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

        <div className="site-wrap relative grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12 xl:gap-16 lg:py-16">
          <div className="fade-up text-white">
            <h1 className="text-3xl !text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Controls D Automation
            </h1>
            <p className="mt-3 max-w-2xl text-base text-silver sm:text-lg xl:text-xl">
              Reliable PLC, HMI, and SCADA development, updates, and migrations—built to keep production running.
            </p>
            <div className="hero-actions mt-6 flex flex-wrap gap-3">
              <Link href="/quote" className="btn btn-primary">
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
                src="/hero/hmi-operator-panel.webp"
                alt="Industrial HMI touchscreen showing operator process controls and machine status"
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
                src="/hero/plc-control-cabinet.webp"
                alt="Open electrical control cabinet with DIN-rail PLC modules, I/O cards, and wiring"
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
                src="/hero/scada-process-screen.webp"
                alt="SCADA monitor displaying industrial process schematic with tanks, pumps, and live values"
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
        <div className="site-wrap max-w-4xl">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Control system engineering, not a general contracting layer
            </h2>
            <p className="lede mt-4">
              Controls D Automation designs, programs, and supports the PLC, HMI, and SCADA systems that keep production and process facilities running. We work directly in the controller code and the interface—on Rockwell Automation, GE, and Keyence platforms—for teams that need a system they can maintain long after we leave the site.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white pt-0">
        <div className="site-wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Capabilities</p>
                <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl">What we build and support</h2>
              </div>
              <Link href="/services" className="text-sm font-semibold text-royal hover:underline">
                All services →
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {homeServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full border-l-2 border-royal/70 pl-4 transition-colors hover:border-royal"
                >
                  <h3 className="text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-silver/70 bg-white">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-6 sm:p-8">
                  <p className="eyebrow">Products</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl">{softwareSuite.name}</h2>
                  <p className="mt-3 max-w-2xl text-muted">{softwareSuite.tagline}</p>
                  <p className="mt-3 max-w-2xl text-sm text-navy/80">
                    Download BootP and NetworkScan Free forever, trial ModbusTools, PIDTuner, and
                    on-prem OEE—then license Full seats when your plant is ready.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/products/software" className="btn btn-primary">
                      Explore software
                    </Link>
                    <Link href="/products/software/pricing" className="btn btn-secondary">
                      View pricing
                    </Link>
                  </div>
                </div>
                <div className="border-t border-silver/60 bg-mist px-6 py-6 lg:border-t-0 lg:border-l">
                  <ul className="space-y-3 text-sm text-navy">
                    <li className="border-l-2 border-royal/50 pl-3">KonnectBootP — free commissioning</li>
                    <li className="border-l-2 border-royal/50 pl-3">NetworkScan — Free scan + Full reports</li>
                    <li className="border-l-2 border-royal/50 pl-3">ModbusTools & PIDTuner — OT bench tools</li>
                    <li className="border-l-2 border-royal/50 pl-3">KonnectOEE — on-prem plant visibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section atmosphere">
        <div className="site-wrap grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Why facilities choose us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Systems built to be handed off, not depended on
            </h2>
            <p className="lede mt-4">
              A control system that only one person understands is a liability. Every project we deliver includes documentation written for whoever inherits the system next—your team or another integrator.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="border-l-2 border-royal/50 pl-4">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Industries served</p>
                <h2 className="mt-3 text-3xl sm:text-4xl">Process knowledge specific to your floor</h2>
              </div>
              <Link href="/industries" className="text-sm font-semibold text-royal hover:underline">
                All industries →
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 8).map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 50}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="block h-full border-l-2 border-royal/60 pl-4 transition-colors hover:border-royal"
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
        <div className="site-wrap">
          <Reveal>
            <p className="eyebrow">How a control system comes together</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              From process narrative to production-ready system
            </h2>
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
        <div className="site-wrap">
          <Reveal>
            <StatsCounter stats={homeStats} />
          </Reveal>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="site-wrap">
          <Reveal>
            <p className="eyebrow !text-circuit">Technology partners</p>
            <h2 className="mt-3 text-center text-3xl text-white sm:text-4xl">
              Built on platforms your team already knows
            </h2>
          </Reveal>
        </div>
        <div className="mt-8">
          <PlatformCarousel />
        </div>
        <div className="site-wrap mt-8 text-center">
          <Link href="/platforms" className="text-sm font-semibold text-silver hover:text-white">
            Platform details →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Featured work</p>
                <h2 className="mt-3 text-3xl sm:text-4xl">Recent projects</h2>
                <p className="lede mt-3">
                  Project summaries illustrating typical scope, platforms, and outcomes.
                </p>
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

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <div className="metallic-panel rounded-xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Client feedback</p>
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
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {approvedReviews.slice(0, 3).map((review) => (
                  <blockquote key={review.id} className="border-l-2 border-royal/60 pl-4">
                    <StarRating rating={review.rating} size="sm" />
                    <p className="mt-2 text-sm text-muted">&ldquo;{review.comment}&rdquo;</p>
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

      <CtaBand
        title="Talk to an engineer about your control system"
        body="Consultations are scoped around your process, not a sales script. Tell us what’s running and what’s not."
        primaryHref="/quote"
        primaryLabel="Request a consultation"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}
