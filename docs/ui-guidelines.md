# UI Guidelines for D. E. Williams & Company

**Date**: April 30, 2025  
**Author**: Grok (assisting Daniel E. Williams)  
**Project**: Establish a consistent visual identity for `dewilliams.co` and all brand touchpoints, aligning with the strategic vision of scaling D. E. Williams and Company to $1M in revenue by 2027, as specified in the PRD, bio, implementation plan, feature requirements, and architecture specifications (`prd.md`, `bio.md`, `implementation-plan.md`, `feature-requirements.md`, `architecture-specifications.md`).

---

## 1. Overview

These UI Guidelines define the visual and interaction design principles for the `dewilliams.co` website and brand touchpoints, including presentations, memos, emails, invoices, letterhead, social media, and marketing materials. The design is clean, elegant, and professional, inspired by a combination of Google’s functional elegance (clear navigation, intuitive layouts, practical CTAs) and Apple’s clean minimalism (ample whitespace, sleek typography, high-quality visuals) to instill confidence in the D. E. Williams and Company brand, positioning it as a premium boutique strategic advisory firm specializing in education and workforce innovation. The guidelines ensure a cohesive identity across all touchpoints, supporting lead generation, thought leadership via Substack essays (https://thetechexec.substack.com), and a $1M revenue goal by 2027.

Key features include:
- **Clean and Functional Design**: Minimalist aesthetic with ample whitespace, precise typography, intuitive navigation, and dynamic animations, blending Google and Apple aesthetics.
- **Dark/Light Mode**: Switchable modes with a text-based logo using CSS filtering for dark mode.
- **Brand Colors**: Primary blue (#2563eb), secondary gray (#f3f4f6), and silver (#9ca3af) for consistency.
- **Responsive Design**: Full responsiveness to address previous cutoff issues (April 18, 2025).
- **Accessibility**: WCAG 2.1 compliance for inclusivity.

The guidelines cover the website UI and extend to all brand assets, ensuring a unified experience that conveys trust, expertise, and innovation.

---

## 2. Brand Identity

### 2.1 Brand Voice and Tone
- **Voice**: Professional, confident, and approachable, reflecting Daniel E. Williams’ expertise as a “technology agnostic” problem solver with a passion for education and workforce innovation (`bio.md`).
- **Tone**: Authoritative yet warm, emphasizing clarity, impact, and trust, aligned with Google’s clear, functional communication and Apple’s aspirational polish.
- **Usage**:
  - **Website**: Concise, impactful headlines (e.g., “Future of Work Innovation”) and actionable CTAs (e.g., “Schedule a Consultation”).
  - **Documents**: Formal yet engaging, with clear headings and bullet points for readability.
  - **Emails**: Professional, direct, and personalized, with a friendly closing (e.g., “Best regards, Daniel E. Williams”).

### 2.2 Brand Colors
The brand palette is minimalist, elegant, and versatile, ensuring consistency across digital and print touchpoints.

- **Primary Brand Color**:
  - **Code**: #2563eb (blue-600)
  - **Class**: `text-brand-primary`, `bg-brand-primary`
  - **Usage**:
    - Header logo text
    - Navigation link hover states
    - Buttons (primary CTAs, e.g., “Schedule a Consultation”)
    - Section headings (h1, h2)
    - Links and hover effects
  - **Dark Mode**: Adjust to lighter blue (`#3b82f6`, blue-500) for contrast.

- **Secondary Brand Colors**:
  - **Background**:
    - **Code**: #f3f4f6 (gray-100)
    - **Class**: `bg-brand-secondary`
    - **Usage**: Section backgrounds, cards, and subtle dividers.
    - **Dark Mode**: Switch to `bg-gray-800` (#1f2937) for contrast.
  - **Silver**:
    - **Code**: #9ca3af (gray-400)
    - **Class**: `text-brand-silver`
    - **Usage**: Secondary text (e.g., subheadings, captions, muted text).
    - **Dark Mode**: Switch to `text-gray-300` (#d1d5db) for readability.

- **Neutral Colors**:
  - **White**: #ffffff (`bg-white`, `text-white`) for primary backgrounds and text in dark mode.
  - **Black**: #111827 (`text-gray-900`) for primary text in light mode.
  - **Dark Mode Adjustments**:
    - Background: `bg-gray-900` (#111827)
    - Text: `text-gray-100` (#f3f4f6)

### 2.3 Logo
- **Design**: Text-based placeholder logo ("D. E. Williams + Co.") in Inter font, reflecting the minimalist aesthetic and artistic flair (`bio.md`).
- **Specifications**:
  - **Light Mode**: #2563eb (`text-brand-primary`), Inter font, 600 weight, 18px, on white background (`bg-white`).
  - **Dark Mode**: #ffffff (`text-white`) using CSS filtering (`filter: brightness(0) invert(1)`), Inter font, 600 weight, 18px, on gray-900 background (`bg-gray-900`).
  - **Sizes**: 32x32px equivalent (desktop header), 24x24px equivalent (mobile header, footer, presentations, memos, emails).
- **Usage**:
  - **Website**: Header (top-left, clickable to `/`), footer (bottom-left).
  - **Presentations**: Bottom-right corner of slides (24x24px equivalent).
  - **Memos/Letterhead**: Top-left corner (24x24px equivalent).
  - **Emails**: Header and signature (24x24px equivalent).
  - **Invoices**: Top-left corner (24x24px equivalent).
  - **Social Media**: Profile images (400x400px, #2563eb on white, #ffffff on gray-900 for dark mode).
  - **Marketing Materials**: Prominent placement (e.g., business card front, brochure cover).
- **Accessibility**: `aria-label="D. E. Williams & Co. Logo"` for all logo instances.

---

## 3. Website UI Guidelines

### 3.1 Design Principles
- **Clean and Functional**: Combine Google’s functional elegance (clear navigation, intuitive layouts, practical CTAs) with Apple’s clean minimalism (ample whitespace, sleek typography, high-quality visuals) to create a polished, user-friendly experience.
- **Consistency**: Uniform typography, spacing, and component styles across pages.
- **Confidence-Inspiring**: High-quality visuals, smooth interactions, and clear messaging to convey expertise and trust.
- **Responsive**: Seamless experience on desktop, tablet, and mobile, addressing cutoff issues (April 18, 2025).
- **Accessible**: WCAG 2.1 compliance with high-contrast colors, ARIA labels, and keyboard navigation.
- **Dark/Light Mode**: Toggleable modes with automatic system preference detection, using CSS filtering for logo dark mode.

### 3.2 Typography
- **Font Family**: Inter (Google Fonts, weights: 400, 500, 600, 700)
  - Clean, modern sans-serif, aligning with Google’s functional clarity and Apple’s minimalist elegance.
  - Imported in `app/layout.tsx` via `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`.
- **Usage**:
  - **Headings**:
    - h1: 48px (lg), 36px (md), 30px (sm), 600 weight, #2563eb (`text-brand-primary`), dark mode: #3b82f6.
    - h2: 30px (lg), 24px (md), 20px (sm), 600 weight, #2563eb, dark mode: #3b82f6.
    - h3: 24px (lg), 20px (md), 18px (sm), 500 weight, #111827 (`text-gray-900`), dark mode: #f3f4f6.
  - **Body**:
    - Paragraph: 16px, 400 weight, #111827 (`text-gray-900`), dark mode: #f3f4f6.
    - Subtext/Captions: 14px, 400 weight, #9ca3af (`text-brand-silver`), dark mode: #d1d5db.
  - **Buttons/Links**: 16px, 500 weight, #2563eb (`text-brand-primary`), dark mode: #3b82f6.
- **Line Height**: 1.5 for body text, 1.2 for headings.
- **Letter Spacing**: Normal for body, -0.02em for headings.
- **Accessibility**: Minimum contrast ratio of 4.5:1 for text, verified via WebAIM Contrast Checker.

### 3.3 Spacing and Layout
- **Grid System**:
  - 12-column grid, responsive with Tailwind classes (`grid-cols-12`, `md:grid-cols-6`, `lg:grid-cols-4`).
  - Container: `max-width: 1280px`, centered with `mx-auto`, padding `px-4 sm:px-6 lg:px-8`.
- **Spacing**:
  - **Margins**: 16px (sm), 24px (md), 32px (lg) between sections (`my-4`, `my-6`, `my-8`).
  - **Padding**: 16px for cards/buttons (`p-4`), 24px for sections (`p-6`).
  - **Gap**: 16px for grids (`gap-4`), 24px for larger layouts (`gap-6`).
- **Whitespace**: Ample whitespace (32px-64px between major sections) for a clean, airy feel, inspired by Apple’s website, with Google’s functional clarity in navigation and CTAs.
- **Responsive Breakpoints**:
  - Mobile: <640px (`sm`), single-column layouts.
  - Tablet: 640px-1024px (`md`), 2-column grids where applicable.
  - Desktop: >1024px (`lg`), 3-4 column grids for services/SubStack blog.

### 3.4 Components
- **Buttons**:
  - **Primary**: `bg-brand-primary` (#2563eb), `text-white`, `rounded-md`, `px-4 py-2`, hover: `bg-blue-700`, dark mode: `bg-blue-500`, `text-white`.
  - **Outline**: `border`, `border-brand-primary`, `text-brand-primary`, `rounded-md`, `px-4 py-2`, hover: `bg-blue-50`, dark mode: `border-blue-500`, `text-blue-500`.
  - **Sizes**: Small (`text-sm`, `px-3 py-1.5`), Medium (`text-base`, `px-4 py-2`), Large (`text-lg`, `px-6 py-3`).
  - **Accessibility**: `aria-label` (e.g., “Schedule consultation”), focus state with `ring-2 ring-brand-primary`.
- **Forms**:
  - Inputs: `border`, `border-gray-300`, `rounded-md`, `px-3 py-2`, `text-gray-900`, dark mode: `bg-gray-800`, `text-gray-100`, `border-gray-600`.
  - Labels: `text-sm`, `font-medium`, `text-gray-900`, dark mode: `text-gray-100`.
  - Accessibility: `aria-label`, associated `<label>` with `for` attribute.
- **Cards**:
  - `bg-white`, `border`, `border-gray-200`, `rounded-lg`, `p-6`, `shadow-sm`, hover: `shadow-md`, dark mode: `bg-gray-800`, `border-gray-700`.
  - Used for services, case studies, and insights.
- **Navigation**:
  - Sticky header: `sticky top-0`, `bg-white/80`, `backdrop-blur-sm`, dark mode: `bg-gray-900/80`.
  - Links: `text-gray-900`, hover: `text-brand-primary`, dark mode: `text-gray-100`, hover: `text-blue-500`.
  - Mobile menu: Full-screen overlay (`bg-white`, dark mode: `bg-gray-900`) with vertical links.

### 3.5 Dark/Light Mode
- **Implementation**: Toggleable via `ThemeProvider` (`components/theme-provider.tsx`), with system preference detection using `prefers-color-scheme`.
- **Logo**:
  - Light mode: #2563eb on white background.
  - Dark mode: #ffffff on gray-900 background, achieved via CSS filter (`[data-theme='dark'] .logo { filter: brightness(0) invert(1); }`).
- **Colors**:
  - Background: `bg-white` (light), `bg-gray-900` (dark).
  - Text: `text-gray-900` (light), `text-gray-100` (dark).
  - Primary: `bg-brand-primary` (#2563eb, light), `bg-blue-500` (#3b82f6, dark).
  - Secondary: `bg-brand-secondary` (#f3f4f6, light), `bg-gray-800` (#1f2937, dark).
  - Silver: `text-brand-silver` (#9ca3af, light), `text-gray-300` (#d1d5db, dark).
- **Toggle**: Button in header (`lucide-react` Sun/Moon icons, 24x24px), persists user preference in local storage.
- **Accessibility**: High-contrast ratios (4.5:1) in both modes, verified via WebAIM Contrast Checker.

### 3.6 Animations and Interactions
- **Hover Effects**:
  - Buttons: `transform scale-105`, `transition duration-200 ease-out`.
  - Links: `underline` on hover, `transition-colors duration-200`.
  - Cards: `shadow-md` on hover, `transition-shadow duration-200`.
- **Fade-In Transitions**: Sections fade in on load (`opacity-0 to opacity-100`, `transition duration-600 ease-out`).
- **Scroll-Triggered Transitions**: Elements animate as users scroll (e.g., cards slide up with `translate-y-4 to translate-y-0`, `opacity-0 to opacity-100`, `transition duration-600 ease-out`), inspired by Google’s dynamic interactivity and Apple’s polished motion.
- **Mobile Menu**: Slide-in from right (`transform translate-x-full to translate-x-0`, `transition duration-300`).
- **Dark/Light Toggle**: Smooth color transition (`transition-colors duration-300`).
- **Accessibility**: Animations disabled for `prefers-reduced-motion` users via Tailwind (`motion-reduce`).

### 3.7 Imagery
- **Logo**: Text-based "D. E. Williams + Co.", Inter font, #2563eb/#ffffff, used in header/footer.
- **Profile Photo**: High-quality headshot (`public/images/profile/headshot.jpg`, 320x320px), used on About and Bio pages.
- **Hero Image**: Abstract or professional image (`public/images/hero.jpg`, 1280x720px), used in homepage hero.
- **Client Logos**: JFF, ASA, JFFLabs (`public/images/clients/jff-logo.png`, `public/images/clients/asa-logo.svg`, `public/images/clients/jfflabs-logo.png`, 200x100px), used on homepage and case studies.
- **Optimization**: Compress images to <100KB via TinyPNG, use `next/image` with `sizes` and `priority` for hero/profile.
- **Accessibility**: `alt` text for all images (e.g., “Daniel E. Williams Profile Photo”, “JFF Client Logo”).

---

## 4. Guidelines for Brand Touchpoints

### 4.1 Presentations
- **Template**: Google Slides or PowerPoint with a custom template, designed in v0 or Canva for initial concepts.
- **Layout**:
  - Header: Slide title (h1, 30px, #2563eb).
  - Background: White (#ffffff), optional subtle gray-100 (#f3f4f6) sections.
  - Body: Inter font, 20px (body), 16px (captions), #111827.
  - Footer: Logo ("D. E. Williams + Co.", 24x24px equivalent, #2563eb), “© 2025 D. E. Williams and Company” (14px, #9ca3af), bottom-right.
- **Colors**: Primary (#2563eb) for titles/accents, secondary (#f3f4f6) for backgrounds, silver (#9ca3af) for captions.
- **Imagery**: Use website images (profile, client logos) or high-quality stock photos with `alt` text in notes.
- **Example**:
  ```plaintext
  Slide Title (#2563eb, 30px)
  ─────────────────────────────────
  Body text (Inter, 20px, #111827)
  - Bullet point 1
  - Bullet point 2
  [Image: 600x400px, alt text in notes]
  ─────────────────────────────────
  © 2025 D. E. Williams and Company (#9ca3af, 14px) [Logo: D. E. Williams + Co., 24x24px, #2563eb, bottom-right]
  ```

### 4.2 Memos
- **Template**: Google Docs or Word with a branded header, designed in v0 or Canva for initial concepts.
- **Header**: Logo ("D. E. Williams + Co.", 24x24px equivalent, #2563eb), “D. E. Williams and Company” (h1, 24px, #2563eb), date (14px, #9ca3af), top-left.
- **Body**:
  - Inter font, 12pt, #111827, 1.5 line spacing.
  - Headings: h2 (16pt, #2563eb), h3 (14pt, #111827).
  - Bullets: Standard, #111827.
- **Footer**: “Confidential | © 2025 D. E. Williams and Company” (10pt, #9ca3af).
- **Colors**: Primary (#2563eb) for headings, black (#111827) for text, silver (#9ca3af) for metadata.
- **Example**:
  ```plaintext
  [Logo: D. E. Williams + Co., 24x24px, #2563eb, top-left] D. E. Williams and Company (#2563eb, 24px)
  Date: April 30, 2025 (#9ca3af, 14px)
  ────────────────────────────────
  Heading (16pt, #2563eb)
  Body text (Inter, 12pt, #111827)
  - Item 1
  - Item 2
  ────────────────────────────────
  Confidential | © 2025 D. E. Williams and Company (#9ca3af, 10pt)
  ```

### 4.3 Emails
- **Template**: HTML email template or plain text with branded signature, designed in v0 or Canva for initial concepts.
- **Header**: Logo ("D. E. Williams + Co.", 24x24px equivalent, #2563eb light mode, #ffffff dark mode, inline), “D. E. Williams and Company” (18px, #2563eb).
- **Body**:
  - Inter font, 16px, #111827, 1.5 line spacing.
  - Links: #2563eb, underline on hover, dark mode: #3b82f6.
- **Signature**:
  - Name: Daniel E. Williams (16px, #111827).
  - Title: Founder, D. E. Williams & Co. (14px, #9ca3af).
  - Contact: `contact@dewilliams.co`, LinkedIn, X (14px, #2563eb, dark mode: #3b82f6).
  - Logo: "D. E. Williams + Co.", 24x24px equivalent, #2563eb (light mode), #ffffff (dark mode).
- **Colors**: Primary (#2563eb) for links/logo, black (#111827) for text, silver (#9ca3af) for metadata.
- **Example**:
  ```plaintext
  [Logo: D. E. Williams + Co., 24x24px, #2563eb] D. E. Williams and Company (#2563eb, 18px)
  ────────────────────────────────
  Dear [Recipient],
  Body text (Inter, 16px, #111827)
  Link: dewilliams.co (#2563eb)
  Best regards,
  Daniel E. Williams (#111827, 16px)
  Founder, D. E. Williams & Co. (#9ca3af, 14px)
  contact@dewilliams.co | LinkedIn | X (#2563eb, 14px)
  [Logo: D. E. Williams + Co., 24x24px, #2563eb]
  ```

### 4.4 Invoices
- **Template**: Google Docs, Word, or PDF with a branded header, designed in v0 or Canva for initial concepts.
- **Header**: Logo ("D. E. Williams + Co.", 24x24px equivalent, #2563eb), “D. E. Williams and Company” (h1, 24px, #2563eb), invoice number and date (14px, #9ca3af), top-left.
- **Body**:
  - Inter font, 12pt, #111827, 1.5 line spacing.
  - Table for services: Description, Quantity, Rate, Total (12pt, #111827).
  - Headings: “Invoice To”, “Services”, “Total Due” (16pt, #2563eb).
  - Payment Instructions: Bank details or payment link (12pt, #111827).
- **Footer**: “© 2025 D. E. Williams and Company” (10pt, #9ca3af).
- **Colors**: Primary (#2563eb) for headings/logo, black (#111827) for text, silver (#9ca3af) for metadata.
- **Example**:
  ```plaintext
  [Logo: D. E. Williams + Co., 24x24px, #2563eb, top-left] D. E. Williams and Company (#2563eb, 24px)
  Invoice #123 | Date: April 30, 2025 (#9ca3af, 14px)
  ────────────────────────────────
  Invoice To: [Client Name] (16pt, #2563eb)
  Services (16pt, #2563eb)
  Description | Qty | Rate | Total
  Strategic Consulting | 1 | $100,000 | $100,000 (12pt, #111827)
  Total Due: $100,000 (16pt, #2563eb)
  Payment: [Bank Details/Link] (12pt, #111827)
  ────────────────────────────────
  © 2025 D. E. Williams and Company (#9ca3af, 10pt)
  ```

### 4.5 Letterhead
- **Template**: Google Docs or Word with a branded header, designed in v0 or Canva for initial concepts.
- **Header**: Logo ("D. E. Williams + Co.", 24x24px equivalent, #2563eb), “D. E. Williams and Company” (h1, 24px, #2563eb), contact info (`contact@dewilliams.co`, LinkedIn, X, 12pt, #9ca3af), top-left.
- **Body**:
  - Inter font, 12pt, #111827, 1.5 line spacing.
  - Headings: h2 (16pt, #2563eb), h3 (14pt, #111827).
  - Bullets: Standard, #111827.
- **Footer**: “© 2025 D. E. Williams and Company” (10pt, #9ca3af).
- **Colors**: Primary (#2563eb) for headings/logo, black (#111827) for text, silver (#9ca3af) for metadata.
- **Example**:
  ```plaintext
  [Logo: D. E. Williams + Co., 24x24px, #2563eb, top-left] D. E. Williams and Company (#2563eb, 24px)
  contact@dewilliams.co | LinkedIn | X (#9ca3af, 12pt)
  ────────────────────────────────
  Heading (16pt, #2563eb)
  Body text (Inter, 12pt, #111827)
  - Item 1
  - Item 2
  ────────────────────────────────
  © 2025 D. E. Williams and Company (#9ca3af, 10pt)
  ```

### 4.6 Social Media
- **Templates**: Designed in v0 or Canva for posts and banners, optimized for LinkedIn, X, and Instagram.
- **Posts**:
  - Size: 1200x630px (LinkedIn/X), 1080x1080px (Instagram).
  - Logo: "D. E. Williams + Co.", 48x48px equivalent, #2563eb (light mode), #ffffff (dark mode), top-left or bottom-right.
  - Text: Inter font, 24px (headlines), 16px (body), #2563eb for headlines, #111827 for body, #9ca3af for captions.
  - Background: White (#ffffff) or gray-100 (#f3f4f6), with optional abstract hero image (`hero.jpg` style).
- **Banners**:
  - Size: 1500x500px (LinkedIn), 1600x400px (X).
  - Logo: "D. E. Williams + Co.", 64x64px equivalent, #2563eb on white, #ffffff on gray-900 for dark mode, centered or top-left.
  - Text: Inter font, 32px (headline), #2563eb, centered.
  - Background: Gradient from #2563eb/10 to #f3f4f6 (light mode), #3b82f6/10 to #1f2937 (dark mode).
- **Profile Images**:
  - Size: 400x400px.
  - Logo: "D. E. Williams + Co.", #2563eb on white, #ffffff on gray-900 for dark mode.
- **Colors**: Primary (#2563eb) for text/logo, black (#111827) for body, silver (#9ca3af) for captions.
- **Example (Post)**:
  ```plaintext
  [Logo: D. E. Williams + Co., 48x48px, #2563eb, top-left]
  Future of Work Innovation (#2563eb, 24px)
  Explore our latest insights on education and workforce solutions... (#111827, 16px)
  Posted on April 30, 2025 (#9ca3af, 14px)
  [Background: White or hero.jpg]
  ```

### 4.7 Marketing Materials
- **Business Cards**:
  - Front: Logo ("D. E. Williams + Co.", 32x32px equivalent, #2563eb), name (16px, #111827), title (14px, #9ca3af).
  - Back: Contact info (email, LinkedIn, X, 12px, #2563eb), white background.
- **Brochures**:
  - Cover: Logo ("D. E. Williams + Co.", 48x48px equivalent, #2563eb), headline (24px, #2563eb), hero image.
  - Inside: Inter font, 14px, #111827, primary (#2563eb) for headings, silver (#9ca3af) for captions.

---

## 5. Accessibility Guidelines
- **Contrast**: Minimum 4.5:1 for text, 3:1 for large text, verified via WebAIM Contrast Checker.
- **ARIA Labels**: Required for navigation, buttons, forms, and images (e.g., `aria-label="Toggle dark mode"`).
- **Keyboard Navigation**: All interactive elements (links, buttons, forms) accessible via Tab/Enter.
- **Focus States**: Visible focus ring (`ring-2 ring-brand-primary`) for buttons/links.
- **Reduced Motion**: Disable animations for `prefers-reduced-motion` users via Tailwind (`motion-reduce`).
- **Alt Text**: Mandatory for all images (e.g., “JFF Client Logo”, “Hero Image of Education Innovation”).
- **Testing**: Achieve Lighthouse accessibility score >90 for website, manual checks for documents/emails.

---

## 6. Implementation Notes
- **Website**:
  - Use `ThemeProvider` (`components/theme-provider.tsx`) for dark/light mode, with local storage for user preference and `prefers-color-scheme` detection.
  - Apply Tailwind classes for brand colors (`text-brand-primary`, `bg-brand-secondary`, `text-brand-silver`).
  - Implement logo with CSS filtering for dark mode (`[data-theme='dark'] .logo { filter: brightness(0) invert(1); }`).
  - Use v0 for initial design concepts, importing into Figma for wireframes, and GitHub Copilot for implementation.
  - Test responsiveness on Chrome, Firefox, Safari (desktop/mobile), and validate PDF exports for no cutoff issues (April 18, 2025, memory).
- **Presentations**:
  - Create templates in Google Slides/PowerPoint with logo in bottom-right corner (24x24px equivalent, #2563eb).
  - Export as PDF, ensuring color consistency and Inter font embedding.
- **Memos/Letterhead/Invoices**:
  - Create templates in Google Docs/Word with logo in top-left corner.
  - Export as PDF for distribution, ensuring color fidelity.
- **Emails**:
  - Use HTML templates (e.g., MJML) for branded emails, with fallback plain text.
  - Test rendering in Gmail, Outlook, and Apple Mail.
- **Social Media/Marketing Materials**:
  - Design in v0 or Canva, export as PNG/PDF.
  - Ensure logo and color fidelity across digital formats.

---

## 7. Examples

### 7.1 Website Homepage (Light Mode)
```plaintext
[Header: Sticky, bg-white/80, backdrop-blur-sm, logo: D. E. Williams + Co. #2563eb, nav links #111827, hover #2563eb]
────────────────────────────────────────────────────────────
[Hero: bg-gradient-to-b from-primary/10 to-white, py-20]
Future of Work Innovation (#2563eb, 48px)
Strategic advisory for education and workforce leaders... (#111827, 16px)
[Button: Schedule a Consultation, bg-brand-primary, text-white, px-6 py-3]
[Button: Explore Services, border-brand-primary, text-brand-primary, px-6 py-3]
────────────────────────────────────────────────────────────
[Services: Grid md:grid-cols-2, bg-white cards, border-gray-200, shadow-sm, p-6]
Custom Strategic Consulting ($100k-$200k) (#2563eb, 24px)
Fellowship Blueprint ($50k) (#2563eb, 24px)
Digital Transformation Audit ($25k) (#2563eb, 24px)
[Link: Learn More, text-brand-primary]
────────────────────────────────────────────────────────────
[Client Logos: JFF, ASA, JFFLabs, 200x100px, alt text, flex gap-4]
────────────────────────────────────────────────────────────
[Case Study Teaser: Grid md:grid-cols-2, bg-white cards, p-6]
JFF: Accelerated mission impact... (#111827, 16px)
ASA: Saved millions... (#111827, 16px)
[Link: Learn More, text-brand-primary]
────────────────────────────────────────────────────────────
[Insights: Grid lg:grid-cols-3, bg-white cards, p-6]
My 5-Day Gen AI Intensive Experience (#2563eb, 20px)
Posted on April 15, 2025 (#9ca3af, 14px)
[Link: Read More, text-brand-primary]
────────────────────────────────────────────────────────────
[Footer: bg-white, logo: D. E. Williams + Co. #2563eb, text #9ca3af, py-6]
© 2025 D. E. Williams and Company
```

### 7.2 Website Homepage (Dark Mode)
```plaintext
[Header: Sticky, bg-gray-900/80, backdrop-blur-sm, logo: D. E. Williams + Co. #ffffff, nav links #f3f4f6, hover #3b82f6]
────────────────────────────────────────────────────────────
[Hero: bg-gradient-to-b from-blue-500/10 to-gray-900, py-20]
Future of Work Innovation (#3b82f6, 48px)
Strategic advisory for education and workforce leaders... (#f3f4f6, 16px)
[Button: Schedule a Consultation, bg-blue-500, text-white, px-6 py-3]
[Button: Explore Services, border-blue-500, text-blue-500, px-6 py-3]
────────────────────────────────────────────────────────────
[Services: Grid md:grid-cols-2, bg-gray-800 cards, border-gray-700, shadow-sm, p-6]
Custom Strategic Consulting ($100k-$200k) (#3b82f6, 24px)
Fellowship Blueprint ($50k) (#3b82f6, 24px)
Digital Transformation Audit ($25k) (#3b82f6, 24px)
[Link: Learn More, text-blue-500]
────────────────────────────────────────────────────────────
[Client Logos: JFF, ASA, JFFLabs, 200x100px, alt text, flex gap-4]
────────────────────────────────────────────────────────────
[Case Study Teaser: Grid md:grid-cols-2, bg-gray-800 cards, p-6]
JFF: Accelerated mission impact... (#f3f4f6, 16px)
ASA: Saved millions... (#f3f4f6, 16px)
[Link: Learn More, text-blue-500]
────────────────────────────────────────────────────────────
[Insights: Grid lg:grid-cols-3, bg-gray-800 cards, p-6]
My 5-Day Gen AI Intensive Experience (#3b82f6, 20px)
Posted on April 15, 2025 (#d1d5db, 14px)
[Link: Read More, text-blue-500]
────────────────────────────────────────────────────────────
[Footer: bg-gray-900, logo: D. E. Williams + Co. #ffffff, text #d1d5db, py-6]
© 2025 D. E. Williams and Company
```

### 7.3 Presentation Slide
```plaintext
Slide Title (#2563eb, 30px)
────────────────────────────────────────────────────────────
Body text (Inter, 20px, #111827)
- Bullet point 1
- Bullet point 2
[Image: 600x400px, alt text in notes]
────────────────────────────────────────────────────────────
© 2025 D. E. Williams and Company (#9ca3af, 14px) [Logo: D. E. Williams + Co., 24x24px, #2563eb, bottom-right]
```

### 7.4 Memo
```plaintext
[Logo: D. E. Williams + Co., 24x24px, #2563eb, top-left] D. E. Williams and Company (#2563eb, 24px)
Date: April 30, 2025 (#9ca3af, 14px)
────────────────────────────────────────────────────────────
Heading (16pt, #2563eb)
Body text (Inter, 12pt, #111827)
- Item 1
- Item 2
────────────────────────────────────────────────────────────
Confidential | © 2025 D. E. Williams and Company (#9ca3af, 10pt)
```

### 7.5 Email
```plaintext
[Logo: D. E. Williams + Co., 24x24px, #2563eb] D. E. Williams and Company (#2563eb, 18px)
────────────────────────────────────────────────────────────
Dear [Recipient],
Body text (Inter, 16px, #111827)
Link: dewilliams.co (#2563eb)
Best regards,
Daniel E. Williams (#111827, 16px)
Founder, D. E. Williams & Co. (#9ca3af, 14px)
contact@dewilliams.co | LinkedIn | X (#2563eb, 14px)
[Logo: D. E. Williams + Co., 24x24px, #2563eb]
```

### 7.6 Invoice
```plaintext
[Logo: D. E. Williams + Co., 24x24px, #2563eb, top-left] D. E. Williams and Company (#2563eb, 24px)
Invoice #123 | Date: April 30, 2025 (#9ca3af, 14px)
────────────────────────────────────────────────────────────
Invoice To: [Client Name] (16pt, #2563eb)
Services (16pt, #2563eb)
Description | Qty | Rate | Total
Strategic Consulting | 1 | $100,000 | $100,000 (12pt, #111827)
Total Due: $100,000 (16pt, #2563eb)
Payment: [Bank Details/Link] (12pt, #111827)
────────────────────────────────────────────────────────────
© 2025 D. E. Williams and Company (#9ca3af, 10pt)
```

### 7.7 Letterhead
```plaintext
[Logo: D. E. Williams + Co., 24x24px, #2563eb, top-left] D. E. Williams and Company (#2563eb, 24px)
contact@dewilliams.co | LinkedIn | X (#9ca3af, 12pt)
────────────────────────────────────────────────────────────
Heading (16pt, #2563eb)
Body text (Inter, 12pt, #111827)
- Item 1
- Item 2
────────────────────────────────────────────────────────────
© 2025 D. E. Williams and Company (#9ca3af, 10pt)
```

---

## 8. Next Steps
1. **Confirm UI Guidelines**: By April 30, 2025, review and approve updated `ui-guidelines.md`.
2. **Provide Assets**: By April 30, 2025, share:
   - Case study PDFs for `/public/case-studies/`.
   - HubSpot Portal ID and Form ID.
3. **Select CMS**: By May 5, 2025, confirm CMS platform (e.g., Sanity, Contentful, Strapi) or delegate to development team.
4. **Design Wireframes**: By May 16, 2025, approve Figma wireframes (generated from v0 concepts) per `implementation-plan.md`.
5. **Implement UI**: Apply guidelines in Next.js development starting May 1, 2025, ensuring dark/light mode, scroll-triggered animations, and Google/Apple aesthetic.
6. **Test Dark/Light Mode**: Verify logo CSS filtering and contrast ratios in Phase 7 testing (July 2025).
7. **Create Templates**: Develop presentation, memo, email, invoice, letterhead, and social media templates in v0/Canva by June 2025.

---

## 9. Questions for Clarification
1. **CMS Platform**: Preferred CMS (e.g., Sanity, Contentful, Strapi) or delegate to development team?
2. **Additional Assets**: Any additional Substack essay titles or content to include beyond RSS feed?
3. **Analytics**: Specific `/bio` page events to track (e.g., time spent, CTA clicks) beyond page views?