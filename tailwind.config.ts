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
        neutral: {
          white: "#FFF2EE",
          grey: "#888888",
        },
        brand: {
          blue: "#78B8BF",
          red: "#AA6363",
          orange: "#FFDEB8",
        },
        text: {
          black: "#060606",
          white: "#FEFEFE",
        },
      },
      fontFamily: {
        shrikhand: ["var(--font-shrikhand)"],
        catamaran: ["var(--font-catamaran)"],
      },
      keyframes: {
        wiggleLeft: {
          "0%, 100%": { transform: "rotate(-7deg)" },
          "50%": { transform: "rotate(7deg)" },
        },
        wiggleRight: {
          "0%, 100%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
        },
      },
      animation: {
        wiggleLeft: "wiggleLeft 1.5s ease-in-out infinite",
        wiggleRight: "wiggleRight 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
