import { ConsultingHero } from './ConsultingHero';
import { ProblemSection } from './ProblemSection';
import { WhatIDo } from './WhatIDo';
import { ProofSection } from './ProofSection';
import { ProductGrid } from './ProductGrid';
import { HowItWorks } from './HowItWorks';
import { WorkWithMe } from './WorkWithMe';
import { SEO } from './SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="D. E. Williams + Co. — AI Advisory & Consulting"
        description="From AI experiments to AI results. I help companies stop piloting and start shipping. Strategy, architecture, and implementation."
        url="/"
      />
      <main className="bg-background text-foreground w-full overflow-x-hidden">
        <ConsultingHero />
        <ProblemSection />
        <WhatIDo />
        <ProofSection />
        <div id="products">
          <ProductGrid />
        </div>
        <HowItWorks />
        <WorkWithMe />
      </main>
    </>
  );
}
