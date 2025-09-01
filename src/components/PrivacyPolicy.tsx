import React from "react";
import { SEO } from "./SEO";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - D. E. Williams & Company"
        description="Privacy policy for D. E. Williams & Company website. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information, cookies, GDPR"
        url="/privacy"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-brand-primary mb-8">Privacy Policy</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <p className="mb-4">
                When you contact us through our contact form, we collect the following personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>First and last name (required)</li>
                <li>Email address (required)</li>
                <li>Phone number (optional)</li>
                <li>Company name (optional)</li>
                <li>Message content (required)</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-3">Automatically Collected Information</h3>
              <p className="mb-4">
                We automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>IP address and general location information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Device information (screen resolution, device type)</li>
                <li>Website performance metrics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>To respond to your inquiries and provide customer service</li>
                <li>To improve our website performance and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To ensure the security and functionality of our website</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services</h2>
              <p className="mb-4">
                We use the following third-party services that may collect and process your information:
              </p>
              
              <h3 className="text-xl font-medium mb-3">Google Analytics</h3>
              <p className="mb-4">
                We use Google Analytics to analyze website traffic and user behavior. Google Analytics may collect information such as your IP address, browser type, pages visited, and time spent on the site. This information helps us understand how visitors interact with our website and improve our services.
              </p>
              <p className="mb-4">
                Google's privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
              </p>
              
              <h3 className="text-xl font-medium mb-3">Hotjar</h3>
              <p className="mb-4">
                We use Hotjar to understand user behavior through session recordings and heatmaps. Hotjar may collect information about your interactions with our website, including mouse movements, clicks, and scrolling behavior.
              </p>
              <p className="mb-4">
                Hotjar's privacy policy: <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.hotjar.com/legal/policies/privacy/</a>
              </p>
              
              <h3 className="text-xl font-medium mb-3">HubSpot</h3>
              <p className="mb-4">
                Our contact form submissions are processed through HubSpot. When you submit a contact form, your information is transmitted to and stored by HubSpot for customer relationship management purposes.
              </p>
              <p className="mb-4">
                HubSpot's privacy policy: <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://legal.hubspot.com/privacy-policy</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Analytics Cookies:</strong> Used by Google Analytics to track website usage and performance</li>
                <li><strong>Functional Cookies:</strong> Used to remember your preferences (such as dark/light theme selection)</li>
                <li><strong>Session Tracking:</strong> Used by Hotjar to record user sessions for website optimization</li>
              </ul>
              <p className="mb-4">
                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security and Protection</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Secure data transmission using HTTPS encryption</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure third-party service providers with appropriate data protection measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="mb-4">
                We retain your information for the following periods:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Contact Form Submissions:</strong> Retained for at least 1 year for business communication and legal compliance purposes</li>
                <li><strong>Analytics Data:</strong> Retained according to Google Analytics retention settings (26 months by default)</li>
                <li><strong>Session Data:</strong> Retained according to Hotjar retention settings (365 days by default)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete personal information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your personal information in a structured format</li>
                <li><strong>Object:</strong> Object to processing of your personal information for certain purposes</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent is the legal basis</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own, including the United States, where our third-party service providers operate. These transfers are conducted in accordance with applicable data protection laws and appropriate safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
              <p className="mb-4">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will post the updated policy on this page and update the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="mb-2"><strong>D. E. Williams & Company</strong></p>
                <p className="mb-2">Email: Contact us through our <a href="/contact" className="text-primary hover:underline">contact form</a></p>
                <p className="mb-2">LinkedIn: <a href="https://linkedin.com/in/dewilliamsco" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@dewilliamsco</a></p>
                <p>Twitter: <a href="https://twitter.com/dewilliamsco" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@dewilliamsco</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;