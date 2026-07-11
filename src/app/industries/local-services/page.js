import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Local Services Web Design UK | Crea Web",
  },
  description:
    "Crea Web creates bespoke local services websites for tradespeople, contractors, home services, and local businesses. SEO-friendly websites designed to generate more enquiries.",
  alternates: { canonical: "https://creaweb.co.uk/industries/local-services" },
  openGraph: {
    title: "Local Services Web Design UK | Crea Web",
    description: "Crea Web creates bespoke local services websites for tradespeople, contractors, home services, and local businesses. SEO-friendly websites designed to generate more enquiries.",
    url: "https://creaweb.co.uk/industries/local-services",
    type: "website",
  },
};

export default function LocalServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#12372A] text-[#F6F1E8] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Gold Accent Line */}
          <div className="h-1 w-16 bg-[#B08D57] mb-8"></div>

          <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="inline-block text-[#B08D57] text-sm tracking-widest font-serif-display mb-6">
                LOCAL SERVICES
              </span>
              <h1 className="font-serif-display text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
                Local Services Web Design That <span className="italic text-[#B08D57]">Brings You More Customers</span>
              </h1>
              <p className="text-[#F6F1E8] text-[clamp(0.95rem,2vw,1rem)] leading-relaxed font-light mb-8 max-w-lg">
                Your customers are searching online for businesses like yours every day. At <strong>Crea Web</strong>, we specialise in <strong>Local Services Web Design</strong>, creating modern, SEO-friendly websites that help tradespeople, contractors, home service providers, and local businesses attract more enquiries, build trust, and grow their customer base across the UK.
              </p>
              <Link href="/contact">
                <button className="bg-[#B08D57] text-[#12372A] px-8 py-3 font-serif-display text-sm tracking-wide hover:opacity-90">
                  GET STARTED
                </button>
              </Link>
            </div>

            {/* Right: Image */}
            <div className="hidden md:block">
              <img
                src="/images/industries/local-services-hero.jpg"
                alt="Local Services Web Design UK"
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
                src="/images/industries/local-services-about.jpg"
                alt="Local Services Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.75rem,4vw,2.5rem)] text-[#12372A] mb-6 leading-tight">
                Websites Built to Help Local Businesses Grow
              </h2>
              <div className="space-y-5 text-[#1C1C1C] text-[0.95rem] font-light leading-relaxed">
                <p>
                  For local service businesses, a website is much more than an online brochure—it's one of your most valuable marketing tools. Whether someone needs an emergency plumber, a trusted electrician, a reliable cleaner, or a landscaping company, they often begin their search online. At <strong>Crea Web</strong>, we create bespoke websites that help local businesses make a strong first impression and convert visitors into paying customers.
                </p>
                <p>
                  Every local business is different, which is why every website we design is tailored to your services, service areas, and business goals. We create fast, responsive, and SEO-friendly websites that clearly communicate what you do, where you work, and why customers should choose you. From service pages and online quote requests to customer testimonials and location-specific content, every element is designed to support lead generation.
                </p>
                <p>
                  As a trusted <strong>UK web design agency</strong>, we understand the importance of local visibility. Our websites are structured to help businesses rank for local searches, improve user experience, and generate more enquiries from the communities they serve. Whether you're a sole trader or an established local company, we build websites that support long-term business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Businesses Choose Crea Web - 6 Reason Cards */}
      <section className="bg-[#F6F1E8] py-24 md:py-32 border-t border-[#12372A]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-serif-display text-[clamp(1.75rem,4vw,2.5rem)] text-[#12372A] mb-16 leading-tight">
              Why Local Businesses Choose <span className="italic text-[#B08D57]">Crea Web</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Generate More Local Enquiries",
                description: "Every website is designed with clear calls-to-action, contact forms, and quote request features that encourage visitors to get in touch.",
              },
              {
                title: "Improve Local Search Visibility",
                description: "Our websites are optimised to help businesses rank for local searches. Whether plumber, electrician, or roofer, we build visibility in your service areas.",
              },
              {
                title: "Build Trust with New Customers",
                description: "Professional design, customer testimonials, service guarantees, and clear contact information help establish credibility from the first visit.",
              },
              {
                title: "Mobile-First Performance",
                description: "Many local customers search from their smartphones while on the move. Every website is fully responsive and optimised for speed.",
              },
              {
                title: "Designed Around Your Business",
                description: "No templates. Every website is designed specifically around your services, branding, service areas, and business objectives.",
              },
              {
                title: "Built for Lead Generation",
                description: "From appointment booking to location pages and service galleries, every feature supports turning visitors into paying customers.",
              },
            ].map((card, idx) => (
              <Reveal key={idx}>
                <div className="bg-white p-8 rounded-sm border border-[#12372A]/10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-5">
                    {idx === 0 && (
                      <svg
                        className="w-8 h-8 text-[#12372A]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg
                        className="w-8 h-8 text-[#12372A]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg
                        className="w-8 h-8 text-[#12372A]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-13h-2v6h2z" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg
                        className="w-8 h-8 text-[#12372A]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                      </svg>
                    )}
                    {idx === 4 && (
                      <svg
                        className="w-8 h-8 text-[#12372A]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2c5.33 4.55 8 8.48 8 11.8 0 4.98-2.67 8.2-8 8.2s-8-3.22-8-8.2c0-3.32 2.67-7.25 8-11.8m0-2C6.48 2 2 8 2 13.8 2 19.92 6.44 24 12 24s10-4.08 10-10.2C22 8 17.52 2 12 2z" />
                      </svg>
                    )}
                    {idx === 5 && (
                      <svg
                        className="w-8 h-8 text-[#12372A]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-serif-display text-[#12372A] text-[1.1rem] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#1C1C1C] text-[0.9rem] font-light flex-grow">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F6F1E8] py-24 md:py-32 border-t border-[#12372A]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-serif-display text-[clamp(1.75rem,4vw,2.5rem)] text-[#12372A] mb-16 leading-tight">
              Features Included in Your <span className="italic text-[#B08D57]">Local Services Website</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-4">
            {[
              "Individual service pages",
              "Location-specific landing pages",
              "Online quote request forms",
              "Appointment booking",
              "Google Maps integration",
              "Customer testimonials",
              "Before & after project galleries",
              "Portfolio section",
              "Emergency contact information",
              "Click-to-call functionality",
              "Service area maps",
              "FAQs section",
              "Blog & advice centre",
              "GDPR-compliant forms",
              "SSL security & live chat",
            ].map((feature, idx) => (
              <Reveal key={idx}>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#12372A] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <p className="text-[#1C1C1C] text-[0.95rem] font-light">{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* We Work With Section */}
      <section className="bg-[#F6F1E8] py-24 md:py-32 border-t border-[#12372A]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-serif-display text-[clamp(1.75rem,4vw,2.5rem)] text-[#12372A] mb-16 leading-tight">
              We Work With <span className="italic text-[#B08D57]">Local Service Businesses</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-4">
            {[
              "Plumbers",
              "Electricians",
              "Builders",
              "Roofers",
              "Landscapers",
              "Cleaning Companies",
              "HVAC Contractors",
              "Carpenters",
              "Locksmiths",
              "Pest Control Companies",
              "Painters & Decorators",
              "Removal Companies",
              "Garden Services",
              "Flooring Specialists",
              "Window & Door Installers",
              "Appliance Repair Businesses",
              "Home Improvement Companies",
              "Mobile Mechanics",
              "Handymen",
              "Local Professional Service Providers",
            ].map((type, idx) => (
              <Reveal key={idx}>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#12372A] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#1C1C1C] text-[0.95rem] font-light">{type}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Market Need Section */}
      <section className="bg-[#F6F1E8] py-24 md:py-32 border-t border-[#12372A]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-center">
            {/* Left: Image with Gold Accents */}
            <div className="relative">
              <img
                src="/images/industries/local-services-why.jpg"
                alt="Local Services Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.75rem,4vw,2.5rem)] text-[#12372A] mb-6 leading-tight">
                Why Your Local Business Needs a <span className="italic text-[#B08D57]">Professional Website</span>
              </h2>
              <div className="space-y-5 text-[#1C1C1C] text-[0.95rem] font-light leading-relaxed">
                <p>
                  Consumers increasingly expect to find reliable information online before choosing a local service provider. A professionally designed website helps your business stand out, communicate your expertise, and make it easy for customers to request a quote or book your services. An outdated website can create uncertainty, while a modern website reinforces professionalism and encourages confidence.
                </p>
                <p>
                  At <strong>Crea Web</strong>, we combine thoughtful design with SEO-focused development to create websites that help local businesses generate more enquiries. Every website is optimised for speed, mobile usability, and local search visibility, helping your business reach more customers in the areas you serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Crea Web - Benefits */}
      <section className="bg-[#F6F1E8] py-24 md:py-32 border-t border-[#12372A]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-serif-display text-[clamp(1.75rem,4vw,2.5rem)] text-[#12372A] mb-16 leading-tight">
              Why Choose <span className="italic text-[#B08D57]">Crea Web</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-4">
            {[
              "Bespoke Local Business Websites",
              "UK Web Design Agency",
              "SEO-Friendly Development",
              "Mobile-First Design",
              "Fast Loading Websites",
              "Conversion-Focused Layouts",
              "Local SEO Foundations",
              "Ongoing Website Support",
              "Designed to Generate More Leads",
            ].map((benefit, idx) => (
              <Reveal key={idx}>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#12372A] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <p className="text-[#1C1C1C] text-[0.95rem] font-light">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#12372A] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-serif-display text-[clamp(1.75rem,4vw,2.5rem)] text-[#F6F1E8] mb-4 text-center">
              Local Services Website Design Pricing
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {/* Foundation */}
            <Reveal>
              <div className="bg-[#12372A] border border-[#B08D57] p-8 rounded-sm flex flex-col h-full">
                <h3 className="font-serif-display text-[#F6F1E8] text-[1.5rem] mb-2">
                  Foundation
                </h3>
                <p className="text-[#B08D57] text-[0.9rem] mb-6">Essential for getting started</p>
                <div className="mb-8">
                  <span className="font-serif-display text-[#F6F1E8] text-[2.5rem]">£2,500</span>
                  <p className="text-[#F6F1E8] text-[0.9rem] mt-2">8 pages, fully responsive</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="text-[#B08D57] mt-0.5">✓</span> Homepage & service pages
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="text-[#B08D57] mt-0.5">✓</span> Contact form
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="text-[#B08D57] mt-0.5">✓</span> Mobile optimised
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="text-[#B08D57] mt-0.5">✓</span> Basic SEO setup
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <button className="text-[#F6F1E8] bg-[#12372A] border border-[#B08D57] px-8 py-3 font-serif-display text-sm tracking-wide hover:bg-[#B08D57] hover:text-[#12372A]">
                      GET STARTED
                    </button>
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Professional - Featured */}
            <Reveal>
              <div className="bg-[#B08D57] p-8 rounded-sm flex flex-col h-full relative">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-[#12372A] text-[#B08D57] px-4 py-1 text-[0.75rem] font-serif-display tracking-widest">
                    RECOMMENDED
                  </span>
                </div>
                <h3 className="font-serif-display text-[#F6F1E8] text-[1.5rem] mb-2 mt-2">
                  Professional
                </h3>
                <p className="text-[#F6F1E8] text-[0.9rem] mb-6 opacity-80">Best for growing businesses</p>
                <div className="mb-8">
                  <span className="font-serif-display text-[#F6F1E8] text-[2.5rem]">£7,500</span>
                  <p className="text-[#F6F1E8] text-[0.9rem] mt-2 opacity-80">15 pages, advanced features</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="mt-0.5">✓</span> Everything in Foundation
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="mt-0.5">✓</span> Quote request forms
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="mt-0.5">✓</span> Location pages
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="mt-0.5">✓</span> Advanced SEO
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="mt-0.5">✓</span> Google Maps integration
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <button className="text-[#F6F1E8] bg-[#12372A] px-8 py-3 font-serif-display text-sm tracking-wide hover:opacity-90">
                      GET STARTED
                    </button>
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Enterprise */}
            <Reveal>
              <div className="bg-[#12372A] border border-[#B08D57] p-8 rounded-sm flex flex-col h-full">
                <h3 className="font-serif-display text-[#F6F1E8] text-[1.5rem] mb-2">
                  Enterprise
                </h3>
                <p className="text-[#B08D57] text-[0.9rem] mb-6">Fully custom solution</p>
                <div className="mb-8">
                  <span className="font-serif-display text-[#F6F1E8] text-[2.5rem]">£15,000</span>
                  <p className="text-[#F6F1E8] text-[0.9rem] mt-2">Unlimited pages, custom features</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="text-[#B08D57] mt-0.5">✓</span> Everything in Professional
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="text-[#B08D57] mt-0.5">✓</span> Unlimited pages
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="text-[#B08D57] mt-0.5">✓</span> Custom integrations
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="text-[#B08D57] mt-0.5">✓</span> Booking system
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1E8] text-[0.9rem]">
                    <span className="text-[#B08D57] mt-0.5">✓</span> 12 months support
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <button className="text-[#F6F1E8] bg-[#12372A] border border-[#B08D57] px-8 py-3 font-serif-display text-sm tracking-wide hover:bg-[#B08D57] hover:text-[#12372A]">
                      GET STARTED
                    </button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-serif-display text-[clamp(1.75rem,4vw,2.5rem)] text-[#12372A] mb-16 leading-tight">
              Frequently Asked <span className="italic text-[#B08D57]">Questions</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How much does a local business website cost?",
                a: "Every project is tailored to your business requirements. Pricing depends on the size of the website, functionality, and any custom features required.",
              },
              {
                q: "Can you redesign my existing website?",
                a: "Yes. We modernise outdated local business websites while improving design, performance, SEO, and user experience.",
              },
              {
                q: "Will my website help me rank locally on Google?",
                a: "Every website is built with strong technical SEO and local SEO foundations. We also offer ongoing SEO services to help improve rankings over time.",
              },
              {
                q: "Can customers request quotes online?",
                a: "Absolutely. We can integrate quote request forms, booking forms, and click-to-call functionality to make contacting your business as easy as possible.",
              },
              {
                q: "Are your websites mobile-friendly?",
                a: "Yes. Every website is fully responsive and optimised for smartphones, tablets, and desktop devices.",
              },
              {
                q: "Can you create pages for multiple service areas?",
                a: "Yes. We can build dedicated location pages to help improve your visibility across different towns, cities, or regions.",
              },
              {
                q: "Do you provide ongoing website maintenance?",
                a: "Yes. We offer maintenance, security updates, performance monitoring, and technical support after your website goes live.",
              },
            ].map((faq, idx) => (
              <Reveal key={idx}>
                <div className="bg-white border border-[#1C1C1C]/10 p-6 rounded-sm h-full flex flex-col">
                  <h3 className="font-serif-display text-[#12372A] text-[1rem] mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-[#1C1C1C] text-[0.9rem] font-light flex-grow">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#12372A] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif-display text-[clamp(1.75rem,4vw,2.5rem)] text-[#F6F1E8] mb-6">
            Grow Your Local Business with a Website That <span className="italic text-[#B08D57]">Works</span>
          </h2>
          <p className="text-[#F6F1E8] text-[clamp(0.95rem,2vw,1rem)] font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you're an independent tradesperson, a growing service provider, or an established local business, Crea Web creates bespoke websites that help you attract more customers, generate more enquiries, and grow your business with confidence.
          </p>
          <Link href="/contact">
            <button className="bg-[#B08D57] text-[#12372A] px-8 py-3 font-serif-display text-sm tracking-wide hover:opacity-90">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
