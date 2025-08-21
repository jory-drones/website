// /src/components/Features.jsx
import React from "react";

const items = [
  {
    title: "Perimeter Patrol",
    body:
      "Autonomous patrols cover vast perimeters with 360° vision, reducing blind spots and human error.",
  },
  {
    title: "Thermal Vision",
    body:
      "Built‑in thermal sensors detect intrusions and fire hazards day or night, even in zero‑light conditions.",
  },
  {
    title: "Incident Recording",
    body:
      "Capture high‑definition video clips of every event and integrate with your existing security systems.",
  },
  {
    title: "Real‑Time Alerts",
    body:
      "Instant notifications are pushed to your phone or SOC the moment a perimeter breach is detected.",
  },
];

export default function Features() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <h2 className="font-display text-3xl text-center">Key Capabilities</h2>
        <p className="mt-3 text-center text-white/70 max-w-3xl mx-auto">
          SecurityDrones.ai combines advanced autonomy, smart sensors and cloud intelligence
          into one seamless solution. Discover how our platform keeps your assets protected
          around the clock.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
            >
              <h3 className="font-medium">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

