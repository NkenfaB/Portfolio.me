import { experiences } from "@/data/experience";
import { HiArrowDownRight } from "react-icons/hi2";
import { Reveal, SectionHeading } from "./PortfolioUI";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          number="03"
          eyebrow="The journey"
          title="Experience in practice."
        >
          Building with teams, owning delivery, and learning from the details
          that matter in production.
        </SectionHeading>
        <div className="experience-timeline">
          {experiences.slice(0, 3).map((experience, index) => (
            <Reveal key={experience.company} delay={index * 50}>
              <article className="experience-row">
                <div className="experience-period">
                  <span className="timeline-dot" />
                  <span className="mono">{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
                <div className="experience-content">
                  <p className="eyebrow">{experience.company}</p>
                  <h3>{experience.position}</h3>
                  <ul>
                    {experience.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight}>
                        <HiArrowDownRight aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <details className="experience-details">
                    <summary>
                      More contributions <span>+</span>
                    </summary>
                    <ul>
                      {experience.highlights.slice(2).map((highlight) => (
                        <li key={highlight}>
                          <HiArrowDownRight aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                  <div className="technology-list">
                    {experience.tags.slice(0, 5).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <details className="earlier-experience">
            <summary>
              <span>
                <span className="eyebrow">Where it started</span>Earlier
                experience & internships
              </span>
              <span className="details-plus">+</span>
            </summary>
            <div>
              {experiences.slice(3).map((experience) => (
                <article key={experience.company}>
                  <span className="mono">{experience.period}</span>
                  <h3>{experience.company}</h3>
                  <p>{experience.position}</p>
                  <p>{experience.highlights[0]}</p>
                </article>
              ))}
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
