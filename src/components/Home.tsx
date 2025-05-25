import HeroSection from "./HeroSection";
import ClientLogoCloud from "./ClientLogoCloud";
import ServiceOverview from "./ServiceOverview";
import CaseStudyPreview from "./CaseStudyPreview";
import CTASection from "./CTASection";
import { SEO } from "./SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="D. E. Williams & Company - Strategic Technology Advisory"
        description="Premium strategic advisory for leaders seeking to transform their organization through cloud, AI, and data. Expert consulting services for education technology, public sector, and nonprofit organizations."
        url="/"
      />
      <main className="fade-in bg-background text-foreground font-sans w-full overflow-x-hidden">
        <HeroSection />
        <ClientLogoCloud />
        <ServiceOverview />
        <CaseStudyPreview />
        <CTASection />
      </main>
    </>
  );
}
