/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#0B0B0B',
          600: '#090909',
          700: '#070707',
          800: '#050505',
          900: '#030303',
        },
      },
    },
  },
  plugins: [],
}
