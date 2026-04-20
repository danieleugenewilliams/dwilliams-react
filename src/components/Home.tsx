import { ConsultingHero } from './ConsultingHero';
import { MarqueeStrip } from './Marquee';
import { ProblemSection } from './ProblemSection';
import { WhatIDo } from './WhatIDo';
import { ProofSection } from './ProofSection';
import { CredentialsBanner } from './CredentialsBanner';
import { HowItWorks } from './HowItWorks';
import { WritingSection } from './WritingSection';
import { WorkWithMe } from './WorkWithMe';
import { SEO } from './SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="D. E. Williams + Co. — Fractional CTO & AI Transformation Officer"
        description="AI transformation leadership, embedded. I help companies move from AI experiments to AI results. Strategy, governance, architecture, and implementation."
        url="/"
      />
      <ConsultingHero />
      <MarqueeStrip />
      <ProblemSection />
      <WhatIDo />
      <ProofSection />
      <CredentialsBanner />
      <HowItWorks />
      <WritingSection />
      <WorkWithMe />
    </>
  );
}
