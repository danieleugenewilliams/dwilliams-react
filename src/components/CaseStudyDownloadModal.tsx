import React, { useState } from "react";

interface CaseStudyDownloadModalProps {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
  caseStudyTitle: string;
}

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_CASESTUDY_FORM_ID;

const CaseStudyDownloadModal: React.FC<CaseStudyDownloadModalProps> = ({ open, onClose, pdfUrl, caseStudyTitle }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

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
              { name: "email", value: email },
              { name: "case_study", value: caseStudyTitle },
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
        // Download the PDF
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = pdfUrl.split("/").pop() || "case-study.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(onClose, 2000);
      } else {
        setError("There was a problem submitting the form. Please try again later.");
      }
    } catch {
      setError("There was a problem submitting the form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-card rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground text-2xl">&times;</button>
        <h2 className="text-xl font-bold mb-4 text-primary">Download Case Study</h2>
        {submitted ? (
          <div className="text-green-600 font-semibold text-center py-8">Thank you! Your download will begin shortly.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded border px-3 py-2 text-base bg-background"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
              />
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button type="submit" className="w-full rounded bg-primary text-primary-foreground py-2 font-semibold hover:bg-primary/90 transition" disabled={loading}>
              {loading ? "Submitting..." : "Download PDF"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CaseStudyDownloadModal;
