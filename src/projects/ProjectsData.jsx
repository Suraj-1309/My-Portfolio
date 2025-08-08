// ProjectsData.jsx
import { SiC } from "react-icons/si";
import img from "./image.png";

const projectData = [
  {
    id: "project-1",
    svg: <SiC size={40} />,
    mainPhoto: img, // Make sure this path is public or imported
    heading: "CodeVamp Online Coding Platform",
    headingText:
      "A comprehensive coding platform supporting multiple languages with real-time compilation and execution.",
    technologyUsed: ["Python", "MongoDB", "Flask", "React", "Docker"],
    keyFeatures: [
      "Code editor with syntax highlighting",
      "Real-time execution and leaderboard",
    ],
    challenges: ["Containerizing with Docker", "Real-time collaboration"],
    achievements: [
      "Used by 1,000+ developers",
      "99.9% uptime with socket-based execution",
    ],
    images: [
      "/assets/project1/screenshot1.jpg",
      "/assets/project1/screenshot2.jpg",
    ],
    sourceCodeLink: "https://github.com/yourname/codevamp",
    projectViewLink: "https://yourdomain.com/codevamp",
  },
];

export default projectData;
