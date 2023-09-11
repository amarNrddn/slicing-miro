/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter : 'Inter'
      },
      colors: {
        whiteDark: '#F5F5F5',
        textCol : '#5F5C80',
        yelow : '#FFD02F',
        blue : '#4262FF'
      }
    },
  },
  plugins: [],
}

