import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Cookie Policy",
  description: "How Crea Web uses cookies and similar technologies.",
  alternates: { canonical: "https://creaweb.co.uk/cookie-policy" },
};

const LAST_UPDATED = "18 June 2026";

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="text-[#F6F1E8]/50 text-[0.82rem] font-sans mt-4">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-[#F6F1E8] py-20 md:py-28">
          <div className="max-w-[760px] mx-auto px-6 md:px-10 prose-legal">

            <h2>1. What Are Cookies</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your experience on future visits.</p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>

            <h3>Essential Cookies</h3>
            <p>These cookies are necessary for the website to function and cannot be switched off. They are set in response to actions you take, such as setting your privacy preferences.</p>

            <h3>Analytics Cookies</h3>
            <p>We use analytics cookies to understand how visitors interact with our website — which pages are most visited, how long visitors stay, and where they come from. This data is aggregated and anonymous. It helps us improve our site.</p>

            <h3>Performance Cookies</h3>
            <p>These cookies help us deliver a faster, more reliable experience by caching resources and reducing load times on repeat visits.</p>

            <h2>3. Third-Party Cookies</h2>
            <p>Some third-party services embedded on our site (such as analytics tools or embedded media) may set their own cookies. We do not control these cookies directly. Please refer to the respective providers&rsquo; privacy policies for details.</p>

            <h2>4. Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. Most browsers allow you to:</p>
            <ul>
              <li>See what cookies are set.</li>
              <li>Delete cookies individually or all at once.</li>
              <li>Block third-party cookies.</li>
              <li>Block all cookies from specific sites.</li>
            </ul>
            <p>Note that disabling essential cookies may affect the functionality of the website.</p>

            <h2>5. Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Please check back periodically for the latest version.</p>

            <h2>6. Contact</h2>
            <p>If you have questions about our use of cookies, contact us at <a href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
