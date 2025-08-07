import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LeetCodeCircle = ({
  solved,
  total,
  color = "#2563EB",
  label = "Easy",
  trailColor,
  isDarkMode,
}) => {
  const [value, setValue] = useState(0);
  const percentage = Math.round((solved / total) * 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return prev + 1;
      });
    }, 10); // animation speed

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]">
        <CircularProgressbar
          value={value}
          text={`${solved}/${total}`}
          strokeWidth={6}
          styles={buildStyles({
            pathColor: color,
            trailColor: trailColor || (isDarkMode ? "#1f2937" : "#e5e7eb"),
            textColor: isDarkMode ? "#f9fafb" : "#111827",
            textSize: "18px",
            strokeLinecap: "round",
          })}
        />
      </div>
      <p
        className={`text-base font-bold ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default LeetCodeCircle;
