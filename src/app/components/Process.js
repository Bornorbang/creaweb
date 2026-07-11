import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Discovery & Listening",
    body: "Every project begins not with a screen, but with a conversation. We take the time to understand your business deeply — your market, your audience, your ambitions, and the gaps your current digital presence fails to bridge.",
    duration: "1 – 2 weeks",
  },
  {
    number: "02",
    title: "Strategy & Architecture",
    body: "With a clear understanding of your world, we map the digital architecture of your new presence. Sitemap, user journeys, content hierarchy — the structural decisions that determine whether a website succeeds.",
    duration: "1 – 2 weeks",
  },
  {
    number: "03",
    title: "Design & Art Direction",
    body: "We craft visual languages unique to each client. Typography, colour, spacing, photography direction — each element chosen with intention. Moodboards, wireframes, and high-fidelity designs that leave nothing to imagination.",
    duration: "3 – 5 weeks",
  },
  {
    number: "04",
    title: "Build & Refine",
    body: "Our development mirrors the precision of our design. Clean, semantic code. Accessibility by default. Performance built in, not bolted on. We iterate with rigour and test across every device before launch.",
    duration: "4 – 8 weeks",
  },
  {
    number: "05",
    title: "Launch & Continuity",
    body: "A launch is not an ending — it is the beginning of an ongoing relationship. We manage deployment with care, monitor performance, and remain available to our clients long after the champagne has been opened.",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
              How We Work
            </span>
            <hr className="flex-1 divider" />
          </div>

          <h2
            className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
          >
            Our Website Design Process
          </h2>
          <p className="text-[#7C746A] text-[0.95rem] leading-relaxed font-sans font-light max-w-[60ch] mb-16">
            A structured, five-phase approach that keeps you informed, involved, and confident at every stage — from the first conversation to launch and beyond.
          </p>
        </Reveal>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="bg-[#F6F1E8] border border-[#1C1C1C]/8 p-8 md:p-10 flex flex-col gap-5 h-full hover:border-[#B08D57] hover:shadow-lg transition-all duration-300">
                {/* Number badge */}
                <div className="flex items-center justify-between">
                  <span className="font-serif-display text-[2.5rem] text-[#B08D57]/20 leading-none">
                    {step.number}
                  </span>
                  <span className="text-[0.62rem] tracking-[0.1em] uppercase font-sans text-[#7C746A]">
                    {step.duration}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif-display text-[#1C1C1C] text-[1.3rem] leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#7C746A] text-[0.9rem] leading-[1.75] font-sans font-light">
                    {step.body}
                  </p>
                </div>

                {/* Visual accent */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-[#B08D57]" />
                    <span className="text-[0.65rem] tracking-[0.14em] uppercase font-sans text-[#12372A] font-medium">
                      Step {step.number}
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
