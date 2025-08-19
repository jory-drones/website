// website/securitydrones-info-site/src/components/Navbar.jsx
import React from "react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-primary/80 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-14 sm:h-16 flex items-center justify-between">
          {/* Left: logo + links */}
          <div className="flex items-center gap-6">
            <a href="#top" className="shrink-0" aria-label="SecurityDrones.ai">
              <img src="/assets/logo.png" alt="SecurityDrones.ai" className="h-5 sm:h-6 w-auto" />
            </a>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-white/80 hover:text-white font-body transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: CTA */}
          <a
            href="#book"
            className="rounded-full px-4 py-2 bg-blue text-black font-display text-sm hover:brightness-110 transition"
          >
            Book a demo
          </a>
        </div>
      </div>
    </header>
  );
}
