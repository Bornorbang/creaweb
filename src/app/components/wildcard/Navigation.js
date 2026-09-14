"use client";
import SymbolIcon from "../SymbolIcon";


import Link from "next/link";
import { useRef } from "react";

export default function Navigation({ homeLinks = false }) {
  const menu = useRef(null);
  const close = () => { if (menu.current) menu.current.open = false; };
  const links = <><Link href={homeLinks ? "/projects" : "#work"} onClick={close}>Our work</Link><Link href={homeLinks ? "/services" : "#services"} onClick={close}>Services</Link><Link href={homeLinks ? "/about" : "#studio"} onClick={close}>About us</Link><Link href="/insights" onClick={close}>Insights</Link></>;
  return <header className="cw-nav"><Link href="/" className="cw-logo" aria-label="Crea Web Agency home">Crea Web Agency</Link><nav aria-label="Main navigation">{links}</nav><Link className="cw-nav-cta" href="/contact">Start a project <span aria-hidden="true"><SymbolIcon symbol="↗" /></span></Link><details ref={menu} className="cw-mobile-menu" onKeyDown={event => { if (event.key === "Escape") { close(); menu.current.querySelector("summary").focus(); } }}><summary>Menu <span aria-hidden="true">☰</span></summary><nav aria-label="Mobile navigation">{links}<Link href="/contact" onClick={close}>Start a project <SymbolIcon symbol="↗" /></Link></nav></details></header>;
}
