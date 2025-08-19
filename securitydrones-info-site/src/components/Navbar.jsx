// website/securitydrones-info-site/src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary/70 backdrop-blur border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-white">
        {/* Brand (left) */}
        <a href="#top" className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="SecurityDrones.ai" className="h-5 w-auto" />
          <span className="font-display tracking-[0.2em] text-xs sm:text-sm">
            SECURITYDRONES.AI
          </span>
        </a>

        {/* Links (right) */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a className="hover:text-white/80" href="#bee">Services</a>
          <a className="hover:text-white/80" href="#about">About</a>
          <a className="hover:text-white/80" href="#contact">Contact</a>
          <a
            href="#book"
            className="rounded-full bg-[#9BC1EA] px-4 py-2 font-medium text-black hover:bg-[#86b5e6]"
          >
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  );
}
