import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = process.env.VITE_SITE_URL || 'https://loud4-band.com';
const today = new Date().toISOString().split('T')[0];

const routes = [
  {
    url: `${SITE_URL}/`,
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: today
  },
  {
    url: `${SITE_URL}/#about`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: today
  },
  {
    url: `${SITE_URL}/#repertoire`,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: today
  },
  {
    url: `${SITE_URL}/#gallery`,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: today
  },
  {
    url: `${SITE_URL}/#events`,
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: today
  },
  {
    url: `${SITE_URL}/#members`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: today
  },
  {
    url: `${SITE_URL}/#contact`,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: today
  },
  {
    url: `${SITE_URL}/#faq`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: today
  }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const publicDir = join(__dirname, '..', 'public');
writeFileSync(join(publicDir, 'sitemap.xml'), sitemap);

console.log(`✅ Sitemap.xml generado con ${routes.length} URLs`);

