import React from "react";
import EducationCard from "../education_page/EducationCard";

export default function Education({ isDarkMode }) {
  const educationCardsData = [
    {
      title: "Bachelors in Computer Engineering",
      institution:
        "Govind Ballabh Pant University of Agriculture and Technology",
      duration: "July. 2025 - June 2028 (Expected)",
      description:
        "I am pursuing a Bachelor's in CSE at GBPUAT where I learn various aspects of computer science and engineering.",
      linkText: "gbpuat.ac.in",
      linkUrl: "https://gbpuat.ac.in",
      score: "CGPA: Currently Persuing", // <-- added
    },
    {
      title: "Diploma in Computer Science & Eng.",
      institution: "Government Polytechnic Dehradun",
      duration: "Sept. 2023  - June 2025",
      description:
        "Completed Minor Degree in CSE focusing on Programming, Web Development and various core subjects like DBMS, CNS, DSA, OOPs, Operating Systems and so etc.",
      linkText: "@gpdehradun.org.in",
      linkUrl: "https://gpdehradun.org.in/",
      score: "CPGA: 9.5/10", // <-- added
    },
    {
      title: "XII(PCM)",
      institution: "Govt Inter College Devprayag, Pauri Garhwal",
      duration: "April. 2022  - June 2023",
      description:
        "Completed intermediate study with Physics, Chemistry, Math. End year of my school life here meet love of my life and my first friend.",
      linkText: "@ukboard.nic.in",
      linkUrl: "https://uaresults.nic.in/",
      score: "Percentage: 85%", // <-- added
    },
    {
      title: "X th",
      institution: "Govt Upper High School Koti Bharpoor, Devprayag",
      duration: "Sept. 2020  - June 2021",
      description:
        "Completed My basic education with Math, Science, Social Science, English, Hindi, Sanskrit.",
      linkText: "@ukboard.nic.in",
      linkUrl: "https://uaresults.nic.in/",
      score: "CPGA: 96%", // <-- added
    },
  ];
  return (
    <div className="min-h-screen px-0 sm:px-12 pt-6 sm:pt-10 pb-4 transition-all bg-white dark:bg-black">
      {/* Intro Section */}
      <div className="px-4 pb-6 sm:px-0 mb-4 sm:mb-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
          Hi! I am Suraj
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Engineer, AI Enthusiast, Builder, Problem solver, Software Developer I help turn ideas into scalable,
          production-ready software.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative ml-0 sm:ml-80">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-4 top-0 h-full border-l-2 border-gray-300 dark:border-white" />

        {/* Centered Title Over Timeline Line */}
        <div className="relative mb-12 mt-4 hidden sm:block">
          {/* Centered heading over the vertical timeline */}
          <div className="absolute left-4 top-0 transform -translate-x-1/2 -translate-y-full">
            <h2 className="px-4 py-2 text-2xl sm:text-3xl font-bold z-10">
              Education
            </h2>
          </div>
        </div>

        {/* Cards */}
        {educationCardsData.map((data, index) => (
          <div
            key={index}
            className={`relative flex flex-col sm:flex-row items-start pl-0 sm:pl-12 mb-16 ${
              index > 0 ? "-mt-6 sm:mt-0" : ""
            }`}
          >
            {/* Dot */}
            <div className="hidden sm:block absolute left-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 rounded-full z-10 bg-orange-500 dark:bg-blue-400" />

            {/* Date */}
            <div className="hidden sm:block absolute -left-48 top-1/2 transform -translate-y-1/2 w-40 text-sm font-semibold text-right leading-snug text-gray-800 dark:text-gray-300">
              {data.duration}
            </div>

            {/* Card */}
            <div className="w-full sm:w-full sm:max-w-3xl sm:ml-8">
              <EducationCard {...data} isDarkMode={isDarkMode} />
              {/* Mobile separator */}
              <div className="block sm:hidden border-t border-gray-300 dark:border-gray-600 mt-8" />
            </div>
          </div>
        ))}
      </div>

      {/* End Message & Button */}
      <div className="text-center mt-6 px-4">
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Thanks for viewing this section! You can explore more by clicking the
          button 🤗
        </p>
      </div>
    </div>
  );
}
