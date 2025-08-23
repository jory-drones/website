// /src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: logo + tagline */}
          <div className="space-y-4">
            {/* Logo only (no redundant wordmark) */}
            <img src="/assets/logo.png" alt="SecurityDrones.ai" className="h-7 w-auto" />
            <p className="text-white/70">
              Next‑generation autonomous security
            </p>
            <div className="pt-1">
              <p className="text-xs text-white/50">Powered by</p>
              <img src="/assets/app-icon.png" alt="Sunflower Labs" className="h-6 w-auto opacity-80 mt-1" />
            </div>
          </div>

          {/* Right: contact */}
          <div className="md:text-right">
            <h3 className="font-display text-xl">Contact Us</h3>
            <div className="mt-2 text-white/80">
              <div>San Francisco, CA</div>
              <div>(424) 241‑2216</div>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} SecurityDrones.ai — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
