/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'alBlue': '#2F3EC6',
      'white': '#ffffff',
      'alLightBlue': '#B3DBFE',
      'alGreen': '#47F244',
      'alBlack': '#13131A',
      'light': '#EEF4FF',
      'light2': '#2F3EC6'
    },
    fontFamily: {

    },
    screens: {
      'mobile': '480px',
      // => @media (min-width: 480px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}