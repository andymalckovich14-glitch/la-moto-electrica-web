import "./Hero.css";
import HeroContent from "./HeroContent";

// Server Component — solo estructura + layout
export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-background" aria-hidden="true" />
      <HeroContent />
    </section>
  );
}
