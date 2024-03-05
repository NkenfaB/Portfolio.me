import React from "react";
import "../styles/Intro.module.css";

// import prof_1 from "../assets/prof_1.png";
// import prof_2 from "../assets/prof_2.png";

// Import CSS styles
import styles from "../styles/Intro.module.css";
import Navbar from "./navbar";
import Button from "./Button";
import Headliner from "./Headliner";

const Intro = () => {
  return (
    <div id="intro" className={styles.intro}>
      <Navbar />
      <Headliner />
      <div className={styles.Wrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.font1}>
            Hi, I'm <b style={{ color: "#4d1c7d" }}>Nkenfa.</b>
          </div>
          I'm a Buea-based software engineer passionate <br />
          about full-stack development and <br />
          human-computer interactions. I excel in <br />
          crafting dynamic front-end interfaces and <br />
          architecting robust back-end systems.
          <br />
          Let's build something amazing together!
        </div>
        <div className={styles.rightWrapper}></div>
      </div>
      <Button></Button>
    </div>
  );
};

export default Intro;
