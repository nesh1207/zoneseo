import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          red: "#dc2626",
          "red-light": "#ef4444",
          "red-dark": "#b91c1c",
          orange: "#ea580c",
          "orange-light": "#f97316",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      keyframes: {
        gauge: {
          "0%": { strokeDashoffset: "283" },
          "100%": { strokeDashoffset: "var(--gauge-offset)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        gauge: "gauge 1.5s ease-out forwards",
        glow: "pulseGlow 3s infinite ease-in-out",
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        shimmer: "shimmer 2.5s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
