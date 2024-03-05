import React from "react";
import "./App.css";

import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Credits from "./components/Credits";
import Projects from "./components/Project";
import Particles from "./components/Particles";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Credits />
        <Particles id="tsparticles" />
      </div>
    </div>
  );
}

export default App;
