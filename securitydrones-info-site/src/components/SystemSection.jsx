// website/securitydrones-info-site/src/components/SystemSection.jsx
// /src/components/SystemSection.jsx
import React from "react";

export default function SystemSection() {
  return (
    <section id="system" className="bg-primary py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-2xl text-white">The System</h2>
          <p className="mt-2 text-white/70 text-sm">
            A complete software solution to set up, control, and oversee the system. Works on any
            mobile device or web browser. Embeddable and easy to integrate via our open API.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="/assets/app-ui.png"
            alt="Control app UI"
            className="w-[560px] max-w-full mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
