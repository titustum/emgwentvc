/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors:{
        primary:{
          white: '#ffffff',
          green: '#01b34b',
          gray: '#7d7d7f'
        }
      }
    },
  },
  plugins: [],
}