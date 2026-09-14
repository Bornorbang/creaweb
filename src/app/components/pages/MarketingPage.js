import SymbolIcon from "../SymbolIcon";
import Image from "next/image";
import Link from "next/link";
import SiteShell, { Button, FAQ } from "./SiteShell";
import content from "./content.json";

const serviceRoutes = ["web-design", "website-development", "contact", "ecommerce-websites", "seo", "pricing#retainers"];
const details = {
  "web-design": { label: "Bespoke web design", image: "/images/works/aanchor.png", name: "Aanchor Health" },
  "website-development": { label: "Website development", image: "/images/works/Accelede.png", name: "Accelede" },
  "ecommerce-websites": { label: "E-commerce websites", image: "/images/works/Naijabeauty.png", name: "Naija Beauty" },
  "seo": { label: "SEO & performance", image: "/images/works/academia.png", name: "University Compare" },
  "shopify-development": { label: "Shopify development", image: "/images/works/baebronx.png", name: "Bae Bronx" },
  "wordpress-development": { label: "WordPress development", image: "/images/works/lilyhearthomecare-ca.jpg", name: "Lily Heart Home Care" },
  "website-redesign": { label: "Website redesign", image: "/images/works/makeuptalent.png", name: "Makeup Talent" },
};

export function Hero({ label, title, intro, children, art, tone = "paper" }) {
  return <section className={`sp-hero sp-tone-${tone}`}><div className="sp-shell"><nav className="sp-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{label}</span></nav><div className={art ? "sp-hero-grid" : "sp-hero-wide"}><div><span className="cw-label">Crea Web Agency / {label}</span><h1>{title}</h1>{intro.map(p => <p key={p}>{p}</p>)}{children && <div className="sp-actions">{children}</div>}</div>{art}</div></div></section>;
}

function PortfolioArt({ item }) {
  return <figure className="sp-browser"><div className="sp-browser-bar"><span>Selected work</span><span aria-hidden="true">● ● ●</span></div><div className="sp-browser-image"><Image src={item.image} alt={`${item.name} website — UK web design agency portfolio`} fill priority sizes="(max-width: 850px) 90vw, 45vw" style={{objectFit:"cover",objectPosition:"top"}} /></div><figcaption>{item.name}<Link href="/projects">View our portfolio <SymbolIcon symbol="↗" /></Link></figcaption></figure>;
}

function FeatureGrid({ items }) {
  return <div className="sp-feature-grid">{items.map((f,i) => <article key={f.title || f.name || f.label}><span className="sp-number" aria-hidden="true">{String(i+1).padStart(2,"0")}</span><h3>{f.title || f.name || f.label}</h3><p>{f.body || f.desc}</p></article>)}</div>;
}

function ServiceDetail({ d }) {
  const item = details[d.slug];
  const features = Object.values(d.vars)[0];
  return <SiteShell page={d.slug}><Hero label={item.label} title={d.title} intro={d.intro} art={<PortfolioArt item={item} />}><Button>{d.sections[0].links[0]?.text || "Discuss your project"}</Button><Link className="sp-text-link" href="/projects">Explore our work <SymbolIcon symbol="↗" /></Link></Hero><section className="sp-dark"><div className="sp-shell sp-section"><span className="cw-label">Built around your business</span><h2>{d.sections[1].heading}</h2><FeatureGrid items={features} /></div></section><section className="sp-shell sp-section sp-next"><div><span className="cw-label">From the first conversation to launch</span><h2>A clear plan.<br />A considered result.</h2></div><div><p>Tell us what you want your website to achieve. We’ll help define the scope, recommend the right approach, and give you a clear proposal before work begins.</p><div className="sp-actions"><Button>Get a free consultation</Button><Button href="/services" secondary>All services</Button></div></div></section><section className="sp-shell sp-related"><span className="cw-label">Explore more services</span><div>{Object.entries(details).filter(([slug])=>slug!==d.slug).map(([slug,i])=><Link key={slug} href={`/${slug}`}>{i.label}<span aria-hidden="true"><SymbolIcon symbol="↗" /></span></Link>)}</div></section></SiteShell>;
}

