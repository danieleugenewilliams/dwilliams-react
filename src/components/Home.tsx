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
        title="D. E. Williams + Co. — Fractional CTO & AI Advisory"
        description="Fractional CTO and Chief AI Officer. From AI experiments to AI results. I help companies stop piloting and start shipping."
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
