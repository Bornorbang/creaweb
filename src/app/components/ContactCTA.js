"use client";
import { useState } from "react";
import Reveal from "./Reveal";

export default function ContactCTA() {
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    const form = e.currentTarget;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    form.name.value,
          mobile:  form.mobile.value,
          email:   form.email.value,
          budget:  form.budget.value,
          message: form.message.value,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="bg-[#12372A] py-28 md:py-36 relative overflow-hidden">
      {/* Decorative large serif numeral */}
      <p
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 font-serif-display text-[#F6F1E8]/4 select-none pointer-events-none leading-none"
        aria-hidden="true"
        style={{ fontSize: "clamp(12rem, 28vw, 28rem)" }}
      >
        C
      </p>

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <Reveal direction="left" className="max-w-none">
          <div className="flex items-center gap-4 mb-10">
            <span className="block w-8 h-[1px] bg-[#B08D57]" />
            <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
              Get in Touch
            </span>
          </div>
          <h2
            className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-8"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
          >
            Let&rsquo;s Begin with
            <br />
            <em className="text-[#B08D57]">a Conversation</em>
          </h2>
          <p className="text-[#F6F1E8]/60 text-[0.95rem] leading-relaxed font-sans font-light max-w-[44ch] mb-10">
            We welcome enquiries from businesses that care about their digital
            presence. Tell us a little about your project and we will be in
            touch within one business day.
          </p>

          {/* Contact details */}
          <div className="space-y-5">
            {[
              { label: "Email",    value: "contact@creaweb.co.uk" },
              { label: "Phone",    value: "+44 20 7123 4567"           },
              { label: "Location", value: "Manchester · Remote across UK" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-5">
                <span className="text-[#B08D57] text-[0.65rem] tracking-[0.16em] uppercase font-sans pt-0.5 w-14 shrink-0">
                  {c.label}
                </span>
                <span className="text-[#F6F1E8]/70 text-[0.9rem] font-sans">
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal direction="right" delay={100}>
          <div className="bg-[#F6F1E8] p-8 md:p-10">
          {sent ? (
            <div className="py-12 text-center">
              <p className="font-serif-display text-[#12372A] text-[1.8rem] mb-3">Enquiry Received</p>
              <p className="text-[#7C746A] text-[0.88rem] font-sans leading-[1.75]">
                Thank you — we&rsquo;ll be in touch within one business day.
              </p>
            </div>
          ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="cta-name"
                  className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#7C746A]"
                >
                  Full Name
                </label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Jane Smith"
                  className="bg-transparent border-b border-[#1C1C1C]/20 py-3 text-[#1C1C1C] text-[0.9rem] font-sans placeholder:text-[#1C1C1C]/25 focus:outline-none focus:border-[#12372A] transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="cta-mobile"
                  className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#7C746A]"
                >
                  Mobile Number
                </label>
                <input
                  id="cta-mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+44 7700 900000"
                  className="bg-transparent border-b border-[#1C1C1C]/20 py-3 text-[#1C1C1C] text-[0.9rem] font-sans placeholder:text-[#1C1C1C]/25 focus:outline-none focus:border-[#12372A] transition-colors duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="cta-email"
                className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#7C746A]"
              >
                Email Address
              </label>
              <input
                id="cta-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="jane@example.co.uk"
                className="bg-transparent border-b border-[#1C1C1C]/20 py-3 text-[#1C1C1C] text-[0.9rem] font-sans placeholder:text-[#1C1C1C]/25 focus:outline-none focus:border-[#12372A] transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="cta-budget"
                className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#7C746A]"
              >
                Approximate Budget
              </label>
              <select
                id="cta-budget"
                name="budget"
                className="bg-transparent border-b border-[#1C1C1C]/20 py-3 text-[#1C1C1C] text-[0.9rem] font-sans focus:outline-none focus:border-[#12372A] transition-colors duration-300 cursor-pointer appearance-none"
              >
                <option value="">Please select…</option>
                <option value="5-10k">£5,000 – £10,000</option>
                <option value="10-25k">£10,000 – £25,000</option>
                <option value="25-50k">£25,000 – £50,000</option>
                <option value="50k+">£50,000+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="cta-message"
                className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#7C746A]"
              >
                Tell Us About Your Project
              </label>
              <textarea
                id="cta-message"
                name="message"
                rows={5}
                required
                placeholder="A brief description of your business, what you need, and any particular challenges you're facing…"
                className="bg-transparent border-b border-[#1C1C1C]/20 py-3 text-[#1C1C1C] text-[0.9rem] font-sans placeholder:text-[#1C1C1C]/25 focus:outline-none focus:border-[#12372A] transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-2 self-start inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-8 py-4 hover:bg-[#B08D57] transition-colors duration-300 disabled:opacity-50"
            >
              {sending ? "Sending…" : "Send Enquiry"}
              {!sending && (
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
            {error && (
              <p className="text-red-600 text-[0.82rem] font-sans">{error}</p>
            )}
          </form>
          )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
