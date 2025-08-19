// website/securitydrones-info-site/src/components/CalendlyEmbed.jsx
import React, { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    // load script once
    if (!document.querySelector("#calendly-widget-script")) {
      const s = document.createElement("script");
      s.id = "calendly-widget-script";
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section id="book" className="bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-secondary/30">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/securitydrones-ai-demo/demo"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
}
