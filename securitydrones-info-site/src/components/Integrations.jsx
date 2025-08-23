// /src/components/Integrations.jsx
import React from "react";
import { motion } from "framer-motion";

const LOGOS = [
  { src: "/assets/verkada.png", alt: "Verkada", href: "https://www.verkada.com/" },
  { src: "/assets/alarmdotcom.png", alt: "Alarm.com", href: "https://www.alarm.com/" },
  { src: "/assets/talkaphone.png", alt: "Talkaphone", href: "https://www.talkaphone.com/" },
  { src: "/assets/rhombus.png", alt: "Rhombus", href: "https://www.rhombussystems.com/" },
  { src: "/assets/singlewire.png", alt: "Singlewire", href: "https://www.singlewire.com/" },
  { src: "/assets/meteomatics.png", alt: "Meteomatics", href: "https://www.meteomatics.com/" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="bg-primary py-16 sm:py-20 relative overflow-hidden">
      {/* subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl">Seamless Integrations</h2>
        <p className="mt-3 max-w-3xl mx-auto text-white/80">
          Connects effortlessly with leading security, communication, and data platforms to fit into your
          existing ecosystem. From cameras and alarms to weather data and emergency call systems,
          our integrations extend your capabilities and maximize the value of your investment.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {LOGOS.map((logo, i) => (
            <motion.a
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-64 h-44 sm:w-72 sm:h-48 rounded-2xl border border-white/15 bg-white/[0.06] flex items-center justify-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              aria-label={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 sm:max-h-20 w-auto object-contain"
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
