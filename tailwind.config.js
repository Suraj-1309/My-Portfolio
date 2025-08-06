/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ['"Herr Von Muellerhoff"', "cursive"],
      },
      colors: {
        primary: {
          light: "#f97316",
          dark: "#fb923c",
        },
        background: {
          light: "#ffffff",
          dark: "#000000ff",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-x": "float-x 6s ease-in-out infinite",
        "float-y": "float-y 6s ease-in-out infinite",

        // 🖋️ Signature animation
        signature: "signature 8s ease-in-out infinite alternate-reverse",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-x": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(10px)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },

        // ✍️ Keyframes for handwriting effect
        signature: {
    "0%": { clipPath: "inset(0 100% 0 0)" },
    "50%": { clipPath: "inset(0 0% 0 0)" },
    "100%": { clipPath: "inset(0 100% 0 0)" },
  },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
