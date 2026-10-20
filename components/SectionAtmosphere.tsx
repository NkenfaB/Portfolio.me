"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useTheme } from "next-themes";
import { HiPause, HiPlay } from "react-icons/hi2";

type Pattern =
  | "constellation"
  | "drift"
  | "grid"
  | "signals"
  | "orbits"
  | "ripples";
const MotionContext = createContext({
  paused: true,
  manualPause: false,
  reduced: false,
  ready: false,
  toggle: () => {},
});
const preferenceKey = "portfolio-background-motion";

export function BackgroundMotionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [manualPause, setManualPause] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    update();
    try {
      setManualPause(localStorage.getItem(preferenceKey) === "paused");
    } catch {
      /* Storage is optional. */
    }
    setReady(true);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(preferenceKey, manualPause ? "paused" : "playing");
    } catch {
      /* Keep the control usable without storage. */
    }
  }, [manualPause, ready]);
  const toggle = () => setManualPause((value) => !value);
  return (
    <MotionContext.Provider
      value={{
        paused: manualPause || reduced || !ready,
        manualPause,
        reduced,
        ready,
        toggle,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function BackgroundMotionControl() {
  const { manualPause, reduced, ready, toggle } = useContext(MotionContext);
  const label = reduced
    ? "Background animations disabled by reduced-motion setting"
    : manualPause
    ? "Resume background animations"
    : "Pause background animations";
  return (
    <button
      className="icon-button motion-toggle"
      onClick={toggle}
      disabled={!ready || reduced}
      aria-label={label}
      title={label}
      aria-pressed={manualPause || reduced}
    >
      {manualPause || reduced ? (
        <HiPlay aria-hidden="true" />
      ) : (
        <HiPause aria-hidden="true" />
      )}
    </button>
  );
}

const seed = (index: number) => {
  const n = Math.sin(index * 127.1 + 311.7) * 43758.5453;
  return n - Math.floor(n);
};
const wrap = (value: number, size: number) => ((value % size) + size) % size;

export default function SectionAtmosphere({ pattern }: { pattern: Pattern }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef(0);
  const { paused } = useContext(MotionContext);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const layer = canvas;
    const ctx = context;
    const container = layer.parentElement;
    if (!container) return;
    let width = 0,
      height = 0,
      elapsed = phaseRef.current,
      lastFrame = 0,
      frame = 0;
    let visible = false,
      disposed = false;
    const color =
      getComputedStyle(container).getPropertyValue("--accent").trim() ||
      "#3154db";

    const dot = (x: number, y: number, radius: number, alpha = 0.35) => {
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };
    const line = (
      x: number,
      y: number,
      x2: number,
      y2: number,
      alpha: number
    ) => {
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };
    const paint = () => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 0.8;
      const count = Math.min(
        42,
        Math.max(18, Math.round((width * height) / 30000))
      );
      const time = elapsed;
      if (pattern === "constellation" || pattern === "drift") {
        const points = Array.from({ length: count }, (_, i) => ({
          x: wrap(
            seed(i * 3) * width + time * (seed(i + 60) - 0.35) * 9,
            width
          ),
          y: wrap(
            seed(i * 3 + 1) * height + time * (seed(i + 70) - 0.5) * 7,
            height
          ),
          r: 1 + seed(i * 3 + 2) * 1.5,
        }));
        points.forEach((point, index) => {
          if (pattern === "drift") {
            const size = 3 + seed(index) * 4;
            line(point.x - size, point.y, point.x + size, point.y, 0.23);
            line(point.x, point.y - size, point.x, point.y + size, 0.23);
            if (index % 3 === 0) {
              ctx.globalAlpha = 0.12;
              ctx.strokeRect(point.x + 18, point.y + 12, size * 2, size * 2);
            }
          } else {
            dot(point.x, point.y, point.r, 0.42);
            for (let j = index + 1; j < points.length; j++) {
              const other = points[j];
              const distance = Math.hypot(other.x - point.x, other.y - point.y);
              if (distance < 150)
                line(
                  point.x,
                  point.y,
                  other.x,
                  other.y,
                  (1 - distance / 150) * 0.22
                );
            }
          }
        });
      } else if (pattern === "grid") {
        const spacing = 74;
        for (let x = 20; x < width; x += spacing) line(x, 0, x, height, 0.07);
        for (let y = 20; y < height; y += spacing) line(0, y, width, y, 0.07);
        for (let i = 0; i < 12; i++) {
          const y =
            20 + Math.floor((seed(i + 40) * height) / spacing) * spacing;
          const x = wrap(seed(i) * width + time * (10 + i), width);
          line(x - 24, y, x, y, 0.28);
          dot(x, y, 2, 0.5);
          if (i % 3 === 0)
            dot(20 + Math.floor(x / spacing) * spacing, y, 3, 0.16);
        }
      } else if (pattern === "signals") {
        const lanes = Math.max(4, Math.round(width / 180));
        for (let i = 0; i < lanes; i++) {
          const x = width * ((i + 0.5) / lanes);
          const y =
            height - wrap(seed(i + 8) * height + time * (10 + i * 2), height);
          line(x, 0, x, height, 0.07);
          line(x, y + 36, x, y, 0.34);
          dot(x, y, 2, 0.5);
          dot(x, wrap(y + height * 0.42, height), 1.4, 0.23);
        }
      } else if (pattern === "orbits") {
        const x = width * 0.77,
          y = height * 0.48;
        const base = Math.min(width * 0.32, height * 0.4);
        for (let i = 0; i < 4; i++) {
          const radius = base * (0.45 + i * 0.24);
          ctx.globalAlpha = 0.13;
          ctx.beginPath();
          ctx.ellipse(x, y, radius, radius * 0.7, -0.35, 0, Math.PI * 2);
          ctx.stroke();
          const angle = time * (0.07 + i * 0.025) + i * 1.8;
          const px = Math.cos(angle) * radius,
            py = Math.sin(angle) * radius * 0.7;
          dot(
            x + px * Math.cos(-0.35) - py * Math.sin(-0.35),
            y + px * Math.sin(-0.35) + py * Math.cos(-0.35),
            2 + i * 0.3,
            0.5
          );
        }
        dot(x, y, 3, 0.3);
      } else {
        const x = width * 0.85,
          y = height * 0.4;
        const maxRadius = Math.max(width * 0.5, height * 0.85);
        for (let i = 0; i < 5; i++) {
          const radius = wrap(time * 9 + (i * maxRadius) / 5, maxRadius);
          ctx.globalAlpha = 0.2 * (1 - radius / maxRadius);
          ctx.beginPath();
          ctx.arc(x, y, Math.max(1, radius), 0, Math.PI * 2);
          ctx.stroke();
        }
        for (let i = 0; i < 14; i++)
          dot(
            seed(i) * width,
            seed(i + 80) * height,
            1.3,
            0.18 + Math.sin(time * 0.5 + i) * 0.08
          );
      }
      ctx.globalAlpha = 1;
    };
    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      if (!width || !height) return;
      // Decorative layers need no more than two million backing pixels each.
      const ratio = Math.min(
        window.devicePixelRatio || 1,
        1.5,
        Math.sqrt(2000000 / (width * height))
      );
      layer.width = Math.max(1, Math.floor(width * ratio));
      layer.height = Math.max(1, Math.floor(height * ratio));
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      paint();
    };
    const tick = (timestamp: number) => {
      if (disposed || !visible || document.hidden || paused) return;
      if (!lastFrame || timestamp - lastFrame >= 1000 / 30) {
        if (lastFrame) elapsed += Math.min((timestamp - lastFrame) / 1000, 0.1);
        lastFrame = timestamp;
        phaseRef.current = elapsed;
        paint();
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      if (disposed) return;
      cancelAnimationFrame(frame);
      lastFrame = 0;
      if (!visible || document.hidden) {
        layer.dataset.state = "idle";
        // Release backing storage while the section is outside the viewport.
        layer.width = 1;
        layer.height = 1;
        return;
      }
      resize();
      layer.dataset.state = paused ? "static" : "running";
      if (!paused) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0 }
    );
    const sizeObserver = new ResizeObserver(() => {
      if (!disposed && visible && !document.hidden) resize();
    });
    observer.observe(container);
    sizeObserver.observe(container);
    document.addEventListener("visibilitychange", sync);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      sizeObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [pattern, paused, resolvedTheme]);

  return (
    <div
      className={`section-atmosphere atmosphere-${pattern}`}
      aria-hidden="true"
      data-atmosphere={pattern}
    >
      <canvas ref={canvasRef} data-state="idle" />
    </div>
  );
}
