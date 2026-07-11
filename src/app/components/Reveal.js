"use client";
import { useEffect, useRef, useState } from "react";

const initial = {
  up:    "translateY(32px)",
  down:  "translateY(-20px)",
  left:  "translateX(-32px)",
  right: "translateX(32px)",
  fade:  "scale(0.97)",
};

/**
 * Reveal — scroll-triggered fade + slide animation.
 * @param {string}  direction  up | down | left | right | fade
 * @param {number}  delay      transition-delay in ms
 * @param {number}  duration   transition duration in ms (default 700)
 * @param {string}  as         HTML tag to render (default "div")
 * @param {number}  threshold  IntersectionObserver threshold (0–1)
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style = {},
  delay = 0,
  direction = "up",
  duration = 700,
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : (initial[direction] ?? initial.up),
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
