import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import BottomCTA from "../components/BottomCTA";

export const metadata = {
  title: "Web Design Services UK",
  description:
    "Bespoke web design, custom website development, e-commerce, SEO, WordPress and Shopify development for British businesses. Professional web design services tailored to your brand.",
  alternates: { canonical: "https://creaweb.co.uk/services" },
  openGraph: {
    title: "Web Design Services UK | Crea Web Agency",
    description: "Bespoke web design, development, e-commerce and SEO services for British businesses.",
    url: "https://creaweb.co.uk/services",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Bespoke Web Design",
    tagline: "Every decision deliberate. Every detail earned.",
    body: "We design digital experiences from first principles — not templates. Each project begins with a thorough understanding of your business, your audience, and your competitive context. What emerges is a visual identity that is unmistakably yours: considered, authoritative, and built to endure.",
    detail: [
      "UX research & wireframing",
      "Brand-aligned visual design",
      "Responsive across all devices",
      "Accessibility (WCAG 2.1 AA)",
      "Design systems & component libraries",
      "Interactive prototyping",
    ],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&auto=format&fit=crop&q=70",
    imageAlt: "Designer sketching a website layout",
    accent: "#12372A",
  },
  {
    number: "02",
    title: "Web Development",
    tagline: "Clean code. Lasting foundations.",
    body: "Performance is not a feature — it is the baseline. We build on modern, battle-tested frameworks: fast to load, a pleasure to maintain, and structured to grow alongside your business for years, not months. Every line of code is written with the next developer in mind.",
    detail: [
      "Next.js & React applications",
      "Headless CMS integration",
      "PHP & custom API development",
      "Core Web Vitals optimisation",
      "CI/CD deployment pipelines",
      "Ongoing technical stewardship",
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=70",
    imageAlt: "Developer writing clean code",
    accent: "#1C1C1C",
  },
  {
    number: "03",
    title: "AI & Automation",
    tagline: "Intelligence, applied with restraint.",
    body: "Artificial intelligence is most powerful when invisible — when it quietly removes friction, surfaces the right information, and frees your team from repetitive work. We integrate AI thoughtfully: only where it genuinely serves your business, never as a gimmick.",
    detail: [
      "AI-powered chat & support systems",
      "Content generation workflows",
      "Smart search & recommendations",
      "Automated lead qualification",
      "Data enrichment & analytics",
      "Custom LLM integrations",
    ],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&auto=format&fit=crop&q=70",
    imageAlt: "Abstract AI neural network visualisation",
    accent: "#12372A",
  },
  {
    number: "04",
    title: "E-Commerce",
    tagline: "Stores that feel as premium as the products within.",
    body: "Conversion is a consequence of trust — and trust is built through design. We create e-commerce experiences that do justice to your product: considered presentation, frictionless checkout, and seamless integration with fulfilment and inventory systems you already rely on.",
    detail: [
      "Shopify & WooCommerce builds",
      "Custom checkout experiences",
      "Product photography direction",
      "Payment gateway integration",
      "Inventory & order management",
      "Abandoned cart & retention flows",
    ],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=70",
    imageAlt: "Luxury product on a clean, minimal background",
    accent: "#B08D57",
  },
  {
    number: "05",
    title: "SEO & Performance",
    tagline: "Visibility earned, not bought.",
    body: "Organic search is a long game, and we play it properly. Technical excellence — fast pages, clean markup, structured data — is our foundation. Authority and genuinely useful content are how we build on it. We do not chase algorithm updates; we build the kind of site they are designed to reward.",
    detail: [
      "Technical SEO audit & remediation",
      "Core Web Vitals & page speed",
      "Structured data & schema markup",
      "Local SEO for UK businesses",
      "Content strategy & content planning",
      "Monthly performance reporting",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=70",
    imageAlt: "Analytics charts on a laptop screen",
    accent: "#7C746A",
  },
  {
    number: "06",
    title: "Ongoing Partnership",
    tagline: "A relationship that outlasts the launch.",
    body: "The best client relationships we have are not defined by individual projects — they are defined by years of consistent, considered collaboration. Our retained partnerships offer priority access, strategic quarterly reviews, and the peace of mind that your digital presence is always in capable hands.",
    detail: [
      "Monthly maintenance & updates",
      "Priority response & support",
      "Quarterly strategy reviews",
      "Performance monitoring & alerts",
      "Content updates & publishing",
      "Annual design refresh",
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=70",
    imageAlt: "Two professionals in a strategic meeting",
    accent: "#12372A",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A standard brochure website takes 6–10 weeks from kick-off to launch. Larger e-commerce builds or complex applications are typically 12–20 weeks. We always provide a detailed timeline in our proposal.",
  },
  {
    q: "Do you work with clients outside London?",
    a: "Absolutely. We work remotely with businesses across the UK and internationally. Our discovery and review process is designed to work just as well over video call as in person.",
  },
  {
    q: "Can you work with our existing CMS or platform?",
    a: "In most cases, yes. We have experience integrating with a wide range of platforms and can advise on whether to continue with your current setup or migrate to something better suited to your needs.",
  },
  {
    q: "What does ongoing partnership include?",
    a: "Retained clients receive priority support, a dedicated point of contact, monthly maintenance, quarterly strategy calls, and a fixed allocation of hours for updates and new features each month.",
  },
  {
    q: "Do you provide copywriting and photography?",
    a: "We can direct and commission both. We have a network of trusted copywriters and photographers who understand our design standards — and we can work with your existing assets when they meet the brief.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ─────────────────────────────────────────────────────────────────
            HERO
        ───────────────────────────────────────────────────────────────── */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          {/* Banner image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&auto=format&fit=crop&q=70"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12372A] via-[#12372A]/85 to-[#12372A]/50" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57] z-10" />

          <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-10 animate-fade-up">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                What We Do
              </span>
            </div>
            <div className="max-w-[700px]">
              <h1
                className="font-serif-display text-[#F6F1E8] leading-[1.06] mb-8 animate-fade-up animation-delay-200"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Services Rendered
                <br />
                <em className="text-[#B08D57]">with Intention</em>
              </h1>
              <p className="text-[#F6F1E8]/60 text-[0.9rem] leading-[1.82] font-sans font-light max-w-[52ch] animate-fade-up animation-delay-400">
                A focused range of disciplines — each practised with depth. We
                do not do everything; only what we do exceptionally well.
              </p>
            </div>

            {/* Quick-nav service pills */}
            <div className="mt-12 flex flex-wrap gap-3">
              {services.map((s) => (
                <a
                  key={s.number}
                  href={`#service-${s.number}`}
                  className="text-[0.65rem] tracking-[0.12em] uppercase font-sans text-[#F6F1E8]/55 border border-[#F6F1E8]/15 px-4 py-2 hover:border-[#B08D57] hover:text-[#B08D57] transition-colors duration-300"
                >
                  {s.number} {s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────
            SERVICES — ALTERNATING EDITORIAL LAYOUT
        ───────────────────────────────────────────────────────────────── */}
        <div className="bg-[#F6F1E8]">
          {services.map((svc, idx) => {
            const even = idx % 2 === 0;
            return (
              <section
                key={svc.number}
                id={`service-${svc.number}`}
                className={`py-24 md:py-32 border-b border-[#1C1C1C]/8 ${
                  even ? "bg-[#F6F1E8]" : "bg-white"
                }`}
              >
                <div className="max-w-[1320px] mx-auto px-6 md:px-10">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                      even ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* Image column */}
                    <div className="relative">
                      {/* Corner accents */}
                      <div
                        className={`absolute ${even ? "-top-4 -right-4" : "-top-4 -left-4"} w-14 h-14 border-t border-[#B08D57]/50 ${even ? "border-r" : "border-l"} z-10`}
                      />
                      <div
                        className={`absolute ${even ? "-bottom-4 -left-4" : "-bottom-4 -right-4"} w-14 h-14 border-b border-[#B08D57]/50 ${even ? "border-l" : "border-r"} z-10`}
                      />

                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#1C1C1C]/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={svc.image}
                          alt={svc.imageAlt}
                          className="w-full h-full object-cover"
                          loading={idx === 0 ? "eager" : "lazy"}
                        />
                        {/* Number watermark */}
                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#12372A] flex items-end justify-end p-3">
                          <span className="font-serif-display text-[#B08D57] text-[2rem] leading-none">{svc.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="flex flex-col gap-7">
                      {/* Kicker */}
                      <div className="flex items-center gap-4">
                        <span className="block w-6 h-[1px] bg-[#B08D57]" />
                        <span className="text-[#B08D57] text-[0.65rem] tracking-[0.2em] uppercase font-sans">
                          Service {svc.number}
                        </span>
                      </div>

                      {/* Title */}
                      <div>
                        <h2
                          className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-3"
                          style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)" }}
                        >
                          {svc.title}
                        </h2>
                        <p className="font-serif-display text-[#7C746A] text-[1.05rem] italic">
                          {svc.tagline}
                        </p>
                      </div>

                      <hr className="divider" />

                      {/* Body */}
                      <p className="text-[#7C746A] text-[0.96rem] leading-[1.88] font-sans font-light">
                        {svc.body}
                      </p>

                      {/* Deliverables grid */}
                      <div>
                        <p className="text-[0.6rem] tracking-[0.18em] uppercase font-sans text-[#B08D57] mb-4">
                          What&rsquo;s included
                        </p>
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                          {svc.detail.map((d) => (
                            <li key={d} className="flex items-start gap-2.5">
                              <span className="block w-3 h-[1px] bg-[#B08D57] mt-[0.6em] shrink-0" />
                              <span className="text-[0.8rem] font-sans text-[#1C1C1C]/75 leading-snug">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="pt-2">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-7 py-3.5 hover:bg-[#B08D57] transition-colors duration-300"
                        >
                          Enquire About This Service
                          <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                            <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            PRICING APPROACH
        ───────────────────────────────────────────────────────────────── */}
        <section className="bg-[#12372A] py-24 md:py-32 relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&auto=format&fit=crop&q=60"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#12372A]/70" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-8">
                  <span className="block w-6 h-[1px] bg-[#B08D57]" />
                  <span className="text-[#B08D57] text-[0.65rem] tracking-[0.22em] uppercase font-sans">Pricing</span>
                </div>
                <h2
                  className="font-serif-display text-[#F6F1E8] leading-[1.1] mb-6"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  Transparent Pricing.<br />
                  <em className="text-[#B08D57]">No Surprises.</em>
                </h2>
                <p className="text-[#F6F1E8]/60 text-[0.95rem] leading-[1.82] font-sans font-light">
                  We provide fixed-price proposals for project work and clear
                  monthly retainers for ongoing partnerships. You will always
                  know exactly what you are paying for — and why.
                </p>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-3 gap-px bg-[#F6F1E8]/10">
                {[
                  {
                    label: "Project Work",
                    price: "From £2,500",
                    desc: "Fixed-price proposals. Scope defined upfront. No scope creep.",
                  },
                  {
                    label: "Retained Partner",
                    price: "From £500/mo",
                    desc: "Monthly retainer. Priority support. Ongoing strategy included.",
                  },
                  {
                    label: "Day Rate",
                    price: "£850/day",
                    desc: "Consultancy, audits, and specialist engagements on a day-rate basis.",
                  },
                ].map((p) => (
                  <div key={p.label} className="bg-[#12372A] border border-[#F6F1E8]/10 p-8 flex flex-col gap-4">
                    <p className="text-[0.6rem] tracking-[0.18em] uppercase font-sans text-[#B08D57]">{p.label}</p>
                    <p className="font-serif-display text-[#F6F1E8] text-[1.5rem] leading-tight">{p.price}</p>
                    <p className="text-[#F6F1E8]/45 text-[0.78rem] font-sans leading-[1.7]">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────
            FAQ
        ───────────────────────────────────────────────────────────────── */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="block w-6 h-[1px] bg-[#B08D57]" />
                    <span className="text-[#B08D57] text-[0.65rem] tracking-[0.22em] uppercase font-sans">Questions</span>
                  </div>
                  <h2
                    className="font-serif-display text-[#1C1C1C] leading-[1.12] mb-6"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                  >
                    Frequently Asked
                  </h2>
                  <p className="text-[#7C746A] text-[0.9rem] leading-[1.82] font-sans font-light mb-10">
                    If your question is not answered here, please do not hesitate to get in touch — we are always happy to talk.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-7 py-3.5 hover:bg-[#B08D57] transition-colors duration-300"
                  >
                    Ask a Question →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-t border-[#1C1C1C]/10 py-8">
                    <p className="flex items-start gap-5 mb-4">
                      <span className="font-serif-display text-[#B08D57]/50 text-[1.1rem] leading-none shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-serif-display text-[#1C1C1C] leading-snug"
                        style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)" }}
                      >
                        {faq.q}
                      </span>
                    </p>
                    <p className="pl-10 text-[#7C746A] text-[0.9rem] leading-[1.82] font-sans font-light">
                      {faq.a}
                    </p>
                  </div>
                ))}
                <div className="border-t border-[#1C1C1C]/10" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────────────────────────── */}
        <BottomCTA />

      </main>
      <Footer />
    </>
  );
}
