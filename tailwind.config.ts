import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1f5ff",
          100: "#e5ebff",
          200: "#cbd8ff",
          300: "#afc3ff",
          400: "#91aaff",
          500: "#5d7df4",
          600: "#3154db",
          700: "#2845b7",
          800: "#233c96",
          900: "#203679",
        },
        dark: {
          bg: "#0b1220",
          card: "#152139",
          text: "#a5b2cc",
          heading: "#edf2ff",
          accent: "#91aaff",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "fade-up": "fadeUp 0.5s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
