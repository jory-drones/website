// website/securitydrones-info-site/src/App.jsx
// /src/App.jsx
import React from "react";

import Navbar from "./components/Navbar.jsx";
import HeroSplit from "./components/HeroSplit.jsx";
import BeeSection from "./components/BeeSection.jsx";
import HiveSection from "./components/HiveSection.jsx";
import SystemSection from "./components/SystemSection.jsx";
import Features from "./components/Features.jsx";
import Integrations from "./components/Integrations.jsx";
import DemoCTA from "./components/DemoCTA.jsx";    
import CalendlyEmbed from "./components/CalendlyEmbed.jsx";
import Footer from "./components/Footer.jsx";  

export default function App() {
  return (
    <main className="bg-primary text-white font-body">
      <Navbar />
      <HeroSplit />
      <BeeSection />
      <HiveSection />
      <SystemSection />
      <Features />
      <Integrations />
      <DemoCTA />
      <CalendlyEmbed />
      <Footer />
    </main>
  );
}
