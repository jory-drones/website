import React from "react";
import { motion } from "framer-motion";

export default function HeroSplit() {
  return (
    <section className="relative bg-[url('/assets/hero-bg.png')] bg-cover bg-center">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 pt-28 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-primary/60 backdrop-blur-md p-8 sm:p-10 border border-white/10"
          >
            <h1 className="text-white font-display text-4xl sm:text-5xl leading-tight">
              Fully Autonomous<br />Drone Security<br />System
            </h1>
            <p className="mt-6 text-white/80">
              AI security and data insights for large commercial, industrial &amp; residential properties.
            </p>
          </motion.div>

          {/* HERO: 3/4 view */}
          <motion.img
            src="/assets/bee-3q.png"
            alt="The Bee drone"
            className="w-full h-auto drop-shadow-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
        </div>

        <div className="mt-10 text-center">
          <span className="text-white/80">See How It Works</span>
          <div className="mx-auto mt-3 h-[2px] w-24 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </div>
      </div>
    </section>
  );
}
