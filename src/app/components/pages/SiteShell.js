import SymbolIcon from "../SymbolIcon";
import Link from "next/link";
import Navigation from "../wildcard/Navigation";
import WhatsAppButton from "../wildcard/WhatsAppButton";
import industries from "../industries/industries.json";
import { cities } from "../locations/cities";
import "../wildcard/wildcard.css";
import "./pages.css";

export function Button({ href = "/contact", children = "Start a conversation", secondary = false }) {
  return <Link href={href} className={`cw-button${secondary ? " sp-secondary" : ""}`}>{children}<span aria-hidden="true"><SymbolIcon symbol="↗" /></span></Link>;
}

export function BottomCTA() {
  return <section className="sp-final"><div className="sp-shell"><span className="cw-label">Something good starts with a conversation</span><h2>Ready to discuss<br />your project?</h2><p>No commitment — just an honest conversation about what’s possible.</p><Button>Let’s talk</Button></div></section>;
}

export function FAQ({ items, title = "A few useful answers.", intro }) {
  return <section className="sp-shell sp-section sp-faq"><div><span className="cw-label">Before we get started</span><h2>{title}</h2>{intro && <p className="sp-intro">{intro}</p>}<Link className="sp-text-link" href="/contact">Ask us something else <SymbolIcon symbol="↗" /></Link></div><div>{items.map(f => <details key={f.q}><summary>{f.q}<span aria-hidden="true">+</span></summary><p>{f.a}</p></details>)}</div></section>;
}

export default function SiteShell({ children, page, cta = true }) {
  return <div className={`cw cw-wildcard sp sp-${page}`} id="top" data-page={page}><a className="cw-skip" href="#page-content">Skip to content</a><div className="sp-shell"><Navigation homeLinks /></div><main id="page-content">{children}{cta && <BottomCTA />}</main><footer className="sp-shell sp-footer"><div className="cw-footer-row"><Link href="/" className="cw-logo">Crea Web Agency</Link><Link href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</Link><span>Manchester · Remote across UK</span></div><div className="sp-footer-grid"><nav aria-label="Agency pages"><span className="cw-label">The agency</span>{[["/about","About us"],["/services","Services"],["/projects","Our work"],["/pricing","Pricing"],["/insights","Insights"],["/contact","Contact"]].map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}</nav><nav aria-label="Industry pages"><span className="cw-label">Your industry</span><div>{Object.values(industries).map(i => <Link key={i.slug} href={`/industries/${i.slug}`}>{i.label}</Link>)}<Link href="/industries/charities">Charities & NFPs</Link></div></nav><nav aria-label="Location pages"><span className="cw-label">Across the UK</span><div>{Object.values(cities).map(c => <Link key={c.slug} href={`/web-design-${c.slug}`}>{c.city}</Link>)}</div></nav></div><div className="cw-footer-bottom"><span>© {new Date().getFullYear()} Crea Web Agency</span><nav aria-label="Legal pages"><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link><Link href="/cookie-policy">Cookies</Link><Link href="/accessibility">Accessibility</Link></nav><a href="#top">Back to top <SymbolIcon symbol="↑" /></a></div></footer><WhatsAppButton /></div>;
}
