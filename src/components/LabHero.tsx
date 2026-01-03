import { Link } from 'react-router-dom';

export function LabHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-grid">
      <div className="container max-w-6xl py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Terminal-style intro */}
          <div className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in-1">
            <span className="text-terminal-cyan">$</span> cd ~/lab
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-foreground mb-6 animate-fade-in-2">
            D. E. Williams + Co.
          </h1>
          
          {/* Tagline with cursor */}
          <p className="font-mono text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-3">
            Building AI-native products<span className="cursor-blink"></span>
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-in-4">
            A product lab focused on practical AI applications. We build tools that augment 
            human capability—memory systems, autonomous agents, and intelligent workflows.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-4">
            <a href="#products" className="btn-primary">
              [View Products]
            </a>
            <Link to="/lab" className="btn-ghost">
              About the Lab →
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-8 right-8 font-mono text-xs text-muted-foreground/30 hidden lg:block">
        <div>┌──────────────────┐</div>
        <div>│ EST. 2024        │</div>
        <div>│ AI PRODUCT LAB   │</div>
        <div>└──────────────────┘</div>
      </div>
    </section>
  );
}
