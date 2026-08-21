import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Molten titanium palette — warm dark base, forged-metal accents
        void: "#0B0908",
        carbon: "#14110D",
        panel: "#1B1710",
        gold: "#E4A548",
        goldbright: "#F7D08A",
        hotwhite: "#FFF3DD",
        bronze: "#7A4E22",
        ember: "#FF8A3D",
        ash: "#9C9184",
        titanium: "#F4EDE2",
      },
      fontFamily: {
        display: ['"Clash Display"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Satoshi", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.32em",
        tightest: "-0.045em",
      },
      maxWidth: {
        shell: "1240px",
      },
      boxShadow: {
        forge:
          "0 40px 120px -40px rgba(228,165,72,0.35), inset 0 1px 0 0 rgba(255,243,221,0.06)",
        card: "0 30px 80px -30px rgba(0,0,0,0.85)",
      },
      transitionTimingFunction: {
        forge: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scrollcue: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        scrollcue: "scrollcue 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
