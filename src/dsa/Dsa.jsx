import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
  SiHackerrank,
} from "react-icons/si";
// import LeetCodeStatsCard from "./LeetCodeStatsCard";
import Hackerrank from "./Hackerrank";
import Leetcode from "./Leetcode";
import GfgProfile from "./GfgProfile";
import Codeforces from "./Codeforces";
import Codechef from "./Codechef";

const profiles = [
  {
    name: "LeetCode",
    username: "your_username",
    link: "https://leetcode.com/your_username/",
    icon: <SiLeetcode />,
  },
  {
    name: "Codeforces",
    username: "your_username",
    link: "https://codeforces.com/profile/your_username",
    icon: <SiCodeforces />,
  },
  {
    name: "CodeChef",
    username: "your_username",
    link: "https://www.codechef.com/users/your_username",
    icon: <SiCodechef />,
  },
  {
    name: "GeeksforGeeks",
    username: "your_username",
    link: "https://auth.geeksforgeeks.org/user/your_username/profile",
    icon: <SiGeeksforgeeks />,
  },
  {
    name: "HackerRank",
    username: "your_username",
    link: "https://www.hackerrank.com/your_username",
    icon: <SiHackerrank />,
  },
];

export default function Dsa({ isDarkMode }) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profiles.map(({ name, username, link, icon }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg border shadow hover:scale-[1.03] transition-all flex items-center space-x-4"
          >
            <div className="text-3xl">{icon}</div>
            <div>
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-sm text-gray-600">@{username}</p>
            </div>
          </a>
        ))}
      </div>


      <div className="pt-6">
        <div
          className={`flex items-center gap-2 pt-2 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
            isDarkMode ? "text-blue-400" : "text-orange-500"
          }`}
        >
          <SiHackerrank className="h-7 w-7 sm:h-10 sm:w-10" />
          <span>HackerRank</span>
        </div>
        <Hackerrank isDarkMode={isDarkMode} />
      </div>


      {/* Leetcode component  */}
      <div className="pt-6">
        <div
          className={`flex items-center gap-2 pt-2 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
            isDarkMode ? "text-blue-400" : "text-orange-500"
          }`}
        >
          <SiLeetcode className="h-7 w-7 sm:h-10 sm:w-10" />
          <span>LeetCode</span>
        </div>
        {/* <AnimatedProgress percentage={75} /> */}
        <Leetcode isDarkMode={isDarkMode} />
      </div>


      {/* geeksforgeeks component  */}
      <div className="pt-6">
        <div
          className={`flex items-center gap-2 pt-2 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
            isDarkMode ? "text-blue-400" : "text-orange-500"
          }`}
        >
          <SiGeeksforgeeks className="h-7 w-7 sm:h-10 sm:w-10" />
          <span>GeeksForGeeks</span>
        </div>
        {/* <AnimatedProgress percentage={75} /> */}
        <GfgProfile isDarkMode={isDarkMode} />
      </div>


        {/* codeforces component  */}
      <div className="pt-6">
        <div
          className={`flex items-center gap-2 pt-2 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
            isDarkMode ? "text-blue-400" : "text-orange-500"
          }`}
        >
          <SiCodeforces className="h-7 w-7 sm:h-10 sm:w-10" />
          <span>Codeforces</span>
        </div>
        {/* <AnimatedProgress percentage={75} /> */}
        <Codeforces isDarkMode={isDarkMode} />
      </div>

      {/* codechef component */}
      <div className="pt-6">
        <div
          className={`flex items-center gap-2 pt-2 pb-4 font-bold text-xl sm:text-2xl tracking-wide ${
            isDarkMode ? "text-blue-400" : "text-orange-500"
          }`}
        >
          <SiCodechef className="h-7 w-7 sm:h-10 sm:w-10" />
          <span>CodeChef</span>
        </div>

        {/* <AnimatedProgress percentage={75} /> */}
        <Codechef isDarkMode={isDarkMode} />
      </div>

      {/* End Message & Button */}
      <div className="text-center mt-6 px-4 sm:py-4">
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          These are the things I did in various website regarding DSA there are
          some others too but I am not active in them much. 😎
        </p>
      </div>
    </div>
  );
}
