// website/securitydrones-info-site/src/components/SystemSection.jsx
// /src/components/SystemSection.jsx
import React from "react";

export default function SystemSection() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left: UI visual */}
        <div className="relative">
          <img
            src="/assets/app-ui.png"
            alt="SecurityDrones system UI"
            className="w-full max-w-[620px] rounded-2xl border border-white/10 bg-primary-light p-2 mx-auto"
          />
          <span className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs bg-[#ff7a59] text-white rounded-full px-3 py-1 shadow">
            Supported on iPhone, iPad, Android and any web browser
          </span>
        </div>

        {/* Right: copy */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">The System</h2>
          <p className="mt-3 text-white/80 max-w-prose">
            A complete software solution to set up, control, and oversee the
            system. Works on any mobile device or web browser. Embeddable and
            easy to integrate using our open API.
          </p>
        </div>
      </div>
    </section>
  );
}
