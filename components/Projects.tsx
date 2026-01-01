'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Yoba Mobile App',
    description: 'Full-featured Android/React Native mobile application with Redux state management, i18n localization, custom UI components, and integrated payment flows using CinetPay. Complete with admin dashboard and backend API.',
    tech: ['React Native', 'Redux', 'Node.js', 'Express', 'MySQL', 'SendGrid', 'Twilio', 'CinetPay'],
    github: null, // Private project
    demo: 'https://yoba.app',
    featured: true,
  },
  {
    title: 'GCP-Backed Web Application',
    description: 'Production-ready web application built with FastAPI, deployed on Google Cloud Run with Postgres/Cloud SQL backend, Google Cloud Storage integration, and secure authentication. Includes K8s session orchestration and health monitoring.',
    tech: ['FastAPI', 'Python', 'GCP', 'Cloud Run', 'PostgreSQL', 'Kubernetes', 'Docker', 'Next.js'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Secure Messenger',
    description: 'End-to-end encrypted messaging application using public key pairs for secure communication. Implements modern cryptography principles for privacy-focused messaging.',
    tech: ['React', 'Node.js', 'Cryptography', 'WebSockets'],
    github: 'https://github.com/NkenfaB/Secure-Messaging.git',
    demo: null,
    featured: true,
  },
  {
    title: 'E-Learning Platform',
    description: 'Comprehensive Java web application featuring e-learning modules, job search functionality, and ecommerce capabilities. Built during internship at AICS Cameroon.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Computer Park Management System',
    description: 'IT inventory and management software for handling various computing units and interconnected systems. Developed iteratively for enterprise use.',
    tech: ['Java', 'Database Design', 'System Architecture'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Admin Dashboard Suite',
    description: 'Collection of admin dashboards built for various clients, featuring user management, content administration, analytics, and reporting functionalities.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js'],
    github: null,
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-heading mb-4">
              <span className="text-primary-600 dark:text-dark-accent font-mono">04.</span> Featured Projects
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-dark-accent dark:to-primary-500 rounded-full" />
            <p className="text-lg text-gray-600 dark:text-dark-text mt-4">
              Some of the projects I&apos;ve worked on recently
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white dark:bg-dark-bg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                    FEATURED
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-heading mb-3 group-hover:text-primary-600 dark:group-hover:text-dark-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dark-text leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-dark-text text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-accent transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-accent transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="text-sm text-gray-500 dark:text-gray-600 italic">
                      Private / Under NDA
                    </span>
                  )}
                </div>
              </motion.div>
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
              Want to see more? Check out my GitHub for additional projects and contributions
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
