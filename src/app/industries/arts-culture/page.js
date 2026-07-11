import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: {
    absolute: "Arts & Culture Web Design UK | Crea Web",
  },
  description:
    "Crea Web creates bespoke arts and culture websites for galleries, museums, artists, theatres, festivals, and cultural organisations. Beautiful, responsive, and SEO-friendly.",
  alternates: { canonical: "https://creaweb.co.uk/industries/arts-culture" },
  openGraph: {
    title: "Arts & Culture Web Design UK | Crea Web",
    description: "Crea Web creates bespoke arts and culture websites for galleries, museums, artists, theatres, festivals, and cultural organisations. Beautiful, responsive, and SEO-friendly.",
    url: "https://creaweb.co.uk/industries/arts-culture",
    type: "website",
  },
};

export default function ArtsCulturePage() {
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
              <p className="text-[#B08D57] font-light text-sm tracking-widest uppercase mb-6">ARTS & CULTURE</p>
              <h1 className="font-serif-display text-[clamp(2rem,6vw,3.5rem)] leading-tight font-light mb-6">
                Arts & Culture Web Design That <span className="italic text-[#B08D57]">Brings Creativity Online</span>
              </h1>
              <p className="text-[1rem] leading-relaxed font-light mb-8 max-w-lg">
                Every creative organisation has a unique story to tell. At <strong>Crea Web</strong>, we specialise in <strong>Arts & Culture Web Design</strong>, crafting bespoke websites for museums, galleries, theatres, artists, festivals, and cultural institutions. We combine elegant design, intuitive navigation, and modern technology to help you inspire audiences, promote events, and strengthen your digital presence.
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
                src="/images/industries/arts-hero.jpg"
                alt="Arts & Culture Web Design UK"
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
                src="/images/industries/arts-about.jpg"
                alt="Arts & Culture Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light mb-6 text-[#12372A]">
                Digital Experiences That Celebrate Creativity
              </h2>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                The arts are built on emotion, storytelling, and human connection—and your website should reflect that. Whether you're showcasing an exhibition, promoting performances, or preserving cultural heritage, your website should capture attention while making information easy to explore. At <strong>Crea Web</strong>, we design bespoke arts and culture websites that balance creativity with usability, helping organisations connect with audiences in meaningful ways.
              </p>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                Every creative organisation has different goals. A museum may need an engaging exhibition archive, a theatre may require online ticketing, while an independent artist may want a portfolio that highlights their work beautifully. That's why we design every website from the ground up, tailoring layouts, functionality, and content around your organisation's mission, audience, and identity.
              </p>
              <p className="text-[0.95rem] leading-relaxed font-light text-[#1C1C1C]">
                As a trusted <strong>UK web design agency</strong>, we understand the importance of presenting creative work with care and authenticity. Every website we build is responsive, SEO-friendly, and designed to encourage exploration, whether visitors are discovering your collection, purchasing tickets, supporting your organisation, or learning about your latest project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Arts & Culture Organisations Choose Crea Web - 6 Reason Cards */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light text-center mb-16 text-[#12372A]">
            Why Arts & Culture Organisations Choose Crea Web
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
                  Showcase Your Work Beautifully
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  We design visually rich websites that place your artwork, performances, exhibitions, and collections at the centre of the experience.
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
                  Encourage Visitor Engagement
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Clear navigation, intuitive event pages, and engaging storytelling help visitors spend more time exploring your organisation.
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
                  Increase Visibility Online
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Every website is built with SEO best practices to help organisations appear in searches for exhibitions, events, and cultural experiences.
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
                  Designed for Every Device
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Whether someone is buying tickets on their phone or exploring an exhibition from their desktop, your website will provide a seamless experience.
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
                  Built Around Your Creative Identity
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  No templates. Every project is uniquely designed to reflect your artistic vision, organisational values, and audience expectations.
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
                  Accessibility-First Design
                </h3>
                <p className="text-[0.9rem] font-light text-[#1C1C1C] flex-grow">
                  Every website is built with accessibility standards in mind, ensuring everyone can explore and enjoy your content.
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
            Your arts & culture website can include all of these features and more.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Exhibition pages",
              "Artist portfolio galleries",
              "Collection archives",
              "Event calendars",
              "Online ticket booking",
              "Membership registration",
              "Donation integration",
              "Digital exhibition experiences",
              "Audio & video galleries",
              "Interactive timelines",
              "Educational resources",
              "Press & media centre",
              "Blog & news section",
              "Volunteer sign-up forms",
              "Newsletter integration",
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
            Our arts & culture web design services are ideal for a wide range of creative organisations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Museums",
              "Art Galleries",
              "Independent Artists",
              "Sculptors",
              "Photographers",
              "Theatres",
              "Performing Arts Centres",
              "Festivals",
              "Cultural Organisations",
              "Heritage Sites",
              "Community Arts Projects",
              "Dance Companies",
              "Music Organisations",
              "Creative Studios",
              "Public Art Initiatives",
              "Non-Profit Cultural Institutions",
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

      {/* Market Need / Why Your Creative Organisation Needs a Modern Website */}
      <section className="bg-[#F6F1E8] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-center">
            {/* Left: Image with Gold Accents */}
            <div className="relative">
              <img
                src="/images/industries/art-why.jpg"
                alt="Arts & Culture Web Design UK"
                className="w-full rounded-sm"
              />
              {/* Gold Corner Accents */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-[#B08D57] opacity-60"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-[#B08D57] opacity-60"></div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="font-serif-display text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-light mb-6 text-[#12372A]">
                Why Your Creative Organisation Needs a Modern Website
              </h2>
              <p className="text-[0.95rem] leading-relaxed mb-4 font-light text-[#1C1C1C]">
                For many people, your website is the first opportunity to experience your organisation. A thoughtfully designed website should invite curiosity, communicate your story, and make it easy for visitors to discover exhibitions, purchase tickets, support your work, or engage with your community. A poor online experience can discourage potential visitors, while a beautifully designed website strengthens your reputation and broadens your reach.
              </p>
              <p className="text-[0.95rem] leading-relaxed font-light text-[#1C1C1C]">
                At <strong>Crea Web</strong>, we combine editorial-inspired design with modern web development to create digital experiences that celebrate creativity while delivering outstanding performance. Every website is built with accessibility, responsive design, and SEO in mind, helping arts and culture organisations connect with larger audiences and remain relevant in an increasingly digital world.
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
              "Bespoke Arts & Culture Website Design",
              "UK Web Design Agency",
              "Creative & Editorial Design",
              "SEO-Friendly Development",
              "Responsive Across All Devices",
              "Accessibility-Focused Design",
              "Event & Ticketing Integrations",
              "Long-Term Website Support",
              "Designed to Inspire & Engage",
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
            Arts & Culture Website Design Pricing
          </h2>
          <p className="text-center text-[0.95rem] font-light mb-16 max-w-2xl mx-auto">
            Choose the package that suits your creative organisation.
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
                  {["Up to 8 pages", "Exhibition gallery", "Event calendar", "Basic SEO setup", "Mobile optimized"].map((feature, i) => (
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
                  {["Up to 15 pages", "Portfolio galleries", "Online ticketing", "Membership system", "Advanced SEO", "Newsletter integration"].map((feature, i) => (
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
                  {["Unlimited pages", "Digital exhibitions", "Donation system", "Multi-location support", "Advanced integrations", "Custom features"].map((feature, i) => (
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
                q: "How much does an arts or culture website cost?",
                a: "Every project is tailored to your organisation's needs. Pricing depends on the required functionality, content, and integrations.",
              },
              {
                q: "Can you integrate event ticketing systems?",
                a: "Yes. We can integrate ticketing platforms, event booking systems, and custom registration forms.",
              },
              {
                q: "Do you create artist portfolio websites?",
                a: "Absolutely. We design bespoke portfolio websites for artists, photographers, designers, and other creative professionals.",
              },
              {
                q: "Can you redesign our existing museum or gallery website?",
                a: "Yes. We modernise outdated websites while improving user experience, accessibility, and search visibility.",
              },
              {
                q: "Are your websites mobile-friendly?",
                a: "Yes. Every website is fully responsive and optimised for smartphones, tablets, and desktop devices.",
              },
              {
                q: "Do you provide SEO services?",
                a: "Yes. Every project includes technical SEO foundations, with optional ongoing SEO campaigns available.",
              },
              {
                q: "Can you include donation functionality?",
                a: "Yes. We can integrate secure online donation systems for charities, museums, and cultural organisations.",
              },
              {
                q: "Do you provide ongoing maintenance?",
                a: "Yes. We offer maintenance, updates, security monitoring, and long-term technical support.",
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
            Tell Your Story Through <span className="italic text-[#B08D57]">Exceptional Design</span>
          </h2>
          <p className="text-[1rem] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            Whether you're a museum, gallery, theatre, festival, or independent artist, your website should inspire the same confidence and creativity as your work. Crea Web creates bespoke arts and culture websites that engage audiences, promote events, and support long-term growth.
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
