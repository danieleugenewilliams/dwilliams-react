import { LabHero } from './LabHero';
import { ProductGrid } from './ProductGrid';
import { SEO } from './SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="D. E. Williams + Co. — AI Product Lab"
        description="Building AI-native products for knowledge, productivity, and growth. Home of LocalMemory, World Memory, ReckonGrid, and more."
        url="/"
      />
      <main className="bg-background text-foreground w-full overflow-x-hidden">
        <LabHero />
        <div id="products">
          <ProductGrid />
        </div>
        
        {/* Newsletters Section */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-6xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // NEWSLETTERS
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Claude Code for Non-Coders */}
              <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors">
                <h3 className="font-mono text-lg font-semibold mb-2">
                  Claude Code for Non-Coders
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Weekly tutorials on building with AI—practical guides for business leaders 
                  who want to leverage Claude Code without deep technical expertise.
                </p>
                <a 
                  href="https://claudecodefornoncoders.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-block text-sm"
                >
                  [Subscribe]
                </a>
              </div>
              
              {/* D. E. Williams + Co. Newsletter */}
              <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors">
                <h3 className="font-mono text-lg font-semibold mb-2">
                  Insights
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Updates from the lab—product launches, lessons learned, and thoughts on 
                  building AI-native tools. Less frequent, more in-depth.
                </p>
                <a 
                  href="https://dewilliamsco.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-block text-sm"
                >
                  [Subscribe]
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
