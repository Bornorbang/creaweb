import SymbolIcon from "../SymbolIcon";
import Link from "next/link";
import InsightCover from "./InsightCover";

export function InsightCard({ post, featured = false }) {
  return <article className={`ij-card${featured ? " ij-featured" : ""}`}><Link className="ij-card-cover" href={`/${post.slug}`} aria-label={`Read ${post.title}`}><InsightCover post={post} eager={featured} /><span className="ij-card-arrow" aria-hidden="true"><SymbolIcon symbol="↗" /></span></Link><div className="ij-card-copy"><div className="ij-meta"><span className="ij-category">{post.category || "General"}</span><span>{post.date}</span></div><h2><Link href={`/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><div className="ij-card-bottom"><span>{post.readTime}</span><Link href={`/${post.slug}`} aria-label={`Read article: ${post.title}`}>Read article <span aria-hidden="true"><SymbolIcon symbol="↗" /></span></Link></div></div></article>;
}
