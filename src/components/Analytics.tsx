import { useEffect } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    hj: any;
    _hjSettings: any;
  }
}

// Google Analytics
export function GoogleAnalytics() {
  const GA_ID = import.meta.env.VITE_GA_ID;

  useEffect(() => {
    if (!GA_ID) return;

    // Create script elements for GA
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(gtagScript);

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    
    gtag('js', new Date());
    gtag('config', GA_ID, {
      page_path: window.location.pathname,
    });

    // Make gtag available globally
    window.gtag = gtag;
  }, [GA_ID]);

  return null;
}

// Hotjar
export function Hotjar() {
  const HOTJAR_ID = import.meta.env.VITE_HOTJAR_ID;

  useEffect(() => {
    if (!HOTJAR_ID) return;

    // Hotjar tracking code
    (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
      h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
      h._hjSettings = { hjid: HOTJAR_ID, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }, [HOTJAR_ID]);

  return null;
}

// Web Vitals for performance monitoring
export function WebVitals() {
  useEffect(() => {
    const reportWebVitals = async () => {
      try {
        const webVitals = await import('web-vitals');
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = webVitals;

        const handleMetric = (name: string) => (metric: any) => {
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: name,
              value: Math.round(metric.value),
              non_interaction: true,
            });
          }
        };

        onCLS(handleMetric('CLS'));
        onINP(handleMetric('INP'));
        onFCP(handleMetric('FCP'));
        onLCP(handleMetric('LCP'));
        onTTFB(handleMetric('TTFB'));
      } catch (error) {
        console.warn('Web Vitals library not available:', error);
      }
    };

    // Delay execution to ensure analytics is loaded
    setTimeout(reportWebVitals, 2000);
  }, []);

  return null;
}

// Combined Analytics component
export function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <Hotjar />
      <WebVitals />
    </>
  );
}
