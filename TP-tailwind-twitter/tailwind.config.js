/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        accent: '#4C9EEB',
        secondary: '#687684',
        primarySeparator: '#BDC5CD',
        secondarySeparator: '#CED5DC',
      },
      fontFamily: {
        sans: ['"sf-pro-text"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
