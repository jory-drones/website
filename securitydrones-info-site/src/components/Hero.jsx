import React from 'react';
import { motion } from 'framer-motion';

const CALENDLY_URL =
  'https://calendly.com/securitydrones/demo?hide_event_type_details=1&hide_gdpr_banner=1';

/**
 * The landing hero section. It establishes the brand by showing the
 * company logo and a concise value proposition atop a dynamic
 * background. Motion effects introduce the content elegantly.
 */
function Hero() {
  // Variants control the staggered entrance of each element in the hero.
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/hero-bg.png)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      {/* Hero content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Logo */}
        <motion.img
          src="/assets/logo.png"
          alt="SecurityDrones.ai logo"
          className="mx-auto mb-6 h-12 md:h-16"
          variants={itemVariants}
        />
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-heading font-extrabold mb-4"
          variants={itemVariants}
        >
          Replace guesswork with
          <br className="hidden md:block" /> always‑on aerial security
        </motion.h1>
        {/* Subheading */}
        <motion.p
          className="text-lg md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          AI‑powered patrols, thermal detection and instant alerts
          covering large sites at a fraction of traditional costs.
        </motion.p>
        {/* Call‑to‑action button */}
        <motion.a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="inline-block px-8 py-3 rounded-full bg-secondary text-primary font-heading text-lg font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:ring-offset-2"
        >
          Book a Demo
        </motion.a>
      </motion.div>
    </header>
  );
}

export default Hero;