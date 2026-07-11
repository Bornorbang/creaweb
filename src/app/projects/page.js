"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const allProjects = [
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
    client: "Bae Bronx",
    category: "Fashion",
    image: "/images/works/baebronx.png",
  },
  {
    index: "005",
    client: "Religion Empowering Ministries",
    category: "NGO",
    image: "/images/works/empowering.png",
  },
  {
    index: "006",
    client: "Travisa Ltd",
    category: "Travel",
    image: "/images/works/evisa_website.jpg",
  },
  {
    index: "007",
    client: "NGO Grace Empowered",
    category: "Education",
    image: "/images/works/graceempoweredearlyyears.png",
  },
  {
    index: "008",
    client: "Lily Heart Home Care",
    category: "Healthcare",
    image: "/images/works/lilyhearthomecare-ca.jpg",
  },
  {
    index: "009",
    client: "Makeup Talent",
    category: "Beauty",
    image: "/images/works/makeuptalent.png",
  },
  {
    index: "010",
    client: "Naija Beauty",
    category: "E-Commerce",
    image: "/images/works/Naijabeauty.png",
  },
  {
    index: "011",
    client: "Lady Flora",
    category: "Business",
    image: "/images/works/trimmer1.png",
  },
  {
    index: "012",
    client: "WizzyPro",
    category: "Photography",
    image: "/images/works/wizzypro.png",
  },
];

export default function ProjectsPage() {
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
    <>
      <Navbar />
      
      {/* Hero section */}
      <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
        {/* Banner image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1800&auto=format&fit=crop&q=70"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12372A] via-[#12372A]/85 to-[#12372A]/50" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57] z-10" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-10 animate-fade-up">
            <span className="block w-8 h-[1px] bg-[#B08D57]" />
            <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
              Our Work
            </span>
          </div>
          <div className="max-w-[700px]">
            <h1
              className="font-serif-display text-[#F6F1E8] leading-[1.06] mb-8 animate-fade-up animation-delay-200"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              All Our Projects
              <br />
              <em className="text-[#B08D57]">Web Design Portfolio</em>
            </h1>
            <p className="text-[#F6F1E8]/60 text-[0.9rem] leading-[1.82] font-sans font-light max-w-[52ch] animate-fade-up animation-delay-400">
              Explore our complete portfolio of web design and digital solutions across industries. Click on any project image to scroll through and see the full design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-[#F6F1E8] py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, i) => (
              <Reveal key={project.index} delay={i * 50}>
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

      <Footer />
    </>
  );
}
