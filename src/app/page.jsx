import Hero from "../components/Hero";
import About from "../components/About";
import Discography from "../components/Discography";
import Player from "../components/Player";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import StatsStrip from "../components/StatsStrip";

export default function Home() {
  return (
    <>
      {/* ── UI global (fixed) ── */}
      <ScrollProgress />
      <Navbar />

      {/* ── Contenido ── */}
      <Hero />
      <StatsStrip />
      <main>
        <About />
        <Discography />
      </main>
      <Footer />

      {/* ── Mini-player flotante ── */}
      <Player />
    </>
  );
}
