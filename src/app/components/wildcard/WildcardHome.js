import Process from "./Process";
import WhatsAppButton from "./WhatsAppButton";
import ModernNav from "./Navigation";
import "./wildcard.css";
import Image from "next/image";
import Link from "next/link";
import { copy, projects, services } from "./content";
import ProjectExplorer from "./ProjectExplorer";

export function ModernImage({ src, alt, className = "", priority = false, top = false }) {
  return <div className={`cw-image ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 65vw" priority={priority} style={{ objectFit: "cover", objectPosition: top ? "top" : "center" }} /></div>;
}


function Button({ children = "Start a conversation", href = "/contact", secondary = false }) {
  return <Link className={`cw-button${secondary ? " cw-secondary" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}

function BrowserFrame({ project = projects[0], className = "", priority = false }) {
  return <figure className={`cw-browser ${className}`}><div className="cw-browser-bar"><span aria-hidden="true">● ● ●</span><span>{project.client}</span><span aria-hidden="true">↗</span></div><ModernImage src={project.image} alt={`${project.client} homepage showing bespoke website design by Crea Web`} top priority={priority} /></figure>;
}

function ModernHero() {
 const priority = true;
  return <section className="cw-hero cw-wildcard-hero"><div className="cw-wild-intro"><span className="cw-label">CREA WEB / UK WEB DESIGN STUDIO</span><h1>Professional <br />Web Design <span className="cw-hero-location">Agency UK<span className="cw-wild-period">.</span></span></h1><div className="cw-wild-bottom"><span className="cw-wild-star" aria-hidden="true">✳</span><p>{copy.intro}</p><Button>LET’S MAKE IT HAPPEN</Button></div></div><div className="cw-wild-projects"><div className="cw-wild-caption"><span>GOOD DESIGN.<br />REAL BUSINESS RESULTS.</span><Link href="#work">OUR WORK ↘</Link></div><BrowserFrame project={projects[2]} priority={priority} /><div className="cw-wild-seal">DESIGNED<br />TO STAND<br /><strong>OUT ↗</strong></div></div><div className="cw-wild-ticker" aria-hidden="true"><span>DESIGN ✳ DEVELOPMENT ✳ E-COMMERCE ✳ SEO ✳ DESIGN ✳ DEVELOPMENT ✳</span></div></section>;
}

function Services() {
  const icons = ["✳", "⌘", "✦", "↗", "◎", "∞"];
  return <section id="services" className="cw-section cw-services"><div className="cw-section-heading"><div><span className="cw-label">What we do</span><h2>Web design services<br />in the UK.</h2></div><p>Website design services for UK businesses, from bespoke web design to e-commerce and ongoing support. One team to plan, design and build your next website.</p></div><div className="cw-service-grid">{services.map((s,i)=><Link className="cw-service-card" key={s.title} href={s.href}><div><span className="cw-service-icon" aria-hidden="true">{icons[i]}</span><span aria-hidden="true">↗</span></div><h3>{s.title}</h3><p>{s.body}</p></Link>)}</div></section>;
}

function Studio() {
  return <section id="studio" className="cw-section cw-studio"><div className="cw-studio-photo"><ModernImage src="/images/studio-about.jpg" alt="Colleagues collaborating around laptops, illustrating a professional web design process" /><span>Creative thinking.<br /><strong>Technical expertise.</strong></span></div><div className="cw-studio-copy"><span className="cw-label">About Crea Web</span><h2>Bespoke websites.<br />Built around you.</h2><p>{copy.about}</p><p>{copy.approach}</p><Button href="/about">Get to know us</Button></div></section>;
}

function UKCoverage() {
 return <section className="cw-section cw-uk" aria-labelledby="uk-title"><div><span className="cw-label">Your UK web design partner</span><h2 id="uk-title">Your next chapter.<br />Designed here.</h2></div><div><h3>A website design company UK businesses can grow with</h3><p>Choosing a web design company UK businesses can rely on starts with a clear conversation. We take time to understand your audience, your existing website and the work you need it to do.</p><p>Our website design services in UK cities are delivered through a collaborative, remote-friendly process. Based in Manchester, we work with businesses across the United Kingdom, with regular reviews and a clear plan for launch.</p><p>Whether you need a new website or a redesign, our focus stays the same: useful content, a distinctive identity and an experience that works for your customers.</p><nav aria-label="Web design locations"><Link href="/web-design-manchester">Web design Manchester</Link><Link href="/web-design-london">Web design London</Link><Link href="/web-design-birmingham">Web design Birmingham</Link><Link href="/web-design-leeds">Web design Leeds</Link></nav><Link className="cw-button" href="/contact">Discuss your website <span aria-hidden="true">↗</span></Link></div></section>;
}

function Questions() {
 const items = [
 ["What will my website cost?", "Every project is scoped around your goals, content and functionality. Tell us what you have in mind and we’ll put together a proposal with a clear scope and price before work begins."],
 ["Do you offer website redesigns?", "Yes. We can review what is working, identify what needs to change, and plan a redesign around your customers. Our website redesigns consider existing content, important URLs and redirects as part of the plan."],
 ["Will I be able to update the website?", "We can build in a content management system so you can make everyday updates. We’ll agree what you need to manage and include a handover in the project scope."],
 ["What happens after launch?", "We offer ongoing maintenance and support. We’ll agree the support you need, from essential updates to further improvements, before launch."]
 ];
 return <section className="cw-section cw-questions" aria-labelledby="questions-title"><div><span className="cw-label">A few useful answers</span><h2 id="questions-title">Before we<br />get started.</h2><Link href="/contact">Have another question? Get in touch ↗</Link></div><div>{items.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>;
}

function Footer() {
  return <footer className="cw-footer"><div className="cw-final-cta"><span className="cw-label">Your next chapter starts here</span><h2>Let’s begin with<br />a conversation<span>.</span></h2><p>A new website, a fresh direction, or a better way to do things. Tell us what you have in mind.</p><Button>Start your project</Button></div><div className="cw-footer-row"><Link href="#top" className="cw-logo">Crea Web Agency</Link><Link href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</Link><span>Manchester · Remote across UK</span><nav aria-label="Legal pages"><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link><Link href="/cookie-policy">Cookies</Link><Link href="/accessibility">Accessibility</Link></nav></div><div className="cw-footer-bottom"><span>© {new Date().getFullYear()} Crea Web Agency</span><Link href="/insights">Ideas & insights ↗</Link><Link href="#top">Back to top ↑</Link></div></footer>;
}

export default function WildcardHome() {
  return <div id="top" className="cw cw-wildcard"><a href="#cw-content" className="cw-skip">Skip to content</a><div className="cw-shell"><ModernNav /><main id="cw-content"><ModernHero /><ProjectExplorer /><Services /><Studio /><Process /><UKCoverage /><Questions /></main><Footer /></div><WhatsAppButton /></div>;
}
