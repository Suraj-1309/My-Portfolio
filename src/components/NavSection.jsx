import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ToggleBgButton from "./ToggleBgButton";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function NavSection({ isDarkMode, toggleDarkMode }) {
  const location = useLocation();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "DSA", href: "/dsa" },
    { name: "Achievements", href: "/#achievements" },
    { name: "Contact", href: "/#contact" },
    { name: "Resume", href: "/resume" },
  ];

  const isActive = (href) => {
    if (href.includes("#")) {
      // For hash links, match the pathname part
      return location.pathname + location.hash === href;
    }
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 p-3 h-16 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700
        ${isDarkMode ? "bg-black" : "bg-white"}
      `}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo/Name */}
        <span className="font-cabinet font-semibold text-lg drop-shadow-md text-gray-700 dark:text-gray-200">
          Suraj Portfolio
        </span>

        {/* Desktop Menu */}
        {isDesktop ? (
          <div className="flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <HashLink
                    smooth
                    to={link.href}
                    className={`relative font-semibold cursor-pointer transition-colors duration-300 ${
                      isActive(link.href)
                        ? "text-orange-500"
                        : "text-gray-500 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-500"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>

            <ToggleBgButton isDark={isDarkMode} toggleTheme={toggleDarkMode} />
          </div>
        ) : (
          <>
            {/* Hamburger Icon and Toggle Button for Mobile */}
            <div className="flex items-center">
              <ToggleBgButton
                isDark={isDarkMode}
                toggleTheme={toggleDarkMode}
              />
              <button
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-500 ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  )}
                </svg>
              </button>
            </div>
            {/* Mobile Menu */}
            <div
              className={`
                fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 shadow-lg
                transition-transform duration-500 ease-in-out transform
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                p-6 flex flex-col items-start justify-start
              `}
            >
              {/* Close button for mobile */}
              <button
                className="absolute top-4 right-4 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ul className="flex flex-col mt-16 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <HashLink
                      smooth
                      to={link.href}
                      className={`text-xl font-semibold cursor-pointer transition-colors duration-300 ${
                        isActive(link.href)
                          ? "text-orange-500"
                          : "text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-500"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
