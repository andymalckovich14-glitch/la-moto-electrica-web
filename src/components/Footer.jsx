import "./Footer.css";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com/tu_usuario",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://open.spotify.com/artist/1VrmAzIcE04WB7gMS6fiM9",
    icon: FaSpotify,
    label: "Spotify",
  },
  {
    href: "https://youtube.com/@tu_canal",
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
