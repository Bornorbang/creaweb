import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description: "How Crea Web collects, uses, and protects your personal data.",
  alternates: { canonical: "https://creaweb.co.uk/privacy-policy" },
};

const LAST_UPDATED = "18 June 2026";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-[#F6F1E8]/50 text-[0.82rem] font-sans mt-4">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-[#F6F1E8] py-20 md:py-28">
          <div className="max-w-[760px] mx-auto px-6 md:px-10 prose-legal">

            <h2>1. Who We Are</h2>
            <p>Crea Web (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a web design and development agency based in Manchester, United Kingdom. Our website is <a href="https://creaweb.co.uk">creaweb.co.uk</a>. You can contact us at <a href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</a>.</p>
            <p>We are committed to protecting your personal data and handling it in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

            <h2>2. Data We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul>
              <li><strong>Enquiry data:</strong> name, email address, phone number, company name, and project details submitted via our contact form.</li>
              <li><strong>Usage data:</strong> IP address, browser type, pages visited, and time spent on the site, collected automatically via analytics tools.</li>
              <li><strong>Communication data:</strong> any information you send us via email or other channels.</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Respond to your enquiries and provide the services you request.</li>
              <li>Send project-related communications during an active engagement.</li>
              <li>Improve our website and services through aggregated analytics.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your data on the following legal grounds:</p>
            <ul>
              <li><strong>Legitimate interests:</strong> to respond to your enquiry and manage our business relationship.</li>
              <li><strong>Contract performance:</strong> where we are fulfilling a service agreement.</li>
              <li><strong>Legal obligation:</strong> where required by law.</li>
              <li><strong>Consent:</strong> where you have explicitly opted in (e.g. marketing emails, if applicable).</li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>We retain enquiry data for up to 24 months unless an ongoing client relationship requires longer retention. Analytics data is retained in aggregated form only. You may request deletion at any time.</p>

            <h2>6. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request erasure of your data.</li>
              <li>Object to or restrict processing.</li>
              <li>Data portability.</li>
              <li>Lodge a complaint with the ICO (ico.org.uk).</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</a>.</p>

            <h2>7. Cookies</h2>
            <p>We use cookies to improve your browsing experience and gather anonymous usage statistics. Please see our <a href="/cookie-policy">Cookie Policy</a> for full details.</p>

            <h2>8. Third-Party Services</h2>
            <p>We may use third-party tools (such as analytics providers) that process data on our behalf. These providers are contractually bound to process data only as instructed and in compliance with applicable law.</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page indicates when the most recent changes were made.</p>

            <h2>10. Contact</h2>
            <p>For any privacy-related queries, contact us at <a href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</a> or by post at Crea Web, Manchester, United Kingdom.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
