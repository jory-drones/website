// website/securitydrones-info-site/src/components/HiveSection.jsx
// /src/components/HiveSection.jsx
import React from "react";

export default function HiveSection() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Text first on large screens */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <h2 className="font-display text-3xl">The Hive</h2>
            <p className="mt-1 text-white/70">Brains. Charging. Control.</p>

            <p className="mt-4 text-white/80 text-sm">
              The Hive is more than a charging station — it’s the command center of the system,
              processing and analyzing data with embedded AI, coordinating secure operations and
              enabling continuous performance in the field.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-white/90">Key Specifications</h3>
                <ul className="mt-2 space-y-1 text-white/70 text-sm">
                  <li>• Weight: ~35 kg</li>
                  <li>• Dimensions: ~91 × 77 × 38 cm</li>
                  <li>• Power Supply: 110V or 220V AC</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-white/90">Connectivity</h3>
                <ul className="mt-2 space-y-1 text-white/70 text-sm">
                  <li>• Ethernet by default</li>
                  <li>• Optional 5G/LTE modem</li>
                  <li>• Operating temp: -20°C to 50°C</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <img
              src="/assets/hive-open.png"
              alt="The Hive dock"
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
