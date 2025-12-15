// DsaLeft.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";

const articles = [
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/suraj_1309/",
    icon: SiLeetcode,
  },
  {
    title: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/user/suraj_maybe",
    icon: SiGeeksforgeeks,
  },
  {
    title: "HackerRank",
    href: "https://www.hackerrank.com/profile/surajsinghch2055",
    icon: SiHackerrank,
  },
  {
    title: "Codeforces",
    href: "https://codeforces.com/profile/suraj_1309",
    icon: SiCodeforces,
  },
  {
    title: "Codechef",
    href: "https://www.codechef.com/users/im_nika",
    icon: SiCodechef,
  },
];

const DsaLeft = ({ isDarkMode }) => {
  return (
    <div
      className={`sm:rounded-[20px] shadow-md p-4 sm:p-8 w-full flex flex-col md:flex-row sm:gap-8 border ${
        isDarkMode ? "bg-[#121212] border-gray-700" : "bg-white border-gray-100"
      }`}
    >
      {/* Left Column */}
      <div className="flex-1 space-y-5">
        <h2
          className={`text-[22px] md:text-[27px] font-semibold leading-tight ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Worked On Data Structure & Algorithms in Various Platforms to solve
          Problems.
        </h2>
        <p
          className={`text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          I have done various things in DSA such as 1000+ problem solving, many
          competitive programming, coding contests, and learning algorithms. I
          have also written articles about my experiences and insights in this
          field.
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            to="/dsa"
            className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 transition hover:shadow-md hover:bg-gradient-to-b ${
              isDarkMode
                ? "text-gray-300 border-gray-700 hover:text-white from-[#1a1a1a] to-[#121212]"
                : "text-gray-600 border-gray-300 hover:text-gray-800 from-[#f7f7f7] to-white"
            }`}
          >
            View DSA <span className="text-xs">&#8599;</span>
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div
        className={`flex-1 flex flex-col divide-y ${
          isDarkMode ? "divide-gray-700" : "divide-gray-200"
        }`}
      >
        {articles.map(({ title, href, icon: Icon }, idx) => (
          <Link
            to={href}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-4 group transition"
          >
            <div className="flex items-center flex-1 gap-3 pr-4">
              <Icon
                className={`w-5 h-5 flex-shrink-0 transition-colors ${
                  isDarkMode
                    ? "text-gray-400 group-hover:text-white"
                    : "text-gray-500 group-hover:text-black"
                }`}
              />
              <p
                className={`text-base leading-snug transition-colors ${
                  isDarkMode
                    ? "text-gray-300 group-hover:text-white"
                    : "text-gray-600 group-hover:text-black"
                }`}
              >
                {title}
              </p>
            </div>
            <div
              className={`group relative w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border overflow-hidden transition-all hover:shadow-md hover:bg-gradient-to-b ${
                isDarkMode
                  ? "border-gray-700 from-[#1a1a1a] to-[#fff]"
                  : "border-gray-300 from-[#f7f7f7] to-white"
              }`}
            >
              <svg
                viewBox="0 0 8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`w-3 h-3 transition-transform ${
                  isDarkMode
                    ? "text-gray-200 group-hover:-translate-y-1"
                    : "text-gray-600 group-hover:-translate-y-1"
                }`}
              >
                <path d="M6.8 6.8V1.2M6.8 1.2H1.2M6.8 1.2L1.2 6.8" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DsaLeft;
