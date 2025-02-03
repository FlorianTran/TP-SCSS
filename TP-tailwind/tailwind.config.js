/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    colors: {
      'blue': '#1f96ff',
    },
    extend: {
      fontFamily: {
        'sans': ['Graphik', 'sans-serif'],
      },
      fontSize: {
        '4xl': '3rem',
      }
    },
  },
  plugins: [],
};

