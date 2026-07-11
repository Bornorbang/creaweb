"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { useState, useRef } from "react";

const caseStudies = [
  {
    index: "001",
    client: "Aanchor Health",
    category: "Healthcare",
    image: "/images/works/aanchor.png",
  },
  {
    index: "002",
    client: "University Compare",
    category: "Education",
    image: "/images/works/academia.png",
  },
  {
    index: "003",
    client: "Accelede",
    category: "Technology",
    image: "/images/works/Accelede.png",
  },
  {
    index: "004",
    client: "Travisa Ltd",
    category: "Travel",
    image: "/images/works/evisa_website.jpg",
  },
  {
    index: "005",
    client: "Lady Flora",
    category: "Business",
    image: "/images/works/trimmer1.png",
  },
  {
    index: "006",
    client: "WizzyPro",
    category: "Photography",
    image: "/images/works/wizzypro.png",
  },
];

export default function CaseStudies() {
  const [scrolledImages, setScrolledImages] = useState(new Set());
  const imageRefs = useRef({});
  const animationFrameRefs = useRef({});

  const smoothScroll = (element, targetScroll) => {
    const startScroll = element.scrollTop;
    const distance = targetScroll - startScroll;
    const duration = 2000; // 2 second smooth scroll for full scroll
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth motion
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      element.scrollTop = startScroll + distance * easeProgress;

      if (progress < 1) {
        animationFrameRefs.current[element] = requestAnimationFrame(animate);
      }
    };

    if (animationFrameRefs.current[element]) {
      cancelAnimationFrame(animationFrameRefs.current[element]);
    }
    animationFrameRefs.current[element] = requestAnimationFrame(animate);
  };

  const handleImageClick = (index) => {
    const imgElement = imageRefs.current[index];
    if (!imgElement) return;

    const maxScroll = imgElement.scrollHeight - imgElement.clientHeight;
    
    if (scrolledImages.has(index)) {
      // If already scrolled, reset to top
      setScrolledImages(new Set(scrolledImages).delete(index));
      smoothScroll(imgElement, 0);
    } else {
      // Scroll to bottom
      setScrolledImages(new Set(scrolledImages).add(index));
      smoothScroll(imgElement, maxScroll);
    }
  };

  return (
    <section id="work" className="bg-[#F6F1E8] py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
              Recent Projects
            </span>
            <hr className="flex-1 divider" />
          </div>

          <h2
            className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
          >
            Our Recent Work
          </h2>
        </Reveal>

        {/* Portfolio grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.index} delay={i * 80}>
              <div className="flex flex-col">
                {/* Image container */}
                <div
                  onClick={() => handleImageClick(i)}
                  role="button"
                  tabIndex={0}
                  className="group relative bg-gray-200 cursor-pointer h-80 sm:h-96 md:h-72 lg:h-80 mb-5 transition-all duration-300 overflow-hidden"
                  ref={(el) => {
                    if (el) imageRefs.current[i] = el;
                  }}
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <img
                    src={cs.image}
                    alt="Web design company UK"
                    className="w-full object-cover group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"
                    style={{
                      display: "block",
                      minHeight: "200%",
                    }}
                    draggable={false}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-sans tracking-widest pointer-events-none">
                    Click to scroll
                  </div>
                </div>

                {/* Text content below image */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[0.62rem] tracking-[0.14em] uppercase font-sans text-[#7C746A] block mb-2">
                        {cs.category}
                      </span>
                      <h3
                        className="font-serif-display text-[#1C1C1C] leading-tight"
                        style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                      >
                        {cs.client}
                      </h3>
                    </div>
                    <span className="font-serif-display text-[#B08D57]/60 text-[1.8rem] leading-none">
                      {cs.index}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] border-b border-[#12372A]/30 pb-0.5 hover:border-[#B08D57] hover:text-[#B08D57] transition-colors duration-300"
          >
            View all projects
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
