import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomCTA from "../components/BottomCTA";
import Link from "next/link";

export const metadata = {
  title: "Website Development UK",
  description:
    "Expert website development services in the UK. Crea Web builds fast, secure, and scalable websites using Next.js, PHP, WordPress, and Shopify for British businesses.",
  alternates: { canonical: "https://creaweb.co.uk/website-development" },
  openGraph: {
    title: "Website Development UK | Crea Web Agency",
    description: "Fast, secure, and scalable website development for British businesses.",
    url: "https://creaweb.co.uk/website-development",
    type: "website",
  },
};

const stack = [
  { name: "Next.js", desc: "For performant, SEO-optimised web applications." },
  { name: "WordPress", desc: "Flexible CMS for content-driven websites." },
  { name: "Shopify", desc: "Purpose-built e-commerce development." },
  { name: "PHP / Laravel", desc: "Robust back-end for complex requirements." },
  { name: "Tailwind CSS", desc: "Precision styling with no bloat." },
  { name: "Headless CMS", desc: "Sanity and Contentful for modern editorial workflows." },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">Development</span>
            </div>
            <div className="max-w-[680px]">
              <h1
                className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Website Development
                <br />
                <em className="text-[#B08D57]">in the UK</em>
              </h1>
              <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                Clean, performant code built on modern frameworks. Fast load
                times, full accessibility compliance, and a codebase you can
                grow into for years.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300">
                Discuss Your Project
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
              Technologies We
              <br />
              <em className="text-[#12372A]">Build With</em>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10">
              {stack.map((s) => (
                <div key={s.name} className="bg-[#F6F1E8] p-8 flex flex-col gap-3">
                  <h3 className="font-serif-display text-[#1C1C1C] text-[1.2rem]">{s.name}</h3>
                  <p className="text-[#7C746A] text-[0.88rem] leading-[1.75] font-sans font-light">{s.desc}</p>
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
