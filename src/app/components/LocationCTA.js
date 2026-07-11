"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function LocationCTA() {
  return (
    <section className="relative bg-[#12372A] py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&auto=format&fit=crop&q=70"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#12372A] via-[#12372A]/90 to-[#12372A]/70" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <Reveal direction="left" className="max-w-none">
          <h2
            className="font-serif-display text-[#F6F1E8] leading-[1.1] mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-[#F6F1E8]/70 text-[0.95rem] leading-relaxed font-sans font-light">
            Let's discuss your project, your goals, and how we can help your business
            succeed online. Every conversation starts with understanding your needs.
          </p>
        </Reveal>

        {/* Right — button */}
        <Reveal direction="right" delay={100} className="flex justify-start lg:justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-10 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300"
          >
            Get in Touch
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path
                d="M1 5h12M8 1l5 4-5 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
