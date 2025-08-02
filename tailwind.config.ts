import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#ec4899",
          dark: "#be185d",
          accent: "#6366f1",
        },
      },
    },
  },
  plugins: [],
};

export default config;
