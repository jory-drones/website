// /src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary py-12 border-t border-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Brand / left */}
        <div>
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="SecurityDrones.ai" className="h-6 w-auto" />
            <span className="font-display tracking-wide">SECURITYDRONES.AI</span>
          </div>
          <p className="mt-4 text-white/70">
            Next-generation autonomous security
            <br />
            Powered by Sunflower Labs
          </p>
        </div>

        {/* Contact / right */}
        <div className="text-left md:text-right">
          <h3 className="font-display text-white">Contact Us</h3>
          <p className="mt-2 text-white/70">San Francisco, CA</p>
          <p className="mt-1 text-white/70">(424) 241-2216</p>
        </div>
      </div>

      <div className="mt-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} SecurityDrones.ai — All rights reserved.
      </div>
    </footer>
  );
}
