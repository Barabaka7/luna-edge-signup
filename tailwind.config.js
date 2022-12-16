/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        eudoxus: ["Eudoxus", "sans-serif"],
      },
      colors: {
        mdDarkBlue: {
          20: "#134267",
          60: "#5D7FA3",
        },
        mdShade: {
          40: "#4F637D",
          80: "#C3CAD5",
        },
        chadBlue: "#32ABF2",
        inputBg: "#F8F9FC",
        buttonBg: "#32ABF2",
      },
      backgroundImage: {
        "blue-pattern":
          "linear-gradient(339.02deg, #0D3251 0%, #19476C 103.05%)",
        "doodle-pattern": "url('../public/img/Tileable_doodle_bg.svg')",
      },
      boxShadow: {
        welcomeChatShadow: "0px 5px 20px rgba(108, 117, 139, 0.2)",
      },
    },
  },
  plugins: [],
};
