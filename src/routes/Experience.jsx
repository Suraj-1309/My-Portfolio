import React from "react";
import profileImageWhite from "../.pics/experience_white.png";
import profileImageBlack from "../.pics/experience_Black.png";

export default function Experience({ isDarkMode }) {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-[calc(100vh-120px)] px-4 ${
        isDarkMode ? "bg-black text-gray-400" : "bg-white text-gray-600"
      } transition-colors duration-300`}
    >
      {/* Image at top (switches based on dark mode) */}
      <img
  src={isDarkMode ? profileImageBlack : profileImageWhite}
  alt="Person working on a computer"
  className={`w-40 md:w-60 mb-6 ${!isDarkMode ? "mix-blend-multiply" : ""}`}
/>


      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center opacity-80">
        Experience
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-center max-w-xl leading-relaxed opacity-60">
        There's currently no content to show here. <br />
        But I hope you will give me a chance to work for you!
      </p>
    </div>
  );
}
