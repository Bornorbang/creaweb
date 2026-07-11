"use client";

import { useState, useRef } from "react";
import Reveal from "./Reveal";

export default function LocationWork({ projects, cityName }) {
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
    <section className="bg-[#F6F1E8] py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
              Our Work
            </span>
            <hr className="flex-1 divider" />
          </div>

          <h2
            className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-16"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
          >
            Featured Projects
          </h2>
        </Reveal>

        {/* Portfolio grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.index} delay={i * 80}>
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
                    src={project.image}
                    alt={`Web Design ${cityName}`}
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
                        {project.category}
                      </span>
                      <h3
                        className="font-serif-display text-[#1C1C1C] leading-tight"
                        style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                      >
                        {project.client}
                      </h3>
                    </div>
                    <span className="font-serif-display text-[#B08D57]/60 text-[1.8rem] leading-none">
                      {project.index}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
