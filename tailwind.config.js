/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths as needed
  ],
  darkMode: 'class', // 'media' para seguir el estilo del sistema
  theme: {
    extend: {
      // You can extend other properties here if needed
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-y-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-y-hide::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari and Opera */
        },
        '.scrollbar-y-left': {
          direction: 'rtl',
        },
        '.scrollbar-y-left > *': {
          direction: 'ltr',
        },
        '.scrollbar-x-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-x-hide::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari and Opera */
        },
        // You can add classes for horizontal scrollbar positioning if needed
        '.scrollbar-x-top': {
          direction: 'rtl',
        },
        '.scrollbar-x-top > *': {
          direction: 'ltr',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
