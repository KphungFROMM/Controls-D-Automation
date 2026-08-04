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
    <header className="nav-enter sticky top-0 z-50 border-b border-white/10 bg-navy text-white shadow-[0_1px_0_rgba(0,0,0,0.25)]">
      <div className="border-b border-white/10 bg-navy">
        <div className="site-wrap flex flex-wrap items-center justify-between gap-2 py-1.5 text-xs sm:text-sm">
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

      <div className="site-wrap flex items-center gap-2 py-2.5 md:gap-3 lg:py-3">
        <Link
          href="/"
          className="flex shrink-0 items-center bg-transparent"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/branding/logo.png"
            alt={`${site.name} logo`}
            width={999}
            height={271}
            className="h-16 w-auto bg-transparent sm:h-[4.5rem] lg:h-20"
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
                      ? "bg-white/15 text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
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
            href="/quote"
            className="btn btn-primary hidden px-3 py-2 text-xs whitespace-nowrap sm:inline-flex lg:px-3.5 lg:py-2.5 lg:text-sm"
          >
            Request a quote
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-white/30 bg-white/10 px-3 py-2 text-sm font-semibold text-white lg:hidden"
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
          className="max-h-[calc(100vh-8rem)] overflow-y-auto border-t border-white/10 bg-navy lg:hidden"
        >
          <nav className="site-wrap flex flex-col py-2" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b border-white/10 px-1 py-3 text-base font-medium ${
                  isActive(link.href) ? "text-white" : "text-white/80"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="btn btn-primary mt-4"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
