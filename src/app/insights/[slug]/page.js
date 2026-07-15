import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { staticArticles } from "../../components/Journal";
import ReadingProgress from "./ReadingProgress";
import BottomCTA from "../../components/BottomCTA";

const API = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000").replace(/(?:\/api)+\/?$/, "");

async function getPost(slug) {
  try {
    const res = await fetch(`${API}/api/posts/${slug}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return data.post ?? null;
    }
  } catch {}
  return staticArticles.find((a) => a.slug === slug) ?? null;
}

async function getRelatedPosts(currentSlug) {
  try {
    const res = await fetch(`${API}/api/posts`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      const all = data.posts ?? [];
      return all.filter((p) => p.slug !== currentSlug).slice(0, 3);
    }
  } catch {}
  return staticArticles.filter((a) => a.slug !== currentSlug).slice(0, 3);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title}`,
    description: post.excerpt,
    alternates: { canonical: `https://creaweb.co.uk/${slug}` },
    openGraph: {
      title: `${post.title} | Crea Web Agency`,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      type: "article",
    },
  };
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

export default async function PostPage({ params }) {
  const { slug } = await params;
  const [post, related] = await Promise.all([getPost(slug), getRelatedPosts(slug)]);
  if (!post) notFound();

  const catColor = categoryColors[post.category] ?? "#12372A";

  return (
    <>
      <Navbar />

      {/* Reading progress bar — client component */}
      <ReadingProgress />

      <main>
        {/* ─────────────────────────────────────────────────────────────────
            HERO
        ───────────────────────────────────────────────────────────────── */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-[#1C1C1C] overflow-hidden flex flex-col justify-end">
          {/* Cover image */}
          {post.coverImage ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={post.coverImage}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#12372A]" />
          )}

          {/* Multi-stop gradient — text readable at all times */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/50 to-[#1C1C1C]/10" />

          {/* Gold top rule */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B08D57] z-10" />

          {/* Hero content */}
          <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 w-full pb-16 md:pb-24 pt-36">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/insights"
                className="text-[#F6F1E8]/50 text-[0.65rem] tracking-[0.16em] uppercase font-sans hover:text-[#B08D57] transition-colors duration-300"
              >
                Insights
              </Link>
              <span className="text-[#F6F1E8]/30 text-[0.65rem]">/</span>
              <span
                className="text-[0.65rem] tracking-[0.16em] uppercase font-sans px-2.5 py-1 text-[#F6F1E8]"
                style={{ backgroundColor: catColor }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-serif-display text-[#F6F1E8] leading-[1.06] mb-8 max-w-[22ch]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}
            >
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Author avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#B08D57]/30 border border-[#B08D57]/50 flex items-center justify-center shrink-0">
                  <span className="text-[#B08D57] text-[0.75rem] font-serif-display">
                    {(post.author ?? "B")[0]}
                  </span>
                </div>
                <div>
                  <p className="text-[#F6F1E8] text-[0.8rem] font-sans font-medium leading-tight">
                    {post.author ?? "Bornor Bang"}
                  </p>
                  <p className="text-[#F6F1E8]/45 text-[0.65rem] font-sans">
                    Founder &amp; Creative Director
                  </p>
                </div>
              </div>

              <span className="block w-px h-8 bg-[#F6F1E8]/15" />

              <div className="flex items-center gap-5">
                <span className="text-[#F6F1E8]/60 text-[0.72rem] font-sans">{post.date}</span>
                <span className="text-[#F6F1E8]/30 text-[0.72rem]">·</span>
                <span className="text-[#F6F1E8]/60 text-[0.72rem] font-sans">{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────
            ARTICLE BODY + SIDEBAR
        ───────────────────────────────────────────────────────────────── */}
        <article id="article-body" className="bg-[#F6F1E8]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-0 lg:gap-16 py-16 md:py-24">

              {/* ── Main content ── col-span-8 */}
              <div className="lg:col-span-8 order-1">

                {/* Pull-quote / excerpt */}
                {post.excerpt && (
                  <div className="relative mb-12 pl-7 border-l-2 border-[#B08D57]">
                    <p
                      className="font-serif-display text-[#12372A] leading-[1.45] italic"
                      style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)" }}
                    >
                      {post.excerpt}
                    </p>
                    <div className="absolute -left-[3px] top-0 w-[5px] h-8 bg-[#B08D57]" />
                  </div>
                )}

                {/* Thin rule */}
                <hr className="divider mb-12" />

                {/* Rich text content */}
                <div
                  className="prose-editorial"
                  dangerouslySetInnerHTML={{ __html: post.content || "<p>Content coming soon.</p>" }}
                />

                {/* Tags row */}
                <div className="mt-14 pt-10 border-t border-[#1C1C1C]/10 flex flex-wrap items-center gap-3">
                  {post.tags && post.tags.length > 0 ? (
                    post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[0.65rem] tracking-[0.14em] uppercase font-sans text-[#F6F1E8] px-3 py-1.5 bg-[#12372A]"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span
                      className="text-[0.65rem] tracking-[0.14em] uppercase font-sans text-[#F6F1E8] px-3 py-1.5"
                      style={{ backgroundColor: catColor }}
                    >
                      {post.category}
                    </span>
                  )}
                </div>

                {/* Author card — below content on mobile, hidden on desktop */}
                <div className="mt-10 lg:hidden bg-[#12372A] p-7 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#B08D57]/30 border border-[#B08D57]/50 flex items-center justify-center shrink-0">
                    <span className="text-[#B08D57] text-[1.1rem] font-serif-display">
                      {(post.author ?? "B")[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-[0.58rem] tracking-[0.18em] uppercase font-sans text-[#B08D57] mb-1">Author</p>
                    <p className="text-[#F6F1E8] font-sans font-medium text-[0.95rem]">{post.author ?? "Bornor Bang"}</p>
                    <p className="text-[#F6F1E8]/50 text-[0.75rem] font-sans mt-0.5">Founder &amp; Creative Director, Crea Web Agency</p>
                  </div>
                </div>
              </div>

              {/* ── Sticky sidebar ── col-span-4 */}
              <aside className="lg:col-span-4 order-2 hidden lg:block">
                <div className="sticky top-28 flex flex-col gap-8">

                  {/* Article meta card */}
                  <div className="border border-[#1C1C1C]/10 bg-white p-7">
                    <Link
                      href="/insights"
                      className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.14em] uppercase font-sans text-[#7C746A] hover:text-[#12372A] transition-colors duration-300 mb-7 group"
                    >
                      <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                        <path d="M13 5H1M6 1L1 5l5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      All Insights
                    </Link>

                    <hr className="divider mb-7" />

                    {/* Author */}
                    <div className="flex items-center gap-4 mb-7">
                      <div className="w-12 h-12 rounded-full bg-[#12372A]/10 border border-[#12372A]/20 flex items-center justify-center shrink-0">
                        <span className="text-[#12372A] text-[1rem] font-serif-display">
                          {(post.author ?? "B")[0]}
                        </span>
                      </div>
                      <div>
                        <p className="text-[0.58rem] tracking-[0.16em] uppercase font-sans text-[#B08D57] mb-0.5">Author</p>
                        <p className="text-[#1C1C1C] text-[0.88rem] font-sans font-medium">{post.author ?? "Bornor Bang"}</p>
                        <p className="text-[#7C746A] text-[0.72rem] font-sans">Founder &amp; Creative Director</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[0.58rem] tracking-[0.16em] uppercase font-sans text-[#B08D57]">Published</span>
                        <span className="text-[#1C1C1C] text-[0.82rem] font-sans">{post.date}</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-[0.58rem] tracking-[0.16em] uppercase font-sans text-[#B08D57]">Read time</span>
                        <span className="text-[#1C1C1C] text-[0.82rem] font-sans">{post.readTime}</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-[0.58rem] tracking-[0.16em] uppercase font-sans text-[#B08D57]">Category</span>
                        <span
                          className="text-[0.6rem] tracking-[0.12em] uppercase font-sans text-[#F6F1E8] px-2 py-0.5"
                          style={{ backgroundColor: catColor }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Share card */}
                  <div className="border border-[#1C1C1C]/10 bg-white p-7">
                    <p className="text-[0.62rem] tracking-[0.18em] uppercase font-sans text-[#7C746A] mb-5">Share this article</p>
                    <div className="flex flex-col gap-3">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://creaweb.co.uk/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[0.72rem] font-sans text-[#1C1C1C] border border-[#1C1C1C]/12 px-4 py-2.5 hover:border-[#12372A] hover:text-[#12372A] transition-colors duration-300"
                      >
                        <svg width="14" height="12" viewBox="0 0 24 20" fill="currentColor" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.262 5.633 5.902-5.633Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/>
                        </svg>
                        Share on X (Twitter)
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://creaweb.co.uk/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[0.72rem] font-sans text-[#1C1C1C] border border-[#1C1C1C]/12 px-4 py-2.5 hover:border-[#12372A] hover:text-[#12372A] transition-colors duration-300"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Share on LinkedIn
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://creaweb.co.uk/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[0.72rem] font-sans text-[#1C1C1C] border border-[#1C1C1C]/12 px-4 py-2.5 hover:border-[#12372A] hover:text-[#12372A] transition-colors duration-300"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                        </svg>
                        Share on Facebook
                      </a>
                    </div>
                  </div>

                  {/* CTA card */}
                  <div className="bg-[#12372A] p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="block w-6 h-[1px] bg-[#B08D57]" />
                      <span className="text-[#B08D57] text-[0.6rem] tracking-[0.18em] uppercase font-sans">Work With Us</span>
                    </div>
                    <p className="font-serif-display text-[#F6F1E8] text-[1.2rem] leading-tight mb-3">
                      Ready to discuss your project?
                    </p>
                    <p className="text-[#F6F1E8]/55 text-[0.78rem] font-sans leading-[1.7] mb-7">
                      No commitment — just an honest conversation about what&rsquo;s possible.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.14em] uppercase font-sans text-[#12372A] bg-[#F6F1E8] px-5 py-3 hover:bg-[#B08D57] hover:text-[#F6F1E8] transition-colors duration-300"
                    >
                      Get in Touch
                      <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                        <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>

                </div>
              </aside>
            </div>
          </div>
        </article>


        {/* ─────────────────────────────────────────────────────────────────
            MORE FROM THE JOURNAL
        ───────────────────────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-[#F6F1E8] py-20 md:py-28 border-t border-[#1C1C1C]/8">
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              {/* Section header */}
              <div className="flex items-center justify-between gap-6 mb-12">
                <div className="flex items-center gap-6 flex-1">
                  <span className="text-[#B08D57] text-[0.68rem] tracking-[0.22em] uppercase font-sans shrink-0">
                    Continue Reading
                  </span>
                  <hr className="flex-1 divider" />
                </div>
                <Link
                  href="/insights"
                  className="hidden md:inline-flex items-center gap-2 text-[0.7rem] tracking-[0.1em] uppercase font-sans text-[#12372A] border-b border-[#12372A]/25 pb-0.5 hover:text-[#B08D57] hover:border-[#B08D57] transition-colors duration-300 shrink-0"
                >
                  All Insights
                </Link>
              </div>

              <h2
                className="font-serif-display text-[#1C1C1C] leading-[1.1] mb-14"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
              >
                More from the Journal
              </h2>

              <div className="grid md:grid-cols-3 gap-px bg-[#1C1C1C]/10 border border-[#1C1C1C]/10">
                {related.map((r) => (
                  <article
                    key={r.id ?? r.slug}
                    className="group bg-[#F6F1E8] hover:bg-white transition-colors duration-400 flex flex-col"
                  >
                    <Link
                      href={`/${r.slug}`}
                      className="block overflow-hidden aspect-[16/9] relative bg-[#1C1C1C]/5"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.coverImage || `https://picsum.photos/seed/${r.slug}/800/500`}
                        alt={r.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-[0.6rem] tracking-[0.14em] uppercase font-sans text-[#F6F1E8] px-2.5 py-1"
                          style={{ backgroundColor: categoryColors[r.category] ?? "#12372A" }}
                        >
                          {r.category}
                        </span>
                      </div>
                    </Link>

                    <div className="p-7 flex flex-col gap-3 flex-1">
                      <span className="text-[#7C746A] text-[0.67rem] font-sans">{r.date}</span>
                      <Link href={`/${r.slug}`}>
                        <h3
                          className="font-serif-display text-[#1C1C1C] leading-tight group-hover:text-[#12372A] transition-colors duration-300"
                          style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
                        >
                          {r.title}
                        </h3>
                      </Link>
                      <p className="text-[#7C746A] text-[0.82rem] leading-[1.72] font-sans font-light flex-1 line-clamp-3">
                        {r.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-5 border-t border-[#1C1C1C]/8 mt-auto">
                        <span className="text-[#7C746A]/60 text-[0.66rem] font-sans">{r.readTime}</span>
                        <Link
                          href={`/${r.slug}`}
                          className="text-[0.66rem] tracking-[0.1em] uppercase font-sans text-[#12372A] group-hover:text-[#B08D57] transition-colors duration-300 font-medium"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ─────────────────────────────────────────────────────────────── */}
        <BottomCTA />

      </main>
      <Footer />
    </>
  );
}
