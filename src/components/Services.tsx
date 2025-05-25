import React from "react";

export default function Services() {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 min-h-[70vh]">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-brand-primary dark:text-brand-primary-dark">Services</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Accelerate Your Impact with AI</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            We partner with organizations to build intelligent solutions that drive growth, efficiency, and lasting value. Explore our tailored services designed to meet your unique needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Service 1 */}
          <div className="rounded-3xl p-8 xl:p-10 ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 flex flex-col">
            <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white mb-2">ML Capability Accelerator</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
              Empower your organization with machine learning (ML) to optimize operations and enhance decision-making. Our ML Capability Accelerator equips your team with cutting-edge skills and builds robust data models tailored to your business needs. Drawing on our success with delivering data-driven and automated solutions for some of the largest global brands, we design and implement ML solutions that streamline processes, uncover insights, and amplify your existing knowledge. Expect a comprehensive strategy that drives efficiency and competitive advantage.
            </p>
            <div className="mt-6 flex items-baseline gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">$100k-$200k</span>
              <span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-400">8-16 Weeks</span>
            </div>
            <a href="/contact" className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-brand-primary dark:text-brand-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition">Get Started</a>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10">
              <li>Delivered a data-driven platform in 3 months, 9 months ahead of schedule.</li>
              <li>Generated $10M in annual revenue through a revamped data and API monetization strategy.</li>
              <li>Enhanced operational efficiency by standardizing processes and developing a new innovation incubation model.</li>
            </ul>
          </div>
          {/* Service 2 */}
          <div className="rounded-3xl p-8 xl:p-10 bg-blue-50 dark:bg-blue-900 ring-2 ring-brand-primary dark:ring-brand-primary-dark flex flex-col">
            <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white mb-2">GenAI Impact Studio</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
              Harness generative AI to unlock your team’s creative and analytical potential. Our GenAI Impact Studio crafts rapid, responsible AI solutions that transform data into actionable strategies, from stakeholder engagement to predictive analytics. Built on our expertise with JFFLabs’ veteran mobility initiatives (resulting in a 6-week GenAI prototype) and the EQOS funding success with the GitLab Foundation, we prototype tools like NotebookLM-powered analytics to amplify customer insights and drive mission-critical outcomes. Ideal for leaders aiming to innovate swiftly and ethically.
            </p>
            <div className="mt-6 flex items-baseline gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">$50k</span>
              <span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-400">6 Weeks</span>
            </div>
            <a href="/contact" className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold bg-brand-primary text-white hover:bg-blue-800 dark:bg-brand-primary-dark dark:hover:bg-blue-700 transition">Get Started</a>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10">
              <li>Secure additional funding through AI-driven insights, as demonstrated by EQOS for GitLab Foundation.</li>
              <li>Align stakeholders and accelerate impact through focused workshops, as with JFFLabs’ virtual workshop methodology.</li>
              <li>Prototype a generative AI solution in 6 weeks, proving rapid innovation capabilities inspired by JFF’s accelerated timelines.</li>
            </ul>
          </div>
          {/* Service 3 */}
          <div className="rounded-3xl p-8 xl:p-10 ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 flex flex-col">
            <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white mb-2">AI Transformation Blueprint</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
              Reimagine your business with AI, ML, and automation. Our AI Transformation Blueprint delivers a focused assessment and actionable roadmap to integrate intelligent systems, enhance data quality, and create scalable solutions. Leveraging our work with Toyota’s AWS-based reliability (achieving 99.999% system uptime for the Dealer Information System) and JFFLabs’ process optimization (accelerating strategy execution via the Impact Incubation Model), we ensure your technology drives growth and delights users with tailored experiences. Perfect for executives seeking clarity to scale operations and stay ahead.
            </p>
            <div className="mt-6 flex items-baseline gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">$25k</span>
              <span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-400">4 Weeks</span>
            </div>
            <a href="/contact" className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-brand-primary dark:text-brand-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition">Get Started</a>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10">
              <li>Achieve 99.999% system uptime for critical systems, mirroring Toyota’s Dealer Information System success.</li>
              <li>Reduce operational costs by 10-20% through streamlined processes, inspired by Toyota’s efficiency gains.</li>
              <li>Accelerate strategy execution and adoption, as demonstrated by JFFLabs’ Impact Incubation Model.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
