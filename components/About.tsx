import {
  HiArrowUpRight,
  HiCodeBracket,
  HiDevicePhoneMobile,
  HiCloud,
} from "react-icons/hi2";
import { Reveal, SectionHeading } from "./PortfolioUI";

const focus = [
  {
    icon: HiDevicePhoneMobile,
    title: "Products people use",
    text: "Responsive web experiences and React Native apps, from authentication to payments and release delivery.",
  },
  {
    icon: HiCodeBracket,
    title: "Systems that connect",
    text: "APIs, data services, and integrations that make the interface useful and keep the product moving.",
  },
  {
    icon: HiCloud,
    title: "Ownership beyond launch",
    text: "Cloud deployments, debugging, testing, and maintenance. Shipping is the start of the next iteration.",
  },
];

export default function About() {
  return (
    <section id="about" className="section section-tinted">
      <div className="shell">
        <SectionHeading
          number="04"
          eyebrow="A little about me"
          title="Curiosity meets craft."
        />
        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="about-lead">
              I like understanding the whole system—and making every part work
              better together.
            </p>
            <p>
              I&apos;m Nkenfa, a full-stack software engineer in Buea, Cameroon.
              My work spans React and Next.js interfaces, React Native apps,
              Node.js and Python APIs, and Google Cloud deployments.
            </p>
            <p>
              I&apos;ve delivered features for Afriknetworks and Stied Research,
              built services at Camsol Technologies, and explored mobile machine
              learning and cryptography through personal projects. I bring that
              same hands-on curiosity to each new problem.
            </p>
            <div className="about-facts">
              <div>
                <span className="mono">BASED IN</span>
                <strong>Cameroon · Remote</strong>
              </div>
              <div>
                <span className="mono">LANGUAGES</span>
                <strong>English & French</strong>
              </div>
              <div>
                <span className="mono">EDUCATION</span>
                <strong>Software Engineering</strong>
                <span>University of Buea · Master&apos;s, 2024–2026</span>
              </div>
            </div>
            <a
              className="text-link"
              href="https://github.com/NkenfaB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow what I&apos;m building{" "}
              <HiArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>
          <div className="focus-list">
            {focus.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="focus-item">
                  <item.icon aria-hidden="true" />
                  <div>
                    <span className="mono">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
