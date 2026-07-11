import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Legal Web Design UK | Crea Web",
  },
  description:
    "Crea Web provides professional legal web design in the UK, creating bespoke, SEO-friendly websites for solicitors, law firms, barristers, and legal professionals.",
  alternates: { canonical: "https://creaweb.co.uk/industries/legal" },
  openGraph: {
    title: "Legal Web Design UK | Crea Web",
    description: "Crea Web provides professional legal web design in the UK, creating bespoke, SEO-friendly websites for solicitors, law firms, barristers, and legal professionals.",
    url: "https://creaweb.co.uk/industries/legal",
    type: "website",
  },
};

export default function LegalWebDesignPage() {
  const faqs = [
    {
      q: "How much does a law firm website cost?",
      a: "Every legal website is bespoke. Pricing depends on the number of practice areas, required functionality, and project scope.",
    },
    {
      q: "Can you redesign our existing law firm website?",
      a: "Yes. We modernise outdated legal websites while improving performance, SEO, and user experience.",
    },
    {
      q: "Will our website rank on Google?",
      a: "Every project includes technical SEO foundations. We also offer ongoing SEO services to help increase visibility over time.",
    },
    {
      q: "Can clients request consultations online?",
      a: "Absolutely. We can integrate secure consultation request forms and appointment booking systems.",
    },
    {
      q: "Are your websites mobile-friendly?",
      a: "Yes. Every website is fully responsive across all devices.",
    },
    {
      q: "Can you build websites for multiple office locations?",
      a: "Yes. We can create dedicated pages for each office and practice area to improve both user experience and local SEO.",
    },
    {
      q: "Do you provide website maintenance?",
      a: "Yes. We offer ongoing maintenance, updates, and technical support to keep your website secure and performing optimally.",
    },
    {
      q: "How long does a legal website project take?",
      a: "Most projects are completed within 4–6 weeks, depending on scope and content requirements.",
    },
  ];

  const reasons = [
    {
      title: "Build Trust from the First Visit",
      description: "A polished, modern website reassures potential clients that they're dealing with a professional legal practice.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Generate More Client Enquiries",
      description: "Clear navigation, strategically placed calls-to-action, and well-structured service pages encourage visitors to get in touch.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
    },
    {
      title: "Local SEO for Law Firms",
      description: "We optimise websites to help your practice appear in searches such as Solicitor London, Family Lawyer Manchester, and Employment Solicitor Birmingham.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
    },
    {
      title: "Mobile-Optimised Experience",
      description: "Many legal enquiries begin on mobile devices. Every website is designed to perform seamlessly across smartphones, tablets, and desktops.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: "Tailored to Your Practice",
      description: "We don't use generic templates. Every legal website is custom-designed around your firm's branding, services, and long-term objectives.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
    },
    {
      title: "Professional Credibility",
      description: "Your website communicates expertise and builds confidence with prospective clients from the moment they arrive.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
  ];

  const features = [
    "Individual solicitor profiles",
    "Practice area pages",
    "Online consultation request forms",
    "Case study pages",
    "Client testimonials",
    "Frequently asked questions",
    "Legal insights and blog",
    "Secure enquiry forms",
    "Office location maps",
    "Multi-office support",
    "Live chat integration",
    "Document download centre",
    "GDPR-compliant contact forms",
    "Accessibility-focused design",
    "SSL security",
  ];

  const practices = [
    "Solicitors",
    "Law Firms",
    "Barristers",
    "Chambers",
    "Family Law Practices",
    "Immigration Lawyers",
    "Employment Law Firms",
    "Commercial Law Firms",
    "Corporate Lawyers",
    "Conveyancing Solicitors",
    "Personal Injury Firms",
    "Criminal Defence Solicitors",
    "Wills & Probate Specialists",
    "Mediation Services",
  ];

  const benefits = [
    "Bespoke Legal Website Design",
    "UK Web Design Agency",
    "SEO-Friendly Development",
    "Responsive Across All Devices",
    "Fast Loading Websites",
    "Modern User Experience",
    "Transparent Project Management",
    "Long-Term Website Support",
    "Designed to Generate Enquiries",
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="block w-8 h-[1px] bg-[#B08D57]" />
                  <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                    Legal
                  </span>
                </div>
                <h1
                  className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                >
                  Professional Legal Web Design That <em className="text-[#B08D57]">Inspires Trust</em>
                </h1>
                <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                  Your website should reflect the professionalism and expertise your clients expect. At <strong className="font-normal">Crea Web</strong>, we specialise in <strong className="font-normal">Legal Web Design</strong>, creating bespoke, responsive websites for solicitors, law firms, barristers, and legal consultants. Designed with performance, credibility, and SEO in mind, our websites help legal professionals attract new enquiries and establish lasting trust online.
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
              <div className="hidden md:block relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-[#B08D57]/60 z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-[#B08D57]/60 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/industries/legal-hero.jpg"
                  alt="Legal Web Design UK"
                  className="w-full h-full object-cover rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-6 mb-16">
                <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                  About Legal Web Design
                </span>
                <hr className="flex-1 divider" />
              </div>

              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left image */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-[#B08D57]/60 z-10" />
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-[#B08D57]/60 z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/industries/legal-about.jpg"
                      alt="Legal Web Design UK"
                      className="w-full h-full object-cover aspect-[3/4]"
                    />
                  </div>
                </div>

                {/* Right content */}
                <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                  <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                    Professional Websites for <em className="text-[#B08D57]">Modern Law Firms</em>
                  </h2>
                  <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                    When potential clients need legal advice, their first impression often begins online. A well-designed website should communicate professionalism, build confidence, and make it easy for visitors to understand your expertise. At <strong className="font-normal">Crea Web</strong>, we design bespoke legal websites that combine elegant design with intuitive functionality, helping law firms present a credible and authoritative online presence.
                  </p>
                  <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                    Every legal practice has unique areas of expertise, and your website should reflect that. Whether you specialise in family law, corporate law, conveyancing, employment law, immigration, litigation, or personal injury, we create websites tailored to your firm's services and target audience. Every page is carefully structured to improve user experience, search visibility, and enquiry generation.
                  </p>
                  <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                    As a trusted <strong className="font-normal">UK web design agency</strong>, we understand that credibility is essential within the legal profession. Our websites are built to showcase your expertise, highlight client testimonials, introduce your legal team, and make it simple for prospective clients to contact your firm. From boutique practices to established law firms, we deliver websites that support long-term business growth.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Why Law Firms Choose Crea Web */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-6 mb-12 lg:mb-20">
                <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                  Why Choose Us
                </span>
                <hr className="flex-1 divider" />
              </div>

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
                <div className="lg:col-span-7">
                  <h2 className="font-serif-display text-[#12372A] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                    Why Law Firms <em className="text-[#B08D57]">Choose Crea Web</em>
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10 border border-[#1C1C1C]/10">
                {reasons.map((reason) => (
                  <div key={reason.title} className="bg-[#F6F1E8] p-8 md:p-10 flex flex-col gap-5">
                    <div className="w-10 h-10 flex items-center justify-center text-[#12372A]">
                      {reason.icon}
                    </div>
                    <div>
                      <p className="font-serif-display text-[#12372A] text-[1.2rem] mb-3">
                        {reason.title}
                      </p>
                      <p className="text-[#7C746A] text-[0.88rem] leading-[1.78] font-sans">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Legal Website Features */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-6 mb-16">
                <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                  Features
                </span>
                <hr className="flex-1 divider" />
              </div>

              <h2
                className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-12"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Features <em className="text-[#B08D57]">Included</em>
              </h2>

              <p className="text-[#7C746A] text-[0.95rem] leading-[1.7] mb-10 max-w-[65ch] font-sans font-light">
                Your legal website can include:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#12372A] flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p className="text-[#1C1C1C] text-[0.95rem] font-sans font-light">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Who We Work With */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-6 mb-16">
                <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                  Specialisms
                </span>
                <hr className="flex-1 divider" />
              </div>

              <h2
                className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-12"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Who We <em className="text-[#B08D57]">Work With</em>
              </h2>

              <p className="text-[#7C746A] text-[0.95rem] leading-[1.7] mb-10 max-w-[65ch] font-sans font-light">
                We create websites for:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {practices.map((practice, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="block w-2 h-2 bg-[#12372A] rounded-full"></span>
                    <p className="text-[#1C1C1C] text-[0.95rem] font-sans font-light">{practice}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Why Modern Website Matters */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-6 mb-16">
                <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                  Market Need
                </span>
                <hr className="flex-1 divider" />
              </div>

              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                {/* Left content */}
                <div className="lg:col-span-7">
                  <h2
                    className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-8"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                  >
                    Why a Professional <em className="text-[#B08D57]">Legal Website Matters</em>
                  </h2>

                  <div className="space-y-6">
                <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                  Legal services are built on trust, and your website plays a significant role in shaping that trust before a conversation even begins. A professionally designed website demonstrates credibility, communicates expertise, and provides prospective clients with the confidence to contact your firm. It should make your services easy to understand, highlight your experience, and remove unnecessary barriers to making an enquiry.
                </p>
                <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                  At Crea Web, we combine elegant design with strategic development to create websites that not only represent your firm professionally but also perform exceptionally well in search engines. Every website is responsive, SEO-friendly, and designed to support client acquisition while maintaining the professionalism expected within the legal sector.
                </p>
                  </div>
                </div>

                {/* Right image */}
                <div className="lg:col-span-5 hidden lg:block">
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-[#B08D57]/60 z-10" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-[#B08D57]/60 z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/industries/legal-why.jpg"
                      alt="Legal Web Design UK"
                      className="w-full h-full object-cover rounded-sm"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Why Crea Web */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-6 mb-16">
                <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                  Our Approach
                </span>
                <hr className="flex-1 divider" />
              </div>

              <h2
                className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-12"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Why <em className="text-[#B08D57]">Choose Crea Web</em>?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#12372A] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p className="text-[#1C1C1C] text-[0.95rem] font-sans font-light">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Pricing Section */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-6 mb-16">
                <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                  Pricing
                </span>
                <hr className="flex-1 divider" />
              </div>

              <h2
                className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-12"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Legal Website Design <em className="text-[#B08D57]">Pricing</em>
              </h2>

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
                    {["Up to 15 pages", "Advanced functionality", "Consultation request forms", "Multi-page features", "SEO optimisation", "Fast performance"].map((feature, i) => (
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
                    {["Unlimited pages", "Multi-location support", "Custom integrations", "Advanced security", "Staff portal", "Client resources", "Custom features"].map((feature, i) => (
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
          </Reveal>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-6 mb-16">
                <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                  Questions
                </span>
                <hr className="flex-1 divider" />
              </div>

              <h2
                className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-12"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Frequently Asked <em className="text-[#B08D57]">Questions</em>
              </h2>

              <div className="space-y-8 max-w-[80ch]">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-[#1C1C1C]/10 pb-8">
                    <h3 className="text-[#12372A] font-serif-display text-[1.2rem] leading-tight mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-[#7C746A] text-[0.95rem] leading-[1.7] font-sans font-light">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA Section */}
        <section className="bg-[#12372A] py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="max-w-[900px] mx-auto">
                <h2
                  className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6 text-center"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
                >
                  Give Your Law Firm the Online Presence It <em className="text-[#B08D57]">Deserves</em>
                </h2>
                <p className="text-[#F6F1E8]/80 text-[1rem] leading-[1.82] font-sans font-light mb-10 max-w-[90ch] mx-auto text-center">
                  Whether you're launching a new legal practice or modernising an existing website, Crea Web creates bespoke legal websites that build trust, improve visibility, and generate high-quality client enquiries.
                </p>
                <p className="text-[#F6F1E8] text-[1rem] leading-[1.82] font-sans font-light mb-10 max-w-[65ch] mx-auto text-center">
                  <strong className="font-normal">Book your free consultation today and let's create a website that reflects the professionalism of your firm.</strong>
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#B08D57] px-8 py-4 hover:bg-[#F6F1E8] transition-colors duration-300"
                  >
                    Book a Consultation
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                      <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
