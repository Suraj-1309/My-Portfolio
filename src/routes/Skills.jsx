import React from "react";
import SkillCard from "../skills/SkillCard";
import { FaCode, FaReact } from "react-icons/fa";
import { MdScreenshotMonitor } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { VscCopilot } from "react-icons/vsc";
import {
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiGit,
  SiJupyter,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import SkillsHeaderCard from "../skills/SkillHeader";


import LanguagesSkill from "../skills/LanguagesSkill";

export default function Skills({ isDarkMode }) {
  const LanguageHtml = {
    leftIcon: (
      <MdScreenshotMonitor
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiHtml5
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "HTML",
    experience: "1+ years",
    usedIn: "Web Development Frontend",
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
  const LanguageCss = {
    leftIcon: (
      <MdScreenshotMonitor
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiCss3
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "CSS",
    experience: "1+ years",
    usedIn: "Web Development Frontend",
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
  const LanguageReact = {
    leftIcon: (
      <MdScreenshotMonitor
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <FaReact
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "React",
    experience: "1 Month",
    usedIn: "Web Development Frontend",
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

  const frontendSkills = [LanguageHtml, LanguageCss, LanguageReact];

  const DatabaseMysql = {
    leftIcon: (
      <FaDatabase
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiMysql
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "MySQL",
    experience: "1+ Year",
    usedIn: "Database Management",
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

  const DatabaseMongoDB = {
    leftIcon: (
      <FaDatabase
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiMongodb
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "MongoDB",
    experience: "2 Months",
    usedIn: "Web Development Database",
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
  const databaseSkills = [DatabaseMysql, DatabaseMongoDB];

  const ToolsGit = {
    leftIcon: (
      <FiTool
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiGit
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "Git",
    experience: "2 years",
    usedIn: "Version Control on projects and for fun",
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
  const Tools = [ToolsGit];

  const AitoolJupyter = {
    leftIcon: (
      <FiTool
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    rightIcon: (
      <SiJupyter
        className={`${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        } text-3xl`}
      />
    ),
    title: "Jupyter Notebook",
    experience: "1 years",
    usedIn: "Data Science and Machine Learning",
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
  const Aitools = [AitoolJupyter];





  
  return (
    <>
      {/* Skills Header Card */}
      <SkillsHeaderCard isDarkMode={isDarkMode} />
      {/* Languages heading */}
      <LanguagesSkill isDarkMode={isDarkMode} />



      {/* Web Development heading */}
      <div
        className={`flex items-center gap-2 px-8 pt-8 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        }`}
      >
        <FaReact className="h-6 w-6 sm:h-7 sm:w-7 animate-spin-slow" />
        <span>Frontend Technologies</span>
      </div>
      {/* Skill Cards Grid */}
      <div className="w-full px-8 pb-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {frontendSkills.map((lang, index) => (
            <SkillCard
              key={index}
              leftIcon={lang.leftIcon}
              rightIcon={lang.rightIcon}
              title={lang.title}
              experience={lang.experience}
              usedIn={lang.usedIn}
              isDarkMode={isDarkMode}
              points={lang.points}
              onSeeMore={() => alert("Show detailed skill page here")}
            />
          ))}
        </div>
      </div>

      {/* Database heading */}
      <div
        className={`flex items-center gap-2 px-8 pt-8 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        }`}
      >
        <FaDatabase className="h-6 w-6 sm:h-7 sm:w-7" />
        <span>Database Technologies</span>
      </div>
      {/* Skill Cards Grid */}
      <div className="w-full px-8 pb-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {databaseSkills.map((lang, index) => (
            <SkillCard
              key={index}
              leftIcon={lang.leftIcon}
              rightIcon={lang.rightIcon}
              title={lang.title}
              experience={lang.experience}
              usedIn={lang.usedIn}
              isDarkMode={isDarkMode}
              points={lang.points}
              onSeeMore={() => alert("Show detailed skill page here")}
            />
          ))}
        </div>
      </div>

      {/* Tools & Technologies heading */}
      <div
        className={`flex items-center gap-2 px-8 pt-8 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        }`}
      >
        <FiTool className="h-6 w-6 sm:h-7 sm:w-7" />
        <span>Tools & Technologies</span>
      </div>
      {/* Skill Cards Grid */}
      <div className="w-full px-8 pb-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {Tools.map((lang, index) => (
            <SkillCard
              key={index}
              leftIcon={lang.leftIcon}
              rightIcon={lang.rightIcon}
              title={lang.title}
              experience={lang.experience}
              usedIn={lang.usedIn}
              isDarkMode={isDarkMode}
              points={lang.points}
              onSeeMore={() => alert("Show detailed skill page here")}
            />
          ))}
        </div>
      </div>

      {/*AI  Tools & Technologies heading */}
      <div
        className={`flex items-center gap-2 px-8 pt-8 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
          isDarkMode ? "text-blue-400" : "text-orange-500"
        }`}
      >
        <VscCopilot className="h-6 w-6 sm:h-7 sm:w-7" />
        <span>AI Tools</span>
      </div>
      {/* Skill Cards Grid */}
      <div className="w-full px-8 pb-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {Aitools.map((lang, index) => (
            <SkillCard
              key={index}
              leftIcon={lang.leftIcon}
              rightIcon={lang.rightIcon}
              title={lang.title}
              experience={lang.experience}
              usedIn={lang.usedIn}
              isDarkMode={isDarkMode}
              points={lang.points}
              onSeeMore={() => alert("Show detailed skill page here")}
            />
          ))}
        </div>
      </div>
      {/* You can add another loop here for frontendSkills if needed */}

      {/* End Message & Button */}
      <div className="text-center mt-6 px-4 sm:py-10">
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          These are All the skills on which I had so far in career their are
          some more but not mentioned as they are pretty small but crucial
          skills. 🤗🙏🏼
        </p>
      </div>
    </>
  );
}
