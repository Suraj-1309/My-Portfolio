import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AnimatedText from "./components/name.jsx";
import Resume from "./routes/Resume.jsx";
import Education from "./routes/Education.jsx";
import CliButton from "./components/CliButton.jsx";
import WebTerminal from "./components/WebTerminal.jsx";



// Placeholder components for the other pages
const Home = ({ isDarkMode }) => {
  const [showCli, setShowCli] = useState(false);
  const toggleCli = () => setShowCli((prev) => !prev);

  return (
    <div>
      {/* Your home content */}
      <div className="pt-1 sm:pt-10">

      <AnimatedText text="suraj." isDarkMode={isDarkMode} />
      </div>

      <div className="absolute bottom-10 left-10 flex flex-col sm:flex-row gap-4 items-center">
        <CliButton toggleCli={toggleCli} />
      </div>
      {showCli && <WebTerminal onClose={toggleCli} />
      
      }
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
