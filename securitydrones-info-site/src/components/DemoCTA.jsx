// /src/components/DemoCTA.jsx
import React from "react";

export default function DemoCTA() {
  return (
    <section id="demo" className="bg-primary py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl text-center">
          Ready to secure your property?
        </h2>
        <p className="mt-3 text-center text-white/80 max-w-3xl mx-auto">
          See how SecurityDrones.ai can reduce costs and increase safety with a live product
          demonstration tailored to your needs.
        </p>

        <div className="mt-8 rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-6">
          {/* Calendly embed component you already use */}
          <div className="w-full h-[680px] sm:h-[640px]">
            <iframe
              title="Calendly"
              src="https://calendly.com/jory-zemanek/ai-drone-demo?hide_event_type_details=1&hide_gdpr_banner=1"
              className="w-full h-full rounded-xl bg-primary"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
