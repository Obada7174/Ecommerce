/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // fontFamily: {
    //   display: ["Open Sans", "sans-serif"],
    //   body: ["Open Sans", "sans-serif"],
    // },
    extend: {
      colors: {
        primary: "#fcb700",
        dark: "#222222",
        dark_red: "#d01418",
        parg: "#666666",
        border: "#6666662a",
        item_name: "#0066c0",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(50deg, transparent 50%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0.5) 70%, transparent 71%)",
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(50deg, transparent 50%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0.5) 70%, transparent 71%)",
      },
    },
  },
  plugins: [],
};
