// website/securitydrones-info-site/src/App.jsx
// /src/App.jsx
import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSplit from "./components/HeroSplit.jsx";
import SystemSection from "./components/SystemSection.jsx";
import HiveSection from "./components/HiveSection.jsx";
import BeeSection from "./components/BeeSection.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Integrations from "./components/Integrations.jsx";
import DemoCTA from "./components/DemoCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main>
      <Navbar />
      <HeroSplit />
      <section id="system"><SystemSection /></section>
      <section id="hive"><HiveSection /></section>
      <section id="bee"><BeeSection /></section>
      <Capabilities />
      <Integrations />
      <DemoCTA />
      <Footer />
    </main>
  );
}
