import React from "react";
import SkillCard from "../skills/SkillCard";
import { FaCode, FaReact } from "react-icons/fa";
import { MdScreenshotMonitor } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { VscCopilot } from "react-icons/vsc";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPhp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiGit,
  SiJupyter,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";

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

      {/* Skill Cards Grid */}
      <div className="w-full px-8 pb-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {dsaLanguages.map((lang, index) => (
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
    </>
  );
}
