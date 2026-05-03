"use client";
import { motion } from "framer-motion";
import { useMounted } from "../hooks/useMounted";

const VARIANTS = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.32, delayChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

export default function HeroContent() {
  const mounted = useMounted();

  const scrollToDiscografia = () => {
    document.getElementById("discografia")?.scrollIntoView({ behavior: "smooth" });
  };

  // SSR: renderiza visible sin animación (evita FOIC)
  if (!mounted) {
    return (
      <div className="hero-content">
        <h1 className="hero-title">La Moto Eléctrica</h1>
        <p className="hero-subtitle">Shoegaze / Post-Rock</p>
        <button className="hero-cta" onClick={scrollToDiscografia}>
          Ver Discografía
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="hero-content"
      variants={VARIANTS.container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="hero-title" variants={VARIANTS.item}>
        La Moto Eléctrica
      </motion.h1>

      <motion.p className="hero-subtitle" variants={VARIANTS.item}>
        Shoegaze / Post-Rock
      </motion.p>

      <motion.button
        className="hero-cta"
        variants={VARIANTS.item}
        onClick={scrollToDiscografia}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Ver Discografía
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0], y: [0, 8, 0] }}
        transition={{ delay: 2.5, duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
