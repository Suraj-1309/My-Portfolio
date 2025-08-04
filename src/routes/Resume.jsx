import React from "react";
import ResumeCard from "../resume_page/ResumeCard";

export default function Resume({ isDarkMode }) {
  return (
    <div className={`w-full min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <ResumeCard isDarkMode={isDarkMode} />
    </div>
  );
}
