import React from "react";
// import profileImage from "../assets/profile.png"; // Replace with your image path
import LeetCodeCircle from "./LeetCodeCircle";
import LeetCodeGraph from "./LeetCodeGraph";

const Leetcode = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* Left Column (1/3) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {/* Div 1 – Profile Card */}
          <a
            href="https://www.hackerrank.com/suraj_1309" // Replace with your actual profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-md p-4 px-0 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <img
                  src="/your-image-path.png" // Replace with correct image path
                  alt="Profile"
                  className="w-20 h-20 object-cover rounded-full"
                />

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                    Suraj
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    @suraj_1309
                  </p>
                  <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
                    Rank{" "}
                    <span className="text-2xl text-black dark:text-white">
                      6,34,206
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xs">
                Currently I am a Last year Student in Diploma of CSE in
                Dehradun.
              </p>
            </div>
          </a>

          {/* Div 2 – Question Solved */}
          <div className="border rounded-xl p-4">
            <div>
              <h1 className="text-lg font-semibold mb-4">Questions Solved</h1>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-4">
              <LeetCodeCircle
                solved={99}
                total={888}
                color="#14b8a6"
                label="Easy"
                trailColor="#adcbc8ff"
                isDarkMode={isDarkMode}
              />
              <LeetCodeCircle
                solved={76}
                total={1894}
                color="#facc15"
                label="Medium"
                trailColor="#ece4c8ff"
                isDarkMode={isDarkMode}
              />
              <LeetCodeCircle
                solved={27}
                total={859}
                color="#ef4444"
                label="Hard"
                trailColor="#e7bdbdff"
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
        </div>

        {/* Right Column (2/3) – Div 3 */}
        <div className="w-full lg:w-2/3 border rounded-xl p-4">
          <div className="rounded-2xl shadow-lg p-6 bg-white dark:bg-gray-900 h-full">
            <LeetCodeGraph isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leetcode;
