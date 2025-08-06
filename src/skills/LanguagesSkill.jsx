import React, { useState } from "react";

import SkillCard from "./SkillCard";
import { FaCode } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPhp,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function LanguageSkills({ isDarkMode }) {
  const [showAll, setShowAll] = useState(false);

  const LanguageC = {
    leftIcon: (
      <FaCode
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiC
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "C Programming",
    experience: "2+ years",
    usedIn: "College Study, DSA",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCodeing",
          subheadings: [
            {
              title: "Dynamic Programming",
              text: "Solved 150+ problems focused on dynamic programming, including knapsack, LIS, and memoization techniques.",
            },
            {
              title: "Graph Theory",
              text: "Gained deep understanding of BFS, DFS, and shortest path algorithms by solving various graph-related challenges.",
            },
          ],
          images: [
            "https://example.com/images/leetcode1.png",
            "https://example.com/images/leetcode2.png",
          ],
          check_it: "https://example.com/leetcode-masterclass",
          link: [
            {
              linkname: "Dynamic Programming",
              link: "https://example.com/dynamic-programming",
            },
            {
              linkname: "Graph Theory",
              link: "https://example.com/graph-theory",
            },
          ],
        },
      },
    ],
  };
  const LanguageCpp = {
    leftIcon: (
      <FaCode
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiCplusplus
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "C++",
    experience: "1.5+ years",
    usedIn: "DSA,OOPs, Algorithms, Competitive Programming",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCodeing",
          subheadings: [
            {
              title: "Dynamic Programming",
              text: "Solved 150+ problems focused on dynamic programming, including knapsack, LIS, and memoization techniques.",
            },
            {
              title: "Graph Theory",
              text: "Gained deep understanding of BFS, DFS, and shortest path algorithms by solving various graph-related challenges.",
            },
          ],
          images: [
            "https://example.com/images/leetcode1.png",
            "https://example.com/images/leetcode2.png",
          ],
          check_it: "https://example.com/leetcode-masterclass",
          link: [
            {
              linkname: "Dynamic Programming",
              link: "https://example.com/dynamic-programming",
            },
            {
              linkname: "Graph Theory",
              link: "https://example.com/graph-theory",
            },
          ],
        },
      },
    ],
  };
  const LanguagePython = {
    leftIcon: (
      <FaCode
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiPython
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "Python",
    experience: "1+ years",
    usedIn: "DSA,AIML, Data Science",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCodeing",
          subheadings: [
            {
              title: "Dynamic Programming",
              text: "Solved 150+ problems focused on dynamic programming, including knapsack, LIS, and memoization techniques.",
            },
            {
              title: "Graph Theory",
              text: "Gained deep understanding of BFS, DFS, and shortest path algorithms by solving various graph-related challenges.",
            },
          ],
          images: [
            "https://example.com/images/leetcode1.png",
            "https://example.com/images/leetcode2.png",
          ],
          check_it: "https://example.com/leetcode-masterclass",
          link: [
            {
              linkname: "Dynamic Programming",
              link: "https://example.com/dynamic-programming",
            },
            {
              linkname: "Graph Theory",
              link: "https://example.com/graph-theory",
            },
          ],
        },
      },
    ],
  };
  const LanguageJava = {
    leftIcon: (
      <FaCode
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <FaJava
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "Java",
    experience: "1+ years",
    usedIn: "DSA,Android Development",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCodeing",
          subheadings: [
            {
              title: "Dynamic Programming",
              text: "Solved 150+ problems focused on dynamic programming, including knapsack, LIS, and memoization techniques.",
            },
            {
              title: "Graph Theory",
              text: "Gained deep understanding of BFS, DFS, and shortest path algorithms by solving various graph-related challenges.",
            },
          ],
          images: [
            "https://example.com/images/leetcode1.png",
            "https://example.com/images/leetcode2.png",
          ],
          check_it: "https://example.com/leetcode-masterclass",
          link: [
            {
              linkname: "Dynamic Programming",
              link: "https://example.com/dynamic-programming",
            },
            {
              linkname: "Graph Theory",
              link: "https://example.com/graph-theory",
            },
          ],
        },
      },
    ],
  };
  const LanguageJavascript = {
    leftIcon: (
      <FaCode
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiJavascript
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "JavaScript",
    experience: "2+ years",
    usedIn: "Web Development",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCodeing",
          subheadings: [
            {
              title: "Dynamic Programming",
              text: "Solved 150+ problems focused on dynamic programming, including knapsack, LIS, and memoization techniques.",
            },
            {
              title: "Graph Theory",
              text: "Gained deep understanding of BFS, DFS, and shortest path algorithms by solving various graph-related challenges.",
            },
          ],
          images: [
            "https://example.com/images/leetcode1.png",
            "https://example.com/images/leetcode2.png",
          ],
          check_it: "https://example.com/leetcode-masterclass",
          link: [
            {
              linkname: "Dynamic Programming",
              link: "https://example.com/dynamic-programming",
            },
            {
              linkname: "Graph Theory",
              link: "https://example.com/graph-theory",
            },
          ],
        },
      },
    ],
  };
  const LanguagePhp = {
    leftIcon: (
      <FaCode
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiPhp
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "PHP",
    experience: "1+ years",
    usedIn: "Web Development with Backend",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCodeing",
          subheadings: [
            {
              title: "Dynamic Programming",
              text: "Solved 150+ problems focused on dynamic programming, including knapsack, LIS, and memoization techniques.",
            },
            {
              title: "Graph Theory",
              text: "Gained deep understanding of BFS, DFS, and shortest path algorithms by solving various graph-related challenges.",
            },
          ],
          images: [
            "https://example.com/images/leetcode1.png",
            "https://example.com/images/leetcode2.png",
          ],
          check_it: "https://example.com/leetcode-masterclass",
          link: [
            {
              linkname: "Dynamic Programming",
              link: "https://example.com/dynamic-programming",
            },
            {
              linkname: "Graph Theory",
              link: "https://example.com/graph-theory",
            },
          ],
        },
      },
    ],
  };

  const dsaLanguages = [
    LanguageC,
    LanguageCpp,
    LanguagePython,
    LanguageJava,
    LanguageJavascript,
    LanguagePhp,
  ];

  return (
    <>
      {/* Languages heading */}
      <div
        className={`flex items-center gap-2 px-8 pt-8 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18l-7-4-7 4V3z" />
        </svg>
        <span>Languages</span>
      </div>

      <div className="w-full px-8 pb-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
         {(showAll ? dsaLanguages : dsaLanguages.slice(0, 3)).map((lang, index) => (
  <div
    key={index}
    className="transition-all duration-500 ease-in-out transform opacity-0 animate-fadeIn"
  >
    <SkillCard
      leftIcon={lang.leftIcon}
      rightIcon={lang.rightIcon}
      title={lang.title}
      experience={lang.experience}
      usedIn={lang.usedIn}
      isDarkMode={isDarkMode}
      points={lang.points}
      onSeeMore={() => alert("Show detailed skill page here")}
    />
  </div>
))}
        </div>

        {/* Show More Button */}
        {dsaLanguages.length > 3 && (
          <div className="text-center sm:text-end mt-6 sm:mr-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                isDarkMode
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
