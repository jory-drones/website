// website/securitydrones-info-site/src/components/HiveSection.jsx
import React from "react";

export default function HiveSection() {
  return (
    <section id="hive" className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        <h2 className="font-display text-2xl sm:text-3xl">The Hive</h2>
        <p className="mt-2 text-white/70 text-[13px]">
          Outside security and insights for large commercial, industrial, and residential
          properties.
        </p>

        <div className="mt-8">
          <img
            src="/assets/hive-open.png"
            alt="The Hive open dock"
            className="w-full max-w-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
