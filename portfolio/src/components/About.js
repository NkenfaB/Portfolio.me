import React from "react";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.headerTitle}>/ About Me </h2>
          <hr className={styles.horizontalRule} />
        </div>
        <p className={styles.TextFont}>
          I was currently a <b>Software Development Engineer</b> at{" "}
          <a href="https://www.camsol.io/" style={{ color: "#d09fe0" }}>
            Camsol Technologies
          </a>
          , working as a FullStack Developer. At the same time, I am undertaking
          a part-time <b> Bachelor's of Technology</b> in{" "}
          <b>Software Engineering </b>at{" "}
          <a href="https://www.ubuea.cm" style={{ color: "#d09fe0" }}>
            University of Buea
          </a>
          . Here are some Technologies i have been working with:
          <div>
            <ui className={styles.gridContainer}>
              <li>React.js</li>
              <li>Python</li>
              <li>Javascrip ES6+</li>
              <li>Typescript</li>
              <li>Java</li>
              <li>C#</li>
              <li>React Native</li>
              <li>C</li>
              <li>Photoshop</li>
            </ui>
          </div>
          Outside of work, I'm interested i follow the development of science. I
          also love playing video games as well as reading.
        </p>
      </div>
    </div>
  );
};

export default About;
