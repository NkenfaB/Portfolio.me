import React from "react";

import styles from "../styles/Credits.module.css";

const Credits = () => {
  return (
    <div id="credits" className={styles.wrapper}>
      <div className={styles.container}>
        <div>Built and designed by Nkenfa Brandon. </div>
        <div>All rights reserved. &copy;</div>
      </div>
    </div>
  );
};

export default Credits;
