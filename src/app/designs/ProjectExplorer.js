"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./content";

export default function ProjectExplorer() {
  const [filter,setFilter] = useState("All work");
  const filtered = filter === "All work" ? projects : projects.filter(p=>p.category===filter);
  return <section id="work" className="nx-section nx-work"><div className="nx-section-heading"><div><span className="nx-label">Selected projects</span><h2>Real businesses.<br />Considered work.</h2></div><Link href="/projects" className="nx-button nx-secondary">All projects <span aria-hidden="true">↗</span></Link></div><div className="nx-work-filters" role="group" aria-label="Filter projects by industry">{["All work",...new Set(projects.map(p=>p.category))].map(category=><button key={category} type="button" aria-pressed={filter===category} onClick={()=>setFilter(category)}>{category}</button>)}</div><p className="nx-sr" role="status">{filtered.length} projects shown for {filter}</p><div className="nx-work-grid">{filtered.map(p=><Link key={p.index} href="/projects" className="nx-work-card"><div className="nx-work-image"><Image src={p.image} alt={`${p.client} website`} fill sizes="(max-width: 700px) 100vw, 50vw" style={{objectFit:"cover",objectPosition:"top"}} /><span aria-hidden="true">↗</span></div><div className="nx-work-caption"><h3>{p.client}</h3><span>{p.category}</span></div></Link>)}</div></section>;
}
