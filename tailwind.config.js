/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    fontSize : {
      'hero-title' : '80px',
      'section-title' : '64px',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'magra': '"Magra"',
      'linden-hill' : '"Linden Hill"',
      'mulish' : '"Mulish"',
      'noto-serif' : '"Noto Serif"',
      'lexend-deca' : '"Lexend Deca"'
    },
    extend: {
      colors:{
        'main' : '#040312E3',
        'button-color' : '#1DC74D',
        'border-color' : '#28BE46'
      }
    },
  },
  plugins: [],
}

