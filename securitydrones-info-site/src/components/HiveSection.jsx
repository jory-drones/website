// website/securitydrones-info-site/src/components/HiveSection.jsx
// /src/components/HiveSection.jsx
import React from "react";

export default function HiveSection() {
  return (
    <section id="hive" className="bg-primary py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-2xl text-white">The Hive</h2>
        <p className="mt-2 text-white/70 max-w-3xl mx-auto text-sm">
          Brains. Charging. Control. More than a dock—it manages processing, charging, and
          mission automation for reliable autonomous operation.
        </p>

        <img
          src="/assets/hive-open.png"
          alt="The Hive open dock"
          className="w-[520px] max-w-full mx-auto mt-6"
          loading="lazy"
        />

        {/* Accordion */}
        <details className="mt-5 max-w-2xl mx-auto rounded-xl border border-secondary/40 bg-primary-light/40 p-4 text-left">
          <summary className="cursor-pointer list-none font-medium text-white">
            Technical specs
          </summary>
          <ul className="mt-3 list-disc pl-5 text-white/80 text-sm space-y-1">
            <li>Weight: 35 kg</li>
            <li>Runtime on backup battery: 1 hour</li>
            <li>Connectivity: Ethernet + optional 5G/LTE modem</li>
            <li>Power: 110V or 220V AC</li>
            <li>Operating temps: -20°C to 50°C (-4°F to 122°F)</li>
          </ul>
        </details>
      </div>
    </section>
  );
}
