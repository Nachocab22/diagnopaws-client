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
        'body' : ['IBM Plex Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

