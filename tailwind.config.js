const {colors: defaultColors} = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        primary: '#8BC83F',
        light: {
          100: '#DFDFDF',
          200: '#F5F4F8',
        },
        blue: {
          100: '#204D6C',
          200: '#252B5C',
          300: '#1F4C6B',
          400: '#234F68',
          500: '#53587A',
          600: '#3A3F67',
        },
      },
    },
  },
  plugins: [],
};
