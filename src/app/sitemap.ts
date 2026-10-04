import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theirishrecord.ie';
  const routes = [
    '',
    '/dependence',
    '/family-status',
    '/rights-gap',
    '/if-they-stopped',
    '/cases',
    '/evidence',
    '/report',
    '/methodology',
    '/editorial-standards',
    '/corrections',
    '/right-of-reply',
    '/privacy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
