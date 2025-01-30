/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/primeng/**/*.js', // Incluir los componentes de PrimeNG
    './node_modules/primeicons/**/*.js', // Incluir los iconos de PrimeNG
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

