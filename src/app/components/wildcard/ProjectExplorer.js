"use client";

import SymbolIcon from "../SymbolIcon";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./content";

export default function ProjectExplorer() {
  const [filter,setFilter] = useState("All work");
  const filtered = filter === "All work" ? projects : projects.filter(p=>p.category===filter);
  return <section id="work" className="cw-section cw-work"><div className="cw-section-heading"><div><span className="cw-label">Selected projects</span><h2>Real businesses.<br />Considered work.</h2></div><Link href="/projects" className="cw-button cw-secondary">All projects <span aria-hidden="true"><SymbolIcon symbol="↗" /></span></Link></div><div className="cw-work-filters" role="group" aria-label="Filter projects by industry">{["All work",...new Set(projects.map(p=>p.category))].map(category=><button key={category} type="button" aria-pressed={filter===category} onClick={()=>setFilter(category)}>{category}</button>)}</div><p className="cw-sr" role="status">{filtered.length} projects shown for {filter}</p><div className="cw-work-grid">{filtered.map(p=><Link key={p.index} href="/projects" className="cw-work-card"><div className="cw-work-image"><Image src={p.image} alt={`${p.client} homepage, a custom website design project by Crea Web`} fill sizes="(max-width: 700px) 100vw, 50vw" style={{objectFit:"cover",objectPosition:"top"}} /><span aria-hidden="true"><SymbolIcon symbol="↗" /></span></div><div className="cw-work-caption"><h3>{p.client}</h3><span>{p.category}</span></div></Link>)}</div></section>;
}
