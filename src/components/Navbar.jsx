"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Nosotros", id: "nosotros" },
  { label: "Discografía", id: "discografia" },
  { label: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-container">
        <button className="navbar-logo" onClick={scrollToTop} aria-label="Inicio">
          La Moto Eléctrica
        </button>
        <div className="navbar-links">
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} className="navbar-link" onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
