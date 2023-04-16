/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      height: {
        height500: "500px",
        height648: "648px",
        height750: "750px",
      },
      colors: {
        primaryBackground: "#101010",
        secondaryBackground: "#191919",
        icons: "#f9004d",
        textColor: "#fff",
        textSecondary: "rgba(198,201,216,.75)",
        hoverBg: "#f9004d",
        blackBg: "#000000",
        bgRed: "#f9004d",
      }
    },
  },
  plugins: [],
};
