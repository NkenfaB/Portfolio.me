"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { projectGroups } from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-heading mb-4">
              <span className="text-primary-600 dark:text-dark-accent font-mono">
                04.
              </span>{" "}
              Featured Projects
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-dark-accent dark:to-primary-500 rounded-full" />
            <p className="text-lg text-gray-600 dark:text-dark-text mt-4">
              Independent projects and contributions to company and client
              products
            </p>
          </div>

          <div className="space-y-16">
            {projectGroups.map((group) => (
              <section key={group.id} aria-labelledby={group.id}>
                <div className="mb-8 max-w-3xl">
                  <h3
                    id={group.id}
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-dark-heading mb-3"
                  >
                    {group.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dark-text leading-relaxed">
                    {group.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {group.projects.map((project) => (
                    <article
                      key={project.title}
                      className="group flex flex-col bg-white dark:bg-dark-bg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                      <p className="text-sm font-semibold text-primary-700 dark:text-dark-accent mb-3">
                        {project.attribution}
                      </p>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-dark-heading mb-3 break-words">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-dark-text mb-2">
                        {project.period}
                      </p>
                      <p className="text-sm font-medium text-gray-700 dark:text-dark-text mb-4">
                        {project.status}
                      </p>
                      <p className="text-gray-600 dark:text-dark-text leading-relaxed mb-5">
                        {project.description}
                      </p>
                      <ul
                        aria-label="Technologies"
                        className="flex flex-wrap gap-2 mb-6"
                      >
                        {project.tech.map((tech) => (
                          <li
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-dark-text text-sm rounded-full"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex flex-wrap items-center gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} source code`}
                            className="flex items-center gap-2 text-gray-600 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-accent transition-colors"
                          >
                            <FaGithub className="w-5 h-5" aria-hidden="true" />
                            <span className="text-sm font-medium">Code</span>
                          </a>
                        )}
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} website`}
                            className="flex items-center gap-2 text-gray-600 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-accent transition-colors"
                          >
                            <FaExternalLinkAlt
                              className="w-4 h-4"
                              aria-hidden="true"
                            />
                            <span className="text-sm font-medium">Website</span>
                          </a>
                        )}
                        {!project.github && (
                          <span className="text-sm text-gray-500 dark:text-dark-text">
                            Company/client source not linked
                          </span>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-dark-text mb-4">
              Want to see more? Check out my GitHub for additional projects and
              contributions
            </p>
            <motion.a
              href="https://github.com/NkenfaB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
              <span className="font-medium">View GitHub Profile</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
