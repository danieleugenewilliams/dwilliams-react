# dewilliams.co Revamp — Change Plan v2

**Date:** July 1, 2026
**Supersedes:** `dewilliams-co-revamp-plan.md` (March 2026, "AI-native services company" direction — retire it).
**Status:** Approved. Single-page rebuild. Copy final. Ready to build (start on a feature branch).
**Reconciled against:** `~/Documents/Newsletters/Branding-Strategy-v2-2026-06-01.md` (Canonical) and `docs/voice-and-ai-tells.md`. See appendix for the full reconciliation.

---

## Positioning

Ideas platform / personal-brand front door. Spine: **"The individual can own the means of leverage in the AI age, and here's someone doing it."** Sell the worldview + proof, not hours. Newsletter (*Claude Code for Non-Coders*) is the primary CTA. Advisory + speaking are supporting, inbound-only offers. Identity repeated throughout: **architect / operator** (writer co-present).

**Voice:** trust over virality, depth, steelman the other side. All copy passes `voice-and-ai-tells.md` (no em dashes; no "leverage" as a verb; no signpost sentences; no parallel scaffolds; texture over specifics). **Frame:** ownership/sovereignty is the *mechanism*; human flourishing is the *end*.
**Non-partisan:** keep the worldview principled; no political-office framing (internal note, not on the site).

### The five beliefs
1. Value should accrue to the individual, not the platform owner.
2. Stay the operator, not the AI's assistant (reverse-centaur).
3. Own the architecture (sovereign AI = portability + know-how, not self-hosting purism). You can run frontier models and still be sovereign, as long as you own the architecture and have the developed knowledge to move to another model or stack when you need to.
4. The gate to leverage is effort / learning, not permission.
5. Institutions captured every prior productivity tool; this is the first an individual can own outright.

---

## Structure — single-page scroll

dewilliams.co becomes one scrolling page. `/privacy` stays a standalone route. Nav = in-page anchor links (Writing · Proof · Work with me · About) + a **Subscribe** button.

**Section order (anchored):**
1. **Hero** — architect/operator identity + "Point it at what matters" + inline newsletter signup + principal portrait. Primary CTA: Subscribe.
2. **Thesis** — locked manifesto, verbatim.
3. **What I Believe** — the 5 beliefs nested under the manifesto; arc completed to flourishing.
4. **Writing** — CC4NC primary (34K+) + DEWCO Insights archive; latest posts via RSS; Subscribe.
5. **Proof** — LocalMemory + home-AI stack + open source as evidence of building. WARE linked out to AR.com. No course.
6. **Work with me** — Advisory (selective, inbound) + Speaking, one form → Contact.
7. **About** — 25 years consulting → builder-writer; locked bio voice; condensed timeline + credentials beneath.
8. **Contact** — inline HubSpot form (advisory + speaking).
9. **Subscribe** — closing CTA.

**Footer:** "Shipping > Pitching. — Daniel" + links (dewilliams.co · localmemory.co · Claude Code for Non-Coders · LinkedIn · GitHub).

---

## Build mechanics

**Routing (`App.tsx`):** keep `/` and `/privacy`. Redirect every old route to `/` (or its matching `#anchor`): `/services`, `/consulting`, `/assessment`, `/partners`, `/case-studies`, `/insights`, `/newsletters`, `/writing`, `/lab`, `/about`, `/bio`.

**Delete:** `Services.tsx`, `Assessment.tsx`, `Partners.tsx` + their page CSS.

