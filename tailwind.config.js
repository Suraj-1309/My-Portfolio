/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f97316", // For light mode
          dark: "#fb923c", // For dark mode
        },
        background: {
          light: "#ffffff",
          dark: "#000000ff",
        },
      },
      animation: {
    'float': 'float 6s ease-in-out infinite',
    'float-x': 'float-x 6s ease-in-out infinite',
    'float-y': 'float-y 6s ease-in-out infinite',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    'float-x': {
      '0%, 100%': { transform: 'translateX(0px)' },
      '50%': { transform: 'translateX(10px)' },
    },
    'float-y': {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(10px)' },
    }}
    },
  },
  plugins: [],
  darkMode: "class",
};
