"use client";
import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.getElementById("article-body");
      if (!el) return;

      const top    = el.getBoundingClientRect().top + window.scrollY;
      const height = Math.max(1, el.offsetHeight - window.innerHeight);
      const scrolled = Math.max(0, window.scrollY - top);
      const pct = Math.min(100, (scrolled / height) * 100);
      setProgress(pct);
    }

    onScroll();
    window.addEventListener("resize", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  return (
    <div
      className="ij-reading-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
