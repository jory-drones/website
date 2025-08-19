// /src/components/CTABanner.jsx
import React from "react";

export default function CTABanner() {
  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h2 className="font-display text-3xl text-white">
          Ready to secure your property?
        </h2>
        <p className="mt-3 text-white/70">
          See how SecurityDrones.ai can reduce costs and increase safety with a live
          product demonstration tailored to your needs.
        </p>

        <div className="mt-8">
          <a
            href="#book"
            className="inline-flex items-center rounded-full bg-[#96C1E6] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#86b0d8]"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
