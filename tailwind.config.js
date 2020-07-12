module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: ["Space Mono"],
      body: ["Roboto Mono"],
    },
    extend: {
      colors: {
        charcoal: "#292F36",
        blue: "#008DD5",
        white: "#F7F7FF",
        coral: "#f67e7d",
        green: "#20fc8f",
      },
    },
  },
  purge: ["./src/**/*.html", "./src/**/*.vue", "index.html"],
  variants: {},
  plugins: [],
};
