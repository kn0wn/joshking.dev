/** @type {import('tailwindcss').Config} */
export default {
  content: [],
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
      sans: ["Space Grotesk", "sans-serif"],
      mono: ["Berkeley Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
