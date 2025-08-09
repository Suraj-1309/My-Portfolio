import React from "react";
import AchievementCard from "../achievements/AchievementCard";
import { FaCode, FaCertificate, FaStar, FaTrophy } from "react-icons/fa";
import ossDev from "../achievements/oss/fcc_dev.webp";
import gpimsLead from "../achievements/leadership/gpims_homepage.webp";
import { title } from "framer-motion/client";
import postCert from "../achievements/certificate/postman.png";

const achievementData = [
  // compitive programming
  // {
  //   icon: <FaCode className="text-purple-400 text-2xl" />,
  //   title: "Competitive Coding",
  //   points: [
  //     {
  //       point: "Solved 600+ challenges on LeetCode",
  //       article: {
  //         heading: "Mastering LeetCode",
  //         subheadings: [
  //           {
  //             title: "Dynamic Programming",
  //             text: "Solved 150+ problems focused on dynamic programming, including knapsack, LIS, and memoization techniques.",
  //           },
  //           {
  //             title: "Graph Theory",
  //             text: "Gained deep understanding of BFS, DFS, and shortest path algorithms by solving various graph-related challenges.",
  //           },
  //         ],
  //         images: [
  //           "https://example.com/images/leetcode1.png",
  //           "https://example.com/images/leetcode2.png",
  //         ],
  //         link: "https://leetcode.com/your-profile",
  //       },
  //     },
  //     {
  //       point: "Ranked among top 100 in college",
  //       article: {
  //         heading: "Achieving Top 100 Rank",
  //         subheadings: [
  //           {
  //             title: "Consistency",
  //             text: "Daily practice led to steady progress and competitive edge.",
  //           },
  //           {
  //             title: "Strategy",
  //             text: "Focused on weak topics and improved time complexity handling.",
  //           },
  //         ],
  //         images: ["https://example.com/images/ranking1.png"],
  //         link: "https://college-leaderboard.com",
  //       },
  //     },
  //   ],
  // },

  // certificates
  {
    icon: <FaCertificate className="text-purple-400 text-2xl" />,
    title: "Certifications",
    points: [
      {
        point: "Certified as Postman API Fundamentals Student Expert ",
        article: {
          heading: "Certified as Postman API Fundamentals Student Expert ",
          subheadings: [
            {
              title: "About this Certificate",
              text: "This certificate represents a foundational understanding of Postman API concepts, tools, and workflows. It demonstrates the ability to navigate Postman’s interface, send API requests, and interpret responses, making it a solid starting point for API testing and integration skills.",
            },
            {
              title: "How I earned it",
              text: "I completed the Postman API Fundamentals training by following structured modules and hands-on exercises. Through consistent practice in building requests, organizing collections, and using environment variables, I gained confidence in working with RESTful APIs efficiently.",
            },
            {
              title: "What I learn in this",
              text: "I learned how to create and send different types of API requests, manage authentication, work with variables, and write basic test scripts in Postman. Additionally, I gained an understanding of API documentation, collaboration features, and best practices for effective API testing.",
            },
          ],
          images: [postCert],
          link: "https://badgr.com/public/assertions/PXvbuo1TTkec7By5lmJyPA?identity__email=surajsinghch2055%40gmail.com",
        },
      },
    ],
  },

  //open source
  {
    icon: <FaStar className="text-purple-400 text-2xl" />,
    title: "Open Source",
    points: [
      {
        point: "Contriubute on FreeCodeCamp Dev Docs",
        article: {
          heading: "Work as finding issues on Dev Docs for freeCodeCamp",
          subheadings: [
            {
              title: "Intro of FreeCodeCamp",
              text: "FreeCodeCamp is a popular organization in coding feild which provide free education related content for Coding People and they do various things to help people.",
            },
            {
              title: "What is my role here: ",
              text: "Here I try to understand their runing project idea of Dev Dcos this is a website where you can get easily docs of all the tech on which you work. So here I try to find all the issues in this project and report them about it through github. This is completely from my side as a open source contributer I did.",
            },
            {
              title: "What I learn: ",
              text: `By doing this I learn what could be the possible issues in a real time project can get in his intial state, how to read a codebase where multiple developers contribuiting together, etc.`,
            },
          ],
          images: [ossDev],
          link: "https://github.com/freeCodeCamp/devdocs/pulls",
        },
      },
    ],
  },

  // leadership
  {
    icon: <FaTrophy className="text-purple-400 text-2xl" />,
    title: "Leadership",
    points: [
      {
        point: "Lead a team at college for collage major project.",
        article: {
          heading: "Lead a team at college for collage major project.",
          subheadings: [
            {
              title: "Intro of Project: ",
              text: "GPIMS (Government Polytechnic Inventory Management System) is a comprehensive, web-based inventory management platform developed for Government Polytechnic Dehradun. It is designed to streamline how the institute tracks, manages, and regulates its wide range of assets including equipment, consumables, and lab resources across different departments and branches.",
            },
            {
              title: "My Role as Leader: ",
              text: "As a leader of this major project we complete our task as plan so that we can complete whole project before deadline, teammates have different ideas over same thing so no confict occur between tearmmates I handle it very efficiently, I ensure all the work not become load for a single person in this project, and also I work as a backend developer in this project.",
            },
          ],
          images: [gpimsLead],
          link: "https://gpmis.infy.uk",
        },
      },
    ],
  },
];

export default function Achievements({ isDarkMode }) {
  return (
    <section className="pt-8 pb-10 px-4 ">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
          Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievementData.map((data, index) => (
            <div key={index} className="w-full">
              <AchievementCard
                icon={data.icon}
                title={data.title}
                points={data.points}
                isDarkMode={isDarkMode}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
