"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import {
  MotionConfig,
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const reduceMotion = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      {!reduceMotion && (
        <motion.div
          className="reading-progress"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
      )}
      {children}
    </MotionConfig>
  );
}

// Content is visible in server HTML and without JavaScript. Only off-screen
// elements opt into a one-time reveal after the observer is attached.
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    if (element.getBoundingClientRect().top > window.innerHeight)
      element.dataset.pending = "true";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          delete element.dataset.pending;
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" }
    );
    const show = () => {
      if (preference.matches) {
        delete element.dataset.pending;
        observer.disconnect();
      }
    };
    preference.addEventListener("change", show);
    observer.observe(element);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", show);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-intro">{children}</p>}
    </Reveal>
  );
}

export function ActionLink({
  href,
  children,
  secondary = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`action-link ${
        secondary ? "action-secondary" : "action-primary"
      } ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <span className="action-arrow" aria-hidden="true">
        <HiArrowUpRight />
      </span>
    </a>
  );
}
