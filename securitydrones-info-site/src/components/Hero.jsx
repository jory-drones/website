import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-primary"
      style={{ backgroundImage: "url(/assets/hero-bg.png)", backgroundSize: "cover", backgroundPosition: "50% 35%" }}
    >
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24 text-center">
        <motion.img
          initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/assets/logo.png" alt="SecurityDrones.ai" className="h-10 sm:h-12 mx-auto mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-white"
        >
          Replace guesswork with{" "}
          <span className="block">always‑on aerial security</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/80 max-w-2xl mx-auto"
        >
          AI‑powered patrols, thermal detection, and instant alerts covering large sites at a fraction of traditional costs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6"
        >
          <a href="#book" className="inline-block rounded-full px-5 py-2 bg-secondary text-white/90 hover:text-white hover:bg-secondary/90 ring-1 ring-white/10 transition">
            Book a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
