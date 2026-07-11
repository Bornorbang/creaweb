import Reveal from "./Reveal";

export default function EditorialIntro() {
  return (
    <section className="bg-[#F6F1E8] py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Top rule with issue label */}
        <div className="flex items-center gap-6 mb-16">
          <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
            About the Studio
          </span>
          <hr className="flex-1 divider" />
          <span className="text-[#7C746A] text-[0.68rem] tracking-[0.14em] font-sans">
            Vol. 01
          </span>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image column */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32" direction="left">
            <div className="relative overflow-hidden aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-crea-web.png"
                alt="Website design services in UK"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12372A]/40 via-transparent to-transparent" />
            </div>
          </Reveal>

          {/* Body copy column */}
          <Reveal className="lg:col-span-7 flex flex-col gap-6" direction="right">
            <p className="text-[#1C1C1C] text-[1.05rem] leading-[1.82] font-sans font-light">
              At <strong>Crea Web</strong>, we believe every business deserves a website that does more than simply look good—it should inspire confidence, communicate your brand's story, and generate real business results. As a <strong>UK web design agency</strong>, we specialise in creating bespoke websites that combine timeless design with modern technology, delivering digital experiences that are both visually striking and strategically effective.
            </p>
            <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
              Our team works closely with startups, small businesses, and established organisations to understand their goals before a single design is created. Every website is thoughtfully planned, fully responsive, SEO-optimised, and built for performance using modern development practices. From corporate websites and e-commerce stores to complete website redesigns, we focus on creating solutions that help businesses attract customers, build credibility, and grow online.
            </p>
            <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
              At Crea Web, we're committed to long-term partnerships rather than one-off projects. We provide ongoing support, maintenance, and continuous improvements to ensure your website evolves alongside your business. By combining creative thinking, technical expertise, and a results-driven approach, we help businesses across the UK establish a strong digital presence and achieve lasting success online.
            </p>

            {/* CTA to About page */}
            <div className="pt-2">
              <a
                href="/about"
                className="inline-flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#12372A] border border-[#12372A]/30 px-6 py-3 hover:bg-[#12372A] hover:text-[#F6F1E8] transition-colors duration-300 font-sans"
              >
                More About Us
                <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
