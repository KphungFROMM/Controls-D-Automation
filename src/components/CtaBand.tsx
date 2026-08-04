import Link from "next/link";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Ready to discuss your control system?",
  body = "Tell us about your PLC, HMI, or SCADA challenge—new development, updates, or a migration. We’ll help you plan the next step.",
  primaryHref = "/contact",
  primaryLabel = "Request a consultation",
  secondaryHref,
  secondaryLabel,
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section pt-0">
      <Reveal>
        <div className="container overflow-hidden rounded-xl bg-gradient-to-br from-navy via-[#14325c] to-royal px-6 py-10 text-white sm:px-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mt-3 text-base text-silver">{body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={primaryHref} className="btn bg-white text-navy hover:bg-mist">
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className="btn border border-white/35 text-white hover:bg-white/10"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
