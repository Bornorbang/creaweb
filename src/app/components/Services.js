import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "Professional Web Design",
    body: "Considered visual identities translated faithfully into digital form. We design for your audience, your context, and your ambitions — never from a template.",
    tags: ["UI Design", "Visual Identity", "Responsive"],
  },
  {
    number: "02",
    title: "Web Development",
    body: "Clean, performant code built on modern frameworks. Fast load times, accessibility standards met, and a codebase you can grow into for years.",
    tags: ["Next.js", "PHP", "CMS Integration"],
  },
  {
    number: "03",
    title: "AI & Automation",
    body: "Websites supercharged with artificial intelligence — from AI-powered chat and automated workflows to smart personalisation and data-driven systems that work for your business around the clock.",
    tags: ["AI Integration", "Workflow Automation", "Smart Tools"],
  },
  {
    number: "04",
    title: "E-Commerce",
    body: "Conversion-focused stores that feel as premium as the products within them. Seamlessly integrated with payment, fulfilment, and inventory systems.",
    tags: ["Shopify", "WooCommerce", "Custom Checkout"],
  },
  {
    number: "05",
    title: "SEO & Performance",
    body: "Organic visibility built through technical excellence and genuine authority. We don’t chase algorithms — we build the kind of site they reward.",
    tags: ["Core Web Vitals", "On-page SEO", "Analytics"],
  },
  {
    number: "06",
    title: "Ongoing Partnership",
    body: "A retained relationship for businesses who value consistent, considered stewardship of their digital presence — from updates to strategic reviews.",
    tags: ["Maintenance", "Strategy", "Priority Support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#1C1C1C] py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
              What We Do
            </span>
            <hr className="flex-1 border-t border-[#F6F1E8]/10" />
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-end mb-16">
            <h2
              className="font-serif-display text-[#F6F1E8] leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
            >
              Web Design Services
              <br />
              <em className="text-[#B08D57]">in the UK</em>
            </h2>
            <p className="text-[#F6F1E8]/50 text-[0.95rem] leading-relaxed font-sans font-light lg:max-w-[42ch]">
              As a bespoke web design agency and web development agency UK businesses trust, we offer a focused range of website design services for UK businesses. Each discipline practised with depth — never spread thin.
            </p>
          </div>
        </Reveal>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F6F1E8]/8">
          {services.map((svc, i) => (
            <Reveal key={svc.number} delay={i * 80} className="h-full">
              <div
                className="group bg-[#1C1C1C] p-8 md:p-10 flex flex-col gap-5 hover:bg-[#12372A] transition-colors duration-400 cursor-default h-full"
              >
              {/* Number */}
              <span className="font-serif-display text-[#B08D57]/50 text-[2.2rem] leading-none group-hover:text-[#B08D57] transition-colors duration-300">
                {svc.number}
              </span>

              {/* Rule */}
              <hr className="border-t border-[#F6F1E8]/10 group-hover:border-[#B08D57]/30 transition-colors duration-300" />

              {/* Title */}
              <h3 className="font-serif-display text-[#F6F1E8] text-[1.35rem] leading-tight">
                {svc.title}
              </h3>

              {/* Body */}
              <p className="text-[#F6F1E8]/50 text-[0.88rem] leading-[1.75] font-sans font-light flex-1 group-hover:text-[#F6F1E8]/70 transition-colors duration-300">
                {svc.body}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.62rem] tracking-[0.12em] uppercase font-sans text-[#7C746A] border border-[#7C746A]/30 px-2.5 py-1 group-hover:text-[#B08D57]/70 group-hover:border-[#B08D57]/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
