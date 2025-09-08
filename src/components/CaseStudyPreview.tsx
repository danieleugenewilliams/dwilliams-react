export default function CaseStudyPreview() {
  return (
    <section className="py-16 bg-muted/50 fade-in">
      <div className="container px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card border-primary/50 bg-primary/5">
            <div className="mb-2">
              <span className="inline-block px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                Latest
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-2">LocalMemory.co AI Product Launch</h3>
            <p className="text-muted-foreground mb-2">Solved AI context amnesia for developers - built production-ready memory system with 26 MCP tools, 34,466 memories/second processing, with semantic and vector search.</p>
            <a href="https://localmemory.co" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Visit LocalMemory.co →</a>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Innovation Incubation Framework</h3>
            <p className="text-muted-foreground mb-2">Designed standardized innovation processes for education nonprofit, enhancing appeal to funders and strengthening strategic partnerships.</p>
            <a href="/case-studies" className="text-primary hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
