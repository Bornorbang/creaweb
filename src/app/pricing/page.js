import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import BottomCTA from "../components/BottomCTA";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Website Design Pricing UK | Web Design Packages",
  description:
    "Explore Crea Web's Website Design Pricing UK with flexible web design packages for businesses. Bespoke websites, transparent pricing, and no hidden fees.",
  alternates: { canonical: "https://creaweb.co.uk/pricing" },
  openGraph: {
    title: "Web Design Pricing UK | Crea Web Agency",
    description: "Transparent pricing for bespoke web design in the UK. No hidden fees — from £5,000.",
    url: "https://creaweb.co.uk/pricing",
    type: "website",
  },
};

const plans = [
  {
    name: "Foundation",
    tagline: "For businesses ready to establish a credible online presence.",
    price: "From £2,500",
    period: "one-off project",
    accent: "#7C746A",
    features: [
      "Up to 6 bespoke pages",
      "Mobile-first responsive design",
      "CMS integration (blog / news)",
      "Contact form & basic SEO",
      "Performance optimisation",
      "30-day post-launch support",
    ],
    cta: "Start a Conversation",
    featured: false,
  },
  {
    name: "Commerce",
    tagline: "For product businesses that need conversion built into every detail.",
    price: "From £7,500",
    period: "one-off project",
    accent: "#B08D57",
    features: [
      "Shopify or WooCommerce build",
      "Custom checkout experience",
      "Product photography direction",
      "Payment gateway integration",
      "Inventory & order management",
      "Abandoned cart & retention flows",
      "SEO-optimised product pages",
      "45-day post-launch support",
    ],
    cta: "Start a Conversation",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "For brands that demand craft, depth, and lasting impact.",
    price: "From £15,000",
    period: "one-off project",
    accent: "#12372A",
    features: [
      "Unlimited pages & sections",
      "Custom design system & brand tokens",
      "Headless CMS or bespoke admin",
      "Advanced animations & interactions",
      "Full technical SEO & structured data",
      "Core Web Vitals optimisation",
      "60-day post-launch support",
      "Analytics & conversion setup",
    ],
    cta: "Start a Conversation",
    featured: false,
  },
];

const retainer = [
  {
    name: "Essentials",
    price: "£500 / mo",
    features: ["Security & plugin updates", "Monthly content changes (up to 2h)", "Uptime monitoring", "Monthly performance report"],
  },
  {
    name: "Growth",
    price: "£1,000 / mo",
    features: ["Everything in Essentials", "Up to 6h development work", "SEO monitoring & reporting", "CRO recommendations", "Priority response (same-day)"],
  },
  {
    name: "Partner",
    price: "£2,000 / mo",
    features: ["Everything in Growth", "Unlimited small-scope tasks", "Quarterly strategy review", "Dedicated project manager", "A/B testing & experimentation"],
  },
];

