import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import BottomCTA from "../components/BottomCTA";
import Reveal from "../components/Reveal";

export const metadata = {
  title: {
    absolute: "About Crea Web | UK Web Design Agency & Digital Studio",
  },
  description:
    "Learn about Crea Web, a UK web design agency creating bespoke, SEO-friendly websites for ambitious businesses. Discover our mission, values, and design philosophy.",
  alternates: { canonical: "https://creaweb.co.uk/about" },
  openGraph: {
    title: "About Crea Web Agency | Web Design Agency UK",
    description: "A British web design agency built on craft, clarity, and honest partnership.",
    url: "https://creaweb.co.uk/about",
    type: "website",
  },
};

const values = [
  {
    label: "Craft",
    body:
      "Exceptional website design is found in the details. Every layout, interaction, line of code, and piece of content is created with care and intention. We believe quality comes from thoughtful craftsmanship, ensuring every website feels refined, intuitive, and built to last.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    label: "Clarity",
    body:
      "The best websites communicate with confidence, not complexity. We remove unnecessary distractions to create clean, user-focused experiences that make information easy to find, strengthen your brand, and build trust from the very first interaction.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    label: "Longevity",
    body:
      "Great websites should continue delivering value long after launch. Rather than chasing design trends, we focus on timeless aesthetics, scalable development, and future-ready solutions that support your business as it grows.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    label: "Honesty",
    body:
      "Trust is the foundation of every successful partnership. We provide straightforward advice, realistic expectations, and transparent communication throughout every stage of your project. If something can be improved, we'll explain why and recommend the best path forward.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    label: "Ambition",
    body:
      "We believe every business deserves a website that stands out for the right reasons. From strategy to launch, we continually challenge ourselves to deliver work that exceeds expectations and creates measurable value for our clients.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    label: "Partnership",
    body:
      "Building a website is only the beginning. As your trusted web design agency, we work alongside you as a long-term digital partner—offering ongoing support, guidance, and continuous improvements to help your business succeed online today and into the future.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57] z-10" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-4 mb-10 animate-fade-up">
                  <span className="block w-8 h-[1px] bg-[#B08D57]" />
                  <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                    Our Story
                  </span>
                </div>
                <h1
                  className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-8 animate-fade-up animation-delay-200"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                >
                  About <em className="text-[#B08D57]">Crea Web</em>
                </h1>
                <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed max-w-[52ch] font-sans font-light animate-fade-up animation-delay-400">
                  At <strong className="font-normal">Crea Web</strong>, we believe exceptional websites begin with thoughtful strategy, purposeful design, and lasting partnerships. As a leading <strong className="font-normal">UK web design agency</strong>, we create bespoke, high-performing websites that help businesses establish credibility, attract customers, and grow with confidence.
                </p>
              </div>

              {/* Right image */}
              <div className="hidden md:block relative">
                {/* Gold corner accents */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-[#B08D57]/60 z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-[#B08D57]/60 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/crea-web-hero-about-us.webp"
                  alt="UK Web Design Agency"
                  className="w-full h-full object-cover rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Story ─────────────────────────────────────────────────────── */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-6 mb-16">
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                About Us
              </span>
              <hr className="flex-1 divider" />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                  Every business has a story worth telling, and every website should reflect it with clarity, purpose, and precision. At <strong className="font-normal">Crea Web</strong>, we specialise in <strong className="font-normal">website design services</strong> that combine elegant design, modern development, and SEO best practices to create digital experiences that are as functional as they are beautiful. We don't believe in generic templates or short-lived trends—we build bespoke websites that are tailored to your business, your audience, and your long-term goals.
                </p>
                <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                  Our work is driven by strategy rather than assumptions. Before a single page is designed, we take the time to understand your business, industry, and customers, ensuring every decision supports measurable growth. Whether we're creating a corporate website, an e-commerce platform, or a complete website redesign, every project is developed with performance, accessibility, responsiveness, and search visibility at its core. The result is a website that not only looks exceptional but also works harder for your business every day.
                </p>
                <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                  As a trusted <strong className="font-normal">UK web design agency</strong>, we see every project as the beginning of a long-term partnership rather than a one-time transaction. We continue to support our clients long after launch through maintenance, improvements, and strategic advice that helps their digital presence evolve alongside their business. At Crea Web, our goal isn't simply to build websites—it's to create lasting digital assets that inspire confidence, strengthen brands, and deliver meaningful results.
                </p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-[#B08D57]/60 z-10" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-[#B08D57]/60 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/crea-web-about-about.png"
                    alt="UK Web Design Agency"
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </section>

        {/* ── Studio Photography ────────────────────────────────────────────── */}
        <section className="bg-[#1C1C1C] py-24 md:py-32">
          <Reveal>
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-6 mb-16">
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Chapter II
              </span>
              <hr className="flex-1 border-t border-[#F6F1E8]/10" />
              <span className="text-[#F6F1E8]/40 text-[0.68rem] tracking-[0.14em] font-sans">
                The Studio
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F6F1E8]/10">
              {/* Large image — spans 2 cols on lg */}
              <div className="lg:col-span-2 relative aspect-[16/9] bg-[#12372A]/30 overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#F6F1E8]/20">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="text-[0.72rem] tracking-[0.1em] uppercase font-sans">Studio Photography</span>
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1C1C]/80 to-transparent p-8">
                  <p className="text-[#F6F1E8]/70 text-[0.78rem] font-sans italic">
                    Our workspace, London
                  </p>
                </div>
              </div>

              {/* Tall image — 1 col */}
              <div className="relative aspect-[3/4] md:aspect-auto bg-[#12372A]/20 overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#F6F1E8]/20">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="text-[0.65rem] tracking-[0.1em] uppercase font-sans">Process</span>
                </div>
              </div>

              {/* Two smaller images */}
              {["The Brief", "At Work"].map((label) => (
                <div key={label} className="relative aspect-[4/3] bg-[#12372A]/15 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#F6F1E8]/20">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span className="text-[0.65rem] tracking-[0.1em] uppercase font-sans">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </section>

        {/* ── Values ────────────────────────────────────────────────────────── */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-6 mb-16">
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Chapter III
              </span>
              <hr className="flex-1 divider" />
              <span className="text-[#7C746A] text-[0.68rem] tracking-[0.14em] font-sans">
                Design Philosophy
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start mb-20">
              <div className="lg:col-span-5">
                <h2
                  className="font-serif-display text-[#1C1C1C] leading-[1.12]"
                  style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)" }}
                >
                  A Design Philosophy
                  <br />
                  <em className="text-[#12372A]">Built on Purpose</em>
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                  Our mission is simple: to create bespoke websites that help businesses succeed online through thoughtful design, modern development, and measurable results. Every decision we make is guided by a set of principles that shape the way we approach <strong className="font-normal">web design</strong>, collaborate with our clients, and deliver exceptional digital experiences. These aren't marketing slogans—they're the standards we hold ourselves to on every project.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10 border border-[#1C1C1C]/10">
              {values.map((v) => (
                <div key={v.label} className="bg-[#F6F1E8] p-8 md:p-10 flex flex-col gap-5">
                  <div className="w-10 h-10 flex items-center justify-center text-[#12372A]">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-serif-display text-[#12372A] text-[1.3rem] mb-3 italic">
                      {v.label}
                    </p>
                    <p className="text-[#7C746A] text-[0.88rem] leading-[1.78] font-sans">
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </section>

        <BottomCTA />

      </main>
      <Footer />
    </>
  );
}
