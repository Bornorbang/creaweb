import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import LocationPricing from "../components/LocationPricing";
import LocationFAQ from "../components/LocationFAQ";
import LocationWork from "../components/LocationWork";
import LocationCTA from "../components/LocationCTA";
import ContactCTA from "../components/ContactCTA";
import { getProjectsForCity, locationFAQs, pricingPlans, locationImages } from "../lib/locationData";


export const metadata = {
  title: "Web Design London",
  description:
    "Looking for professional Web Design London services? Crea Web designs bespoke, SEO-friendly websites that help London businesses attract customers, build trust, and grow online.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-london" },
  openGraph: {
    title: "Web Design London | Crea Web Agency",
    description: "Bespoke, responsive website design for London businesses.",
    url: "https://creaweb.co.uk/web-design-london",
    type: "website",
  },
};

const features = [
  { title: "Built for London Businesses", body: "From boutique firms in Mayfair to professional services in the City, we understand what London clients expect — and we deliver it.", icon: <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { title: "Custom, Not Templated", body: "Every website is designed from scratch to reflect your brand, your audience, and your competitive position in the London market.", icon: <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> },
  { title: "Responsive Website Design", body: "Your site performs flawlessly across every device — essential for London's mobile-first professional audience.", icon: <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { title: "Conversion-Focused", body: "Beautiful design backed by UX strategy — layouts engineered to turn London visitors into paying clients.", icon: <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 8 15 12 12 16"/><line x1="8" y1="12" x2="15" y2="12"/></svg> },
  { title: "SEO-Ready from Day One", body: "Technical SEO foundations built in from launch — so your London audience finds you on Google before they find your competitors.", icon: <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> },
  { title: "Ongoing Partnership", body: "We work with London businesses on a retained basis — iterating, improving, and growing your site alongside your business.", icon: <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
];

export default function WebDesignLondonPage() {
  const projects = getProjectsForCity("london");
  const faqs = locationFAQs.london;
  const heroImage = locationImages.london;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="block w-8 h-[1px] bg-[#B08D57]" />
                  <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">London</span>
                </div>
                <h1 className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
                  Professional Web Design in London for <em className="text-[#B08D57]">Growing Businesses</em>
                </h1>
                <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                  Looking for expert Web Design London services? At Crea Web, we design bespoke websites that combine elegant design, modern development, and SEO best practices to help London businesses attract customers, build credibility, and grow with confidence.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300">
                  Start Your London Project
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>

              {/* Right placeholder for image */}
              <div className="hidden md:block relative">
                {/* Gold corner accents */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-[#B08D57]/60 z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-[#B08D57]/60 z-10" />
                <img
                  src={heroImage}
                  alt="Web Design London"
                  className="w-full h-full object-cover rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Us section */}
        <section className="bg-[#F6F1E8] py-28 md:py-36">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">About Crea Web</span>
                  <hr className="flex-1 divider" />
                </div>
                <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                  Bespoke Web Design for London Businesses
                </h2>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-6">
                <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                  At Crea Web, we provide web design in London for businesses that want a professional online presence without compromising on performance or design quality. From startups in Shoreditch to established companies across Central London, we create bespoke websites that help brands stand out in one of the world's most competitive business markets.
                </p>
                <p className="text-[#7C746A] text-[0.95rem] leading-[1.82] font-sans font-light">
                  Our team focuses on responsive design, fast loading speeds, SEO-friendly structure, and conversion-focused user experience. Whether you need a corporate website, e-commerce store, or a complete website redesign, every project is tailored to your business goals rather than built from a template.
                </p>
                <p className="text-[#7C746A] text-[0.95rem] leading-[1.82] font-sans font-light">
                  As a trusted web design agency in London, we combine modern design with reliable development and ongoing support. We work with businesses across Greater London to build websites that attract customers, build trust, and support long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-start">
              <div>
                <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                  Web Design Services
                  <br />
                  <em className="text-[#12372A]">for London</em>
                </h2>
              </div>
              <p className="text-[#7C746A] text-[0.9rem] leading-[1.82] font-sans font-light max-w-[72ch]">
                Crea Web works with London businesses across all sectors — professional services, luxury retail, hospitality, technology, and finance. We work fully remotely and have delivered projects for clients across the City, Canary Wharf, Mayfair, Shoreditch, and beyond.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10">
              {features.map((f) => (
                <div key={f.title} className="bg-[#F6F1E8] p-8 md:p-10 flex flex-col gap-4">
                  {f.icon && <div className="mb-2">{f.icon}</div>}
                  <h3 className="font-serif-display text-[#1C1C1C] text-[1.15rem] leading-tight">{f.title}</h3>
                  <p className="text-[#7C746A] text-[0.88rem] leading-[1.75] font-sans font-light">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LocationWork projects={projects} cityName="London" />
        <LocationPricing pricing={pricingPlans} />
        <ContactCTA />
        <LocationFAQ faqs={faqs} />
        <LocationCTA />
      </main>
      <Footer />
    </>
  );
}
