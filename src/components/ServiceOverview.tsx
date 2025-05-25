export default function ServiceOverview() {
  return (
    <section className="py-16 bg-background fade-in w-full">
      <div className="container px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Cloud Transformation</h3>
            <p className="text-muted-foreground">Modernize your infrastructure and operations for agility, scale, and security in the cloud.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2 text-foreground">AI & Data Strategy</h3>
            <p className="text-muted-foreground">Unlock insights and drive innovation with AI, analytics, and data-driven decision making.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Innovation Incubation</h3>
            <p className="text-muted-foreground">Accelerate new ideas from concept to impact with proven frameworks and expert guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
