module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#1f1f1f",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
