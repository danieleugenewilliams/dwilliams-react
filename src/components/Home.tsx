import { Hero } from './Hero';
import { Thesis } from './Thesis';
import { WhatIBelieve } from './WhatIBelieve';
import { WritingSection } from './WritingSection';
import { ProofSection } from './ProofSection';
import { WorkWithMe } from './WorkWithMe';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { SubscribeSection } from './SubscribeSection';
import { SEO } from './SEO';
import { CC4NC_SUBSCRIBERS } from '../lib/constants';

export default function Home() {
  return (
    <>
      <SEO
        title="Daniel E. Williams — architect & operator"
        description={`I build the tools I run my life on, and I write about how you can too. Claude Code for Non-Coders, ${CC4NC_SUBSCRIBERS.full} readers.`}
        url="/"
      />
      <Hero />
      <Thesis />
      <WhatIBelieve />
      <WritingSection />
      <ProofSection />
      <WorkWithMe />
      <AboutSection />
      <ContactSection />
      <SubscribeSection />
    </>
  );
}
