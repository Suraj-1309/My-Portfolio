import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AnimatedText from "./components/name.jsx";
import Resume from "./routes/Resume.jsx";
import Education from "./routes/Education.jsx";
import CliButton from "./components/CliButton.jsx";
import WebTerminal from "./components/WebTerminal.jsx";
import ProfileImage from "./components/ProfileImage.jsx";
import AboutCard from "./components/About.jsx";
import LeftFooterContent from "./Footer/LeftFooterContent.jsx";
import FooterEnd from "./Footer/FooterEnd.jsx";
import RightFooterContent from "./Footer/RightFooterContent.jsx";
import ContactRedirect from "./routes/ContactRedirect.jsx";
import Experience from "./routes/Experience.jsx";
import Achievements from "./routes/Achievements.jsx";
import WorldMap from "./Footer/WorldMap.jsx";
import MotoStrip from "./components/MotoStrip.jsx";
import DsaHeading from "./components/DsaHeading.jsx";
import DsaRight from "./components/DsaRight.jsx";
import DsaLeft from "./components/DsaLeft.jsx";
// Placeholder components for the other pages
import Skills from "./routes/Skills.jsx"; // Importing the Skills route
import MyExperiments from "./experiment.jsx/MyExperiments.jsx";
import SelectedWork from "./selectedwork/SelectedWork.jsx";
import Dsa from "./dsa/Dsa.jsx";
import Projects from "./projects/Projects.jsx";
import DynamicProject from "./projects/DynamicProject.jsx";
// import DynamicProject from "./projects/DynamicProject.jsx";

const Home = ({ isDarkMode }) => {
  const [showCli, setShowCli] = useState(false);
  const toggleCli = () => setShowCli((prev) => !prev);

  return (
    // Main container for the Home page: sets background, min height, and general padding
    <div
      className={`p-4 ${
        isDarkMode ? "bg-black" : "bg-white"
      } min-h-screen w-full transition-colors duration-300 overflow-x-hidden`}
    >
      {/* First Top Row: Two Columns */}
      {/* On small screens (mobile), it will be a single column (stack vertically).
          On medium screens (md) and larger, it will be two columns. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0">
        {" "}
        {/* gap-4 adds space between columns and rows */}
        {/* First Column for the Name */}
        {/* order-2 for mobile to place it below CLI, order-1 for desktop to place it on left */}
        <div className="order-2 md:order-1">
          <div className="pt-4 sm:pt-8 sm:pl-0 pl-2">
            {" "}
            {/* Keep name slightly above */}
            <AnimatedText text="suraj." isDarkMode={isDarkMode} />
          </div>
        </div>
        
        {/* Second Column for Activate CLI Button */}
        {/* order-1 for mobile to place it above name, order-2 for desktop to place it on right */}
        <div className="order-2 md:order-2 pb-8">
          <div
            className={` pb-4 sm:p-4 `} // Card styling
          >
            <CliButton toggleCli={toggleCli} isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>

      {/* Second Row: Three Columns */}
      {/* On small screens, it will be a single column.
          On medium screens and larger, it will be three columns. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {" "}
        {/* mt-8 adds margin from the row above */}
        {/* Column 1 Placeholder */}
        <div
          className={`p-3 rounded-3xl shadow-lg ${
            isDarkMode ? "bg-gray-900" : "bg-gray-200"
          }  flex items-center justify-center h-fit`}
        >
          <AboutCard isDarkMode={isDarkMode} />
        </div>
        {/* Column 2 Placeholder */}
        <div className={`sm:w-[calc(100%-40px)] pt-8 sm:pt-0 sm:m-8 lg:-mt-8`}>
          <ProfileImage isDarkMode={isDarkMode} />
        </div>
        {/* Column 3 Placeholder */}
        <div className={`w-full sm:-mt-12`}>
          <MyExperiments isDarkMode={isDarkMode} />
        </div>
      </div>

      <div>
        {/* Selected Work Section */}
        <SelectedWork isDarkMode={isDarkMode} />
      </div>

      {/* Third Row: DSA Record Section */}
      <div className="mt-12 pb-8 ">
        {/* DSA Heading */}

        <DsaHeading />
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {/* Left Side: 2/3 width */}
          <div className="lg:col-span-2 pt-2 sm:p-4 sm:rounded-2xl shadow-md sm:m-8">
            {/* TODO: Add DSA Record card content here */}
            <DsaLeft isDarkMode={isDarkMode} />
          </div>

          {/* Right Side: 1/3 width */}
          <div className="hidden lg:flex lg:col-span-1 p-4  flex justify-end items-center">
            {/* TODO: Add right-side widget or content */}
            <DsaRight isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>

      {/* MotoStrip Component */}
      <div className="relative z-0 w-screen">
        <MotoStrip isDarkMode={isDarkMode} />
      </div>

      {/* achievements */}
      <div
        id="achievements"
        className="relative mt-8 scroll-mt-16 md:scroll-mt-24"
      >
        <Achievements isDarkMode={isDarkMode} />
      </div>

      {/* Footer Section with World Map Background */}
      <div id="contact" className="relative mt-8 scroll-mt-16 md:scroll-mt-24">
        {/* World Map Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 z-0 pointer-events-none"
          style={{
            backgroundImage: "", // add image URL here
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10">
          {/* Grid for Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
            <div className="p-4 bg-opacity-90 flex flex-col justify-center items-center text-center">
              <LeftFooterContent isDarkMode={isDarkMode} />
            </div>

            <div className="hidden md:flex p-4 flex-col justify-center items-center text-center">
              <RightFooterContent isDarkMode={isDarkMode} />
            </div>
          </div>

          {/* World Map Component */}
          <div className="w-full mt-8 relative z-0">
            <WorldMap />
          </div>

          {/* ✅ FooterEnd now INSIDE the z-10 container */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <FooterEnd isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>

      {/* WebTerminal component, shown only when showCli is true */}
      {showCli && <WebTerminal onClose={toggleCli} />}
    </div>
  );
};

/**
 * AppRoutes component that defines all application routes.
 * It takes the isDarkMode prop and passes it to the page components.
 */
export default function AppRoutes({ isDarkMode }) {
  return (
    <Routes>
      <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
      <Route path="/skills" element={<Skills isDarkMode={isDarkMode} />} />
      <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
      <Route
        path="/projects/:id"
        element={<DynamicProject isDarkMode={isDarkMode} />}
      />

      <Route
        path="/education"
        element={<Education isDarkMode={isDarkMode} />}
      />

      <Route
        path="/achievements"
        element={<Achievements isDarkMode={isDarkMode} />}
      />

      <Route path="/dsa" element={<Dsa isDarkMode={isDarkMode} />} />
      <Route
        path="/experience"
        element={<Experience isDarkMode={isDarkMode} />}
      />
      <Route path="/contact" element={<ContactRedirect />} />
      <Route path="/resume" element={<Resume isDarkMode={isDarkMode} />} />
      {/* Add other routes here */}
    </Routes>
  );
}
