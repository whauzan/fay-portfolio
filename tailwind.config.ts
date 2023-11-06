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
        background: "#FFF2EE",
        primary: {
          light: "#CE9494",
          dark: "#AA6363",
        },
        secondary: "#A2D6DC",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        catamaran: ["var(--font-catamaran)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
