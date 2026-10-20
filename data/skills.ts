import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiFastapi,
  SiRedux,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

export const skillLevels: Record<number, string> = {
  1: "Foundational",
  2: "Working knowledge",
  3: "Proficient",
  4: "Advanced",
  5: "Core expertise",
};

// Ratings reflect the CV and reviewed work: repeated delivery in web/mobile,
// practical backend/cloud experience, and more limited C/C# project evidence.
export const skillCategories = [
  {
    title: "Frontend & Mobile",
    skills: [
      {
        name: "React / React Native",
        rating: 5,
        icon: SiReact,
        color: "#61DAFB",
      },
      { name: "Next.js", rating: 5, icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", rating: 5, icon: SiTypescript, color: "#3178C6" },
      {
        name: "JavaScript (ES6+)",
        rating: 5,
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      { name: "Redux", rating: 4, icon: SiRedux, color: "#764ABC" },
      {
        name: "Tailwind CSS",
        rating: 5,
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      { name: "HTML5", rating: 5, icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", rating: 5, icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", rating: 4, icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", rating: 4, icon: SiExpress, color: "#000000" },
      { name: "FastAPI", rating: 4, icon: SiFastapi, color: "#009688" },
      { name: "Python", rating: 4, icon: SiPython, color: "#3776AB" },
      { name: "C#", rating: 3, icon: FaCode, color: "#239120" },
      { name: "C", rating: 2, icon: FaCode, color: "#A8B9CC" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", rating: 4, icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", rating: 4, icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", rating: 4, icon: SiMongodb, color: "#47A248" },
      { name: "MariaDB", rating: 3, icon: SiMysql, color: "#003545" },
      { name: "SQLite", rating: 4, icon: SiMysql, color: "#003B57" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      {
        name: "Google Cloud Platform",
        rating: 4,
        icon: SiGooglecloud,
        color: "#4285F4",
      },
      { name: "Cloud Run", rating: 4, icon: SiGooglecloud, color: "#4285F4" },
      { name: "Kubernetes", rating: 3, icon: SiKubernetes, color: "#326CE5" },
      { name: "Docker", rating: 4, icon: SiDocker, color: "#2496ED" },
      { name: "Git", rating: 5, icon: SiGit, color: "#F05032" },
    ],
  },
];
