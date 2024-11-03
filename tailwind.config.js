/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Montserrat", "sans-serif"], // Add Roboto as a custom font
      },
    },
  },
  plugins: [],
};
