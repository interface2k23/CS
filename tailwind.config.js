/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./public/**/*.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        deep: "#000000",
        royal: "#2F7812",
        light: "#66ff66",
        cyan: "#00cc00",
      },
    },
  },
  plugins: [],
};
