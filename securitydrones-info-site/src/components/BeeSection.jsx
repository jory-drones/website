// website/securitydrones-info-site/src/components/BeeSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function BeeSection() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <motion.h2
          className="font-display text-3xl sm:text-4xl text-white"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Bee
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-3xl mx-auto">
          Outside security and insights for large commercial, industrial, and residential properties.
        </p>

        {/* BEE: front view */}
        <motion.img
          src="/assets/bee-front.png"
          alt="The Bee front view"
          className="mt-8 w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  );
}
