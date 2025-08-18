import React from 'react';

const CALENDLY_URL =
  'https://calendly.com/securitydrones/demo?hide_event_type_details=1&hide_gdpr_banner=1';

/**
 * A simple call‑to‑action section inviting visitors to book a live
 * demonstration. This component keeps the copy concise and focuses
 * attention on the primary action.
 */
function CTABanner() {
  return (
    <section className="py-16 bg-primary-light text-center">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
          Ready to secure your property?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          See how SecurityDrones.ai can reduce costs and increase safety with
          a live product demonstration tailored to your needs.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-secondary text-primary font-heading text-lg font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:ring-offset-2"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
}

export default CTABanner;