import Link from "next/link";
import Reveal from "./Reveal";

export default function LocationPricing({ pricing }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-6">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Pricing
              </span>
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
            </div>
            <h2
              className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-4"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
            >
              Transparent Pricing
            </h2>
            <p className="text-[#7C746A] text-[0.95rem] leading-relaxed font-sans font-light max-w-[52ch] mx-auto">
              No hidden fees. No surprises. Choose the plan that fits your project scope and goals.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan) => (
            <Reveal key={plan.name} delay={0}>
              <div
                className={`relative p-8 md:p-10 rounded-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "border-2 border-[#B08D57] bg-[#F6F1E8]/30"
                    : "border border-[#1C1C1C]/10 bg-white hover:border-[#B08D57]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#B08D57] text-[#F6F1E8] text-[0.65rem] tracking-[0.12em] uppercase font-sans px-4 py-1">
                      {plan.cta}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif-display text-[#1C1C1C] text-[1.6rem] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#7C746A] text-[0.85rem] font-sans font-light mb-4">
                    {plan.description}
                  </p>
                  <div className="text-[#12372A] text-[2.2rem] font-serif-display font-light mb-2">
                    {plan.price}
                  </div>
                </div>

                <div className="border-t border-[#1C1C1C]/10 pt-6 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="text-[#B08D57] flex-shrink-0 mt-0.5"
                        >
                          <path
                            d="M15.5 4.5L6.5 13.5L2.5 9.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-[#1C1C1C] text-[0.88rem] leading-relaxed font-sans font-light">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`inline-flex w-full justify-center items-center gap-2 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans px-6 py-3 transition-colors duration-300 ${
                    plan.highlighted
                      ? "text-[#F6F1E8] bg-[#12372A] hover:bg-[#B08D57]"
                      : "text-[#12372A] border border-[#12372A]/30 hover:border-[#B08D57] hover:text-[#B08D57]"
                  }`}
                >
                  Get Started
                  <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                    <path
                      d="M1 5h12M8 1l5 4-5 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
