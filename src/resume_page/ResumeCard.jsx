import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

// The ResumeCard component will display the resume content
export default function ResumeCard({ isDarkMode }) {
  const componentRef = useRef();

  // This hook is no longer used, but kept as a reference for future print functionality
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Suraj-Resume",
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
          href="https://drive.google.com/file/d/1xUbjNh_IKY707ujisCx16QF7BkCIYgbR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-28 left-10 bg-red-600 hover:bg-red-400 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-colors duration-300 z-50"
        >
          View/Download Resume
        </a>

        {/* Small navigation links for desktop, hidden on mobile */}
        <div className="fixed top-48 left-10 flex flex-col space-y-4 z-50">
          <button
            onClick={() => scrollToSection("summary")}
            className="group flex items-center justify-between gap-4 text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
          >
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-blue-400">
              Summary
            </span>
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
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="group flex items-center justify-between gap-4 text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
          >
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-blue-400">
              Education
            </span>
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
          </button>
          <button
            onClick={() => scrollToSection("technical-skills")}
            className="group flex items-center justify-between gap-4 text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
          >
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-blue-400">
              Skills
            </span>
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
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center justify-between gap-4 text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
          >
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-blue-400">
              Projects
            </span>
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
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className="group flex items-center justify-between gap-4 text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
          >
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-blue-400">
              Achievements
            </span>
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
          </button>
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
              Suraj Singh Chauhan
            </h1>
            <p className="text-xl text-orange-500 font-semibold mb-2">
              +91-8445304894 | surajsinghch2055@gmail.com
            </p>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <a
                href="https://linkedin.com/in/surajscl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/Suraj-1309"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Github
              </a>
            </div>
            {/* Download button for mobile. On desktop, this will be the fixed button in the sidebar. */}
            <a
              href="https://drive.google.com/file/d/1xUbjNh_IKY707ujisCx16QF7BkCIYgbR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:hidden inline-block w-full text-center bg-red-600 hover:bg-red-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
            >
              View/Download Resume
            </a>
          </header>

          {/* Summary Section */}
          <section id="summary" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              SUMMARY
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Highly motivated Computer Science & Engineering student with a
              strong academic record and a passion for problem-solving. Solved
              over 1000+ coding problems across LeetCode, HackerRank, and
              GeeksforGeeks. Also have good knowledge of frontend development
              using HTML, CSS, and JavaScript. Seeking a challenging software
              engineering internship at a tech company to apply and expand my
              skills in building scalable and efficient systems.
            </p>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              EDUCATION
            </h2>

            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-200">
                  BTech in Computer Engineering
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Govind Ballabh Pant University of Agri. & Tech. Pantnagar
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2025 (Currently pursuing)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  CGPA: 9.5/10
                </p>
              </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-200">
                  Diploma in Computer Science & Engineering
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Govt. Polytechnic Dehradun
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">85%</p>
              </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-200">
                  Class XII (PCM)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Govt Inter College Devprayag, Pauri Garhwal
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">96%</p>
              </div>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section id="technical-skills" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-600 dark:text-gray-300">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Languages:
                </p>
                <p>C++, C, Java, Python, JavaScript, Rust, PHP</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Frontend:
                </p>
                <p>HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, jQuery</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Backend:
                </p>
                <p>PHP, MySQL</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Tools & Technologies:
                </p>
                <p>Git, GitHub</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              PROJECTS
            </h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">
                Government Polytechnic Inventory Management System (GPIMS)
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Technologies: HTML, CSS, JavaScript, PHP, MySQL, Git
              </p>
              <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300 space-y-1 pl-4">
                <li>
                  Developed a real-time inventory management system for college
                  use, serving multiple user roles with distinct data access
                  permissions including Admin, Stock Officer, Stock Manager, and
                  Lab Incharge.
                </li>
                <li>
                  Led a small team, managed project scope, resolved conflicts
                  over implementation ideas, and ensured all milestones were met
                  before deadlines.
                </li>
                <li>
                  Utilized HTML, CSS, JavaScript, PHP, and MySQL for
                  development, with Git for version control.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">
                Practice Web Pages
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Technologies: HTML, CSS, JavaScript, Bootstrap, Tailwind CSS
              </p>
              <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300 space-y-1 pl-4">
                <li>
                  Designed and developed dynamic and responsive web pages to
                  hone fundamental frontend skills.
                </li>
                <li>
                  Applied principles of responsive design and user experience to
                  reach more people.
                </li>
                <li>
                  Focused on creating intuitive and visually appealing user
                  interfaces with animation.
                </li>
              </ul>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-orange-500 pb-1 mb-4">
              ACHIEVEMENTS
            </h2>
            <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300 space-y-1 pl-4">
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  LeetCode:
                </span>{" "}
                Solved 200+ Data Structures and Algorithms problems.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  GeeksforGeeks:
                </span>{" "}
                Solved 750+ DSA problems; Overall Ranking: 29,000.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  HackerRank:
                </span>{" "}
                Earned 5-star badges in C, C++, SQL, and Python; 4-star in
                JavaScript; 2-star in Java.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  Total:
                </span>{" "}
                Solved 1000+ coding problems across LeetCode, GeeksforGeeks, and
                HackerRank.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
