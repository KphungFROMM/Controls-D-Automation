import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-silver/50">
      <div className="absolute inset-0 atmosphere circuit-grid opacity-80" />
      <div className="site-wrap relative py-14 sm:py-16">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
          <p className="lede mt-4">{lede}</p>
        </Reveal>
      </div>
    </section>
  );
}
