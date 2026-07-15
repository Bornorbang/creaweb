import Link from "next/link";
import Reveal from "./Reveal";

// Static fallback — shown when PHP API is unavailable
export const staticArticles = [
  {
    id: 1,
    slug: "why-british-businesses-underestimate-website",
    issue: "Issue 07",
    date: "June 2026",
    category: "Design Thinking",
    title: "Why British Businesses Still Underestimate Their Website",
    excerpt:
      "In a market increasingly shaped by digital expectations, the gap between what companies invest in their physical premises and their online presence remains, in many cases, embarrassingly wide.",
    readTime: "6 min read",
    coverImage: "https://picsum.photos/seed/design-thinking-1/800/500",
    color: "#12372A",
  },
  {
    id: 2,
    slug: "return-of-the-serif-typography",
    issue: "Issue 06",
    date: "April 2026",
    category: "Typography",
    title: "The Return of the Serif: Why Legibility is Having its Moment",
    excerpt:
      "After a decade dominated by grotesque sans-serifs and minimal interfaces, the web is rediscovering the warmth, authority, and readability of the serif typeface.",
    readTime: "4 min read",
    coverImage: "https://picsum.photos/seed/typography-editorial/800/500",
    color: "#B08D57",
  },
  {
    id: 3,
    slug: "content-first-case-for-writing-before-designing",
    issue: "Issue 05",
    date: "February 2026",
    category: "Strategy",
    title: "Content First: The Case for Writing Before Designing",
    excerpt:
      "The most common cause of expensive website redesigns is not bad design — it is the absence of clear, purposeful content strategy at the outset of the project.",
    readTime: "5 min read",
    coverImage: "https://picsum.photos/seed/content-strategy-3/800/500",
    color: "#7C746A",
  },
];

export default function Journal({ posts }) {
  // posts = null means use static fallback; posts = [] means API returned empty
  const articles = posts && posts.length > 0 ? posts : staticArticles;

  return (
    <section id="insights" className="bg-[#F6F1E8] py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-6 flex-1">
              <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans shrink-0">
                The Journal
              </span>
              <hr className="flex-1 divider" />
            </div>
            <Link
              href="/insights"
              className="hidden md:inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.12em] uppercase font-sans text-[#12372A] border-b border-[#12372A]/25 pb-0.5 hover:text-[#B08D57] hover:border-[#B08D57] transition-colors duration-300 shrink-0"
            >
              All Insights
            </Link>
          </div>

          <h2
            className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-14"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
          >
            Insights &amp; Observations
            <br />
            <em className="text-[#7C746A] text-[0.85em]">from the Studio</em>
          </h2>
        </Reveal>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-px bg-[#1C1C1C]/10">
          {articles.map((a, i) => (
            <Reveal key={a.id ?? a.slug ?? a.title} delay={i * 80} className="h-full">
              <article
                className="group bg-[#F6F1E8] hover:bg-white transition-colors duration-400 flex flex-col h-full"
              >
              {/* Featured image */}
              <Link href={`/${a.slug}`} className="block overflow-hidden aspect-[16/9] relative bg-[#1C1C1C]/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.coverImage || `https://picsum.photos/seed/${a.slug}/800/500`}
                  alt="Professional web designers in the UK"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category overlay */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[0.6rem] tracking-[0.14em] uppercase font-sans text-[#F6F1E8] px-2.5 py-1"
                    style={{ backgroundColor: a.color || "#12372A" }}
                  >
                    {a.category}
                  </span>
                </div>
              </Link>

              {/* Card body */}
              <div className="p-8 md:p-9 flex flex-col gap-4 flex-1">
                {/* Date */}
                <span className="text-[#7C746A] text-[0.68rem] font-sans">
                  {a.date}
                </span>

                {/* Title */}
                <Link href={`/${a.slug}`}>
                  <h3
                    className="font-serif-display text-[#1C1C1C] leading-tight group-hover:text-[#12372A] transition-colors duration-300"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                  >
                    {a.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-[#7C746A] text-[0.85rem] leading-[1.78] font-sans font-light flex-1">
                  {a.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-[#1C1C1C]/8 mt-auto">
                  <span className="text-[#7C746A]/70 text-[0.68rem] font-sans">
                    {a.readTime}
                  </span>
                  <Link
                    href={`/${a.slug}`}
                    className="text-[0.68rem] tracking-[0.1em] uppercase font-sans text-[#12372A] group-hover:text-[#B08D57] transition-colors duration-300 font-medium"
                  >
                    Read →
                  </Link>
                </div>
              </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.12em] uppercase font-sans text-[#12372A] border-b border-[#12372A]/25 pb-0.5 hover:text-[#B08D57] hover:border-[#B08D57] transition-colors duration-300"
          >
            All Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
