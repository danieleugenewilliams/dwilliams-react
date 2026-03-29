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
        title="D. E. Williams + Co. — Workforce Intelligence & AI Advisory"
        description="Workforce intelligence for the AI era. We help organizations understand which roles automation will reshape, when, and what to do about it."
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
