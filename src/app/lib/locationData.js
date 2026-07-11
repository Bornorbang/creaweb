// All 12 projects available for distribution
export const allProjects = [
  { index: "001", client: "Aanchor Health", category: "Healthcare", image: "/images/works/aanchor.png" },
  { index: "002", client: "University Compare", category: "Education", image: "/images/works/academia.png" },
  { index: "003", client: "Accelede", category: "Technology", image: "/images/works/Accelede.png" },
  { index: "004", client: "Bae Bronx", category: "Fashion", image: "/images/works/baebronx.png" },
  { index: "005", client: "Religion Empowering Ministries", category: "NGO", image: "/images/works/empowering.png" },
  { index: "006", client: "Travisa Ltd", category: "Travel", image: "/images/works/evisa_website.jpg" },
  { index: "007", client: "NGO Grace Empowered", category: "Education", image: "/images/works/graceempoweredearlyyears.png" },
  { index: "008", client: "Lily Heart Home Care", category: "Healthcare", image: "/images/works/lilyhearthomecare-ca.jpg" },
  { index: "009", client: "Makeup Talent", category: "Beauty", image: "/images/works/makeuptalent.png" },
  { index: "010", client: "Naija Beauty", category: "E-Commerce", image: "/images/works/Naijabeauty.png" },
  { index: "011", client: "Lady Flora", category: "Business", image: "/images/works/trimmer1.png" },
  { index: "012", client: "WizzyPro", category: "Photography", image: "/images/works/wizzypro.png" },
];

// Seeded random selection per city (ensures same 6 every time)
export function getProjectsForCity(cityName) {
  const seed = cityName.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const shuffled = [...allProjects].sort((a, b) => {
    const aCode = a.client.charCodeAt(0) + seed;
    const bCode = b.client.charCodeAt(0) + seed;
    return aCode - bCode;
  });
  return shuffled.slice(0, 6);
}

