// src/components/HeroSplit.jsx
import React from "react";

export default function HeroSplit() {
  return (
    <header id="top" className="relative isolate overflow-hidden bg-primary text-white pt-14">
      {/* Background network graphic */}
      <img
        src="/assets/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none select-none"
        loading="eager"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left glass card */}
        <div className="max-w-md">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur px-6 py-6 sm:px-8 sm:py-8">
            <h1 className="font-display leading-tight text-2xl sm:text-3xl">
              <span className="block">The Only Fully</span>
              <span className="block">Autonomous AI</span>
              <span className="block">Drone Security</span>
              <span className="block">System</span>
            </h1>

            <p className="mt-4 text-[13px] leading-5 text-white/80">
              Outside security and insights for large commercial, industrial, and
              residential properties.
            </p>
            <p className="mt-3 text-[13px] leading-5 text-white/70">
              Step into the future with our cutting‑edge technology solution that
              redefines the boundaries of innovation.
            </p>
            <p className="mt-3 text-[13px] leading-5 text-white/60">
              Experience unparalleled automation that empowers you to navigate the
              digital landscape like never before.
            </p>
          </div>
        </div>

        {/* Right hero drone */}
        <div className="relative">
          <img
            src="/assets/bee-front.png"
            alt="Autonomous security drone"
            className="w-full max-w-2xl mx-auto"
            loading="eager"
          />
        </div>
      </div>

      {/* Tiny center glyph divider */}
      <div className="relative flex justify-center pb-6">
        <img src="/assets/bee-glyph.png" alt="" className="h-5 opacity-60" />
      </div>
    </header>
  );
}
