import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import ROICalculator from './components/ROICalculator.jsx';
import CTABanner from './components/CTABanner.jsx';

/**
 * Top‑level application component. It assembles the major sections of
 * the landing page into a cohesive narrative: introduction, feature
 * highlights, ROI calculator and a clear call to action.
 */
function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <ROICalculator />
      <CTABanner />
    </main>
  );
}

export default App;