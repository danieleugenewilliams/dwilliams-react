import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';
import { ArrowUpRight } from './Icons';

const openSourceProjects = [
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
    description: "Go CGO bindings for Alibaba's embedded vector database",
    url: 'https://github.com/danieleugenewilliams/zvec-go',
  },
  {
    name: 'Fractionally',
    description: 'Claude Code plugin for finding fractional executive roles and writing engagement proposals',
    url: 'https://github.com/danieleugenewilliams/fractionally',
  },
];

export default function Lab() {
  return (
    <>
      <SEO
        title="The Lab — D. E. Williams + Co."
        description="Home of the WARE Framework and LocalMemory. AI products built from real enterprise problems."
        url="/lab"
      />
      <main style={{ background: 'var(--bg)', color: 'var(--fg)' }}>

        {/* Hero */}
        <section className="lab-hero">
          <div className="lab-hero__bg" aria-hidden="true" />
          <div className="lab-hero__grid" aria-hidden="true" />
          <div className="lab-hero__inner shell">
            <Reveal>
              <div className="lab-hero__meta">
                <span className="dot" />
                The Lab — Products &amp; Open Source
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="lab-hero__title">
                Built from<br /><em>real problems</em>
              </h1>
            </Reveal>
            <div className="lab-hero__sub">
              <Reveal delay={2}>
                <p className="lab-hero__lede">
                  These tools power our advisory engagements. <strong>They ship as delivered
                  services inside client work</strong>, not as standalone software. Every product
                  started as a solution to a problem we encountered in the field.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="lab-hero__stats">
                  <div className="lab-hero__stat">
                    <div className="n">2</div>
                    <div className="l">Live products</div>
                  </div>
                  <div className="lab-hero__stat">
                    <div className="n">60+</div>
                    <div className="l">LocalMemory customers</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WARE Framework — Featured */}
        <section className="lab-feat">
          <div className="shell">
            <Reveal>
              <div className="lab-feat__eyebrow">Flagship product</div>
            </Reveal>
            <Reveal delay={1}>
              <div className="lab-feat__card">
                <div>
                  <div className="lab-feat__badge">
                    <span className="dot" />
                    Live
                  </div>
                  <h2 className="lab-feat__name">WARE Framework</h2>
                  <p className="lab-feat__tagline">Workforce Automation Resilience Engine</p>
                  <p className="lab-feat__desc">
                    A hybrid scoring engine that combines <strong>O*NET structural data</strong>, LLM semantic
                    analysis, industry adoption factors, and observed AI usage data—including
                    the Anthropic Economic Index—to assess role-level automation resilience.
                    Task-level analysis, not job-title guessing.
                  </p>
                  <p className="lab-feat__desc" style={{ marginTop: '1.25rem' }}>
                    Every assessment tier—from the free individual score to enterprise-wide
                    workforce audits—runs on the same engine, scaled to fit. <strong>As AI models
                    improve, WARE's assessments get more accurate automatically.</strong>
                  </p>
                </div>
                <div className="lab-feat__meta">
                  <div className="lab-feat__method">
                    <div className="lab-feat__method-label">Methodology</div>
                    <ul className="lab-feat__method-list">
                      <li>Task decomposition using O*NET occupational data</li>
                      <li>AI capability matching via LLM semantic analysis</li>
                      <li>Industry-specific adoption weighting</li>
                      <li>Observed usage calibration (Anthropic Economic Index)</li>
                      <li>Composite resilience scoring (0–100)</li>
                    </ul>
                  </div>
                  <div className="lab-feat__actions">
                    <a
                      href="https://automationresilience.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      Try It Yourself
                    </a>
                    <Link to="/services" className="btn btn--ghost">
                      Assessment tiers
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LocalMemory */}
        <section className="lab-product">
          <div className="shell">
            <div className="lab-product__inner">
              <Reveal>
                <div className="lab-product__header">
                  <div className="lab-product__badge">Live · v1.0 · Sept 2025</div>
                  <h2 className="lab-product__name">LocalMemory</h2>
                  <p className="lab-product__tagline">Persistent memory for AI assistants</p>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div className="lab-product__body">
                  <p className="lab-product__desc">
                    LocalMemory gives Claude and other AI assistants the ability to <strong>store,
                    search, and build on knowledge across conversations</strong>. Open-source MCP server,
                    60 paying customers and growing.
                  </p>
                  <p className="lab-product__desc">
                    Building LocalMemory taught us how AI systems actually retain and apply
                    knowledge. That R&amp;D directly shapes how we design workforce assessments—the
                    same principles of structured knowledge, semantic search, and contextual
                    retrieval power the WARE Framework's analysis engine.
                  </p>
                  <div className="lab-product__actions">
                    <a
                      href="https://localmemory.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      localmemory.co
                    </a>
                    <a
                      href="https://github.com/danieleugenewilliams"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="lab-oss">
          <div className="shell">
            <div className="lab-oss__head">
              <Reveal>
                <h2 className="lab-oss__title">Open <em>source</em></h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="lab-oss__sub">
                  Experiments, utilities, and tools built in the open. All on GitHub.
                </p>
              </Reveal>
            </div>
            <div className="lab-oss__grid">
              {openSourceProjects.map((project, i) => (
                <Reveal key={project.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lab-oss__card"
                  >
                    <div className="lab-oss__card-name">{project.name}</div>
                    <p className="lab-oss__card-desc">{project.description}</p>
                    <div className="lab-oss__card-link">
                      GitHub <ArrowUpRight size={11} />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="lab-philosophy">
          <div className="shell">
            <Reveal>
              <blockquote className="lab-philosophy__pull">
                AI should extend human judgment, <em>not replace it.</em>
              </blockquote>
            </Reveal>
            <Reveal delay={1}>
              <p className="lab-philosophy__body">
                The best AI implementations handle the mechanical work—remembering, connecting,
                organizing—so people can focus on what matters: <strong>decisions, relationships,
                and creative work.</strong>
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="lab-philosophy__body">
                Every engagement starts with a real problem. We're not interested in AI for
                its own sake—only AI that creates measurable value for the business and
                the people in it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="lab-cta">
          <div className="shell">
            <div className="lab-cta__inner">
              <Reveal>
                <div className="lab-cta__text">
                  <div className="lab-cta__label">Get in touch</div>
                  <h2 className="lab-cta__title">
                    Interested in the WARE Framework <em>or want to collaborate?</em>
                  </h2>
                  <p className="lab-cta__desc">
                    Whether it's a workforce assessment, an open-source contribution, or just a conversation.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div className="lab-cta__actions">
                  <Link to="/contact" className="btn">
                    Contact
                  </Link>
                  <Link to="/services" className="btn btn--ghost">
                    Services
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
