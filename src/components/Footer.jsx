import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear(); // ¡Esto actualiza el año automáticamente!

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-info">
          <h3>La Moto Eléctrica</h3>
          <p>Shoegaze / Rock Alternativo</p>
          <p className="footer-location">Anaco, Venezuela</p>
        </div>

        <div className="footer-links">
          {/* Cambia el # por los links reales de la banda */}
          <a href="#" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Spotify
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} La Moto Eléctrica. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
