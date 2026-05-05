import DiscographyGrid from "./DiscographyGrid";

// Server Component — datos estáticos + layout
const albums = [
  {
    id: 1,
    title: "Química",
    type: "EP",
    year: "2022",
    cover: "/images/portada1.jpg",
    url: "https://open.spotify.com/intl-es/album/3jpXeo8s36nTikeCCkoOFZ?si=uSvX7ZSERx2VNFpNxdXGdw",
  },
  {
    id: 2,
    title: "Puñal",
    type: "Single",
    year: "2023",
    cover: "/images/portada2.png",
    url: "https://open.spotify.com/intl-es/track/3hXUFnLkPjWnXPZKGm0qru?si=82e8285691fd4e63",
  },
  {
    id: 3,
    title: "Odio El Nombre Valentina",
    type: "Single",
    year: "2024",
    cover: "/images/portada3.jpg",
    url: "https://open.spotify.com/intl-es/track/7mJBGqO8xhYGl5khyFDsVv?si=188abbce76f0411d",
  },
  {
    id: 4,
    title: "Un Año Más",
    type: "Single",
    year: "2024",
    cover: "/images/portada4.png",
    url: "https://open.spotify.com/intl-es/track/16tx7qYaAdRu0kwO2CzN9i?si=ae79688bd70348ce",
  },
  {
    id: 5,
    title: "El Porqué (Sarín de Flores)",
    type: "Single",
    year: "2024",
    cover: "/images/portada5.png",
    url: "https://open.spotify.com/intl-es/track/6KqtW9dxddXMUt06qVCwki?si=2a3fd25f96e844a8",
  },
  {
    id: 6,
    title: "Ya No Habrá Promesa",
    type: "Single",
    year: "2025",
    cover: "/images/portada6.jpg",
    url: "https://open.spotify.com/intl-es/track/6NYZq09OQj7CzH7jVObVEW?si=ead72a9f73e7423f",
  },
  {
    id: 7,
    title: "Más/Turbación",
    type: "Single",
    year: "2025",
    cover: "/images/portada7.png",
    url: "https://open.spotify.com/intl-es/track/0yNbf6GppdFk6NFhju8rXy?si=2db9e2baa94d4691",
  },
];

export default function Discography() {
  return (
    <section className="disco-section" id="discografia">
      <div className="disco-container">
        <DiscographyGrid albums={albums} />

        {/* ── CTA Spotify ── */}
        <div className="disco-spotify-cta">
          <a
            href="https://open.spotify.com/artist/1VrmAzIcE04WB7gMS6fiM9"
            target="_blank"
            rel="noopener noreferrer"
            className="disco-spotify-btn"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Ver discografía completa en Spotify
          </a>
        </div>
      </div>
    </section>
  );
}

