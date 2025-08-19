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
      <main className="pt-14 sm:pt-16">
        <Hero />
        <section id="services"><Features /></section>
        <ROICalculator />
        <CTABanner />
        <CalendlyEmbed />
        {/* About & Contact sections from above */}
      </main>
    </div>
  );
}
