/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: '#00f6ff',
          secondary: '#0a192f',
          accent: '#64ffda'
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right, #0a192f, #112240)',
      }
    },
  },
  plugins: [],
};