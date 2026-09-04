import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#0f0f0f",
          dark: "#0a0c10",
        },
        secondary: {
          DEFAULT: "#111317",
          dark: "#0b0d10",
        },
        tertiary: {
          DEFAULT: "#0f1115",
        },
        surface: {
          DEFAULT: "#10141e",
          card: "#171a20",
        },
        accent: {
          DEFAULT: "#a3ff00",
          hover: "#b6ff00",
          glow: "rgba(163, 255, 0, 0.4)",
        },
        brandMuted: "#5f6880",
        textMuted: "#9ca3af",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "neon-glow": "0 0 25px rgba(163, 255, 0, 0.35)",
        "neon-sm": "0 0 10px rgba(163, 255, 0, 0.25)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.5s infinite ease-in-out",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
