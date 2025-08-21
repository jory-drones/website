// website/securitydrones-info-site/src/components/BeeSection.jsx
// /src/components/BeeSection.jsx
import React from "react";

export default function BeeSection() {
  return (
    <section id="bee" className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <img
              src="/assets/bee-3q.png"
              alt="The Bee"
              className="w-full max-w-xl mx-auto"
            />
          </div>

          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl">The Bee</h2>
            <p className="mt-1 text-white/70">Lightweight. Autonomous. Reliable.</p>

            <p className="mt-4 text-white/80 text-sm">
              Designed for safety and performance, The Bee combines autonomous
              inspection, fast response, and high‑quality video delivery. Multiple
              redundancy systems and onboard intelligence provide reliability in real‑world environments.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-white/90">Key Specifications</h3>
                <ul className="mt-2 space-y-1 text-white/70 text-sm">
                  <li>• Weight: ~1.8 kg</li>
                  <li>• Flight Time: ~18 min</li>
                  <li>• Max Speed: ~14 m/s</li>
                  <li>• Wind Resistance: ~10 m/s</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-white/90">Operating</h3>
                <ul className="mt-2 space-y-1 text-white/70 text-sm">
                  <li>• Accuracy with RTK GNSS</li>
                  <li>• Operating temps: -10°C to 40°C</li>
                  <li>• Obstacle detection 360°</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-white/90">Technology</h3>
              <ul className="mt-2 space-y-1 text-white/70 text-sm">
                <li>• RTK GNSS for precise positioning</li>
                <li>• Onboard compute for autonomy &amp; video</li>
                <li>• Secure comms, API‑ready</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
