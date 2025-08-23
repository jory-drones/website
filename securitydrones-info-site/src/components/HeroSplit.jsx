// src/components/HeroSplit.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HeroSplit() {
  return (
    <header className="relative overflow-hidden bg-[url('/assets/hero-bg.png')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: copy card */}
          <motion.div
            className="bg-white/10 backdrop-blur rounded-3xl p-8 sm:p-10 border border-white/15"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl leading-tight">
              Fully Autonomous
              <br /> Drone Security
              <br /> System
            </h1>

            <p className="mt-6 text-white/80 max-w-prose">
              AI security and data insights for large commercial, industrial &amp;
              residential properties.
            </p>
          </motion.div>

          {/* Right: hero drone — angled 3/4 image */}
          <motion.img
            src="/assets/bee-3q.png"
            alt="Autonomous security drone"
            className="w-full max-w-[720px] mx-auto drop-shadow-xl pointer-events-none select-none"
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            loading="eager"
          />
        </div>

        {/* scroll hint */}
        <div className="mt-10 text-center">
          <p className="text-white/70">See How It Works</p>
          <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
        </div>
      </div>
    </header>
  );
}
