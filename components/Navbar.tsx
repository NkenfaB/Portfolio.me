"use client";

import { BackgroundMotionControl } from "./SectionAtmosphere";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiArrowUpRight,
  HiMoon,
  HiSun,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";

const navItems = [
  { label: "Work", id: "projects" },
  { label: "Expertise", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    let observer: IntersectionObserver;
    const observeSections = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        {
          rootMargin: `-100px 0px -${Math.max(
            0,
            window.innerHeight - 220
          )}px 0px`,
          threshold: 0,
        }
      );
      document
        .querySelectorAll("main > section")
        .forEach((section) => observer.observe(section));
    };
    observeSections();
    window.addEventListener("resize", observeSections, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", observeSections);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        !menuRef.current?.contains(event.target as Node) &&
        !toggleRef.current?.contains(event.target as Node)
      )
        setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 860px)");
    const resize = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a className="wordmark" href="#home" aria-label="Nkenfa Brandon, home">
          nb<span>.</span>
          <span className="wordmark-caption">
            Nkenfa Brandon
            <br />
            Software engineer
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
              <span />
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <BackgroundMotionControl />
          <button
            className="icon-button theme-toggle"
            aria-label={
              mounted && resolvedTheme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && resolvedTheme === "light" ? <HiMoon /> : <HiSun />}
          </button>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <HiArrowUpRight aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            className="icon-button menu-toggle"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-navigation"
            className="mobile-navigation shell"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile navigation">
              {[...navItems, { label: "Contact", id: "contact" }].map(
                (item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mono">0{index + 1}</span>
                    {item.label}
                    <HiArrowUpRight aria-hidden="true" />
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
