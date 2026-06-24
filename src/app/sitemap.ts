import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://neurotechx.org';
  const routes = [
    '', '/about', '/community', '/community/growth', '/community/chapter-guidelines',
    '/education', '/education/webinars', '/education/getting-started', '/education/resources',
    '/projects', '/ecosystem', '/reports', '/content-lab', '/newsletter', '/jobs',
    '/transparency', '/donate', '/students', '/code-of-conduct',
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === '' || r === '/reports' || r === '/content-lab' ? 'daily' : 'weekly',
    priority: r === '' ? 1 : 0.7,
  }));
}
