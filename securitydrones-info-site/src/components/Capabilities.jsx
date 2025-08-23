// website/securitydrones-info-site/src/components/Capabilities.jsx
import React from "react";
import { Shield, Flame, Video, Bell } from "lucide-react";
import FeatureCard from "./FeatureCard.jsx";

export default function Capabilities() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl text-center">
          Key Capabilities
        </h2>
        <p className="mt-3 text-center text-white/80 max-w-3xl mx-auto">
          SecurityDrones.ai combines advanced autonomy, smart sensors and cloud
          intelligence into one seamless solution. Discover how our platform
          keeps your assets protected around the clock.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <FeatureCard
            Icon={Shield}
            title="Perimeter Patrol"
            description="Autonomous patrols cover vast perimeters with 360° vision, reducing blind spots and human error."
          />
          <FeatureCard
            Icon={Flame}
            title="Thermal Vision"
            description="Built‑in thermal sensors detect intrusions and fire hazards day or night, even in zero‑light conditions."
          />
          <FeatureCard
            Icon={Video}
            title="Incident Recording"
            description="Capture high‑definition video clips of every event and integrate with your existing security systems."
          />
          <FeatureCard
            Icon={Bell}
            title="Real‑Time Alerts"
            description="Instant notifications are pushed to your phone or SOC the moment a perimeter breach is detected."
          />
        </div>
      </div>
    </section>
  );
}

