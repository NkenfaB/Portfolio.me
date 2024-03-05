// Card.js
import React from "react";
import { FaGithub, FaFolderOpen } from "react-icons/fa";
import styles from "../styles/Project.module.css";

const Card = ({ title, content, githubLink }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <FaFolderOpen size={34} color="#d09fe0" />
      </div>

      <div className={styles.iconContainer2}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} color="#ffffff" />
        </a>
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
