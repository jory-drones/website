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

<section id="about" className="bg-primary">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
    <h2 className="font-display text-2xl sm:text-3xl text-white mb-3">About</h2>
    <p className="text-white/75 max-w-4xl">
      SecurityDrones.ai delivers autonomous perimeter patrols, thermal detection, and instant notifications—
      covering large sites at a fraction of traditional costs.
    </p>
  </div>
</section>

<section id="contact" className="bg-primary">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
    <h2 className="font-display text-2xl sm:text-3xl text-white mb-3">Contact</h2>
    <p className="text-white/75">Email: <a className="underline hover:no-underline" href="mailto:hello@securitydrones.ai">hello@securitydrones.ai</a></p>
  </div>
</section>
