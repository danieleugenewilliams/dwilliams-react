import React from "react";
import { SEO } from "./SEO";

const TermsConditions: React.FC = () => {
  return (
    <>
      <SEO 
        title="Terms and Conditions - D. E. Williams & Company"
        description="Terms and conditions for D. E. Williams & Company strategic technology consulting services. Legal terms for professional services, data processing, and website usage."
        keywords="terms and conditions, legal terms, consulting services, professional services agreement, technology consulting terms"
        url="/terms"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-brand-primary mb-8">Terms and Conditions</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            <span className="font-semibold">Last updated:</span> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Agreement Overview</h2>
              <p className="mb-4">
                These Terms and Conditions ("Terms") govern your use of the D. E. Williams & Company website and professional services. By accessing our website or engaging our services, you agree to be bound by these Terms.
              </p>
              <p className="mb-4">
                D. E. Williams & Company ("Company," "we," "us," or "our") provides strategic technology consulting services including AI/ML capability acceleration, digital transformation consulting, and related professional services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Professional Services</h2>
              
              <h3 className="text-xl font-medium mb-3">Service Offerings</h3>
              <p className="mb-4">Our professional services include but are not limited to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>ML Capability Accelerator programs</li>
                <li>GenAI Impact Studio solutions</li>
                <li>AI Transformation Blueprint assessments</li>
                <li>Strategic technology advisory services</li>
                <li>Digital transformation consulting</li>
                <li>Custom AI/ML solution development</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-3">Service Terms</h3>
              <p className="mb-4">
                Professional services are provided pursuant to separate written agreements that will govern the specific terms, deliverables, timelines, and compensation for each engagement. These Terms supplement but do not replace individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Website Usage</h2>
              
              <h3 className="text-xl font-medium mb-3">Permitted Use</h3>
              <p className="mb-4">
                You may use our website for lawful purposes related to learning about our services, contacting us for business inquiries, and accessing publicly available information. You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Use the website for any unlawful or prohibited purpose</li>
                <li>Attempt to gain unauthorized access to website systems</li>
                <li>Upload malicious code or interfere with website functionality</li>
                <li>Harvest or collect user information without consent</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Contact Form Submissions</h3>
              <p className="mb-4">
                When you submit information through our contact forms, you consent to us processing that information for the purpose of responding to your inquiry and potentially engaging in business discussions. Contact form data is processed through HubSpot in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              
              <h3 className="text-xl font-medium mb-3">Company Intellectual Property</h3>
              <p className="mb-4">
                The website content, including text, graphics, logos, images, service methodologies, frameworks, and software, is owned by D. E. Williams & Company and protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Client Work Product</h3>
              <p className="mb-4">
                Ownership of work product created during professional services engagements will be specified in individual service agreements. Generally, customized deliverables created specifically for clients will be owned by the client, while general methodologies and frameworks remain the property of the Company.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Confidentiality</h3>
              <p className="mb-4">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of professional services. Specific confidentiality terms will be detailed in individual service agreements or separate non-disclosure agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Processing and Analytics</h2>
              <p className="mb-4">
                Our website uses various analytics and tracking technologies to improve user experience and understand website usage:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><span className="font-semibold">Google Analytics:</span> Tracks website usage, page views, and user behavior patterns</li>
                <li><span className="font-semibold">Hotjar:</span> Records user sessions and creates heatmaps for website optimization</li>
                <li><span className="font-semibold">Web Vitals:</span> Monitors website performance metrics</li>
                <li><span className="font-semibold">HubSpot:</span> Processes contact form submissions for customer relationship management</li>
              </ul>
              <p className="mb-4">
                For detailed information about data collection, processing, and your rights, please see our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
              <p className="mb-4">
                Payment terms for professional services will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Services are typically invoiced on a project basis or milestone completion</li>
                <li>Payment terms are net 30 days unless otherwise specified</li>
                <li>Late payments may incur interest charges as permitted by law</li>
                <li>Certain engagements may require upfront deposits or progress payments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, D. E. Williams & Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Use of or inability to use our website</li>
                <li>Professional services provided</li>
                <li>Any errors or omissions in website content</li>
                <li>Unauthorized access to or alteration of your data</li>
              </ul>
              <p className="mb-4">
                Our total liability in any matter arising out of or related to these Terms or professional services shall not exceed the amount paid by you for the specific service giving rise to the liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Professional Standards and Warranties</h2>
              <p className="mb-4">
                We warrant that professional services will be performed in a professional and workmanlike manner in accordance with industry standards. This warranty is limited to correction or re-performance of defective services and does not extend to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Results or outcomes that depend on client implementation or external factors</li>
                <li>Changes in technology, regulations, or market conditions after service completion</li>
                <li>Client modifications to delivered work product</li>
              </ul>
              <p className="mb-4">
                <span className="font-semibold">DISCLAIMER:</span> EXCEPT AS EXPRESSLY STATED, ALL SERVICES AND WEBSITE CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              
              <h3 className="text-xl font-medium mb-3">Website Access</h3>
              <p className="mb-4">
                We may suspend or terminate your access to our website at any time for violation of these Terms or other reasonable business reasons.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Professional Services</h3>
              <p className="mb-4">
                Professional services engagements may be terminated as specified in individual service agreements. Generally, either party may terminate with written notice, subject to payment for work completed and reimbursement of expenses incurred through the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Force Majeure</h2>
              <p className="mb-4">
                Neither party shall be liable for any delay or failure to perform due to circumstances beyond reasonable control, including but not limited to acts of God, government actions, war, terrorism, pandemic, natural disasters, or technology failures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Disputes</h2>
              <p className="mb-4">
                These Terms are governed by the laws of the jurisdiction where D. E. Williams & Company is organized, without regard to conflict of law principles. Any disputes arising under these Terms will be resolved through:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Good faith negotiation between the parties</li>
                <li>If negotiation fails, binding arbitration in accordance with commercial arbitration rules</li>
                <li>Courts of competent jurisdiction as specified in individual service agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Modifications and Updates</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. Material changes will be communicated by updating the "Last updated" date and posting the revised Terms on our website. Continued use of our website or services after changes constitutes acceptance of the updated Terms.
              </p>
              <p className="mb-4">
                For significant changes affecting existing service agreements, we will provide reasonable notice and may require explicit acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
              <p className="mb-4">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect. Invalid provisions will be modified to the minimum extent necessary to make them valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
              <p className="mb-4">
                If you have questions about these Terms or need to contact us regarding our services, please reach out through:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="mb-2"><span className="font-semibold">D. E. Williams & Company</span></p>
                <p className="mb-2">Website: <a href="/" className="text-primary hover:underline">dewilliamsco.com</a></p>
                <p className="mb-2">Contact Form: <a href="/contact" className="text-primary hover:underline">Get in touch</a></p>
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

export default TermsConditions;