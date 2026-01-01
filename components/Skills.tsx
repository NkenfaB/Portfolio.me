'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact, SiNodedotjs, SiPython, SiTypescript, SiJavascript,
  SiNextdotjs, SiExpress, SiFastapi, SiRedux, SiMysql,
  SiPostgresql, SiMongodb, SiGooglecloud, SiKubernetes, SiDocker,
  SiGit, SiTailwindcss, SiHtml5, SiCss3
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React / React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C#', icon: FaCode, color: '#239120' },
      { name: 'C', icon: FaCode, color: '#A8B9CC' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MariaDB', icon: SiMysql, color: '#003545' },
      { name: 'SQLite', icon: SiMysql, color: '#003B57' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Google Cloud Platform', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Cloud Run', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-heading mb-4">
              <span className="text-primary-600 dark:text-dark-accent font-mono">02.</span> Skills & Technologies
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-dark-accent dark:to-primary-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-dark-text max-w-2xl mx-auto">
              Technologies I&apos;ve worked with recently
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-dark-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-heading mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <skill.icon
                        className="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-dark-text">
                        {skill.name}
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
              {['REST APIs', 'GraphQL', 'Sequelize', 'SendGrid', 'Twilio', 'CinetPay', 'Redux Toolkit', 'i18n', 'Expo', 'Jest', 'ProGuard'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.6 + (index * 0.05), duration: 0.3 }}
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
