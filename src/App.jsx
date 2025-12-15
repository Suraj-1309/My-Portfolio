import React, { useState, useEffect } from "react";
import "./App.css";
import NavSection from "./Nevbar/NavSection.jsx";
import CustomCursor from "./Nevbar/CustomCursor.jsx";
import AppRoutes from "./Routes.jsx";

// The main App component that handles the theme and renders the AnimatedText
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showCli, setShowCli] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleCli = () => setShowCli(!showCli);

  // Effect to apply the theme class to the body element
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen w-full relative transition-colors duration-300
        ${isDarkMode ? "text-white bg-black" : "text-black bg-white"}
        pt-16 px- py-6 sm:px-8 sm:py-10
      `}
    >
      <CustomCursor />

      {/* Render the NavSection component at the top */}
      <NavSection isDarkMode={isDarkMode} toggleDarkMode={toggleTheme} />


      <div className="pt-8 w-full">
        <AppRoutes isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
