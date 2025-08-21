// /src/components/Features.jsx
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard.jsx";

export default function Features() {
  return (
    <section className="bg-white py-20 sm:py-28 relative overflow-hidden">
      {/* Unified animated divider */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ opacity: 0, scaleX: 0.4 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          className="text-center font-display text-2xl sm:text-3xl text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Capabilities
        </motion.h2>

        {/* Grid of feature cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeaturesCard
            title="Autonomous Patrol"
            description="Smart scheduling and AI-driven routes ensure continuous monitoring without manual oversight."
            icon="drone"
          />
          <FeaturesCard
            title="Perimeter Security"
            description="Deter and detect intrusions with advanced aerial and ground-level awareness."
            icon="shield"
          />
          <FeaturesCard
            title="Live Intelligence"
            description="Real-time video feeds, alerts, and analytics delivered straight to your command center."
            icon="eye"
          />
          <FeaturesCard
            title="Incident Response"
            description="Automated dispatch and escalation workflows improve response speed and reduce risk."
            icon="alert"
          />
          <FeaturesCard
            title="Data Insights"
            description="Actionable analytics to uncover patterns, optimize operations, and drive ROI."
            icon="chart"
          />
          <FeaturesCard
            title="Seamless Integration"
            description="Works with existing systems and platforms to maximize efficiency and value."
            icon="plug"
          />
        </div>
      </div>
    </section>
  );
}

