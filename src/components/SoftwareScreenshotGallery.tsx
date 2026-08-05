import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Shot = { src: string; alt: string };

export function SoftwareScreenshotGallery({ screenshots }: { screenshots: Shot[] }) {
  if (screenshots.length === 0) return null;

  const [primary, ...rest] = screenshots;

  return (
    <section className="section pt-0">
      <div className="site-wrap">
        <Reveal>
          <p className="eyebrow">Product views</p>
          <h2 className="mt-3 text-3xl">See it in the plant</h2>
        </Reveal>

        <Reveal delay={60}>
          <figure className="mt-8 overflow-hidden rounded-xl border border-silver/70 bg-white shadow-[0_14px_40px_rgba(11,31,58,0.08)]">
            <div className="relative aspect-[16/9] bg-mist">
              <Image
                src={primary.src}
                alt={primary.alt}
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
            <figcaption className="border-t border-silver/50 px-4 py-3 text-sm text-muted">
              {primary.alt}
            </figcaption>
          </figure>
        </Reveal>

        {rest.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((shot, index) => (
              <Reveal key={shot.src} delay={80 + index * 40}>
                <figure className="overflow-hidden rounded-lg border border-silver/70 bg-white shadow-sm">
                  <div className="relative aspect-[16/10] bg-mist">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-xs text-muted">{shot.alt}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
