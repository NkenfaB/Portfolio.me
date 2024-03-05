import React from "react";

import styles from "../styles/Navbar.module.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.NavbarList}>
        <li className={styles.NavbarItem1} style={{ float: "left" }}>
          <img
            src={Logo}
            alt="Visual Identity"
            style={{ width: "300px", height: "auto" }}
          />
        </li>
        <li className={styles.NavbarItem}>
          <a href="/blog">Blog</a>
        </li>
        <li className={styles.NavbarItem}>
          <a href="#credits">Credits</a>
        </li>
        <li className={styles.NavbarItem}>
          <a href="#projects">Projects</a>
        </li>
        <li className={styles.NavbarItem}>
          <a href="#experience">Experience</a>
        </li>
        <li className={styles.NavbarItem}>
          <a href="#about">About</a>
        </li>
        <li className={styles.NavbarItem}>
          <a href="#intro">Intro</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
