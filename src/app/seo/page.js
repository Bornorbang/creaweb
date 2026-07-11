import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomCTA from "../components/BottomCTA";
import Link from "next/link";

export const metadata = {
  title: "SEO Services UK",
  description:
    "Professional SEO services for UK businesses. Crea Web delivers technical SEO, on-page optimisation, and content strategy that builds lasting organic visibility.",
  alternates: { canonical: "https://creaweb.co.uk/seo" },
  openGraph: {
    title: "SEO Services UK | Crea Web Agency",
    description: "Technical SEO and content strategy that builds lasting organic visibility for UK businesses.",
    url: "https://creaweb.co.uk/seo",
    type: "website",
  },
};

const services = [
  { title: "Technical SEO Audit", body: "A comprehensive audit of your site's crawlability, indexation, Core Web Vitals, schema markup, and architecture — with a clear action plan." },
  { title: "On-Page Optimisation", body: "Keyword-aligned title tags, meta descriptions, heading structure, internal linking, and content improvements across every page." },
  { title: "Content Strategy", body: "We identify the topics and keywords your audience searches for and build a content plan that earns authority over time." },
  { title: "Local SEO", body: "Dominate local search results in your city or region — Google Business Profile optimisation, local citations, and geo-targeted content." },
  { title: "Link Building", body: "Ethical, editorial link acquisition from reputable UK publications and industry sites — no directories, no shortcuts." },
  { title: "SEO for New Websites", body: "Every website we build is SEO-ready from day one — fast, accessible, semantically structured, and properly indexed." },
];

export default function SEOPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">SEO</span>
            </div>
            <div className="max-w-[680px]">
              <h1 className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                SEO Services
                <br />
                <em className="text-[#B08D57]">for UK Businesses</em>
              </h1>
              <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                Organic visibility built through technical excellence and genuine
                authority. We don&rsquo;t chase algorithms — we build the kind of
                site they reward.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300">
                Get an SEO Audit
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
              SEO Services
              <br />
              <em className="text-[#12372A]">We Provide</em>
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
