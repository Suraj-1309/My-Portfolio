import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DynamicProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        No project data found. Please navigate from the Projects page.
      </div>
    );
  }

  const {
    svg,
    mainPhoto,
    heading,
    headingText,
    technologyUsed,
    keyFeatures,
    challenges,
    achievements,
    images,
    sourceCodeLink,
    projectViewLink,
  } = data;

  const FancyButton = ({ text, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/button space-x-2 inline-flex whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative text-base border border-gray-300 rounded-3xl origin-center transform active:translate-y-0.5 transition-all duration-100 ease-out hover:before:scale-x-100 hover:before:opacity-100 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:shadow-[rgba(255,255,255,0.8)_0px_6px_4px_0px_inset,rgba(255,243,230,0.2)_0px_-4px_2px_0px_inset,rgba(255,123,0,0.25)_0px_-8px_10px_0px_inset,rgba(255,200,163,0.4)_0px_-12px_20px_0px_inset,rgba(255,106,0,0.2)_0px_12px_24px_-2px,rgba(245,106,0,0.3)_0px_3px_8px_-2px] before:transition before:duration-300 before:ease-out before:origin-center before:opacity-0 w-full items-center justify-between px-6 py-3.5 pr-8 before:scale-x-[5%]"
    >
      <div className="text-lg font-medium leading-none text-[#767676] transition-all group-hover/button:-translate-y-0.5 group-hover/button:text-[#2f2f2f]">
        {text}
      </div>
      <div className="absolute right-[22.2px] top-[22px] z-10 h-[2px] w-4 rounded-full bg-white group-hover/button:bg-[#ffc8a315]"></div>
      <svg
        viewBox="0 0 8 8"
        fill="currentColor"
        className="h-2.5 w-2.5 rotate-45 text-[#767676] transition-transform duration-300 ease-in-out group-hover/button:translate-x-2.5 group-hover/button:text-[#2f2f2f]"
      >
        <path
          d="M6.8291 6.82849L6.8291 1.17163M6.8291 1.17163L1.17225 1.17163M6.8291 1.17163L1.17188 6.82849"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Back Button */}
      {/* Sticky Navbar with Back Button Only */}
      <div className="sticky top-10 z-50 mx-auto flex w-full max-w-[calc(1090px)] items-center justify-start">
        <button
          onClick={() => navigate(-1)}
          className="group/button relative space-x-2 inline-flex whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-base border border-gray-300 rounded-3xl origin-center transform active:translate-y-0.5 transition-all duration-100 ease-out hover:before:scale-x-100 hover:before:opacity-100 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:shadow-[rgba(255,255,255,0.8)_0px_6px_4px_0px_inset,rgba(255,243,230,0.2)_0px_-4px_2px_0px_inset,rgba(255,123,0,0.25)_0px_-8px_10px_0px_inset,rgba(255,200,163,0.4)_0px_-12px_20px_0px_inset,rgba(255,106,0,0.2)_0px_12px_24px_-2px,rgba(245,106,0,0.3)_0px_3px_8px_-2px] before:transition before:duration-300 before:ease-out before:origin-center before:opacity-0 px-5 py-3.5 pr-6 before:scale-x-[5%] bg-white dark:bg-gray-800 text-[#767676] hover:text-[#2f2f2f]"
        >
          <div className="text-lg font-medium leading-none transition-all group-hover/button:-translate-y-0.5">
            ← Back
          </div>
        </button>
      </div>

      {/* Main Image */}
      <img
        src={mainPhoto}
        alt="main"
        className="w-full rounded-2xl object-cover max-h-[400px] shadow-md"
      />

      {/* Heading + Subheading */}
      <div className="px-4 sm:px-6 space-y-3">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold">
          {heading}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 pt-2 max-w-md sm:max-w-2xl mx-auto">
          {headingText}
        </p>
      </div>

      {/* Action Buttons */}
      <div className=" w-fit flex justify-center gap-3 mt-4 flex-nowrap overflow-x-auto">
        <FancyButton
          text="View Source Code"
          link={sourceCodeLink}
          className="w-auto whitespace-nowrap px-3 py-1 text-xs"
        />
        <FancyButton
          text="Visit Live Project"
          link={projectViewLink}
          className="w-auto whitespace-nowrap px-3 py-1 text-xs"
        />
      </div>

      {/* Tech + Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologyUsed.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-normal  text-gray-800 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-5 text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-2">
            {keyFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Challenges + Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            {challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            {achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full h-48 md:h-44 lg:h-48 xl:h-52 overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-gray-600"
          >
            <img
              src={img}
              alt={`screenshot-${i}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicProject;
