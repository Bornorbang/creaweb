"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function ContactPage() {
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
    <>
      <Navbar />
      <main>

        {/* ── Hero — same banner style as About ──────────────────────────── */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800&auto=format&fit=crop&q=70"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12372A] via-[#12372A]/85 to-[#12372A]/50" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57] z-10" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-10 animate-fade-up">
              <span className="block w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans">
                Get in Touch
              </span>
            </div>
            <div className="max-w-[640px]">
              <h1
                className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-8 animate-fade-up animation-delay-200"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Let&rsquo;s Begin with
                <br />
                <em className="text-[#B08D57]">a Conversation</em>
              </h1>
              <p className="text-[#F6F1E8]/70 text-[0.9rem] leading-relaxed font-sans font-light animate-fade-up animation-delay-400">
                We welcome enquiries from businesses that care about their
                digital presence. Tell us about your project and we will be in
                touch within one business day.
              </p>
            </div>
          </div>
        </section>

        {/* ── Contact body ───────────────────────────────────────────────── */}
        <section className="bg-[#F6F1E8] py-28 md:py-36 relative overflow-hidden">
          {/* Decorative large serif numeral */}
          <p
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 font-serif-display text-[#12372A]/[0.04] select-none pointer-events-none leading-none"
            aria-hidden="true"
            style={{ fontSize: "clamp(12rem, 28vw, 28rem)" }}
          >
            C
          </p>

          <Reveal>
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — contact details */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="block w-6 h-[1px] bg-[#B08D57]" />
                <span className="text-[#B08D57] text-[0.65rem] tracking-[0.22em] uppercase font-sans">Reach Us</span>
              </div>
              <h2
                className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-10"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                We&rsquo;d love to hear
                <br />
                <em className="text-[#B08D57]">about your project</em>
              </h2>
              <div className="space-y-5 mb-12">
                {[
                  { label: "Email",    value: "contact@creaweb.co.uk" },
                  { label: "Phone",    value: "+44 20 7123 4567"           },
                  { label: "Location", value: "Manchester · Remote across UK" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-5">
                    <span className="text-[#B08D57] text-[0.65rem] tracking-[0.16em] uppercase font-sans pt-0.5 w-16 shrink-0">
                      {c.label}
                    </span>
                    <span className="text-[#7C746A] text-[0.9rem] font-sans">
                      {c.value}
                    </span>
                  </div>
                ))}
              </div>

              <hr className="border-t border-[#1C1C1C]/10 mb-10" />

              <p className="text-[#7C746A] text-[0.82rem] leading-[1.82] font-sans font-light max-w-[38ch]">
                We take on a limited number of projects each year to ensure every
                client receives our full attention and commitment.
              </p>
            </div>

            {/* Right — form on dark green panel */}
            <div className="bg-[#12372A] p-8 md:p-10">
              {sent ? (
                <div className="py-12 text-center">
                  <p className="font-serif-display text-[#F6F1E8] text-[1.8rem] mb-3">Enquiry Received</p>
                  <p className="text-[#F6F1E8]/60 text-[0.88rem] font-sans leading-[1.75]">
                    Thank you — we&rsquo;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#B08D57]">Full Name *</label>
                      <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Smith"
                        className="bg-transparent border-b border-[#F6F1E8]/20 py-3 text-[#F6F1E8] text-[0.9rem] font-sans placeholder:text-[#F6F1E8]/25 focus:outline-none focus:border-[#B08D57] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="mobile" className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#B08D57]">Mobile Number</label>
                      <input id="mobile" name="mobile" type="tel" autoComplete="tel" placeholder="+44 7700 900000"
                        className="bg-transparent border-b border-[#F6F1E8]/20 py-3 text-[#F6F1E8] text-[0.9rem] font-sans placeholder:text-[#F6F1E8]/25 focus:outline-none focus:border-[#B08D57] transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#B08D57]">Email Address *</label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@example.co.uk"
                      className="bg-transparent border-b border-[#F6F1E8]/20 py-3 text-[#F6F1E8] text-[0.9rem] font-sans placeholder:text-[#F6F1E8]/25 focus:outline-none focus:border-[#B08D57] transition-colors" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#B08D57]">Approximate Budget</label>
                    <select id="budget" name="budget"
                      className="bg-transparent border-b border-[#F6F1E8]/20 py-3 text-[#F6F1E8] text-[0.9rem] font-sans focus:outline-none focus:border-[#B08D57] transition-colors cursor-pointer appearance-none">
                      <option value="" className="bg-[#12372A]">Please select…</option>
                      <option className="bg-[#12372A]">£5,000 – £10,000</option>
                      <option className="bg-[#12372A]">£10,000 – £25,000</option>
                      <option className="bg-[#12372A]">£25,000 – £50,000</option>
                      <option className="bg-[#12372A]">£50,000+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[0.68rem] tracking-[0.14em] uppercase font-sans text-[#B08D57]">Tell Us About Your Project *</label>
                    <textarea id="message" name="message" rows={5} required
                      placeholder="A brief description of your business, what you need, and any particular challenges you're facing…"
                      className="bg-transparent border-b border-[#F6F1E8]/20 py-3 text-[#F6F1E8] text-[0.9rem] font-sans placeholder:text-[#F6F1E8]/25 focus:outline-none focus:border-[#B08D57] transition-colors resize-none" />
                  </div>

                  <button type="submit" disabled={sending}
                    className="mt-2 self-start inline-flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-8 py-4 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300 disabled:opacity-50">
                    {sending ? "Sending…" : "Send Enquiry"}
                    {!sending && (
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                        <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                  {error && (
                    <p className="text-red-400 text-[0.82rem] font-sans">{error}</p>
                  )}
                </form>
              )}
            </div>
          </div>
          </Reveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
