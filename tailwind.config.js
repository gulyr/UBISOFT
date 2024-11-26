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
        "custom-matrix-2": "matrix(1.5, 0.5, 0.5, 1.5, 20, 20)",
      },
    },
  },
  plugins: [],
};
