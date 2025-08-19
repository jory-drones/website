// src/components/HeroSplit.jsx
import React from "react";

export default function HeroSplit() {
  return (
    <header
      id="top"
      className="relative isolate overflow-hidden bg-[#0b1420] text-white"
    >
      {/* background graphic */}
      <img
        src="/assets/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none select-none"
        loading="eager"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:py-28">
        {/* LEFT: copy card */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 backdrop-blur">
            <img
              src="/assets/bee-glyph.png"
              alt=""
              className="h-5 w-5 opacity-80"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span className="text-xs/5 tracking-wide text-white/80">
              SECURITYDRONES.AI
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Replace guesswork with{" "}
            <span className="text-[#5EE1FF]">always‑on aerial security</span>
          </h1>

          <p className="mt-5 max-w-xl text-white/70">
            AI‑powered patrols, thermal detection and instant alerts covering
            large sites at a fraction of traditional costs.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-[#9EC1E6] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#b6d0ed]"
            >
              Book a demo
            </a>
            <a
              href="#roi"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              See your ROI
            </a>
          </div>
        </div>

        {/* RIGHT: hero image */}
        <div className="mx-auto mt-14 w-full max-w-xl lg:mt-0 lg:max-w-none lg:flex-1">
          <img
            src="/assets/bee-3q.png"
            alt="Autonomous security drone"
            className="mx-auto block w-full max-w-2xl drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}
