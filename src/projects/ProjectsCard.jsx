import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectsCard = ({ data, isDarkMode }) => {
  const navigate = useNavigate();

  const {
    id,
    svg,
    mainPhoto,
    heading,
    headingText,
    technologyUsed,
    projectViewLink,
  } = data;

  const handleClick = () => {
    const { svg, ...safeData } = data;
    navigate(`/projects/${id}`, { state: safeData });
  };

  const cardBg = isDarkMode ? "bg-gray-700" : "bg-gray-200";
  const textColor = isDarkMode ? "text-blue-500" : "text-orange-500";
  const buttonBg = isDarkMode ? "bg-blue-500 hover:bg-blue-600" : "bg-orange-500 hover:bg-orange-600";
  const headingTextColor = isDarkMode ? "text-white" : "text-gray-900";
  const paragraphTextColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const tagBg = isDarkMode ? "bg-[#2d2f45]" : "bg-gray-300";
  const tagText = isDarkMode ? "text-white" : "text-gray-800";

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer w-full ${cardBg} overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
    >
      {/* Image */}
      <img
        src={mainPhoto}
        alt="project"
        className="w-full h-36 sm:h-40 object-cover"
      />

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        {/* SVG + Heading */}
        <div className="flex items-center gap-3">
          <div className={`sm:text-xl ${textColor}`}>{svg}</div>
          <h3 className={` sm:text-lg font-semibold ${headingTextColor}`}>{heading}</h3>
        </div>

        {/* Heading Text */}
        <p className={`text-sm leading-relaxed ${paragraphTextColor}`}>
          {headingText}
        </p>

        {/* Tech Used */}
        <div className="flex flex-wrap gap-1">
          {technologyUsed.map((tech, i) => (
            <span
              key={i}
              className={`font-[8px] sm:font-xs font-normal px-2 rounded-full ${tagBg} ${tagText}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <a
          href={projectViewLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`mt-3 inline-block text-center text-sm text-white transition px-4 py-2 rounded-md ${buttonBg}`}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
