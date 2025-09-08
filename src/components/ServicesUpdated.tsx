import { SEO } from './SEO';

export default function Services() {
  return (
    <>
      <SEO 
        title="Services - D. E. Williams & Company"
        description="AI Product Development and strategic consulting services. From LocalMemory.co to enterprise solutions - we build intelligent products that drive growth, efficiency, and lasting value."
        keywords="AI product development, consulting, strategy, LocalMemory, AI products, LLM integration, semantic search, digital transformation"
      />
      <section className="bg-background py-16 min-h-[70vh]">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-primary">Services</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Accelerate Your Impact with AI</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              We partner with organizations to build intelligent solutions that drive growth, efficiency, and lasting value. Explore our tailored services designed to meet your unique needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="card">
              <h3 className="text-lg font-semibold leading-8 text-foreground mb-2">Discovery to Scale</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Transform your ideas into scalable solutions through our comprehensive discovery-to-scale approach. Whether you're prototyping a new platform or optimizing existing systems, we accelerate your journey from concept to market impact. Drawing on our expertise from the ASA Center for Career Navigation (platform prototype in 3 months) and various JFFLabs innovations, we deliver rapid, data-driven solutions that scale. Perfect for leaders with ambitious timelines and growth targets.
              </p>
              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-3xl font-bold tracking-tight text-foreground">$75k</span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">12 Weeks</span>
              </div>
              <a href="/contact" className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold bg-muted text-primary hover:bg-muted/80 transition">Get Started</a>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground xl:mt-10">
                <li>Delivered a data-driven platform in 3 months, 9 months ahead of schedule.</li>
                <li>Generated $10M in annual revenue through a revamped data and API monetization strategy.</li>
                <li>Enhanced operational efficiency by standardizing processes and developing a new innovation incubation model.</li>
              </ul>
            </div>
            {/* Service 2 - Featured */}
            <div className="rounded-3xl p-8 xl:p-10 bg-primary/10 ring-2 ring-primary flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-2">
                  Featured
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-8 text-foreground mb-2">AI Product Development</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Transform your AI vision into market-ready products with our end-to-end development approach. From concept validation and technical architecture to launch and growth optimization, we specialize in LLM integration, semantic search, and intelligent automation. Built on our success with LocalMemory.co's AI-powered knowledge management platform, we deliver rapid, scalable AI products that users love. Perfect for leaders ready to turn AI innovation into market advantage.
              </p>
              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-3xl font-bold tracking-tight text-foreground">$125k</span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">20 Weeks</span>
              </div>
              <a href="/contact" className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition">Get Started</a>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground xl:mt-10">
                <li>Launched LocalMemory.co from concept to beta with 85% weekly user retention.</li>
                <li>Implemented semantic search and AI relationship mapping reducing retrieval time by 60%.</li>
                <li>Delivered MVP with 100+ active users and validated product-market fit in 20 weeks.</li>
              </ul>
            </div>
            {/* Service 3 */}
            <div className="card">
              <h3 className="text-lg font-semibold leading-8 text-foreground mb-2">Innovation Acceleration</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Accelerate your innovation capabilities through proven frameworks and hands-on collaboration. From designing innovation workshop retreats to developing incubation models that drive measurable outcomes, we help organizations foster a culture of continuous innovation. Our approach, refined through work with JFFLabs on economic mobility and organizational growth, combines strategic planning with tactical execution. Ideal for teams ready to institutionalize innovation and achieve sustainable growth.
              </p>
              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-3xl font-bold tracking-tight text-foreground">$100k</span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">16 Weeks</span>
              </div>
              <a href="/contact" className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold bg-muted text-primary hover:bg-muted/80 transition">Get Started</a>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground xl:mt-10">
                <li>Built innovation frameworks that delivered measurable ROI for veteran economic mobility programs.</li>
                <li>Designed and facilitated innovation workshop retreats that unlock organizational potential.</li>
                <li>Established incubation models that systematically generate and validate new opportunities.</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our tailored approach can accelerate your impact and drive measurable results for your organization.
            </p>
            <a 
              href="/contact" 
              className="btn-primary"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
