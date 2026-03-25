import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Player from "./components/Player";
import Latest from "./components/Latest";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Player />
      <Latest />
      <Footer />
    </div>
  );
}

export default App;
