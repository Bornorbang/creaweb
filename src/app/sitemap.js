export default function sitemap() {
  const baseUrl = "https://creaweb.co.uk";
  const now = new Date().toISOString();

  const routes = [
    { url: "/",                     priority: 1.0,  changeFrequency: "weekly"  },
    { url: "/about",                priority: 0.8,  changeFrequency: "monthly" },
    { url: "/services",             priority: 0.9,  changeFrequency: "monthly" },
    { url: "/web-design",           priority: 0.9,  changeFrequency: "monthly" },
    { url: "/website-development",  priority: 0.9,  changeFrequency: "monthly" },
    { url: "/website-redesign",     priority: 0.85, changeFrequency: "monthly" },
    { url: "/wordpress-development",priority: 0.85, changeFrequency: "monthly" },
    { url: "/shopify-development",  priority: 0.85, changeFrequency: "monthly" },
    { url: "/ecommerce-websites",   priority: 0.85, changeFrequency: "monthly" },
    { url: "/seo",                  priority: 0.85, changeFrequency: "monthly" },
    { url: "/pricing",              priority: 0.8,  changeFrequency: "monthly" },
    { url: "/insights",             priority: 0.7,  changeFrequency: "weekly"  },
    { url: "/contact",              priority: 0.9,  changeFrequency: "yearly"  },
    { url: "/web-design-london",     priority: 0.8,  changeFrequency: "monthly" },
    { url: "/web-design-manchester", priority: 0.8,  changeFrequency: "monthly" },
    { url: "/web-design-birmingham", priority: 0.8,  changeFrequency: "monthly" },
    { url: "/web-design-leeds",      priority: 0.8,  changeFrequency: "monthly" },
    { url: "/web-design-liverpool",  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/web-design-bristol",    priority: 0.8,  changeFrequency: "monthly" },
    { url: "/web-design-nottingham", priority: 0.75, changeFrequency: "monthly" },
    { url: "/web-design-glasgow",    priority: 0.8,  changeFrequency: "monthly" },
    { url: "/web-design-edinburgh",  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/web-design-sheffield",  priority: 0.75, changeFrequency: "monthly" },
    { url: "/web-design-leicester",  priority: 0.75, changeFrequency: "monthly" },
    { url: "/web-design-newcastle",  priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/healthcare",    priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/legal",         priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/real-estate",   priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/finance",       priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/education",     priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/local-services",priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/hospitality",   priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/ecommerce",     priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/arts-culture",  priority: 0.70, changeFrequency: "monthly" },
    { url: "/industries/technology",    priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/food-drink",    priority: 0.75, changeFrequency: "monthly" },
    { url: "/industries/charities",     priority: 0.70, changeFrequency: "monthly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
