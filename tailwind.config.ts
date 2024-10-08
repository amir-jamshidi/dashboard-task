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
        neutral: "#F0F0F0",
        primary: '#616161',
        secondary: "#5B5FC7",
        dark: '#242424',
        main: '#424242'
      },
    },
  },
  plugins: [],
};
export default config;
