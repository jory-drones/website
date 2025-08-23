// website/securitydrones-info-site/src/components/BeeSection.jsx
// /src/components/BeeSection.jsx
import React from "react";

export default function BeeSection() {
  return (
    <section id="drone" className="bg-primary py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <img
          src="/assets/bee-3q.png"
          alt="The Bee drone"
          className="w-[540px] max-w-full mx-auto"
          loading="lazy"
        />

        <h2 className="mt-6 font-display text-white text-2xl">The Bee</h2>
        <p className="mt-2 text-white/70 max-w-2xl mx-auto text-sm">
          Outside security and insights for large commercial, industrial, and residential properties.
        </p>

        {/* Accordion */}
        <details className="mt-5 max-w-2xl mx-auto rounded-xl border border-secondary/40 bg-primary-light/40 p-4 text-left">
          <summary className="cursor-pointer list-none font-medium text-white">
            Technical specs
          </summary>
          <ul className="mt-3 list-disc pl-5 text-white/80 text-sm space-y-1">
            <li>Weight: 1.8 kg</li>
            <li>Flight time: ~15–18 min</li>
            <li>Wind resistance: 20 mph</li>
            <li>Operating temps: -10°C to 40°C (14°F to 104°F)</li>
            <li>Obstacle detection: 20 m</li>
          </ul>
        </details>
      </div>
    </section>
  );
}
