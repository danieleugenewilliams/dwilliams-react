import HeroSection from "./HeroSection";
import ClientLogoCloud from "./ClientLogoCloud";
import ServiceOverview from "./ServiceOverview";
import CaseStudyPreview from "./CaseStudyPreview";
import CTASection from "./CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientLogoCloud />
      <ServiceOverview />
      <CaseStudyPreview />
      <CTASection />
    </main>
  );
}
