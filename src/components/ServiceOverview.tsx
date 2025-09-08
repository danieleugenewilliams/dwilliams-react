export default function ServiceOverview() {
  return (
    <section className="py-16 bg-background fade-in w-full">
      <div className="container px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="font-semibold text-lg mb-2 text-foreground">AI Product Development</h3>
            <p className="text-muted-foreground">End-to-end AI product development from concept to launch. Specializing in LLM integration, semantic search, and intelligent automation.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Strategic Advisory</h3>
            <p className="text-muted-foreground">Premium strategic consulting for cloud transformation, AI strategy, and digital transformation initiatives that scale.</p>
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