// Location-specific FAQs
export const locationFAQs = {
  london: [
    {
      q: "How much does a website cost in London?",
      a: "Pricing depends on the size and requirements of the project. Contact us for a tailored quote.",
    },
    {
      q: "Do you work with London startups?",
      a: "Yes, we regularly design websites for startups, SMEs, and established businesses across London.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Absolutely. We offer complete website redesign services.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes, every website we build is fully responsive.",
    },
    {
      q: "Do you provide SEO?",
      a: "Yes, all websites are built with SEO best practices.",
    },
    {
      q: "How long does a project take?",
      a: "Most projects are completed within 3–6 weeks.",
    },
    {
      q: "Do you offer website maintenance?",
      a: "Yes, ongoing support and maintenance plans are available.",
    },
    {
      q: "Can we meet remotely?",
      a: "Yes, we work with clients across London and the UK remotely.",
    },
  ],
  manchester: [
    {
      q: "Do you design websites for Manchester businesses?",
      a: "Yes, we work with businesses throughout Manchester and Greater Manchester.",
    },
    {
      q: "Can you help improve website enquiries?",
      a: "Yes, we focus on conversion-focused design and clear calls-to-action.",
    },
    {
      q: "Do you build e-commerce websites?",
      a: "Yes, we design and develop online stores.",
    },
    {
      q: "Will my site load quickly?",
      a: "Performance optimisation is included in every project.",
    },
    {
      q: "Can you migrate my current website?",
      a: "Yes, we can handle migrations and redesigns.",
    },
    {
      q: "Do you provide hosting advice?",
      a: "Yes, we can recommend suitable hosting solutions.",
    },
    {
      q: "Is SEO included?",
      a: "Technical SEO foundations are included.",
    },
    {
      q: "How do I get a quote?",
      a: "Contact us through our enquiry form.",
    },
  ],
  birmingham: [
    {
      q: "Do you work with Birmingham SMEs?",
      a: "Yes, many of our projects are for small and medium-sized businesses.",
    },
    {
      q: "Can you redesign outdated websites?",
      a: "Yes, website redesigns are one of our core services.",
    },
    {
      q: "Are your websites SEO-friendly?",
      a: "Yes, SEO best practices are built into every website.",
    },
    {
      q: "Do you offer e-commerce development?",
      a: "Yes, we build online stores and e-commerce websites.",
    },
    {
      q: "How long does a project take?",
      a: "Typical timelines are 3–6 weeks.",
    },
    {
      q: "Can you maintain my website?",
      a: "Yes, ongoing maintenance plans are available.",
    },
    {
      q: "Do you work remotely?",
      a: "Yes, we work with clients across Birmingham and the UK.",
    },
    {
      q: "How do I request a quote?",
      a: "Use our contact form to get started.",
    },
  ],
  leeds: [
    {
      q: "Do you work with businesses across Leeds?",
      a: "Yes, we work with companies throughout Leeds and West Yorkshire.",
    },
    {
      q: "Can you build a website from scratch?",
      a: "Absolutely, all projects can be fully bespoke.",
    },
    {
      q: "Will my website work on mobile devices?",
      a: "Yes, every website is fully responsive.",
    },
    {
      q: "Do you include SEO?",
      a: "Yes, technical SEO foundations are included.",
    },
    {
      q: "Can you redesign my current site?",
      a: "Yes, redesigns are one of our most requested services.",
    },
    {
      q: "Do you offer support after launch?",
      a: "Yes, ongoing support is available.",
    },
    {
      q: "How long does a project take?",
      a: "Most projects take 2–4 weeks.",
    },
    {
      q: "How do I get started?",
      a: "Contact us for a free consultation.",
    },
  ],
  liverpool: [
    {
      q: "Do you design websites for Liverpool businesses?",
      a: "Yes, we work with businesses across Liverpool and Merseyside.",
    },
    {
      q: "Can you redesign an old website?",
      a: "Yes, we specialise in modern website redesigns.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes, all websites are fully responsive.",
    },
    {
      q: "Do you provide SEO?",
      a: "Yes, SEO best practices are included.",
    },
    {
      q: "Can you build an online store?",
      a: "Yes, we offer e-commerce website development.",
    },
    {
      q: "Do you offer maintenance?",
      a: "Yes, ongoing support plans are available.",
    },
    {
      q: "How long does a project take?",
      a: "Most projects take 3–6 weeks.",
    },
    {
      q: "How do I request a quote?",
      a: "Contact us through our website.",
    },
  ],
  bristol: [
    {
      q: "Do you work with Bristol startups?",
      a: "Yes, we regularly work with startups and growing businesses.",
    },
    {
      q: "Can you redesign my website?",
      a: "Yes, we provide complete redesign services.",
    },
    {
      q: "Will my website be SEO-friendly?",
      a: "Yes, SEO best practices are included.",
    },
    {
      q: "Do you build e-commerce websites?",
      a: "Yes, we design and develop online stores.",
    },
    {
      q: "How long does a project take?",
      a: "Typical timelines are 3–6 weeks.",
    },
    {
      q: "Do you offer maintenance?",
      a: "Yes, ongoing support is available.",
    },
    {
      q: "Can we work remotely?",
      a: "Yes, we work with clients across Bristol and the UK.",
    },
    {
      q: "How do I get a quote?",
      a: "Contact us through our enquiry form.",
    },
  ],
  nottingham: [
    {
      q: "Do you work with Nottingham businesses?",
      a: "Yes, we work with companies across Nottingham and the East Midlands.",
    },
    {
      q: "Can you redesign an outdated website?",
      a: "Yes, redesigns are one of our core services.",
    },
    {
      q: "Will my website work on mobile devices?",
      a: "Yes, every website is fully responsive.",
    },
    {
      q: "Do you include SEO?",
      a: "Yes, technical SEO foundations are included.",
    },
    {
      q: "Can you build an online store?",
      a: "Yes, we offer e-commerce website development.",
    },
    {
      q: "Do you provide maintenance?",
      a: "Yes, ongoing support plans are available.",
    },
    {
      q: "How long does a project take?",
      a: "Most projects take 2–4 weeks.",
    },
    {
      q: "How do I get started?",
      a: "Contact us for a free consultation.",
    },
  ],
  glasgow: [
    {
      q: "Do you design websites for Glasgow businesses?",
      a: "Yes, we work with businesses across Glasgow and Scotland.",
    },
    {
      q: "Can you redesign my current website?",
      a: "Yes, we provide complete redesign services.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes, every website is fully responsive.",
    },
    {
      q: "Do you provide SEO?",
      a: "Yes, SEO best practices are included.",
    },
    {
      q: "Can you build an e-commerce website?",
      a: "Yes, we develop online stores.",
    },
    {
      q: "Do you offer maintenance?",
      a: "Yes, ongoing support plans are available.",
    },
    {
      q: "How long does a project take?",
      a: "Typical timelines are 3–6 weeks.",
    },
    {
      q: "How do I request a quote?",
      a: "Contact us through our website.",
    },
  ],
  edinburgh: [
    {
      q: "Do you work with businesses across Edinburgh?",
      a: "Yes, we work with clients throughout Edinburgh and Scotland.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Yes, website redesigns are one of our core services.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes, every website is fully responsive.",
    },
    {
      q: "Do you include SEO?",
      a: "Yes, technical SEO foundations are included.",
    },
    {
      q: "Can you build an online store?",
      a: "Yes, we offer e-commerce website development.",
    },
    {
      q: "Do you provide maintenance?",
      a: "Yes, ongoing support plans are available.",
    },
    {
      q: "How long does a project take?",
      a: "Most projects take 2–4 weeks.",
    },
    {
      q: "How do I get started?",
      a: "Contact us for a free consultation.",
    },
  ],
  sheffield: [
    {
      q: "Do you work with Sheffield businesses?",
      a: "Yes, we work with companies across Sheffield and South Yorkshire.",
    },
    {
      q: "Can you redesign an outdated website?",
      a: "Yes, redesigns are one of our most requested services.",
    },
    {
      q: "Will my website work on mobile devices?",
      a: "Yes, every website is fully responsive.",
    },
    {
      q: "Do you include SEO?",
      a: "Yes, technical SEO foundations are included.",
    },
    {
      q: "Can you build an online store?",
      a: "Yes, we offer e-commerce website development.",
    },
    {
      q: "Do you provide maintenance?",
      a: "Yes, ongoing support plans are available.",
    },
    {
      q: "How long does a project take?",
      a: "Typical timelines are 3–6 weeks.",
    },
    {
      q: "How do I request a quote?",
      a: "Contact us through our website.",
    },
  ],
  leicester: [
    {
      q: "Do you work with Leicester businesses?",
      a: "Yes, we work with companies across Leicester and the East Midlands.",
    },
    {
      q: "Can you redesign my website?",
      a: "Yes, we provide complete redesign services.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes, every website is fully responsive.",
    },
    {
      q: "Do you include SEO?",
      a: "Yes, SEO best practices are included.",
    },
    {
      q: "Can you build an online store?",
      a: "Yes, we develop e-commerce websites.",
    },
    {
      q: "Do you offer maintenance?",
      a: "Yes, ongoing support plans are available.",
    },
    {
      q: "How long does a project take?",
      a: "Most projects take 2–4 weeks.",
    },
    {
      q: "How do I get started?",
      a: "Contact us for a free consultation.",
    },
  ],
  newcastle: [
    {
      q: "Do you design websites for Newcastle businesses?",
      a: "Yes, we work with businesses across Newcastle and the North East.",
    },
    {
      q: "Can you redesign my current website?",
      a: "Yes, we provide complete redesign services.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes, every website is fully responsive.",
    },
    {
      q: "Do you provide SEO?",
      a: "Yes, SEO best practices are included.",
    },
    {
      q: "Can you build an e-commerce website?",
      a: "Yes, we develop online stores.",
    },
    {
      q: "Do you offer maintenance?",
      a: "Yes, ongoing support plans are available.",
    },
    {
      q: "How long does a project take?",
      a: "Typical timelines are 3–6 weeks.",
    },
    {
      q: "How do I request a quote?",
      a: "Contact us through our website.",
    },
  ],
};

