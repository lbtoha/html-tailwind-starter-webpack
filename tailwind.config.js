/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({});
    }),
  ],
};
