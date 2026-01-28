import React, { useState } from "react";
import { SEO } from "./SEO";

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
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact — D. E. Williams + Co."
        description="Get in touch for product inquiries, advisory services, or collaboration opportunities."
        url="/contact"
      />
      <main className="bg-background text-foreground w-full">
        {/* Header */}
        <section className="py-16 md:py-24 bg-grid border-b border-border">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6">
              <span className="text-terminal-cyan">$</span> ./contact --init
            </div>
            <h1 className="text-3xl md:text-5xl font-mono font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Product questions, advisory inquiries, or just want to connect—drop a message.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Form */}
              <div className="md:col-span-3">
                <h2 className="font-mono text-sm text-muted-foreground mb-6">
                  // SEND MESSAGE
                </h2>
                
                {submitted ? (
                  <div className="border border-terminal-green/50 bg-terminal-green/10 p-6">
                    <p className="font-mono text-terminal-green">
                      [SUCCESS] Message received. I'll respond within 1-2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstname" className="block font-mono text-xs text-muted-foreground mb-2">
                          FIRST_NAME *
                        </label>
                        <input 
                          type="text" 
                          id="firstname" 
                          name="firstname" 
                          autoComplete="given-name" 
                          required 
                          className="w-full bg-card border border-border px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:border-terminal-cyan transition-colors" 
                          value={form.firstname} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div>
                        <label htmlFor="lastname" className="block font-mono text-xs text-muted-foreground mb-2">
                          LAST_NAME *
                        </label>
                        <input 
                          type="text" 
                          id="lastname" 
                          name="lastname" 
                          autoComplete="family-name" 
                          required 
                          className="w-full bg-card border border-border px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:border-terminal-cyan transition-colors" 
                          value={form.lastname} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-mono text-xs text-muted-foreground mb-2">
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
                      <label htmlFor="company" className="block font-mono text-xs text-muted-foreground mb-2">
                        COMPANY
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        autoComplete="organization" 
                        className="w-full bg-card border border-border px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:border-terminal-cyan transition-colors" 
                        value={form.company} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block font-mono text-xs text-muted-foreground mb-2">
                        MESSAGE *
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        required 
                        className="w-full bg-card border border-border px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:border-terminal-cyan transition-colors resize-none" 
                        value={form.message} 
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
                      {loading ? "[SENDING...]" : "[SUBMIT]"}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="md:col-span-2">
                <h2 className="font-mono text-sm text-muted-foreground mb-6">
                  // CONNECT
                </h2>
                
                <div className="space-y-6">
                  
                  <div>
                    <h3 className="font-mono text-sm font-semibold mb-2">Social</h3>
                    <div className="space-y-2">
                      <a 
                        href="https://www.linkedin.com/in/danieleugenewilliams/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block font-mono text-sm text-muted-foreground hover:text-terminal-cyan transition-colors"
                      >
                        LinkedIn →
                      </a>
                      <a 
                        href="https://twitter.com/dewilliamsco" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block font-mono text-sm text-muted-foreground hover:text-terminal-cyan transition-colors"
                      >
                        Twitter →
                      </a>
                      <a 
                        href="https://github.com/danieleugenewilliams" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block font-mono text-sm text-muted-foreground hover:text-terminal-cyan transition-colors"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-mono text-sm font-semibold mb-2">Newsletter</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Weekly insights on building with AI.
                    </p>
                    <a 
                      href="https://claudecodefornoncoders.substack.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-block text-xs"
                    >
                      [Explore]
                    </a>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <p className="font-mono text-xs text-muted-foreground">
                      Response time: 1-2 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
