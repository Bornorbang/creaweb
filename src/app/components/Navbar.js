"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing",  href: "/pricing"  },
  { label: "Work",     href: "#work"     },
  { label: "About",    href: "/about"    },
  { label: "Insights", href: "/insights" },
  { label: "Contact",  href: "/contact"  },
];

export default function Navbar({ initialDark = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light = overlaying the dark green hero (initial, not scrolled, not a light-bg page)
  const light = !scrolled && !initialDark;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F6F1E8]/95 backdrop-blur-sm border-b border-[#1C1C1C]/10 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <nav className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300">
          <Image
            src={light ? "/images/Crea%20Web%20Logo%20-%20white.png" : "/images/Crea%20Web%20Logo%20-%20green.png"}
            alt="Crea Web Agency"
            width={32}
            height={32}
            className="h-7 w-auto"
            priority
          />
          <span className={`font-serif-display text-[1.2rem] tracking-wide ${
            light ? "text-[#F6F1E8]" : "text-[#12372A]"
          }`}>
            Crea Web Agency
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`nav-link font-sans text-[0.8rem] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
                  light
                    ? "text-[#F6F1E8]/85 hover:text-[#F6F1E8]"
                    : "text-[#1C1C1C] hover:text-[#12372A]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`hidden md:inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.14em] uppercase px-6 py-3 transition-colors duration-300 ${
            light
              ? "text-[#F6F1E8] bg-[#B08D57] hover:bg-[#F6F1E8] hover:text-[#B08D57]"
              : "text-[#F6F1E8] bg-[#12372A] hover:bg-[#B08D57]"
          }`}
        >
          Start a Project
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block h-[1px] w-6 transition-all duration-300 ${
              light ? "bg-[#F6F1E8]" : "bg-[#1C1C1C]"
            } ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block h-[1px] w-6 transition-opacity duration-300 ${
              light ? "bg-[#F6F1E8]" : "bg-[#1C1C1C]"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1px] w-6 transition-all duration-300 ${
              light ? "bg-[#F6F1E8]" : "bg-[#1C1C1C]"
            } ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#F6F1E8] border-t border-[#1C1C1C]/10 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[0.8rem] font-medium tracking-[0.12em] uppercase text-[#1C1C1C] border-b border-[#1C1C1C]/8 hover:text-[#12372A] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center text-[0.75rem] font-medium tracking-[0.14em] uppercase text-[#F6F1E8] bg-[#12372A] px-6 py-3"
            >
              Start a Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
