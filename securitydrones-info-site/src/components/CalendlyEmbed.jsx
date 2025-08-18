import React, { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    // load Calendly script once
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section id="book" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="font-display text-3xl sm:text-4xl mb-6">Book a demo</h2>
      <div
        className="calendly-inline-widget rounded-xl overflow-hidden ring-1 ring-white/10"
        data-url="https://calendly.com/securitydrones-ai-demo/demo"
        style={{ minWidth: "320px", height: "700px" }}
      />
      {/* Calendly requires the script tag, which we inject via useEffect above */}
    </section>
  );
}
