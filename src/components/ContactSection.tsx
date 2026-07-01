import { useState } from 'react';
import { Reveal } from './Reveal';

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID;

export function ContactSection() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
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
              { name: 'company', value: form.company },
              { name: 'message', value: form.message },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
              hutk: document.cookie.match(/hubspotutk=([^;]*)/)?.[1],
            },
          }),
        }
      );
      if (res.ok) setSubmitted(true);
      else setError('Submission failed. Please try again.');
    } catch {
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section rule-top" id="contact">
      <div className="shell sp-contact">
        <div className="sp-contact__intro">
          <Reveal>
            <span className="eyebrow">// CONTACT</span>
            <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '16ch' }}>
              Let's{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>talk.</em>
            </h2>
            <p className="t-lead t-muted-new" style={{ marginTop: '1.25rem', maxWidth: '38ch' }}>
              Advisory, speaking, or a collaboration worth building. Tell me what's on your
              mind. I reply within one to two business days.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1} className="sp-contact__form">
          {submitted ? (
            <div className="contact-success" role="status">
              <span className="dot" />
              <p className="contact-success__text">
                Message received. I'll respond within one to two business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="firstname" className="contact-form__label">
                    First name <span aria-hidden="true">*</span>
                  </label>
                  <input type="text" id="firstname" name="firstname" autoComplete="given-name" required className="contact-form__input" value={form.firstname} onChange={handleChange} />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="lastname" className="contact-form__label">
                    Last name <span aria-hidden="true">*</span>
                  </label>
                  <input type="text" id="lastname" name="lastname" autoComplete="family-name" required className="contact-form__input" value={form.lastname} onChange={handleChange} />
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="email" className="contact-form__label">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input type="email" id="email" name="email" autoComplete="email" required className="contact-form__input" value={form.email} onChange={handleChange} />
              </div>

              <div className="contact-form__field">
                <label htmlFor="company" className="contact-form__label">
                  Company <span className="contact-form__optional">(optional)</span>
                </label>
                <input type="text" id="company" name="company" autoComplete="organization" className="contact-form__input" value={form.company} onChange={handleChange} />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message" className="contact-form__label">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea id="message" name="message" rows={5} required className="contact-form__input contact-form__input--textarea" value={form.message} onChange={handleChange} />
              </div>

              {error && (
                <div className="contact-form__error" role="alert">{error}</div>
              )}

              <button type="submit" className="btn contact-form__submit" disabled={loading}>
                {loading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
