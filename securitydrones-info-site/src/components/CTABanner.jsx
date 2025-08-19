// /src/components/CTABanner.jsx
import React, { useEffect } from "react";

export default function CTABanner() {
  // Load Calendly script once
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.head.appendChild(s);
    return () => document.head.removeChild(s);
  }, []);

  return (
    <section id="book" className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h2 className="text-center font-display text-2xl sm:text-3xl">
          Ready to secure your property?
        </h2>
        <p className="mt-2 text-center text-white/70 text-[13px] max-w-2xl mx-auto">
          See how SecurityDrones.ai can reduce costs and increase safety with a live
          product demonstration tailored to your needs.
        </p>

        {/* Calendly embed */}
        <div
          className="calendly-inline-widget mt-8 rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/5"
          data-url="https://calendly.com/securitydrones-ai-demo/demo"
          style={{ minWidth: "320px", height: "640px" }}
        />
      </div>
    </section>
  );
}
