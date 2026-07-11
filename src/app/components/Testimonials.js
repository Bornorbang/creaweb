import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Crea Web didn't just build us a website — they helped us understand what we were trying to say and who we were saying it to. The result has transformed how prospective clients perceive us.",
    author: "Catherine Hargreaves",
    role: "Managing Partner",
    firm: "Hargreaves Family Law",
    location: "Bristol",
    initial: "C",
  },
  {
    quote:
      "Working with Crea Web was unlike any agency experience I'd had before. They were unhurried, thorough, and deeply invested in getting things right. The new site speaks to our customers in a way we never managed before.",
    author: "Robert Dunmore",
    role: "Founder",
    firm: "Dunmore Fine Furniture",
    location: "Bath",
    initial: "R",
  },
  {
    quote:
      "The team's understanding of how a considered aesthetic can convert visitors into clients is exceptional. Our bounce rate halved and enquiry volume tripled within three months of launch.",
    author: "Priya Mehta",
    role: "Director of Marketing",
    firm: "Sable & Partners Wealth",
    location: "Edinburgh",
    initial: "P",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#1C1C1C] py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
              What Clients Say
            </span>
            <hr className="flex-1 border-t border-[#F6F1E8]/10" />
          </div>

          <h2
            className="font-serif-display text-[#F6F1E8] leading-[1.1] mb-12"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
          >
            Why Choose{" "}
            <em className="text-[#B08D57]">Crea Web</em>
          </h2>
        </Reveal>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-px bg-[#F6F1E8]/8">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 100} className="h-full">
              <div
                className="bg-[#1C1C1C] p-8 md:p-10 flex flex-col gap-6 h-full"
              >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#B08D57] text-[0.7rem]">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#F6F1E8]/70 text-[0.92rem] leading-[1.82] font-sans font-light italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#F6F1E8]/8">
                <div className="w-10 h-10 rounded-full bg-[#12372A] flex items-center justify-center shrink-0">
                  <span className="font-serif-display text-[#B08D57] text-[1rem]">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="text-[#F6F1E8] text-[0.82rem] font-medium font-sans">
                    {t.author}
                  </p>
                  <p className="text-[#7C746A] text-[0.72rem] font-sans">
                    {t.role} · {t.firm}
                  </p>
                  <p className="text-[#7C746A]/60 text-[0.68rem] font-sans">
                    {t.location}
                  </p>
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
