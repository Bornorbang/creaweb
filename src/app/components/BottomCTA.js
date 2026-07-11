import Link from "next/link";
import Reveal from "./Reveal";

export default function BottomCTA() {
  return (
    <section className="bg-[#12372A] py-20 md:py-24">
      <Reveal>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2
            className="font-serif-display text-[#F6F1E8] leading-[1.1] mb-3"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            Ready to discuss your project?
          </h2>
          <p className="text-[#F6F1E8]/55 text-[0.9rem] font-sans">
            No commitment — just an honest conversation about what&rsquo;s possible.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300"
        >
          Get in Touch
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
      </Reveal>
    </section>
  );
}
