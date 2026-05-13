import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#080a0f",
          2: "#0d1117",
          3: "#111620",
        },
        accent: {
          DEFAULT: "#4f9cf9",
          purple: "#7c3aed",
          green: "#10b981",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          bright: "rgba(255,255,255,0.14)",
        },
      },
      animation: {
        pulse2: "pulse2 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      clipPath: {
        corner: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
      },
    },
  },
  plugins: [],
};
export default config;
