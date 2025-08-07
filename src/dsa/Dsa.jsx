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
    <>
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
        <Hackerrank isDarkMode={isDarkMode} />
      </div>
      <div className="pt-6">
        {/* <AnimatedProgress percentage={75} /> */}
        <Leetcode isDarkMode={isDarkMode} />
      </div>

      <div className="pt-6">
        {/* <AnimatedProgress percentage={75} /> */}
        <GfgProfile isDarkMode={isDarkMode} />
      </div>


    </>
  );
}
