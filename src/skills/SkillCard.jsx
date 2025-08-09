// this card is only for Language skills

import React, { useState } from "react";
import FakeSkillArticle from "./FakeSkillArticle";


export default function SkillCard({
  leftIcon,
  rightIcon,
  title,
  experience,
  usedIn,
  isDarkMode,
  points = [],
}) {
  const [showArticle, setShowArticle] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);

  const articleContent = points[0]?.article;

  const cardBaseStyle = isDarkMode
    ? "bg-[#1e2331] text-white"
    : "bg-gray-200 text-black";

  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-300";

  return (
    <>
      <div
        className={`relative w-full sm:w-[400px] rounded-2xl shadow-md p-4 sm:p-4 flex flex-col gap-2 transition-all duration-300 hover:scale-[1.08] ${cardBaseStyle} ${borderColor}`}
      >
        {/* Top row: Left icon + title + right icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>{leftIcon}</div>
            <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          </div>
          <div>{rightIcon}</div>
        </div>

        {/* Experience */}
        <p
          className={`text-sm sm:text-base font-medium ${
            isDarkMode ? "text-blue-400" : "text-orange-600"
          }`}
        >
          {experience}
        </p>

        {/* Used in */}
        <p
          className={`text-sm sm:text-[15px] ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Used In:{" "}
          <span className={isDarkMode ? "text-white" : "text-black"}>
            {usedIn}
          </span>
        </p>

        {/* Button to open modal (if article exists) */}
        {/* {articleContent && (
          <button
            onClick={() => {
              setActiveArticle(articleContent);
              setShowArticle(true);
            }}
            className="absolute bottom-4 right-4 group h-10 w-10 p-0 rounded-3xl border border-gray-300 transition-colors duration-300 ease-in-out transform active:translate-y-0.5 hover:bg-gradient-to-b from-[#F7F7F7] to-white hover:shadow-[inset_0_5px_3px_0_#fefefe,inset_0px_-3.5px_3px_0px_#00000040,inset_0_-6px_8px_0_#00000015,inset_0_3px_6px_-2px_#00000030] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Open Article"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 7l-10 10M17 7H7m10 0v10"
              />
            </svg>
          </button>
        )} */}
      </div>

      {/* Modal for article */}
      {showArticle && activeArticle && (
        <FakeSkillArticle
          content={activeArticle}
          isDarkMode={isDarkMode}
          onClose={() => {
            setShowArticle(false);
            setActiveArticle(null);
          }}
        />
      )}
    </>
  );
}
