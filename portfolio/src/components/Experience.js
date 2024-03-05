import React, { useState, useEffect } from "react";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);

  const sections = [
    {
      title: "Camsol",
      content: "Fullstack Developer From July 2022 to August 2023",
      points: [
        "Active and constructive participation in coordination meetings with clients and all associated parties, ensuring seamless communication and mutual understanding.",

        "Worked effectively on projects alongside the client’s customers, building comprehensive data models and database systems that have substantially benefited our operations and services.",

        "Astute capability in identifying the most relevant data sources, Proficient in preparing data for further processing, ensuring that it is accurate, relevant, and primed for effective utilization.",

        "Consistently provided and operated essential data services, reflecting their commitment to maintaining the highest standards of quality and efficiency.",
      ],
    },
    {
      title: "AICS Cameroon",
      content: "Academic Internship From August 2020 to September 2020",
      points: [
        "Developed a responsive JAVA web page from scratch, both on client and server side, for an app with massive scale that incorporated feature for e-learning, job searching and ecommerce functunalities",
        "Collaborated with senior engineers following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
      ],
    },
    {
      title: "MATGENIE",
      content: "Internship From August 2019 to September 2019",
      points: [
        "Collaborated with senior engineers following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
        "Iteratively deployed a computer parc management software, for handling various IT inventory and Interconnected computing units",
      ],
    },
    {
      title: "NATIONAL DIRECTION BEAC YAOUNDE",
      content: "Academic Internship From May 2019 to August 2019",
      points: [
        "Collaborated with Senior and Mid Level Engineers to manage and optimise the computer system architecture using GLPI",
        "Perform Network Maintenance and Configuration for the Personnel",
        "Acted as first responce for Desk Assistance",
      ],
    },
  ];

  const currentSection = sections[activeSection];

  useEffect(() => {
    setAnimationActive(true);
    const timeout = setTimeout(() => {
      setAnimationActive(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [activeSection]);

  return (
    <div id="experience" className={styles.wrapper}>
      <div className={styles.sidebarHeader}>
        <h2 className={`${styles.headerTitle} ${styles.fadeIn}`}>
          / Experience{" "}
        </h2>
        <hr className={styles.horizontalRule} />
      </div>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent1}>
            {sections.map((section, index) => (
              <div
                key={index}
                className={`${styles.progressBar} ${
                  activeSection === index ? styles.active : ""
                } ${animationActive ? styles.animationActive : ""}`}
                onClick={() => setActiveSection(index)}
              >
                {section.title}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sidebarContent2}>
          <h1 className={`${styles.fadeIn}`}>{currentSection.title}</h1>
          <p className={`${styles.fadeIn}`}>{currentSection.content}</p>
          <ul>
            {currentSection.points.map((point, index) => (
              <li key={index} className={`${styles.fadeIn}`}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
