const defaultTheme = require("tailwindcss/defaultTheme");

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
        heading: ["Marcellus", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: "url('/bg.jpg')",
        heroOne: "url('/bg-1.jpg')",
        heroTwo: "url('/bg-2.jpg')",
        heroThree: "url('/bg_compte.jpg')",
        heroFour: "url('/bg_sign.jpg')",
        heroFive: "url('/background.jpg')",
        heroWatch: "url('/bg_watch.png')",
      },
      colors: {
        gold: "#C4AB7C",
        gri: {
          50: "#D4D4D4",
          60: "#737373",
          70: "#111111",
        },
      },
    },
  },
  plugins: [],
};
export default config;
