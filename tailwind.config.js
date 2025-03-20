/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/postcss", require("@tailwindcss/typography")],
};
