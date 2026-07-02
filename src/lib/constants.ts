// CC4NC subscriber count. Bump on milestones (rule: next round thousand, min every 5K).
//
// This constant is the source of truth for `Hero`, `WritingSection`, and the
// `Home` SEO description. Three spots can't import it and must be bumped by hand:
//   - index.html            → og:description / twitter:description ("34,000+")
//   - SubscribeSection.tsx  → spelled out ("Thirty-four thousand")
export const CC4NC_SUBSCRIBERS = {
  full: '34,000+', // badge / card / prose display
};
