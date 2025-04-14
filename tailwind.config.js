/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        blessed: {
          purple: '#B05AB0',
          green: '#79C77F',
          teal: '#61C7D3',
          yellow: '#EFC468',
          red: '#E54444',
          black: '#000000',
          gray: '#333333',
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      }
    },
  },
  plugins: [],
}