// Pricing data (same across all locations)
export const pricingPlans = [
  {
    name: "Brochure",
    price: "£2,500",
    description: "Perfect for establishing your digital presence",
    features: [
      "5–8 static pages",
      "Responsive design",
      "Core SEO optimization",
      "Basic analytics setup",
      "Contact form",
      "2 rounds of revisions",
    ],
    cta: "Perfect fit",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "£5,000",
    description: "For businesses ready to convert",
    features: [
      "10–15 custom pages",
      "Advanced responsive design",
      "Comprehensive SEO",
      "CMS for content updates",
      "Lead capture flows",
      "Conversion optimization",
      "4 rounds of revisions",
    ],
    cta: "Most popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "From £10,000",
    description: "Complex applications and e-commerce",
    features: [
      "Unlimited custom pages",
      "E-commerce integration",
      "API integrations",
      "Advanced security",
      "Custom workflows",
      "Performance optimization",
      "Unlimited revisions",
    ],
    cta: "Let's talk",
    highlighted: false,
  },
];

// Location hero images
export const locationImages = {
  london: "/images/location/crea-web-london.jpg",
  manchester: "/images/location/crea-web-manchester.jpg",
  birmingham: "/images/location/crea-web-birmingham.webp",
  leeds: "/images/location/crea-web-leeds.png",
  liverpool: "/images/location/crea-web-liverpool.jpg",
  bristol: "/images/location/crea-web-bristol.jfif",
  nottingham: "/images/location/crea-web-nottingham.webp",
  sheffield: "/images/location/crea-web-sheffield.jpg",
  glasgow: "/images/location/crea-web-glasglow.jpg",
  edinburgh: "/images/location/crea-web-edinburgh.webp",
  leicester: "/images/location/crea-web-leicester.jpeg",
  newcastle: "/images/location/crea-web-newscastle.jpg",
};
