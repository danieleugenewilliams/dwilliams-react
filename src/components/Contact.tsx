import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';
import { ArrowUpRight } from './Icons';

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID;

export default function Contact() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: form.firstname },
              { name: 'lastname', value: form.lastname },
              { name: 'email', value: form.email },
              { name: 'phone', value: form.phone },
              { name: 'company', value: form.company },
              { name: 'message', value: form.message },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );
      if (res.ok) {
        setSubmitted(true);
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
        title="Contact — D. E. Williams + Co."
        description="Get in touch for workforce intelligence assessments, advisory services, or partnership opportunities."
        url="/contact"
      />
      <main className="contact-main">

        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero__bg" aria-hidden="true" />
          <div className="contact-hero__grid" aria-hidden="true" />
          <div className="contact-hero__inner shell">
            <Reveal>
              <div className="contact-hero__meta">
                <span className="dot" />
                Contact — D. E. Williams + Co.
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="contact-hero__title">
                Let's <em>work together.</em>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="contact-hero__lede">
                Advisory engagements, WARE assessments, partnerships,
                or just want to connect — <strong>start here.</strong>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Audience Context */}
        <section className="contact-context">
          <div className="contact-context__inner shell">
            <Reveal>
              <p className="eyebrow contact-context__eyebrow">Who reaches out</p>
            </Reveal>
            <div className="contact-context__grid">
              <Reveal delay={1}>
                <div className="contact-context__card">
                  <p className="contact-context__card-label">For organizations</p>
                  <h2 className="contact-context__card-title">
                    AI transformation <em>leadership</em>
                  </h2>
                  <p className="contact-context__card-body">
                    If your organization is navigating AI adoption, workforce
                    realignment, or needs an embedded fractional advisory
                    engagement — use the form below to start a conversation.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="contact-context__card">
                  <p className="contact-context__card-label">For individuals</p>
                  <h2 className="contact-context__card-title">
                    Understand your <em>resilience</em>
                  </h2>
                  <p className="contact-context__card-body">
                    Curious about your role's automation exposure? The free
                    WARE assessment takes 30 seconds and gives you an
                    immediate score.
                  </p>
                  <a
                    href="https://automationresilience.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost contact-context__cta"
                  >
                    Take the free assessment <ArrowUpRight size={14} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="contact-form-section">
          <div className="shell">
            <Reveal>
              <p className="eyebrow contact-form-section__eyebrow">Send a message</p>
            </Reveal>
            <Reveal delay={1}>
              <div className="contact-form-card">

                {/* Left: Form or Success */}
                <div className="contact-form-card__main">
                  {submitted ? (
                    <div className="contact-success" role="status">
                      <span className="dot" />
                      <p className="contact-success__text">
                        Message received. We'll respond within 1–2 business days.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="contact-form">

                      <div className="contact-form__row">
                        <div className="contact-form__field">
                          <label htmlFor="firstname" className="contact-form__label">
                            First name <span aria-hidden="true">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            autoComplete="given-name"
                            required
                            className="contact-form__input"
                            value={form.firstname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="contact-form__field">
                          <label htmlFor="lastname" className="contact-form__label">
                            Last name <span aria-hidden="true">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            autoComplete="family-name"
                            required
                            className="contact-form__input"
                            value={form.lastname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="contact-form__field">
                        <label htmlFor="email" className="contact-form__label">
                          Email <span aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          required
                          className="contact-form__input"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="contact-form__field">
                        <label htmlFor="company" className="contact-form__label">
                          Company <span className="contact-form__optional">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          autoComplete="organization"
                          className="contact-form__input"
                          value={form.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="contact-form__field">
                        <label htmlFor="message" className="contact-form__label">
                          Message <span aria-hidden="true">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="contact-form__input contact-form__input--textarea"
                          value={form.message}
                          onChange={handleChange}
                        />
                      </div>

                      {error && (
                        <div className="contact-form__error" role="alert">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn contact-form__submit"
                        disabled={loading}
                      >
                        {loading ? 'Sending…' : 'Send message'}
                      </button>

                    </form>
                  )}
                </div>

                {/* Right: Sidebar */}
                <aside className="contact-form-card__sidebar">
                  <div className="contact-sidebar__response">
                    <span className="contact-sidebar__response-label">Response time</span>
                    <span className="contact-sidebar__response-value">1–2 business days</span>
                  </div>

                  <div className="contact-sidebar__section">
                    <p className="contact-sidebar__heading">Connect</p>
                    <ul className="contact-sidebar__links">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/danieleugenewilliams/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-sidebar__link"
                        >
                          LinkedIn <ArrowUpRight size={13} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/dewilliamsco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-sidebar__link"
                        >
                          Twitter / X <ArrowUpRight size={13} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/danieleugenewilliams"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-sidebar__link"
                        >
                          GitHub <ArrowUpRight size={13} />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="contact-sidebar__section">
                    <p className="contact-sidebar__heading">Newsletter</p>
                    <p className="contact-sidebar__body">
                      Workforce intelligence insights and AI tutorials.
                    </p>
                    <Link to="/insights" className="btn btn--ghost contact-sidebar__insights-btn">
                      Read Insights <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </aside>

              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </>
  );
}
