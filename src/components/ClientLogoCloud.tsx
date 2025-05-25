import React from "react";

export default function ClientLogoCloud() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">Trusted by leaders and innovators</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          {/* Replace with actual client logos as needed */}
          <img src="/vite.svg" alt="Client 1" className="h-10" />
          <img src="/vite.svg" alt="Client 2" className="h-10" />
          <img src="/vite.svg" alt="Client 3" className="h-10" />
          <img src="/vite.svg" alt="Client 4" className="h-10" />
        </div>
      </div>
    </section>
  );
}
