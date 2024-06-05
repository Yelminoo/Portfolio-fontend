/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Josefinsans: ["Josefin Sans", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        sara: ["Sarabun", "sans-serif"],
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        "gradient-pink-purple-blue":
          "linear-gradient(111deg, rgba(1,15,28,0.9501050420168067) 55%, rgba(255,251,247,1) 100%)",
      },
      keyframes: {
        wavy_motion: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "20%": {
            backgroundPosition: "0% 50%",
          },
          "40%": {
            backgroundPosition: "0% 100%",
          },
          "60%": {
            backgroundPosition: "0% 100%",
          },
          "80%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "0% 0%",
          },
        },
        verticalWave: {
          "0%": {
            backgroundPosition: "background-position: 0% 0%;",
          },
          "20%": {
            backgroundPosition: "background-position: 0% 50%;",
          },
          "50%": {
            backgroundPosition: "background-position: 0% 100%;",
          },
          "75%": {
            backgroundPosition: "background-position: 0% 50%;",
          },
          "100%": {
            backgroundPosition: "background-position: 0% 0%;",
          },
        },
      },
      animation: {
        "wave-gradient": "wavy_motion 10s linear infinite",
        "vertical-wave": "verticalWave 10s linear infinite;",
      },
    },
  },
  plugins: [],
};
