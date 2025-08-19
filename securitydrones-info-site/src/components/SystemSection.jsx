// website/securitydrones-info-site/src/components/SystemSection.jsx
import React from "react";

export default function SystemSection() {
  return (
    <section id="system" className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* Screenshot */}
        <div>
          <img
            src="/assets/app-ui.png"
            alt="The System UI"
            className="w-full max-w-xl mx-auto rounded-xl ring-1 ring-white/10"
          />
        </div>

        {/* Copy */}
        <div className="text-center lg:text-left">
          <h2 className="font-display text-2xl sm:text-3xl">The System</h2>
          <p className="mt-2 text-white/70 text-[13px] max-w-md mx-auto lg:mx-0">
            Outside security and insights for large commercial, industrial, and residential
            properties.
          </p>
        </div>
      </div>
    </section>
  );
}
