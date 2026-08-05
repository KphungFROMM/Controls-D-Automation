import Image from "next/image";
import Link from "next/link";
import type { SoftwareProduct } from "@content/software";
import { formatUsd, getAccessBadge, getSkusForProduct } from "@content/software";

export function SoftwareProductCard({ product }: { product: SoftwareProduct }) {
  const skus = getSkusForProduct(product.slug);
  const fromPrice = skus.length
    ? Math.min(...skus.map((sku) => sku.priceUsd))
    : null;
  const thumb = product.screenshots[0];
  const showPricingLink = !product.comingSoon && product.pricingSkuIds.length > 0;
  const showDownloadLink =
    !product.comingSoon &&
    Boolean(product.downloadUrl) &&
    (product.isFree || product.freeForever);

  return (
    <article className="metallic-panel flex h-full flex-col overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(11,31,58,0.06)]">
      {thumb ? (
        <div className="relative aspect-[16/10] border-b border-silver/50 bg-mist">
          <Image
            src={thumb.src}
            alt={thumb.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {product.comingSoon ? (
            <span className="absolute left-3 top-3 rounded-md bg-navy/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              Coming soon
            </span>
          ) : null}
        </div>
      ) : (
        <div className="relative flex aspect-[16/10] items-end overflow-hidden bg-gradient-to-br from-navy via-[#14325c] to-royal px-5 py-5">
          <div className="pointer-events-none absolute inset-0 circuit-grid opacity-25" />
          <Image
            src="/software/branding/logo-mark.png"
            alt=""
            width={40}
            height={40}
            className="absolute right-4 top-4 h-10 w-10 object-contain opacity-90"
          />
          {product.comingSoon ? (
            <span className="absolute left-3 top-3 rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              Coming soon
            </span>
          ) : null}
          <p className="relative text-lg font-semibold text-white">{product.shortName}</p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-royal">
          {getAccessBadge(product)}
        </p>
        <h3 className="mt-2 text-2xl">{product.name}</h3>
        <p className="mt-3 text-sm text-muted">{product.tagline}</p>
        <p className="mt-3 flex-1 text-sm text-navy/80">{product.summary}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link href={`/products/software/${product.slug}`} className="btn btn-secondary">
            Details
          </Link>
          {showDownloadLink ? (
            <a
              href={product.downloadUrl}
              className="text-sm font-semibold text-royal hover:underline"
            >
              {product.freeForever && !product.isFree ? "Download Free →" : "Download free →"}
            </a>
          ) : null}
          {product.comingSoon ? (
            <Link href="/contact" className="text-sm font-semibold text-royal hover:underline">
              Ask about early access →
            </Link>
          ) : null}
          {showPricingLink ? (
            <Link
              href={`/products/software/pricing?sku=${product.pricingSkuIds[0] ?? ""}`}
              className="text-sm font-semibold text-royal hover:underline"
            >
              {fromPrice != null ? `Full from ${formatUsd(fromPrice)}` : "View pricing"} →
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
