import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "E-Commerce Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke e-commerce websites for UK businesses. Shopify, WooCommerce, and custom online stores built to increase sales, improve user experience, and support growth.",
  alternates: { canonical: "https://creaweb.co.uk/industries/ecommerce" },
  openGraph: {
    title: "E-Commerce Web Design UK | Crea Web",
    description: "Crea Web designs bespoke e-commerce websites for UK businesses. Shopify, WooCommerce, and custom online stores built to increase sales, improve user experience, and support growth.",
    url: "https://creaweb.co.uk/industries/ecommerce",
    type: "website",
  },
};

export default function EcommercePage() {
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
              <p className="text-[#B08D57] font-light text-sm tracking-widest uppercase mb-6">E-COMMERCE</p>
              <h1 className="font-serif-display text-[clamp(2rem,6vw,3.5rem)] leading-tight font-light mb-6">
                E-Commerce Web Design That <span className="italic text-[#B08D57]">Turns Visitors Into Customers</span>
              </h1>
              <p className="text-[1rem] leading-relaxed font-light mb-8 max-w-lg">
                Your online store should do more than look impressive—it should make shopping effortless and drive sales. At <strong>Crea Web</strong>, we specialise in <strong>E-Commerce Web Design</strong>, creating fast, secure, and conversion-focused online stores for retailers, brands, manufacturers, and growing businesses across the UK. Every website is designed to maximise performance, improve customer experience, and increase revenue.
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
                src="/images/industries/ecommerce-hero.jpg"
                alt="E-Commerce Web Design UK"
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
                src="/images/industries/ecommerce-about.jpg"
                alt="E-Commerce Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light mb-6 text-[#12372A]">
                Online Stores Designed to Sell More
              </h2>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                Your website is your most valuable sales representative, working around the clock to showcase products, answer customer questions, and process orders. A successful e-commerce website must combine attractive design with intuitive navigation, fast performance, and a frictionless checkout experience. At <strong>Crea Web</strong>, we build bespoke online stores that help businesses convert more visitors into loyal customers.
              </p>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                No two online retailers are the same. Whether you're launching your first online shop, expanding an established retail brand, or migrating from another platform, every website we build is tailored to your products, customers, and growth strategy. We design scalable e-commerce solutions that are easy to manage while providing customers with an enjoyable shopping experience from homepage to checkout.
              </p>
              <p className="text-[0.95rem] leading-relaxed font-light text-[#1C1C1C]">
                As a trusted <strong>UK web design agency</strong>, we understand that every click matters. From product discovery and search functionality to secure payments and mobile optimisation, every detail is carefully considered to increase conversions, reduce abandoned carts, and encourage repeat purchases. Our goal is simple: to create an online store that helps your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Crea Web - 6 Reason Cards */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light text-center mb-16 text-[#12372A]">
            Why Businesses Choose Crea Web for E-Commerce
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
                  Designed to Increase Sales
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Every page is strategically designed to guide shoppers toward completing a purchase through clear navigation, compelling product pages, and streamlined checkout experiences.
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
                  Optimised for Search Engines
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Our e-commerce websites are built using technical SEO best practices to improve visibility for searches such as product categories, brand names, and shopping queries.
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
                  Fast & Mobile-First
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  With most online shopping taking place on mobile devices, every store we build delivers a seamless experience across smartphones, tablets, and desktops.
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
                  Scalable for Growth
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Whether you sell 20 products or 20,000, your website is built to grow with your business without compromising performance or user experience.
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
                  Tailored Around Your Brand
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  No generic themes or cookie-cutter layouts. Every online store is custom-designed to reflect your brand identity and deliver a memorable shopping experience.
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
                  Secure Payment Processing
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Every store includes secure payment gateway integration, SSL encryption, and compliance with PCI DSS standards to protect your customers and grow trust.
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
            Your e-commerce website can include all of these features and more.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Shopify or WooCommerce development",
              "Custom e-commerce development",
              "Product catalogue management",
              "Product search & filtering",
              "Secure payment gateway integration",
              "Guest checkout",
              "Customer account portal",
              "Wishlist functionality",
              "Product reviews",
              "Related products",
              "Inventory management integration",
              "Discount & coupon system",
              "Shipping calculator",
              "Abandoned cart recovery",
              "Multi-currency support",
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
            Our e-commerce web design services are ideal for a wide range of online retailers.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Fashion Brands",
              "Beauty & Cosmetics",
              "Furniture Retailers",
              "Electronics Stores",
              "Jewellery Brands",
              "Luxury Goods",
              "Homeware Businesses",
              "Food & Beverage Brands",
              "Pet Supply Stores",
              "Sports & Fitness Retailers",
              "Health & Wellness Brands",
              "Subscription Businesses",
              "Manufacturers",
              "Wholesale Suppliers",
              "DTC (Direct-to-Consumer) Brands",
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

      {/* Market Need / Why Your Business Needs a High-Performing Online Store */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-center">
            {/* Left: Image with Gold Accents */}
            <div className="relative">
              <img
                src="/images/industries/ecommerce-why.jpg"
                alt="E-Commerce Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light mb-6 text-[#12372A]">
                Why Your Business Needs a High-Performing Online Store
              </h2>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                Online shoppers expect speed, convenience, and confidence. If your website is slow, difficult to navigate, or confusing at checkout, potential customers will simply buy elsewhere. A professionally designed e-commerce website makes it easy for visitors to browse products, compare options, and complete purchases while reinforcing trust in your brand.
              </p>
              <p className="text-[0.95rem] leading-relaxed font-light text-[#1C1C1C]">
                At <strong>Crea Web</strong>, we combine premium design with strategic development to create online stores that deliver measurable business results. Every website is optimised for search engines, user experience, and conversion rate optimisation, helping businesses attract more visitors, increase sales, and build long-term customer loyalty.
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
              "Bespoke E-Commerce Website Design",
              "Shopify & WooCommerce Specialists",
              "UK Web Design Agency",
              "Conversion-Focused Development",
              "SEO-Friendly Online Stores",
              "Secure Payment Integrations",
              "Fast Loading Performance",
              "Ongoing Website Support",
              "Designed to Increase Revenue",
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
            E-Commerce Website Design Pricing
          </h2>
          <p className="text-center text-[0.95rem] font-light mb-16 max-w-2xl mx-auto">
            Choose the package that suits your online retail business.
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
                  {["Up to 50 products", "Responsive design", "Basic SEO setup", "Payment gateway integration", "Mobile optimized"].map((feature, i) => (
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
                  {["Up to 500 products", "Shopify development", "Product search & filtering", "Customer accounts", "Advanced SEO", "Analytics setup"].map((feature, i) => (
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
                  {["Unlimited products", "Custom e-commerce development", "Multi-currency support", "Inventory management", "Advanced integrations", "Custom features"].map((feature, i) => (
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
                q: "How much does an e-commerce website cost?",
                a: "Every online store is bespoke. Pricing depends on the number of products, integrations, platform, and custom functionality required.",
              },
              {
                q: "Do you build Shopify websites?",
                a: "Yes. We design and develop bespoke Shopify stores tailored to your products and brand identity.",
              },
              {
                q: "Can you build WooCommerce websites?",
                a: "Absolutely. We build scalable WooCommerce stores with custom functionality and seamless WordPress integration.",
              },
              {
                q: "Can you migrate my existing online store?",
                a: "Yes. We can migrate products, customer data, and content from many popular e-commerce platforms.",
              },
              {
                q: "Are your online stores mobile-friendly?",
                a: "Yes. Every e-commerce website is fully responsive and optimised for all screen sizes and devices.",
              },
              {
                q: "Can you integrate payment gateways?",
                a: "Yes. We integrate Stripe, PayPal, Klarna, Apple Pay, Google Pay, and many other payment providers.",
              },
              {
                q: "Do you provide SEO for e-commerce websites?",
                a: "Yes. Every project includes technical SEO foundations, with optional ongoing SEO services available.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes. We provide maintenance, security updates, performance monitoring, and long-term technical support.",
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
            Build an Online Store That <span className="italic text-[#B08D57]">Grows Your Business</span>
          </h2>
          <p className="text-[1rem] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            Whether you're launching your first online store or scaling an established retail brand, Crea Web creates bespoke e-commerce websites designed to increase sales, strengthen your brand, and deliver exceptional shopping experiences.
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
