// /src/components/ROICalculator.jsx
import React from "react";

export default function ROICalculator() {
  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-16">
        <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-3 sm:p-4">
          {/* Calendly inline widget begin */}
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/securitydrones-ai-demo/demo"
            style={{ minWidth: 320, height: 700 }}
          />
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
          {/* Calendly inline widget end */}
        </div>
      </div>
    </section>
  );
}
