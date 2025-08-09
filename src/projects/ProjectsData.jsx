// ProjectsData.jsx
import { MdScreenshotMonitor } from "react-icons/md";
import GpimsHomePage from "../selectedwork/selected_pic/gpims_homepage.webp";
import GpimsDiagram from "../selectedwork/selected_pic/gpims_diagram.webp";
import Gpims1 from "../selectedwork/selected_pic/gpims1.webp";
import Gpims2 from "../selectedwork/selected_pic/gpims2.webp";

import OneHome from "../selectedwork/selected_pic/one_piece_homepage.webp";
import One1 from "../selectedwork/selected_pic/one_piece1.webp";
import One2 from "../selectedwork/selected_pic/one_piece2.webp";

import PickHome from "../selectedwork/selected_pic/pick_manga_homepage.webp";
import Pick1 from "../selectedwork/selected_pic/pick_manga1.webp";
import Pick2 from "../selectedwork/selected_pic/pick_manga2.webp";
import Pick3 from "../selectedwork/selected_pic/pick_manga3.webp";

const projectData = [
  {
    id: "gpims",
    svg: <MdScreenshotMonitor size={40} />,
    mainPhoto: GpimsHomePage, // Make sure this path is public or imported
    heading: "GPIMS - Inventory System",
    headingText:
      "A role‑based inventory management system built for Government Polytechnic Dehradun. An initiative to modernize and optimize the resource management of technical educational institutes.",
    technologyUsed: [
      "PHP",
      "MySQL",
      "Git",
      "XAMPP",
      "Javascript",
      "JQuery",
      "CSS",
      "HTML",
      "Bootstrap",
    ],
    keyFeatures: [
      "Centralized item and inventory tracking",
      "Role-based login and authorization",
      "Department-wise stock management",
      "Report generation and analytics",
      "Real-time updates and usage logs",
      "Request, approval, and transfer system",
      "Easy-to-use and responsive interface",
      "Real‑time stock updates",
      "Audit trail of all inventory transactions",
      "Responsive UI built with Bootstrap",
      "Secure authentication and session management",
    ],
    challenges: [
      "Managing Data Dynamically for each use.",
      "Showing Updates to each user in real time.",
      "Maintaing whole data consistently so no data get lost.",
      "Make webstie lite weighted so that load fast and easly.",
    ],
    achievements: [
      "Created as major project for my College.",
      "Used by Best Polytechnic of Uttarakhand, India",
      "Lead a team of developers to work together.",
      "Got Highest marks in major project in college.",
    ],
    images: [GpimsHomePage, GpimsDiagram, Gpims1, Gpims2],
    sourceCodeLink: "https://github.com/Suraj-1309/GPIMS",
    projectViewLink: "https://gpmis.infy.uk/",
  },

  {
    id: "pickmanga",
    svg: <MdScreenshotMonitor size={40} />,
    mainPhoto: PickHome, // Make sure this path is public or imported
    heading: "Pick Manga",
    headingText:
      "Pick Manga is a dynamic and responsive website with high animation to give one short manga suggestions.",
    technologyUsed: ["JavaScript", "CSS", "HTML", "Git"],
    keyFeatures: [
      "Suggest Most Popular and best one short manga.",
      "Created by Base tech of Frontend.",
    ],
    challenges: [
      "Maintaing Animation on event occurence on both mobile and laptop",
      "Used only pure CSS to build this website",
    ],
    achievements: [
      "Learn how much we can extend CSS",
      "Learn Aniimation Using CSS for webdev",
    ],
    images: [PickHome, Pick1, Pick2, Pick3],
    sourceCodeLink:
      "https://github.com/Suraj-1309/My-web-dev-pages/tree/main/manga_review",
    projectViewLink:
      "https://suraj-1309.github.io/My-web-dev-pages/manga_review/index.html",
  },

  {
    id: "onepiecedoc",
    svg: <MdScreenshotMonitor size={40} />,
    mainPhoto: OneHome, // Make sure this path is public or imported
    heading: "Once Piece Doc",
    headingText:
      "This is an engaging and visually captivating web-based project dedicated to the beloved characters of the anime 'One Piece.' Dive into the world of pirates, explore character profiles, and enjoy an immersive experience with background music and interactive elements.",
    technologyUsed: ["JavaScript", "CSS", "HTML", "BootStrap"],
    keyFeatures: [
      "Interactive Character Card: Explore detailed profiles of your favorite One Piece characters, including Monkey D. Luffy, Roronoa Zoro, and more.",
      "Background Music: Enjoy the ambiance with a looping background track that sets the mood for your adventure.",
      "Responsive Design: The site is fully responsive and looks great on any device, from desktops to mobile phones.",
      "Animated Effects: Experience a dynamic and engaging interface with animations like hover effects and a blood-splat animation.",
      "Custom Fonts: The site uses a special 'Japan Wave' font to enhance the overall theme and feel.",
    ],
    challenges: ["First Website I deploy", "First Time work on Css and HTML"],
    achievements: [
      "Learn how HTML and CSS work.",
      "Learn how to create Webpages. ",
    ],
    images: [OneHome, One1, One2],
    sourceCodeLink: "https://github.com/Suraj-1309/one-piece-doc",
    projectViewLink: "https://suraj-1309.github.io/one-piece-doc/",
  },
];

export default projectData;
