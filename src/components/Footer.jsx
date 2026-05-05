import Link from "next/link";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/lamotoelectrica/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://open.spotify.com/artist/1VrmAzIcE04WB7gMS6fiM9",
    icon: FaSpotify,
    label: "Spotify",
  },
  {
    href: "https://www.youtube.com/@lamotoelectrica",
    icon: FaYoutube,
    label: "YouTube",
  },
];

export default function Footer() {
  const whatsapp1 = "https://wa.me/584165800779";
  const whatsapp2 = "https://wa.me/584164941839";

  return (
    <footer className="footer-section" id="contacto">
      <div className="footer-container">

        {/* ── Divider superior ── */}
        <div className="footer-divider" />

        <div className="footer-grid">
          {/* ── CTA Contrataciones ── */}
          <div className="footer-booking-cta">
            <p className="footer-booking-label">¿Quieres que toquemos en tu evento?</p>
            <Link href="/contrataciones" className="footer-booking-btn">
              Contrataciones desde la web
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* ── Redes sociales ── */}
          <div className="footer-social">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Icon className="social-icon" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          {/* ── Contacto ── */}
          <div className="footer-contact">
            <h3>Booking & Contacto</h3>
            <div className="whatsapp-links">
              <a
                href={whatsapp1}
                target="_blank"
                rel="noreferrer"
                className="wa-link"
              >
                <span>Contrataciones 1</span>
                <strong>+58 416-5800779</strong>
              </a>
              <a
                href={whatsapp2}
                target="_blank"
                rel="noreferrer"
                className="wa-link"
              >
                <span>Contrataciones 2</span>
                <strong>+58 416-4941839</strong>
              </a>
            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} La Moto Eléctrica · Anaco, Venezuela
          </p>
        </div>

      </div>
    </footer>
  );
}
