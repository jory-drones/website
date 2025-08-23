// website/securitydrones-info-site/src/App.jsx
// /src/App.jsx
import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSplit from "./components/HeroSplit.jsx";
import SystemSection from "./components/SystemSection.jsx";
import HiveSection from "./components/HiveSection.jsx";
import BeeSection from "./components/BeeSection.jsx";
import Features from "./components/Features.jsx";
import Integrations from "./components/Integrations.jsx";
import ROICalculator from "./components/ROICalculator.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="font-body bg-primary text-white">
      <Navbar />
      <HeroSplit />

      {/* ORDER: The System, The Hive, The Drone */}
      <section id="services">
        <SystemSection />
        <HiveSection />
        <BeeSection />
      </section>

      <Features />
      <Integrations />
      <section id="book">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
