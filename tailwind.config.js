/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        source: ['"Source Code Pro Variable"', "sans-serif"],
        onest: ['"Onest Variable"', "sans-serif"],
      },
      backgroundColor:{
        "ctp-base": "#1e1e2e"
      },
      textColor: {
        "ctp-base": "#1e1e2e"
      }
    },
  },
  plugins: [],
};
