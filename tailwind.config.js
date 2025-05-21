/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'display': ['"Cormorant Garamond"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f9f5f6',
          100: '#f3ebed',
          200: '#e6d7dc',
          300: '#d9c3c8',
          400: '#c0a1a9',
          500: '#a6828d',
          600: '#95707e',
          700: '#7c5c68',
          800: '#654c57',
          900: '#53424a',
          950: '#2d2329',
        },
        accent: {
          50: '#faf8ed',
          100: '#f4efda',
          200: '#e9e0b7',
          300: '#dccb8a',
          400: '#d0b865',
          500: '#c5a24a',
          600: '#b18b3b',
          700: '#936e30',
          800: '#78592c',
          900: '#634a27',
          950: '#372816',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
        },
      },
      backgroundImage: {
        'floral-light': "url('https://images.pexels.com/photos/6417924/pexels-photo-6417924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'marble': "url('https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'soft-flowers': "url('https://images.pexels.com/photos/4466492/pexels-photo-4466492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      boxShadow: {
        'elegant': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};