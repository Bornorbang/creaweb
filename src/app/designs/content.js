import { allProjects } from "../lib/locationData";
import { staticArticles } from "../components/Journal";

export const directions = [
  { id: "1", name: "The Independent", theme: "independent", short: "An agency with a point of view.", description: "Newspaper proportions, sharp serif headlines and vermilion details. Confident, literate and unmistakably editorial.", palette: ["#f4f2eb", "#25241f", "#be3829"], traits: "Newsprint / Serif / Structured" },
  { id: "2", name: "Form & Function", theme: "form", short: "Precision, with personality.", description: "Oversized Swiss typography, cobalt blue and a rigorous grid. A contemporary design-and-development studio with real presence.", palette: ["#efefec", "#193ee8", "#c5ed59"], traits: "Swiss / Cobalt / Typographic" },
  { id: "3", name: "The Monograph", theme: "monograph", short: "Quiet confidence. Beautiful detail.", description: "A spacious, book-like composition in parchment and espresso. Large photography and expressive italics give the work room to breathe.", palette: ["#f0eae0", "#3e302a", "#b9b2a1"], traits: "Literary / Warm / Restrained" },
  { id: "4", name: "After Hours", theme: "afterhours", short: "A different kind of digital studio.", description: "An art-publication approach: ink-black surfaces, lilac type and an oversized project cover. Expressive, contemporary and memorable.", palette: ["#191919", "#d4c3f1", "#e4f68b"], traits: "Art magazine / Dark / Expressive" },
  { id: "5", name: "Field Notes", theme: "fieldnotes", short: "Human, thoughtful, hands-on.", description: "An asymmetric studio notebook with rust-red accents, warm paper and candid imagery. Approachable craftsmanship with an editorial sensibility.", palette: ["#f7f4e9", "#a6442e", "#656d4a"], traits: "Notebook / Tactile / Personal" },
  { id: "6", name: "Launchpad", theme: "launchpad", short: "A polished digital growth partner.", description: "A bright product-style website with a floating navigation, soft blue gradients, rounded panels and layered website previews. Clear, commercial and contemporary.", palette: ["#f5f8ff", "#2659ed", "#bdceff"], traits: "Product style / Bright / Rounded" },
  { id: "7", name: "Showcase", theme: "showcase", short: "Let the work take centre stage.", description: "A cinematic, image-led portfolio with an immersive cover, clean white typography and large project panels. A confident creative studio with very little visual noise.", palette: ["#111715", "#f0f3ec", "#d5fc79"], traits: "Cinematic / Immersive / Minimal" },
  { id: "8", name: "Wildcard", theme: "wildcard", short: "Built to be impossible to ignore.", description: "A punchy graphic identity with orange, acid yellow, heavy type, hard borders and playful oversized shapes. For an agency that wants to stand out immediately.", palette: ["#ff6435", "#edff73", "#20221d"], traits: "Graphic / Bold / Playful" },
  { id: "9", name: "Good Company", theme: "goodcompany", short: "Expert work. A human touch.", description: "A friendly studio with lilac, peach and plum, a modular collage of real work, and soft geometric details. Approachable, creative and easy to navigate.", palette: ["#fbf7ef", "#563c70", "#cabbf0"], traits: "Friendly / Colourful / Modular" },
  { id: "10", name: "Nexus", theme: "nexus", short: "Design meets serious engineering.", description: "A technical dark interface with luminous blue accents, a browser-and-code composition and compact system-inspired details. Built for a development-led agency.", palette: ["#080f1b", "#91e1ff", "#7759ff"], traits: "Technical / Dark / Precise" },
];

// Existing website content, rearranged for the five design studies.
export const copy = {
  headline: "Professional Web Design Agency UK",
  intro: "Crea Web is a UK web design agency creating professional, SEO-friendly websites for businesses. Fast, responsive websites designed to generate more leads. Get a free quote today.",
  about: "At Crea Web, we believe every business deserves a website that does more than simply look good—it should inspire confidence, communicate your brand’s story, and generate real business results.",
  approach: "Our team works closely with startups, small businesses, and established organisations to understand their goals before a single design is created.",
  partnership: "At Crea Web, we’re committed to long-term partnerships rather than one-off projects. We provide ongoing support, maintenance, and continuous improvements to ensure your website evolves alongside your business.",
};

export const services = [
  { title: "Professional Web Design", href: "/web-design", body: "Considered visual identities translated faithfully into digital form. We design for your audience, your context, and your ambitions — never from a template." },
  { title: "Web Development", href: "/website-development", body: "Clean, performant code built on modern frameworks. Fast load times, accessibility standards met, and a codebase you can grow into for years." },
  { title: "AI & Automation", href: "/services", body: "Websites supercharged with artificial intelligence — from AI-powered chat and automated workflows to smart personalisation and data-driven systems that work for your business around the clock." },
  { title: "E-Commerce", href: "/ecommerce-websites", body: "Conversion-focused stores that feel as premium as the products within them. Seamlessly integrated with payment, fulfilment, and inventory systems." },
  { title: "SEO & Performance", href: "/seo", body: "Organic visibility built through technical excellence and genuine authority. We don’t chase algorithms — we build the kind of site they reward." },
  { title: "Ongoing Partnership", href: "/contact", body: "A retained relationship for businesses who value consistent, considered stewardship of their digital presence — from updates to strategic reviews." },
];

export const projects = allProjects.filter((p) => ["001", "002", "003", "006"].includes(p.index));
export const articles = staticArticles;
export const processSteps = ["Discovery & Listening", "Strategy & Architecture", "Design & Art Direction", "Build & Refine", "Launch & Continuity"];
