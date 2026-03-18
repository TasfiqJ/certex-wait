import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080C",
        foreground: "#EDEBE8",
        card: {
          DEFAULT: "#0F0F17",
          foreground: "#EDEBE8",
        },
        primary: {
          DEFAULT: "#D4A853",
          hover: "#E0B665",
          foreground: "#08080C",
        },
        secondary: {
          DEFAULT: "#6BAF8D",
          foreground: "#08080C",
        },
        accent: {
          DEFAULT: "#C4835A",
          foreground: "#EDEBE8",
        },
        muted: {
          DEFAULT: "#1C1C28",
          foreground: "#8A8997",
        },
        border: "#1C1C28",
      },
      fontFamily: {
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
        body: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "orb-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(80px, 40px) scale(1.1)" },
          "66%": { transform: "translate(-40px, 80px) scale(0.9)" },
        },
        "orb-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-60px, 50px) scale(0.95)" },
          "66%": { transform: "translate(30px, -60px) scale(1.05)" },
        },
        "orb-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(50px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-30px, 40px) scale(0.95)" },
        },
      },
      animation: {
        "orb-1": "orb-1 25s ease-in-out infinite",
        "orb-2": "orb-2 30s ease-in-out infinite",
        "orb-3": "orb-3 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
