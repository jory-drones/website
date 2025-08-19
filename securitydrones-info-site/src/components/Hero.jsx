// website/securitydrones-info-site/src/components/HeroSplit.jsx
import React from "react";

export default function HeroSplit() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundImage: "url(/assets/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 35%",
      }}
    >
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left card */}
          <div className="rounded-2xl bg-secondary/40 border border-white/10 p-6 sm:p-8">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">
              The Only Fully<br />Autonomous AI<br />Drone Security<br />System
            </h1>
            <p className="mt-4 text-white/80 text-sm sm:text-base">
              Outside security and insights for large commercial, industrial, and residential
              properties.
            </p>
            <p className="mt-2 text-white/70 text-sm sm:text-base">
              Step into the future with our cutting‑edge technology solution that redefines the
              boundaries of innovation.
            </p>
            <p className="mt-2 text-white/70 text-sm sm:text-base">
              Experience unparalleled advancements that empower you to navigate the digital landscape
              with more ease than ever before.
            </p>
          </div>

          {/* Right drone image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/bee-3q.png"
              alt="The Bee drone"
              className="w-full max-w-2xl drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* tiny glyph divider (optional) */}
        <div className="mt-6 flex justify-center">
          <img src="/assets/bee-glyph.svg" alt="" className="h-5 opacity-70" onError={(e)=>{e.currentTarget.style.display='none'}} />
        </div>
      </div>
    </section>
  );
}
