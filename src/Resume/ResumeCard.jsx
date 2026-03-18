import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import resumeData from "./resumeData.json";

function NavArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-blue-400 transition-transform duration-300 transform group-hover:rotate-90"
      viewBox="0 0 16 16"
    >
      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
}

// The ResumeCard component will display the resume content
export default function ResumeCard({ isDarkMode }) {
  const componentRef = useRef();
  const {
    documentTitle,
    resumeLink,
    resumeLinkText,
    sidebarSections,
    header,
    summary,
    education,
    technicalSkills,
    projects,
    achievements,
  } = resumeData;

  // This hook is no longer used, but kept as a reference for future print functionality
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle,
    pageStyle: `@page {
      size: A4;
      margin: 0;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
    }`,
  });

  // Function to handle smooth scrolling to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      {/* Navigation sidebar for desktop only. It is completely hidden on mobile to avoid layout issues. */}
      <div className="fixed top-6 left-6 z-50 hidden md:flex flex-col space-y-4">
        {/* View/Download Resume Link - fixed position for desktop */}
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-28 left-10 bg-red-600 hover:bg-red-400 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-colors duration-300 z-50"
        >
          {resumeLinkText}
        </a>

        {/* Small navigation links for desktop, hidden on mobile */}
        <div className="fixed top-48 left-10 flex flex-col space-y-4 z-50">
          {sidebarSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center justify-between gap-4 text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
            >
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-blue-400">
                {section.label}
              </span>
              <NavArrowIcon />
            </button>
          ))}
        </div>
      </div>

      {/* Main Resume Container */}
      <div
        ref={componentRef}
        className={`w-full max-w-[220mm] min-h-screen md:min-h-[297mm] p-2 md:p-4 bg-gray-50 dark:bg-gray-900 rounded-lg
          transition-colors duration-300 transform scale-100 md:scale-100 print:scale-100 print:shadow-none print:m-0 print:p-0
          ${isDarkMode ? "dark" : ""}`}
      >
        {/* The actual resume card with a more visible border and shadow */}
        <div
          className={`p-4 md:p-12 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg rounded-lg h-full`}
        >
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-cabinet font-bold text-gray-800 dark:text-gray-100 mb-2">
              {header.name}
            </h1>
            <p className="text-xl text-orange-500 font-semibold mb-2">
              {header.contact}
            </p>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-600 dark:text-gray-300">
              {header.profiles.map((profile) => (
                <a
                  key={profile.url}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {profile.label}
                </a>
              ))}
            </div>
            {/* Download button for mobile. On desktop, this will be the fixed button in the sidebar. */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:hidden inline-block w-full text-center bg-red-600 hover:bg-red-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
            >
              {resumeLinkText}
            </a>
          </header>

          {/* Summary Section */}
          <section id="summary" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              {summary.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {summary.text}
            </p>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              {education.title}
            </h2>

            {education.items.map((item) => (
              <div
                key={`${item.degree}-${item.year}`}
                className="flex justify-between items-start mb-4"
              >
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">
                    {item.degree}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.institution}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.year}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.score}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Technical Skills Section */}
          <section id="technical-skills" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              {technicalSkills.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-600 dark:text-gray-300">
              {technicalSkills.items.map((item) => (
                <div key={item.label}>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">
                    {item.label}:
                  </p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              {projects.title}
            </h2>

            {projects.items.map((project, index) => (
              <div
                key={project.name}
                className={index < projects.items.length - 1 ? "mb-4" : ""}
              >
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.technologies}
                </p>
                <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300 space-y-1 pl-4">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Achievements Section */}
          <section id="achievement" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              {achievements.title}
            </h2>
            <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300 space-y-1 pl-4">
              {achievements.items.map((achievement) => (
                <li key={achievement.label}>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {achievement.label}:
                  </span>{" "}
                  {achievement.detail}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
