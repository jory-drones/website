// website/securitydrones-info-site/src/components/BeeSection.jsx
// /src/components/BeeSection.jsx
import React from "react";

export default function BeeSection() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left: image */}
        <div>
          <img
            src="/assets/bee-3q.png"
            alt="The Bee autonomous drone"
            className="w-full max-w-[600px] mx-auto"
            loading="lazy"
          />
        </div>

        {/* Right: text */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">The Bee</h2>
          <p className="mt-3 text-white/80 max-w-prose">
            Lightweight. Autonomous. Reliable. Designed for safety and
            performance, The Bee combines advanced autonomy with high‑quality
            video capture and precision landing for unmatched reliability in
            real‑world environments.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="font-display text-lg">Key Specifications</h3>
              <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
                <li>Weight: 3.1 lb (battery included)</li>
                <li>Size: 11 x 11 x 8 in</li>
                <li>Cruise Speed: 30 mph</li>
                <li>Flight Time: 15 minutes (+ safety reserve)</li>
                <li>Battery: 4000mAh (11:1 flight‑to‑recharge)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg">Performance</h3>
              <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
                <li>Wind Resistance: 20 mph</li>
                <li>Gust Resistance: 30 mph</li>
                <li>Hover Accuracy: within 1 foot</li>
                <li>Operating Temp: -10°C to +40°C (14°F to 104°F)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg">Technology</h3>
              <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
                <li>GPS: Multi‑band RTK for precise positioning</li>
                <li>Camera: Sony IMX385 low‑light sensor</li>
                <li>Resolution: 1080p HD @ 25 fps</li>
                <li>Field of View: 100° horizontal, 50° vertical</li>
                <li>Video Latency: ~250 ms</li>
                <li>Transmission Range: 2,000 ft</li>
                <li>Obstacle Detection: 20 ft</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
