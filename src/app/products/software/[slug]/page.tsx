import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatUsd,
  getLicenseModelLabel,
  getSkusForProduct,
  getSoftwareProduct,
  softwareProducts,
} from "@content/software";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SoftwareProductHero } from "@/components/SoftwareProductHero";
import { SoftwareScreenshotGallery } from "@/components/SoftwareScreenshotGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return softwareProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getSoftwareProduct(slug);
  if (!product) return { title: "Software" };
  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function SoftwareProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getSoftwareProduct(slug);
  if (!product) notFound();

  const skus = getSkusForProduct(product.slug);
  const fromPrice = skus.length ? Math.min(...skus.map((sku) => sku.priceUsd)) : null;
  const pricingHref = product.isFree
    ? "/products/software/pricing"
    : `/products/software/pricing?sku=${product.pricingSkuIds[0] ?? ""}`;

  return (
    <>
      <SoftwareProductHero product={product} />

      <section className="section">
        <div className="site-wrap grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-10">
            <Reveal>
              <article>
                <h2 className="text-2xl">Capabilities</h2>
                <ul className="mt-5 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="border-l-2 border-royal/50 pl-4 text-navy">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={60}>
              <article>
                <h2 className="text-2xl">Typical plant jobs</h2>
                <ul className="mt-5 space-y-3">
                  {product.plantJobs.map((job) => (
                    <li key={job} className="border-l-2 border-steel/70 pl-4 text-muted">
                      {job}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article>
                <h2 className="text-2xl">How teams use it</h2>
                <ol className="mt-5 space-y-5">
                  {product.workflow.map((item, index) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-royal tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-semibold text-navy">{item.step}</p>
                        <p className="mt-1 text-sm text-muted">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <aside className="metallic-panel h-fit space-y-5 rounded-xl p-6 shadow-[0_10px_30px_rgba(11,31,58,0.06)] lg:sticky lg:top-24">
              <div>
                <h2 className="text-xl">Access</h2>
                <p className="mt-3 text-sm text-muted">{product.trialNotes}</p>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-navy">Platform</dt>
                  <dd className="text-muted">{product.platform}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Version</dt>
                  <dd className="text-muted">{product.version}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">License model</dt>
                  <dd className="text-muted">{getLicenseModelLabel(product)}</dd>
                </div>
              </dl>
              {product.comingSoon ? (
                <Link href="/contact" className="btn btn-primary w-full">
                  Ask about early access
                </Link>
              ) : (
                <>
                  <a href={product.downloadUrl} className="btn btn-primary w-full">
                    {product.downloadLabel}
                  </a>
                  {product.pricingSkuIds.length > 0 ? (
                    <Link href={pricingHref} className="btn btn-secondary w-full">
                      {product.freeForever
                        ? "Upgrade to Full"
                        : fromPrice != null
                          ? `Full from ${formatUsd(fromPrice)}`
                          : "Request a license"}
                    </Link>
                  ) : null}
                </>
              )}
            </aside>
          </Reveal>
        </div>
      </section>

      <SoftwareScreenshotGallery screenshots={product.screenshots} />

      <CtaBand
        title={
          product.comingSoon
            ? "Want early access?"
            : product.isFree
              ? "Need the rest of the suite?"
              : product.freeForever
                ? "Need Map, Sites, and reports?"
                : "Tried it—ready for Full?"
        }
        body={
          product.comingSoon
            ? "Tell us about your plant use case. We will notify you when the public release is ready—or discuss a pilot."
            : product.isFree
              ? "Pair BootP with ModbusTools, NetworkScan, PIDTuner, or KonnectOEE when your job needs more than commissioning."
              : product.freeForever
                ? "NetworkScan Free covers scan and results forever. Upgrade to Full for Map, Sites, Report, and clean exports."
                : "Submit a license request with your Machine ID. We will send payment instructions and an offline key."
        }
        primaryHref={
          product.comingSoon
            ? "/contact"
            : product.isFree
              ? "/products/software"
              : pricingHref
        }
        primaryLabel={
          product.comingSoon
            ? "Contact us"
            : product.isFree
              ? "Browse suite"
              : product.freeForever
                ? "Upgrade to Full"
                : "Go to pricing"
        }
        secondaryHref={product.comingSoon ? "/products/software" : "/contact"}
        secondaryLabel={product.comingSoon ? "Browse suite" : "Contact us"}
      />
    </>
  );
}
