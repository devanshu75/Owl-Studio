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
        background: "#F5F3EA",
        foreground: "#161616",
        brand: {
          warm: "#F5F3EA",
          white: "#FFFFFF",
          cream: "#FFF4B8",
          dark: "#161616",
          muted: "#555555",
          neutral: "#EDEBE3",
          gold: "#FCCF14",
          burnished: "#B89A08",
        },
        primary: {
          DEFAULT: "#161616",
          light: "#262626",
        },
        secondary: {
          DEFAULT: "#555555",
          muted: "#737373",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          cream: "#FFF4B8",
          neutral: "#EDEBE3",
          card: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FCCF14",
          hover: "#e5ba09",
          dark: "#B89A08",
          subtle: "#FFF4B8",
          glow: "rgba(252, 207, 20, 0.35)",
        },
        brandMuted: "#555555",
        textMuted: "#666666",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "owl-sm": "0 1px 3px rgba(22, 22, 22, 0.05)",
        "owl-md": "0 4px 12px rgba(22, 22, 22, 0.06)",
        "owl-lg": "0 12px 32px rgba(22, 22, 22, 0.08)",
        "gold-glow": "0 0 25px rgba(252, 207, 20, 0.35)",
        "card-glass": "0 8px 32px 0 rgba(22, 22, 22, 0.06)",
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
