import React, { useState } from "react";
import AnimatedText from "./components/Name.jsx";
import CliButton from "./components/Cli/CliButton.jsx";
import AboutCard from "./components/About.jsx";
import ProfileImage from "./components/ProfileImage.jsx";
import MyExperiments from "./components/Experiment.jsx/MyExperiments.jsx";
import SelectedWork from "./components/Selectedwork/SelectedWork.jsx";
import DsaHeading from "./components/Dsa/DsaHeading.jsx";
import DsaLeft from "./components/Dsa/DsaLeft.jsx";
import DsaRight from "./components/Dsa/DsaRight.jsx";
import MotoStrip from "./components/MotoStrip.jsx";
import AchievementsRoute from "../routes/AchievementsRoute.jsx";
import Contect from "../Contect/Contect.jsx";
import WorldMap from "./components/Footer/WorldMap.jsx";
import FooterEnd from "./components/Footer/FooterEnd.jsx";
import WebTerminal from "./components/Cli/WebTerminal.jsx";

const Home = ({ isDarkMode }) => {
  const [showCli, setShowCli] = useState(false);
  const toggleCli = () => setShowCli((prev) => !prev);

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-black" : "bg-white"
      } min-h-screen w-full transition-colors duration-300 overflow-x-hidden`}
    >
      {/* First Top Row: Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0">
        {" "}
        {/* First Column for the Name */}
        <div className="order-2 md:order-1">
          <div className="pt-4 sm:pt-8 sm:pl-0 pl-2">
            {" "}
            {/* Keep name slightly above */}
            <AnimatedText text="suraj." isDarkMode={isDarkMode} />
          </div>
        </div>
        {/* Second Column for Activate CLI Button */}
        <div className="order-2 md:order-2 pb-8">
          <div
            className={` pb-4 sm:p-4 `} // Card styling
          >
            <CliButton toggleCli={toggleCli} isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>

      {/* Second Row: Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {" "}
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

      {/* Selected Work Section */}
      <div>
        <SelectedWork isDarkMode={isDarkMode} />
      </div>

      {/* Third Row: DSA Record Section */}
      <div className="mt-12 pb-8 ">
        {/* DSA Heading */}
        <DsaHeading />

        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          <div className="lg:col-span-2 pt-2 sm:p-4 sm:rounded-2xl shadow-md sm:m-8">
            <DsaLeft isDarkMode={isDarkMode} />
          </div>

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
        <AchievementsRoute isDarkMode={isDarkMode} />
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
          <Contect isDarkMode={isDarkMode} />

          {/* World Map Component */}
          <div className="w-full mt-8 relative z-0">
            <WorldMap />
          </div>

          {/* FooterEnd now INSIDE the z-10 container */}
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

export default Home;
