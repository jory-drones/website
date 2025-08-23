// src/components/HeroSplit.jsx
import React from "react";

export default function HeroSplit() {
  return (
    <header id="top" className="relative isolate overflow-hidden bg-[#0b1420] text-white">
      {/* Background image */}
      <img
        src="/assets/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none select-none"
        loading="eager"
      />

      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 p-6 sm:p-7 backdrop-blur">
              <h1 className="font-display text-2xl sm:text-3xl leading-tight">
                The Only Fully{" "}
                <span className="block">Autonomous AI</span>
                <span className="block">Drone Security</span>
                <span className="block">System</span>
              </h1>
              <p className="mt-3 text-white/80 text-sm">
                Outside security and insights for large commercial, industrial, and residential
                properties. Step into the future with our cutting‑edge technology that redefines
                the boundaries of innovation.
              </p>
            </div>
          </div>

          {/* Right image — HERO uses bee-front.png */}
          <div className="lg:col-span-7 flex justify-center">
            <img
              src="/assets/bee-front.png"
              alt="Drone front view"
              className="w-[520px] max-w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </header>
  );
}
