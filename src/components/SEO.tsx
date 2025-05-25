import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function SEO({
  title = 'D. E. Williams & Company - Strategic Technology Advisory',
  description = 'Premium strategic advisory for leaders seeking to transform their organization through cloud, AI, and data. Expert consulting services for education technology, public sector, and nonprofit organizations.',
  keywords = 'strategic advisory, technology consulting, AI consulting, cloud transformation, data strategy, education technology, edtech consulting, nonprofit technology, public sector technology',
  image = '/hero.avif',
  url = 'https://dewilliams.co',
  type = 'website'
}: SEOProps) {
  const fullTitle = title.includes('D. E. Williams') ? title : `${title} | D. E. Williams & Company`;
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
      <meta property="og:site_name" content="D. E. Williams & Company" />
      
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
              "url": "https://dewilliams.co",
              "logo": "https://dewilliams.co/placeholder-logo.svg",
              "sameAs": [
                "https://www.linkedin.com/in/danieleugenewilliams/",
                "https://twitter.com/dewilliamsco",
                "https://dewilliamsco.substack.com/"
              ],
              "description": description,
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Daniel E. Williams"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            },
            {
              "@type": "WebSite",
              "url": "https://dewilliams.co",
              "name": "D. E. Williams and Company",
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
