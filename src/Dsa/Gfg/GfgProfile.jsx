import React from 'react';

const GfgProfile = () => {
  return (
    <div className="flex flex-col gap-6 p-4 border rounded-lg">

      {/* Top Section */}
      <div className="flex justify-between items-start">

        {/* Left: Avatar & Details */}
        <div className="flex gap-4">
          <img
            className="w-24 h-24 rounded-full"
            src="https://media.geeksforgeeks.org/auth/profile/lgg2vjlbmgp7ixxsf759"
            alt="suraj_maybe"
          />
          <div>
            <div className="text-2xl font-semibold">suraj_maybe</div>
            <div className="text-base text-gray-600">GFG Over-All Global Rank - 26000</div>
          </div>
        </div>

        {/* Right: Edit Button */}
        <a
          href="https://www.geeksforgeeks.org/user/suraj_maybe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-700 border border-green-700 sm:px-3 sm:py-1 rounded hover:bg-green-50 mt-4 ml-4 sm:m:0 text-center"
        >
          Open Profile
        </a>
      </div>

      <hr />

      {/* Institution and Language */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-lg font-semibold pl-2 text-left">Institution</div>
          <div className="text-xl font-bold pl-2 text-left pb-2">
            Govind Ballabh Pant University of Agriculture and Technology Pantnagar
          </div>
          <div className="flex items-center mt-1 gap-1">
            <img
              src="https://media.geeksforgeeks.org/auth-dashboard-uploads/badge%402x.png"
              alt="Rank"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">2 Rank</span>
          </div>
        </div>
        <div>
          <div className="text-base font-semibold p-2 text-right">Language Used</div>
          <div className="text-lg font-bold pl-2 text-right">C++, Java, Python, JavaScript, C</div>
        </div>
      </div>

      <hr />

      {/* Score Cards Section */}
      <div className="grid grid-cols-3 divide-x text-center">
        <div className="px-2">
          <div className="text-sm font-semibold">Coding Score</div>
          <div className="text-xl font-bold">1308</div>
        </div>
        <div className="px-2">
          <div className="text-sm font-semibold">Problem Solved</div>
          <div className="text-xl font-bold">844 / 3622</div>
        </div>
        <div className="px-2">
          <div className="text-sm font-semibold">Contest Rating</div>
          <div className="text-xl font-bold">--</div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default GfgProfile;
