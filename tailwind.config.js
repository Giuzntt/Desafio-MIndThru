/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-background": "#202020",
      },

      fontFamily: {
        american_captain: ["./fonts/American Captain.ttf"],
      },
    },
  },
  plugins: [],
};
