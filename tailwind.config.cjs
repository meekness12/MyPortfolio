/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        // Masculine modern palette
        brand: {
          blue: "#3B82F6", // Electric Blue
          cyan: "#06B6D4", // High-tech Cyan
          indigo: "#6366F1",
        },
        // Deep obsidian dark mode
        dark: {
          bg: "#0A0C10",
          surface: "#141721",
          surface2: "#1B1F2D",
          surface3: "#23283B",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 255, 255, 0.18)",
          text: "#EDEDED",
          muted: "#94A3B8",
        },
        // Clean architectural light mode
        light: {
          bg: "#F8F9FA",
          surface: "#FFFFFF",
          surface2: "#F1F3F6",
          surface3: "#E2E8F0",
          border: "rgba(0, 0, 0, 0.08)",
          borderHover: "rgba(0, 0, 0, 0.16)",
          text: "#0F172A",
          muted: "#64748B",
        },
      },
      fontFamily: {
        signature: ["Satisfy", "cursive"],
        instrument: ["Instrument Serif", "Georgia", "serif"],
        space: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "marquee": "marquee 26s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.04)",
        "soft-hover": "0 6px 20px rgba(0, 0, 0, 0.08)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
}
