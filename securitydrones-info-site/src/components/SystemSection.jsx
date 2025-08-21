// website/securitydrones-info-site/src/components/SystemSection.jsx
// /src/components/SystemSection.jsx
import React from "react";

export default function SystemSection() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <img
              src="/assets/app-ui.png"
              alt="System software"
              className="w-full max-w-xl mx-auto"
            />
          </div>

          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl">The System</h2>
            <p className="mt-3 text-white/80">
              A complete software solution to set up, control and overview the system.
              Works on any mobile device or web browser. Embeddable and easy to integrate
              using our open API.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
