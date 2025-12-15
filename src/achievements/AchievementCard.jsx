import React, { useState } from "react";
import FakePage from "./FakePage";
import SeeMoreCard from "./SeeMoreCard";


export default function AchievementCard({ icon, title, points, isDarkMode }) {
  const [showModal, setShowModal] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null); // article content for FakePage

  const isTruncated = points.length > 4;
  const visiblePoints = isTruncated ? points.slice(0, 4) : points;

  const maxVisibleLines = 5;
  const totalVisible = visiblePoints.length;
  const fillerLines = maxVisibleLines - totalVisible - 1;

  const cardBaseStyle = isDarkMode
    ? "bg-[#111111] text-gray-300 border-gray-800"
    : "bg-gray-100 text-gray-700 border-gray-200";

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-2 text-indigo-500 hover:text-indigo-700 cursor-pointer inline-block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );

  return (
    <>
      <div className="w-[94vw] -ml-[8vw] sm:w-full sm:ml-0">
        <div
          className={`w-full p-4 sm:p-6 font-sans border-b sm:border rounded-none sm:rounded-2xl transition-all duration-300 shadow-md ${cardBaseStyle}`}
        >
          <div className="flex items-center space-x-3 mb-4">
            {icon}
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>

          <ul className="list-disc list-inside space-y-2 text-sm">
            {visiblePoints.map((pointObj, index) => (
              <li key={index} className="flex items-start justify-between">
                <span className="list-item list-disc list-inside">{pointObj.point}</span>

                <span onClick={() => setActiveArticle(pointObj.article)}>
                  {ArrowIcon()}
                </span>
              </li>
            ))}

            {isTruncated && (
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className="italic text-indigo-500 hover:underline"
                >
                  Click to see more...
                </button>
              </li>
            )}

            {Array.from({ length: fillerLines }).map((_, idx) => (
              <li key={`filler-${idx}`} className="invisible select-none">
                filler
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* See More Modal */}
      {showModal && (
        <SeeMoreCard
          title={title}
          points={points} // only send text to SeeMoreCard
          isDarkMode={isDarkMode}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Fake Page */}
      {activeArticle && (
        <FakePage
          content={activeArticle}
          isDarkMode={isDarkMode}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </>
  );
}
