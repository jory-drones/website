import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import ROICalculator from './components/ROICalculator.jsx';
import CTABanner from './components/CTABanner.jsx';
import CalendlyEmbed from './components/CalendlyEmbed.jsx';

export default function App() {
  return (
    <div id="top">
      <Navbar />

      <main className="pt-16"> {/* offset for fixed header */}
        <Hero />

        <section id="services">
          <Features />
        </section>

        <ROICalculator />

        <CTABanner />

        {/* Calendly section */}
        <CalendlyEmbed />

        {/* Simple "About" + "Contact" anchors so header tabs work */}
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-display text-3xl sm:text-4xl mb-4">About</h2>
          <p className="text-white/80">
            SecurityDrones.ai delivers autonomous perimeter patrols, thermal detection,
            and instant notifications—covering large sites at a fraction of traditional costs.
          </p>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <h2 className="font-display text-3xl sm:text-4xl mb-4">Contact</h2>
          <p className="text-white/80">Email: hello@securitydrones.ai</p>
        </section>
      </main>
    </div>
  );
}
