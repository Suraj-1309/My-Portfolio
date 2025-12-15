import React from "react";
import Sql from './badgepics/sql.png';
import Cpp from './badgepics/cpp.png';
import C from './badgepics/c.png';
import Java from './badgepics/java.png';
import Python from './badgepics/python.png';
import ProblemSolving from './badgepics/problem_solving.png';
import Djs from './badgepics/10_days_of_js.png';
import Dcode from './badgepics/30_days_of_code.png';

export default function HackerrankBadge() {
  const badgeImages = [
    ProblemSolving,
    Cpp,
    Java,
    Python,
    Dcode,
    Djs,
    Sql,
    C,
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6 pl-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          fill="none"
          viewBox="0 0 24 24"
          className="text-black dark:text-white"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 3a6.217 6.217 0 1 1-.001 12.433 6.217 6.217 0 0 1 0-12.433Z"
            clipRule="evenodd"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m7.547 13.54.018 6.633a.827.827 0 0 0 1.255.707l2.764-1.658a.827.827 0 0 1 .852 0l2.76 1.656a.828.828 0 0 0 1.254-.71V13.53"
          />
        </svg>
        <h2 className="text-2xl sm:text-2xl font-bold">My Badges</h2>
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {badgeImages.map((src, i) => (
          <div key={i} className="flex items-center justify-center">
            <img
              src={src}
              alt={`Badge ${i + 1}`}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
