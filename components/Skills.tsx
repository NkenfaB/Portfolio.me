"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
import { FaCode, FaStar, FaRegStar } from "react-icons/fa";

const skillLevels: Record<number, string> = {
  1: "Foundational",
  2: "Working knowledge",
  3: "Proficient",
  4: "Advanced",
  5: "Core expertise",
};

// Ratings reflect the CV and reviewed work: repeated delivery in web/mobile,
// practical backend/cloud experience, and more limited C/C# project evidence.
const skillCategories = [
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

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-gray-50 dark:bg-dark-card"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-heading mb-4">
              <span className="text-primary-600 dark:text-dark-accent font-mono">
                02.
              </span>{" "}
              Skills & Technologies
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-dark-accent dark:to-primary-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-dark-text max-w-2xl mx-auto">
              Skills developed through professional delivery and personal
              projects
            </p>
            <p className="text-sm text-gray-600 dark:text-dark-text max-w-3xl mx-auto mt-4">
              Experience scale: 1 · Foundational, 2 · Working knowledge, 3 ·
              Proficient, 4 · Advanced, 5 · Core expertise.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-dark-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-heading mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3 min-w-0 p-3 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <skill.icon
                        className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                        style={{ color: skill.color }}
                      />
                      <span className="flex-1 min-w-0 text-sm font-medium text-gray-700 dark:text-dark-text">
                        {skill.name}
                      </span>
                      <span
                        role="img"
                        aria-label={`${skill.name}: ${
                          skill.rating
                        } out of 5 stars — ${skillLevels[skill.rating]}`}
                        title={`${skill.rating}/5 · ${
                          skillLevels[skill.rating]
                        }`}
                        className="flex shrink-0 items-center gap-0.5 text-amber-600 dark:text-amber-400"
                      >
                        {Array.from({ length: 5 }, (_, index) => {
                          const Star =
                            index < skill.rating ? FaStar : FaRegStar;
                          return (
                            <Star
                              key={index}
                              aria-hidden="true"
                              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                            />
                          );
                        })}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-heading mb-4">
              Other Skills & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "REST APIs",
                "GraphQL",
                "Sequelize",
                "SendGrid",
                "Twilio",
                "CinetPay",
                "Redux Toolkit",
                "i18n",
                "Expo",
                "Jest",
                "ProGuard",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
