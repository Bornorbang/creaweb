import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomCTA from "../components/BottomCTA";
import Link from "next/link";

export const metadata = {
  title: "Shopify Development UK",
  description:
    "Expert Shopify development for UK e-commerce businesses. Crea Web builds bespoke Shopify stores with custom themes, app integrations, and conversion-optimised design.",
  alternates: { canonical: "https://creaweb.co.uk/shopify-development" },
  openGraph: {
    title: "Shopify Development UK | Crea Web Agency",
    description: "Bespoke Shopify stores for UK businesses — custom themes, integrations, and conversion-optimised design.",
    url: "https://creaweb.co.uk/shopify-development",
    type: "website",
  },
};

const services = [
  { title: "Custom Shopify Themes", body: "Bespoke Shopify theme development that goes far beyond the theme store — designed and coded to reflect your brand at its finest." },
  { title: "Shopify Plus", body: "Enterprise-grade Shopify Plus solutions for high-volume UK retailers — including custom checkout, B2B functionality, and automation." },
  { title: "Shopify Migrations", body: "Moving to Shopify from WooCommerce, Magento, or a custom platform? We handle the transition with zero data loss and SEO continuity." },
  { title: "App Integration", body: "Seamless integration of third-party apps — from loyalty programmes and review platforms to ERP and fulfilment systems." },
  { title: "Conversion Rate Optimisation", body: "We audit your existing Shopify store and implement data-backed improvements to product pages, checkout, and navigation." },
  { title: "Ongoing Support", body: "Retained Shopify support for UK merchants — platform updates, new feature rollouts, and strategic guidance as you scale." },
];

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">Shopify</span>
            </div>
            <div className="max-w-[680px]">
              <h1 className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                Shopify Development
                <br />
                <em className="text-[#B08D57]">for UK Businesses</em>
              </h1>
              <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                Bespoke Shopify stores that feel as premium as the products
                within them — custom themes, seamless integrations, and a
                shopping experience that converts.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300">
                Start Your Shopify Project
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
              Shopify Services
              <br />
              <em className="text-[#12372A]">We Offer</em>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10">
              {services.map((s) => (
                <div key={s.title} className="bg-[#F6F1E8] p-8 md:p-10 flex flex-col gap-4">
                  <h3 className="font-serif-display text-[#1C1C1C] text-[1.15rem] leading-tight">{s.title}</h3>
                  <p className="text-[#7C746A] text-[0.88rem] leading-[1.75] font-sans font-light">{s.body}</p>
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
