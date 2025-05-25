/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1e3a8a', // blue-900
        'brand-primary-dark': '#93c5fd', // blue-300
      },
    },
  },
  plugins: [],
};
