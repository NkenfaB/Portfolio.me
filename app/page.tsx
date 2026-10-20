import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { PortfolioMotion } from "@/components/PortfolioUI";

export default function Home() {
  return (
    <PortfolioMotion>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
    </PortfolioMotion>
  );
}
