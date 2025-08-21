// src/components/HeroSplit.jsx
import React from "react";

export default function HeroSplit() {
  return (
    <header
      id="top"
      className="relative isolate overflow-hidden text-white"
    >
      {/* Background graphic */}
      <img
        src="/assets/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-80 pointer-events-none select-none"
        loading="eager"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-28 lg:pt-20 lg:pb-36">
        <div className="grid lg:grid-cols-12 items-center gap-y-12 lg:gap-10">
          {/* Left panel (copy) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white/10 backdrop-blur p-6 sm:p-8 lg:p-10 ring-1 ring-white/10">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Fully Autonomous<br />Drone Security<br />System
              </h1>
              <p className="mt-4 text-white/80 text-sm sm:text-base">
                AI security and data insights for large commercial, industrial &amp; residential
                properties.
              </p>
            </div>
          </div>

          {/* Right panel (drone) */}
          <div className="lg:col-span-6">
            <img
              src="/assets/bee-front.png"
              alt="The Bee drone"
              className="w-full max-w-xl mx-auto"
              sizes="(min-width: 1024px) 36rem, 22rem"
            />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-8 flex flex-col items-center">
          <a href="#bee" className="text-white/80 text-xs tracking-wide hover:text-white transition">
            See How It Works
          </a>
          <img
            src="/assets/bee-glyph.png"
            alt=""
            className="mt-2 h-5 w-auto opacity-80"
          />
        </div>
      </div>
    </header>
  );
}
