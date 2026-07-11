import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Food & Drink Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke food and drink websites for restaurants, cafés, bakeries, breweries, food brands, and beverage companies. SEO-friendly, responsive, and built to grow your business.",
  alternates: { canonical: "https://creaweb.co.uk/industries/food-drink" },
  openGraph: {
    title: "Food & Drink Web Design UK | Crea Web",
    description: "Crea Web designs bespoke food and drink websites for restaurants, cafés, bakeries, breweries, food brands, and beverage companies. SEO-friendly, responsive, and built to grow your business.",
    url: "https://creaweb.co.uk/industries/food-drink",
    type: "website",
  },
};

export default function FoodDrinkWebDesignPage() {
  const faqs = [
    {
      q: "How much does a food and drink website cost?",
      a: "Every food and drink website is tailored to your business needs. Pricing depends on functionality, online ordering systems, integrations, and project scope. Contact us for a personalised quotation.",
    },
    {
      q: "Can you integrate online ordering systems?",
      a: "Yes. We can integrate online ordering platforms, takeaway systems, delivery integrations, and custom ordering solutions tailored to your business.",
    },
    {
      q: "Do you design restaurant and café websites?",
      a: "Absolutely. We work with restaurants, cafés, bakeries, pizzerias, breweries, food manufacturers, and beverage brands across the UK.",
    },
    {
      q: "Can customers book tables online?",
      a: "Yes. We can integrate table reservation systems with your website to streamline booking management.",
    },
    {
      q: "Can you build an e-commerce shop for food products?",
      a: "Yes. We develop secure e-commerce websites for selling food and drink products online, with payment processing and inventory management.",
    },
    {
      q: "Are your websites mobile-friendly?",
      a: "Absolutely. Every website is fully responsive and optimised for smartphones, tablets, and desktop devices.",
    },
    {
      q: "Do you provide SEO for food and drink businesses?",
      a: "Yes. Every website includes technical SEO foundations, with optional ongoing SEO services to help improve search visibility.",
    },
    {
      q: "Do you provide ongoing website maintenance?",
      a: "Yes. We offer flexible website maintenance and support plans to keep your website secure, updated, and performing at its best.",
    },
  ];

  const reasons = [
    {
      title: "Showcase Your Brand Beautifully",
      description: "Professional photography, engaging menu layouts, and thoughtful design help communicate the quality of your food, drinks, and customer experience.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
      ),
    },
    {
      title: "Increase Orders & Bookings",
      description: "Whether you take online orders, table reservations, or wholesale enquiries, we design websites that make it easy for customers to take action.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      ),
    },
    {
      title: "SEO Built In",
      description: "Our websites are optimised to help food and drink businesses rank for searches like Restaurant London, Café Manchester, Bakery Birmingham, and local food service searches.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      ),
    },
    {
      title: "Fast & Secure",
      description: "Performance and reliability matter in hospitality. We build websites that load quickly, follow modern security practices, and deliver dependable customer experiences.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ),
    },
    {
      title: "Designed Around Your Business",
      description: "No templates. Every food and drink website is designed specifically around your brand, products, customer journey, and long-term goals.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      ),
    },
    {
      title: "Ongoing Support & Partnership",
      description: "We don't disappear after launch. Ongoing maintenance, updates, and strategic guidance help your business stay ahead as you grow.",
      icon: (
        <svg className="w-8 h-8 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      ),
    },
  ];

  const features = [
    "Interactive food and drink menus",
    "Online ordering integration",
    "Table reservation systems",
    "Product catalogue with filtering",
    "E-commerce functionality",
    "Delivery platform integration",
    "Event booking capabilities",
    "Loyalty programme integration",
    "High-quality image galleries",
    "Customer reviews & testimonials",
    "Store locator with maps",
    "Recipe and blog section",
    "Wholesale enquiry forms",
    "Gift card sales integration",
    "Newsletter integration",
  ];

  const industries = [
    "Restaurants",
    "Cafés",
    "Coffee Shops",
    "Bakeries",
    "Pizzerias",
    "Takeaway Businesses",
    "Fine Dining Establishments",
    "Fast Casual Restaurants",
    "Food Trucks",
    "Catering Companies",
    "Breweries",
    "Distilleries",
    "Wineries",
    "Beverage Brands",
  ];

  const benefits = [
    "Bespoke Food & Drink Website Design",
    "UK-Based Web Design Agency",
    "SEO-Friendly Development",
    "Mobile-First Design",
    "Online Ordering Integration",
    "Fast Loading Websites",
    "E-Commerce Functionality",
    "Long-Term Website Support",
    "Designed to Increase Orders & Enquiries",
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
                    Food & Drink
                  </span>
                </div>
                <h1
                  className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                >
                  Food & Drink Web Design for <em className="text-[#B08D57]">Thriving Food Businesses</em>
                </h1>
                <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[52ch]">
                  Your website is often a customer's first taste of your brand. At <strong className="font-normal">Crea Web</strong>, we specialise in <strong className="font-normal">Food & Drink Web Design</strong> that combines stunning visuals, seamless functionality, and strategic design to help restaurants, cafés, breweries, food manufacturers, and beverage brands attract customers, increase orders, and build lasting brand loyalty.
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
              <div className="hidden md:block md:col-span-1 relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-[#B08D57]/60 z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-[#B08D57]/60 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/industries/foods-hero.jpg"
                  alt="Food & Drink Web Design UK"
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
                  About Food & Drink Web Design
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
                      src="/images/industries/foods-about.jpg"
                      alt="Food & Drink Web Design UK"
                      className="w-full h-full object-cover aspect-[3/4]"
                    />
                  </div>
                </div>

                {/* Right content */}
                <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                  <h2 className="font-serif-display text-[#1C1C1C] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                    Websites That <em className="text-[#B08D57]">Drive Orders & Revenue</em>
                  </h2>
                  <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                    Before customers taste your food or enjoy your drinks, they experience your brand online. A professionally designed website showcases your menu, communicates your brand personality, and makes it effortless for visitors to order, book, or discover your business. At <strong className="font-normal">Crea Web</strong>, we create bespoke food and drink websites that blend stunning visuals with intuitive functionality to help businesses stand out and thrive.
                  </p>
                  <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                    Every food and beverage business is unique. A family-run bakery has different goals from a national food manufacturer, while a craft brewery has different needs from a fine dining restaurant. That's why every website we design is custom-built around your brand, products, customer journey, and business model. From immersive photography and menu layouts to online ordering and multi-location management, every element is engineered to attract customers and increase revenue.
                  </p>
                  <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light">
                    As a trusted <strong className="font-normal">UK web design agency</strong>, we understand that speed, mobile optimisation, and search visibility directly impact customer behaviour. Every website we build is responsive, SEO-friendly, and performance-optimised, helping food and drink businesses reach more customers, strengthen their brand, and grow with confidence.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Why Food & Drink Businesses Choose Crea Web */}
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
                    Why Food & Drink Businesses <em className="text-[#B08D57]">Choose Crea Web</em>
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

        {/* Features Section */}
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
                Food & Drink Website <em className="text-[#B08D57]">Features</em>
              </h2>

              <p className="text-[#7C746A] text-[0.95rem] leading-[1.7] mb-10 max-w-[65ch] font-sans font-light">
                Every food and drink website can include:
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
                    Why Your Food & Drink Business Needs a <em className="text-[#B08D57]">Modern Website</em>
                  </h2>

                  <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                    Today's customers expect more than basic information—they expect to see beautiful food photos, browse menus, place orders, and book tables online. A professionally designed website makes it effortless for potential customers to discover your business, understand your offerings, and take action. An outdated or slow website can drive customers to your competitors, while a modern website builds credibility and increases sales.
                  </p>
                  <p className="text-[#1C1C1C] text-[1rem] leading-[1.82] font-sans font-light">
                    At Crea Web, we combine creative design with technical excellence to create food and drink websites that look exceptional and perform effectively in search engines. Every website is developed with SEO best practices, mobile-first design, fast loading times, and intuitive navigation, helping your food and drink business reach more customers while delivering an outstanding digital experience.
                  </p>
                </div>

                {/* Right image */}
                <div className="hidden lg:block lg:col-span-5 relative">
                  <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-[#B08D57]/60 z-10" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-[#B08D57]/60 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/industries/foods-why.jpg"
                    alt="Food & Drink Web Design UK"
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
                  Food & Drink Website <em className="text-[#B08D57]">Pricing</em>
                </h2>
                <p className="text-[#7C746A] text-[1rem] leading-[1.82] font-sans font-light max-w-[70ch]">
                  Transparent, bespoke pricing for food and drink businesses of all sizes. Every package is tailored to your needs with no hidden fees.
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
                    {["Up to 8 pages", "Menu display pages", "Basic online ordering", "Mobile responsive", "Contact forms"].map((feature, i) => (
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
                    {["Up to 15 pages", "Table reservation system", "Advanced online ordering", "E-commerce ready", "Analytics integration", "Blog & news section"].map((feature, i) => (
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
                    {["Unlimited pages", "Multi-location support", "Custom integrations", "Full e-commerce", "Advanced analytics", "Custom features"].map((feature, i) => (
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
                    Serve an Exceptional Online <em className="text-[#B08D57]">Customer Experience</em>
                  </h2>
                  <p className="text-[#F6F1E8]/80 text-[1rem] leading-[1.82] font-sans font-light mb-6">
                    Whether you're opening a new restaurant, launching a food brand online, or expanding your beverage business, <strong className="font-normal">Crea Web</strong> designs beautiful, high-performing websites that attract customers and drive orders.
                  </p>
                  <p className="text-[#F6F1E8] text-[1rem] leading-[1.82] font-sans font-light">
                    <strong className="font-normal">Ready to transform your online presence? Get in touch today for a free consultation.</strong>
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
