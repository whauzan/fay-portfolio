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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
