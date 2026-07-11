import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomCTA from "../components/BottomCTA";
import Link from "next/link";

export const metadata = {
  title: "Website Redesign UK",
  description:
    "Is your website holding your business back? Crea Web specialises in professional website redesign for UK businesses — improving design, performance, and conversion rates.",
  alternates: { canonical: "https://creaweb.co.uk/website-redesign" },
  openGraph: {
    title: "Website Redesign UK | Crea Web Agency",
    description: "Professional website redesign for UK businesses — better design, performance, and conversions.",
    url: "https://creaweb.co.uk/website-redesign",
    type: "website",
  },
};

const steps = [
  { num: "01", title: "Audit & Discovery", body: "We assess your current website — design, performance, SEO health, and conversion data — to understand exactly what needs to change and why." },
  { num: "02", title: "Strategy & Wireframing", body: "Before any visual work begins, we map out a revised information architecture and user journey that serves your business goals." },
  { num: "03", title: "Redesign & Build", body: "Your new site is designed and developed with precision — preserving what works, replacing what doesn't, and elevating the whole." },
  { num: "04", title: "SEO Migration", body: "We manage URL redirects, metadata, and indexing carefully to protect your existing search rankings through the transition." },
  { num: "05", title: "Launch & Handover", body: "A thorough pre-launch quality check followed by a smooth, zero-downtime launch — and full training for your team." },
];

export default function WebsiteRedesignPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">Website Redesign</span>
            </div>
            <div className="max-w-[680px]">
              <h1 className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                Website Redesign
                <br />
                <em className="text-[#B08D57]">for UK Businesses</em>
              </h1>
              <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                Your current website may be costing you clients. We rebuild it
                with purpose — improving design, speed, and conversions without
                losing what makes your business distinctive.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300">
                Get a Redesign Quote
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
              Our Redesign
              <br />
              <em className="text-[#12372A]">Process</em>
            </h2>
            <div className="flex flex-col divide-y divide-[#1C1C1C]/10 border-y border-[#1C1C1C]/10">
              {steps.map((s) => (
                <div key={s.num} className="grid lg:grid-cols-[8rem_1fr] gap-6 py-8 items-start">
                  <span className="font-serif-display text-[#B08D57]/60 text-[2rem] leading-none">{s.num}</span>
                  <div>
                    <h3 className="font-serif-display text-[#1C1C1C] text-[1.15rem] mb-2">{s.title}</h3>
                    <p className="text-[#7C746A] text-[0.88rem] leading-[1.75] font-sans font-light">{s.body}</p>
                  </div>
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
