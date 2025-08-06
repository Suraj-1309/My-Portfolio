import React from "react";
import SkillCard from "../skills/SkillCard";
import { FaCode, FaReact } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills({ isDarkMode }) {
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
    title: "C++ Programming",
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
    title: "Python Programming",
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

  return (
    <>
      {/* Languagages heading */}
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

      {/* Skill Cards Grid */}
      <div className={`w-full  px-8 pb-8`}>
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          <SkillCard
            leftIcon={LanguageC.leftIcon}
            rightIcon={LanguageC.rightIcon}
            title={LanguageC.title}
            experience={LanguageC.experience}
            usedIn={LanguageC.usedIn}
            isDarkMode={isDarkMode}
            points={LanguageC.points}
            onSeeMore={() => alert("Show detailed skill page here")}
          />
          <SkillCard
            leftIcon={LanguageCpp.leftIcon}
            rightIcon={LanguageCpp.rightIcon}
            title={LanguageCpp.title}
            experience={LanguageCpp.experience}
            usedIn={LanguageCpp.usedIn}
            isDarkMode={isDarkMode}
            points={LanguageCpp.points}
            onSeeMore={() => alert("Show detailed skill page here")}
          />
          <SkillCard
            leftIcon={LanguagePython.leftIcon}
            rightIcon={LanguagePython.rightIcon}
            title={LanguagePython.title}
            experience={LanguagePython.experience}
            usedIn={LanguagePython.usedIn}
            isDarkMode={isDarkMode}
            points={LanguagePython.points}
            onSeeMore={() => alert("Show detailed skill page here")}
          />
        </div>
      </div>





      {/*Web Development heading */}
      <div
  className={`flex items-center gap-2 px-8 pt-8 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
    isDarkMode ? "text-blue-400" : "text-orange-500"
  }`}
>
  {/* React Icon for Frontend */}
  <FaReact className="h-6 w-6 sm:h-7 sm:w-7 animate-spin-slow" />

  <span>Frontend Technologies</span>
</div>

      {/* Skill Cards Grid */}
      <div className={`w-full  px-8 pb-8`}>
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          <SkillCard
            leftIcon={LanguageC.leftIcon}
            rightIcon={LanguageC.rightIcon}
            title={LanguageC.title}
            experience={LanguageC.experience}
            usedIn={LanguageC.usedIn}
            isDarkMode={isDarkMode}
            points={LanguageC.points}
            onSeeMore={() => alert("Show detailed skill page here")}
          />
          <SkillCard
            leftIcon={LanguageCpp.leftIcon}
            rightIcon={LanguageCpp.rightIcon}
            title={LanguageCpp.title}
            experience={LanguageCpp.experience}
            usedIn={LanguageCpp.usedIn}
            isDarkMode={isDarkMode}
            points={LanguageCpp.points}
            onSeeMore={() => alert("Show detailed skill page here")}
          />
          <SkillCard
            leftIcon={LanguagePython.leftIcon}
            rightIcon={LanguagePython.rightIcon}
            title={LanguagePython.title}
            experience={LanguagePython.experience}
            usedIn={LanguagePython.usedIn}
            isDarkMode={isDarkMode}
            points={LanguagePython.points}
            onSeeMore={() => alert("Show detailed skill page here")}
          />
        </div>
      </div>
    </>
  );
}