function Services({ d }) {
  const pricing = d.sections[7];
  return <SiteShell page="services"><Hero label="Our services" title="Good design. Serious capability." intro={[d.title,...d.intro]} tone="orange" art={<div className="sp-type-art" aria-hidden="true"><span>IDEA.</span><span>BUILD.</span><span>GROW. <SymbolIcon symbol="↗" /></span></div>}><Button>Discuss your project</Button><a href="#disciplines" className="sp-text-link">Explore our services <SymbolIcon symbol="↓" /></a></Hero><section id="disciplines" className="sp-shell sp-section sp-service-list">{d.vars.services.map((s,i)=><article key={s.number} id={`service-${s.number}`}><div className="sp-service-heading"><span className="sp-number" aria-hidden="true">{s.number}</span><h2>{s.title}</h2><p>{s.tagline}</p><Button href={`/${serviceRoutes[i]}`}>{i===2?"Discuss AI & automation":"Explore this service"}</Button></div><div><p>{s.body}</p><h3>What’s included</h3><ul>{s.detail.map(f=><li key={f}><span aria-hidden="true"><SymbolIcon symbol="✓" /></span>{f}</li>)}</ul></div></article>)}</section><section className="sp-dark"><div className="sp-shell sp-section"><span className="cw-label">Clear scope. Clear investment.</span><h2>{pricing.heading}</h2><p className="sp-intro">{pricing.paragraphs[0]}</p><div className="sp-rate-grid">{[1,4,7].map(i=><div key={i}><h3>{pricing.paragraphs[i]}</h3><p className="sp-rate">{pricing.paragraphs[i+1]}</p><p>{pricing.paragraphs[i+2]}</p></div>)}</div><Button href="/pricing">View pricing & packages</Button></div></section><FAQ items={d.vars.faqs} intro={d.sections[8].paragraphs[0]} /></SiteShell>;
}

function About({ d }) {
  return <SiteShell page="about"><Hero label="Our story" title="About Crea Web." intro={d.intro} art={<figure className="sp-about-portrait"><Image src={d.sections[0].images[0].src} alt="UK web design agency — Crea Web creative approach" fill priority sizes="(max-width: 850px) 90vw, 45vw" style={{objectFit:"cover"}} /><figcaption>Independent thinking. Thoughtful craft. <SymbolIcon symbol="↗" /></figcaption></figure>}><Button>Let’s make something great</Button></Hero><section className="sp-shell sp-section sp-story"><div><span className="cw-label">The way we see it</span><h2>Your story.<br />Made digital.</h2><div className="sp-story-image"><Image src={d.sections[1].images[0].src} alt="UK web design agency — bespoke website design at Crea Web" fill sizes="(max-width: 850px) 90vw, 40vw" style={{objectFit:"cover"}} /></div></div><div>{d.sections[1].paragraphs.map(p=><p key={p}>{p}</p>)}</div></section><section className="sp-about-banner"><div className="sp-shell"><span className="cw-label">The studio</span><h2>Small details.<br />Lasting impressions.</h2><p>Manchester · Remote across UK</p><span aria-hidden="true"><SymbolIcon symbol="✳" /></span></div></section><section className="sp-shell sp-section"><span className="cw-label">What we believe</span><h2>{d.sections[3].heading}</h2><p className="sp-intro">{d.sections[3].paragraphs[0]}</p><FeatureGrid items={d.vars.values} /></section></SiteShell>;
}

function Pricing({ d }) {
  return <SiteShell page="pricing"><Hero label="Pricing & packages" title="Clear scope. Honest pricing." intro={[d.title,...d.intro]} tone="lime"><Button>Request a quote</Button><a className="sp-text-link" href="#pricing-plans">One-off projects <SymbolIcon symbol="↓" /></a><a className="sp-text-link" href="#retainers">Monthly retainers <SymbolIcon symbol="↓" /></a></Hero><section id="pricing-plans" className="sp-shell sp-section"><span className="cw-label">Build something that lasts</span><h2>{d.sections[1].heading}</h2><p className="sp-intro">{d.sections[1].paragraphs[0]}</p><div className="sp-plan-grid">{d.vars.plans.map(p=><article key={p.name} className={`sp-plan${p.featured?" sp-plan-featured":""}`}><span className="cw-label">{p.featured?"For ambitious brands":"Bespoke website design"}</span><h3>{p.name}</h3><p>{p.tagline}</p><div className="sp-price">{p.price}</div><span className="sp-period">{p.period}</span><ul>{p.features.map(f=><li key={f}><span aria-hidden="true"><SymbolIcon symbol="✓" /></span>{f}</li>)}</ul><Button>{p.cta}</Button></article>)}</div></section><section id="retainers" className="sp-dark"><div className="sp-shell sp-section"><span className="cw-label">Keep moving forward</span><h2>{d.sections[2].heading}</h2><p className="sp-intro">{d.sections[2].paragraphs[0]}</p><div className="sp-retainers">{d.vars.retainer.map((p,i)=><article key={p.name}><span className="sp-number" aria-hidden="true">0{i+1}</span><h3>{p.name}</h3><p className="sp-retainer-price">{p.price}</p><ul>{p.features.map(f=><li key={f}>{f}</li>)}</ul><Link className="sp-text-link" href="/contact">Discuss a retainer <SymbolIcon symbol="↗" /></Link></article>)}</div></div></section><FAQ items={d.vars.faqs} title="Common questions." /></SiteShell>;
}

export default function MarketingPage({ slug }) {
  const d = content[slug];
  if(slug === "about") return <About d={d} />;
  if(slug === "services") return <Services d={d} />;
  if(slug === "pricing") return <Pricing d={d} />;
  return <ServiceDetail d={d} />;
}
