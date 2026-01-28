import { ProductCard, Product } from './ProductCard';

const products: Product[] = [
  {
    id: 'localmemory',
    name: 'LocalMemory',
    tagline: 'Persistent memory for AI assistants',
    description: 'MCP server that gives Claude and other AI assistants the ability to store, search, and build on knowledge across conversations. Your AI finally remembers.',
    status: 'live',
    version: 'v1.0',
    url: 'https://localmemory.co',
    launchDate: 'Sept 2025',
  },
  {
    id: 'worldmemory',
    name: 'World Memory',
    tagline: 'Autonomous knowledge building',
    description: 'SaaS platform that continuously observes, reflects, and builds structured knowledge from your data. Surfaces patterns and insights you would have missed.',
    status: 'beta',
    version: 'v0.4',
    launchDate: 'Q1 2026',
  },
  {
    id: 'reckongrid',
    name: 'ReckonGrid',
    tagline: 'AI-driven business development',
    description: 'Intelligent BizDev platform that identifies opportunities, qualifies leads, and manages pipeline with autonomous agents. Built for founders and small teams.',
    status: 'dev',
    launchDate: 'Q2 2026',
  },
  {
    id: 'outcomestack',
    name: 'OutcomeStack',
    tagline: 'Outcomes, not tasks',
    description: 'Reimagined priority management for leaders. Track and delegate outcomes across your team. A modified Eisenhower Matrix built for managers and above.',
    status: 'dev',
    launchDate: 'Q2 2026',
  },
  {
    id: 'assesskit',
    name: 'AssessKit',
    tagline: 'Actionable self-discovery',
    description: 'Social platform built around shareable self-assessments for career, business, and life. Turn introspection into action and community.',
    status: 'dev',
    launchDate: 'Q3 2026',
  },
  {
    id: 'vitalcore',
    name: 'VitalCore',
    tagline: 'Your health between visits',
    description: 'Personal health tracker that captures what your doctor needs to see—weight, blood pressure, body composition, and trends over time. Walk into your next appointment with data, not guesses.',
    status: 'dev',
    launchDate: 'Q2 2026',
  },
];

export function ProductGrid() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-6xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="font-mono text-sm text-muted-foreground mb-2">
            // WHAT_WE_BUILD
          </h2>
          <p className="text-lg text-foreground max-w-2xl">
            Beyond consulting, we build AI-native products. Here's what's in the lab.
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
