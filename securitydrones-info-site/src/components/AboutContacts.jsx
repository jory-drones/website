// website/securitydrones-info-site/src/components/AboutContact.jsx
import React from "react";

export default function AboutContacts() {
  return (
    <footer className="bg-primary text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        {/* About */}
        <section id="about">
          <h3 className="font-display text-xl">About</h3>
          <p className="mt-3 text-white/80 text-[13px] max-w-4xl">
            SecurityDrones.ai delivers autonomous perimeter patrols, thermal detection, and
            instant notifications—covering large sites at a fraction of traditional costs.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h3 className="font-display text-xl">Contact</h3>
          <p className="mt-3 text-white/80 text-[13px]">
            Email:{" "}
            <a className="underline hover:text-white" href="mailto:hello@securitydrones.ai">
              hello@securitydrones.ai
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
}
