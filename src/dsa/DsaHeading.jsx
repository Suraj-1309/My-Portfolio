import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
  SiHackerrank,
} from "react-icons/si";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const profiles = [
  {
    name: "LeetCode",
    username: "suraj_1309",
    link: "#leetcode",
    icon: <SiLeetcode />,
  },
  {
    name: "Codeforces",
    username: "suraj_1309",
    link: "#codeforces",
    icon: <SiCodeforces />,
  },
  {
    name: "CodeChef",
    username: "im_nika",
    link: "#codechef",
    icon: <SiCodechef />,
  },
  {
    name: "GeeksforGeeks",
    username: "suraj_maybe",
    link: "#gfg",
    icon: <SiGeeksforgeeks />,
  },
  {
    name: "HackerRank",
    username: "surajsinghch2055",
    link: "#hackerrank",
    icon: <SiHackerrank />,
  },
];

export default function DsaHeading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const currentProfile = profiles[currentIndex];

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between pr-4 md:pr-8 ">
      {/* Left: Static Heading */}
      <h1 className=" text-6xl font-extrabold text-gray-900 dark:text-white mb-2 md:mb-0">
        My DSA Record
      </h1>

      {/* Right: Carousel - Hidden on small devices */}
      <div className="relative hidden md:flex items-center w-full md:w-2/5 pt-8">
        {/* AnimatePresence for smooth transition */}
        <div className="relative w-full h-28">
          <AnimatePresence initial={false} custom={direction}>
            <motion.a
              key={currentProfile.name}
              href={currentProfile.link}
              target={currentProfile.link.startsWith("#") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="absolute w-full h-full p-4 rounded-xl border shadow-md flex items-center space-x-4"
              onClick={(e) => {
                if (currentProfile.link.startsWith("#")) {
                  e.preventDefault(); // prevent full reload
                  const id = currentProfile.link.slice(1);
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 100 : -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-6xl dark:text-blue-500 text-orange-600 pl-8">
                {currentProfile.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold pl-2">
                  {currentProfile.name}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 pl-2">
                  @{currentProfile.username}
                </p>
              </div>
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border rounded-full p-2 shadow-md hover:scale-105 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border rounded-full  p-2 shadow-md hover:scale-105 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
