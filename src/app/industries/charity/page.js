import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Charity Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke charity websites for UK charities, non-profit organisations, NGOs, and community groups. Accessible, SEO-friendly, and built to increase donations and engagement.",
  alternates: { canonical: "https://creaweb.co.uk/industries/charity" },
  openGraph: {
    title: "Charity Web Design UK | Crea Web",
    description: "Crea Web designs bespoke charity websites for UK charities, non-profit organisations, NGOs, and community groups. Accessible, SEO-friendly, and built to increase donations and engagement.",
    url: "https://creaweb.co.uk/industries/charity",
    type: "website",
  },
};

export default function CharityWebDesignPage() {
  const faqs = [
    {
      q: "How much does a charity website cost?",
      a: "Every charity website is tailored to your organisation's goals and requirements. Pricing depends on the number of pages, features, and integrations required.",
    },
    {
      q: "Can you integrate online donations?",
      a: "Yes. We can integrate secure donation platforms such as Stripe, PayPal, JustGiving, CAF Donate, and other fundraising solutions.",
    },
    {
      q: "Do you design websites for small charities?",
      a: "Absolutely. We work with organisations of all sizes, from local community groups to national charities and international NGOs.",
    },
    {
      q: "Can supporters volunteer through the website?",
      a: "Yes. We can create volunteer application forms, event registration systems, and supporter sign-up pages.",
    },
    {
      q: "Will the website be accessible?",
      a: "Yes. We design with accessibility in mind, helping your website serve a wider audience and align with recognised accessibility best practices.",
    },
    {
      q: "Do you provide SEO services?",
      a: "Yes. Every website includes technical SEO foundations, with optional ongoing SEO services to improve your visibility in search engines.",
    },
    {
      q: "Can you redesign our existing charity website?",
      a: "Yes. We modernise outdated charity websites while improving performance, accessibility, branding, and user experience.",
    },
    {
      q: "Do you provide maintenance and support?",
      a: "Yes. We offer ongoing maintenance, content updates, security monitoring, and technical support after launch.",
    },
  ];

  const reasons = [
    {
      title: "Increase Donations",
      description: "We create clear, persuasive donation journeys that make it simple for supporters to contribute securely online.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1v22M17 5H9.5a4 4 0 0 0 0 8h7.5"/></svg>
      ),
    },
    {
      title: "Engage Volunteers & Supporters",
      description: "From volunteer applications to newsletter sign-ups, every website is designed to encourage meaningful participation in your mission.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
    },
    {
      title: "Improve Search Visibility",
      description: "Our charity websites are optimised for searches such as Charity London, Non-Profit Organisation UK, and Community Charity Manchester.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      ),
    },
    {
      title: "Accessible for Everyone",
      description: "We follow modern accessibility best practices to help ensure your website is usable for people with diverse needs and abilities.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6"/></svg>
      ),
    },
    {
      title: "Designed Around Your Mission",
      description: "No templates. Every website is thoughtfully designed to reflect your organisation's purpose, values, and long-term objectives.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      ),
    },
    {
      title: "Ongoing Support & Partnership",
      description: "We don't disappear after launch. Ongoing maintenance, updates, and strategic guidance help your organisation stay ahead as your mission grows.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      ),
    },
  ];

  const features = [
    "Secure online donation integration",
    "One-time & recurring donations",
    "Fundraising campaign pages",
    "Volunteer registration forms",
    "Event management & ticketing",
    "Charity impact reports",
    "Success stories",
    "Trustee & leadership profiles",
    "Project & programme pages",
    "News & blog section",
    "Resource library",
    "Newsletter sign-up",
    "Petition & advocacy forms",
    "Corporate partnership pages",
    "Interactive maps",
  ];

  const industries = [
    "Registered Charities",
    "Non-Profit Organisations",
    "NGOs",
    "Community Interest Companies (CICs)",
    "Social Enterprises",
    "Community Organisations",
    "Faith-Based Organisations",
    "Educational Charities",
    "Health Charities",
    "Environmental Organisations",
    "Animal Welfare Charities",
    "Arts & Heritage Charities",
    "Youth Organisations",
    "International Development Organisations",
  ];

  const benefits = [
    "Bespoke Charity Website Design",
    "UK Web Design Agency",
    "SEO-Friendly Development",
    "Accessibility-Focused Design",
    "Secure Donation Integrations",
    "Mobile-First Experience",
    "Fast Loading Websites",
    "Long-Term Website Support",
    "Designed to Increase Donations & Engagement",
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="block w-8 h-[1px] bg-[#B08D57]" />
                  <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                    Charity
                  </span>
                </div>
                <h1
                  className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                >
                  Charity Web Design That <em className="text-[#B08D57]">Inspires Action & Builds Trust</em>
                </h1>
                <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                  Every charity has a mission worth sharing. At <strong className="font-normal">Crea Web</strong>, we specialise in <strong className="font-normal">Charity Web Design</strong>, creating accessible, responsive, and SEO-friendly websites for charities, non-profit organisations, NGOs, community groups, and social enterprises across the UK. We design websites that increase awareness, encourage donations, recruit volunteers, and help organisations create lasting impact.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300 rounded-xs"
                >
                  Start Your Project
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Right image */}
              <div className="hidden md:block md:col-span-1 relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-[#B08D57]/60 z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-[#B08D57]/60 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/industries/charity-hero.jpg"
                  alt="Charity Web Design UK"
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
                  About Charity Web Design
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
                      src="/images/industries/charity-about.jpg"
                      alt="Charity Web Design UK"
                      className="w-full h-full object-cover aspect-[3/4]"
                    />
                  </div>
                </div>

                {/* Right content */}
                <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                  <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                    Websites That Help You Make a <em className="text-[#B08D57]">Greater Impact</em>
                  </h2>
                  <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                    Your website is one of your most important fundraising and communication tools. Whether you're supporting local communities, protecting the environment, advancing education, or delivering humanitarian aid, your website should clearly communicate your mission while making it easy for people to donate, volunteer, and get involved. At <strong className="font-normal">Crea Web</strong>, we create bespoke charity websites that combine compelling storytelling with intuitive functionality to help organisations maximise their impact.
                  </p>
                  <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                    Every organisation has different goals, supporters, and programmes. That's why we design every website from the ground up to reflect your mission, values, and audience. From campaign landing pages and volunteer registration to donation forms and impact reports, every feature is carefully planned to strengthen engagement and build long-term supporter relationships.
                  </p>
                  <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                    As a trusted <strong className="font-normal">UK web design agency</strong>, we understand the importance of transparency, accessibility, and trust in the charity sector. Our websites are designed to be inclusive, easy to manage, and optimised for search engines, ensuring your organisation can reach more people while demonstrating accountability and professionalism.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Why Charities Choose Crea Web */}
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
                    Why Charities <em className="text-[#B08D57]">Choose Crea Web</em>
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

        {/* Charity Website Features */}
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
                Charity Website <em className="text-[#B08D57]">Features</em>
              </h2>

              <p className="text-[#7C746A] text-[0.95rem] leading-[1.7] mb-10 max-w-[65ch] font-sans font-light">
                Every charity website can include:
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

        {/* Industries We Work With */}
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
                Industries We <em className="text-[#B08D57]">Work With</em>
              </h2>

              <p className="text-[#7C746A] text-[0.95rem] leading-[1.7] mb-10 max-w-[65ch] font-sans font-light">
                We design websites for:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="block w-2 h-2 bg-[#12372A] rounded-full"></span>
                    <p className="text-[#1C1C1C] text-[0.95rem] font-sans font-light">{industry}</p>
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

              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left content */}
                <div className="lg:col-span-7 space-y-6">
                  <h2
                    className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-8"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                  >
                    Why Your Charity Needs a <em className="text-[#B08D57]">Modern Website</em>
                  </h2>

                  <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                    Supporters expect to learn about your work quickly, understand your impact, and donate with confidence. A professionally designed charity website helps communicate your mission, build credibility, and make it easy for visitors to contribute in meaningful ways. Whether someone wants to make a donation, volunteer, attend an event, or partner with your organisation, your website should provide a simple and inspiring experience.
                  </p>
                  <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                    At Crea Web, we combine purposeful design with modern web development to create charity websites that support fundraising, community engagement, and long-term organisational growth. Every website is responsive, secure, and optimised for search engines, helping your organisation reach more supporters while making every interaction more impactful.
                  </p>
                </div>

                {/* Right image */}
                <div className="hidden lg:block lg:col-span-5 relative">
                  <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-[#B08D57]/60 z-10" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-[#B08D57]/60 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/industries/charity-why.jpg"
                    alt="Charity Web Design UK"
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
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
                  Our Promise
                </span>
                <hr className="flex-1 divider" />
              </div>

              <h2
                className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-12"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Why <em className="text-[#B08D57]">Crea Web?</em>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#B08D57] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
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
        <section className="bg-white py-24 md:py-32">
          <Reveal>
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-6 mb-16">
                <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                  Investment
                </span>
                <hr className="flex-1 divider" />
              </div>

              <div className="mb-20">
                <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                  Charity Website <em className="text-[#B08D57]">Pricing</em>
                </h2>
                <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light max-w-[70ch]">
                  Transparent, bespoke pricing for charities of all sizes. Every package is tailored to your needs with no hidden fees.
                </p>
              </div>

              {/* Pricing Tiers */}
              <div className="grid md:grid-cols-3 gap-6 mb-20">
                {/* Foundation Tier */}
                <div className="bg-[#F6F1E8] border border-[#1C1C1C]/10 p-8 flex flex-col gap-8">
                  <div>
                    <p className="text-[#B08D57] text-[0.75rem] tracking-[0.14em] uppercase font-sans font-medium mb-3">
                      Foundation
                    </p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-serif-display text-[#12372A] text-[2.2rem]">£2,500</span>
                    </div>
                    <p className="text-[#7C746A] text-[0.85rem] font-sans">
                      One-time project fee
                    </p>
                  </div>
                  <div className="space-y-3 flex-1">
                    {["Up to 8 pages", "Responsive design", "Basic SEO setup", "Contact forms", "Mobile optimized"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span className="text-[#1C1C1C] text-[0.9rem] font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="justify-center inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-6 py-3 hover:bg-[#B08D57] hover:text-[#12372A] transition-colors duration-300 w-full rounded-xs">
                    Get Started
                  </Link>
                </div>

                {/* Professional Tier */}
                <div className="bg-[#12372A] border-2 border-[#B08D57] p-8 flex flex-col gap-8">
                  <div>
                    <p className="text-[#B08D57] text-[0.75rem] tracking-[0.14em] uppercase font-sans font-medium mb-3">
                      Professional
                    </p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-serif-display text-[#F6F1E8] text-[2.2rem]">£7,500</span>
                    </div>
                    <p className="text-[#F6F1E8]/70 text-[0.85rem] font-sans">
                      One-time project fee
                    </p>
                  </div>
                  <div className="space-y-3 flex-1">
                    {["Up to 15 pages", "Donation integration", "Volunteer system", "Advanced SEO", "Blog setup", "Analytics tracking"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span className="text-[#F6F1E8] text-[0.9rem] font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="justify-center inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#B08D57] px-6 py-3 hover:bg-[#F6F1E8] transition-colors duration-300 w-full rounded-xs">
                    Get Started
                  </Link>
                </div>

                {/* Enterprise Tier */}
                <div className="bg-[#F6F1E8] border border-[#1C1C1C]/10 p-8 flex flex-col gap-8">
                  <div>
                    <p className="text-[#B08D57] text-[0.75rem] tracking-[0.14em] uppercase font-sans font-medium mb-3">
                      Enterprise
                    </p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-serif-display text-[#12372A] text-[2.2rem]">£15,000+</span>
                    </div>
                    <p className="text-[#7C746A] text-[0.85rem] font-sans">
                      One-time project fee
                    </p>
                  </div>
                  <div className="space-y-3 flex-1">
                    {["Unlimited pages", "Multi-program support", "Advanced donation systems", "Event ticketing", "Staff portal", "Impact reporting", "Custom features"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#12372A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span className="text-[#1C1C1C] text-[0.9rem] font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="justify-center inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-6 py-3 hover:bg-[#B08D57] hover:text-[#12372A] transition-colors duration-300 w-full rounded-xs">
                    Get Started
                  </Link>
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
            <div className="max-w-[900px] mx-auto px-6 md:px-10">
              <div className="flex flex-col items-center text-center">
                <div className="mb-10">
                  <h2
                    className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
                  >
                    Amplify Your Mission With a Website That <em className="text-[#B08D57]">Makes a Difference</em>
                  </h2>
                  <p className="text-[#F6F1E8]/80 text-[1rem] leading-[1.82] font-sans font-light mb-6">
                    Whether you're launching a new charity, expanding your fundraising efforts, or modernising your existing website, <strong className="font-normal">Crea Web</strong> creates secure, SEO-friendly charity websites that inspire trust, increase donations, and strengthen community engagement.
                  </p>
                  <p className="text-[#F6F1E8] text-[1rem] leading-[1.82] font-sans font-light">
                    <strong className="font-normal">Ready to make an even greater impact? Get in touch today for a free consultation.</strong>
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#B08D57] px-8 py-4 hover:bg-[#F6F1E8] transition-colors duration-300 rounded-xs"
                >
                  Request a Consultation
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
