// DsaLeft.jsx
import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "The Easing Blueprint",
    href: "/articles/the-easing-blueprint",
  },
  {
    title:
      "Startve A 10x Better Prod",
    href: "/articles/startup-founders-would-you-rather-have-a-10x-better-product-or-10x-better-distribution",
  },
  {
    title: "Life-Changing Lessons I've Learnt As An Entrepreneur",
    href: "/articles/life-changing-lessons-i-learnt-last-year-as-an-entrepreneur",
  },
  {
    title:
      "Programming is Easy, Software Development is Hard & Maintaining Code is the Hardest",
    href: "/articles/programming-is-easy-software-development-is-hard-maintaining-code-is-the-hardest",
  },
];

const DsaLeft = ({ isDarkMode }) => {
  return (
    <div
      className={`rounded-[20px] shadow-md p-8 w-full flex flex-col md:flex-row gap-8 border ${
        isDarkMode ? 'bg-[#121212] border-gray-700' : 'bg-white border-gray-100'
      }`}
    >
      {/* Left Column */}
      <div className="flex-1 space-y-5">
        <h2
          className={`text-[28px] md:text-[30px] font-semibold leading-tight ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
        >
          Revisiting the Model Context Protocol (MCP): The Emerging Standard for
          AI Tool Integration
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
          MCP is becoming the USB-C of AI — a universal standard for LLMs to
          interact with tools and data sources.
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            to="/articles/revisiting-mcp-standards"
            className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 transition hover:shadow-md hover:bg-gradient-to-b ${
              isDarkMode
                ? 'text-gray-300 border-gray-700 hover:text-white from-[#1a1a1a] to-[#121212]'
                : 'text-gray-600 border-gray-300 hover:text-gray-800 from-[#f7f7f7] to-white'
            }`}
          >
            Read <span className="text-xs">&#8599;</span>
          </Link>
          <Link
            to="/articles"
            className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 transition hover:shadow-md hover:bg-gradient-to-b ${
              isDarkMode
                ? 'text-gray-300 border-gray-700 hover:text-white from-[#1a1a1a] to-[#121212]'
                : 'text-gray-600 border-gray-300 hover:text-gray-800 from-[#f7f7f7] to-white'
            }`}
          >
            All articles <span className="text-xs">&#8599;</span>
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div
        className={`flex-1 flex flex-col divide-y ${
          isDarkMode ? 'divide-gray-700' : 'divide-gray-200'
        }`}
      >
        {articles.map(({ title, href }, idx) => (
          <Link
            to={href}
            key={idx}
            className="flex items-center py-4 group transition"
          >
            <div className="flex-1 pr-4">
              <p
                className={`text-base leading-snug transition-colors ${
                  isDarkMode
                    ? 'text-gray-300 group-hover:text-white'
                    : 'text-gray-600 group-hover:text-black'
                }`}
              >
                {title}
              </p>
            </div>
            <div
              className={`group relative w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border overflow-hidden transition-all hover:shadow-md hover:bg-gradient-to-b ${
                isDarkMode
                  ? 'border-gray-700 from-[#1a1a1a] to-[#fff]'
                  : 'border-gray-300 from-[#f7f7f7] to-white'
              }`}
            >
              <svg
                viewBox="0 0 8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`w-3 h-3 transition-transform ${
                  isDarkMode
                    ? 'text-gray-200 group-hover:-translate-y-1'
                    : 'text-gray-600 group-hover:-translate-y-1'
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
