export default function SymbolIcon({ symbol }) {
  const rotations = { "→": 0, "↗": -45, "↑": -90, "↖": -135, "←": 180, "↙": 135, "↓": 90, "↘": 45 };
  const arrow = Object.hasOwn(rotations, symbol);
  return <svg aria-hidden="true" focusable="false" width="1em" height="1em" viewBox="0 0 24 24" style={{ display: "inline-block", verticalAlign: "-0.125em", flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {arrow ? <path d="M4 12h16M13 5l7 7-7 7" transform={`rotate(${rotations[symbol]} 12 12)`} /> : symbol === "✓" || symbol === "✔" ? <path d="m4 12 5 5L20 6" /> : <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" strokeWidth="3" />}
  </svg>;
}
