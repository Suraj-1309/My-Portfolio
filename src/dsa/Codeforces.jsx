import React from "react";
import CodeforcesGraph from "./CodeforcesGraph";

const Codeforces = ({ isDarkMode }) => {
  const borderColor = isDarkMode ? "border-white" : "border-gray-300";
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-fit">
      {/* Left Column (1/3) */}
      <div className="w-full lg:w-1/3">
        <div
          className={`bg-transparent border ${borderColor} p-4 text-left ${textColor} h-full rounded-xl flex flex-col justify-between`}
        >
          <div>
            <h2 className="text-xl font-bold mb-2">Newbie</h2>
            <h1 className="text-3xl font-extrabold mb-1">suraj_1309</h1>
            <p className="text-sm mb-1">Dehradun, India</p>
            <p className="text-sm mb-2">From Government Polytechnic Dehradun</p>

            <p className="mb-2">
              <span className="font-bold">Contest rating:</span> 369{" "}
              <span className="text-gray-500">
                (max. <span className="font-semibold">newbie</span>, 369)
              </span>
            </p>
            <p className="mb-1">
              <span className="font-bold">Contribution:</span> 0
            </p>
            <p className="mb-1">
              <span className="font-bold">Friend of:</span> 0 users
            </p>
            <p className="text-sm mb-1">Last visit: 6 hours ago</p>
            <p className="text-sm mb-2">Registered: 16 months ago</p>
          </div>

          {/* Visit Profile Button */}
          <a
            href="https://codeforces.com/profile/suraj_1309"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-center border px-4 py-2 rounded-lg font-semibold transition hover:scale-105 hover:underline"
          >
            Visit Profile
          </a>
        </div>
      </div>

      {/* Right Column (2/3) */}
      <div className="w-full lg:w-2/3">
        <div
          className={`bg-transparent border ${borderColor} p-4 h-full rounded-xl flex flex-col`}
        >
          <div className="flex-grow">
            <CodeforcesGraph isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codeforces;
