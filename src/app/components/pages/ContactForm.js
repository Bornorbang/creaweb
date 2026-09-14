"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const success = useRef(null);
  useEffect(() => { if(sent) success.current?.focus(); }, [sent]);
  async function handleSubmit(event) {
    event.preventDefault();
    if(sending) return;
    setSending(true); setError("");
    const fields = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(["name", "mobile", "email", "budget", "message"].map(name => [name, fields.get(name)]))) });
      if(!response.ok) { const data = await response.json().catch(() => ({})); throw new Error(data.error || "Something went wrong. Please try again or email contact@creaweb.co.uk."); }
      setSent(true);
    } catch(err) { setError(err.message); }
    finally { setSending(false); }
  }
  return <div className="sp-contact-form">{sent ? <div className="sp-contact-success" tabIndex={-1} ref={success} role="status"><span aria-hidden="true">✓</span><h2>Enquiry Received</h2><p>Thank you — we’ll be in touch within one business day.</p></div> : <form onSubmit={handleSubmit} aria-label="Project enquiry" aria-busy={sending}><span className="cw-label">A little about your project</span><div className="sp-field-pair"><div><label htmlFor="name">Full name *</label><input id="name" name="name" autoComplete="name" required placeholder="Jane Smith" /></div><div><label htmlFor="mobile">Mobile number</label><input id="mobile" name="mobile" type="tel" autoComplete="tel" placeholder="Your phone number" /></div></div><div><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="jane@example.co.uk" /></div><div><label htmlFor="budget">Approximate budget</label><select id="budget" name="budget" defaultValue=""><option value="">Please select…</option><option>£2,500 – £5,000</option><option>£5,000 – £10,000</option><option>£10,000 – £25,000</option><option>£25,000 – £50,000</option><option>£50,000+</option><option>I’d like your advice</option></select></div><div><label htmlFor="message">Tell us about your project *</label><textarea id="message" name="message" rows={6} required placeholder="A brief description of your business, what you need, and any particular challenges you’re facing…" /></div><p className="sp-form-note">We’ll use these details to respond to your enquiry. Read our <Link href="/privacy-policy">privacy policy</Link>.</p>{error && <p className="sp-form-error" role="alert">{error}</p>}<button className="cw-button" type="submit" disabled={sending}>{sending ? "Sending…" : "Send enquiry"}<span aria-hidden="true">↗</span></button></form>}</div>;
}
