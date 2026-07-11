import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomCTA from "../components/BottomCTA";
import Link from "next/link";

export const metadata = {
  title: "E-Commerce Website Design UK",
  description:
    "Professional e-commerce website design and development for UK businesses. Crea Web builds conversion-focused online stores on Shopify, WooCommerce, and custom platforms.",
  alternates: { canonical: "https://creaweb.co.uk/ecommerce-websites" },
  openGraph: {
    title: "E-Commerce Website Design UK | Crea Web Agency",
    description: "Conversion-focused online stores for UK brands on Shopify and WooCommerce.",
    url: "https://creaweb.co.uk/ecommerce-websites",
    type: "website",
  },
};

const features = [
  { title: "Conversion-Focused Design", body: "Every layout, colour choice, and micro-interaction is made with one goal: turning more visitors into paying customers." },
  { title: "Shopify & WooCommerce", body: "We work with the UK's most trusted e-commerce platforms and build bespoke themes that make the most of each." },
  { title: "Payment & Fulfilment Integration", body: "Stripe, PayPal, Klarna, and fulfilment APIs integrated cleanly — so your operations run without friction." },
  { title: "Mobile Commerce Ready", body: "Over 65% of UK online shopping happens on mobile. Every store we build is optimised for the small screen first." },
  { title: "Inventory & CMS", body: "Easy-to-manage product catalogues, stock alerts, and editorial content — giving your team full control post-launch." },
  { title: "SEO for E-Commerce", body: "Product schema, structured data, fast Core Web Vitals, and category page optimisation built in from day one." },
];

export default function EcommerceWebsitesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">E-Commerce</span>
            </div>
            <div className="max-w-[680px]">
              <h1 className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                E-Commerce Website
                <br />
                <em className="text-[#B08D57]">Design in the UK</em>
              </h1>
              <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                Conversion-focused online stores for UK brands — premium design
                paired with seamless payment, inventory, and fulfilment systems.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300">
                Build My Online Store
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
              E-Commerce Design
              <br />
              <em className="text-[#12372A]">Built to Sell</em>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10">
              {features.map((f) => (
                <div key={f.title} className="bg-[#F6F1E8] p-8 md:p-10 flex flex-col gap-4">
                  <h3 className="font-serif-display text-[#1C1C1C] text-[1.15rem] leading-tight">{f.title}</h3>
                  <p className="text-[#7C746A] text-[0.88rem] leading-[1.75] font-sans font-light">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
