import "./Player.css";

function Player() {
  return (
    <section className="player-section">
      <div className="player-container">
        <h2>Escucha Nuestra Música</h2>
        <p className="player-subtitle">
          Las texturas más escuchadas de La Moto Eléctrica.
        </p>

        {/* El contenedor del reproductor de Lista (¡Ahora en modo oscuro!) */}
        <div className="iframe-container">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/1VrmAzIcE04WB7gMS6fiM9?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Player;
