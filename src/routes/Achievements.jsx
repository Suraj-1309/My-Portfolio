import React from "react";
import AchievementCard from "../achievements/AchievementCard";
import { FaCode, FaCertificate, FaStar, FaTrophy } from "react-icons/fa";

const achievementData = [
  {
    icon: <FaCode className="text-purple-400 text-2xl" />,
    title: "Competitive Coding",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCode",
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
          link: "https://leetcode.com/your-profile",
        },
      },
      {
        point: "Ranked among top 100 in college",
        article: {
          heading: "Achieving Top 100 Rank",
          subheadings: [
            {
              title: "Consistency",
              text: "Daily practice led to steady progress and competitive edge.",
            },
            {
              title: "Strategy",
              text: "Focused on weak topics and improved time complexity handling.",
            },
          ],
          images: ["https://example.com/images/ranking1.png"],
          link: "https://college-leaderboard.com",
        },
      },
    ],
  },
  {
    icon: <FaCertificate className="text-purple-400 text-2xl" />,
    title: "Certifications",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCode",
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
          link: "https://leetcode.com/your-profile",
        },
      },
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCode",
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
          link: "https://leetcode.com/your-profile",
        },
      },
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCode",
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
          link: "https://leetcode.com/your-profile",
        },
      },
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCode",
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
          link: "https://leetcode.com/your-profile",
        },
      },
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCode",
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
          link: "https://leetcode.com/your-profile",
        },
      },
      {
        point: "Ranked among top 100 in college",
        article: {
          heading: "Achieving Top 100 Rank",
          subheadings: [
            {
              title: "Consistency",
              text: "Daily practice led to steady progress and competitive edge.",
            },
            {
              title: "Strategy",
              text: "Focused on weak topics and improved time complexity handling.",
            },
          ],
          images: ["https://example.com/images/ranking1.png"],
          link: "https://college-leaderboard.com",
        },
      },
    ],
  },
  {
    icon: <FaStar className="text-purple-400 text-2xl" />,
    title: "Open Source",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCode",
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
          link: "https://leetcode.com/your-profile",
        },
      },
      {
        point: "Ranked among top 100 in college",
        article: {
          heading: "Achieving Top 100 Rank",
          subheadings: [
            {
              title: "Consistency",
              text: "Daily practice led to steady progress and competitive edge.",
            },
            {
              title: "Strategy",
              text: "Focused on weak topics and improved time complexity handling.",
            },
          ],
          images: ["https://example.com/images/ranking1.png"],
          link: "https://college-leaderboard.com",
        },
      },
    ],
  },
  {
    icon: <FaTrophy className="text-purple-400 text-2xl" />,
    title: "Leadership",
    points: [
      {
        point: "Solved 600+ challenges on LeetCode",
        article: {
          heading: "Mastering LeetCode",
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
          link: "https://leetcode.com/your-profile",
        },
      },
      {
        point: "Ranked among top 100 in college",
        article: {
          heading: "Achieving Top 100 Rank",
          subheadings: [
            {
              title: "Consistency",
              text: "Daily practice led to steady progress and competitive edge.",
            },
            {
              title: "Strategy",
              text: "Focused on weak topics and improved time complexity handling.",
            },
          ],
          images: ["https://example.com/images/ranking1.png"],
          link: "https://college-leaderboard.com",
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
