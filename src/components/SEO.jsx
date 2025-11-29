import { useEffect } from 'react';

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://loud4-band.com';

const SEO = ({
  title = "LOUD4 - Banda de Rock Clásico para Eventos | Costa Rica",
  description = "LOUD4 es una banda profesional de rock clásico en Costa Rica. Especialistas en eventos corporativos, bodas, fiestas privadas y celebraciones.",
  canonical = `${SITE_URL}/`,
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  keywords = "banda rock Costa Rica, música eventos corporativos, banda bodas, rock clásico, eventos privados, música en vivo, LOUD4, banda profesional Costa Rica",
  image = `${SITE_URL}/src/assets/images/logo.webp`,
  imageAlt = "LOUD4 - Banda de Rock Clásico para Eventos en Costa Rica",
  type = "website"
}) => {
  useEffect(() => {
    // Actualizar título
    document.title = title;

    // Helper para meta tags
    const updateMetaTag = (nameOrProperty, content, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${nameOrProperty}"]`
        : `meta[name="${nameOrProperty}"]`;
      
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', nameOrProperty);
        } else {
          meta.setAttribute('name', nameOrProperty);
        }
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Helper para link tags
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      
      link.href = href;
    };

    // Meta tags básicos
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robots);

    // Canonical
    updateLinkTag('canonical', canonical);

    // Open Graph (usa property)
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:alt', imageAlt, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:locale', 'es_ES', true);
    updateMetaTag('og:site_name', 'LOUD4', true);

    // Twitter Cards (usa name)
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:url', canonical);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', imageAlt);
  }, [title, description, canonical, robots, keywords, image, imageAlt, type]);

  return null;
};

export default SEO;

