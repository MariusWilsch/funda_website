import { useEffect } from 'react';

const SEOHead = ({
  title = "The PrettyPoint Berlin - Ästhetische Medizin",
  description = "Moderne ästhetische Medizin in Berlin. Botox, Hyaluron, Lipolyse und PRP-Behandlungen von erfahrenen Ärzten.",
  keywords = "Botox Berlin, Hyaluron Berlin, Ästhetische Medizin, Schönheitsbehandlung, PRP, Lipolyse",
  image = "/og-image.jpg",
  url = "https://theprettypoint.de",
  type = "website",
  locale = "de_DE",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'The PrettyPoint Berlin');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:locale', locale, true);
    updateMetaTag('og:site_name', 'The PrettyPoint Berlin', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional SEO tags
    updateMetaTag('theme-color', '#5c2a3a'); // Bordeaux color
    updateMetaTag('msapplication-TileColor', '#5c2a3a');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "The PrettyPoint Berlin",
      "description": description,
      "url": url,
      "logo": `${url}/logo.png`,
      "image": `${url}${image}`,
      "telephone": "+49 30 123456789", // Replace with actual phone
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Musterstraße 123", // Replace with actual address
        "addressLocality": "Berlin",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.5200", // Replace with actual coordinates
        "longitude": "13.4050"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00"
      ],
      "priceRange": "€€€",
      "medicalSpecialty": "Aesthetic Medicine",
      "serviceArea": {
        "@type": "City",
        "name": "Berlin"
      }
    };

    // Add or update structured data
    let structuredDataScript = document.querySelector('#structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url, type, locale]);

  return null; // This component doesn't render anything
};

// Hook for dynamic SEO updates
export const useSEO = (seoData) => {
  useEffect(() => {
    if (seoData) {
      // Create a temporary SEOHead component
      const tempSEO = SEOHead(seoData);
    }
  }, [seoData]);
};

// Preload critical resources
export const PreloadResources = () => {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (href, type = 'font/woff2') => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = type;
      link.crossOrigin = 'anonymous';
      link.href = href;
      document.head.appendChild(link);
    };

    // Preload Google Fonts
    preloadFont('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    preloadFont('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

    // Preload critical images
    const preloadImage = (src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    // Add your critical images here
    // preloadImage('/hero-image.jpg');
    // preloadImage('/logo.png');

  }, []);

  return null;
};

export default SEOHead;
