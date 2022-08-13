// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        calibre: ['sans-serif', 'Calibre'], /*General, titulos y subtitulos */
        roboto: ['Roboto', 'sans-serif'], /* Parrafos y texto interno*/
      },
      colors: {
        'grey-main':{
          500: '#4B5563',
          100: '#f3f4f6'
        },
        'blue-main': {
          200: '#E5F2F9',
          300: '#BFDFF0',
          400: '#80C1E3',
          500: '#0284c7',
        },
        'green-main':{
          500: '#28A745'
        },
        'yellow-main':{
          500: '#ffc107'
        }
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(grey-main|blue-main|green-main|yellow-main)|(text)-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)/
  }],
};
