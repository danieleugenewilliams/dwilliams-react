import { ConsultingHero } from './ConsultingHero';
import { ProblemSection } from './ProblemSection';
import { WhatIDo } from './WhatIDo';
import { ProofSection } from './ProofSection';
import { CredentialsBanner } from './CredentialsBanner';
import { HowItWorks } from './HowItWorks';
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
      <main className="bg-background text-foreground w-full overflow-x-hidden">
        <ConsultingHero />
        <ProblemSection />
        <WhatIDo />
        <ProofSection />
        <CredentialsBanner />
        <HowItWorks />
        <WorkWithMe />
      </main>
    </>
  );
}
