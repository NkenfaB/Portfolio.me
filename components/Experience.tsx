"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiCheckCircle } from "react-icons/hi";

const experiences = [
  {
    company: "Afriknetworks Sarl",
    position: "Full-Stack Developer and Mobile Engineer",
    period: "March 2025 - Present",
    location: "Remote",
    highlights: [
      "Develop and maintain Yoba mobile and web features using React Native and React/Next.js, from UI implementation and API integration to testing and production releases",
      "Delivered Orange Money, MTN Mobile Money and international card payment flows; supported Android and iOS releases approved and live on both stores",
      "Improve responsive interfaces, Redux state management, notifications, dark mode, automatic logout and administration tools",
      "Implemented YobaHome workflows for authentication, property browsing, reservations, messaging and host publishing, with backend integration continuing",
    ],
    tags: [
      "React Native",
      "React",
      "Next.js",
      "Redux",
      "Payments",
      "API Integration",
    ],
  },
  {
    company: "Stied Research",
    position: "Senior Software Engineer (Contract)",
    period: "December 2024 - Present",
    location: "Remote",
    highlights: [
      "Deliver features across React/Next.js interfaces, Node.js/NestJS APIs, PostgreSQL/MongoDB data services and Google Cloud deployments for weems.dev, atestly.com and tryscramble.com",
      "Integrated AI services, administrative billing and compute-pricing displays into weems.dev",
      "Resolved FastAPI authentication regressions, Google OAuth redirects and Cloud Run configuration issues; ran Alembic migrations through deployment jobs",
      "Integrated payment providers and two-factor authentication into tryscramble.com; maintained Docker, Kubernetes and CI/CD delivery",
    ],
    tags: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "FastAPI",
      "GCP",
      "PostgreSQL",
      "Kubernetes",
    ],
  },
  {
    company: "Camsol Technologies",
    position: "Full-Stack Developer",
    period: "June 2022 - August 2023",
    location: "Buea, Cameroon",
    highlights: [
      "Actively participated in coordination meetings with clients and stakeholders, ensuring seamless communication and mutual understanding",
      "Built comprehensive data models and database systems that substantially benefited operations and services",
      "Identified relevant data sources and prepared data for processing, ensuring accuracy and quality",
      "Provided and operated essential data services with high standards of quality and efficiency",
      "Collaborated with cross-functional teams to deliver features on schedule",
    ],
    tags: [
      "Full Stack",
      "Database Design",
      "Client Management",
      "Data Processing",
    ],
  },
  {
    company: "AICS Cameroon",
    position: "Software Development Intern",
    period: "August 2020 - September 2020",
    location: "Cameroon",
    highlights: [
      "Developed a responsive Java web application from scratch for an e-learning, job searching, and ecommerce platform",
      "Implemented both client-side and server-side features for a massive-scale application",
      "Collaborated with senior engineers following best practices for full software development life cycle",
      "Participated in code reviews, source control management, build processes, testing, and operations",
    ],
    tags: ["Java", "Web Development", "Full Stack", "SDLC"],
  },
  {
    company: "MATGENIE",
    position: "Software Development Intern",
    period: "August 2019 - September 2019",
    location: "Cameroon",
    highlights: [
      "Collaborated with senior engineers on coding standards, code reviews, and source control management",
      "Iteratively deployed a computer park management software for IT inventory and interconnected computing units",
      "Gained experience in build processes, testing, and operational procedures",
    ],
    tags: ["Software Development", "IT Management", "Deployment"],
  },
  {
    company: "National Direction BEAC Yaounde",
    position: "IT Support Intern",
    period: "May 2019 - August 2019",
    location: "Yaounde, Cameroon",
    highlights: [
      "Collaborated with Senior and Mid-Level Engineers to manage and optimize computer system architecture using GLPI",
      "Performed network maintenance and configuration for personnel",
      "Acted as first response for desk assistance and troubleshooting",
    ],
    tags: ["IT Support", "Network Configuration", "System Administration"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-dark-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-heading mb-4">
              <span className="text-primary-600 dark:text-dark-accent font-mono">
                03.
              </span>{" "}
              Experience
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-dark-accent dark:to-primary-500 rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Company Tabs */}
            <div className="lg:w-1/4">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-2 lg:space-x-0 lg:space-y-2 pb-4 lg:pb-0">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={exp.company}
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 py-3 text-left rounded-lg whitespace-nowrap lg:whitespace-normal transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-l-4 border-primary-600 dark:border-dark-accent"
                        : "bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-semibold text-sm">{exp.company}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:w-3/4">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-dark-card rounded-xl p-6 md:p-8 shadow-lg"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-dark-heading mb-2">
                  {experiences[activeIndex].position}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-4 text-gray-600 dark:text-dark-text">
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    @ {experiences[activeIndex].company}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>{experiences[activeIndex].period}</span>
                  <span className="text-gray-400">•</span>
                  <span>{experiences[activeIndex].location}</span>
                </div>

                <ul className="space-y-4 mb-6">
                  {experiences[activeIndex].highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      className="flex items-start space-x-3 text-gray-700 dark:text-dark-text"
                    >
                      <HiCheckCircle className="w-6 h-6 text-primary-600 dark:text-dark-accent flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experiences[activeIndex].tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.05, duration: 0.2 }}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
