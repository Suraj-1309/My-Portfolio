import React from "react";

const DsaHeading = () => {
  return (
    <div className="flex items-center gap-2 text-orange-500 font-bold text-lg sm:text-xl tracking-wide">
      {/* Bookmark SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18l-7-4-7 4V3z" />
      </svg>

      {/* Text */}
      <span>DSA RECORD</span>
    </div>
  );
};

export default DsaHeading;
