"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const links = [{ href: "/", label: "Home" }, ...navLinks];

  return (
    <header className="nav-enter sticky top-0 z-50 border-b border-silver/60 bg-white/95 shadow-[0_1px_0_rgba(11,31,58,0.04)] backdrop-blur-md">
      <div className="border-b border-silver/40 bg-navy text-white">
        <div className="container flex flex-wrap items-center justify-between gap-2 py-1.5 text-xs sm:text-sm">
          <p className="text-silver">PLC · HMI · SCADA · Rockwell · GE · Keyence</p>
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <a href={`tel:${site.contact.phone}`} className="hover:text-white">
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="hover:text-white">
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container flex items-center gap-2 py-2.5 md:gap-3 lg:py-3">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/branding/logo.png"
            alt={`${site.name} logo`}
            width={420}
            height={140}
            className="h-16 w-auto sm:h-[4.5rem] lg:h-20"
            priority
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end lg:flex"
          aria-label="Primary"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-flex items-center rounded px-1.5 py-1.5 text-[0.78rem] font-semibold transition lg:px-2 lg:text-[0.82rem] ${
                    isActive(link.href)
                      ? "bg-mist text-navy"
                      : "text-navy/75 hover:bg-mist hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-2">
          <Link
            href="/contact"
            className="btn btn-primary hidden px-3 py-2 text-xs whitespace-nowrap sm:inline-flex lg:px-3.5 lg:py-2.5 lg:text-sm"
          >
            Request a consultation
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-navy/20 px-3 py-2 text-sm font-semibold text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100vh-8rem)] overflow-y-auto border-t border-silver/60 bg-white lg:hidden"
        >
          <nav className="container flex flex-col py-2" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b border-mist px-1 py-3 text-base font-medium ${
                  isActive(link.href) ? "text-royal" : "text-navy"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary mt-4"
              onClick={() => setOpen(false)}
            >
              Request a consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
