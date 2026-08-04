import Link from "next/link";
import { platforms } from "@content/platforms";

export function PlatformCarousel() {
  const items = [...platforms, ...platforms];

  return (
    <div className="relative overflow-hidden">
      <div className="partner-track flex w-max gap-10 py-2">
        {items.map((platform, index) => (
          <Link
            key={`${platform.slug}-${index}`}
            href="/platforms"
            className="flex min-w-[14rem] items-center justify-center border border-silver/60 bg-white px-8 py-5 text-lg font-semibold tracking-tight text-navy transition hover:border-royal/40"
          >
            {platform.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
