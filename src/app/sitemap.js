import { twelvePillars, industryVerticals } from '../data/content';

export default function sitemap() {
  const baseUrl = 'https://demadigital.asia';
  
  // Custom helper to generate alternates block
  const getAlternates = (route) => ({
    languages: {
      en: `${baseUrl}/en${route}`,
      id: `${baseUrl}/id${route}`,
    }
  });

  // Fundamental Pages
  const routes = ['', '/careers', '/initiate-handshake', '/neural-network'].map(
    (route) => ({
      url: `${baseUrl}/id${route}`, // Default canonical to 'id'
      lastModified: new Date().toISOString(),
      changeFrequency: route === '' ? 'monthly' : 'weekly',
      priority: route === '' ? 1 : 0.8,
      alternates: getAlternates(route)
    })
  );

  // Dynamic Service / Neural Network Nodes
  const pillars = twelvePillars.map((pillar) => ({
    url: `${baseUrl}/id/neural-network/${pillar.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: getAlternates(`/neural-network/${pillar.id}`)
  }));

  // Dynamic Sector Solutions Nodes
  const sectors = industryVerticals.map((sector) => ({
    url: `${baseUrl}/id/sector-solutions/${sector.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
    alternates: getAlternates(`/sector-solutions/${sector.id}`)
  }));

  return [...routes, ...pillars, ...sectors];
}
