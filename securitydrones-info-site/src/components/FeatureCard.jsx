import React from 'react';
import { motion } from 'framer-motion';

/**
 * A reusable card component for highlighting a single feature of the
 * SecurityDrones.ai platform. Each card accepts an icon, a title and
 * a description. Motion effects provide a subtle entrance animation
 * and a scale effect on hover.
 */
function FeatureCard({ Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-xl bg-primary-light border border-secondary flex flex-col items-start shadow-lg"
    >
      <div className="mb-4 text-secondary">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-heading mb-2">{title}</h3>
      <p className="text-white/80 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;