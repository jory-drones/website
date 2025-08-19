// website/securitydrones-info-site/src/components/BeeSection.jsx
import React from "react";

export default function BeeSection() {
  return (
    <section id="bee" className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        <img
  src="/assets/bee-front.png"
  alt="Autonomous security drone"
  className="w-full max-w-2xl mx-auto"
  loading="eager"
        />
        <h2 className="mt-6 font-display text-2xl sm:text-3xl">The Bee</h2>
        <p className="mt-2 text-white/70 text-[13px]">
          Outside security and insights for large commercial, industrial, and residential
          properties.
        </p>
      </div>
    </section>
  );
}
