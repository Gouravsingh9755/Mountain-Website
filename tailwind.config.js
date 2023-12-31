/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          custom: '#85A0A6',
        },
        fontFamily: {
          popins: ['Poppins', 'sans-serif'],
        },
      },
    },
  plugins: [],
}

