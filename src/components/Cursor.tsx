"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const dot = dotRef.current;
    if (!dot) return;

    let mx = 0;
    let my = 0;
    let dx = 0;
    let dy = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.classList.add("active");
    };

    const onMouseLeave = () => {
      dot.classList.remove("active");
    };

    const animate = () => {
      dx += (mx - dx) * 0.2;
      dy += (my - dy) * 0.2;
      dot.style.left = `${dx - 4}px`;
      dot.style.top = `${dy - 4}px`;
      raf = requestAnimationFrame(animate);
    };

    let raf = requestAnimationFrame(animate);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Hover detection on interactive elements
    const addHover = (el: Element) => {
      el.addEventListener("mouseenter", () => dot.classList.add("hover"));
      el.addEventListener("mouseleave", () => dot.classList.remove("hover"));
    };

    const targets = document.querySelectorAll(
      "a, button, .project-row, .pill, .open-card"
    );
    targets.forEach(addHover);

    // Re-observe on DOM changes (for scroll reveal adding elements)
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a:not([data-cursor])").forEach((el) => {
        el.setAttribute("data-cursor", "1");
        addHover(el);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
}
