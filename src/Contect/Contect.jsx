import React from "react";
import LeftFooterContent from "./LeftFooterContent.jsx";
import RightFooterContent from "./RightFooterContent.jsx";

export default function Contect({ isDarkMode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-4 py-4 sm:py-8">
      <div className="p-2 sm:p-4 bg-opacity-90 flex flex-col justify-center items-center text-center">
        <LeftFooterContent isDarkMode={isDarkMode} />
      </div>

      <div className="flex p-2 sm:p-4 flex-col justify-center items-center text-center">
        <RightFooterContent isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