const faqs = [
  {
    q: "Are these prices fixed or indicative?",
    a: "The prices shown are starting points. Every project is scoped individually — final investment depends on complexity, number of integrations, content volume, and timeline. We'll provide a detailed, itemised proposal before any commitment is made.",
  },
  {
    q: "What's included in the post-launch support period?",
    a: "Bug fixes, browser compatibility issues, and minor content adjustments within the agreed scope. It doesn't cover new features or major changes — those are handled through a retainer or separate project.",
  },
  {
    q: "Do you offer payment in instalments?",
    a: "Yes. Most projects are structured as a 40% deposit at brief sign-off, 40% at design approval, and 20% on launch. Larger projects may have additional milestones. We discuss payment schedules openly before work begins.",
  },
  {
    q: "Can I upgrade my retainer plan later?",
    a: "Absolutely. You can move between retainer tiers with one month's notice. Many clients start on Essentials and upgrade as their digital ambitions grow.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1800&auto=format&fit=crop&q=70"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12372A] via-[#12372A]/85 to-[#12372A]/50" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57] z-10" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-10 animate-fade-up">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Investment
              </span>
            </div>
            <div className="max-w-[700px]">
              <h1
                className="font-serif-display text-[#F6F1E8] leading-[1.06] mb-8 animate-fade-up animation-delay-200"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Transparent Website Design
                <br />
                <em className="text-[#B08D57]">Pricing for UK Businesses</em>
              </h1>
              <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light animate-fade-up animation-delay-400">
                Whether you're launching a new business, redesigning an existing website, or building an online store, <strong className="font-normal">Crea Web</strong> offers flexible <strong className="font-normal">website design pricing</strong> tailored to your goals. Explore our website design packages and discover what's included, with bespoke solutions designed to deliver long-term value, performance, and measurable results for businesses across the UK.
              </p>
              <p className="text-[#B08D57] text-[0.85rem] font-sans leading-relaxed font-light mt-6 animate-fade-up animation-delay-600">
                No hidden fees. Bespoke pricing. Trusted by businesses across the UK.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-800 mt-10">
                <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#B08D57] px-8 py-4 hover:bg-[#F6F1E8] transition-colors duration-300">
                  Request a Quote
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="#pricing-plans" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] border border-[#F6F1E8] px-8 py-4 hover:bg-[#F6F1E8]/10 transition-colors duration-300">
                  Compare Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Project Plans ────────────────────────────────────────────── */}
        <section className="bg-[#F6F1E8] py-24 md:py-32" id="pricing-plans">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Project Work
              </span>
            </div>
            <h2
              className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              One-Off Projects
            </h2>
            <p className="text-[#7C746A] text-[0.9rem] font-sans leading-[1.82] mb-16 max-w-[56ch]">
              Scoped, delivered, and priced transparently. Choose the level that
              matches your ambition.
            </p>

            <div className="grid md:grid-cols-3 gap-px bg-[#1C1C1C]/10">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col p-10 ${
                    plan.featured ? "bg-[#12372A]" : "bg-[#F6F1E8]"
                  }`}
                >
                  {plan.featured && (
                    <span className="inline-block text-[0.6rem] tracking-[0.2em] uppercase font-sans text-[#B08D57] border border-[#B08D57]/40 px-3 py-1 mb-6 self-start">
                      Most Popular
                    </span>
                  )}
                  <p
                    className={`font-serif-display text-[1.5rem] mb-2 ${
                      plan.featured ? "text-[#F6F1E8]" : "text-[#1C1C1C]"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p
                    className={`text-[0.82rem] font-sans leading-[1.7] mb-8 ${
                      plan.featured ? "text-[#F6F1E8]/60" : "text-[#7C746A]"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                  <div className="mb-8">
                    <p
                      className={`font-serif-display text-[2.4rem] leading-none ${
                        plan.featured ? "text-[#F6F1E8]" : "text-[#1C1C1C]"
                      }`}
                    >
                      {plan.price}
                    </p>
                    <p
                      className={`text-[0.72rem] tracking-[0.1em] uppercase font-sans mt-1 ${
                        plan.featured ? "text-[#F6F1E8]/40" : "text-[#7C746A]"
                      }`}
                    >
                      {plan.period}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          className="mt-1 shrink-0"
                          aria-hidden="true"
                        >
                          <path
                            d="M1 5L5 9L13 1"
                            stroke={plan.featured ? "#B08D57" : "#12372A"}
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          className={`text-[0.82rem] font-sans ${
                            plan.featured ? "text-[#F6F1E8]/80" : "text-[#7C746A]"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans py-4 px-7 transition-colors duration-300 ${
                      plan.featured
                        ? "bg-[#F6F1E8] text-[#12372A] hover:bg-[#B08D57] hover:text-[#F6F1E8]"
                        : "bg-[#12372A] text-[#F6F1E8] hover:bg-[#B08D57]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Retainer Plans ───────────────────────────────────────────── */}
        <section className="bg-[#1C1C1C] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Ongoing Partnership
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <h2
                className="font-serif-display text-[#F6F1E8] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Monthly Retainers
              </h2>
              <p className="text-[#F6F1E8]/45 text-[0.88rem] font-sans leading-[1.82] max-w-[42ch]">
                For businesses that want a trusted digital partner on hand every
                month — not just at launch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-[#F6F1E8]/8">
              {retainer.map((r) => (
                <div key={r.name} className="bg-[#1C1C1C] border border-[#F6F1E8]/8 p-10 flex flex-col gap-6">
                  <p className="font-serif-display text-[#F6F1E8] text-[1.4rem]">{r.name}</p>
                  <p className="font-serif-display text-[#B08D57] text-[2rem] leading-none">{r.price}</p>
                  <ul className="flex flex-col gap-3 flex-1">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="mt-1 shrink-0" aria-hidden="true">
                          <path d="M1 5L5 9L13 1" stroke="#B08D57" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#F6F1E8]/60 text-[0.82rem] font-sans">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 text-[0.72rem] tracking-[0.14em] uppercase font-sans font-medium text-[#12372A] bg-[#F6F1E8] py-3.5 px-6 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300"
                  >
                    Enquire
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing FAQs ─────────────────────────────────────────────── */}
        <section className="bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/8">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Pricing FAQs
              </span>
            </div>
            <h2
              className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Common Questions
            </h2>

            <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <p
                    className="font-serif-display text-[#1C1C1C] mb-4"
                    style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
                  >
                    {faq.q}
                  </p>
                  <p className="text-[#7C746A] text-[0.88rem] leading-[1.82] font-sans font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <BottomCTA />

      </main>
      <Footer />
    </>
  );
}
