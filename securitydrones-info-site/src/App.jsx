// website/securitydrones-info-site/src/App.jsx
import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSplit from "./components/HeroSplit";
import BeeSection from "./components/BeeSection";
import HiveSection from "./components/HiveSection";
import SystemSection from "./components/SystemSection";
import Capabilities from "./components/Capabilities";
import ROICalculator from "./components/ROICalculator";
import CalendlyEmbed from "./components/CalendlyEmbed";


export default function App() {
  return (
    <div id="top" className="bg-primary text-white">
      <Navbar />
      <main className="pt-14 sm:pt-16">
        <HeroSplit />
        <BeeSection />
        <HiveSection />
        <SystemSection />
        <Capabilities />
        <CTABanner />
        <CalendlyEmbed />
        <AboutContact />
      </main>
    </div>
  );
}
