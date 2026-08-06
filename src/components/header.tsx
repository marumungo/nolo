"use client";

import Link from "next/link";
import { useState } from "react";
import LogoMark from "./logo-mark";

const links = [
  { href: "/tienda", label: "Tienda" },
  { href: "/probar-en-tu-espacio", label: "Probá en tu espacio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-nolo-paper/90 backdrop-blur">
      <div className="h-[3px] bg-nolo-blue" />
      <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-nolo-line px-6 py-4 md:px-10">
        <Link href="/" onClick={() => setOpen(false)}>
          <LogoMark className="h-8 w-auto md:h-9" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/70 transition-colors hover:text-nolo-blue"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/nolo.mobiliario"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-nolo-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:border-nolo-blue hover:text-nolo-blue"
          >
            @nolo.mobiliario
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-nolo-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-nolo-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-nolo-line px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-nolo-line py-3 font-mono text-xs uppercase tracking-[0.14em] text-nolo-ink/80"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/nolo.mobiliario"
            target="_blank"
            rel="noreferrer"
            className="py-3 font-mono text-xs uppercase tracking-[0.14em] text-nolo-blue"
          >
            @nolo.mobiliario
          </a>
        </nav>
      )}
    </header>
  );
}
