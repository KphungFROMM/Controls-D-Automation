import Image from "next/image";
import Link from "next/link";
import type { SoftwareProduct } from "@content/software";
import { formatUsd, getAccessBadge, getSkusForProduct } from "@content/software";
import { Reveal } from "@/components/Reveal";

type Props = {
  product: SoftwareProduct;
};

export function SoftwareProductHero({ product }: Props) {
  const skus = getSkusForProduct(product.slug);
  const fromPrice = skus.length ? Math.min(...skus.map((sku) => sku.priceUsd)) : null;
  const pricingHref = product.isFree
    ? "/products/software/pricing"
    : `/products/software/pricing?sku=${product.pricingSkuIds[0] ?? ""}`;
  const shot = product.screenshots[0];

  return (
    <section className="relative overflow-hidden border-b border-silver/50">
      <div className="absolute inset-0 atmosphere circuit-grid opacity-80" />
      <div className="site-wrap relative py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <Link
              href="/products/software"
              className="text-sm font-semibold text-royal hover:underline"
            >
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
                {getAccessBadge(product)} · {product.platform}
                {product.comingSoon ? "" : ` · v${product.version}`}
              </p>
            </div>
            <h1 className="mt-3 max-w-xl text-4xl sm:text-5xl">{product.name}</h1>
            <p className="mt-3 text-lg font-medium text-navy">{product.tagline}</p>
            <p className="lede mt-4 max-w-xl">{product.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {product.comingSoon ? (
                <>
                  <Link href="/contact" className="btn btn-primary">
                    Ask about early access
                  </Link>
                  <Link href="/products/software" className="btn btn-secondary">
                    Browse suite
                  </Link>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-xl border border-silver/60 bg-navy shadow-[0_20px_50px_rgba(11,31,58,0.18)]">
              <div className="pointer-events-none absolute inset-0 circuit-grid opacity-20" />
              {shot ? (
                <div className="relative aspect-[16/10]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    priority
                    className="hero-media object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="relative flex aspect-[16/10] flex-col justify-end bg-gradient-to-br from-navy via-[#14325c] to-royal p-8">
                  <Image
                    src="/software/branding/logo-mark.png"
                    alt=""
                    width={64}
                    height={64}
                    className="mb-auto h-14 w-14 object-contain opacity-90"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-silver">
                    {product.shortName}
                  </p>
                  <p className="mt-2 max-w-xs text-2xl font-semibold text-white">{product.tagline}</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
