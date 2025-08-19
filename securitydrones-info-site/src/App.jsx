// website/securitydrones-info-site/src/App.jsx
import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSplit from "./components/HeroSplit.jsx";
import BeeSection from "./components/BeeSection.jsx";
import HiveSection from "./components/HiveSection.jsx";
import SystemSection from "./components/SystemSection.jsx";
import Capabilities from "./components/Capabilities.jsx";
import CTABanner from "./components/CTABanner.jsx";
import CalendlyEmbed from "./components/CalendlyEmbed.jsx";
import AboutContact from "./components/AboutContact.jsx";

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