**Reuse (don't rebuild):**
- Hero + Subscribe email capture → the `Insights` `handleSubscribe` handler (posts to CC4NC Substack).
- Writing "latest posts" → existing RSS pipeline (`scripts/fetch-posts.mjs` → `public/data/posts.json`), as `WritingSection`/`Insights` already do.
- Proof → repurpose `ProofSection` + `Lab` content (LocalMemory, open-source cards).
- About → reuse the `About` timeline + credentials components beneath the new lede.
- Contact → keep the `Contact` HubSpot form.

**`scripts/prerender.mjs`:** `ROUTES = ['/', '/privacy']`.

**Data / copy fixes:**
- `constants.ts` → subscriber count **34,000+** (was 33k; bump rule: next round thousand, min every 5K).
- Tenure **25 years** everywhere (was "20+" in `ConsultingHero` and the About timeline/lede).
- SEO: rewrite every `SEO` title/description + `index.html` OG/Twitter tags (currently "Fractional CTO & AI Advisory…").
- `CLAUDE.md`: update positioning + design-system section (still says "Lab Terminal" / fractional-CTO).
- Retire `docs/dewilliams-co-revamp-plan.md`.

**Visual direction (adopt brand-doc system):** Newsreader serif + JetBrains Mono; warm-neutral palette with peach/coral + forest-green accents; **principal portrait required**, stock banned. Replaces the current dark Fraunces editorial-luxe. Reads cooler/reserved (principal register) vs AR.com's product register.

---

## Final copy (all sections, voice-compliant)

**Locked (July 1):** Headline = "Point it at what matters." · Tenure = 25 years · 5 beliefs · 34,000+ subscribers.

### HERO

**Eyebrow (mono):** `ARCHITECT / OPERATOR · COASTAL VIRGINIA`
**Sub-eyebrow (mono):** `Claude Code for Non-Coders · 34,000+ readers`

**H1:** Point it at what matters.

**Dek:** For twenty-five years I built software and led consulting teams. Now I build my own agents: the one that runs my training and sleep over Telegram, the memory layer behind my writing, the systems that hand me back my mornings. AI collapsed the cost of expertise. What's left is the question of what you point it at, and I write about that every week.

**Primary CTA:** email field + **Subscribe**. Caption: *Claude Code for Non-Coders. Free, Tuesdays and Thursdays.*
**Secondary:** Read what I believe ↓

*(Portrait required.)*

### THESIS (locked manifesto, verbatim)

> **We automate tasks that enhance human flourishing. We resist automation that encroaches on human judgment.**

**Gloss:** That is not a position against AI. It is a position against handing over the one part of the work that was always yours: the judgment that made you worth listening to in the first place.

### WHAT I BELIEVE

**Eyebrow:** `// WHAT_I_BELIEVE`
**Lead:** A handful of things I'm convinced of. The rest of this page is me trying to prove them.

**Value should accrue to the person, not the platform.**
The leverage is real. The only fight that matters is over who keeps it. Build so the upside lands on you and the people you serve, not on whoever rents you the model. The platforms earn their cut by making hard things easy, and I pay it gladly. It stops being a fair trade the day the rent runs higher than the value and you have no way out.

**Stay the operator, not the assistant.**
The risk isn't that AI replaces you. It's that it quietly demotes you: you feed the machine, it decides, you rubber-stamp what it returns. Anthropic's own research has a name for that pattern, the reverse-centaur, and I've watched sharp people slide into it without noticing. Keep your hands on the decisions that carry consequences and hand off the rest on purpose. Sometimes the model really is better at a task than you are, and pretending otherwise is just ego; the discipline is knowing which times those are.

**Own the architecture.**
Sovereignty isn't self-hosting purism. Run the frontier model if it's the best tool for the job; I do. What keeps you sovereign is owning the architecture around it and building the knowledge to move, so when a vendor changes the price or the terms you swap the model underneath and keep working. The labs are genuinely ahead, and rolling your own from scratch is slower and worse. So use them. Just don't build a house you can never move out of.

**The gate is effort, not permission.**
Nobody is coming to authorize you. The barrier here was never a credential or a title; it's whether you'll put in the reps to learn. That gate you control, which is the good news and the uncomfortable news at once. Access and capital still tilt the field hard, and an afternoon of practice doesn't erase that. But the part that's genuinely yours to take has never been this large.

**This is the first tool an individual can own outright.**
The printing press, the factory, the mainframe, the cloud: an institution captured every earlier jump in productivity, because every one of them needed an institution's capital to run. A capable model on hardware you already own is the first that doesn't. The frontier still belongs to a handful of labs, and it will for a while. That's fine. Good enough and yours beats best and rented more often than the frontier wants you to believe.

**Closing arc bridge (to flourishing):**
None of this is the point on its own. Owning the tools only matters because of what you can finally aim them at: your health, your family, the problems money and access used to gate. Keeping your judgment valuable is the foundation. Building a life worth living is the point.

### WRITING

**Eyebrow:** `// WRITING`
**Header:** The writing is the main thing. Everything else runs downstream of it.
**Lead:** I publish Claude Code for Non-Coders twice a week for senior technical people who built careers on judgment, stopped writing code years ago, and are working out what coding agents change for them. Tuesdays are the practical build. Thursdays are one idea I think is consequential, developed in full. Both are worth reading; only one costs anything.

**Second publication (DEWCO archive):** There's an older publication too, D.E. Williams + Co. Insights, where I first worked out the philosophy underneath all of this: using AI to protect your life instead of feeding it to your employer. The archive still holds up.

**Latest posts:** [dynamic, via existing RSS pipeline]
**CTA:** Subscribe.

### PROOF

**Eyebrow:** `// PROOF`
**Header:** I don't just write about this. I run my life on it.
**Lead:** The argument only counts if I'm living it, so here is the stack I actually own.

- **LocalMemory** — An open-source memory server for AI assistants. It gives Claude and other models memory that persists across conversations, running on your machine instead of a vendor's. Sixty people pay for it. `localmemory.co`.
- **My home agents** — A Claude Code agent that runs my training, sleep, and health logging over Telegram. It's the clearest proof I have of the whole thesis: I built it, I own it, and it guards the mornings I care about instead of billing them to someone else.
- **Open source** — zvec-go, agent-harness, othello-agent. The smaller pieces, built in the open, that the larger systems stand on.
- **WARE** (link out) — I also built WARE, a workforce-automation resilience assessment. It's a real product with paying customers, and it lives at `automationresilience.com`.
- **Before it was mine to own** (bridge to About) — I did this at scale for other people first: $2.5M saved at TaxAct, an account grown from $28K to $4M in nine months, $5M in annual savings at NFL Digital Media. That story is below, in About.

*(Cards, not a prose list; each blurb written to voice.)*

### WORK WITH ME (Advisory + Speaking)

**Eyebrow:** `// WORK WITH ME`
**Header:** The writing comes first. This is what happens after you've read enough of it.

**Advisory:** A few companies a year bring me in on their specific problem: what to build, what to buy, where AI actually belongs in the operation, and how to keep their people the operators instead of the assistants. I take the ones I can genuinely move. It's inbound only, and it sits downstream of everything I publish here.

**Speaking:** I also give talks and run workshops: keynotes for leadership teams, hands-on sessions for the people who have to build the thing. If you want me in the room, start here.

**CTA:** one inline form for both → Contact.

### ABOUT

**Eyebrow:** `// ABOUT`
**Header:** Twenty-five years building things for other people. Now I build them for myself, in the open.
**Body:**
I started as a software engineer on the platform that let the Federal Reserve, the World Bank, the IMF, and the BLS share statistical data. From there it was consulting. At Booz Allen I won more than $9M in new business and built a FISMA-compliant internal cloud that cut a research program's data-center cost by two thirds. Then Toyota and Lexus, whose digital properties I ran across a $35M portfolio. Then Pariveda, where I built a national practice from nothing to $6M a year and grew one account from $28K to $4M in nine months.

Somewhere in there the job changed. I stopped being the person who writes the code and became the person who decides what gets built and why. That seam is exactly what AI is now tearing open for everyone who made the same move.

So I do both again. I build my own tools, I write about how, and I advise the companies that want the same thing for their teams. I work in a window from early afternoon to evening, on purpose, because the mornings belong to my family, to fitness, to reading, and to being in the room instead of half inside a meeting in my head. I live on the coast of Virginia with my wife and two sons. I would rather ship than pitch.

*(Reuse existing timeline + credentials components beneath this lede.)*

### SUBSCRIBE + FOOTER

**Subscribe header:** New here? Start with the newsletter.
**Lead:** One consequential idea, twice a week, free. Thirty-four thousand people read it.
**CTA:** email field + Subscribe. Fine print: routes to Claude Code for Non-Coders on Substack; unsubscribe anytime.

**Footer ritual (locked):** Shipping > Pitching. — Daniel
**Footer links:** dewilliams.co · localmemory.co · Claude Code for Non-Coders · LinkedIn · GitHub

---

## Appendix — doctrine reconciliation (resolved)

Source docs (`~/Documents/Newsletters`): `Branding-Strategy-v2-2026-06-01.md` (**Canonical**), `docs/voice-and-ai-tells.md`, `NEWSLETTER_VISION.md`, CC4NC `CLAUDE.md`, `Foundational-Themes-Draft.md`, `Sovereign-AI-Draft.md`.

**Authority:** Blend — the June canonical doc reconciled against July direction item by item. The July decisions below **override** the June doc where they differ.

**Aligned from the start:** advisory demoted to selective/inbound; newsletter as primary CTA; proof-by-building; reverse-centaur / judgment-stays-valuable; own-the-architecture / sovereignty-as-portability (a live theme in `Sovereign-AI-Draft`); retiring the fractional-CTO headline.

**The eight conflicts, resolved:**
1. Canonical spec exists (`Branding-Strategy-v2`); it cites a `Redesign Brief v2 (2026-05-30)` **not found on disk** (searched Documents/Projects/Desktop). This spec reconstructs it.
2. Lead identity — doc says "writer," retired "operator." **Resolved: architect/operator leads (July override), writer co-present.**
3. Thesis is locked copy. **Resolved: manifesto anchors the Thesis section verbatim; beliefs nest beneath.**
4. Voice rules. **Resolved: all copy passes `voice-and-ai-tells.md`; the earlier em-dash/"leverage"/parallel-scaffold drafts were rewritten.**
5. Frame (do-more vs live-more). **Resolved: ownership = mechanism, flourishing = end.**
6. Architecture. **Resolved: single-page scroll. Speaking yes, Book tease no.**
7. WARE / AR.com / course. **Resolved: WARE link-out only (supersedes an earlier "keep WARE on /lab" call); no course tease while AR.com pivots (zero sales since Feb launch).**
8. Visual. **Resolved: adopt the brand-doc system (Newsreader / warm palette / required portrait).**

**Minor (resolved):** subscriber count 34,000+ on a 5K-threshold bump rule; `/about` + footer use the locked bio voice and the "Shipping > Pitching" ritual; the "Consultageddon" series is real (a 3-part CC4NC series) but the callout was dropped — it's one article among many.
