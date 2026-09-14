import SymbolIcon from "../SymbolIcon";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../wildcard/Navigation";
import WhatsAppButton from "../wildcard/WhatsAppButton";
import { allProjects } from "../../lib/locationData";
import industries from "./industries.json";
import "../wildcard/wildcard.css";
import "./industries.css";

const logos = ["Google", "Trustpilot", "HubSpot", "NHS", "Ocado", "RingCentral"];
const projectCategories = { healthcare: "Healthcare", education: "Education", technology: "Technology", ecommerce: "E-Commerce", charity: "NGO", charities: "NGO", "arts-culture": "Photography", hospitality: "Travel" };

function Button({ children = "Discuss your project", href = "/contact", secondary = false }) {
  return <Link href={href} className={`cw-button${secondary ? " ci-secondary" : ""}`}>{children}<span aria-hidden="true"><SymbolIcon symbol="↗" /></span></Link>;
}

function Photo({ image, keyword, context, priority = false, className = "" }) {
  return <div className={`ci-photo ${className}`}><Image src={image.src} alt={`${image.alt} — ${context}`} fill sizes={priority ? "(max-width: 850px) 90vw, 48vw" : "(max-width: 850px) 90vw, 40vw"} priority={priority} style={{ objectFit: "cover" }} /><span className="ci-photo-caption">{keyword} / UK</span></div>;
}

