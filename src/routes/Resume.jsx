import React from "react";
import ResumeCard from "../Resume/ResumeCard";

export default function Resume({ isDarkMode }) {
  return (
    <div className={`w-full min-h-screen`}>
      <ResumeCard isDarkMode={isDarkMode} />
    </div>
  );
}
