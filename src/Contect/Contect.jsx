import React from "react";
import LeftFooterContent from "./LeftFooterContent.jsx";
import RightFooterContent from "./RightFooterContent.jsx";

export default function Contect({ isDarkMode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <div className="p-4 bg-opacity-90 flex flex-col justify-center items-center text-center">
        <LeftFooterContent isDarkMode={isDarkMode} />
      </div>

      <div className="hidden md:flex p-4 flex-col justify-center items-center text-center">
        <RightFooterContent isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}