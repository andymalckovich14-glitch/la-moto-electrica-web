import "./Player.css";

function Player() {
  const spotifyUrl =
    "https://open.spotify.com/embed/artist/1VrmAzIcE04WB7gMS6fiM9?utm_source=generator";

  return (
    <div className="player-fixed-container">
      <div className="player-spotify-wrapper">
        <iframe
          style={{ borderRadius: "12px" }}
          src={spotifyUrl}
          width="100%"
          height="80"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Player;
