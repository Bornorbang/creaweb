import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomCTA from "../components/BottomCTA";
import Link from "next/link";

export const metadata = {
  title: "Bespoke Web Design UK",
  description:
    "Award-quality bespoke web design for UK businesses. Crea Web creates custom, responsive websites that reflect your brand and convert visitors into clients.",
  alternates: { canonical: "https://creaweb.co.uk/web-design" },
  openGraph: {
    title: "Bespoke Web Design UK | Crea Web Agency",
    description: "Custom, responsive websites that reflect your brand and convert visitors into clients.",
    url: "https://creaweb.co.uk/web-design",
    type: "website",
  },
};

const features = [
  {
    title: "Custom-Built, Never Templated",
    body: "Every website we design starts from a blank canvas — shaped by your brand, your audience, and your goals. No theme marketplaces. No compromises.",
  },
  {
    title: "Responsive Website Design",
    body: "Your site performs flawlessly on every screen — from widescreen desktops to the smallest mobile handsets. Responsive design is built in from day one.",
  },
  {
    title: "Conversion-Focused Layouts",
    body: "Beautiful design that works. Every layout decision is grounded in user psychology and tested against your business objectives.",
  },
  {
    title: "Brand-Led Visual Identity",
    body: "We translate your brand values into a cohesive digital aesthetic — typography, colour, spacing, and imagery chosen with intent.",
  },
  {
    title: "SEO-Ready from Launch",
    body: "Clean semantic markup, fast load times, and optimised page structure ensure your new site is primed to rank from the moment it goes live.",
  },
  {
    title: "Ongoing Partnership Available",
    body: "Our relationship doesn't end at launch. Retained clients receive priority support, iterative improvements, and strategic guidance.",
  },
];

export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#12372A] to-[#0e2a1f]" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Web Design
              </span>
            </div>
            <div className="max-w-[680px]">
              <h1
                className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Bespoke Web Design
                <br />
                <em className="text-[#B08D57]">in the UK</em>
              </h1>
              <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                Custom website design for British businesses that want a digital
                presence as considered and purposeful as the work they do.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300"
              >
                Start Your Project
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">What We Deliver</span>
            </div>
            <h2
              className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Custom Website Design
              <br />
              <em className="text-[#12372A]">Built for Results</em>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10">
              {features.map((f) => (
                <div key={f.title} className="bg-[#F6F1E8] p-8 md:p-10 flex flex-col gap-4">
                  <h3 className="font-serif-display text-[#1C1C1C] text-[1.15rem] leading-tight">{f.title}</h3>
                  <p className="text-[#7C746A] text-[0.88rem] leading-[1.75] font-sans font-light">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#1C1C1C] px-8 py-4 hover:bg-[#12372A] text-[#F6F1E8] transition-colors duration-300">
                Get a Free Consultation
              </Link>
              <Link href="/services" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#1C1C1C] border border-[#1C1C1C]/30 px-8 py-4 hover:border-[#12372A] hover:text-[#12372A] transition-colors duration-300">
                All Services
              </Link>
            </div>
          </div>
        </section>

        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
