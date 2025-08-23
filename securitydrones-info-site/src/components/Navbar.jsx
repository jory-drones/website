// website/securitydrones-info-site/src/components/Navbar.jsx
// /src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-primary/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo only (no redundant brand text) */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="SecurityDrones.ai"
            className="h-6 w-auto"
          />
        </a>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#system" className="hover:text-white/70">Services</a>
          <a href="#hive" className="hover:text-white/70">About</a>
          <a href="#demo" className="hover:text-white/70">Contact</a>
          <a
            href="#demo"
            className="ml-2 rounded-full bg-white/20 hover:bg-white/30 px-3 py-1.5 font-medium"
          >
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  );
}

