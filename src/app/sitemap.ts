import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://creaweb.co.uk';

  // Main pages
  const mainPages = [
    { path: '', priority: 1.0, frequency: 'weekly' as const },
    { path: '/about', priority: 0.8, frequency: 'monthly' as const },
    { path: '/services', priority: 0.9, frequency: 'monthly' as const },
    { path: '/pricing', priority: 0.8, frequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, frequency: 'yearly' as const },
    { path: '/insights', priority: 0.8, frequency: 'weekly' as const },
    { path: '/privacy-policy', priority: 0.5, frequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.5, frequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.5, frequency: 'yearly' as const },
    { path: '/accessibility', priority: 0.5, frequency: 'yearly' as const },
  ].map(page => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: page.frequency,
    priority: page.priority,
  }));

  // Industry pages
  const industries = [
    'healthcare',
    'legal',
    'real-estate',
    'finance',
    'education',
    'local-services',
    'hospitality',
    'ecommerce',
    'arts-culture',
    'technology',
    'food-drink',
    'charity',
  ].map(industry => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service/category pages
  const servicePages = [
    '/web-design',
    '/website-development',
    '/website-redesign',
    '/wordpress-development',
    '/shopify-development',
    '/ecommerce-websites',
    '/seo',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Location-specific pages
  const locationPages = [
    'london',
    'manchester',
    'birmingham',
    'leeds',
    'liverpool',
    'bristol',
    'nottingham',
    'glasgow',
    'edinburgh',
    'sheffield',
    'leicester',
    'newcastle',
  ].map(location => ({
    url: `${baseUrl}/web-design-${location}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Try to fetch insights posts dynamically
  let insightsPosts: Array<{ url: string; lastModified: string; changeFrequency: 'weekly' | 'monthly'; priority: number }> = [];
  
  try {
    // Fetch from your backend or CMS - adjust this based on your data source
    // For now, this is a placeholder - update with your actual data source
    const response = await fetch(`${baseUrl}/api/insights`, {
      headers: { 'Cache-Control': 'no-store' },
      next: { revalidate: 3600 } // Revalidate every hour
    }).catch(() => null);
    
    if (response && response.ok) {
      const posts = await response.json();
      insightsPosts = posts.map((post: any) => ({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.createdAt).toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.warn('Could not fetch insights posts for sitemap');
  }

  // Combine all URLs
  return [...mainPages, ...industries, ...servicePages, ...locationPages, ...insightsPosts];
}
