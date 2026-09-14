import SymbolIcon from "../SymbolIcon";
import { createElement } from "react";
import Link from "next/link";
import SiteShell from "./SiteShell";
import content from "./content.json";

function renderNode(node, key) {
  if(typeof node !== "object") return node;
  return createElement(node.tag, { ...node.props, key }, node.children.map((child,i)=>renderNode(child,i)));
}

export default function LegalPage({ slug }) {
  const d = content[slug];
  return <SiteShell page={slug} cta={false}><section className="sp-legal-hero"><div className="sp-shell"><Link className="sp-text-link" href="/">Home <SymbolIcon symbol="↗" /></Link><span className="cw-label">Crea Web Agency / Information</span><h1>{d.title}</h1><p>Last updated: {d.vars.LAST_UPDATED}</p></div></section><div className="sp-shell sp-section sp-legal-layout"><aside><nav aria-label="On this page"><span className="cw-label">On this page</span>{d.toc.map(item=><a key={item.id} href={`#${item.id}`}>{item.title}</a>)}</nav></aside><article className="sp-legal-content">{d.policy.map((node,i)=>renderNode(node,i))}</article></div></SiteShell>;
}
