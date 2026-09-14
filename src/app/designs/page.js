import Link from "next/link";
import { directions } from "./content";
import { DesignHeader, DesignHero } from "./DesignPage";
import ModernGallery from "./ModernGallery";

export default async function DesignGallery({ searchParams }) {
  const { collection } = await searchParams;
  if (collection !== "editorial") return <ModernGallery />;
  return <div className="design-gallery">
    <header className="gallery-nav"><Link href="/" className="gallery-brand">crea web.</Link><span>DESIGN EXPLORATIONS / 01—05</span><Link href="/">Current website ↗</Link></header>
    <main>
      <section className="gallery-intro"><p className="gallery-eyebrow">The same studio. Five different perspectives.</p><h1>A new chapter<br />for <em>Crea Web.</em></h1><div className="gallery-intro-bottom"><p>Five editorial directions, brought to life with your existing words and work. Open a design, explore the full page, and choose the one that feels like you.</p><span>YOUR CONTENT.<br />A FRESH POINT OF VIEW. ↙</span></div></section>
      <section className="gallery-grid" aria-label="Five design previews">{directions.filter((d) => Number(d.id) < 6).map((d) => <article className={`gallery-card gallery-card-${d.id}`} key={d.id}>
        <div className="gallery-card-top"><span>0{d.id}</span><span>{d.traits}</span></div>
        <div className="gallery-thumbnail"><div className="gallery-miniature" inert aria-hidden="true"><div className={`editorial ed-${d.theme}`}><DesignHeader compact /><DesignHero theme={d.theme} preview /></div></div><Link className="gallery-preview-link" href={`/designs/${d.id}`} aria-label={`Explore option ${d.id}: ${d.name}`}><span>Explore design 0{d.id} ↗</span></Link></div>
        <div className="gallery-card-info"><div><h2><Link href={`/designs/${d.id}`}>{d.name}</Link></h2><p className="gallery-short">{d.short}</p></div><div className="gallery-swatches" aria-label="Colour palette">{d.palette.map((color) => <span key={color} style={{ backgroundColor: color }} />)}</div></div><p className="gallery-description">{d.description}</p><Link href={`/designs/${d.id}`} className="gallery-open">View full design <span aria-hidden="true">↗</span></Link>
      </article>)}</section>
      <section className="gallery-note"><span>ONE GOOD DIRECTION IS THE START.</span><h2>Which one feels<br /><em>like your agency?</em></h2><p>Choose a direction inside its preview, then tell me its number. We can refine the typography, colour and layout together.</p></section>
    </main>
    <footer className="gallery-footer"><span>Crea Web / Editorial design studies</span><span>Five directions. Your existing content.</span></footer>
  </div>;
}
