import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing use of Crea Web services.",
  alternates: { canonical: "https://creaweb.co.uk/terms-of-service" },
};

const LAST_UPDATED = "18 June 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#12372A] pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&auto=format&fit=crop&q=70"
            alt="" aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12372A] via-[#12372A]/85 to-[#12372A]/50" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57] z-10" />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">Legal</span>
            </div>
            <h1 className="font-serif-display text-[#F6F1E8] leading-[1.06]" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              Terms of Service
            </h1>
            <p className="text-[#F6F1E8]/50 text-[0.82rem] font-sans mt-4">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-[#F6F1E8] py-20 md:py-28">
          <div className="max-w-[760px] mx-auto px-6 md:px-10 prose-legal">

            <h2>1. Introduction</h2>
            <p>These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Crea Web website at creaweb.co.uk (&ldquo;the Site&rdquo;) and any services provided by Crea Web (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a web design and development agency based in Manchester, United Kingdom.</p>
            <p>By accessing the Site or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use the Site.</p>

            <h2>2. Services</h2>
            <p>Crea Web provides web design, web development, e-commerce, SEO, and related digital services. The specific scope, deliverables, timeline, and fees for any engagement are set out in a separate written proposal or service agreement, which forms part of the contract between us.</p>

            <h2>3. Use of the Website</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for any unlawful purpose or in violation of any applicable regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its underlying systems.</li>
              <li>Transmit any unsolicited commercial communications via the Site.</li>
              <li>Introduce viruses, malware, or other harmful code.</li>
              <li>Scrape, crawl, or harvest content from the Site without our written consent.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>All content on this Site — including text, graphics, logos, and code — is the property of Crea Web or its licensors and is protected by UK and international copyright law.</p>
            <p>Deliverables produced for clients are subject to the intellectual property terms set out in the relevant service agreement. Typically, full ownership transfers to the client upon receipt of final payment.</p>

            <h2>5. Payment Terms</h2>
            <p>Project fees are as agreed in the service proposal. Invoices are due within 14 days of issue unless otherwise agreed in writing. Late payments may incur statutory interest under the Late Payment of Commercial Debts (Interest) Act 1998.</p>

            <h2>6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Crea Web shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or our services. Our total liability in connection with any engagement shall not exceed the total fees paid by you in the 12 months preceding the claim.</p>

            <h2>7. Governing Law</h2>
            <p>These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

            <h2>8. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.</p>

            <h2>9. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
