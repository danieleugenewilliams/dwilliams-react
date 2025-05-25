import React, { useState } from "react";

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID;

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    message: "",
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
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: form.firstname },
              { name: "lastname", value: form.lastname },
              { name: "email", value: form.email },
              { name: "phone", value: form.phone },
              { name: "company", value: form.company },
              { name: "message", value: form.message },
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
        setError("There was a problem submitting the form. Please try again later.");
      }
    } catch (err) {
      setError("There was a problem submitting the form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-12">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-brand-primary">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">Ready to transform your organization? Get in touch with our team.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4">
              <h2 id="contact-form-title" className="text-xl font-semibold">Contact Us</h2>
              <p id="contact-form-description" className="text-sm text-muted-foreground mt-1">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            {submitted ? (
              <div className="text-green-600 font-semibold text-center py-8">Thank you for your message! We'll be in touch soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="contact-form-title" aria-describedby="contact-form-description" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium">First Name</label>
                    <input type="text" id="firstname" name="firstname" autoComplete="given-name" required className="mt-1 w-full rounded border px-3 py-2 text-base bg-background" value={form.firstname} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium">Last Name</label>
                    <input type="text" id="lastname" name="lastname" autoComplete="family-name" required className="mt-1 w-full rounded border px-3 py-2 text-base bg-background" value={form.lastname} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input type="email" id="email" name="email" autoComplete="email" required className="mt-1 w-full rounded border px-3 py-2 text-base bg-background" value={form.email} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                  <input type="tel" id="phone" name="phone" autoComplete="tel" className="mt-1 w-full rounded border px-3 py-2 text-base bg-background" value={form.phone} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium">Company</label>
                  <input type="text" id="company" name="company" autoComplete="organization" className="mt-1 w-full rounded border px-3 py-2 text-base bg-background" value={form.company} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded border px-3 py-2 text-base bg-background" value={form.message} onChange={handleChange} />
                </div>
                {error && <div className="text-red-600 text-sm">{error}</div>}
                <button type="submit" className="w-full rounded bg-brand-primary text-white py-2 font-semibold hover:bg-brand-primary/90 transition" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-bold text-brand-primary">Contact Information</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-3 h-5 w-5 text-muted-foreground"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <a href="mailto:info@dewilliamsco.com" className="text-brand-primary hover:underline">info@dewilliamsco.com</a>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin mr-3 h-5 w-5 text-muted-foreground"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <a href="https://linkedin.com/in/dewilliamsco" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">@dewilliamsco</a>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter mr-3 h-5 w-5 text-muted-foreground"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  <a href="https://twitter.com/dewilliamsco" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">@dewilliamsco</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-primary">Our Approach</h3>
              <p className="mt-2 text-muted-foreground">We believe in delivering high-value, results-oriented solutions that drive real transformation. Our approach combines deep industry expertise with cutting-edge technology to help you achieve your goals.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-primary">Response Time</h3>
              <p className="mt-2 text-muted-foreground">We typically respond to all inquiries within 1-2 business days. For urgent matters, please indicate so in your message.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
