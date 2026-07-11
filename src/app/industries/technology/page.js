import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Technology Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs modern technology websites for SaaS companies, startups, software firms, IT providers, and technology businesses across the UK. SEO-friendly and built to scale.",
  alternates: { canonical: "https://creaweb.co.uk/industries/technology" },
  openGraph: {
    title: "Technology Web Design UK | Crea Web",
    description: "Crea Web designs modern technology websites for SaaS companies, startups, software firms, IT providers, and technology businesses across the UK. SEO-friendly and built to scale.",
    url: "https://creaweb.co.uk/industries/technology",
    type: "website",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#12372A] text-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Gold accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#B08D57]"></div>

          <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-[#B08D57] font-light text-sm tracking-widest uppercase mb-6">TECHNOLOGY</p>
              <h1 className="font-serif-display text-[clamp(2rem,6vw,3.5rem)] leading-tight font-light mb-6">
                Technology Web Design That <span className="italic text-[#B08D57]">Powers Innovation</span>
              </h1>
              <p className="text-[1rem] leading-relaxed font-light mb-8 max-w-lg">
                Technology companies need websites that do more than look impressive—they need websites that communicate innovation, simplify complex products, and generate qualified leads. At <strong>Crea Web</strong>, we specialise in <strong>Technology Web Design</strong>, creating bespoke websites for SaaS companies, software providers, IT consultancies, AI startups, fintech businesses, and growing technology brands across the UK. Every website is engineered for speed, scalability, and business growth.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#B08D57] text-[#12372A] font-light rounded-xs hover:bg-opacity-90 transition"
              >
                Get Started
              </Link>
            </div>

            {/* Right: Image */}
            <div className="hidden md:block">
              <img
                src="/images/industries/technology-hero.jpg"
                alt="Technology Web Design UK"
                className="w-full rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-center">
            {/* Left: Image with Gold Accents */}
            <div className="relative">
              <img
                src="/images/industries/technology-about.jpg"
                alt="Technology Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light mb-6 text-[#12372A]">
                Websites Built for Innovative Technology Companies
              </h2>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                In today's competitive technology landscape, your website is often your most effective sales tool. Whether you're launching a SaaS platform, promoting enterprise software, or introducing a disruptive startup, your website should explain your value proposition clearly while building confidence with investors, customers, and partners. At <strong>Crea Web</strong>, we create bespoke technology websites that blend premium design with technical excellence to help businesses stand out in fast-moving markets.
              </p>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                Every technology company has different products, audiences, and objectives. Some need to educate enterprise buyers with detailed product pages, while others need landing pages that convert startup traffic into demo requests. That's why every website we build is custom-designed around your business model, user journey, and growth strategy. We create intuitive digital experiences that simplify technical concepts without sacrificing depth or credibility.
              </p>
              <p className="text-[0.95rem] leading-relaxed font-light text-[#1C1C1C]">
                As a trusted <strong>UK web design agency</strong>, we understand the expectations of modern technology businesses. Our websites are responsive, SEO-friendly, and performance-focused, ensuring your platform, software, or service is presented with the professionalism and innovation your audience expects. Whether you're a startup preparing for investment or an established software company expanding into new markets, we build websites that support long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Technology Companies Choose Crea Web - 6 Reason Cards */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light text-center mb-16 text-[#12372A]">
            Why Technology Companies Choose Crea Web
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Reveal>
              <div className="bg-white p-8 rounded-sm h-full flex flex-col border border-[#1C1C1C]/10">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[#12372A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <h3 className="font-serif-display text-[1.2rem] font-light text-[#12372A] mb-3">
                  Simplify Complex Products
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  We transform technical concepts into clear, engaging user experiences that help prospects quickly understand your products and services.
                </p>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal>
              <div className="bg-white p-8 rounded-sm h-full flex flex-col border border-[#1C1C1C]/10">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[#12372A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
                <h3 className="font-serif-display text-[1.2rem] font-light text-[#12372A] mb-3">
                  Generate Qualified Leads
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Every website is strategically designed to encourage demo requests, consultation bookings, software trials, and sales enquiries through compelling calls-to-action.
                </p>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal>
              <div className="bg-white p-8 rounded-sm h-full flex flex-col border border-[#1C1C1C]/10">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[#12372A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="font-serif-display text-[1.2rem] font-light text-[#12372A] mb-3">
                  SEO That Supports Business Growth
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  We optimise websites to help technology companies rank for searches such as SaaS platforms, software solutions, and IT services.
                </p>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal>
              <div className="bg-white p-8 rounded-sm h-full flex flex-col border border-[#1C1C1C]/10">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[#12372A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                </div>
                <h3 className="font-serif-display text-[1.2rem] font-light text-[#12372A] mb-3">
                  Built for Performance
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Speed, responsiveness, accessibility, and technical optimisation are built into every project to ensure an exceptional user experience.
                </p>
              </div>
            </Reveal>

            {/* Card 5 */}
            <Reveal>
              <div className="bg-white p-8 rounded-sm h-full flex flex-col border border-[#1C1C1C]/10">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[#12372A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="font-serif-display text-[1.2rem] font-light text-[#12372A] mb-3">
                  Designed Around Your Product
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Every technology website is completely bespoke, designed to reflect your product, branding, target audience, and business objectives.
                </p>
              </div>
            </Reveal>

            {/* Card 6 */}
            <Reveal>
              <div className="bg-white p-8 rounded-sm h-full flex flex-col border border-[#1C1C1C]/10">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[#12372A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="font-serif-display text-[1.2rem] font-light text-[#12372A] mb-3">
                  CRM & API Integrations
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  We integrate CRM systems, marketing platforms, and custom APIs to ensure your website connects seamlessly with your business tools.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light text-center mb-16 text-[#12372A]">
            Features Included
          </h2>

          <p className="text-center text-[0.95rem] font-light text-[#1C1C1C] mb-12 max-w-2xl mx-auto">
            Your technology website can include all of these features and more.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Product showcase pages",
              "SaaS landing pages",
              "Software feature pages",
              "Interactive product demonstrations",
              "Pricing comparison tables",
              "Knowledge base integration",
              "API documentation pages",
              "Customer success stories",
              "Case studies",
              "Resource centre",
              "Whitepaper downloads",
              "Blog & technical articles",
              "Webinar registration",
              "Live chat integration",
              "CRM integration",
            ].map((feature, idx) => (
              <Reveal key={idx}>
                <div className="flex gap-4">
                  <svg className="w-5 h-5 text-[#12372A] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[0.95rem] font-light text-[#1C1C1C]">{feature}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* We Work With Section */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light text-center mb-16 text-[#12372A]">
            We Work With
          </h2>

          <p className="text-center text-[0.95rem] font-light text-[#1C1C1C] mb-12 max-w-2xl mx-auto">
            Our technology web design services are ideal for a wide range of technology companies and startups.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "SaaS Companies",
              "Software Development Firms",
              "AI Startups",
              "Machine Learning Companies",
              "Cybersecurity Providers",
              "Cloud Service Providers",
              "IT Consultancies",
              "Managed Service Providers (MSPs)",
              "App Development Companies",
              "DevOps Consultancies",
              "Data Analytics Firms",
              "FinTech Companies",
              "Blockchain Businesses",
              "EdTech Companies",
              "HealthTech Startups",
              "PropTech Companies",
              "Enterprise Software Providers",
              "Digital Product Companies",
            ].map((type, idx) => (
              <Reveal key={idx}>
                <div className="flex gap-4">
                  <span className="text-[#12372A] font-light">•</span>
                  <span className="text-[0.95rem] font-light text-[#1C1C1C]">{type}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Market Need / Why Your Technology Business Needs a Professional Website */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-center">
            {/* Left: Image with Gold Accents */}
            <div className="relative">
              <img
                src="/images/industries/technology-why.jpg"
                alt="Technology Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light mb-6 text-[#12372A]">
                Why Your Technology Business Needs a Professional Website
              </h2>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                Technology buyers expect speed, clarity, and credibility. A well-designed website helps explain complex solutions, demonstrate product value, and establish trust with decision-makers before the first conversation takes place. Whether you're selling software subscriptions, enterprise solutions, or professional IT services, your website should guide visitors through a seamless journey from discovery to conversion.
              </p>
              <p className="text-[0.95rem] leading-relaxed font-light text-[#1C1C1C]">
                At <strong>Crea Web</strong>, we combine modern design, technical expertise, and SEO-driven development to create websites that perform as well as they look. Every project is built for scalability, ensuring your website can evolve alongside your products, services, and business goals. The result is a digital platform that attracts qualified traffic, supports sales, and positions your business as a leader in the technology sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Crea Web - 9 Benefits */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light text-center mb-16 text-[#12372A]">
            Why Choose Crea Web?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Bespoke Technology Website Design",
              "UK Web Design Agency",
              "SEO-Friendly Development",
              "Lightning-Fast Performance",
              "Mobile-First Design",
              "SaaS & Software Specialists",
              "CRM & API Integrations",
              "Long-Term Technical Support",
              "Built to Scale With Your Business",
            ].map((benefit, idx) => (
              <Reveal key={idx}>
                <div className="flex gap-4">
                  <svg className="w-5 h-5 text-[#12372A] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[0.95rem] font-light text-[#1C1C1C]">{benefit}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#12372A] text-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light text-center mb-4 text-[#F6F1E8]">
            Technology Website Design Pricing
          </h2>
          <p className="text-center text-[0.95rem] font-light mb-16 max-w-2xl mx-auto">
            Choose the package that suits your technology business.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Foundation Tier */}
            <Reveal>
              <div className="bg-[#12372A] border border-[#B08D57] p-8 rounded-sm h-full flex flex-col">
                <div className="mb-6">
                  <p className="text-[#B08D57] text-[0.75rem] font-light uppercase tracking-widest mb-2">Foundation</p>
                  <p className="text-[2.5rem] font-light text-[#B08D57] mb-1">£2,500</p>
                  <p className="text-[0.9rem] font-light text-[#F6F1E8]/70">One-time project fee</p>
                </div>
                <div className="space-y-3 flex-grow mb-8">
                  {["Up to 10 pages", "Responsive design", "Basic SEO setup", "Contact forms", "Mobile optimized"].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-[0.9rem] font-light text-[#F6F1E8]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="w-full py-3 bg-[#12372A] text-[#F6F1E8] border border-[#B08D57] rounded-xs font-light hover:bg-[#1C1C1C] transition text-center">
                  Get Started
                </Link>
              </div>
            </Reveal>

            {/* Professional Tier - Featured */}
            <Reveal>
              <div className="bg-[#B08D57] text-[#12372A] p-8 rounded-sm h-full flex flex-col relative">
                <div className="absolute top-4 right-4 bg-[#12372A] text-[#B08D57] px-3 py-1 rounded-sm text-[0.7rem] font-light uppercase tracking-widest">
                  Recommended
                </div>
                <div className="mb-6">
                  <p className="text-[#12372A] text-[0.75rem] font-light uppercase tracking-widest mb-2">Professional</p>
                  <p className="text-[2.5rem] font-light text-[#12372A] mb-1">£7,500</p>
                  <p className="text-[0.9rem] font-light text-[#12372A]/70">One-time project fee</p>
                </div>
                <div className="space-y-3 flex-grow mb-8">
                  {["Up to 20 pages", "SaaS landing pages", "Product showcase", "CRM integration", "Advanced SEO", "Analytics setup"].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#12372A] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-[0.9rem] font-light text-[#12372A]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="w-full py-3 bg-[#12372A] text-[#B08D57] rounded-xs font-light hover:bg-[#1C1C1C] hover:text-[#B08D57] transition text-center">
                  Get Started
                </Link>
              </div>
            </Reveal>

            {/* Enterprise Tier */}
            <Reveal>
              <div className="bg-[#12372A] border border-[#B08D57] p-8 rounded-sm h-full flex flex-col">
                <div className="mb-6">
                  <p className="text-[#B08D57] text-[0.75rem] font-light uppercase tracking-widest mb-2">Enterprise</p>
                  <p className="text-[2.5rem] font-light text-[#B08D57] mb-1">£15,000</p>
                  <p className="text-[0.9rem] font-light text-[#F6F1E8]/70">One-time project fee</p>
                </div>
                <div className="space-y-3 flex-grow mb-8">
                  {["Unlimited pages", "Custom development", "API integrations", "Portal development", "Advanced integrations", "Custom features"].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-[0.9rem] font-light text-[#F6F1E8]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="w-full py-3 bg-[#12372A] text-[#F6F1E8] border border-[#B08D57] rounded-xs font-light hover:bg-[#1C1C1C] transition text-center">
                  Get Started
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light text-center mb-16 text-[#12372A]">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How much does a technology website cost?",
                a: "Every technology website is custom-built around your business requirements. Pricing depends on the complexity, integrations, and functionality required.",
              },
              {
                q: "Do you build websites for SaaS companies?",
                a: "Yes. We design high-converting SaaS websites that showcase features, pricing, integrations, and customer success stories while encouraging demo requests and free trial sign-ups.",
              },
              {
                q: "Can you integrate our CRM or marketing platform?",
                a: "Absolutely. We can integrate popular platforms including HubSpot, Salesforce, Zoho CRM, Mailchimp, ActiveCampaign, and many others.",
              },
              {
                q: "Can you build custom functionality?",
                a: "Yes. In addition to website design, we develop bespoke web applications, client portals, dashboards, API integrations, and custom business systems tailored to your needs.",
              },
              {
                q: "Are your websites SEO-friendly?",
                a: "Yes. Every technology website includes technical SEO best practices, with optional ongoing SEO services available to improve rankings over time.",
              },
              {
                q: "Will the website be fast and mobile-friendly?",
                a: "Absolutely. Every project is optimised for Core Web Vitals, responsive design, and fast loading speeds across all devices.",
              },
              {
                q: "Can you redesign our existing software website?",
                a: "Yes. We modernise outdated technology websites while improving performance, usability, branding, and lead generation.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes. We offer maintenance, performance monitoring, security updates, hosting support, and continuous improvements after launch.",
              },
            ].map((faq, idx) => (
              <Reveal key={idx}>
                <div className="bg-white border border-[#1C1C1C]/10 p-6 rounded-sm h-full flex flex-col">
                  <h3 className="font-serif-display text-[1rem] text-[#12372A] mb-3 font-light">
                    {faq.q}
                  </h3>
                  <p className="text-[0.9rem] text-[#1C1C1C] font-light flex-grow">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#12372A] text-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light mb-6">
            Build a Website That <span className="italic text-[#B08D57]">Reflects Your Innovation</span>
          </h2>
          <p className="text-[1rem] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            Whether you're launching a SaaS platform, scaling a technology startup, or modernising an established software company, your website should inspire confidence and drive growth. Crea Web designs bespoke technology websites that combine exceptional design, technical performance, and measurable business results.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#B08D57] text-[#12372A] font-light rounded-xs hover:bg-opacity-90 transition"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
