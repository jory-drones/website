// website/securitydrones-info-site/src/components/HiveSection.jsx
// /src/components/HiveSection.jsx
import React from "react";

export default function HiveSection() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left: text */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">The Hive</h2>
          <p className="mt-3 text-white/80 max-w-prose">
            Brains. Charging. Control. More than a dock—it manages processing,
            charging, and mission automation for reliable autonomous operation.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="font-display text-lg">Key Specifications</h3>
              <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
                <li>Weight: 35 kg / 77 lb</li>
                <li>Dimensions: 31 x 34 x 35 in</li>
                <li>Power Supply: 110V or 220V AC</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg">Performance</h3>
              <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
                <li>Backup Battery Runtime: 1 hour</li>
                <li>Connectivity: Ethernet + optional 5G/LTE modem</li>
                <li>Operating Temperature: -20°C to +50°C (-4°F to +122°F)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="order-first lg:order-none">
          <img
            src="/assets/hive-open.png"
            alt="The Hive charging and control dock"
            className="w-full max-w-[520px] mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
