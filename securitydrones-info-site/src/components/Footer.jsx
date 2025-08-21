// /src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 border-t border-white/10">
        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <img src="/assets/logo.png" alt="" className="h-5 w-auto opacity-90" />
              <span className="font-semibold tracking-wide">SECURITYDRONES.AI</span>
            </div>
            <p className="mt-3 text-white/60 text-sm">
              Next‑generation autonomous security<br />
              Powered by <span className="opacity-90">Sunflower Labs</span>
            </p>
          </div>

          <div className="sm:text-right">
            <h3 className="font-display text-xl">Contact Us</h3>
            <p className="mt-2 text-white/70 text-sm">
              San Francisco, CA<br />
              Jory Zemanek<br />
              <a className="underline hover:text-white" href="mailto:hello@securitydrones.ai">
                hello@securitydrones.ai
              </a><br />
              (424) 241‑2216
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} SecurityDrones.ai — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
