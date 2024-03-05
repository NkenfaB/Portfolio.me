import React from "react";
import styles from "../styles/Button.module.css";
import { FaEnvelope } from "react-icons/fa";

const Button = () => {
  return (
    <div className={styles.Container}>
      <a href="mailto:nkenfabrandon71@gmail.com" className={styles.button}>
        <FaEnvelope size={20} className={styles.Icon} />
        Say Hi!
      </a>
    </div>
  );
};

export default Button;
