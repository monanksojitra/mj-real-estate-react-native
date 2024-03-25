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
        },
        blue: {
          100: '#204D6C',
        },
      },
    },
  },
  plugins: [],
};
