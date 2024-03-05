import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import styles from "../styles/Project.module.css";

import Overview from "../assets/Overview.png";
// import Overview1 from "../assets/Overview1.png";
// import Overview2 from "../assets/Overview2.png";
// import Overview3 from "../assets/Overview3.png";
import prof_1 from "../assets/prof_1.png";
import prof_2 from "../assets/prof_2.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const cardsData = [
    {
      title: "Card 1",
      content: "Content for Card 1",
      githubLink: "https://github.com/your/repo1",
    },
    {
      title: "Card 2",
      content: "Content for Card 2",
      githubLink: "https://github.com/your/repo2",
    },
    {
      title: "Card 3",
      content: "Content for Card 3",
      githubLink: "https://github.com/your/repo3",
    },
    {
      title: "Card 4",
      content: "Content for Card 4",
      githubLink: "https://github.com/your/repo4",
    },
    {
      title: "Card 5",
      content: "Content for Card 5",
      githubLink: "https://github.com/your/repo5",
    },
    {
      title: "Card 6",
      content: "Content for Card 6",
      githubLink: "https://github.com/your/repo6",
    },
  ];

  const slides = [
    {
      title: "Messager",
      description: "Secure Messager with Public key pairs",
      link: "https://github.com/NkenfaB/Secure-Messaging.git",
      background: Overview,
    },
    {
      title: "Slide 2",
      description: "Description for Slide 2",
      link: "https://example.com/slide2",
      background: "Overview",
    },
    {
      title: "Slide 3",
      description: "Description for Slide 3",
      link: "https://example.com/slide3",
      background: Overview,
    },
    {
      title: "Slide 4",
      description: "Description for Slide 4",
      link: "https://example.com/slide4",
      background: "Overview",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            margin: "0px",
            paddingLeft: "0px",
            marginBottom: "-40px",
            padding: "15px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "4px",
          background: "gray",
          borderRadius: "5px",
          marginBottom: "15px",
        }}
      />
    ),
  };

  return (
    <div id="projects" className={styles.wrapper}>
      <div className={styles.sidebarHeader}>
        <h2 className={`${styles.headerTitle} ${styles.fadeIn}`}>
          / Side Projects{" "}
        </h2>
        <hr className={styles.horizontalRule} />
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                src={slide.background}
                alt={slide.title}
                className={styles.slideImage}
              />
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            githubLink={card.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
