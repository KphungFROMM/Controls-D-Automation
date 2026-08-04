import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-silver/70 bg-navy text-white">
      <div className="site-wrap grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
            {site.name}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-silver">
            {site.tagline}
          </p>
          <p className="mt-4 text-xs text-steel">{site.socialNote}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-silver">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-silver">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            <li>
              <a href={`tel:${site.contact.phone}`}>{site.contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>{site.contact.hours}</li>
            <li>
              {site.contact.addressLine1}
              <br />
              {site.contact.addressLine2}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-wrap flex flex-col gap-2 py-4 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>PLC · HMI · SCADA · Rockwell · GE · Keyence</p>
        </div>
      </div>
    </footer>
  );
}
