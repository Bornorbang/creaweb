import { allProjects } from "../../lib/locationData";
export const copy = {
  headline: "Professional Web Design Agency UK",
  intro: "We’re Crea Web, a UK web design agency based in Manchester. We create bespoke websites with personality and purpose: fast, responsive, SEO-friendly websites built around your customers and your goals.",
  about: "At Crea Web, we believe every business deserves a website that does more than simply look good—it should inspire confidence, communicate your brand’s story, and generate real business results.",
  approach: "As professional web designers in the UK, we work with startups, small businesses and established organisations. Our bespoke web design agency brings strategy, design and development together, from your first brief to launch and ongoing support.",
  partnership: "At Crea Web, we’re committed to long-term partnerships rather than one-off projects. We provide ongoing support, maintenance, and continuous improvements to ensure your website evolves alongside your business.",
};

export const services = [
  { title: "Professional Web Design", href: "/web-design", body: "Bespoke website design shaped around your brand and your customers. Our custom website design combines a clear content structure, distinctive visuals and straightforward journeys from first visit to enquiry." },
  { title: "Web Development", href: "/website-development", body: "A web development agency UK businesses can work with from planning to launch. We build maintainable websites, CMS integrations and responsive website design that adapts to mobile, tablet and desktop." },
  { title: "AI & Automation", href: "/services", body: "Websites supercharged with artificial intelligence — from AI-powered chat and automated workflows to smart personalisation and data-driven systems that work for your business around the clock." },
  { title: "E-Commerce", href: "/ecommerce-websites", body: "Conversion-focused stores that feel as premium as the products within them. Seamlessly integrated with payment, fulfilment, and inventory systems." },
  { title: "SEO & Performance", href: "/seo", body: "On-page SEO and technical foundations built into your website: descriptive headings, useful content, crawlable links and considered image optimisation. We review speed and usability to help visitors find what they need." },
  { title: "Ongoing Partnership", href: "/contact", body: "A retained relationship for businesses who value consistent, considered stewardship of their digital presence — from updates to strategic reviews." },
];

export const projects = allProjects.filter((p) => ["001", "002", "003", "006"].includes(p.index));

export const processSteps = ["Discovery & Listening", "Strategy & Architecture", "Design & Art Direction", "Build & Refine", "Launch & Continuity"];
