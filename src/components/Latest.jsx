import { useEffect } from "react";
import "./Latest.css";

function Latest() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="latest-section">
      <div className="latest-container">
        <div className="latest-header">
          <h2>Últimas Publicaciones</h2>
          <p className="player-subtitle">
            Síguenos en Instagram para novedades y fechas en Anaco.
          </p>
        </div>

        <div className="elfsight-app-6e7ad477-31f9-4b75-b29d-1d3f700c654c"></div>
      </div>
    </section>
  );
}

export default Latest;
