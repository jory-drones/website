import React from "react";

export default function CTABanner() {
  return (
    <section className="bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
        <h3 className="font-display text-2xl sm:text-3xl text-white">
          Ready to secure your property?
        </h3>
        <p className="mt-2 text-white/75">
          See how SecurityDrones.ai can reduce costs and increase safety with a live product demonstration.
        </p>
        <div className="mt-5">
          <a href="#book" className="inline-block rounded-full px-5 py-2 bg-secondary text-white/90 hover:text-white hover:bg-secondary/90 ring-1 ring-white/10 transition">
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
