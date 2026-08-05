import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import {
  desktopBundle,
  formatUsd,
  getPricingSku,
  getSoftwareProduct,
  softwareProducts,
} from "@content/software";
import { CtaBand } from "@/components/CtaBand";
import { LicenseRequestForm } from "@/components/LicenseRequestForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Software Pricing",
  description:
    "Konnect Software Suite pricing—BootP and NetworkScan Free forever, trials for other tools, then Annual or Perpetual Full licenses.",
};

const licenseSteps = [
  {
    title: "Download & install",
    body: "Get the Windows Setup from the product page or GitHub releases. BootP and NetworkScan Free are permanent; other paid products start in trial.",
  },
  {
    title: "Copy Machine ID",
    body: "Open Settings → License in the app and copy the Machine ID for that PC.",
  },
  {
    title: "Request a license",
    body: "Select a Full SKU below and submit the form. We follow up with payment instructions.",
  },
  {
    title: "Activate offline",
    body: "After payment, we send your offline license key. Paste it in the app—no cloud account required.",
  },
];

export default function SoftwarePricingPage() {
  const freeProducts = softwareProducts.filter(
    (product) => !product.comingSoon && (product.isFree || product.freeForever),
  );
  const paidProducts = softwareProducts.filter(
    (product) => !product.comingSoon && product.pricingSkuIds.length > 0,
  );
  const bundleAnnual = getPricingSku("desktop-bundle-annual");
  const bundlePerpetual = getPricingSku("desktop-bundle-perpetual");

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple licenses for plant PCs"
        lede="Download every Konnect installer today. BootP is free. NetworkScan Free covers scan and results forever—upgrade to Full for Map, Sites, and reports. Other tools include a trial before Full."
      />

      <section className="section pt-0">
        <div className="site-wrap space-y-4">
          {freeProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 50}>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-success/30 bg-white px-6 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-success">
                    {product.isFree ? "Free forever" : "Free forever · Full upgrade available"}
                  </p>
                  <h2 className="mt-2 text-2xl">{product.name}</h2>
                  <p className="mt-1 max-w-2xl text-sm text-muted">{product.trialNotes}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={product.downloadUrl} className="btn btn-primary">
                    {product.downloadLabel}
                  </a>
                  <Link href={`/products/software/${product.slug}`} className="btn btn-secondary">
                    Details
                  </Link>
                  {product.pricingSkuIds.length > 0 ? (
                    <Link
                      href={`/products/software/pricing?sku=${product.pricingSkuIds[0]}#license-request`}
                      className="btn btn-secondary"
                    >
                      Upgrade to Full
                    </Link>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <p className="eyebrow">Full licenses</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Annual or perpetual Full seats</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {paidProducts.map((product, index) => {
              const annual = product.pricingSkuIds
                .map((id) => getPricingSku(id))
                .find((sku) => sku?.term === "annual");
              const perpetual = product.pricingSkuIds
                .map((id) => getPricingSku(id))
                .find((sku) => sku?.term === "perpetual");

              return (
                <Reveal key={product.slug} delay={index * 60}>
                  <article className="h-full rounded-xl border border-silver/70 bg-white p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl">{product.name}</h3>
                        <p className="mt-2 text-sm text-muted">{product.trialNotes}</p>
                      </div>
                      <Link
                        href={`/products/software/${product.slug}`}
                        className="text-sm font-semibold text-royal hover:underline"
                      >
                        Details →
                      </Link>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {annual ? (
                        <div className="rounded-lg bg-mist px-4 py-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-royal">
                            Annual Full
                          </p>
                          <p className="mt-2 text-3xl font-semibold text-navy">
                            {formatUsd(annual.priceUsd)}
                          </p>
                          <Link
                            href={`/products/software/pricing?sku=${annual.id}#license-request`}
                            className="btn btn-secondary mt-4 w-full"
                          >
                            Select
                          </Link>
                        </div>
                      ) : null}
                      {perpetual ? (
                        <div className="rounded-lg border border-royal/25 bg-white px-4 py-4 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-royal">
                            Perpetual Full
                          </p>
                          <p className="mt-2 text-3xl font-semibold text-navy">
                            {formatUsd(perpetual.priceUsd)}
                          </p>
                          <Link
                            href={`/products/software/pricing?sku=${perpetual.id}#license-request`}
                            className="btn btn-primary mt-4 w-full"
                          >
                            Select
                          </Link>
                        </div>
                      ) : null}
                    </div>
                    <a
                      href={product.downloadUrl}
                      className="mt-4 inline-flex text-sm font-semibold text-royal hover:underline"
                    >
                      {product.freeForever ? "Download Free →" : "Download trial →"}
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <article className="rounded-xl bg-gradient-to-br from-navy via-[#14325c] to-royal px-6 py-8 text-white sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-silver">
                Best value
              </p>
              <h2 className="mt-3 text-3xl text-white">{desktopBundle.name}</h2>
              <p className="mt-3 max-w-2xl text-silver">{desktopBundle.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {desktopBundle.includes.map((slug) => {
                  const product = getSoftwareProduct(slug);
                  return product ? (
                    <li
                      key={slug}
                      className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold"
                    >
                      {product.shortName}
                    </li>
                  ) : null;
                })}
              </ul>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:max-w-xl">
                {bundleAnnual ? (
                  <div className="rounded-lg bg-white/10 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-silver">Annual</p>
                    <p className="mt-2 text-3xl font-semibold">{formatUsd(bundleAnnual.priceUsd)}</p>
                    <p className="mt-1 text-xs text-silver line-through">
                      {formatUsd(desktopBundle.separateAnnualTotal)} separately
                    </p>
                    <Link
                      href={`/products/software/pricing?sku=${bundleAnnual.id}#license-request`}
                      className="btn mt-4 w-full border border-white/35 text-white hover:bg-white/10"
                    >
                      Select bundle
                    </Link>
                  </div>
                ) : null}
                {bundlePerpetual ? (
                  <div className="rounded-lg bg-white px-4 py-4 text-navy">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-royal">
                      Perpetual
                    </p>
                    <p className="mt-2 text-3xl font-semibold">
                      {formatUsd(bundlePerpetual.priceUsd)}
                    </p>
                    <p className="mt-1 text-xs text-muted line-through">
                      {formatUsd(desktopBundle.separatePerpetualTotal)} separately
                    </p>
                    <Link
                      href={`/products/software/pricing?sku=${bundlePerpetual.id}#license-request`}
                      className="btn btn-primary mt-4 w-full"
                    >
                      Select bundle
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="site-wrap">
          <Reveal>
            <p className="eyebrow">How licensing works</p>
            <h2 className="mt-3 text-3xl">Four steps to a Full seat</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {licenseSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 60}>
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
        <div className="site-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <h2 className="text-2xl">Payment & fulfillment</h2>
              <p className="mt-3 text-muted">
                Checkout is manual for now: submit the request, we invoice or arrange payment, then
                issue node-locked offline keys with Konnect License Gen. Online card checkout can be
                added later without changing these SKUs.
              </p>
              <p className="mt-4 text-sm text-muted">
                Bundle purchases receive one key per included product for the same Machine ID.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Suspense fallback={<div className="metallic-panel rounded-xl p-8">Loading form…</div>}>
              <LicenseRequestForm />
            </Suspense>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Questions before you buy?"
        body="Ask about volume seats, plant-wide OEE licensing, or pairing software with a commissioning engagement."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/products/software"
        secondaryLabel="Back to suite"
      />
    </>
  );
}
