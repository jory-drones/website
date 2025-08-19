// website/securitydrones-info-site/src/components/Capabilities.jsx
import React from "react";
import { Camera, Thermometer, Video, Bell } from "lucide-react";

const CARDS = [
  {
    icon: Camera,
    title: "Perimeter Patrol",
    body:
      "Autonomous patrols cover vast perimeters with 360° vision, reducing blind spots and human error.",
  },
  {
    icon: Thermometer,
    title: "Thermal Vision",
    body:
      "Built‑in thermal sensors detect intrusions and fire hazards day or night, even in zero‑light conditions.",
  },
  {
    icon: Video,
    title: "Incident Recording",
    body:
      "Capture high‑definition video clips of every event and integrate with your existing security systems.",
  },
  {
    icon: Bell,
    title: "Real‑Time Alerts",
    body:
      "Instant notifications are pushed to your phone or SOC the moment a perimeter breach is detected.",
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h3 className="font-display text-center text-3xl text-white">Key Capabilities</h3>
        <p className="text-center text-white/75 max-w-3xl mx-auto mt-2">
          SecurityDrones.ai combines advanced autonomy, smart sensors and cloud intelligence into one
          seamless solution. Discover how our platform keeps your assets protected around the clock.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="rounded-xl border border-white/10 bg-secondary/40 p-5"
            >
              <c.icon className="h-5 w-5 text-blue mb-3" />
              <h4 className="font-display text-white mb-1">{c.title}</h4>
              <p className="text-white/75 text-sm leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
