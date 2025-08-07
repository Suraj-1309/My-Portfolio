import React from "react";
import ExperimentCard from "./ExperimentCard";
import AgencySVG from "./AgencySVG";
import ContractSVG from "./ContractSvg";
import SeekSVG from "./SeekSvg";
import { FaFlask } from "react-icons/fa";

const MyExperiments = ({ isDarkMode }) => {
  const experiments = [
    {
      title: "Software Dev.",
      subtitle: "Work on both Websites and App.",
      svg: <AgencySVG />,
      color: isDarkMode ? "#3B82F6" : "#FFA500", // blue-500 or orange
      href: "/projects",
    },
    {
      title: "Learing AIML",
      subtitle: "Learning Ai working",
      svg: <ContractSVG />,
      color: isDarkMode ? "#3B82F6" : "#5D9CEC",
      href: "/projects#aiml",
    },
    {
      title: "DSA",
      subtitle: "Solved DSA Problems on Platforms",
      svg: <SeekSVG />,
      color: isDarkMode ? "#3B82F6" : "#6C757D",
      href: "/dsa",
    },
  ];

  return (
    <div className="flex flex-col gap-6 py-6">
      <h1
        className={`text-2xl font-bold flex items-center gap-2 ${
          isDarkMode ? "text-blue-500" : "text-orange-500"
        }`}
      >
        <span><FaFlask className="text-4xl" /></span> EXPERIMENTS AREA
      </h1>
      {experiments.map((exp, i) => (
        <ExperimentCard key={i} {...exp} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
};

export default MyExperiments;
