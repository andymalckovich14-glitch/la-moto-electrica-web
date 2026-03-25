import "./Discography.css";

// 1. IMPORTA TUS 7 PORTADAS AQUÍ
import portada1 from "../assets/portada1.jpg";
import portada2 from "../assets/portada2.png";
import portada3 from "../assets/portada3.jpg";
import portada4 from "../assets/portada4.png";
import portada5 from "../assets/portada5.png";
import portada6 from "../assets/portada6.jpg";
import portada7 from "../assets/portada7.png";

function Discography() {
  const albums = [
    {
      id: 1,
      title: "Química",
      type: "EP",
      year: "2022",
      cover: portada1,
      url: "https://open.spotify.com/intl-es/album/3jpXeo8s36nTikeCCkoOFZ?si=uSvX7ZSERx2VNFpNxdXGdw",
    },
    {
      id: 2,
      title: "Puñal",
      type: "Single",
      year: "2023",
      cover: portada2,
      url: "https://open.spotify.com/intl-es/track/3hXUFnLkPjWnXPZKGm0qru?si=82e8285691fd4e63",
    },
    {
      id: 3,
      title: "Odio El Nombre Valentina",
      type: "Single",
      year: "2024",
      cover: portada3,
      url: "https://open.spotify.com/intl-es/track/7mJBGqO8xhYGl5khyFDsVv?si=188abbce76f0411d",
    },
    {
      id: 4,
      title: "Un Año Más",
      type: "Single",
      year: "2024",
      cover: portada4,
      url: "https://open.spotify.com/intl-es/track/16tx7qYaAdRu0kwO2CzN9i?si=ae79688bd70348ce",
    },
    {
      id: 5,
      title: "El Porqué (Sarín de Flores)",
      type: "Single",
      year: "2024",
      cover: portada5,
      url: "https://open.spotify.com/intl-es/track/6KqtW9dxddXMUt06qVCwki?si=2a3fd25f96e844a8",
    },
    {
      id: 6,
      title: "Ya No Habrá Promesa",
      type: "Single",
      year: "2025",
      cover: portada6,
      url: "https://open.spotify.com/intl-es/track/6NYZq09OQj7CzH7jVObVEW?si=ead72a9f73e7423f",
    },
    {
      id: 7,
      title: "Más/Turbación",
      type: "Single",
      year: "2025",
      cover: portada7,
      url: "https://open.spotify.com/intl-es/track/0yNbf6GppdFk6NFhju8rXy?si=2db9e2baa94d4691",
    },
  ];

  return (
    <section className="disco-section fade-in">
      <div className="disco-container">
        <h2 className="disco-title">Discografía</h2>
        <div className="disco-grid">
          {/* Los 7 discos actuales */}
          {albums.map((album) => (
            <a
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              className="disco-card"
              key={album.id}
            >
              <img
                src={album.cover}
                alt={album.title}
                className="disco-cover"
              />
              <div className="disco-overlay">
                <div className="disco-info">
                  <p className="disco-type">{album.type}</p>
                  <h3>{album.title}</h3>
                  <span className="disco-year">{album.year}</span>
                  <div className="spotify-hint">Escuchar en Spotify</div>
                </div>
              </div>
            </a>
          ))}

          {/* 8vo CUADRO: EL MISTERIO */}
          <div className="disco-card mystery-card">
            <div className="mystery-content">
              <span className="mystery-icon">?</span>
              <p className="mystery-text">Próximamente</p>
            </div>
            <div className="disco-overlay">
              <div className="disco-info">
                <p className="disco-type">Nuevo Material</p>
                <h3>???</h3>
                <span className="disco-year">2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discography;
