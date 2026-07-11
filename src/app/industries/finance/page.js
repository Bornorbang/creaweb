import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Finance Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs professional finance websites for accountants, financial advisers, mortgage brokers, and fintech companies. Bespoke, SEO-friendly, and built for trust.",
  alternates: { canonical: "https://creaweb.co.uk/industries/finance" },
  openGraph: {
    title: "Finance Web Design UK | Crea Web",
    description: "Crea Web designs professional finance websites for accountants, financial advisers, mortgage brokers, and fintech companies. Bespoke, SEO-friendly, and built for trust.",
    url: "https://creaweb.co.uk/industries/finance",
    type: "website",
  },
};

export default function FinanceWebDesignPage() {
  const faqs = [
    {
      q: "How much does a finance website cost?",
      a: "Every finance website is tailored to your business requirements. Pricing depends on the scope, functionality, and integrations needed.",
    },
    {
      q: "Can you redesign our existing finance website?",
      a: "Yes. We modernise outdated websites while improving performance, user experience, and search visibility.",
    },
    {
      q: "Do you build websites for accountants and financial advisers?",
      a: "Absolutely. We work with a wide range of financial professionals, including accountants, advisers, mortgage brokers, and fintech businesses.",
    },
    {
      q: "Will our website be mobile-friendly?",
      a: "Yes. Every website is fully responsive and optimised for desktop, tablet, and mobile devices.",
    },
    {
      q: "Can you include financial calculators or custom tools?",
      a: "Yes. We can integrate calculators, forms, and bespoke functionality based on your business needs.",
    },
    {
      q: "Do you provide SEO services?",
      a: "Yes. Every website includes technical SEO foundations, with optional ongoing SEO campaigns available.",
    },
    {
      q: "Is the website secure?",
      a: "Yes. We implement SSL certificates, secure development practices, and recommend reliable hosting solutions.",
    },
    {
      q: "Do you provide ongoing maintenance?",
      a: "Yes. We offer maintenance, updates, security monitoring, and technical support after launch.",
    },
  ];

  const reasons = [
    {
      title: "Build Immediate Credibility",
      description: "A modern, professionally designed website reassures prospective clients that your business is trustworthy, experienced, and established.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ),
    },
    {
      title: "Generate High-Quality Leads",
      description: "Clear navigation, strategically placed calls-to-action, and informative service pages encourage visitors to enquire with confidence.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
      ),
    },
    {
      title: "SEO Built for Financial Services",
      description: "We optimise websites to help businesses appear in searches such as Financial Adviser London, Accountant Manchester, and Mortgage Broker Birmingham.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      ),
    },
    {
      title: "Secure & Reliable",
      description: "Every finance website is built using modern development standards with SSL security, fast performance, and reliable hosting recommendations.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
      ),
    },
    {
      title: "Bespoke Design for Your Business",
      description: "No generic templates. Every website is designed around your firm's branding, services, and long-term growth strategy.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      ),
    },
    {
      title: "Transparent Communication",
      description: "We work closely with you throughout the process, ensuring your vision is understood and delivered with clarity and professionalism.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      ),
    },
  ];

  const benefits = [
    "Bespoke Finance Website Design",
    "UK Web Design Agency",
    "SEO-Friendly Development",
    "Responsive Across All Devices",
    "Fast & Secure Websites",
    "Modern User Experience",
    "Transparent Communication",
    "Ongoing Website Support",
    "Designed to Generate Enquiries",
  ];

  const features = [
    "Service pages",
    "Team member profiles",
    "Online consultation request forms",
    "Client testimonials",
    "Financial calculators",
    "Mortgage calculator integration",
    "Secure document upload forms",
    "Blog & financial insights",
    "FAQ pages",
    "Interactive contact forms",
    "Office location pages",
    "Multi-branch support",
    "GDPR-compliant forms",
    "Accessibility-focused design",
    "SSL security implementation",
  ];

  const industries = [
    "Accountants",
    "Chartered Accountants",
    "Financial Advisers",
    "Wealth Management Firms",
    "Mortgage Brokers",
    "Insurance Companies",
    "Tax Consultants",
    "Bookkeeping Firms",
    "Pension Advisers",
    "Investment Companies",
    "Credit Unions",
    "Fintech Startups",
    "Business Consultants",
    "Corporate Finance Firms",
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          
          {/* Decorative design top right */}
          <div className="absolute top-20 right-0 w-64 h-64 opacity-[0.03]">
            <svg viewBox="0 0 200 200" fill="currentColor" className="text-[#F6F1E8]">
              <path d="M100,20 Q150,50 150,100 Q150,150 100,180 Q50,150 50,100 Q50,50 100,20" />
              <circle cx="100" cy="100" r="30" />
            </svg>
          </div>
          
          {/* Decorative design bottom left */}
          <div className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.03]">
            <svg viewBox="0 0 200 200" fill="currentColor" className="text-[#F6F1E8]">
              <rect x="20" y="20" width="160" height="160" rx="20" />
              <rect x="50" y="50" width="100" height="100" rx="10" />
            </svg>
          </div>

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="block w-8 h-[1px] bg-[#B08D57]" />
                  <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                    Finance
                  </span>
                </div>
                <h1
                  className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                >
                  Finance Web Design That <em className="text-[#B08D57]">Builds Trust & Drives Growth</em>
                </h1>
                <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                  Your clients expect confidence, professionalism, and security before they ever make contact. At <strong className="font-normal">Crea Web</strong>, we specialise in <strong className="font-normal">Finance Web Design</strong>, creating bespoke websites for accountants, financial advisers, mortgage brokers, insurance firms, fintech startups, and wealth management companies.
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
              <div className="hidden md:block relative h-96">
                <img
                  src="/images/industries/finance-hero.jpg"
                  alt="Finance Web Design UK"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
              {/* Left content */}
              <div>
                <Reveal>
                  <h2
                    className="font-serif-display text-[#12372A] leading-[1.1] mb-6"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                  >
                    Professional Websites for <em className="text-[#B08D57]">Financial Businesses</em>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-sans font-light mb-5">
                    In the financial sector, trust is everything. Whether someone is searching for an accountant, financial planner, mortgage adviser, or investment firm, your website is often the deciding factor in whether they choose your business. At <strong className="font-normal">Crea Web</strong>, we design premium finance websites that communicate professionalism, reliability, and expertise from the very first visit.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-sans font-light">
                    Every financial business serves different clients with different needs. That's why every website we create is completely bespoke. We take the time to understand your services, target audience, and business objectives before designing a website that reflects your brand while making complex financial information clear and accessible. Every page is responsive, SEO-friendly, and built to convert visitors into enquiries. As a trusted <strong className="font-normal">UK web design agency</strong>, we combine thoughtful design with modern development to create finance websites that are secure, scalable, and built for long-term growth.
                  </p>
                </Reveal>
              </div>

              {/* Right image with accents */}
              <div className="relative hidden md:block h-96">
                <img
                  src="/images/industries/finance-about.jpg"
                  alt="Finance Web Design UK"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-t border-l border-[#B08D57]/60 z-10" />
                <div className="absolute -top-4 -right-4 w-16 h-16 border-b border-r border-[#B08D57]/60 z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Crea Web - Reasons */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <div className="text-center mb-16">
                <h2
                  className="font-serif-display text-[#12372A] leading-[1.1]"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                >
                  Why Financial Businesses <em className="text-[#B08D57]">Choose Crea Web</em>
                </h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10">
              {reasons.map((reason, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-[#F6F1E8] p-8 flex flex-col gap-5 h-full">
                    <div className="w-10 h-10 text-[#12372A]">{reason.icon}</div>
                    <h3 className="font-serif-display text-[#12372A] text-[1.3rem] leading-[1.15]">
                      {reason.title}
                    </h3>
                    <p className="text-[#1C1C1C] text-[0.9rem] leading-relaxed font-sans font-light flex-grow">
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] leading-[1.1] mb-16 text-center"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Features <em className="text-[#B08D57]">Included</em>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="flex items-start gap-4 py-3">
                    <svg className="w-5 h-5 text-[#12372A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#1C1C1C] text-[0.95rem] font-sans font-light">{feature}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* We Work With section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] leading-[1.1] mb-16 text-center"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                We Work <em className="text-[#B08D57]">With</em>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="flex items-center gap-3 py-3">
                    <span className="w-2 h-2 bg-[#12372A] rounded-full flex-shrink-0" />
                    <span className="text-[#1C1C1C] text-[0.95rem] font-sans font-light">{industry}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Your Business Needs section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
              {/* Left image with accents */}
              <div className="hidden md:block relative h-96 order-first">
                <img
                  src="/images/industries/finance-why.jpg"
                  alt="Finance Web Design UK"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-[#B08D57]/60 z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-[#B08D57]/60 z-10" />
              </div>

              {/* Right content */}
              <div>
                <Reveal>
                  <h2
                    className="font-serif-display text-[#12372A] leading-[1.1] mb-6"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                  >
                    Why Your Financial Business <em className="text-[#B08D57]">Needs a Professional Website</em>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-sans font-light mb-5">
                    Financial decisions involve careful consideration, and your website should reinforce confidence at every stage of the customer journey. A professionally designed website clearly explains your services, showcases your expertise, and provides prospective clients with the information they need to take the next step. An outdated or difficult-to-use website can undermine credibility, while a modern, well-structured website strengthens your reputation and supports business growth.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-sans font-light">
                    At Crea Web, we create finance websites that combine elegant design, intuitive navigation, and SEO best practices to help financial businesses attract qualified enquiries. Every website is built for speed, responsiveness, and long-term performance, ensuring your online presence reflects the quality of your services.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Crea Web - Benefits */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] leading-[1.1] mb-12 text-center"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Why <em className="text-[#B08D57]">Choose Crea Web?</em>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="flex items-start gap-3 py-3">
                    <svg className="w-5 h-5 text-[#12372A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#1C1C1C] text-[0.95rem] font-sans font-light">{benefit}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] leading-[1.1] mb-16 text-center"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Finance Website <em className="text-[#B08D57]">Design Pricing</em>
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
                  {["Up to 8 pages", "Responsive design", "Basic SEO", "Contact forms", "Mobile optimised"].map((feature, i) => (
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
                  {["Up to 15 pages", "Advanced functionality", "Consultation request forms", "Team profiles", "SEO optimisation", "Fast performance"].map((feature, i) => (
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
                  {["Unlimited pages", "Multi-branch support", "Custom integrations", "Advanced security", "Calculator tools", "Client portal", "Custom features"].map((feature, i) => (
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

        {/* FAQ section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/10">
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            <Reveal>
              <h2
                className="font-serif-display text-[#12372A] leading-[1.1] mb-16 text-center"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Frequently Asked <em className="text-[#B08D57]">Questions</em>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-white border border-[#1C1C1C]/10 p-6 rounded-sm h-full flex flex-col">
                    <h3 className="font-serif-display text-[#12372A] text-[1rem] leading-[1.3] mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-[#1C1C1C] text-[0.9rem] leading-relaxed font-sans font-light flex-grow">
                      {faq.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="relative bg-[#12372A] py-24 md:py-32">
          <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
            <Reveal>
              <h2
                className="font-serif-display text-[#F6F1E8] leading-[1.1] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Build Confidence Before Your <em className="text-[#B08D57]">Clients Make Contact</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[#F6F1E8]/80 text-[0.95rem] leading-relaxed font-sans font-light mb-8 max-w-[60ch] mx-auto">
                Your website should reflect the professionalism of your financial business. Whether you're an accountant, financial adviser, mortgage broker, or fintech company, Crea Web designs bespoke finance websites that build trust, generate enquiries, and support long-term business growth.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex justify-center">
                <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#B08D57] px-8 py-4 hover:bg-[#F6F1E8] transition-colors duration-300">
                  Get in Touch
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
