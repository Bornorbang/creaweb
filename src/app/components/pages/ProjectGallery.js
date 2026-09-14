"use client";
import Image from "next/image";
import { useState } from "react";
import projects from "./projects.json";
export default function ProjectGallery() {
  const [category, setCategory] = useState("All projects");
  const categories = ["All projects", ...new Set(projects.map(p => p.category))];
  const visible = category === "All projects" ? projects : projects.filter(p => p.category === category);
  return <section className="sp-shell sp-section" id="portfolio"><div className="sp-project-filter" role="group" aria-label="Filter projects by industry">{categories.map(c => <button key={c} type="button" aria-pressed={category===c} onClick={() => setCategory(c)}>{c}</button>)}</div><p className="sp-project-count" role="status" aria-live="polite">{visible.length} {visible.length===1?"project":"projects"}{category!=="All projects" ? ` in ${category}` : " across our portfolio"}</p><div className="sp-project-gallery">{visible.map(p => <article key={p.index} className="sp-project-card"><div className="sp-project-preview"><Image src={p.image} alt={`${p.client} — ${p.category} website by our UK web design agency`} fill sizes="(max-width: 600px) 90vw, 45vw" style={{objectFit:"cover",objectPosition:"top"}} /><span className="sp-project-index" aria-hidden="true">{p.index}</span></div><div className="sp-project-caption"><h2>{p.client}</h2><p>{p.category}</p></div><details><summary>View full website design <span aria-hidden="true">+</span></summary><div className="sp-project-full"><Image src={p.image} alt={`Full ${p.client} website design — UK web design portfolio`} width={p.width} height={p.height} sizes="(max-width: 600px) 90vw, 45vw" style={{width:"100%",height:"auto"}} /></div></details></article>)}</div></section>;
}
