"use client";

import SymbolIcon from "../SymbolIcon";
import { useState } from "react";

export default function InsightCover({ post, eager = false }) {
  const [failedSource, setFailedSource] = useState(null);
  const source = post.coverImage;
  const placeholder = !source || /(?:^|\/)picsum\.photos\//i.test(source) || failedSource === source;
  if (placeholder) return <div className="ij-cover-art" data-category={post.category} aria-hidden="true"><span>Crea Web / Journal</span><b>{post.category || "Ideas & insights"}</b><span className="ij-cover-symbol">{post.category === "Typography" ? "Aa" : <SymbolIcon symbol={post.category === "Strategy" ? "↗" : "✳"} />}</span><span>{post.issue || "Ideas worth sharing"}</span></div>;
  // Editorial uploads may use any configured CMS media host.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="ij-cover-image" src={source} alt={`${post.title} — UK web design insights`} loading={eager ? "eager" : "lazy"} decoding="async" width={1200} height={750} onError={() => setFailedSource(source)} />;
}
