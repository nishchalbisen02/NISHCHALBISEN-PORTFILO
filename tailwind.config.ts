import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2.5rem",
        xl: "4rem",
      },
      screens: { "2xl": "1600px" },
    },
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        "accent-2": "var(--accent-2)",
      },
      fontFamily: {
        sans: ["var(--font-grotesk)", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Geist Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(2.4rem, -0.4rem + 11.5vw, 10.5rem)", { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.1rem, 0.6rem + 6.5vw, 6.5rem)", { lineHeight: "0.96", letterSpacing: "-0.028em" }],
        "display-3": ["clamp(1.8rem, 1rem + 3.6vw, 3.6rem)", { lineHeight: "1.02", letterSpacing: "-0.022em" }],
        "heading": ["clamp(1.35rem, 1rem + 1.6vw, 2.1rem)", { lineHeight: "1.1", letterSpacing: "-0.016em" }],
        "meta": ["0.72rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
        "meta-lg": ["0.82rem", { lineHeight: "1.4", letterSpacing: "0.1em" }],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        "marquee-y": { to: { transform: "translateY(-50%)" } },
        spin18: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "marquee-y": "marquee-y 26s linear infinite",
        spin18: "spin18 22s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
