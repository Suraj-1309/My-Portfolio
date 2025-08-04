import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLink,
  FaHackerrank,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodeforces,
  SiCodechef,
} from "react-icons/si";

const LeftFooterContent = ({ isDarkMode }) => {
  const linkBaseStyle = `flex items-center space-x-4 py-1 text-base font-semibold transition-colors duration-200`;

  const links = [
    {
      label: "surajsinghch2055@gmail.com",
      icon: <FaEnvelope />,
      url: "mailto:surajsinghch2055@gmail.com",
    },
    {
      label: "@Suraj-1309",
      icon: <FaGithub />,
      url: "https://github.com/Suraj-1309",
    },
    {
      label: "Suraj Singh",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/surajsc1",
    },
    {
      label: "Suraj Singh",
      icon: <FaLink />,
      url: "https://linktr.ee/suraj_s1",
    },
    {
      label: "suraj_1309",
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/suraj_1309/",
    },
    {
      label: "suraj_maybe",
      icon: <SiGeeksforgeeks />,
      url: "https://www.geeksforgeeks.org/user/suraj_maybe",
    },
    {
      label: "surajsinghch2055",
      icon: <FaHackerrank />,
      url: "https://www.hackerrank.com/profile/surajsinghch2055",
    },
    {
      label: "suraj_1309",
      icon: <SiCodeforces />,
      url: "https://codeforces.com/profile/suraj_1309",
    },
    {
      label: "im_nika",
      icon: <SiCodechef />,
      url: "https://www.codechef.com/users/im_nika",
    },
  ];

  return (
    <div className="max-w-md  ml-4"> {/* 👈 Slight shift to the right */}
      <h2
        className={`text-3xl sm:text-5xl font-bold mb-2 ${
          isDarkMode ? "text-white" : "text-black"
        } text-left pl-8`}
      >
        Get in Touch
      </h2>

      <p
        className={`text-xl font-medium mb-4 ${
          isDarkMode ? "text-black" : "text-black"
        } text-left pl-8`}
      >
        Contact Information
      </p>

      <div className="space-y-2">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBaseStyle} ${
              isDarkMode
                ? "text-white hover:text-blue-400"
                : "text-black hover:text-orange-500"
            }`}
          >
            <span className="text-2xl">{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LeftFooterContent;
