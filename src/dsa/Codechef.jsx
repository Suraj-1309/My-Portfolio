import React from "react";
import CodechefGraph from "./CodechefGraph";

const Codechef = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      {/* Left Column (1/3) */}
      <div className="w-full lg:w-1/3">
        <div className="rounded-2xl border border-gray-300 dark:border-gray-700 shadow p-4 h-full">
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-3">
            <img
              src="https://media.geeksforgeeks.org/auth/profile/lgg2vjlbmgp7ixxsf759"
              alt="Profile"
              className="w-20 h-20 object-cover"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                im_nika
              </h1>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-300 dark:border-gray-700 my-2" />

          {/* Info Rows */}
          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Username:</span>
              <span className="text-gray-800 dark:text-white flex items-center gap-2">
                <span className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">1★</span>
                im_nika
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Country:</span>
              <span className="text-gray-800 dark:text-white">🇮🇳 India</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Student/Professional:</span>
              <span className="text-gray-800 dark:text-white">Student</span>
            </div>

          </div>

          {/* Bottom Divider */}
          <hr className="border-t border-gray-300 dark:border-gray-700 mt-3" />
          {/* Visit Profile Button */}
          <a
            href="https://www.codechef.com/users/im_nika"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full inline-block text-center border px-4 py-2 flex justify-center align-end rounded-lg font-semibold transition hover:scale-105 hover:underline"
          >
            Visit Profile
          </a>
        </div>
      </div>

      {/* Right Column (2/3) */}
      <div className="w-full lg:w-2/3">
        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow p-2 h-full">
          <CodechefGraph isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Codechef;
