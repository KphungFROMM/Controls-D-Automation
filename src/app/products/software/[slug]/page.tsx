import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatUsd,
  getAccessBadge,
  getLicenseModelLabel,
  getSkusForProduct,
  getSoftwareProduct,
  softwareProducts,
} from "@content/software";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

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
      <section className="relative overflow-hidden border-b border-silver/50">
        <div className="absolute inset-0 atmosphere circuit-grid opacity-80" />
        <div className="site-wrap relative py-14">
          <Reveal>
            <Link href="/products/software" className="text-sm font-semibold text-royal hover:underline">
              ← Konnect Software Suite
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Image
                src="/software/branding/logo-mark.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <p className="eyebrow mt-0">
                {getAccessBadge(product)} · {product.platform} · v{product.version}
              </p>
            </div>
            <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">{product.name}</h1>
            <p className="mt-3 text-lg font-medium text-navy">{product.tagline}</p>
            <p className="lede mt-4">{product.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={product.downloadUrl} className="btn btn-primary">
                {product.downloadLabel}
              </a>
              {product.pricingSkuIds.length > 0 ? (
                <Link href={pricingHref} className="btn btn-secondary">
                  {fromPrice != null ? `Full from ${formatUsd(fromPrice)}` : "View pricing"}
                </Link>
              ) : (
                <Link href="/products/software" className="btn btn-secondary">
                  Browse suite
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
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
          <Reveal delay={80}>
            <aside className="metallic-panel h-fit rounded-xl p-6">
              <h2 className="text-xl">Access</h2>
              <p className="mt-3 text-sm text-muted">{product.trialNotes}</p>
              <dl className="mt-5 space-y-3 text-sm">
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
              <a href={product.downloadUrl} className="btn btn-primary mt-6 w-full">
                {product.downloadLabel}
              </a>
              {product.pricingSkuIds.length > 0 ? (
                <Link href={pricingHref} className="btn btn-secondary mt-3 w-full">
                  {product.freeForever ? "Upgrade to Full" : "Request a license"}
                </Link>
              ) : null}
            </aside>
          </Reveal>
        </div>
      </section>

      {product.screenshots.length > 0 ? (
        <section className="section pt-0">
          <div className="site-wrap">
            <Reveal>
              <p className="eyebrow">Product views</p>
              <h2 className="mt-3 text-3xl">See it in the plant</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.screenshots.map((shot, index) => (
                <Reveal key={shot.src} delay={index * 50}>
                  <figure className="overflow-hidden rounded-lg border border-silver/70 bg-white shadow-sm">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1200}
                      height={750}
                      className="h-auto w-full object-cover"
                    />
                    <figcaption className="px-3 py-2 text-xs text-muted">{shot.alt}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title={
          product.isFree
            ? "Need the rest of the suite?"
            : product.freeForever
              ? "Need Map, Sites, and reports?"
              : "Tried it—ready for Full?"
        }
        body={
          product.isFree
            ? "Pair BootP with ModbusTools, NetworkScan, PIDTuner, or KonnectOEE when your job needs more than commissioning."
            : product.freeForever
              ? "NetworkScan Free covers scan and results forever. Upgrade to Full for Map, Sites, Report, and clean exports."
              : "Submit a license request with your Machine ID. We will send payment instructions and an offline key."
        }
        primaryHref={product.isFree ? "/products/software" : pricingHref}
        primaryLabel={
          product.isFree ? "Browse suite" : product.freeForever ? "Upgrade to Full" : "Go to pricing"
        }
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}
