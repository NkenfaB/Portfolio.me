'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-heading mb-4">
              <span className="text-primary-600 dark:text-dark-accent font-mono">01.</span> About Me
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-dark-accent dark:to-primary-500 rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-gray-700 dark:text-dark-text leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I'm a <span className="text-primary-600 dark:text-primary-400 font-semibold">Full-Stack Software Engineer</span> based in Buea, Cameroon, with{' '}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">5 years of professional experience</span> building scalable mobile and web applications that solve real-world problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Currently pursuing a <span className="font-semibold">Bachelor's in Software Engineering</span> at the{' '}
              <a href="https://www.ubuea.cm" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-dark-accent hover:underline">
                University of Buea
              </a>, I specialize in building and shipping full-stack features for production applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              My recent work includes developing the <span className="font-semibold">Yoba Android/React Native app</span> with Redux state management, i18n localization, custom UI components, and integrated payment flows (CinetPay). On the backend, I've architected Node.js/Express APIs with Sequelize/MySQL, integrated external services (SendGrid, Twilio), and built admin dashboards.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              I've also shipped GCP-backed applications using <span className="font-semibold">FastAPI, Cloud Run, Postgres/Cloud SQL, and GCS</span>. I implement secure auth flows, admin dashboards, and storage integrations. I'm actively learning Kubernetes, having added session orchestration and health checks using the Python Kubernetes client.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Outside of coding, I follow the latest developments in technology and science, enjoy playing video games, and love reading. I'm passionate about creating software that makes a positive impact on people's lives.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
