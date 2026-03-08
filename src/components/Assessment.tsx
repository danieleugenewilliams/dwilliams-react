import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_ASSESSMENT_FORM_ID;

const INDUSTRIES = [
  'Technology',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail & E-Commerce',
  'Professional Services',
  'Education',
  'Government',
  'Media & Entertainment',
  'Transportation & Logistics',
  'Energy & Utilities',
  'Real Estate',
  'Nonprofit',
  'Other',
];

export default function Assessment() {
  const [form, setForm] = useState({
    email: '',
    jobtitle: '',
    industry: '',
    years_experience: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    const fields = [
      { name: 'email', value: form.email },
      { name: 'jobtitle', value: form.jobtitle },
      { name: 'industry', value: form.industry },
    ];

    if (form.years_experience) {
      fields.push({ name: 'years_experience', value: form.years_experience });
    }

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields,
            context: {
              pageUri: window.location.href,
              pageName: 'WARE Assessment Waitlist',
            },
          }),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        if (window.gtag) {
          window.gtag('event', 'waitlist_signup', {
            event_category: 'Assessment',
            industry: form.industry,
            has_job_title: form.jobtitle ? 'yes' : 'no',
          });
        }
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch {
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Free AI Resilience Assessment — D. E. Williams + Co."
        description="How resilient is your role? Get your AI resilience score powered by the WARE Framework. Task-level risk analysis and personalized action plan."
        url="/assessment"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="section-padding bg-grid">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in-1">
              <span className="text-terminal-cyan">$</span> ware --assess
            </div>
            <h1 className="text-page-hero font-mono font-bold mb-6 animate-fade-in-2">
              How Resilient Is Your Role?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-3">
              We're building a free automation resilience assessment powered by
              the{' '}
              <Link
                to="/lab"
                className="text-terminal-cyan hover:underline"
              >
                WARE Framework
              </Link>
              . Be the first to get your score.
            </p>
          </div>
        </section>

        {/* Value Prop */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // WHAT_YOU_GET
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              <Reveal delay={1}>
                <div>
                  <h3 className="font-mono text-base font-semibold mb-3">
                    [01] Resilience Score
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A 0–100 score measuring how resilient your role is to
                    automation — AI, robotics, and autonomous systems.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div>
                  <h3 className="font-mono text-base font-semibold mb-3">
                    [02] Task-Level Analysis
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Not job-title guessing. We analyze the actual tasks in your
                    role against current and emerging automation capabilities.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div>
                  <h3 className="font-mono text-base font-semibold mb-3">
                    [03] Action Plan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized recommendations for strengthening your position
                    as automation reshapes your industry.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding section-alt" ref={formSectionRef}>
          <div className="container max-w-xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // JOIN_WAITLIST
              </h2>
            </Reveal>

            {submitted ? (
              <div className="border border-terminal-green/50 bg-terminal-green/10 p-8">
                <p className="font-mono text-terminal-green mb-2">
                  [SUCCESS] You're on the list.
                </p>
                <p className="text-sm text-muted-foreground">
                  We'll email you when the assessment goes live. In the
                  meantime, learn more about the{' '}
                  <Link
                    to="/lab"
                    className="text-terminal-cyan hover:underline"
                  >
                    WARE Framework
                  </Link>{' '}
                  powering the analysis.
                </p>
              </div>
            ) : (
              <Reveal delay={1}>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-muted-foreground mb-2"
                    >
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="w-full bg-card border border-border px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:border-terminal-cyan transition-colors"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="jobtitle"
                      className="block font-mono text-xs text-muted-foreground mb-2"
                    >
                      JOB_TITLE *
                    </label>
                    <input
                      type="text"
                      id="jobtitle"
                      name="jobtitle"
                      autoComplete="organization-title"
                      required
                      placeholder="e.g. Financial Analyst, Software Engineer"
                      className="w-full bg-card border border-border px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-terminal-cyan transition-colors"
                      value={form.jobtitle}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block font-mono text-xs text-muted-foreground mb-2"
                    >
                      INDUSTRY *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="w-full bg-card border border-border px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:border-terminal-cyan transition-colors"
                      value={form.industry}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select your industry
                      </option>
                      {INDUSTRIES.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="years_experience"
                      className="block font-mono text-xs text-muted-foreground mb-2"
                    >
                      YEARS_EXPERIENCE{' '}
                      <span className="text-muted-foreground/50">(optional)</span>
                    </label>
                    <input
                      type="number"
                      id="years_experience"
                      name="years_experience"
                      min="0"
                      max="50"
                      className="w-full bg-card border border-border px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:border-terminal-cyan transition-colors"
                      value={form.years_experience}
                      onChange={handleChange}
                    />
                  </div>

                  {error && (
                    <div className="font-mono text-xs text-terminal-red">
                      [ERROR] {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={loading}
                  >
                    {loading ? '[SUBMITTING...]' : '[JOIN WAITLIST]'}
                  </button>
                </form>
              </Reveal>
            )}

            <Reveal delay={2}>
              <p className="font-mono text-xs text-muted-foreground mt-8 text-center">
                Powered by the WARE Framework — combining O*NET structural data,
                LLM analysis, and observed AI adoption patterns.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
