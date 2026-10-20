"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiArrowUpRight,
  HiArrowUp,
  HiCheck,
  HiSquare2Stack,
} from "react-icons/hi2";
import { ActionLink, Reveal } from "./PortfolioUI";

const email = "nkenfabrandon71@gmail.com";
export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle"
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyStatus("idle"), 3500);
  };
  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <Reveal>
          <div className="contact-topline">
            <p className="eyebrow">05 / What&apos;s next</p>
            <span className="availability">
              <span className="status-dot" /> Open to opportunities
            </span>
          </div>
          <div className="contact-main">
            <h2>
              Good things start
              <br />
              with a <span>conversation.</span>
            </h2>
            <ActionLink href={`mailto:${email}`} className="contact-cta">
              Say hello
            </ActionLink>
          </div>
          <div className="contact-bottom">
            <div>
              <p>Have a role, a project, or a problem worth solving?</p>
              <div className="email-row">
                <a href={`mailto:${email}`}>{email}</a>
                <button
                  className="icon-button"
                  onClick={copy}
                  aria-label="Copy email address"
                >
                  {copyStatus === "copied" ? <HiCheck /> : <HiSquare2Stack />}
                </button>
              </div>
              <span role="status" aria-live="polite" className="copy-status">
                {copyStatus === "copied"
                  ? "Email address copied."
                  : copyStatus === "failed"
                  ? "Could not copy. Select the email address above."
                  : ""}
              </span>
            </div>
            <div className="contact-socials">
              <a
                href="https://github.com/NkenfaB"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <HiArrowUpRight aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/nkenfa-brandon-30064b178"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <HiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
        <footer className="site-footer">
          <a
            href="#home"
            className="footer-logo"
            aria-label="Nkenfa Brandon, back to top"
          >
            nb<span>.</span>
          </a>
          <span>© {new Date().getFullYear()} Nkenfa Brandon</span>
          <a href="#home">
            Back to top <HiArrowUp aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
}
