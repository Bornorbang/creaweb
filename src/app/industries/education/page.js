import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Education Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke education websites for schools, colleges, universities, academies, and training providers. Responsive, SEO-friendly, and built to engage students and parents.",
  alternates: { canonical: "https://creaweb.co.uk/industries/education" },
  openGraph: {
    title: "Education Web Design UK | Crea Web",
    description: "Crea Web designs bespoke education websites for schools, colleges, universities, academies, and training providers. Responsive, SEO-friendly, and built to engage students and parents.",
    url: "https://creaweb.co.uk/industries/education",
    type: "website",
  },
};

export default function EducationWebDesignPage() {
  const faqs = [
    {
      q: "How much does an education website cost?",
      a: "Every education website is tailored to your institution's requirements. Pricing depends on functionality, page count, and integrations.",
    },
    {
      q: "Can you redesign our current school or college website?",
      a: "Yes. We redesign outdated education websites while improving performance, accessibility, and user experience.",
    },
    {
      q: "Can students apply online?",
      a: "Absolutely. We can integrate online application forms, admissions portals, and enquiry forms.",
    },
    {
      q: "Are your education websites mobile-friendly?",
      a: "Yes. Every website is fully responsive across desktop, tablet, and mobile devices.",
    },
    {
      q: "Do you optimise websites for search engines?",
      a: "Yes. Every website includes technical SEO foundations, with optional ongoing SEO services available.",
    },
    {
      q: "Can you integrate learning management systems (LMS)?",
      a: "Yes. We can integrate with many LMS platforms or develop custom solutions where required.",
    },
    {
      q: "Do you provide ongoing maintenance?",
      a: "Yes. We offer website maintenance, updates, security monitoring, and technical support.",
    },
    {
      q: "How long does a project take?",
      a: "Most education website projects are completed within 6–8 weeks, depending on the scope and complexity.",
    },
  ];

  const reasons = [
    {
      title: "Improve Student & Parent Experience",
      description: "A well-structured website makes it easier for visitors to find admissions information, courses, timetables, policies, and contact details.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
    },
    {
      title: "Encourage More Applications",
      description: "Strategic calls-to-action, clear navigation, and engaging content help convert prospective students into applicants.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
      ),
    },
    {
      title: "SEO That Increases Visibility",
      description: "Our websites are optimised for searches such as Private School London, College Manchester, Training Provider Birmingham, Online Courses Leeds, and Academy Bristol.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      ),
    },
    {
      title: "Accessible & Responsive",
      description: "Every website is designed to work seamlessly across desktop, tablet, and mobile devices while following modern accessibility best practices.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      ),
    },
    {
      title: "Tailored to Your Institution",
      description: "Every website is bespoke, designed around your curriculum, admissions process, branding, and communication needs.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      ),
    },
    {
      title: "Ongoing Support & Partnership",
      description: "We don't disappear after launch. Ongoing maintenance, updates, and strategic guidance help your institution stay ahead as your needs grow.",
      icon: (
        <svg className="w-8 h-8 text-[#12372A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      ),
    },
  ];

  const features = [
    "Course & programme pages",
    "Online admissions forms",
    "Student application portals",
    "Event calendars",
    "Staff directories",
    "Faculty profile pages",
    "News & announcements",
    "School blog",
    "Downloadable prospectuses",
    "Timetables",
    "Parent information hub",
    "Student resource centre",
    "Secure enquiry forms",
    "Accessibility-focused design",
    "GDPR-compliant forms",
    "SSL security",
  ];

  const institutions = [
    "Primary Schools",
    "Secondary Schools",
    "Independent Schools",
    "Colleges",
    "Universities",
    "Academies",
    "Sixth Form Colleges",
    "Nurseries",
    "Tutors",
    "Online Learning Platforms",
    "Training Providers",
    "Professional Certification Providers",
    "Coaching Businesses",
    "Educational Consultants",
  ];

  const benefits = [
    "Bespoke Education Website Design",
    "UK Web Design Agency",
    "SEO-Friendly Development",
    "Mobile-First Design",
    "Accessibility-Focused Websites",
    "Fast Loading Performance",
    "Secure Development",
    "Long-Term Website Support",
    "Designed to Increase Enquiries & Applications",
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
                    Education
                  </span>
                </div>
                <h1
                  className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                >
                  Education Web Design That <em className="text-[#B08D57]">Inspires Learning & Engagement</em>
                </h1>
                <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                  Your website is often the first interaction prospective students, parents, and learners have with your institution. At <strong className="font-normal">Crea Web</strong>, we specialise in <strong className="font-normal">Education Web Design</strong>, creating modern, accessible, and SEO-friendly websites for schools, colleges, universities, academies, tutors, and training providers. We build digital experiences that inform, engage, and encourage enrolment.
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/industries/education-hero.jpg"
                  alt="Education Web Design UK"
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
                  About Education Web Design
                </span>
                <hr className="flex-1 border-t border-[#12372A]/10" />
              </div>

              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                    Today's learners expect more than a simple website—they expect a digital experience that is informative, engaging, and easy to navigate. Whether you're a primary school, independent college, university department, online academy, or training provider, your website should communicate your values while making important information easy to access. At <strong className="font-normal">Crea Web</strong>, we create bespoke education websites that strengthen your institution's reputation and improve the experience for students, parents, and staff alike.
                  </p>
                  <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                    Every educational organisation has unique goals, programmes, and audiences. That's why we design every website from the ground up, ensuring it reflects your brand identity while providing intuitive navigation, responsive layouts, and excellent accessibility. From admissions information and course pages to event calendars and staff directories, every element is designed to support communication and engagement. As a trusted <strong className="font-normal">UK web design agency</strong>, we combine thoughtful design with modern development to create education websites that are fast, secure, and built for long-term growth.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-[#B08D57]/60 z-10" />
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-[#B08D57]/60 z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/industries/education-hero.jpg"
                      alt="Education Web Design UK"
                      className="w-full h-full object-cover rounded-sm"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Reasons section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal>
              <div className="text-center mb-16">
                <h2
                  className="font-serif-display text-[#12372A] leading-[1.1]"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                >
                  Why Educational Institutions <em className="text-[#B08D57]">Choose Crea Web</em>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="flex items-start gap-3 py-3">
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

        {/* Who We Work With section */}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {institutions.map((institution, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="flex items-start gap-3 py-3">
                    <span className="w-2 h-2 bg-[#12372A] rounded-full flex-shrink-0 mt-1.5" />
                    <span className="text-[#1C1C1C] text-[0.95rem] font-sans font-light">{institution}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Market Need section */}
        <section className="relative bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
              {/* Left image */}
              <div className="hidden md:block relative h-96 order-first">
                <img
                  src="/images/industries/education-why.jpg"
                  alt="Education Web Design UK"
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
                    Why Your Institution <em className="text-[#B08D57]">Needs a Modern Website</em>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-sans font-light mb-5">
                    For many prospective students and parents, your website is their first impression of your institution. A modern, professionally designed website helps communicate your values, showcase your programmes, and make important information accessible to everyone. It also reduces administrative workload by making forms, policies, and announcements available online.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed font-sans font-light">
                    At Crea Web, we create education websites that balance beautiful design with practical functionality. Every website is responsive, SEO-friendly, and built to support admissions, communication, and long-term growth while providing an outstanding experience for students, parents, and educators.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Crea Web section */}
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
                Education Website <em className="text-[#B08D57]">Design Pricing</em>
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
                  {["Up to 15 pages", "Advanced functionality", "Admissions forms", "Event calendars", "SEO optimisation", "Fast performance"].map((feature, i) => (
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
                  {["Unlimited pages", "Student portal", "Custom integrations", "LMS integration", "Staff resources", "Advanced security", "Custom features"].map((feature, i) => (
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
                Create an Online Experience That <em className="text-[#B08D57]">Reflects Your Institution</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[#F6F1E8]/80 text-[0.95rem] leading-relaxed font-sans font-light mb-8 max-w-[60ch] mx-auto">
                Whether you're launching a new school, promoting a training provider, or modernising an existing education website, Crea Web designs bespoke websites that inform, inspire, and encourage more enquiries and applications.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex justify-center">
                <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#B08D57] px-8 py-4 hover:bg-[#F6F1E8] transition-colors duration-300">
                  Book a Free Consultation
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
