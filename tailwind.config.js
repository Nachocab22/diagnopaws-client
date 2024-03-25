/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"IBM Plex Sans"', 
        ]
      }
    },
  },
  plugins: [],
}

