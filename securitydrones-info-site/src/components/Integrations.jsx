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
    <section id="integrations" className="bg-primary py-16 sm:py-18 relative overflow-hidden">
      {/* thin divider */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"
        initial={{ opacity: 0, scaleX: 0.4 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: "center" }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-white">Seamless Integrations</h2>
        <p className="mt-3 max-w-3xl mx-auto text-white/70">
          Connect effortlessly with leading security, communication, and data platforms to fit your
          existing ecosystem.
        </p>

        {/* 1:1 consistent cards */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {LOGOS.map((logo, i) => (
            <motion.a
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl border border-secondary/60 bg-primary-light/40 p-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              aria-label={logo.alt}
            >
              <div className="aspect-[4/3] w-full flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
