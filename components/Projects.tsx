"use client";

import SectionAtmosphere from "./SectionAtmosphere";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight, HiArrowRight, HiPlus } from "react-icons/hi2";
import { projectGroups, type Project } from "@/data/projects";
import { Reveal, SectionHeading } from "./PortfolioUI";

function ProjectVisual({ messenger }: { messenger: boolean }) {
  if (messenger)
    return (
      <div className="project-visual messenger-visual" aria-hidden="true">
        <div className="visual-topline mono">
          <span>SECURE MESSENGER</span>
          <span>RSA / PYTHON</span>
        </div>
        <div className="message-node node-left">
          <span className="node-avatar">A</span>
          <div>
            <span className="tiny-label">MESSAGE</span>
            <span className="message-lines">
              <i />
              <i />
            </span>
          </div>
        </div>
        <div className="encrypted-line">
          <span />
          <span className="code-lock">{"{ RSA }"}</span>
          <span />
        </div>
        <div className="message-node node-right">
          <span className="node-avatar">B</span>
          <div>
            <span className="tiny-label">SIGNATURE VERIFIED</span>
            <span className="message-lines">
              <i />
              <i />
            </span>
          </div>
        </div>
        <div className="visual-bottom mono">
          ENCRYPT <span>→</span> SIGN <span>→</span> VERIFY
        </div>
      </div>
    );
  return (
    <div className="project-visual lively-visual" aria-hidden="true">
      <div className="visual-topline mono">
        <span>LIVELY</span>
        <span>ON-DEVICE ML</span>
      </div>
      <div className="lively-wordmark">
        lively<span>✳</span>
      </div>
      <div className="waveform">
        {Array.from({ length: 36 }, (_, index) => (
          <span
            key={index}
            style={{
              height: `${12 + ((index * 17 + 11) % 9) * 7}px`,
              animationDelay: `${index * 45}ms`,
            }}
          />
        ))}
      </div>
      <div className="visual-bottom mono">
        A COUGH. A SIGNAL. A RESEARCH QUESTION.
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  personal,
}: {
  project: Project;
  index: number;
  personal: boolean;
}) {
  return (
    <Reveal delay={index * 65}>
      <article
        className={`project-card ${
          personal ? "personal-card" : "professional-card"
        }`}
      >
        {personal && <ProjectVisual messenger={index === 1} />}
        <div className="project-body">
          <p className="project-attribution">{project.attribution}</p>
          <h4>{project.title}</h4>
          <p className="project-date mono">{project.period}</p>
          <p className="project-status">
            <span />
            {project.status}
          </p>
          <details className="project-details">
            <summary>
              <span>Project overview</span>
              <HiPlus aria-hidden="true" />
            </summary>
            <p>{project.description}</p>
          </details>
          <ul className="technology-list" aria-label="Technologies">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="project-links">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} website`}
              >
                Visit website <HiArrowUpRight aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
              >
                <FaGithub aria-hidden="true" /> View code{" "}
                <HiArrowUpRight aria-hidden="true" />
              </a>
            )}
            {!project.github && (
              <span className="private-source">
                Company/client source not linked
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const group = projectGroups[selected];
  return (
    <section id="projects" className="section">
      <SectionAtmosphere pattern="drift" />
      <div className="shell">
        <SectionHeading
          number="01"
          eyebrow="Selected work"
          title="Built with intention."
        >
          Independent experiments and real product delivery. Different contexts,
          the same care for how things work.
        </SectionHeading>
        <Reveal className="project-toolbar">
          <div
            className="project-switch"
            role="group"
            aria-label="Project type"
          >
            {projectGroups.map((item, index) => (
              <button
                key={item.id}
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                {item.title}
                <span>{item.projects.length.toString().padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <a
            href="https://github.com/NkenfaB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            More on GitHub <HiArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={group.id}
            aria-labelledby={group.id}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <div className="project-group-intro">
              <h3 id={group.id}>{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <div className="project-grid">
              {group.projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  personal={selected === 0}
                />
              ))}
            </div>
          </motion.section>
        </AnimatePresence>
        <Reveal className="work-footnote">
          <span className="mono">
            GOOD SOFTWARE IS ALWAYS A WORK IN PROGRESS.
          </span>
          <a href="#contact" className="text-link">
            Have something in mind? <HiArrowRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
