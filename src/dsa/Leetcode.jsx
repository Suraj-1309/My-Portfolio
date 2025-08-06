// src/dsa/Leetcode.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Leetcode = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const res = await axios.get("https://leetcode-stats-api.herokuapp.com/suraj_1309");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    fetchLeetcodeData();
  }, []);

  if (!data) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-6">
      {/* Left Profile Card */}
      <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            alt="Avatar"
            className="w-24 h-24 rounded-full mb-3"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Suraj</h3>
          <p className="text-gray-600 dark:text-gray-300">@suraj_1309</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Currently I am a Last year Student in Diploma of CSE in Dehradun.
          </p>
        </div>

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          <p>📍 India</p>
          <p>🏫 Govt Polytechnic Dehradun</p>
          <p>💼 LinkedIn: <a href="#" className="text-blue-500">suraj-chauhan-b02535293</a></p>
          <p>👨‍💻 GitHub: Suraj-1309</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["C", "C++", "HTML", "CSS", "Git"].map((skill) => (
            <span
              key={skill}
              className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Right Stats Panel */}
      <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Contest Rating</h4>
            <p className="text-2xl font-bold text-orange-500">1294</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Global Ranking</h4>
            <p className="text-2xl font-bold text-blue-500">708,908 / 728,146</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Top %</h4>
            <p className="text-2xl font-bold text-green-500">97.41%</p>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Problems Solved</h4>
          <div className="flex justify-between">
            <p className="text-green-600 font-medium">Easy: {data.easySolved}</p>
            <p className="text-yellow-500 font-medium">Medium: {data.mediumSolved}</p>
            <p className="text-red-500 font-medium">Hard: {data.hardSolved}</p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Total: {data.totalSolved}</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Badges</h4>
          <div className="flex items-center gap-4">
            <img
              src="https://assets.leetcode.com/static_assets/others/50-days-badge-2023.png"
              alt="Badge"
              className="w-12 h-12"
            />
            <img
              src="https://assets.leetcode.com/static_assets/others/4-april-badge-2024.png"
              alt="Badge"
              className="w-12 h-12"
            />
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Submission Activity</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Graph coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Leetcode;
