"use client";

import { useState } from "react";
import Link from "next/link";
import { directions } from "./content";

export default function DesignPicker({ current }) {
  const [chosen, setChosen] = useState(false);
  const modern = Number(current) >= 6;
  const options = directions.filter((d) => (Number(d.id) >= 6) === modern);
  const number = String(current).padStart(2, "0");

  function choose() {
    setChosen(true);
    try { localStorage.setItem("crea-design-choice", current); } catch { /* Selection still works without browser storage. */ }
  }

  return (
    <aside className="design-picker" aria-label="Design comparison">
      <Link href={modern ? "/designs" : "/designs?collection=editorial"} className="picker-back">← <span>All designs</span></Link>
      <nav aria-label="Five design options">
        {options.map((d) => (
          <Link key={d.id} href={`/designs/${d.id}`} aria-current={current === d.id ? "page" : undefined} title={d.name}>
            <span>{d.id.padStart(2, "0")}</span><span className="picker-name">{d.name}</span>
          </Link>
        ))}
      </nav>
      <button type="button" onClick={choose} className="picker-choose">{chosen ? `Selected: ${number} ✓` : "Choose this design"}</button>
      {chosen && <p className="picker-confirm" role="status">Option {number} selected. Tell me this number in the chat to continue with it.</p>}
    </aside>
  );
}
