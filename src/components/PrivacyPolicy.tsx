import React from "react";
import { SEO } from "./SEO";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy — D. E. Williams + Co."
        description="Privacy policy for D. E. Williams + Co. website and products."
        url="/privacy"
      />
      <main className="bg-background text-foreground w-full">
        {/* Header */}
        <section className="py-16 md:py-20 bg-grid border-b border-border">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6">
              <span className="text-terminal-cyan">$</span> cat PRIVACY.md
            </div>
            <h1 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="font-mono text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <div className="space-y-12 text-foreground">
              
              <div>
                <h2 className="font-mono text-lg font-semibold mb-4">// INFORMATION WE COLLECT</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Contact form:</strong> Name, email, company, message content.
                  </p>
                  <p>
                    <strong className="text-foreground">Automatically:</strong> IP address, browser type, pages visited, 
                    device information, referring website. Collected via Google Analytics.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-lg font-semibold mb-4">// HOW WE USE IT</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>— Respond to inquiries</li>
                  <li>— Improve website performance</li>
                  <li>— Analyze traffic patterns</li>
                  <li>— Legal compliance</li>
                </ul>
              </div>

              <div>
                <h2 className="font-mono text-lg font-semibold mb-4">// THIRD-PARTY SERVICES</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Google Analytics:</strong> Website traffic analysis.{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                      Privacy policy →
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">HubSpot:</strong> Contact form processing and CRM.{' '}
                    <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                      Privacy policy →
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-lg font-semibold mb-4">// COOKIES</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use analytics cookies (Google Analytics) and functional cookies (theme preference). 
                  Control via browser settings.
                </p>
              </div>

              <div>
                <h2 className="font-mono text-lg font-semibold mb-4">// DATA RETENTION</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>— Contact submissions: 1+ years</li>
                  <li>— Analytics: 26 months (Google default)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-mono text-lg font-semibold mb-4">// YOUR RIGHTS</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on location: access, correction, deletion, portability, objection, consent withdrawal.
                </p>
                <p className="text-muted-foreground">
                  Contact:{' '}
                  <a href="/contact" className="text-terminal-cyan hover:underline">
                    Get in touch
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-mono text-lg font-semibold mb-4">// CHANGES</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Policy may update. Check this page for current version.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
