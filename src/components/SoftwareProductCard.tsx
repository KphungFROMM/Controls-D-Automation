import Image from "next/image";
import Link from "next/link";
import type { SoftwareProduct } from "@content/software";
import { formatUsd, getSkusForProduct } from "@content/software";

export function SoftwareProductCard({ product }: { product: SoftwareProduct }) {
  const skus = getSkusForProduct(product.slug);
  const fromPrice = skus.length
    ? Math.min(...skus.map((sku) => sku.priceUsd))
    : null;

  return (
    <article className="flex h-full flex-col rounded-xl border border-silver/70 bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-royal">
            {product.isFree ? "Free" : "Trial available"}
          </p>
          <h3 className="mt-2 text-2xl">{product.name}</h3>
        </div>
        <Image
          src="/software/branding/logo-mark.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </div>
      <p className="mt-3 text-sm text-muted">{product.tagline}</p>
      <p className="mt-3 flex-1 text-sm text-navy/80">{product.summary}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link href={`/products/software/${product.slug}`} className="btn btn-secondary">
          Details
        </Link>
        {product.isFree ? (
          <a href={product.downloadUrl} className="text-sm font-semibold text-royal hover:underline">
            Download free →
          </a>
        ) : (
          <Link
            href={`/products/software/pricing?sku=${product.pricingSkuIds[0] ?? ""}`}
            className="text-sm font-semibold text-royal hover:underline"
          >
            {fromPrice != null ? `From ${formatUsd(fromPrice)}` : "View pricing"} →
          </Link>
        )}
      </div>
    </article>
  );
}
