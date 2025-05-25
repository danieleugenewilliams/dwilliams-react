export default function CaseStudyPreview() {
  return (
    <section className="py-16 bg-muted/50 fade-in">
      <div className="container px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">EdTech Cloud Migration</h3>
            <p className="text-muted-foreground mb-2">Enabled a leading education nonprofit to modernize their data platform, reducing costs by 40% and improving analytics capabilities.</p>
            <a href="/case-studies" className="text-primary hover:underline">Read More</a>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">AI for Social Impact</h3>
            <p className="text-muted-foreground mb-2">Developed an AI-driven solution for a nonprofit to predict donor churn and optimize fundraising campaigns, increasing retention by 25%.</p>
            <a href="/case-studies" className="text-primary hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
