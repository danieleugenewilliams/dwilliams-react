import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
      <div className="relative z-10 max-w-2xl text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          D. E. Williams and Company
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow">
          Premium strategic advisory for leaders seeking to transform their organization through cloud, AI, and data. From innovation incubation programs to digital transformation, we deliver solutions that scale.
        </p>
        <a
          href="/contact"
          className="inline-block bg-brand-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-200"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
