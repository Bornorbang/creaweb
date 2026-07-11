"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function LocationFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#F6F1E8] py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2
              className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-4"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-[#7C746A] text-[0.95rem] leading-relaxed font-sans font-light">
              Everything you need to know about our services and process.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 50}>
              <div
                className="bg-white border border-[#1C1C1C]/10 overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: "0",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#F6F1E8]/50 transition-colors duration-300"
                >
                  <span className="font-serif-display text-[#1C1C1C] text-[1.05rem] leading-tight pr-4">
                    {faq.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`flex-shrink-0 text-[#B08D57] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-8 py-6 bg-white border-t border-[#1C1C1C]/10">
                    <p className="text-[#7C746A] text-[0.9rem] leading-[1.8] font-sans font-light">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
