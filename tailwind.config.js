/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
