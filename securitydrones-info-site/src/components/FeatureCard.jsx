import React from "react";
import { motion } from "framer-motion";

/**
 * Single capability card (icon + title + body).
 */
function FeatureCard({ Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl bg-white/[0.03] border border-white/15 shadow-inset"
    >
      <div className="mb-4 text-secondary">
        <Icon size={28} />
      </div>
      <h3 className="font-display text-lg mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;
