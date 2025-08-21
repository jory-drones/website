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
    <section className="bg-primary py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="font-display text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Seamless Integrations
        </motion.h2>

        {/* Subcopy */}
        <motion.p
          className="mt-3 max-w-3xl mx-auto text-white/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Connects effortlessly with leading security, communication, and data platforms
          to fit into your existing ecosystem. Our integrations extend your capabilities
          and maximize the value of your investment.
        </motion.p>

        {/* Logo grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 place-items-center">
          {LOGOS.map((logo, i) => (
            <motion.a
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-36 sm:w-44 rounded-xl border border-secondary/60 bg-primary-light/40 p-4 hover:bg-primary-light/60 transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              aria-label={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
