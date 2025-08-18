import React from "react";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-primary/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Tabs */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Book button + Logo */}
          <div className="flex items-center gap-4">
            <a
              href="#book"
              className="hidden sm:inline-block rounded-full px-4 py-2 bg-blue text-black font-display text-sm hover:brightness-110 transition"
            >
              Book a demo
            </a>
            <a href="#top" className="shrink-0">
              <img src="/assets/logo.png" alt="SecurityDrones.ai" className="h-7 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
