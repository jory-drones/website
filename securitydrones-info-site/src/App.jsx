// website/securitydrones-info-site/src/App.jsx
import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSplit from "./components/HeroSplit.jsx";
import BeeSection from "./components/BeeSection.jsx";
import HiveSection from "./components/HiveSection.jsx";
import SystemSection from "./components/SystemSection.jsx";
import Features from "./components/Features.jsx";
import CTABanner from "./components/CTABanner.jsx";   
import ROICalculator from "./components/ROICalculator.jsx";
import AboutContacts from "./components/AboutContacts.jsx";

export default function App() {
  return (
    <main>
      <Navbar />
      <HeroSplit />
      <BeeSection />
      <HiveSection />
      <SystemSection />
      <Features />
      <CTABanner />            
      <ROICalculator />
      <AboutContacts />
    </main>
  );
}
