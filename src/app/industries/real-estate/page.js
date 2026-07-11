import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Real Estate Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke real estate websites for UK estate agents, property developers, and letting agencies. SEO-friendly, responsive, and built to generate more property enquiries.",
  alternates: { canonical: "https://creaweb.co.uk/industries/real-estate" },
  openGraph: {
    title: "Real Estate Web Design UK | Crea Web",
    description: "Crea Web designs bespoke real estate websites for UK estate agents, property developers, and letting agencies. SEO-friendly, responsive, and built to generate more property enquiries.",
    url: "https://creaweb.co.uk/industries/real-estate",
    type: "website",
  },
};

export default function RealEstateWebDesignPage() {
  const faqs = [
    {
      q: "How much does a real estate website cost?",
      a: "Every project is tailored to your business requirements. Pricing depends on the number of listings, integrations, and features required.",
    },
    {
      q: "Can you integrate our property management software?",
      a: "Yes. We can integrate with many popular CRM and property management systems or develop custom integrations where needed.",
    },
    {
      q: "Will our website support property searches?",
      a: "Absolutely. We can build advanced search functionality with filters for location, price, bedrooms, property type, and more.",
    },
    {
      q: "Can buyers enquire directly from property listings?",
      a: "Yes. Every listing can include enquiry forms, valuation requests, and contact options.",
    },
    {
      q: "Are your websites mobile-friendly?",
      a: "Yes. Every real estate website is fully responsive and optimised for mobile browsing.",
    },
    {
      q: "Can you redesign our current estate agency website?",
      a: "Yes. We redesign outdated property websites while improving speed, SEO, user experience, and lead generation.",
    },
    {
      q: "Do you provide SEO services?",
      a: "Yes. Every website includes technical SEO foundations, with optional ongoing SEO campaigns available.",
    },
    {
      q: "Do you offer website maintenance?",
      a: "Yes. We provide ongoing maintenance, updates, security monitoring, and technical support.",
    },
  ];

  const reasons = [
    {
      title: "Showcase Every Property Beautifully",
      description: "We design elegant property listing pages with high-quality imagery, clear layouts, and intuitive navigation that encourage users to explore further.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      ),
    },
    {
      title: "Generate More Property Enquiries",
      description: "Every website is strategically designed with enquiry forms, valuation requests, and clear calls-to-action that convert visitors into potential clients.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      ),
    },
    {
      title: "Local SEO That Attracts Buyers",
      description: "Our websites are optimised for local property searches, including Estate Agent London, Houses for Sale Manchester, Property Developers Birmingham, and Letting Agents Leeds.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6l4 2"/></svg>
      ),
    },
    {
      title: "Built for Mobile Property Searches",
      description: "Most buyers search for properties on mobile devices. Every website delivers a seamless experience across smartphones, tablets, and desktops.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>
      ),
    },
    {
      title: "Tailored Around Your Brand",
      description: "No templates. Every real estate website is designed specifically around your agency, branding, property portfolio, and target market.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      ),
    },
    {
      title: "Advanced Lead Management & Analytics",
      description: "Track enquiries, manage leads, and gain insights into visitor behaviour with integrated analytics and CRM tools that help you convert browsers into buyers.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          
          {/* Top right decorative element */}
          <div className="absolute top-12 right-0 w-40 h-40 border border-[#B08D57]/20 rounded-full" />
          <div className="absolute top-20 right-8 w-32 h-32 border border-[#B08D57]/10 rounded-full" />
          
          {/* Bottom left decorative element */}
          <div className="absolute bottom-0 left-0 w-48 h-48 border border-[#B08D57]/20 rounded-full" />
          <div className="absolute bottom-8 left-12 w-32 h-32 border border-[#B08D57]/10 rounded-full" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="block w-8 h-[1px] bg-[#B08D57]" />
                  <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                    Real Estate
                  </span>
                </div>
                <h1
                  className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                >
                  Real Estate Web Design That Helps You <em className="text-[#B08D57]">Sell More Property</em>
                </h1>
                <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                  Whether you're an independent estate agent, a national property company, or a luxury property developer, your website should showcase every listing beautifully while generating qualified enquiries. At <strong className="font-normal">Crea Web</strong>, we specialise in <strong className="font-normal">Real Estate Web Design</strong>, creating high-performing websites that combine elegant design, intuitive property search, and SEO-driven development to help your business attract buyers, sellers, landlords, and tenants across the UK.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300"
                >
                  Start Your Project
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Right image */}
              <div className="relative h-[400px] md:h-[500px]">
                <img
                  src="/images/industries/real-estate-hero.jpg"
                  alt="Real Estate Web Design UK"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left image */}
              <div className="relative">
                <div className="absolute inset-0 border-2 border-[#B08D57]" style={{ top: "20px", left: "20px" }} />
                <img
                  src="/images/industries/real-estate-about.jpg"
                  alt="Real Estate Web Design UK"
                  className="relative w-full rounded-lg"
                />
              </div>

              {/* Right content */}
              <div className="space-y-6">
                <Reveal>
                  <h2
                    className="font-serif-display text-[#12372A] leading-[1.1]"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                  >
                    Websites Designed to Showcase Properties & <em className="text-[#B08D57]">Generate Enquiries</em>
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-light font-sans">
                    Property decisions begin online. Before arranging a viewing or contacting an agent, buyers and tenants expect an informative, visually engaging, and easy-to-use website. At <strong className="font-normal">Crea Web</strong>, we create bespoke real estate websites that highlight your properties, strengthen your brand, and provide a seamless experience from the first click to the final enquiry.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-light font-sans">
                    Every estate agency operates differently, which is why every website we build is tailored around your business. Whether you specialise in residential sales, lettings, commercial property, luxury developments, or investment opportunities, we design websites that make it simple for visitors to browse listings, explore property details, and contact your team. Every page is built with responsive design, SEO best practices, and performance optimisation to maximise visibility and conversions.
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-light font-sans">
                    As a trusted <strong className="font-normal">UK web design agency</strong>, we understand that speed, presentation, and user experience directly influence enquiry rates. Our websites combine striking visuals with intuitive navigation, ensuring your listings receive the attention they deserve while making it easy for prospective buyers and tenants to take the next step.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Why Estate Agents Choose Crea Web */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] text-center leading-[1.1] mb-16"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Why Estate Agents <em className="text-[#B08D57]">Choose Crea Web</em>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10 border border-[#1C1C1C]/10">
              {reasons.map((reason, i) => (
                <div key={i} className="bg-[#F6F1E8] p-8 flex flex-col gap-5">
                  <div className="w-10 h-10 text-[#12372A]">{reason.icon}</div>
                  <div>
                    <h3 className="text-[#12372A] font-serif-display text-[1.1rem] leading-tight mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-[#1C1C1C] text-[0.9rem] leading-relaxed font-sans font-light">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] text-center leading-[1.1] mb-16"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Features <em className="text-[#B08D57]">Included</em>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Advanced property search",
                "Property listing management",
                "Interactive property galleries",
                "Video property tours",
                "Virtual viewing integration",
                "Property enquiry forms",
                "Mortgage calculator integration",
                "Google Maps integration",
                "Agent profile pages",
                "Valuation request forms",
                "Saved favourites",
                "Property comparison tools",
                "Multi-office support",
                "Blog and property news",
                "GDPR-compliant forms",
              ].map((feature, i) => (
                <Reveal key={i} delay={i * 0.02}>
                  <div className="flex items-start gap-3 p-4">
                    <svg className="w-5 h-5 text-[#12372A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#1C1C1C] text-[0.95rem] font-sans">{feature}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] text-center leading-[1.1] mb-16"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Who We <em className="text-[#B08D57]">Work With</em>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Estate Agents",
                "Letting Agencies",
                "Property Developers",
                "Luxury Property Consultants",
                "Commercial Property Firms",
                "Property Investment Companies",
                "New Build Developers",
                "Student Accommodation Providers",
                "Holiday Let Businesses",
                "Property Management Companies",
                "Build-to-Rent Operators",
                "Housing Associations",
                "Property Auctioneers",
                "Short-Term Rental Platforms",
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.02}>
                  <div className="flex items-start gap-3 p-4">
                    <svg className="w-5 h-5 text-[#12372A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="6" cy="12" r="1"></circle>
                    </svg>
                    <span className="text-[#1C1C1C] text-[0.95rem] font-sans">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Professional Website Matters */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-center">
              {/* Left content */}
              <div>
                <Reveal>
                  <h2
                    className="font-serif-display text-[#12372A] leading-[1.1] mb-8"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                  >
                    Why Your Property Business <em className="text-[#B08D57]">Needs a Professional Website</em>
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-light font-sans mb-6">
                    Today's buyers, sellers, landlords, and tenants expect an exceptional online experience. A modern property website should do more than display listings—it should guide visitors through the buying or renting journey with intuitive search tools, engaging visuals, and clear pathways to enquire. A professionally designed website builds confidence, reinforces your brand, and ensures every property receives maximum exposure.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-light font-sans">
                    At Crea Web, we combine premium design with modern development to create websites that not only showcase your portfolio beautifully but also perform exceptionally in search engines. Every website is optimised for speed, responsiveness, and SEO, helping estate agents and property professionals generate more enquiries and grow their business online.
                  </p>
                </Reveal>
              </div>
              
              {/* Right image */}
              <div className="relative h-[400px]">
                <img
                  src="/images/industries/real-estate-why.jpg"
                  alt="Real Estate Web Design UK"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Crea Web */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] text-center leading-[1.1] mb-16"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Why <em className="text-[#B08D57]">Choose Crea Web</em>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
              {[
                "Bespoke Property Website Design",
                "UK Web Design Agency",
                "SEO-Friendly Development",
                "Mobile-First Experience",
                "Fast Loading Websites",
                "CRM & Property Portal Integration",
                "Ongoing Website Support",
                "Designed to Generate Leads",
                "Built for Long-Term Growth",
              ].map((benefit, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3 p-4">
                    <svg className="w-5 h-5 text-[#12372A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#1C1C1C] text-[0.95rem] font-sans">{benefit}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] text-center leading-[1.1] mb-16"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Real Estate Website Design <em className="text-[#B08D57]">Pricing</em>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Foundation */}
              <div className="bg-[#F6F1E8] border border-[#1C1C1C]/10 p-8">
                <p className="text-[#B08D57] text-[0.75rem] tracking-[0.14em] uppercase font-sans font-medium mb-4">
                  Foundation
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif-display text-[#12372A] text-[2.2rem]">£2,500</span>
                </div>
                <div className="space-y-3 flex-1 mb-8">
                  {["Up to 20 properties", "Basic search", "Responsive design", "Mobile optimised", "Contact forms"].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#12372A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-[#1C1C1C] text-[0.9rem] font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-6 py-3 hover:bg-[#B08D57] hover:text-[#12372A] transition-colors duration-300">
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Professional */}
              <div className="bg-[#12372A] border-2 border-[#B08D57] p-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#B08D57] text-[#12372A] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider">
                  Recommended
                </div>
                <p className="text-[#B08D57] text-[0.75rem] tracking-[0.14em] uppercase font-sans font-medium mb-4">
                  Professional
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif-display text-[#F6F1E8] text-[2.2rem]">£7,500</span>
                </div>
                <div className="space-y-3 flex-1 mb-8">
                  {["Up to 100 properties", "Advanced search filters", "Mortgage calculator", "Valuation forms", "Agent profiles", "Blog integration"].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-[#F6F1E8] text-[0.9rem] font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#B08D57] px-6 py-3 hover:bg-[#F6F1E8] transition-colors duration-300">
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Enterprise */}
              <div className="bg-[#F6F1E8] border border-[#1C1C1C]/10 p-8">
                <p className="text-[#B08D57] text-[0.75rem] tracking-[0.14em] uppercase font-sans font-medium mb-4">
                  Enterprise
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif-display text-[#12372A] text-[2.2rem]">£15,000</span>
                </div>
                <div className="space-y-3 flex-1 mb-8">
                  {["Unlimited properties", "CRM integration", "Virtual tours", "Multi-office support", "Advanced analytics", "Custom integrations", "Ongoing SEO"].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#12372A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-[#1C1C1C] text-[0.9rem] font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-6 py-3 hover:bg-[#B08D57] hover:text-[#12372A] transition-colors duration-300">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] text-center leading-[1.1] mb-16"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Frequently Asked <em className="text-[#B08D57]">Questions</em>
              </h2>
            </Reveal>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <details className="group border-b border-[#1C1C1C]/10 py-6 cursor-pointer">
                    <summary className="flex justify-between items-start gap-4 font-sans font-medium text-[#12372A] text-[0.95rem] list-none">
                      <span>{faq.q}</span>
                      <span className="text-[#B08D57] flex-shrink-0 group-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-[#1C1C1C] text-[0.9rem] leading-relaxed font-sans font-light mt-4 ml-0">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#F6F1E8] text-center leading-[1.1] mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
              >
                Turn More Property Views Into <em className="text-[#B08D57]">Enquiries</em>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[#F6F1E8]/70 text-center text-[0.95rem] leading-relaxed font-sans font-light mb-8 max-w-[700px] mx-auto">
                Your website should work as hard as your sales team. Whether you're marketing residential homes, commercial property, or luxury developments, Crea Web creates bespoke real estate websites that attract visitors, build trust, and generate more enquiries. Book your free consultation today and let's create a property website that helps your business grow.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex justify-center">
                <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#B08D57] px-8 py-4 hover:bg-[#F6F1E8] transition-colors duration-300">
                  Book a Consultation
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
