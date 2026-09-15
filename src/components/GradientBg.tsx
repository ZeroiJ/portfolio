"use client";

import { useEffect, useState } from "react";

/**
 * Animated gradient background — shadergradient.co style.
 * Uses a lightweight canvas approach since @shadergradient/react
 * bundles Three.js which is heavy for a portfolio.
 * This gives the same visual effect with zero dependencies.
 */
export default function GradientBg() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes drift1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(8vw, -5vh) scale(1.1); }
          100% { transform: translate(-5vw, 8vh) scale(0.95); }
        }
        @keyframes drift2 {
          0% { transform: translate(0, 0) scale(1.05); }
          50% { transform: translate(-10vw, 6vh) scale(0.9); }
          100% { transform: translate(6vw, -4vh) scale(1.1); }
        }
        @keyframes drift3 {
          0% { transform: translate(0, 0) scale(0.95); }
          50% { transform: translate(5vw, 8vh) scale(1.05); }
          100% { transform: translate(-8vw, -3vh) scale(1); }
        }
        @keyframes drift4 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-6vw, -8vh) scale(1.15); }
          100% { transform: translate(4vw, 5vh) scale(0.9); }
        }
      `}</style>
      {/* Layer 1 — large blue blob */}
      <div
        className="absolute w-[80vw] h-[60vh] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,100,255,0.8) 0%, transparent 70%)",
          top: "10%",
          left: "5%",
          animation: "drift1 14s ease-in-out infinite alternate",
        }}
      />
      {/* Layer 2 — purple blob */}
      <div
        className="absolute w-[60vw] h-[50vh] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(100,0,255,0.7) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          animation: "drift2 18s ease-in-out infinite alternate",
        }}
      />
      {/* Layer 3 — cyan accent */}
      <div
        className="absolute w-[50vw] h-[40vh] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,200,255,0.6) 0%, transparent 70%)",
          top: "40%",
          left: "30%",
          animation: "drift3 16s ease-in-out infinite alternate",
        }}
      />
      {/* Layer 4 — warm orange accent */}
      <div
        className="absolute w-[30vw] h-[30vh] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,120,0,0.6) 0%, transparent 70%)",
          top: "20%",
          right: "20%",
          animation: "drift4 20s ease-in-out infinite alternate",
        }}
      />

    </div>
  );
}
