import ParticlesBackground from "./ParticlesBackground";
import Image from "next/image";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ActionLink } from "./PortfolioUI";

export default function Hero() {
  return (
    <section id="home" className="hero shell">
      <ParticlesBackground />
      <div className="hero-copy">
        <p className="eyebrow hero-enter">
          <span className="status-dot" /> Open to remote opportunities
        </p>
        <p className="hero-role hero-enter">Full-stack software engineer</p>
        <h1 className="hero-enter">
          Nkenfa
          <br />
          Brandon<span>.</span>
        </h1>
        <h2 className="hero-tagline hero-enter">
          Interfaces to infrastructure.
        </h2>
        <p className="hero-description hero-enter">
          I build web and mobile products, connect the APIs behind them, and
          bring them to production. Based in Cameroon. Working everywhere.
        </p>
        <div className="hero-actions hero-enter">
          <ActionLink href="#projects">Explore my work</ActionLink>
          <ActionLink href="#contact" secondary>
            Let&apos;s build something
          </ActionLink>
        </div>
        <div className="hero-social hero-enter">
          <a
            href="https://github.com/NkenfaB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub aria-hidden="true" /> GitHub{" "}
            <HiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/nkenfa-brandon-30064b178"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn aria-hidden="true" /> LinkedIn{" "}
            <HiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-visual hero-enter">
        <div className="portrait-topline mono">
          <span>THE ENGINEER BEHIND THE CODE</span>
          <span>NB — 01</span>
        </div>
        <div className="portrait-frame">
          <Image
            src="/assets/me2.jpg"
            alt="Nkenfa Brandon"
            fill
            priority
            sizes="(max-width: 700px) 85vw, 40vw"
            className="portrait-image"
          />
          <div className="portrait-grid" aria-hidden="true" />
          <span className="portrait-corner corner-tl" aria-hidden="true" />
          <span className="portrait-corner corner-br" aria-hidden="true" />
          <div className="portrait-caption">
            <span className="status-dot" />
            <span>
              Curious mind.
              <br />
              <strong>Builder at heart.</strong>
            </span>
            <HiArrowUpRight aria-hidden="true" />
          </div>
        </div>
        <div className="hero-capabilities">
          <span>WEB</span>
          <span>MOBILE</span>
          <span>APIs</span>
          <span>CLOUD</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="mono">
          BUEA, CAMEROON <span className="muted">/ UTC +01</span>
        </span>
        <a href="#projects">
          Scroll to discover <HiArrowDown aria-hidden="true" />
        </a>
        <span className="mono hero-languages">ENGLISH / FRENCH</span>
      </div>
    </section>
  );
}
