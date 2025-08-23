// website/securitydrones-info-site/src/components/Navbar.jsx
// /src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-primary/80 backdrop-blur border-b border-secondary/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo only (no text) */}
        <a href="#top" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="SecurityDrones.ai"
            className="h-5 w-auto"
          />
        </a>

        <div className="flex items-center gap-6">
          <a href="#services" className="text-white/80 hover:text-white text-sm">Services</a>
          <a href="#about" className="text-white/80 hover:text-white text-sm">About</a>
          <a href="#contact" className="text-white/80 hover:text-white text-sm">Contact</a>
          <a
            href="#book"
            className="inline-flex items-center rounded-full bg-[#9BC0E6] px-4 py-2 text-sm font-medium text-black hover:bg-[#86B2E0] transition-colors"
          >
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  );
}
