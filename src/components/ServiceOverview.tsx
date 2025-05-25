export default function ServiceOverview() {
  return (
    <section className="py-16 bg-white dark:bg-brand-bg-dark fade-in">
      <div className="container px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-brand-primary dark:text-brand-primary-dark">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Cloud Transformation</h3>
            <p className="text-brand-silver dark:text-gray-300">Modernize your infrastructure and operations for agility, scale, and security in the cloud.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">AI & Data Strategy</h3>
            <p className="text-brand-silver dark:text-gray-300">Unlock insights and drive innovation with AI, analytics, and data-driven decision making.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Innovation Incubation</h3>
            <p className="text-brand-silver dark:text-gray-300">Accelerate new ideas from concept to impact with proven frameworks and expert guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
