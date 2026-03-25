import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Discography from "./components/Discography";
import Player from "./components/Player";
import Latest from "./components/Latest";
import Footer from "./components/Footer";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Discography />
      <Player />
      <Latest />
      <Footer />
    </div>
  );
}

export default App;
