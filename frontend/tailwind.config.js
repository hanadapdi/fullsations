module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'estate1': "url('/src/img/estate1.jpg')",
    },
    },
    fontFamily: {
      'press': ['"Inter"', 'sans-serif'],
    },

  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}