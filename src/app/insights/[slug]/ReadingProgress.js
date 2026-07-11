"use client";
import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.getElementById("article-body");
      if (!el) return;

      const top    = el.getBoundingClientRect().top + window.scrollY;
      const height = el.offsetHeight;
      const scrolled = Math.max(0, window.scrollY - top);
      const pct = Math.min(100, (scrolled / height) * 100);
      setProgress(pct);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[3px] bg-[#B08D57] transition-none"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
