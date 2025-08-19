import React from "react";
import { ShieldCheck, ThermometerSun, Camera, BellRing } from "lucide-react";

const items = [
  {
    title: "Perimeter Patrol",
    icon: ShieldCheck,
    copy:
      "Autonomous patrols cover vast perimeters with 360° vision, reducing blind spots and human error."
  },
  {
    title: "Thermal Vision",
    icon: ThermometerSun,
    copy:
      "Built‑in thermal sensors detect intrusions and fire hazards day or night, even in zero‑light conditions."
  },
  {
    title: "Incident Recording",
    icon: Camera,
    copy:
      "Capture high‑definition video clips of every event and integrate with your existing security systems."
  },
  {
    title: "Real‑Time Alerts",
    icon: BellRing,
    copy:
      "Instant notifications are pushed to your phone or SOC the moment a perimeter breach is detected."
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h2 className="text-center font-display text-2xl sm:text-3xl">
          Key Capabilities
        </h2>
        <p className="mt-3 text-center text-white/70 text-[13px] max-w-2xl mx-auto">
          SecurityDrones.ai combines advanced autonomy, smart sensors and cloud
          intelligence into one seamless solution. Discover how our platform keeps your
          assets protected around the clock.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ title, icon: Icon, copy }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-[13px] text-white/70 leading-5">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
