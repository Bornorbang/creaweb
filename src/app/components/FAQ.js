"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects run between 1 and 3 weeks from brief to launch, depending on scope and complexity. We’ll set a clear timeline before work begins and keep you informed at every stage.",
  },
  {
    q: "What is your minimum project budget?",
    a: "Our work typically starts from £5,000 for focused design and development projects. Larger builds, bespoke platforms, and ongoing retainer partnerships sit at higher investment levels. We're transparent about costs from the first conversation — no surprise invoices.",
  },
  {
    q: "Do you work with clients outside of Manchester?",
    a: "Absolutely. While we're based in Manchester, the majority of our clients are spread across the UK and beyond. We work entirely remotely with the same rigour and communication you'd expect in person, using structured check-ins and shared project tools.",
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Every site we build is fully responsive by default — designed mobile-first and tested across modern browsers and devices. We don't treat mobile as an afterthought; it's central to how we design from the very first wireframe.",
  },
  {
    q: "Can you help with an existing website rather than building from scratch?",
    a: "Yes. We regularly undertake redesigns, performance audits, and incremental improvements on existing platforms. We'll assess what you have, identify what's holding you back, and propose the most efficient path forward — which isn't always a full rebuild.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "We offer structured ongoing partnership retainers covering maintenance, content updates, performance monitoring, and iterative improvements. Many of our clients transition into this model after launch. One-off support is also available for simpler needs.",
  },
  {
    q: "What platforms and technologies do you build on?",
    a: "We use the right tool for the job. We work with WordPress, Shopify, Next.js, PHP, Python, Django, Tailwind CSS, Wix, and more. For content-heavy sites, headless CMS solutions such as Sanity or Contentful. We don’t push a single stack — we choose based on your requirements.",
  },
  {
    q: "How do I get started?",
    a: "Simply fill in the contact form on our Contact page with a brief description of your project. We\u2019ll review it and respond within one business day. You can also reach us directly at ",
    link: { label: "contact@creaweb.co.uk", href: "mailto:contact@creaweb.co.uk" },
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#F6F1E8] py-24 md:py-32 border-t border-[#1C1C1C]/8">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Common Questions
              </span>
            </div>
            <h2
              className="font-serif-display text-[#1C1C1C] leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Frequently Asked
              <br />
              <em className="text-[#B08D57]">Questions</em>
            </h2>
          </div>
          <p className="text-[#7C746A] text-[0.9rem] leading-[1.82] font-sans font-light max-w-[44ch] md:text-right">
            If you don&rsquo;t find what you&rsquo;re looking for, reach out directly
            and we&rsquo;ll be happy to help.
          </p>
        </div>
        </Reveal>

        {/* Accordion */}
        <Reveal delay={100} threshold={0.05}>
          <div className="divide-y divide-[#1C1C1C]/10 border-y border-[#1C1C1C]/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-8 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-serif-display leading-[1.2] transition-colors duration-300 ${
                      isOpen ? "text-[#12372A]" : "text-[#1C1C1C] group-hover:text-[#12372A]"
                    }`}
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
                  >
                    {faq.q}
                  </span>
                  {/* +/– icon */}
                  <span
                    className={`shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-[#12372A] bg-[#12372A] text-[#F6F1E8] rotate-45"
                        : "border-[#1C1C1C]/20 text-[#1C1C1C] group-hover:border-[#12372A] group-hover:text-[#12372A]"
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {/* Answer panel */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-96 pb-7" : "max-h-0"
                  }`}
                >
                  <p className="text-[#7C746A] text-[0.9rem] leading-[1.82] font-sans font-light">
                    {faq.a}
                    {faq.link && (
                      <a
                        href={faq.link.href}
                        className="text-[#12372A] underline underline-offset-2 hover:text-[#B08D57] transition-colors"
                      >
                        {faq.link.label}
                      </a>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
