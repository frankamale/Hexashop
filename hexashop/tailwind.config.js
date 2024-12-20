/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing : {
        'section' : '0rem 5rem'
      }
    },
  },
  plugins: [],
}

