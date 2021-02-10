module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Roboto Mono"],
      mono: ["Space Mono"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
