import "./Player.css";
import { FaSpotify } from "react-icons/fa";

const spotifyUrl =
  "https://open.spotify.com/embed/artist/1VrmAzIcE04WB7gMS6fiM9?utm_source=generator&theme=0";

export default function Player() {
  return (
    <div className="player-floating">
      {/* ── Header strip ── */}
      <div className="player-header">
        <FaSpotify className="player-spotify-icon" />
        <span className="player-band-name">La Moto Eléctrica</span>
      </div>

      {/* ── Embed ── */}
      <iframe
        src={spotifyUrl}
        width="340"
        height="80"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="La Moto Eléctrica en Spotify"
      />
    </div>
  );
}
