/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}"],
  theme: {
    colors: {
      grey: "#adadad",
      blue: {
        50: "#f2f5f9",
        100: "#e6eaf4",
        200: "#bfcbe3",
        300: "#99acd2",
        400: "#4d6eb1",
        500: "#00308f",
        600: "#002b81",
        700: "#00246b",
        800: "#001d56",
        900: "#001846",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist)", "sans-serif"],
      mono: ["var(--font-geist-mono)", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
