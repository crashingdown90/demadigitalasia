import { twelvePillars } from '../data/content';

export default function sitemap() {
  const baseUrl = 'https://demadigital.asia';

  // Fundamental Pages
  const routes = ['', '/careers', '/initiate-handshake', '/neural-network'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route === '' ? 'monthly' : 'weekly',
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Dynamic Service / Capabilities Nodes
  const pillars = twelvePillars.map((pillar) => ({
    url: `${baseUrl}/neural-network/${pillar.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...pillars];
}
