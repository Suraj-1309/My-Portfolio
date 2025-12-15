import React from "react";
import { motion } from "framer-motion";

const ExperimentCard = ({
  title,
  subtitle,
  svg,
  color = "#FFA500",
  href = "#",
  isDarkMode = false,
}) => {
  const baseBgColor = isDarkMode ? "#1a1a1aff" : "#eeeaeae2";
  const textColor = isDarkMode ? "text-white" : "text-neutral-800";
  const subTextColor = isDarkMode ? "text-gray-300" : "text-gray-500";
  const borderColor = isDarkMode ? "border-neutral-600" : "border-neutral-200";
  const hoverBg = `linear-gradient(to top, ${color}20 0%, ${baseBgColor} 100%)`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ background: hoverBg }}
        className={`group relative w-full rounded-2xl p-5 shadow-lg border-8 border-double ${borderColor} transition-all duration-300 overflow-hidden`}
        style={{ background: baseBgColor }} // This ensures dark mode starts with black background
      >
        {/* Text Content */}
        <div>
          <h2 className={`text-3xl font-semibold ${textColor} pb-4`}>
            {title}
          </h2>
          <p className={`text-base font-semibold ${subTextColor}`}>
            {subtitle}
          </p>
        </div>

        {/* SVG Content */}
        <motion.div
          initial={{ rotate: -12, y: 0 }}
          whileHover={{ rotate: 0, y: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute top-4 right-2 w-40 h-36 opacity-80"
        >
          {svg}
        </motion.div>
      </motion.div>
    </a>
  );
};

export default ExperimentCard;
