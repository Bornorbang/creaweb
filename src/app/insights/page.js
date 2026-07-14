import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { staticArticles } from "../components/Journal";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Web Design Blog",
  description:
    "Expert insights on web design, digital strategy, and building effective online presences for UK businesses. Read the Crea Web agency blog.",
  alternates: { canonical: "https://creaweb.co.uk/insights" },
  openGraph: {
    title: "Web Design Blog | Crea Web Agency",
    description: "Expert insights on web design, digital strategy, and building effective online presences for UK businesses.",
    url: "https://creaweb.co.uk/insights",
    type: "website",
  },
};

const PER_PAGE = 12;

async function getAllPosts() {
  try {
    const api = (process.env.API_URL || "http://localhost:8000").replace(/\/api\/?$/, "");
    const res = await fetch(
      `${api}/api/posts`,
      { next: { revalidate: 60 } }
    );
    if (res.ok) {
      const data = await res.json();
      return data.posts ?? null;
    }
  } catch {
    // PHP server offline — use static fallback
  }
  return null;
}

const categoryColors = {
  "Design Thinking":  "#12372A",
  Typography:         "#B08D57",
  Strategy:           "#7C746A",
  Development:        "#1C1C1C",
  "AI & Automation":  "#12372A",
  "Case Study":       "#B08D57",
  General:            "#12372A",
};

export default async function InsightsPage({ searchParams }) {
  const params  = await searchParams;
  const page    = Math.max(1, parseInt(params?.page ?? "1", 10));
  const fetched = await getAllPosts();
  const all     = fetched && fetched.length > 0 ? fetched : staticArticles;

  const totalPages = Math.ceil(all.length / PER_PAGE);
  const safePage   = Math.min(page, totalPages || 1);
  const posts      = all.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative bg-[#12372A] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
          {/* Banner image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1800&auto=format&fit=crop&q=70"
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
                The Studio Journal
              </span>
            </div>
            <h1
              className="font-serif-display text-[#F6F1E8] leading-[1.08] mb-8 animate-fade-up animation-delay-200"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Insights &amp;
              <br />
              <em className="text-[#B08D57]">Observations</em>
            </h1>
            <p className="text-[#F6F1E8]/65 text-[0.9rem] leading-relaxed max-w-[50ch] font-sans font-light">
              Considered perspectives on web design, digital strategy, and the
              craft of building lasting online presences for British businesses.
            </p>
          </div>
        </section>

        {/* ── Posts Grid ───────────────────────────────────────────────── */}
        <section className="bg-[#F6F1E8] py-16 md:py-20">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            {posts.length === 0 ? (
              <p className="text-[#7C746A] font-sans text-center py-20">
                No articles published yet.
              </p>
            ) : (
              <>
                {/* 3-column grid — every post equal weight */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10 border border-[#1C1C1C]/10">
                  {posts.map((post, i) => (
                    <Reveal key={post.id ?? post.slug} delay={i * 60}>
                    <article
                      className="group bg-[#F6F1E8] hover:bg-white transition-colors duration-400 flex flex-col"
                    >
                      <Link
                        href={`/insights/${post.slug}`}
                        className="block overflow-hidden aspect-[16/9] relative bg-[#1C1C1C]/5"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={
                            post.coverImage ||
                            `https://picsum.photos/seed/${post.slug}/800/500`
                          }
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className="text-[0.6rem] tracking-[0.14em] uppercase font-sans text-[#F6F1E8] px-2.5 py-1"
                            style={{
                              backgroundColor:
                                categoryColors[post.category] ?? "#12372A",
                            }}
                          >
                            {post.category}
                          </span>
                        </div>
                      </Link>

                      <div className="p-8 flex flex-col gap-4 flex-1">
                        <span className="text-[#7C746A] text-[0.68rem] font-sans">
                          {post.date}
                        </span>
                        <Link href={`/insights/${post.slug}`}>
                          <h2
                            className="font-serif-display text-[#1C1C1C] leading-tight group-hover:text-[#12372A] transition-colors duration-300"
                            style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)" }}
                          >
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-[#7C746A] text-[0.83rem] leading-[1.75] font-sans font-light flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-5 border-t border-[#1C1C1C]/8 mt-auto">
                          <span className="text-[#7C746A]/60 text-[0.67rem] font-sans">
                            {post.readTime}
                          </span>
                          <Link
                            href={`/insights/${post.slug}`}
                            className="text-[0.67rem] tracking-[0.1em] uppercase font-sans text-[#12372A] group-hover:text-[#B08D57] transition-colors duration-300 font-medium"
                          >
                            Read →
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                  ))}
                </div>

                {/* ── Pagination ───────────────────────────────────────── */}
                {totalPages > 1 && (
                  <nav
                    className="mt-16 flex items-center justify-center gap-2"
                    aria-label="Pagination"
                  >
                    {/* Prev */}
                    {safePage > 1 ? (
                      <Link
                        href={`/insights?page=${safePage - 1}`}
                        className="flex items-center gap-2 text-[0.72rem] tracking-[0.1em] uppercase font-sans text-[#12372A] border border-[#12372A]/25 px-5 py-2.5 hover:bg-[#12372A] hover:text-[#F6F1E8] transition-colors duration-300"
                      >
                        <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                          <path d="M13 5H1M6 1L1 5l5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Prev
                      </Link>
                    ) : (
                      <span className="flex items-center gap-2 text-[0.72rem] tracking-[0.1em] uppercase font-sans text-[#1C1C1C]/25 border border-[#1C1C1C]/10 px-5 py-2.5 cursor-not-allowed">
                        <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                          <path d="M13 5H1M6 1L1 5l5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Prev
                      </span>
                    )}

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                      <Link
                        key={n}
                        href={`/insights?page=${n}`}
                        className={`w-10 h-10 flex items-center justify-center text-[0.75rem] font-sans transition-colors duration-300 ${
                          n === safePage
                            ? "bg-[#12372A] text-[#F6F1E8]"
                            : "border border-[#1C1C1C]/15 text-[#1C1C1C] hover:border-[#12372A] hover:text-[#12372A]"
                        }`}
                        aria-current={n === safePage ? "page" : undefined}
                      >
                        {n}
                      </Link>
                    ))}

                    {/* Next */}
                    {safePage < totalPages ? (
                      <Link
                        href={`/insights?page=${safePage + 1}`}
                        className="flex items-center gap-2 text-[0.72rem] tracking-[0.1em] uppercase font-sans text-[#12372A] border border-[#12372A]/25 px-5 py-2.5 hover:bg-[#12372A] hover:text-[#F6F1E8] transition-colors duration-300"
                      >
                        Next
                        <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                          <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    ) : (
                      <span className="flex items-center gap-2 text-[0.72rem] tracking-[0.1em] uppercase font-sans text-[#1C1C1C]/25 border border-[#1C1C1C]/10 px-5 py-2.5 cursor-not-allowed">
                        Next
                        <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                          <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                  </nav>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
