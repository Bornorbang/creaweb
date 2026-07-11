import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Hospitality Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke hospitality websites for hotels, restaurants, bars, resorts, and hospitality brands. Responsive, SEO-friendly, and built to increase bookings.",
  alternates: { canonical: "https://creaweb.co.uk/industries/hospitality" },
  openGraph: {
    title: "Hospitality Web Design UK | Crea Web",
    description: "Crea Web designs bespoke hospitality websites for hotels, restaurants, bars, resorts, and hospitality brands. Responsive, SEO-friendly, and built to increase bookings.",
    url: "https://creaweb.co.uk/industries/hospitality",
    type: "website",
  },
};

export default function HospitalityPage() {
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
              <p className="text-[#B08D57] font-light text-sm tracking-widest uppercase mb-6">HOSPITALITY</p>
              <h1 className="font-serif-display text-[clamp(2rem,6vw,3.5rem)] leading-tight font-light mb-6">
                Hospitality Web Design That <span className="italic text-[#B08D57]">Turns Visitors Into Guests</span>
              </h1>
              <p className="text-[1rem] leading-relaxed font-light mb-8 max-w-lg">
                In hospitality, your website is often the deciding factor between a booking and a lost opportunity. At <strong>Crea Web</strong>, we specialise in <strong>Hospitality Web Design</strong>, creating elegant, high-performing websites for hotels, restaurants, cafés, resorts, bars, and hospitality businesses. Every website is designed to showcase your brand, inspire confidence, and encourage direct bookings.
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
                src="/images/industries/hospitality-hero.jpg"
                alt="Hospitality Web Design UK"
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
                src="/images/industries/hospitality-about.jpg"
                alt="Hospitality Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light mb-6 text-[#12372A]">
                Beautiful Websites Designed for Memorable Guest Experiences
              </h2>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                First impressions matter, especially in hospitality. Long before a guest arrives, they'll visit your website to explore your rooms, browse your menu, compare venues, or read reviews. A professionally designed website should capture the atmosphere of your business while making it effortless for visitors to enquire, reserve, or book. At <strong>Crea Web</strong>, we create bespoke hospitality websites that combine striking visuals with seamless functionality to deliver exceptional digital experiences.
              </p>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                Every hospitality business has its own story, audience, and goals. Whether you operate a boutique hotel, luxury resort, independent restaurant, café, cocktail bar, wedding venue, or holiday accommodation, we design websites tailored to your brand identity and customer journey. Our websites feature intuitive navigation, responsive layouts, and fast loading speeds to ensure guests enjoy the same premium experience online as they do in person.
              </p>
              <p className="text-[0.95rem] leading-relaxed font-light text-[#1C1C1C]">
                As a trusted <strong>UK web design agency</strong>, we understand that your website is more than a marketing tool—it's a direct revenue driver. That's why every hospitality website we build is optimised for search engines, designed to increase direct bookings, and structured to reduce reliance on third-party booking platforms. The result is a website that strengthens your brand, improves customer engagement, and supports long-term business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hospitality Businesses Choose Crea Web - 6 Reason Cards */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light text-center mb-16 text-[#12372A]">
            Why Hospitality Businesses Choose Crea Web
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
                  Increase Direct Bookings
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Reduce reliance on third-party booking platforms by providing guests with a fast, intuitive booking experience directly through your website.
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
                  Create a Lasting First Impression
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Beautiful imagery, elegant layouts, and thoughtful user journeys help communicate the quality of your hospitality business before guests even arrive.
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
                  Optimised for Local & Travel Searches
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Every website is built with SEO best practices to improve visibility for searches such as hotel, restaurant, and venue booking queries.
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
                  Mobile-First Guest Experience
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Travellers often search and book from their phones. Every website is fully responsive, ensuring an exceptional experience across all devices.
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
                  We never rely on generic templates. Every hospitality website is designed specifically around your venue, services, branding, and target audience.
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
                  Expert Hospitality Industry Knowledge
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  We understand booking systems, guest expectations, and industry best practices to create websites that truly work for hospitality businesses.
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
            Your hospitality website can include all of these features and more.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Online booking integration",
              "Room & accommodation pages",
              "Restaurant menus",
              "Interactive food & drink menus",
              "Table reservation system",
              "Event & wedding venue pages",
              "Image galleries",
              "Virtual tours",
              "Customer reviews & testimonials",
              "Google Maps integration",
              "Gift voucher sales",
              "Special offers & promotions",
              "Blog & local travel guides",
              "Multi-location support",
              "Live chat integration",
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
            Our hospitality web design services are ideal for a wide range of hospitality businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Hotels",
              "Boutique Hotels",
              "Luxury Hotels",
              "Bed & Breakfasts",
              "Resorts",
              "Restaurants",
              "Cafés",
              "Coffee Shops",
              "Bars",
              "Pubs",
              "Cocktail Lounges",
              "Wedding Venues",
              "Event Venues",
              "Holiday Parks",
              "Holiday Lets",
              "Guest Houses",
              "Serviced Apartments",
              "Conference Centres",
              "Hospitality Groups",
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

      {/* Market Need / Why Your Hospitality Business Needs a Modern Website */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-center">
            {/* Left: Image with Gold Accents */}
            <div className="relative">
              <img
                src="/images/industries/hospitality-why.jpg"
                alt="Hospitality Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light mb-6 text-[#12372A]">
                Why Your Hospitality Business Needs a Modern Website
              </h2>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                Travellers and diners make decisions quickly. A slow, outdated, or difficult-to-use website can cause potential guests to book elsewhere. A professionally designed hospitality website gives visitors confidence, showcases your venue beautifully, and provides a seamless path from browsing to booking. Whether someone is planning a weekend getaway, reserving a table, or comparing wedding venues, your website should make choosing your business feel effortless.
              </p>
              <p className="text-[0.95rem] leading-relaxed font-light text-[#1C1C1C]">
                At <strong>Crea Web</strong>, we combine elegant design, modern development, and strategic SEO to create hospitality websites that work as powerful marketing tools. Every website is optimised for speed, search visibility, and user experience, helping hospitality businesses increase direct bookings, improve customer engagement, and strengthen their online presence.
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
              "Bespoke Hospitality Website Design",
              "UK Web Design Agency",
              "SEO-Friendly Development",
              "Mobile-First Design",
              "Fast Loading Websites",
              "Booking System Integration",
              "Conversion-Focused User Experience",
              "Long-Term Website Support",
              "Designed to Increase Bookings",
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
            Hospitality Website Design Pricing
          </h2>
          <p className="text-center text-[0.95rem] font-light mb-16 max-w-2xl mx-auto">
            Choose the package that suits your hospitality business.
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
                  {["Up to 8 pages", "Responsive design", "Basic SEO setup", "Contact forms", "Mobile optimized"].map((feature, i) => (
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
                  {["Up to 15 pages", "Online booking integration", "Restaurant menus", "Image galleries", "Advanced SEO", "Analytics tracking"].map((feature, i) => (
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
                  {["Unlimited pages", "Multi-location support", "Custom booking systems", "Virtual tours", "Advanced integrations", "Custom features"].map((feature, i) => (
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
                q: "How much does a hospitality website cost?",
                a: "Every hospitality website is bespoke. Pricing depends on your business requirements, functionality, booking integrations, and the number of pages required.",
              },
              {
                q: "Can you integrate online booking systems?",
                a: "Yes. We can integrate hotel booking engines, restaurant reservation platforms, event booking systems, or bespoke booking solutions.",
              },
              {
                q: "Do you design websites for restaurants and cafés?",
                a: "Absolutely. We work with restaurants, cafés, bars, hotels, resorts, and a wide range of hospitality businesses throughout the UK.",
              },
              {
                q: "Will my website be mobile-friendly?",
                a: "Yes. Every website is fully responsive and optimised for smartphones, tablets, laptops, and desktop devices.",
              },
              {
                q: "Can you showcase menus and image galleries?",
                a: "Yes. We can create elegant menu layouts, photo galleries, virtual tours, and promotional sections that highlight your business.",
              },
              {
                q: "Do you provide SEO services?",
                a: "Yes. Every website includes technical SEO foundations, with optional ongoing SEO campaigns to improve rankings and attract more visitors.",
              },
              {
                q: "Can you redesign our existing hospitality website?",
                a: "Yes. We modernise outdated websites while improving performance, user experience, branding, and conversion rates.",
              },
              {
                q: "Do you provide ongoing website maintenance?",
                a: "Yes. We offer website maintenance, updates, security monitoring, and long-term technical support.",
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
            Give Guests a Reason to Book Directly
          </h2>
          <p className="text-[1rem] leading-relaxed font-light mb-8 max-w-xl mx-auto">
            Whether you manage a boutique hotel, restaurant, wedding venue, or hospitality group, your website should inspire confidence and encourage bookings. Crea Web designs bespoke hospitality websites that combine exceptional design with measurable business results.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#B08D57] text-[#12372A] font-light rounded-xs hover:bg-opacity-90 transition"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
