/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f97316", // For light mode
          dark: "#fb923c",  // For dark mode
        },
        background: {
          light: "#ffffff",
          dark: "#000000ff",
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
