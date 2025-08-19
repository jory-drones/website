import React from "react";
import { motion } from "framer-motion";
import { Camera, Thermometer, Video, Bell } from "lucide-react";

const CARDS = [
  {
    icon: Camera,
    title: "Perimeter Patrol",
    body:  "Autonomous patrols cover vast perimeters with 360° vision, reducing blind spots and human error."
  },
  {
    icon: Thermometer,
    title: "Thermal Vision",
    body:  "Built‑in thermal sensors detect intrusions and fire hazards day or night, even in zero‑light conditions."
  },
  {
    icon: Video,
    title: "Incident Recording",
    body:  "Capture HD video of every event and integrate with your existing security systems."
  },
  {
    icon: Bell,
    title: "Real‑Time Alerts",
    body:  "Instant notifications are pushed the moment a perimeter breach is detected."
  }
];

export default function Features() {
  return (
    <section id="services" className="bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="font-display text-center text-3xl sm:text-4xl text-white mb-3">Key Capabilities</h2>
        <p className="text-center text-white/75 max-w-3xl mx-auto">
          SecurityDrones.ai combines advanced autonomy, smart sensors and cloud intelligence into one seamless solution.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-secondary/40 p-5"
            >
              <c.icon className="h-5 w-5 text-blue mb-3" />
              <h3 className="font-display text-white mb-1">{c.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{c.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
