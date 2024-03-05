import React from "react";
import Typist from "react-typist";
import styles from "../styles/Headliner.module.css";
import { ReactTyped as Typed } from "react-typed";

const Headliner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Headliner}>
        {/* <Typist loop={false} avgTypingDelay={120}>
          Hi, I'm <b style={{ color: "#4d1c7d" }}>Nkenfa.</b>
        </Typist> */}
        <Typed
          strings={["Hi, am Nkenfa!", "Welcome to my portfolio!"]}
          typeSpeed={80}
          backSpeed={40}
          loop
        />
      </div>
    </div>
  );
};

export default Headliner;
