import { useState } from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID;

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', kind: 'Advisory', note: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const trimmed = form.name.trim();
    const firstSpace = trimmed.indexOf(' ');
    const firstname = firstSpace === -1 ? trimmed : trimmed.slice(0, firstSpace);
    const lastname = firstSpace === -1 ? '' : trimmed.slice(firstSpace + 1);

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: firstname },
              { name: 'lastname', value: lastname },
              { name: 'email', value: form.email },
              { name: 'company', value: form.company },
              { name: 'message', value: `Interested in: ${form.kind}\n\n${form.note}` },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
              hutk: document.cookie.match(/hubspotutk=([^;]*)/)?.[1],
            },
          }),
        }
      );
      if (res.ok) setSent(true);
      else setError('Submission failed. Please try again.');
    } catch {
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="folio">
          <span className="folio__no">§ 08</span>
          <span className="folio__name">Contact</span>
          <span className="folio__rule" />
        </div>
        <div className="contact-grid">
          <Reveal>
            <h2 className="believe__lead" style={{ maxWidth: '18ch', marginTop: 0 }}>
              Have something <em>specific</em> in mind?
            </h2>
            <p className="serif-lead" style={{ marginTop: '1.25rem' }}>
              One note for advisory or speaking. If I can genuinely move it, you'll hear back within
              two business days.
            </p>
            <div className="contact-links">
              <a className="txt-link" href="https://linkedin.com/in/danieleugenewilliams" target="_blank" rel="noreferrer">
                linkedin.com/in/danieleugenewilliams
              </a>
              <a className="txt-link" href="https://substack.com/@dewilliamsco" target="_blank" rel="noreferrer">
                substack.com/@dewilliamsco
              </a>
              <a className="txt-link" href="https://x.com/dewilliamsco" target="_blank" rel="noreferrer">
                x.com/dewilliamsco
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form className="cform" onSubmit={handleSubmit}>
              <div className="cform__row">
                <label className="cform__field">
                  <span className="cform__label">Name</span>
                  <input className="cform__input" required autoComplete="name" value={form.name} onChange={update('name')} />
                </label>
                <label className="cform__field">
                  <span className="cform__label">Email</span>
                  <input className="cform__input" type="email" required autoComplete="email" value={form.email} onChange={update('email')} />
                </label>
              </div>
              <div className="cform__row">
                <label className="cform__field">
                  <span className="cform__label">Company</span>
                  <input className="cform__input" autoComplete="organization" value={form.company} onChange={update('company')} />
                </label>
                <label className="cform__field">
                  <span className="cform__label">About</span>
                  <select className="cform__input" value={form.kind} onChange={update('kind')}>
                    <option>Advisory</option>
                    <option>Speaking</option>
                    <option>Both</option>
                  </select>
                </label>
              </div>
              <label className="cform__field">
                <span className="cform__label">What's the problem?</span>
                <textarea className="cform__input cform__input--area" value={form.note} onChange={update('note')} />
              </label>

              {error && (
                <div className="cform__error" role="alert">
                  {error}
                </div>
              )}

              <div className="cform__submit">
                <span className="subform__caption" style={{ margin: 0 }}>
                  Inbound only · replies in ~2 business days
                </span>
                <button type="submit" className="btn" disabled={loading || sent}>
                  {loading ? (
                    'Sending…'
                  ) : sent ? (
                    'Received — thank you'
                  ) : (
                    <>
                      Send
                      <span className="btn__arrow">
                        <ArrowRight />
                      </span>
                    </>
                  )}
                </button>
              </div>

              {sent && (
                <div className="cform__success" role="status">
                  ✓ Got it, {form.name || 'there'}. I'll be in touch within two business days.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
