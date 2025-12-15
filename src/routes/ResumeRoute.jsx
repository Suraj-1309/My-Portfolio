import React from "react";
import ResumeCard from "../Resume/ResumeCard";

export default function ResumeRoute({ isDarkMode }) {
  return (
    <div className={`w-full min-h-screen`}>
      <ResumeCard isDarkMode={isDarkMode} />
    </div>
  );
}
