/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        orange: '#FF5045',
        yellow: '#FFD88B',
        black: '#1B1B1B',
        white: '#FFFAF6'
      }
    },
  },
  plugins: [],
}
