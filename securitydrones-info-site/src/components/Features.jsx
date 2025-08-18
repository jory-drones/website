import React from 'react';
import FeatureCard from './FeatureCard.jsx';
import { ShieldCheck, Thermometer, Video, Bell } from 'lucide-react';

/**
 * A section containing a grid of feature cards. Each feature describes
 * a core capability of the SecurityDrones.ai system. Animations
 * stagger the entrance of cards for added visual interest.
 */
function Features() {
  const features = [
    {
      title: 'Perimeter Patrol',
      description:
        'Autonomous patrols cover vast perimeters with 360° vision, reducing blind spots and human error.',
      icon: ShieldCheck,
    },
    {
      title: 'Thermal Vision',
      description:
        'Built‑in thermal sensors detect intrusions and fire hazards day or night, even in zero‑light conditions.',
      icon: Thermometer,
    },
    {
      title: 'Incident Recording',
      description:
        'Capture high‑definition video clips of every event and integrate with your existing security systems.',
      icon: Video,
    },
    {
      title: 'Real‑Time Alerts',
      description:
        'Instant notifications are pushed to your phone or SOC the moment a perimeter breach is detected.',
      icon: Bell,
    },
  ];

  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-6">
          Key Capabilities
        </h2>
        <p className="text-center text-lg text-white/80 mb-12 max-w-3xl mx-auto">
          SecurityDrones.ai combines advanced autonomy, smart sensors and cloud
          intelligence into one seamless solution. Discover how our platform
          keeps your assets protected around the clock.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <FeatureCard
              key={feat.title}
              Icon={feat.icon}
              title={feat.title}
              description={feat.description}
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;