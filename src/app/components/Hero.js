import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-[#12372A] overflow-hidden flex flex-col">
      {/* Subtle background texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, #F6F1E8 60px, #F6F1E8 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #F6F1E8 60px, #F6F1E8 61px)",
        }}
      />

      {/* Gold rule — top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />

      {/* Main hero content */}
      <div className="flex-1 max-w-[1320px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-[65%_35%] gap-12 lg:gap-0 items-center pt-32 pb-20 lg:pt-28 lg:pb-16">
        {/* Left — Typography column */}
        <div className="flex flex-col justify-center lg:pr-16">
          {/* Editorial kicker */}
          <div className="flex items-center gap-4 mb-10 animate-fade-up">
            <span className="block w-10 h-[1px] bg-[#B08D57]" />
            <span className="text-[#B08D57] text-[0.7rem] font-medium tracking-[0.22em] uppercase font-sans">
              UK Web Design Studio
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif-display text-[#F6F1E8] leading-[1.08] tracking-[-0.01em] mb-8 animate-fade-up animation-delay-200"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
          >
            Professional Web Design
            <br />
            <em className="text-[#B08D57] not-italic">Agency UK</em>
          </h1>

          {/* Subheadline */}
          <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed max-w-[54ch] mb-10 font-sans font-light animate-fade-up animation-delay-400">
            Crea Web is a UK web design agency creating professional,
            SEO-friendly websites for businesses. Fast, responsive websites
            designed to generate more leads. Get a free quote today.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-600">
            <Link
              href="#work"
              className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300"
            >
              View Our Work
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-[#F6F1E8] border border-[#F6F1E8]/30 px-8 py-4 hover:border-[#B08D57] hover:text-[#B08D57] transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* Right — Visual column */}
        <div className="relative hidden lg:flex flex-col h-full items-end justify-center">
          {/* Large editorial image frame */}
          <div className="relative w-full max-w-[560px]">
            {/* Gold corner accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#B08D57]/60" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#B08D57]/60" />

            {/* Hero image */}
            <div className="relative aspect-[4/3] shadow-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/crea-web-hero.webp"
                alt="Website design services in UK"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating secondary card — British architectural motif */}
            <div className="absolute -bottom-10 -left-12 w-52 bg-[#12372A] border border-[#B08D57]/30 p-5 shadow-xl">
              <p className="text-[#B08D57] text-[0.6rem] tracking-[0.18em] uppercase mb-2 font-sans">
                Latest Project
              </p>
              <p className="text-[#F6F1E8] font-serif-display text-[1.05rem] leading-tight mb-3">
                Mayfair Interior Studio
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#B08D57]/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B08D57]" />
                </div>
                <span className="text-[#F6F1E8]/60 text-[0.65rem] font-sans">Live — 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom editorial rule */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 w-full pb-8 hidden lg:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="block w-16 h-[1px] bg-[#F6F1E8]/15" />
          <span className="text-[#F6F1E8]/30 text-[0.65rem] tracking-widest font-sans">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
