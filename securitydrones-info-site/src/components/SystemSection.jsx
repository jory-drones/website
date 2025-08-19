// website/securitydrones-info-site/src/components/SystemSection.jsx
import React from "react";

export default function SystemSection() {
  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        <h2 className="font-display text-3xl text-white">The System</h2>
        <p className="mt-2 text-white/70">
          Outside security and insights for large commercial, industrial, and residential properties.
        </p>
        <div className="mt-8">
          <img
            src="/assets/app-ui.png"
            alt="Drone system interface"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
