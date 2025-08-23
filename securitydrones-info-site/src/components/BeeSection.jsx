// website/securitydrones-info-site/src/components/BeeSection.jsx
// /src/components/BeeSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function BeeSection() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.img
          src="/assets/bee-front.png"
          alt="The Bee autonomous drone"
          className="w-full max-w-[620px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          loading="lazy"
        />

        <h2 className="mt-10 font-display text-3xl sm:text-4xl">The Bee</h2>
        <p className="mt-3 text-white/70">
          Outside security and insights for large commercial, industrial, and residential properties.
        </p>
      </div>
    </section>
  );
}

