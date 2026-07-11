import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Accessibility Statement",
  description: "Our commitment to making creaweb.co.uk accessible to everyone.",
  alternates: { canonical: "https://creaweb.co.uk/accessibility" },
};

const LAST_UPDATED = "18 June 2026";

export default function AccessibilityPage() {
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
            <div className="flex items-center gap-4 mb-8 animate-fade-up">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">Legal</span>
            </div>
            <h1 className="font-serif-display text-[#F6F1E8] leading-[1.06] animate-fade-up animation-delay-200" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              Accessibility Statement
            </h1>
            <p className="text-[#F6F1E8]/50 text-[0.82rem] font-sans mt-4 animate-fade-up animation-delay-400">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-[#F6F1E8] py-20 md:py-28">
          <div className="max-w-[760px] mx-auto px-6 md:px-10 prose-legal">

            <h2>Our Commitment</h2>
            <p>Crea Web is committed to ensuring that creaweb.co.uk is accessible to as many people as possible, regardless of ability or technology used. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA.</p>

            <h2>Technical Approach</h2>
            <p>We have taken the following steps to improve accessibility across the site:</p>
            <ul>
              <li>All pages use semantic HTML5 elements to convey structure to assistive technologies.</li>
              <li>All non-decorative images include descriptive <code>alt</code> text.</li>
              <li>Colour contrast ratios meet or exceed the WCAG AA standard (4.5:1 for normal text, 3:1 for large text).</li>
              <li>The site is fully navigable using a keyboard alone, with visible focus indicators throughout.</li>
              <li>Interactive elements have accessible labels via <code>aria-label</code> and <code>aria-expanded</code> where appropriate.</li>
              <li>Text can be resized up to 200% without loss of content or functionality.</li>
              <li>The site is tested against modern screen readers including NVDA and VoiceOver.</li>
            </ul>

            <h2>Known Limitations</h2>
            <p>While we strive for full WCAG 2.2 AA compliance, some areas may not yet be fully accessible. We are actively working to address these. Known limitations include:</p>
            <ul>
              <li>Some third-party embedded content may not fully meet accessibility standards. We have limited control over third-party code.</li>
              <li>Complex animated elements may present challenges for users with vestibular disorders. We recommend enabling &ldquo;Reduce Motion&rdquo; in your operating system settings if needed.</li>
            </ul>

            <h2>Assistive Technology Support</h2>
            <p>This site is designed to be compatible with:</p>
            <ul>
              <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
              <li>Keyboard-only navigation</li>
              <li>Browser zoom up to 200%</li>
              <li>High-contrast display modes</li>
            </ul>

            <h2>Feedback and Contact</h2>
            <p>We welcome feedback on the accessibility of creaweb.co.uk. If you encounter any barriers or have suggestions for improvement, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:contact@creaweb.co.uk">contact@creaweb.co.uk</a></li>
              <li>We aim to respond to accessibility feedback within 5 business days.</li>
            </ul>
            <p>If you are not satisfied with our response, you can contact the <a href="https://www.equalityhumanrights.com" target="_blank" rel="noopener noreferrer">Equality and Human Rights Commission (EHRC)</a>.</p>

            <h2>Enforcement</h2>
            <p>This statement covers creaweb.co.uk only. It does not cover third-party websites that we may link to from our site.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
