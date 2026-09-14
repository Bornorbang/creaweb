import SymbolIcon from "../components/SymbolIcon";
import Image from "next/image";
import Link from "next/link";
import { articles, copy, processSteps, projects, services } from "./content";

const Arrow = () => <span aria-hidden="true"><SymbolIcon symbol="↗" /></span>;

export function DesignHeader({ compact = false }) {
  return (
    <header className="ed-header">
      <Link href={compact ? "/designs" : "#top"} className="ed-wordmark" aria-label="Crea Web home">crea web<span className="wordmark-dot">.</span></Link>
      <span className="ed-location">Independent digital studio<br />Manchester · United Kingdom</span>
      <nav aria-label="Website navigation">
        <Link href="#work">Work</Link><Link href="#services">Services</Link><Link href="#studio">Studio</Link><Link href="/insights">Insights</Link>
      </nav>
      <Link className="ed-header-contact" href="/contact">Let’s talk <Arrow /></Link>
    </header>
  );
}

function Photo({ src = "/images/crea-web-hero.webp", alt = "Designer working on a website in the studio", className = "", priority = false, position = "center" }) {
  return <div className={`ed-photo ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 60vw" priority={priority} style={{ objectFit: "cover", objectPosition: position }} /></div>;
}

function Intro({ children = copy.intro }) {
  return <p className="ed-intro">{children}</p>;
}

function Action({ href = "#work", children = "View our work" }) {
  return <Link href={href} className="ed-action">{children} <Arrow /></Link>;
}

export function DesignHero({ theme, preview = false }) {
  const priority = !preview;
  if (theme === "independent") return (
    <section className="ed-hero newspaper-hero">
      <div className="newspaper-edition"><span>Design. Development. Digital craft.</span><span>Made in Manchester. Built for the UK.</span></div>
      <h1>Professional Web Design<br /><em>Agency UK.</em></h1>
      <div className="newspaper-columns">
        <div className="newspaper-lead"><span className="ed-kicker">A considered digital presence</span><Intro /><Action /><p className="ed-small">Bespoke websites.<br />Lasting partnerships.</p></div>
        <figure><Photo priority={priority} /><figcaption><span>Inside the studio</span><span>Creative thinking. Technical expertise.</span></figcaption></figure>
        <aside className="newspaper-side"><span className="ed-kicker">From the studio journal</span><h2>{articles[0].title}</h2><p>{articles[0].excerpt}</p><Link href={`/${articles[0].slug}`}>Read the story <Arrow /></Link><div className="edition-mark" aria-hidden="true">C/W</div></aside>
      </div>
    </section>
  );
  if (theme === "form") return (
    <section className="ed-hero swiss-hero">
      <div className="swiss-top"><span className="ed-kicker">UK web design studio</span><span>Design with intention.<br />Built for performance.</span></div>
      <h1><span>Professional</span><span>Web Design<span className="swiss-asterisk" aria-hidden="true"><SymbolIcon symbol="✳" /></span></span><span className="swiss-last">Agency UK<span className="swiss-period">.</span></span></h1>
      <div className="swiss-bottom"><span className="swiss-arrow" aria-hidden="true">↳</span><Intro /><Action href="/contact">Start a conversation</Action></div>
      <div className="swiss-project"><Photo src={projects[2].image} alt="Accelede website design" position="top" priority={priority} /><div><span className="ed-kicker">Selected work / 003</span><h2>Accelede</h2><p>Technology</p><Action href="#work">Explore our projects</Action></div></div>
    </section>
  );
  if (theme === "monograph") return (
    <section className="ed-hero book-hero">
      <div className="book-title"><span className="ed-kicker">Crea Web — a digital studio</span><h1>Professional<br /><em>Web Design</em><br />Agency UK.</h1><Intro /><Action href="/contact">Start a conversation</Action></div>
      <figure className="book-image"><Photo src="/images/crea-web-hero-about-us.webp" alt="A view into the Crea Web studio" priority={priority} /><figcaption><span>Craft, clarity & lasting partnerships.</span><span>01 — The studio</span></figcaption></figure>
      <div className="book-side-note">Thoughtfully designed. Purposefully built.</div>
    </section>
  );
  if (theme === "afterhours") return (
    <section className="ed-hero night-hero">
      <div className="night-top"><span className="ed-kicker">Design meets development</span><span className="night-disc" aria-hidden="true"><SymbolIcon symbol="↗" /></span></div>
      <h1>Professional<br /><em>Web Design.</em><span>Agency UK</span></h1>
      <div className="night-bottom"><Intro /><Action href="/contact">Start a conversation</Action><span className="ed-kicker">Scroll to explore <SymbolIcon symbol="↓" /></span></div>
      <figure className="night-cover"><Photo src={projects[2].image} alt="Accelede — selected technology website project" position="top" priority={priority} /><figcaption><span>Selected work — Accelede</span><span>Technology / 003</span></figcaption></figure>
    </section>
  );
  return (
    <section className="ed-hero field-hero">
      <div className="field-title"><span className="ed-kicker">A note from the studio — Manchester, UK</span><h1>Professional<br /><em>Web Design</em><br />Agency UK<span>.</span></h1><Intro /><Action>View our work</Action></div>
      <div className="field-collage"><figure className="field-main"><Photo priority={priority} /><figcaption>01 / Ideas into digital experiences.</figcaption></figure><figure className="field-project"><Photo src={projects[0].image} alt="Aanchor Health website project" position="top" /><figcaption>Aanchor Health — Healthcare</figcaption></figure><span className="field-stamp">CREATIVE THINKING<br /><span aria-hidden="true"><SymbolIcon symbol="✳" /></span><br />TECHNICAL EXPERTISE</span></div>
      <div className="field-bottom"><span>Good people. Considered work.</span><span>Bespoke websites for British businesses.</span></div>
    </section>
  );
}

function SectionHeading({ number, title, href, label }) {
  return <div className="ed-section-heading"><span className="ed-kicker">{number} / {label}</span><h2>{title}</h2>{href && <Link href={href}>View all <Arrow /></Link>}</div>;
}

function Work() {
  return <section id="work" className="ed-work ed-section"><SectionHeading number="01" label="Selected projects" title="Our recent work." href="/projects" /><div className="ed-projects">{projects.map((p, i) => <Link key={p.index} href="/projects" className={`ed-project ed-project-${i}`}><div className="ed-project-mat"><Photo src={p.image} alt={`${p.client} website design`} position="top" /><span className="ed-project-arrow" aria-hidden="true"><SymbolIcon symbol="↗" /></span></div><div className="ed-project-caption"><div><h3>{p.client}</h3><p>{p.category}</p></div><span>{p.index}</span></div></Link>)}</div></section>;
}

function Studio() {
  return <section id="studio" className="ed-studio ed-section"><span className="ed-kicker">02 / About the studio</span><div className="ed-studio-content"><h2>Craft. Clarity.<br /><em>Long-term thinking.</em></h2><div><p className="ed-studio-lead">{copy.about}</p><p>{copy.approach}</p><p>{copy.partnership}</p><Action href="/about">More about us</Action></div></div></section>;
}

function Services() {
  return <section id="services" className="ed-services ed-section"><SectionHeading number="03" label="What we do" title="Services, with intention." href="/services" /><div className="ed-service-list">{services.map((s, i) => <Link href={s.href} key={s.title} className="ed-service"><span className="ed-service-number">0{i + 1}</span><h3>{s.title}</h3><p>{s.body}</p><Arrow /></Link>)}</div></section>;
}

function Process() {
  return <section className="ed-process ed-section"><span className="ed-kicker">04 / How we work</span><div className="ed-process-intro"><h2>From the first conversation<br /><em>to launch and beyond.</em></h2><p>A structured, five-phase approach that keeps you informed, involved, and confident at every stage.</p></div><ol>{processSteps.map((step, i) => <li key={step}><span>0{i + 1}</span><h3>{step}</h3></li>)}</ol></section>;
}

function Journal() {
  return <section className="ed-journal ed-section"><SectionHeading number="05" label="The studio journal" title="Insights & observations." href="/insights" /><div className="ed-articles">{articles.map((a, i) => <Link key={a.id} href={`/${a.slug}`} className="ed-article"><div className={`ed-article-art ed-article-art-${i}`} aria-hidden="true"><span>{["Aa", "&", "¶"][i]}</span><small>{a.category}</small></div><p className="ed-kicker">{a.category} · {a.readTime}</p><h3>{a.title}</h3><span className="ed-article-read">Read the article <Arrow /></span></Link>)}</div></section>;
}

function Footer() {
  return <footer className="ed-footer"><span className="ed-kicker">Let’s make something that matters.</span><h2>Let’s begin with<br /><em>a conversation.</em></h2><Action href="/contact">Tell us about your project</Action><div className="ed-footer-details"><Link href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</Link><span>Manchester · Remote across UK</span></div><div className="ed-footer-bottom"><Link className="ed-wordmark" href="#top">crea web.</Link><span>Design. Development. Digital craft.</span><nav aria-label="Legal"><Link href="/privacy-policy">Privacy</Link><Link href="/accessibility">Accessibility</Link></nav></div></footer>;
}

export default function DesignPage({ direction }) {
  return <div id="top" className={`editorial ed-${direction.theme}`}><a className="ed-skip" href="#design-content">Skip to content</a><DesignHeader /><main id="design-content"><DesignHero theme={direction.theme} />{direction.id === "3" || direction.id === "5" ? <><Studio /><Work /></> : <><Work /><Studio /></>}<Services /><Process /><Journal /></main><Footer /></div>;
}
