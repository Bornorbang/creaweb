import Link from "next/link";
import SiteShell from "../components/pages/SiteShell";
import ContactForm from "../components/pages/ContactForm";
import { Hero } from "../components/pages/MarketingPage";
import content from "../components/pages/content.json";
export default function ContactPage() {
  return <SiteShell page="contact" cta={false}><Hero label="Let’s talk" title="Let’s begin with a conversation." intro={content.contact.intro} tone="orange" /><section className="sp-shell sp-section sp-contact-layout"><div className="sp-contact-details"><span className="cw-label">Reach us</span><h2>We’d love to hear<br />about your project.</h2><dl><div><dt>Email</dt><dd><Link href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk ↗</Link></dd></div><div><dt>Phone</dt><dd><a href="tel:+447846935545">+447846935545</a></dd></div><div><dt>Location</dt><dd>Manchester · Remote across UK</dd></div></dl><p>We take on a limited number of projects each year to ensure every client receives our full attention and commitment.</p></div><ContactForm /></section></SiteShell>;
}
