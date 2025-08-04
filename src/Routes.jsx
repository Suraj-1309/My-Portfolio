import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AnimatedText from "./components/name.jsx";
import Resume from "./routes/Resume.jsx";
import Education from "./routes/Education.jsx";
import CliButton from "./components/CliButton.jsx";
import WebTerminal from "./components/WebTerminal.jsx";
import ProfileImage from "./components/ProfileImage.jsx";



// Placeholder components for the other pages
const Home = ({ isDarkMode }) => {
  const [showCli, setShowCli] = useState(false);
  const toggleCli = () => setShowCli((prev) => !prev);

return (
    // Main container for the Home page: sets background, min height, and general padding
    <div className={`p-4 ${isDarkMode ? "bg-black" : "bg-white"} min-h-screen transition-colors duration-300`}>

      {/* First Top Row: Two Columns */}
      {/* On small screens (mobile), it will be a single column (stack vertically).
          On medium screens (md) and larger, it will be two columns. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0"> {/* gap-4 adds space between columns and rows */}

        {/* First Column for the Name */}
        {/* order-2 for mobile to place it below CLI, order-1 for desktop to place it on left */}
        <div className="order-2 md:order-1">
          <div className="pt-0 sm:pt-5"> {/* Keep name slightly above */}
            <AnimatedText text="suraj." isDarkMode={isDarkMode} />
          </div>
        </div>

        {/* Second Column for Activate CLI Button */}
        {/* order-1 for mobile to place it above name, order-2 for desktop to place it on right */}
        <div className="order-2 md:order-2 p-4">
          <div
            className={`p-4 
                       `} // Card styling
          >
            <CliButton toggleCli={toggleCli} isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>

      {/* Second Row: Three Columns */}
      {/* On small screens, it will be a single column.
          On medium screens and larger, it will be three columns. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"> {/* mt-8 adds margin from the row above */}
        {/* Column 1 Placeholder */}
        <div className={`p-4 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} h-32 flex items-center justify-center`}>
          <p className={`${isDarkMode ? "text-white" : "text-gray-700"}`}>Column 1 Content</p>
        </div>
        {/* Column 2 Placeholder */}
        <div className={`w-[calc(100%-40px)] m-8 -mt-8`}>


          <ProfileImage />
        </div>
        {/* Column 3 Placeholder */}
        <div className={`p-4 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} h-32 flex items-center justify-center`}>
          <p className={`${isDarkMode ? "text-white" : "text-gray-700"}`}>Column 3 Content</p>
        </div>
      </div>

      {/* You can add more rows below using similar grid structures */}
      {/* Example: Third Row - Two Columns */}
      {/*
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className={`p-4 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} h-48 flex items-center justify-center`}>
          <p className={`${isDarkMode ? "text-white" : "text-gray-700"}`}>Another Section Left</p>
        </div>
        <div className={`p-4 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} h-48 flex items-center justify-center`}>
          <p className={`${isDarkMode ? "text-white" : "text-gray-700"}`}>Another Section Right</p>
        </div>
      </div>
      */}

      {/* WebTerminal component, shown only when showCli is true */}
      {showCli && <WebTerminal onClose={toggleCli} />}
    </div>
  );
};


const Skills = ({ isDarkMode }) => (
  <div
    className={`min-h-screen p-10 ${isDarkMode ? "text-white" : "text-black"}`}
  >
    <h1 className="text-4xl font-bold">Skills Page</h1>
    <p>Content for the skills page.</p>
  </div>
);

const Projects = ({ isDarkMode }) => (
  <div
    className={`min-h-screen p-10 ${isDarkMode ? "text-white" : "text-black"}`}
  >
    <h1 className="text-4xl font-bold">Projects Page</h1>
    <p>Content for the projects page.</p>
  </div>
);


const Experience = ({ isDarkMode }) => (
  <div
    className={`min-h-screen p-10 ${isDarkMode ? "text-white" : "text-black"}`}
  >
    <h1 className="text-4xl font-bold">Experience Page</h1>
    <p>Content for the experience page.</p>
  </div>
);


const DSA = ({ isDarkMode }) => (
  <div
    className={`min-h-screen p-10 ${isDarkMode ? "text-white" : "text-black"}`}
  >
    <h1 className="text-4xl font-bold">DSA Page</h1>
    <p>Content for the DSA page.</p>
  </div>
);


const Achievements = ({ isDarkMode }) => (
  <div
    className={`min-h-screen p-10 ${isDarkMode ? "text-white" : "text-black"}`}
  >
    <h1 className="text-4xl font-bold">Achievements Page</h1>
    <p>Content for the achievements page.</p>
  </div>
);


const Contact = ({ isDarkMode }) => (
  <div
    className={`min-h-screen p-10 ${isDarkMode ? "text-white" : "text-black"}`}
  >
    <h1 className="text-4xl font-bold">Contact Page</h1>
    <p>Content for the contact page.</p>
  </div>
);

/**
 * AppRoutes component that defines all application routes.
 * It takes the isDarkMode prop and passes it to the page components.
 */
export default function AppRoutes({ isDarkMode }) {
  return (
    <Routes>
      <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
      <Route path="/education" element={<Education isDarkMode={isDarkMode} />}/>
      <Route path="/resume" element={<Resume isDarkMode={isDarkMode} />} />
      {/* Add other routes here */}
    </Routes>
  );
}
