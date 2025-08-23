// /src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary py-10 border-t border-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: logo + tagline (no brand text) */}
        <div>
          <img src="/assets/logo.png" alt="SecurityDrones.ai" className="h-6 w-auto" />
          <p className="mt-3 text-white/70 text-sm">
            Next‑generation autonomous security
            <br />
            Powered by Sunflower Labs
          </p>
        </div>

        {/* Right: minimal contact */}
        <div id="contact" className="text-left md:text-right">
          <h3 className="font-display text-white text-base">Contact Us</h3>
          <p className="mt-1 text-white/70 text-sm">San Francisco, CA</p>
          <p className="mt-1 text-white/70 text-sm">(424) 241-2216</p>
        </div>
      </div>

      <div className="mt-8 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} SecurityDrones.ai — All rights reserved.
      </div>
    </footer>
  );
}
