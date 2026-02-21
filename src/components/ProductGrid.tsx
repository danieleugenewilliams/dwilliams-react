import { ProductCard, Product } from './ProductCard';

const products: Product[] = [
  {
    id: 'localmemory',
    name: 'LocalMemory',
    tagline: 'Persistent memory for AI assistants',
    description: 'MCP server that gives Claude and other AI assistants the ability to store, search, and build on knowledge across conversations. 60 paying customers.',
    status: 'live',
    version: 'v1.0',
    url: 'https://localmemory.co',
    launchDate: 'Sept 2025',
  },
  {
    id: 'reckongrid',
    name: 'ReckonGrid',
    tagline: 'Consulting estimation via GenAI',
    description: 'Reduces consulting project estimation from 2-4 weeks to 10-30 minutes through GenAI integration. Currently being refactored.',
    status: 'dev',
  },
  {
    id: 'yasuke',
    name: 'Yasuke',
    tagline: 'Managed personal AI agents',
    description: 'Co-founded with Landon Gray. Managed personal AI agents for executives (EA via SMS/email) and seniors (daily check-ins, medication reminders, scam protection).',
    status: 'pre-pilot',
  },
];

interface OpenSourceProject {
  name: string;
  description: string;
  url: string;
}

const openSourceProjects: OpenSourceProject[] = [
  {
    name: 'Othello Agent',
    description: 'Go-based local AI assistant with MCP integration',
    url: 'https://github.com/danieleugenewilliams/othello-agent',
  },
  {
    name: 'Agent Harness',
    description: 'Workflow orchestration for AI coding agents',
    url: 'https://github.com/danieleugenewilliams/agent-harness',
  },
  {
    name: 'zvec-go',
    description: 'Go CGO bindings for Alibaba\'s embedded vector database',
    url: 'https://github.com/danieleugenewilliams/zvec-go',
  },
];

export function ProductGrid() {
  return (
    <>
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container max-w-6xl">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="font-mono text-sm text-muted-foreground mb-2">
              // WHAT_WE_BUILD
            </h2>
            <p className="text-lg text-foreground max-w-2xl">
              Current and upcoming projects.
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

      {/* Open Source */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <h2 className="font-mono text-sm text-muted-foreground mb-2">
              // OPEN_SOURCE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openSourceProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border bg-card p-6 hover:border-terminal-cyan/50 transition-colors cursor-pointer"
              >
                <h3 className="font-mono text-base font-semibold text-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="font-mono text-xs text-terminal-cyan">
                  GitHub →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
