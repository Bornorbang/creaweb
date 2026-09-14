import Link from "next/link";
import SiteShell from "../components/pages/SiteShell";
import { InsightCard } from "../components/insights/InsightCard";
import "../components/insights/insights.css";

const listingMetadata = {
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
export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const requested = Number(params?.page ?? 1);
  const posts = await getAllPosts();
  const page = Number.isSafeInteger(requested) && requested > 0 ? Math.min(requested, Math.max(1, Math.ceil((posts?.length || 0) / PER_PAGE))) : 1;
  const url = "https://creaweb.co.uk/insights" + (page > 1 ? "?page=" + page : "");
  return { ...listingMetadata, title: page > 1 ? "Web Design Blog - Page " + page : listingMetadata.title,
    alternates: { canonical: url }, openGraph: { ...listingMetadata.openGraph, url } };
}

async function getAllPosts() {
  try {
    const api = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000").replace(/(?:\/api)+\/?$/, "");
    const res = await fetch(
      `${api}/api/posts`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      return data.posts ?? null;
    }
  } catch {
    // Show a temporary-unavailability message if the API cannot be reached.
  }
  return null;
}


export default async function InsightsPage({ searchParams }) {
 const params = await searchParams;
 const requested = Number(params?.page ?? 1);
 const page = Number.isSafeInteger(requested) && requested > 0 ? requested : 1;
 const fetched = await getAllPosts();
 const all = Array.isArray(fetched) ? fetched : [];
 const totalPages = Math.max(1, Math.ceil(all.length / PER_PAGE));
 const safePage = Math.min(page, totalPages);
 const posts = all.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);
 return <SiteShell page="insights"><section className="ij-hero"><div className="sp-shell"><nav className="sp-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Insights</span></nav><div className="ij-hero-grid"><div><span className="cw-label">The studio journal</span><h1>Insights &amp;<br />observations.</h1></div><div><span className="ij-star" aria-hidden="true">✳</span><p>Considered perspectives on web design, digital strategy, and the craft of building lasting online presences for British businesses.</p></div></div></div></section><section className="sp-shell sp-section ij-list" aria-label="Journal articles"><div className="ij-section-label"><span className="cw-label">{safePage === 1 ? "From the journal" : "More from the journal"}</span><span>{all.length} articles / Page {safePage} of {totalPages}</span></div>{posts.length ? <><InsightCard post={posts[0]} featured /><div className="ij-card-grid">{posts.slice(1).map(post => <InsightCard key={post.id ?? post.slug} post={post} />)}</div></> : <p>{fetched === null ? "The journal is temporarily unavailable. Please try again shortly." : "No articles published yet."}</p>}{totalPages > 1 && <nav className="ij-pagination" aria-label="Pagination">{safePage > 1 && <Link href={`/insights?page=${safePage - 1}`}>← Previous</Link>}{Array.from({length:totalPages},(_,i)=>i+1).filter(n=>n===1||n===totalPages||Math.abs(n-safePage)<=2).map((n,i,visible)=><span key={n}>{i>0 && n-visible[i-1]>1 && <span className="ij-page-gap" aria-hidden="true">…</span>}<Link href={`/insights?page=${n}`} aria-label={`Page ${n}`} aria-current={n===safePage?"page":undefined}>{n}</Link></span>)}{safePage < totalPages && <Link href={`/insights?page=${safePage+1}`}>Next →</Link>}</nav>}</section></SiteShell>;
}
