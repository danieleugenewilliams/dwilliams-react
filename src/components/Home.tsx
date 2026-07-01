import { Hero } from './Hero';
import { Thesis } from './Thesis';
import { WhatIBelieve } from './WhatIBelieve';
import { ProofSection } from './ProofSection';
import { WritingSection } from './WritingSection';
import { WorkWithMe } from './WorkWithMe';
import { SEO } from './SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Daniel E. Williams — architect & operator"
        description="I build the tools I run my life on, and I write about how you can too. Claude Code for Non-Coders, 34,000+ readers."
        url="/"
      />
      <Hero />
      <Thesis />
      <WhatIBelieve />
      <WritingSection />
      <ProofSection />
      <WorkWithMe />
    </>
  );
}
