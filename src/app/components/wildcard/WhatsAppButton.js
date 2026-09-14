import Link from "next/link";

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M16 .8A15.1 15.1 0 0 0 2.9 23.4L.8 31.2l8-2.1A15.2 15.2 0 1 0 16 .8Zm0 27.4a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.4 12.4 0 1 1 16 28.2Zm6.8-9.3c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.3.4-1.3 1.2-1.3 3s1.3 3.5 1.5 3.7c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.1-.4-.2-.8-.4Z" /></svg>;
}

export default function WhatsAppButton() {
  // Set an international number (digits only) when the business number is ready.
  const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/[\s+()-]/g, "");
  const configured = /^[1-9]\d{7,14}$/.test(number);
  return <>
    {configured ? <a className="cw-whatsapp" href={`https://wa.me/${number}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Crea Web on WhatsApp"><WhatsAppIcon /></a> : <button type="button" className="cw-whatsapp" popoverTarget="cw-whatsapp-info" aria-label="WhatsApp contact options"><WhatsAppIcon /></button>}
    {!configured && <div id="cw-whatsapp-info" className="cw-whatsapp-panel" popover="auto"><button type="button" className="cw-whatsapp-close" popoverTarget="cw-whatsapp-info" popoverTargetAction="hide" aria-label="Close WhatsApp information">×</button><strong>Let’s talk.</strong><p>WhatsApp is coming soon. In the meantime, tell us about your project through our contact page.</p><Link href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>}
  </>;
}
