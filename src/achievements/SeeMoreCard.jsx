import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import FakePage from "./FakePage";

// Custom SVG Arrow Icon
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

export default function SeeMoreCard({ title, points, isDarkMode, onClose }) {
  const [animate, setAnimate] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);

  const bg = isDarkMode
    ? "bg-[#111111] text-gray-300 border-gray-800"
    : "bg-white text-gray-800 border-gray-300";

  useEffect(() => {
    const enterTimer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(enterTimer);
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(onClose, 300);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={handleClose}
      >
        {/* Modal */}
        <div
          className={`max-w-lg w-full rounded-xl p-6 border shadow-2xl relative transform transition-all duration-300 ease-out
            ${
              animate
                ? "scale-100 translate-y-0 opacity-100"
                : "scale-90 translate-y-12 opacity-0"
            }
            ${bg}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
          >
            <X size={20} />
          </button>

          <h3 className="text-lg font-bold mb-4">{title}</h3>

          {/* Points */}
          <ul className="list-disc list-inside space-y-2 text-sm max-h-[70vh] overflow-y-auto">
            {points.map((pointObj, idx) => {
              if (Array.isArray(pointObj.point)) {
                return pointObj.point.map((line, lineIdx) => (
                  <li
                    key={`${idx}-${lineIdx}`}
                    className="flex justify-between items-start"
                  >
                    <span className="list-item list-disc list-inside">
                      {line}
                    </span>
                    {/* Only show arrow for the first line */}
                    {lineIdx === 0 && (
                      <button
                        onClick={() => setActiveArticle(pointObj.article)}
                        className="ml-2 mt-0.5"
                      >
                        <ArrowIcon />
                      </button>
                    )}
                  </li>
                ));
              } else {
                return (
                  <li key={idx} className="flex justify-between items-start">
                    <span className="list-item list-disc list-inside">
                      {pointObj.point}
                    </span>
                    <button
                      onClick={() => setActiveArticle(pointObj.article)}
                      className="ml-2 mt-0.5"
                    >
                      <ArrowIcon />
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      {/* FakePage shown when an article is active */}
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
