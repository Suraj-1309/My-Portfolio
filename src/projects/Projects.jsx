import React, { useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectsData from "./ProjectsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiFillAndroid } from 'react-icons/ai';
import { GoCopilot } from 'react-icons/go';
import { TbWorldWww } from 'react-icons/tb';


const Projects = ({ isDarkMode }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const screenWidth = window.innerWidth;
      const cardWidth = screenWidth < 768 ? screenWidth : screenWidth * 0.5;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const screenWidth = window.innerWidth;
      const cardWidth = screenWidth < 768 ? screenWidth : screenWidth * 0.5;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* for Webdev projects  */}
      <div className="px-4 md:px-8 py-2 relative">
        <div className="flex justify-between items-center mb-6">
          <div
            className={`flex items-center gap-2 font-bold sm:font-extrabold text-xl sm:text-3xl tracking-wide w-full ${
              isDarkMode ? "text-blue-400" : "text-orange-500"
            }`}
          >
            <TbWorldWww className="h-5 w-5 sm:h-10 sm:w-10" />
            <span>Web Development Projects</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          <div className="flex gap-6 w-max">
            {ProjectsData.map((project, i) => (
              <div
                key={i}
                className="min-w-[80vw] sm:min-w-[65vw] md:min-w-[25vw] max-w-[30vw] flex-shrink-0 pr-10"
              >
                <ProjectsCard data={project} isDarkMode={isDarkMode} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* for AI projects 
      <div className="px-4 md:px-8 py-2 pt-6 relative">
        <div className="flex justify-between items-center mb-6">
          <div
            className={`flex items-center gap-2 font-bold sm:font-extrabold text-xl sm:text-3xl tracking-wide w-full ${
              isDarkMode ? "text-blue-400" : "text-orange-500"
            }`}
          >
            <GoCopilot className="h-5 w-5 sm:h-10 sm:w-10" />
            <span>Web Development Projects</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          {/* <div className="flex gap-6 w-max">
            {ProjectsData.map((project, i) => (
              <div
                key={i}
                className="min-w-[80vw] sm:min-w-[65vw] md:min-w-[25vw] max-w-[30vw] flex-shrink-0 pr-10"
              >
                <ProjectsCard data={project} isDarkMode={isDarkMode} />
              </div>
            ))}
          </div> */}

          {/* <h1
            className={`px-4 py-4 sm:py-10 font-extrabold text-xl sm:text-3xl md:text-4xl text-center text-gray-200 dark:text-gray-500`}
          >
            Currently No Project to show in this field
          </h1>
        </div>
      </div>

      {/* for mobile projects */}
      {/* <div className="px-4 md:px-8 py-2 relative">
        <div className="flex justify-between items-center mb-6">
          <div
            className={`flex items-center gap-2 font-bold sm:font-extrabold text-xl sm:text-3xl tracking-wide w-full ${
              isDarkMode ? "text-blue-400" : "text-orange-500"
            }`}
          >
            <AiFillAndroid className="h-5 w-5 sm:h-10 sm:w-10" />
            <span>Android Projects</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          {/* <div className="flex gap-6 w-max">
            {ProjectsData.map((project, i) => (
              <div
                key={i}
                className="min-w-[80vw] sm:min-w-[65vw] md:min-w-[25vw] max-w-[30vw] flex-shrink-0 pr-10"
              >
                <ProjectsCard data={project} isDarkMode={isDarkMode} />
              </div>
            ))}
          </div> */}
          {/* <h1
            className={`px-4 py-4 sm:py-10 font-extrabold text-xl sm:text-3xl md:text-4xl text-center text-gray-200 dark:text-gray-500`}
          >
            Currently No Project to show in this field
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