export default function IndustryPage({ industry: d }) {
  const category = projectCategories[d.slug];
  const projects = [...allProjects.filter(p => p.category === category), ...allProjects.filter(p => p.category !== category)].slice(0, 3);
  return <div className="cw cw-wildcard cw-industry" id="top" data-industry={d.slug}>
    <a className="cw-skip" href="#industry-content">Skip to content</a>
    <div className="ci-shell"><Navigation /></div>
    <main id="industry-content">
      <section className="ci-hero ci-shell" aria-labelledby="industry-title">
        <nav className="ci-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><a href="#industries">Industries</a><span aria-hidden="true">/</span><span>{d.label}</span></nav>
        <div className="ci-hero-grid">
          <div className="ci-hero-copy"><span className="cw-label">Different industries. Individual ideas.</span><h1 id="industry-title">{d.label}<br /><span>web design.</span></h1><p className="ci-statement">{d.heroTitle}</p><p>{d.intro}</p><div className="ci-actions"><Button>{d.cta || "Discuss your project"}</Button><a className="ci-text-link" href="#work">See our work <span aria-hidden="true"><SymbolIcon symbol="↘" /></span></a></div></div>
          <div className="ci-hero-art"><div className="ci-image-toolbar"><span>Crea Web Agency</span><span aria-hidden="true">● ● ●</span></div><Photo image={d.images[0]} keyword={d.keyword} context="industry inspiration" priority /><div className="ci-stamp" aria-hidden="true">YOUR SECTOR.<br />OUR CRAFT.<span><SymbolIcon symbol="✳" /></span></div></div>
        </div>
      </section>

      <section className="ci-trusted" aria-labelledby="trusted-title"><div className="ci-shell"><h2 id="trusted-title">Trusted by<br />amazing companies</h2><ul>{logos.map(name => <li key={name}><Image src={`/images/trusted/${name.toLowerCase()}.png`} alt={`${name} logo — ${d.keyword} UK`} width={160} height={50} unoptimized /></li>)}</ul></div></section>

      <section id="studio" className="ci-shell ci-section ci-about"><div><span className="cw-label">01 / Understanding your world</span><h2>{d.aboutTitle}</h2><Photo image={d.images[1]} keyword={d.keyword} context="understanding your industry" /></div><div className="ci-prose">{d.about.map(p => <p key={p}>{p}</p>)}<Button href="/about" secondary>Meet Crea Web Agency</Button></div></section>

      <section id="services" className="ci-reasons"><div className="ci-shell ci-section"><div className="ci-heading"><div><span className="cw-label">02 / Built with purpose</span><h2>{d.reasonsTitle}</h2></div><span className="ci-large-star" aria-hidden="true"><SymbolIcon symbol="✳" /></span></div><div className="ci-reason-grid">{d.reasons.map((r, i) => <article key={r.title}><span className="ci-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><div><h3>{r.title}</h3><p>{r.body}</p></div></article>)}</div></div></section>

      <section className="ci-shell ci-section ci-features"><div className="ci-feature-title"><span className="cw-label">03 / The details that matter</span><h2>{d.featuresTitle}</h2>{d.featuresIntro && <p>{d.featuresIntro}</p>}<span className="ci-feature-arrow" aria-hidden="true"><SymbolIcon symbol="↗" /></span></div><ul>{d.features.map((f, i) => <li key={f}><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{f}</li>)}</ul></section>

      <section className="ci-sectors"><div className="ci-shell ci-section"><div className="ci-heading"><div><span className="cw-label">04 / Your kind of business</span><h2>{d.sectorsTitle}</h2></div>{d.sectorsIntro && <p>{d.sectorsIntro}</p>}</div><ul>{d.sectors.map(s => <li key={s}>{s}<span aria-hidden="true"><SymbolIcon symbol="↗" /></span></li>)}</ul></div></section>

      <section className="ci-shell ci-section ci-why"><Photo image={d.images[2]} keyword={d.keyword} context="digital opportunities for your business" /><div><span className="cw-label">05 / A website that moves you forward</span><h2>{d.whyTitle}</h2>{d.why.map(p => <p key={p}>{p}</p>)}</div></section>

      <section className="ci-shell ci-benefits"><span className="cw-label">The Crea Web approach</span><h2>{d.benefitsTitle}</h2><ul>{d.benefits.map(b => <li key={b}><span aria-hidden="true"><SymbolIcon symbol="✓" /></span>{b}</li>)}</ul></section>

      <section id="work" className="ci-shell ci-section ci-work"><div className="ci-heading"><div><span className="cw-label">06 / From the studio</span><h2>Good ideas.<br />Out in the world.</h2></div><div><p>A selection of websites from across our portfolio.</p><Link className="ci-text-link" href="/projects">Explore all projects <SymbolIcon symbol="↗" /></Link></div></div><div className="ci-projects">{projects.map(p => <Link href="/projects" key={p.index} className="ci-project"><div><Image src={p.image} alt={`${p.client} website — ${d.keyword} UK portfolio`} fill sizes="(max-width: 600px) 90vw, 30vw" style={{ objectFit: "cover", objectPosition: "top" }} /><span aria-hidden="true"><SymbolIcon symbol="↗" /></span></div><h3>{p.client}</h3><p>{p.category}</p></Link>)}</div></section>

      <section id="pricing" className="ci-pricing"><div className="ci-shell ci-section"><div className="ci-heading"><div><span className="cw-label">07 / An investment in what comes next</span><h2>{d.pricingTitle}</h2></div>{d.pricingIntro && <p>{d.pricingIntro}</p>}</div><div className="ci-plans">{d.plans.map((p, i) => <article key={p.name} className={i === 1 ? "ci-plan ci-plan-featured" : "ci-plan"}><div className="ci-plan-top"><h3>{p.name}</h3>{i === 1 && <span>Recommended</span>}</div><p className="ci-price">{p.price}</p>{p.notes.map(n => <p className="ci-plan-note" key={n}>{n}</p>)}<ul>{p.features.map(f => <li key={f}><span aria-hidden="true"><SymbolIcon symbol="✓" /></span>{f}</li>)}</ul><Button>{p.cta}</Button></article>)}</div></div></section>

      <section id="questions" className="ci-shell ci-section ci-faq"><div><span className="cw-label">08 / Before we get started</span><h2>Your questions.<br />Straight answers.</h2><p>Frequently asked questions about {d.keyword.toLowerCase()}.</p><Link className="ci-text-link" href="/contact">Ask us something else <SymbolIcon symbol="↗" /></Link></div><div>{d.faqs.map(f => <details key={f.q}><summary>{f.q}<span aria-hidden="true">+</span></summary><p>{f.a}</p></details>)}</div></section>

      <section className="ci-final"><div className="ci-shell"><span className="cw-label">Your next chapter starts here</span><h2>{d.finalTitle}</h2>{d.finalText.map(p => <p key={p}>{p}</p>)}<Button>Let’s talk about your project</Button></div></section>
    </main>
    <footer className="ci-shell ci-footer"><div className="cw-footer-row"><Link href="/" className="cw-logo">Crea Web Agency</Link><Link href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</Link><span>Manchester · Remote across UK</span></div><nav id="industries" aria-label="Industries we serve"><span className="cw-label">Explore your industry</span><div>{Object.values(industries).map(i => <Link key={i.slug} href={`/industries/${i.slug}`} aria-current={i.slug === d.slug ? "page" : undefined}>{i.label}</Link>)}<Link href="/industries/charities" aria-current={d.slug === "charities" ? "page" : undefined}>Charities & NFPs</Link></div></nav><div className="ci-footer-links"><nav aria-label="Agency pages"><Link href="/services">Services</Link><Link href="/projects">Our work</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link><Link href="/insights">Insights</Link></nav><nav aria-label="Legal pages"><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link><Link href="/cookie-policy">Cookies</Link><Link href="/accessibility">Accessibility</Link></nav></div><div className="cw-footer-bottom"><span>© {new Date().getFullYear()} Crea Web Agency</span><a href="#top">Back to top <SymbolIcon symbol="↑" /></a></div></footer>
    <WhatsAppButton />
  </div>;
}
