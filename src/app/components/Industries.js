import Reveal from "./Reveal";
import Link from "next/link";

const industries = [
  {
    label: "Healthcare", slug: "healthcare",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><rect x="14" y="4" width="4" height="24" rx="1" fill="currentColor"/><rect x="4" y="14" width="24" height="4" rx="1" fill="currentColor"/></svg>,
  },
  {
    label: "Legal", slug: "legal",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><path d="M16 4v24M8 10l8-6 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 28h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 16l-2 6h4l-2-6zM26 16l-2 6h4l-2-6z" fill="currentColor"/></svg>,
  },
  {
    label: "Real Estate", slug: "real-estate",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><path d="M4 28V14l12-10 12 10v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="12" y="19" width="8" height="9" rx="0.5" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    label: "Finance", slug: "finance",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/><path d="M16 9v2m0 10v2M12 13.5C12 12 13.8 11 16 11s4 1 4 2.5c0 3-8 3-8 6 0 1.5 1.8 2.5 4 2.5s4-1 4-2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "Education", slug: "education",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><path d="M16 5L3 12l13 7 13-7-13-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M7 15v7c0 2.5 4 4 9 4s9-1.5 9-4v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    label: "Local Services", slug: "local-services",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><circle cx="16" cy="13" r="5" stroke="currentColor" strokeWidth="2"/><path d="M16 18c-6 0-11 2.5-11 6v1h22v-1c0-3.5-5-6-11-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Hospitality", slug: "hospitality",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><rect x="4" y="14" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="2"/><path d="M10 14V10a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M13 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    label: "E-Commerce", slug: "ecommerce",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><path d="M4 6h3l3 14h14l3-10H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="13" cy="26" r="2" fill="currentColor"/><circle cx="22" cy="26" r="2" fill="currentColor"/></svg>,
  },
  {
    label: "Arts & Culture", slug: "arts-culture",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/><circle cx="11" cy="13" r="2" fill="currentColor"/><circle cx="19" cy="10" r="2" fill="currentColor"/><circle cx="22" cy="19" r="2" fill="currentColor"/><circle cx="13" cy="21" r="2" fill="currentColor"/></svg>,
  },
  {
    label: "Technology", slug: "technology",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><rect x="3" y="7" width="26" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M10 28h12M16 23v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M10 15l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Food & Drink", slug: "food-drink",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><path d="M10 4v8a4 4 0 008 0V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M14 12v16M22 4v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M19 4c0 5 6 5 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    label: "Charities & NFPs", slug: "charity",
    icon: <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true"><path d="M16 27S5 20 5 12a7 7 0 0111-5.74A7 7 0 0127 12c0 8-11 15-11 15z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>,
  },
];


export default function Industries() {
  return (
    <section id="about" className="bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/8">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-6">
          <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
            Industries We Serve
          </span>
          <hr className="flex-1 border-t border-[#1C1C1C]/10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <h2
            className="font-serif-display text-[#1C1C1C] leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            Built for Every Corner
            <br />
            of <em className="text-[#12372A]">British Business</em>
          </h2>
          <p className="text-[#7C746A] text-[0.92rem] leading-relaxed font-sans font-light max-w-[46ch]">
            We have delivered considered digital experiences across a broad
            range of sectors. Whatever your industry, we bring the same
            depth of thought and precision of craft.
          </p>
        </div>

        {/* Industry icon grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-[#1C1C1C]/8 border border-[#1C1C1C]/8">
          {industries.map((ind, i) => (
            <Reveal key={ind.label} delay={i * 40} threshold={0.03}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group bg-white hover:bg-[#F6F1E8] transition-colors duration-300 flex flex-col items-center justify-center gap-3 py-8 px-4 cursor-pointer"
              >
              <span className="text-[#7C746A] group-hover:text-[#12372A] transition-colors duration-300">
                {ind.icon}
              </span>
              <p className="text-[#7C746A] group-hover:text-[#1C1C1C] text-[0.72rem] text-center leading-snug font-sans tracking-[0.02em] transition-colors duration-300">
                {ind.label}
              </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
