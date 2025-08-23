// src/components/HeroSplit.jsx
import React from "react";

export default function HeroSplit() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Hero"
      style={{
        backgroundImage: "url('/assets/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left glass card */}
        <div className="bg-white/8 backdrop-blur rounded-3xl border border-white/10 p-8 sm:p-10">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Fully Autonomous<br /> Drone Security<br /> System
          </h1>
          <p className="mt-5 text-white/80 max-w-prose">
            AI security and data insights for large commercial, industrial &
            residential properties.
          </p>
        </div>

        {/* Right drone visual — 3/4 angled image */}
        <div className="relative -mt-4 lg:mt-0">
          <img
            src="/assets/bee-3q.png"
            alt="Autonomous security drone"
            className="w-full max-w-[720px] mx-auto drop-shadow-xl pointer-events-none select-none"
            loading="eager"
          />
        </div>
      </div>

      {/* Micro CTA */}
      <div className="pb-10 sm:pb-12 text-center">
        <a href="#system" className="inline-flex flex-col items-center gap-2">
          <span className="font-display tracking-wide text-white/90">
            See How It Works
          </span>
          <img
            src="/assets/bee-glyph.png"
            alt=""
            className="h-5 w-auto opacity-70"
          />
        </a>
      </div>
    </section>
  );
}
