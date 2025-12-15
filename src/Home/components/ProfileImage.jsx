import React from "react";
import profileImage from "../assets/img.jpeg";

export default function ProfileImage({ isDarkMode }) { 
  return (
    <div
      className={`
        relative 
      `}
    >
      <img
        src={profileImage} // IMPORTANT: Replace with the actual path to your image
        alt="Suraj"
        className={`rounded-3xl object-cover h-full w-full border-4 ${
          isDarkMode ? "border-white" : "border-black"
        }`}
      />

      
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-md flex items-center space-x-1 mb-4 ml-4">
        {/* SVG Icon for image */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-image"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <span>IMG.JPG</span>
      </div>
    </div>
  );
}
