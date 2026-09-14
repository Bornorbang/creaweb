import SymbolIcon from "../SymbolIcon";
﻿import Image from "next/image";
import Link from "next/link";
import Navigation from "../wildcard/Navigation";
import WhatsAppButton from "../wildcard/WhatsAppButton";
import ContactCTA from "../ContactCTA";
import { getProjectsForCity, locationFAQs, pricingPlans, locationImages } from "../../lib/locationData";
import { cities } from "./cities";
import "../wildcard/wildcard.css";
import "./locations.css";

const trustedCompanies = [
  { name: "Google", file: "google" },
  { name: "Trustpilot", file: "trustpilot" },
  { name: "HubSpot", file: "hubspot" },
  { name: "NHS", file: "nhs" },
  { name: "Ocado", file: "ocado" },
  { name: "RingCentral", file: "ringcentral" },
];

function Action({ href = "/contact", children, secondary = false }) {
  return <Link className={`cw-button${secondary ? " cw-secondary" : ""}`} href={href}>{children}<span aria-hidden="true"><SymbolIcon symbol="↗" /></span></Link>;
}

export default function LocationPage({ location }) {
  const { city, slug } = location;
  const projects = getProjectsForCity(slug);
  const faqs = locationFAQs[slug];
  return <div className="cw cw-wildcard cw-location" data-city={slug} id="top">
    <a className="cw-skip" href="#location-content">Skip to content</a>
    <div className="cw-shell"><Navigation /></div>
    <main id="location-content">
      <section className="cl-hero" aria-labelledby="location-title">
        <div className="cl-shell">
          <nav className="cl-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Web Design {city}</span></nav>
          <div className="cl-hero-grid"><div className="cl-hero-copy"><span className="cw-label">Crea Web Agency / {city}</span><h1 id="location-title">Web design.<br /><span>{city}.</span></h1><p className="cl-hero-statement">{location.heroTitle}</p><p>{location.intro}</p><div className="cl-actions"><Action>{location.cta}</Action><Link className="cl-text-link" href="#work">Explore our work <span aria-hidden="true"><SymbolIcon symbol="↘" /></span></Link></div></div>
          <figure className="cl-city-photo"><div className="cl-city-image"><Image src={locationImages[slug]} alt={`${city} cityscape — web design services for ${city} businesses`} fill sizes="(max-width: 850px) 100vw, 46vw" priority style={{objectFit:"cover"}} /></div><figcaption><span>{city}, United Kingdom</span><span aria-hidden="true"><SymbolIcon symbol="↗" /></span></figcaption><span className="cl-city-stamp" aria-hidden="true">LOCAL<br />AMBITION.<br /><b>BIG IDEAS.</b></span></figure></div>
        </div>
      </section>
      <section className="cl-trusted" aria-labelledby="trusted-companies-title">
        <div className="cl-shell">
          <h2 id="trusted-companies-title">Trusted by amazing companies</h2>
          <ul>
            {trustedCompanies.map(({ name, file }) => <li key={file}>
              <Image src={`/images/trusted/${file}.png`} alt={`${name} logo — Web Design ${city}`} width={160} height={50} unoptimized />
            </li>)}
          </ul>
        </div>
      </section>
      <section id="studio" className="cl-section cl-shell cl-about"><div><span className="cw-label">About Crea Web</span><h2>{location.aboutTitle}</h2><span className="cl-about-star" aria-hidden="true"><SymbolIcon symbol="✳" /></span></div><div>{location.about.map(p=><p key={p}>{p}</p>)}<Action href="/about" secondary>Meet Crea Web Agency</Action></div></section>
      <section id="services" className="cl-services"><div className="cl-shell cl-section"><div className="cl-heading"><div><span className="cw-label">What we bring to {city}</span><h2>{location.servicesTitle}</h2></div><p>{location.servicesIntro}</p></div><div className="cl-feature-grid">{location.features.map((f,i)=><article key={f.title}><div className="cl-feature-top"><span>{String(i+1).padStart(2,"0")}</span><span aria-hidden="true"><SymbolIcon symbol="↗" /></span></div><h3>{f.title}</h3><p>{f.body}</p></article>)}</div></div></section>
      <section id="work" className="cl-shell cl-section"><div className="cl-heading"><div><span className="cw-label">Our work</span><h2>Featured projects.</h2></div><Action href="/projects" secondary>Explore all projects</Action></div><div className="cl-project-grid">{projects.map(p=><Link href="/projects" className="cl-project" key={p.index}><div className="cl-project-image"><Image src={p.image} alt={`${p.client} website — bespoke web design from Crea Web for businesses in ${city} and across the UK`} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" style={{objectFit:"cover",objectPosition:"top"}} /><span aria-hidden="true"><SymbolIcon symbol="↗" /></span></div><div className="cl-project-caption"><div><span className="cw-label">{p.category}</span><h3>{p.client}</h3></div><span>{p.index}</span></div></Link>)}</div></section>
      <section id="pricing" className="cl-pricing"><div className="cl-shell cl-section"><div className="cl-heading"><div><span className="cw-label">Plan your investment</span><h2>Transparent pricing.</h2></div><p>No hidden fees. No surprises. Choose the plan that fits your project scope and goals.</p></div><div className="cl-price-grid">{pricingPlans.map(plan=><article className={plan.highlighted?"cl-price-card cl-popular":"cl-price-card"} key={plan.name}><span className="cl-plan-label">{plan.cta}</span><h3>{plan.name}</h3><p>{plan.description}</p><div className="cl-price">{plan.price}</div><ul>{plan.features.map(f=><li key={f}><span aria-hidden="true"><SymbolIcon symbol="✓" /></span>{f}</li>)}</ul><Action>Get Started</Action></article>)}</div></div></section>
      <div className="cl-contact"><ContactCTA /></div>
      <section id="questions" className="cl-shell cl-section cl-faq"><div><span className="cw-label">A few useful answers</span><h2>Frequently asked<br />questions.</h2><p>Everything you need to know about our services and process.</p><Link href="#contact" className="cl-text-link">Ask us about your {city} project <SymbolIcon symbol="↗" /></Link></div><div>{faqs.map(f=><details key={f.q}><summary>{f.q}<span aria-hidden="true">+</span></summary><p>{f.a}</p></details>)}</div></section>
      <section className="cl-final"><div className="cl-shell"><span className="cw-label">Your next chapter starts here</span><h2>Ready to transform<br />your digital presence?</h2><p>Let&apos;s discuss your project, your goals, and how we can help your business succeed online. Every conversation starts with understanding your needs.</p><Action>Get in Touch</Action></div></section>
    </main>
    <footer className="cl-shell cl-footer"><div className="cw-footer-row"><Link className="cw-logo" href="/">Crea Web Agency</Link><Link href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</Link><span>Manchester · Remote across UK</span><nav aria-label="Legal pages"><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link><Link href="/cookie-policy">Cookies</Link><Link href="/accessibility">Accessibility</Link></nav></div><nav className="cl-locations" aria-label="Web design locations"><span className="cw-label">Across the UK</span>{Object.values(cities).map(c=><Link key={c.slug} href={`/web-design-${c.slug}`} aria-current={c.slug===slug?"page":undefined}>{c.city}</Link>)}</nav><div className="cw-footer-bottom"><span>© {new Date().getFullYear()} Crea Web Agency</span><Link href="/insights">Ideas & insights <SymbolIcon symbol="↗" /></Link><Link href="#top">Back to top <SymbolIcon symbol="↑" /></Link></div></footer>
    <WhatsAppButton />
  </div>;
}
