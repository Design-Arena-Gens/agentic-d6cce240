import Link from "next/link";
import { navLinks, contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold">Ink & Impact</span>
          <p className="text-sm text-white/60">Conversion copywriting for teams who want clarity, conviction, and conversions.</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-white/50">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-xs uppercase tracking-[0.2em] text-white/50">
          © {new Date().getFullYear()} Ink & Impact. All rights reserved.
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-white/50">
          <Link href={`mailto:${contact.email}`} className="hover:text-white">
            {contact.email}
          </Link>
        </div>
      </div>
    </footer>
  );
}
