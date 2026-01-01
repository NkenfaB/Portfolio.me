'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/NkenfaB',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/nkenfa-brandon-30064b178',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:nkenfabrandon71@gmail.com',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-heading mb-4">
              <span className="text-primary-600 dark:text-dark-accent font-mono">05.</span> Get In Touch
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-dark-accent dark:to-primary-500 rounded-full mx-auto" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-dark-text leading-relaxed mb-6">
              I'm currently open to new opportunities and interesting projects. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-dark-text leading-relaxed">
              I'm always excited to discuss new technologies, potential collaborations, or opportunities to create something amazing together.
            </p>
          </motion.div>

          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-12"
          >
            <motion.a
              href="mailto:nkenfabrandon71@gmail.com"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Say Hello</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center items-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-dark-text ${social.color} transition-all duration-300`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <p className="text-gray-500 dark:text-gray-600 text-sm">
              Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
            </p>
            <p className="text-gray-500 dark:text-gray-600 text-sm mt-2">
              &copy; {new Date().getFullYear()} Nkenfa Brice. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
