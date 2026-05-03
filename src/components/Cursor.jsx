"use client";
import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      if (!visible) setVisible(true);
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.1;
      curY += (mouseY - curY) * 0.1;
      ring.style.transform = `translate(${curX}px, ${curY}px)`;
      rafId = requestAnimationFrame(animate);
    };

    // Expand ring on interactive elements (event delegation)
    const onOver = (e) => {
      if (e.target.closest("a, button, [role='button'], .disco-card")) {
        ring.classList.add("cursor--hover");
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, [role='button'], .disco-card")) {
        ring.classList.remove("cursor--hover");
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor-ring ${visible ? "cursor-ring--visible" : ""}`}
      />
      <div
        ref={dotRef}
        className={`cursor-dot ${visible ? "cursor-dot--visible" : ""}`}
      />
    </>
  );
}
