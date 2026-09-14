import SymbolIcon from "../SymbolIcon";
﻿import Link from "next/link";
import { processSteps } from "./content";

const stages = [
  { note: "Start with the right questions", text: "We listen to your goals, get to know your customers and agree what success should look like.", output: "A clear project brief" },
  { note: "Give every page a purpose", text: "We map your content, navigation and key journeys before moving into visual design.", output: "Sitemap & content plan" },
  { note: "Make it unmistakably yours", text: "We turn the strategy into a distinctive visual direction, with space for your feedback and refinement.", output: "Designs ready to build" },
  { note: "Bring the details to life", text: "We develop the site, connect its features and test the experience across screen sizes and browsers.", output: "A tested, responsive website" },
  { note: "Launch is just the beginning", text: "We prepare for launch, walk you through your website and agree the support you need for what comes next.", output: "Handover & ongoing support" },
];

export default function Process() {
  return <section id="process" className="cw-section cw-process-board" aria-labelledby="process-heading">
    <div className="cw-section-heading"><div><span className="cw-label">Clear steps. Close collaboration.</span><h2 id="process-heading">Our website<br />design process.</h2></div><div className="cw-process-intro"><span aria-hidden="true"><SymbolIcon symbol="↘" /></span><p>No mystery. No disappearing act. Five considered stages, with your feedback built into the journey.</p></div></div>
    <ol className="cw-process-path">{stages.map((stage,index)=><li key={stage.output}><span className="cw-process-number" aria-hidden="true">{String(index+1).padStart(2,"0")}</span><span className="cw-label">{stage.note}</span><h3>{processSteps[index]}</h3><p>{stage.text}</p><div className="cw-process-output"><span aria-hidden="true"><SymbolIcon symbol="↗" /></span>{stage.output}</div></li>)}</ol>
    <div className="cw-process-end"><p>You bring the ambition. We bring a plan.</p><Link className="cw-button" href="/contact">Let’s talk about your project <span aria-hidden="true"><SymbolIcon symbol="↗" /></span></Link></div>
  </section>;
}
