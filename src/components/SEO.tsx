import { Helmet } from 'react-helmet-async';
import { CC4NC_SUBSCRIBERS } from '../lib/constants';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function SEO({
  title = 'Daniel E. Williams — architect & operator',
  description = `I build the tools I run my life on, and I write about how you can too. Claude Code for Non-Coders, ${CC4NC_SUBSCRIBERS.full} readers.`,
  keywords = 'Daniel E. Williams, Claude Code for Non-Coders, AI agents, Claude Code, building your own AI tools, AI and judgment, senior technical professionals, AI newsletter',
  image = '/og-image.png',
  url = 'https://dewilliams.co',
  type = 'website'
}: SEOProps) {
  // Only append the house suffix when the title isn't already a Williams lockup.
  // (The old check looked for "D. E. Williams", which "Daniel E. Williams" does not
  // contain, so the homepage title was rendering double-suffixed.)
  const fullTitle = /Williams/.test(title) ? title : `${title} — D. E. Williams + Co.`;
  const fullUrl = url.startsWith('http') ? url : `https://dewilliams.co${url}`;
  const fullImage = image.startsWith('http') ? image : `https://dewilliams.co${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Daniel E. Williams" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="D. E. Williams + Co." />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dewilliamsco" />
      <meta name="twitter:creator" content="@dewilliamsco" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "D. E. Williams and Company",
              "alternateName": "D. E. Williams + Co.",
              "url": "https://dewilliams.co",
              "logo": "https://dewilliams.co/logo.svg",
              "sameAs": [
                "https://www.linkedin.com/in/danieleugenewilliams/",
                "https://twitter.com/dewilliamsco",
                "https://dewilliamsco.substack.com/",
                "https://github.com/danieleugenewilliams"
              ],
              "description": "The writing, agents, and open-source tools of Daniel E. Williams. Home of Claude Code for Non-Coders, a twice-weekly newsletter for senior technical people working out what coding agents change for them.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Daniel E. Williams"
              }
            },
            {
              "@type": "Person",
              "name": "Daniel E. Williams",
              "jobTitle": "Architect & Operator",
              "url": "https://dewilliams.co/about",
              "worksFor": {
                "@type": "Organization",
                "name": "D. E. Williams and Company"
              },
              "sameAs": [
                "https://www.linkedin.com/in/danieleugenewilliams/",
                "https://twitter.com/dewilliamsco",
                "https://github.com/danieleugenewilliams"
              ]
            },
            {
              "@type": "WebSite",
              "url": "https://dewilliams.co",
              "name": "D. E. Williams + Co.",
              "description": description,
              "publisher": {
                "@type": "Organization",
                "name": "D. E. Williams and Company"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
