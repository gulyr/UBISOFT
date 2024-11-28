/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transform: {
        "custom-matrix": "matrix(1.5, 0.5, 0.5, 1.5, 20, 20)",
      },
      transform: {
        "custom-matrix-2": "matrix(1, 0, 0, 1, 0, -7.3125)",
      },
      gridTemplateColumns: {
        custom1: "664.5px 664.5px",
      },
      fontFamily: {
        "ubisoft-bold": ["Ubisoft Sans Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
