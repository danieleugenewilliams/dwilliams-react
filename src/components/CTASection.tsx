import React from "react";

export default function CTASection() {
  return (
    <section className="py-16 bg-brand-primary dark:bg-brand-primary-dark text-white text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
        <p className="mb-8 text-lg">Schedule a consultation to discover how D. E. Williams & Company can help you achieve your goals with cloud, AI, and innovation.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-brand-primary font-semibold py-3 px-8 rounded-lg shadow hover:bg-gray-100 transition-colors duration-200"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
