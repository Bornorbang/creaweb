import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BottomCTA from "../../components/BottomCTA";
import Link from "next/link";
import { notFound } from "next/navigation";

const industries = [
  {
    slug: "healthcare",
    label: "Healthcare",
    title: "Web Design for Healthcare UK",
    metaDesc: "Professional web design for healthcare businesses in the UK. Crea Web builds bespoke, compliant, and trustworthy websites for clinics, practitioners, and health brands.",
    headline: "Web Design for Healthcare",
    subHeadline: "in the UK",
    intro: "Healthcare websites must inspire trust before they inspire action. We design and build patient-centred websites for UK clinics, private practices, healthcare brands, and NHS suppliers — balancing clinical authority with warmth and accessibility.",
    features: [
      { title: "Patient-Centred Design", body: "Clear, calming, and accessible user journeys that put patients at ease from the first visit — designed for the anxious, the busy, and the tech-hesitant alike." },
      { title: "CQC & Regulatory Compliance", body: "We build with UK healthcare regulations in mind — accessible design (WCAG 2.1 AA), privacy-first data handling, and compliant contact and booking workflows." },
      { title: "Online Booking Integration", body: "Seamless appointment booking systems integrated into your site — reducing admin burden and improving patient conversion from first visit to confirmed appointment." },
      { title: "Trust-Building Credentials", body: "Practitioner profiles, qualifications, accreditations, and patient testimonials presented with the clarity and dignity that healthcare demands." },
      { title: "GDPR-Compliant Contact Forms", body: "All enquiry and contact forms built with patient data security as a priority — secure, encrypted, and compliant from day one." },
      { title: "Mobile-First for Patients", body: "The majority of healthcare searches happen on mobile. Every site we build is optimised for the patient browsing on their phone at the point of need." },
    ],
    sectors: ["Private Clinics", "GP & Medical Practices", "Dental Surgeries", "Mental Health Services", "Physiotherapy & Rehab", "Health & Wellness Brands", "Medical Devices & Suppliers", "NHS & Public Health Bodies"],
  },
  {
    slug: "legal",
    label: "Legal",
    title: "Web Design for Law Firms UK",
    metaDesc: "Professional web design for UK law firms and solicitors. Crea Web builds bespoke, authoritative legal websites that generate client enquiries and reflect your firm’s expertise.",
    headline: "Web Design for Law Firms",
    subHeadline: "& Legal Services",
    intro: "A law firm's website is its most important business development tool. We design and build authoritative, conversion-focused websites for UK solicitors, barristers, and legal services businesses — presenting expertise with precision and earning client trust before the first call.",
    features: [
      { title: "Authority & Trust by Design", body: "Considered typography, structured layouts, and credentialed practitioner profiles that communicate professional gravitas from the first impression." },
      { title: "Practice Area Architecture", body: "Clear, logical information architecture across practice areas — making it effortless for prospective clients to find the service they need and understand your expertise." },
      { title: "Enquiry Optimisation", body: "Strategic placement of CTAs, contact forms, and consultation booking — designed to convert website visitors into instructed clients with minimal friction." },
      { title: "SRA & Regulatory Compliance", body: "All legal websites we build comply with SRA transparency rules — including pricing information, complaints procedures, and regulatory disclosures presented correctly." },
      { title: "Thought Leadership Integration", body: "Editorial sections, legal updates, and insights structured to build organic authority and demonstrate your firm's command of evolving legal landscapes." },
      { title: "Local & National SEO", body: "Technical and on-page SEO foundations built in from launch — helping your firm rank for the practice-area and location searches that drive real client enquiries." },
    ],
    sectors: ["Solicitors & Law Firms", "Barristers & Chambers", "Legal Aid Practices", "Family Law", "Commercial & Corporate Law", "Personal Injury", "Employment Law", "Conveyancing & Property"],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    title: "Web Design for Estate Agents UK",
    metaDesc: "Professional web design for UK estate agents and property businesses. Crea Web builds bespoke, high-performance property websites that showcase listings and generate vendor enquiries.",
    headline: "Web Design for Estate Agents",
    subHeadline: "& Property Businesses",
    intro: "Property is an industry built on first impressions — and your website is the most important one you make. We design and build premium property websites for UK estate agents, developers, and property managers that showcase listings beautifully and convert browser-to-enquiry consistently.",
    features: [
      { title: "Premium Listing Presentation", body: "Immersive property detail pages with full-screen photography, floor plans, virtual tour integration, and compelling feature descriptions." },
      { title: "Property Search & Filtering", body: "Intuitive search and filter systems that let buyers and tenants find the right property quickly — reducing bounce and increasing enquiry rate." },
      { title: "Rightmove & Zoopla Integration", body: "Seamless CRM and portal integration — syncing your listings automatically and keeping your website up to date without duplication of effort." },
      { title: "Vendor & Landlord Landing Pages", body: "Targeted pages designed to convert vendors and landlords — building the case for instructing your agency with social proof, local market data, and clear next steps." },
      { title: "Valuation Request Funnels", body: "Optimised online valuation request journeys that capture vendor intent at exactly the right moment in the property decision cycle." },
      { title: "Local Market Authority", body: "Area guides, market reports, and neighbourhood content that positions your agency as the definitive local authority in your market." },
    ],
    sectors: ["Residential Estate Agents", "Lettings & Property Management", "Commercial Property", "Property Developers", "New Homes & Housebuilders", "Luxury & Prime Property", "Student Accommodation", "Property Investment Platforms"],
  },
  {
    slug: "finance",
    label: "Finance",
    title: "Web Design for Financial Services UK",
    metaDesc: "Professional web design for UK financial services businesses. Crea Web creates bespoke, FCA-aware websites for wealth managers, IFAs, accountants, and fintech brands.",
    headline: "Web Design for Financial Services",
    subHeadline: "in the UK",
    intro: "Financial services clients make decisions based on trust — and that trust begins with your website. We design and build authoritative, FCA-aware digital presences for UK wealth managers, IFAs, accountants, and fintech businesses that inspire confidence and generate qualified leads.",
    features: [
      { title: "FCA-Aware Design & Compliance", body: "All financial services websites we build are designed with FCA marketing communications rules in mind — appropriate risk warnings, compliant language, and correct regulatory disclosures." },
      { title: "Trust Architecture", body: "Credentials, accreditations, regulatory body memberships, and client testimonials structured to build confidence systematically across the user journey." },
      { title: "Secure Client Portals", body: "Integration with existing client portal systems — creating seamless, branded access points that reinforce your professionalism at every interaction." },
      { title: "Service Clarity", body: "Complex financial services explained with clarity — structured service pages that help prospective clients understand your offering without jargon or confusion." },
      { title: "Lead Capture & CRM Integration", body: "Strategic contact forms, consultation booking, and CRM integration — converting website visitors into qualified appointments efficiently." },
      { title: "Performance & Security", body: "Fast, secure websites built to the standards financial services clients expect — SSL, data encryption, and performance metrics that signal professionalism." },
    ],
    sectors: ["Independent Financial Advisers", "Wealth Management", "Accountants & Tax Advisers", "Mortgage Brokers", "Insurance Brokers", "Fintech Startups", "Corporate Finance", "Pension & Retirement Planning"],
  },
  {
    slug: "education",
    label: "Education",
    title: "Web Design for Education UK",
    metaDesc: "Professional web design for UK educational institutions and edtech businesses. Crea Web builds bespoke, accessible websites for schools, colleges, universities, and training providers.",
    headline: "Web Design for Education",
    subHeadline: "& Learning Institutions",
    intro: "Educational websites must serve multiple audiences simultaneously — prospective students, parents, staff, and the broader community. We design and build purposeful digital presences for UK schools, colleges, universities, training providers, and edtech businesses that communicate clearly and serve every audience well.",
    features: [
      { title: "Multi-Audience Architecture", body: "Information structures designed to serve prospective students, current students, parents, staff, and alumni — each finding what they need without friction." },
      { title: "WCAG Accessibility Compliance", body: "Every educational website we build meets WCAG 2.1 AA accessibility standards — ensuring inclusivity for students and visitors of all abilities." },
      { title: "Prospectus & Course Pages", body: "Compelling course and programme pages that present your educational offering persuasively — driving applications and enquiries from the right candidates." },
      { title: "Student & Parent Portals", body: "Seamless integration with existing MIS and learning management systems — creating a cohesive digital experience across every touchpoint." },
      { title: "Ofsted & Regulatory Compliance", body: "All required regulatory information presented correctly — Ofsted ratings, admissions policies, governance structures, and statutory documentation." },
      { title: "Community & News Integration", body: "Engaging news, events, and community content that keeps students, parents, and alumni connected to your institution between key moments." },
    ],
    sectors: ["Independent Schools", "State Schools & MATs", "Further Education Colleges", "Universities & HEIs", "Training Providers", "Tutoring & Online Learning", "EdTech Platforms", "Early Years & Nurseries"],
  },
  {
    slug: "local-services",
    label: "Local Services",
    title: "Web Design for Local Services UK",
    metaDesc: "Professional web design for UK local service businesses. Crea Web builds bespoke, locally-optimised websites for tradespeople, service businesses, and community brands that generate local enquiries.",
    headline: "Web Design for Local",
    subHeadline: "Service Businesses",
    intro: "Local service businesses win clients through trust, reputation, and visibility. We design and build conversion-focused, locally-optimised websites for UK tradespeople, service businesses, and community brands — websites that rank in local search and convert visitors into booked jobs.",
    features: [
      { title: "Local SEO Foundations", body: "Technical local SEO built into every project — Google Business Profile optimisation, local schema markup, and geo-targeted content that drives local enquiries." },
      { title: "Fast, Mobile-First Design", body: "Local service searches are overwhelmingly mobile. Every site we build loads fast on mobile and makes it effortless to call, enquire, or book." },
      { title: "Trust Signals by Design", body: "Reviews, accreditations, guarantees, and certifications presented prominently — building the confidence local clients need before making contact." },
      { title: "Clear Service Area Pages", body: "Town and area-specific landing pages that extend your local search reach across your service area — capturing enquiries from every locality you serve." },
      { title: "Online Enquiry & Booking", body: "Simple, friction-free contact forms and booking systems — reducing the barrier to enquiry and capturing more leads from every website visit." },
      { title: "Portfolio & Case Studies", body: "Before-and-after galleries, project showcases, and client testimonials that demonstrate the quality of your work and the satisfaction of your clients." },
    ],
    sectors: ["Plumbers & Heating Engineers", "Electricians", "Builders & Contractors", "Landscaping & Gardening", "Cleaning Services", "Beauty & Wellness", "Auto & Mechanical", "Home Improvement"],
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    title: "Web Design for Hospitality UK",
    metaDesc: "Professional web design for UK hospitality businesses. Crea Web creates bespoke, atmospheric websites for hotels, restaurants, bars, and venues that inspire bookings and capture direct reservations.",
    headline: "Web Design for Hospitality",
    subHeadline: "& Leisure Businesses",
    intro: "Hospitality websites must do what good hospitality does — create an atmosphere, tell a story, and inspire a visit. We design and build immersive, conversion-focused websites for UK hotels, restaurants, bars, and venues that showcase your experience and drive direct bookings.",
    features: [
      { title: "Atmospheric Visual Storytelling", body: "Full-bleed photography, editorial layouts, and careful typography that evoke the experience of your venue before guests have set foot inside." },
      { title: "Direct Booking Integration", body: "Seamless integration with booking engines — from OpenTable and ResDiary for restaurants to booking systems for hotels and venues — maximising direct reservations and reducing commission costs." },
      { title: "Menu & Event Presentation", body: "Beautiful menus, event listings, and seasonal content designed to drive repeat visits, pre-bookings, and private event enquiries." },
      { title: "Gift Voucher & Merchandise", body: "Integrated e-commerce for gift vouchers, merchandise, and experiences — creating additional revenue streams with zero friction for your guests." },
      { title: "Google & TripAdvisor Integration", body: "Review integration, schema markup for rich results, and local SEO foundations that improve your visibility in the searches that drive footfall." },
      { title: "Private Events & Hire", body: "Dedicated private dining, event hire, and corporate functions pages with enquiry forms engineered to capture high-value bookings." },
    ],
    sectors: ["Hotels & Boutique Accommodation", "Restaurants & Brasseries", "Bars & Cocktail Venues", "Cafés & Coffee Shops", "Wedding & Event Venues", "Spas & Retreats", "Pubs & Gastropubs", "Private Members Clubs"],
  },
  {
    slug: "ecommerce",
    label: "E-Commerce",
    title: "E-Commerce Website Design UK",
    metaDesc: "Professional web design for UK e-commerce businesses. Crea Web builds bespoke, conversion-optimised online stores on Shopify and WooCommerce for British retail brands.",
    headline: "Web Design for E-Commerce",
    subHeadline: "& Online Retail",
    intro: "E-commerce success is built on the quality of the shopping experience. We design and build conversion-optimised online stores for UK retail brands — premium design paired with seamless product discovery, checkout optimisation, and the integrations that make modern e-commerce operations run smoothly.",
    features: [
      { title: "Conversion-First Design", body: "Every layout, interaction, and micro-decision is made with one goal: turning more visitors into buyers. Product pages, category pages, and checkout all designed to convert." },
      { title: "Shopify & WooCommerce Experts", body: "Bespoke themes for the UK's most trusted e-commerce platforms — built to perform, built to scale, and built to reflect your brand at its finest." },
      { title: "Product Photography Presentation", body: "Immersive product detail pages with zoom, multiple image angles, video, and size guides — giving online shoppers the confidence to buy." },
      { title: "Payment & Checkout Optimisation", body: "Stripe, PayPal, Klarna, and buy-now-pay-later integrations — with checkout flows engineered to minimise abandonment and maximise completion." },
      { title: "Inventory & Fulfilment Integration", body: "Seamless connection to your inventory management, shipping, and fulfilment systems — so your operations run without friction from order to doorstep." },
      { title: "E-Commerce SEO", body: "Product schema, category page optimisation, Core Web Vitals performance, and technical foundations that help your products rank and get found." },
    ],
    sectors: ["Fashion & Apparel", "Home & Interiors", "Food & Drink", "Health & Beauty", "Luxury Goods", "Sports & Outdoor", "Gifts & Stationery", "B2B & Trade E-Commerce"],
  },
  {
    slug: "arts-culture",
    label: "Arts & Culture",
    title: "Web Design for Arts & Culture UK",
    metaDesc: "Professional web design for UK arts organisations, galleries, museums, and creative businesses. Crea Web builds bespoke, expressive websites that showcase creative work and grow audiences.",
    headline: "Web Design for Arts",
    subHeadline: "& Cultural Organisations",
    intro: "Arts and cultural organisations deserve websites that match the ambition and sophistication of the work they present. We design and build expressive, audience-focused digital presences for UK galleries, museums, theatres, festivals, and creative businesses — websites that inspire, inform, and convert visitors into supporters and ticket buyers.",
    features: [
      { title: "Expressive Visual Design", body: "Websites that honour the work they present — bold editorial layouts, generous use of imagery, and typography that reflects your artistic identity." },
      { title: "Programme & Event Listings", body: "Clear, searchable event and exhibition listings integrated with your ticketing system — making it effortless for audiences to discover, plan, and book." },
      { title: "Ticketing & Booking Integration", body: "Seamless integration with Eventbrite, Spektrix, and other ticketing platforms — or custom booking systems for organisations with specific requirements." },
      { title: "Arts Council & Funder Reporting", body: "Digital presence structured to satisfy funder requirements — audience reach, engagement metrics, and accessibility compliance all evidenced clearly." },
      { title: "Membership & Donation", body: "Membership sign-up, donation, and crowdfunding journeys designed to grow supporter communities and diversify income streams." },
      { title: "Accessibility as Standard", body: "WCAG 2.1 AA accessible design as a baseline — because arts and culture should be accessible to everyone, online and offline." },
    ],
    sectors: ["Galleries & Museums", "Theatres & Concert Halls", "Festivals & Events", "Creative Agencies", "Artists & Makers", "Literary & Publishing", "Film & Screen", "Music & Performance"],
  },
  {
    slug: "technology",
    label: "Technology",
    title: "Web Design for Tech Companies UK",
    metaDesc: "Professional web design for UK technology companies, SaaS businesses, and startups. Crea Web builds bespoke, high-performance websites that communicate complex propositions with clarity and convert technical audiences.",
    headline: "Web Design for Technology",
    subHeadline: "Companies & Startups",
    intro: "Technology businesses face a unique design challenge: communicating complex capabilities with simplicity and clarity, to audiences who are both technically sophisticated and commercially discerning. We design and build high-performance websites for UK tech companies, SaaS businesses, and startups that make the complex feel inevitable.",
    features: [
      { title: "Proposition Clarity", body: "Complex technology propositions distilled into clear, compelling language — design and copy working together to make your product immediately understood." },
      { title: "SaaS Product Showcase", body: "Product UI screenshots, feature tours, and interactive demos presented with the care and precision your software deserves." },
      { title: "Pricing & Conversion Architecture", body: "Pricing pages, trial sign-up flows, and sales funnel architecture designed to convert free users to paid and convert enterprise interest to booked demos." },
      { title: "Integration & API Documentation", body: "Developer documentation, API reference pages, and integration hubs structured for technical audiences — built alongside your marketing site with coherent design." },
      { title: "Case Studies & Social Proof", body: "Client case studies, ROI metrics, and technical testimonials that build credibility with the technology buyers and enterprise decision-makers you're targeting." },
      { title: "Performance at Scale", body: "Next.js, static generation, and CDN-optimised architecture — because tech company websites must perform as well as the products they represent." },
    ],
    sectors: ["SaaS Businesses", "Technology Startups", "Software Agencies", "Cybersecurity", "AI & Machine Learning", "Fintech", "HealthTech", "Enterprise Technology"],
  },
  {
    slug: "food-drink",
    label: "Food & Drink",
    title: "Web Design for Food & Drink UK",
    metaDesc: "Professional web design for UK food and drink brands. Crea Web builds bespoke, appetising websites for artisan producers, FMCG brands, and hospitality businesses that drive wholesale and direct-to-consumer sales.",
    headline: "Web Design for Food",
    subHeadline: "& Drink Brands",
    intro: "Food and drink brands succeed online when their websites evoke the same pleasure as the products themselves. We design and build sensory, conversion-focused digital presences for UK artisan producers, FMCG brands, breweries, distilleries, and food businesses — websites that tell your provenance story and drive both wholesale and direct-to-consumer sales.",
    features: [
      { title: "Provenance & Storytelling", body: "Your origin story, production methods, and founder narrative told with editorial craft — the content that differentiates artisan from commodity." },
      { title: "Direct-to-Consumer E-Commerce", body: "Beautiful online stores for food and drink products — subscription boxes, mixed cases, hampers, and gifting built on Shopify or WooCommerce." },
      { title: "Wholesale & Trade Enquiries", body: "Trade buyer sections, stockist portals, and wholesale enquiry funnels designed to grow your retail distribution without increasing your sales team headcount." },
      { title: "Allergen & Compliance Information", body: "Nutritional information, allergen data, and regulatory compliance content presented clearly and maintained with precision — protecting both consumers and your business." },
      { title: "Recipe & Content Marketing", body: "Recipe sections, usage inspiration, and editorial food content that builds organic search authority and keeps your audience engaged between purchases." },
      { title: "Restaurant & Venue Integration", body: "For food businesses with physical premises — seamless booking integration, menu presentation, and event pages that drive footfall alongside online sales." },
    ],
    sectors: ["Artisan Food Producers", "Craft Breweries & Distilleries", "Wine & Spirits", "Subscription Food Boxes", "Restaurant Chains", "Catering & Events", "Health Food & Supplements", "Farm Shops & Delis"],
  },
  {
    slug: "charities",
    label: "Charities & NFPs",
    title: "Web Design for Charities UK",
    metaDesc: "Professional web design for UK charities and non-profit organisations. Crea Web builds bespoke, accessible websites for charities and NFPs that grow donations, volunteers, and supporter communities.",
    headline: "Web Design for Charities",
    subHeadline: "& Non-Profit Organisations",
    intro: "Charity and non-profit websites must do more with less — inspiring trust, driving donations, recruiting volunteers, and serving beneficiaries, all within the constraints of a third-sector budget. We design and build purposeful, accessible digital presences for UK charities and NFPs that communicate your impact and grow your supporter community.",
    features: [
      { title: "Impact-Led Storytelling", body: "Beneficiary stories, impact statistics, and programme outcomes presented with emotional clarity — the content that turns casual visitors into committed supporters." },
      { title: "Donation Journey Optimisation", body: "Gift Aid-enabled donation flows, recurring giving sign-up, and fundraising campaign pages designed to maximise online giving with minimal friction." },
      { title: "Volunteer Recruitment", body: "Volunteer registration, role listings, and onboarding workflows that grow your voluntary workforce and reduce recruitment costs." },
      { title: "Charity Commission Compliance", body: "Annual reports, governance documents, trustee information, and statutory disclosures presented correctly — meeting Charity Commission transparency requirements." },
      { title: "Accessibility as Standard", body: "WCAG 2.1 AA accessibility compliance across every page — because charities serve everyone, and your website should too." },
      { title: "Third-Sector Budget Sensitivity", body: "We work with charitable organisations at pricing that reflects the sector — without compromising on the quality of design, build, or ongoing support." },
    ],
    sectors: ["Registered Charities", "Community Interest Companies", "Social Enterprises", "Housing Associations", "Educational Trusts", "Health Charities", "Environmental Organisations", "Arts & Cultural Charities"],
  },
];

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.metaDesc,
    alternates: { canonical: `https://creaweb.co.uk/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.title} | Crea Web Agency`,
      description: industry.metaDesc,
      url: `https://creaweb.co.uk/industries/${industry.slug}`,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57]" />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <Link href="/#about" className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans hover:text-[#F6F1E8] transition-colors">
                Industries We Serve
              </Link>
            </div>
            <div className="max-w-[680px]">
              <h1
                className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                {industry.headline}
                <br />
                <em className="text-[#B08D57]">{industry.subHeadline}</em>
              </h1>
              <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light mb-8 max-w-[54ch]">
                {industry.intro}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300"
              >
                Discuss Your Project
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#F6F1E8] py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                What We Deliver
              </span>
            </div>
            <h2
              className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Bespoke Web Design for
              <br />
              <em className="text-[#12372A]">{industry.label}</em>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10">
              {industry.features.map((f) => (
                <div key={f.title} className="bg-[#F6F1E8] p-8 md:p-10 flex flex-col gap-4">
                  <h3 className="font-serif-display text-[#1C1C1C] text-[1.15rem] leading-tight">{f.title}</h3>
                  <p className="text-[#7C746A] text-[0.88rem] leading-[1.75] font-sans font-light">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="bg-[#1C1C1C] py-20 md:py-24">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <h2
              className="font-serif-display text-[#F6F1E8] leading-[1.1] mb-12"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Sectors Within
              <br />
              <em className="text-[#B08D57]">{industry.label}</em>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F6F1E8]/8">
              {industry.sectors.map((s) => (
                <div key={s} className="bg-[#1C1C1C] px-6 py-5 border-l border-[#B08D57]/20">
                  <p className="text-[#F6F1E8]/70 text-[0.85rem] font-sans font-light leading-snug">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-[#F6F1E8] py-16 border-t border-[#1C1C1C]/8">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans mb-3">Ready to Start?</p>
              <p className="font-serif-display text-[#1C1C1C] text-[1.4rem] leading-tight max-w-[44ch]">
                Tell us about your {industry.label.toLowerCase()} business and we&rsquo;ll come back within one business day.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-8 py-4 hover:bg-[#B08D57] transition-colors duration-300">
                Get in Touch
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#1C1C1C] border border-[#1C1C1C]/30 px-8 py-4 hover:border-[#12372A] hover:text-[#12372A] transition-colors duration-300">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
