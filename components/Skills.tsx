"use client";

import SectionAtmosphere from "./SectionAtmosphere";
import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";
import { skillCategories, skillLevels } from "@/data/skills";
import { Reveal, SectionHeading } from "./PortfolioUI";

export default function Skills() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const activate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % skillCategories.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + skillCategories.length) % skillCategories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = skillCategories.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  };
  return (
    <section id="skills" className="section section-tinted">
      <SectionAtmosphere pattern="grid" />
      <div className="shell">
        <SectionHeading
          number="02"
          eyebrow="The toolkit"
          title="A stack that ships."
        >
          From a responsive screen to the service behind it. The tools I use to
          connect the whole product.
        </SectionHeading>
        <Reveal className="skills-workbench">
          <div
            className="skill-tabs"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                ref={(el) => {
                  tabs.current[index] = el;
                }}
                id={`skill-tab-${index}`}
                role="tab"
                aria-selected={selected === index}
                aria-controls={`skill-panel-${index}`}
                tabIndex={selected === index ? 0 : -1}
                onKeyDown={(event) => activate(event, index)}
                onClick={() => setSelected(index)}
              >
                <span className="mono">0{index + 1}</span>
                {category.title}
                <span className="tab-count">{category.skills.length}</span>
              </button>
            ))}
          </div>
          <div className="skill-content">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                id={`skill-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`skill-tab-${index}`}
                hidden={selected !== index}
                tabIndex={0}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {selected === index && (
                    <motion.div
                      key={category.title}
                      className="skill-grid"
                      initial={false}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.skills.map((skill) => (
                        <div className="skill-item" key={skill.name}>
                          <skill.icon
                            className="skill-icon"
                            aria-hidden="true"
                          />
                          <span className="skill-name">{skill.name}</span>
                          <span
                            className="skill-rating"
                            role="img"
                            aria-label={`${skill.name}: ${
                              skill.rating
                            } out of 5 stars — ${skillLevels[skill.rating]}`}
                            title={`${skill.rating}/5 · ${
                              skillLevels[skill.rating]
                            }`}
                          >
                            {Array.from({ length: 5 }, (_, star) => {
                              const Star =
                                star < skill.rating ? FaStar : FaRegStar;
                              return <Star key={star} aria-hidden="true" />;
                            })}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <p className="skill-legend">
              <span className="mono">THE SCALE</span> 1 Foundational · 2 Working
              knowledge · 3 Proficient · 4 Advanced · 5 Core expertise
            </p>
          </div>
        </Reveal>
        <Reveal className="extra-tools">
          <span className="eyebrow">Also in the toolkit</span>
          <div>
            {[
              "REST APIs",
              "GraphQL",
              "Expo",
              "Jest",
              "i18n",
              "Swagger",
              "CI/CD",
            ].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
