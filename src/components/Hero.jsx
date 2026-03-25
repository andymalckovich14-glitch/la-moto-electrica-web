import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container">
      {/* 1. Este div tendrá la imagen de fondo y la animación */}
      <div className="hero-background"></div>

      {/* 2. Este div asegura que el texto esté centrado y por encima */}
      <div className="hero-content">
        <h1 className="hero-title">La Moto Eléctrica</h1>
        <p className="hero-subtitle">Shoegaze / Post-Rock</p>
      </div>
    </section>
  );
}

export default Hero;
