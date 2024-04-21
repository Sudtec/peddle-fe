import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
//** Custom Components */
import btn from "./custom/btn";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#206ffa",
        "primary-dark": "#0653df",
        secondary: "#e6e7eb",
        "typography-400": "#1D2939",
        "primary-500": "#303D8E",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      slg: { max: "900px" },
      md: { max: "767px" },
      sm: { max: "425px" },
      xsm: { max: "375px" },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const newComponents: any = {
        ...btn,
      };
      addComponents(newComponents);
    }),
  ],
};
export default config;
