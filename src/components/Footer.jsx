import "./Footer.css";
// 1. IMPORTAMOS LOS LOGOS (Instalados en el paso anterior)
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

function Footer() {
  const whatsapp1 = "https://wa.me/584165800779";
  const whatsapp2 = "https://wa.me/584164941839";

  return (
    <footer className="footer-section fade-in">
      <div className="footer-container">
        {/* REDES SOCIALES CON LOGOS MINIMALISTAS */}
        <div className="footer-social">
          <a
            href="https://instagram.com/tu_usuario"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram className="social-icon" />
            <span>Instagram</span>
          </a>

          <a
            href="http://googleusercontent.com/spotify.com/5"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaSpotify className="social-icon" />
            <span>Spotify</span>
          </a>

          <a
            href="https://youtube.com/@tu_canal"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaYoutube className="social-icon" />
            <span>YouTube</span>
          </a>
        </div>

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

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} La Moto Eléctrica. Hecho en Anaco,
            Venezuela.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
