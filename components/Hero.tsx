'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/NkenfaB', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nkenfa-brandon-30064b178', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:nkenfabrandon71@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-card">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 to-purple-500/10 dark:from-primary-500/5 dark:to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-primary-500/10 dark:from-purple-500/5 dark:to-primary-500/5 rounded-full blur-3xl" />
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-primary-600 dark:text-dark-accent font-mono text-lg md:text-xl">
              Hi, my name is
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-dark-heading dark:to-gray-300 bg-clip-text text-transparent"
          >
            Nkenfa Brandon
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-dark-text mb-6 h-16 md:h-20"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Software Engineer',
                2000,
                'Mobile App Developer',
                2000,
                'Backend Architect',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-dark-text max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            I build and ship full-stack features with <span className="text-primary-600 dark:text-primary-400 font-semibold">5 years of experience</span> in React Native, Node.js, FastAPI, and GCP. Specializing in scalable mobile apps, robust backends, and cloud infrastructure.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-dark-card text-gray-700 dark:text-dark-heading hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gray-200 dark:bg-dark-card hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-dark-heading rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-gray-600 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-accent transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <HiArrowDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
