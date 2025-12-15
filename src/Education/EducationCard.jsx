import React from "react";

const EducationCard = ({
  title,
  institution,
  duration,
  description,
  linkText,
  linkUrl,
  score, // NEW
  isDarkMode,
}) => {
  const ExternalLinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 ml-2"
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
    <div
      className={`w-full rounded-none sm:rounded-3xl shadow-md p-4 sm:p-6 font-sans border transition-all ${
        isDarkMode
          ? "bg-black border-gray-200 text-white"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <div className="flex flex-col space-y-4 h-full">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        <p className="text-xl font-semibold">{institution}</p>
        {(score || duration) && (
          <div className="flex justify-between items-center text-sm sm:text-base w-full mb-1">
            {score ? (
              <span
                className={`font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <span className="font-semibold">Result:</span> {score}
              </span>
            ) : (
              <span />
            )}

            {duration && (
              <span
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {duration}
              </span>
            )}
          </div>
        )}
        <p className="text-base leading-relaxed">{description}</p>

        {linkText && linkUrl && (
          <a
            href={linkUrl.startsWith("http") ? linkUrl : `https://${linkUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-lg font-medium hover:underline ${
              isDarkMode ? "text-blue-400" : "text-orange-400"
            }`}
          >
            {linkText}
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
